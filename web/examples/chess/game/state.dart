part of game;

class State {
  static final int None      = 0;
  static final int Check     = 1;
  static final int Checkmate = 2;
  static final int Stalemate = 3;

  List<TileValue> _data;
  State next;
  State prev;

  State() {
    this._data = new List<TileValue>(64);
    this._data.fillRange(0, 64, TileValue.Empty);
    this.next = null;
    this.prev = null;
  }

  factory State.initial() {
    //    a  b  c  d  e  f  g  h
    //    1  2  3  4  5  6  7  8 < Column
    // 1 |R0|H0|B0|K0|Q0|B1|H1|R1| Black
    // 2 |P0|P1|P2|P3|P4|P5|P6|P7|
    // 3 |  |  |  |  |  |  |  |  |
    // 4 |  |  |  |  |  |  |  |  |
    // 5 |  |  |  |  |  |  |  |  |
    // 6 |  |  |  |  |  |  |  |  |
    // 7 |P0|P1|P2|P3|P4|P5|P6|P7|
    // 8 |R0|H0|B0|K0|Q0|B1|H1|R1| White
    State state = new State();

    state.setValue(new Location(1, 1), new TileValue.rook(false, 1));
    state.setValue(new Location(1, 2), new TileValue.knight(false, 1));
    state.setValue(new Location(1, 3), new TileValue.bishop(false, 1));
    state.setValue(new Location(1, 4), new TileValue.king(false));
    state.setValue(new Location(1, 5), new TileValue.queen(false, 1));
    state.setValue(new Location(1, 6), new TileValue.bishop(false, 2));
    state.setValue(new Location(1, 7), new TileValue.knight(false, 2));
    state.setValue(new Location(1, 8), new TileValue.rook(false, 2));

    state.setValue(new Location(2, 1), new TileValue.pawn(false, 1));
    state.setValue(new Location(2, 2), new TileValue.pawn(false, 2));
    state.setValue(new Location(2, 3), new TileValue.pawn(false, 3));
    state.setValue(new Location(2, 4), new TileValue.pawn(false, 4));
    state.setValue(new Location(2, 5), new TileValue.pawn(false, 5));
    state.setValue(new Location(2, 6), new TileValue.pawn(false, 6));
    state.setValue(new Location(2, 7), new TileValue.pawn(false, 7));
    state.setValue(new Location(2, 8), new TileValue.pawn(false, 8));

    state.setValue(new Location(7, 1), new TileValue.pawn(true, 1));
    state.setValue(new Location(7, 2), new TileValue.pawn(true, 2));
    state.setValue(new Location(7, 3), new TileValue.pawn(true, 3));
    state.setValue(new Location(7, 4), new TileValue.pawn(true, 4));
    state.setValue(new Location(7, 5), new TileValue.pawn(true, 5));
    state.setValue(new Location(7, 6), new TileValue.pawn(true, 6));
    state.setValue(new Location(7, 7), new TileValue.pawn(true, 7));
    state.setValue(new Location(7, 8), new TileValue.pawn(true, 8));

    state.setValue(new Location(8, 1), new TileValue.rook(true, 1));
    state.setValue(new Location(8, 2), new TileValue.knight(true, 1));
    state.setValue(new Location(8, 3), new TileValue.bishop(true, 1));
    state.setValue(new Location(8, 4), new TileValue.king(true));
    state.setValue(new Location(8, 5), new TileValue.queen(true, 1));
    state.setValue(new Location(8, 6), new TileValue.bishop(true, 2));
    state.setValue(new Location(8, 7), new TileValue.knight(true, 2));
    state.setValue(new Location(8, 8), new TileValue.rook(true, 2));

    return state;
  }

  /// This will load a state from a string repressenting the board.
  /// This string is the same as `toString(false)` of a state.
  /// This will return false if there aren't 128 color peice letter pairs.
  factory State.parse(List<String> data) {
    State state = new State();
    Map<int, bool> used = new Map<int, bool>();
    StringGrid grid = new StringGrid.parse(data);
    if ((grid.rows != 8) || (grid.columns != 8)) return null;

    // Parse the cells of the given data into tile values.
    for (int r = 0; r < 8; ++r) {
      for (int c = 0; c < 8; ++c) {
        String value = grid.getCell(r, c).trim();
        TileValue tile = new TileValue.parse(value);
        if (!tile.empty) {
          if (!tile.count.empty) used[tile.item.value] = true;
          int index = new Location(r+1, c+1).index;
          state._data[index] = tile;
        }
      }
    }

    // Set any counts which haven't been set yet.
    for (int i = 0; i < 64; ++i) {
      TileValue tile = state._data[i];
      if ((!tile.empty) && tile.count.empty) {
        for (int count = 1; count < 64; ++count) {
          TileValue check = tile|new TileValue(count);
          if (!(used[check.item.value] ?? false)) {
            used[check.item.value] = true;
            state._data[i] = check;
            break;
          }
        }
      }
    }
    

    return state;
  }

  /// This will copy the current state and return the copy.
  /// This will not modify previous or next states.
  State copy() {
    State state = new State();
    for (int i = 0; i < 64; ++i)
      state._data[i] = this._data[i];
    return state;
  }

  /// This will copy the current state and return the copy.
  /// This new copy will take the place of the next state in this state.
  /// The copy will have this state as it's previous state.
  State pushState() {
    State state = this.copy();
    state.prev = this;
    this.next = state;
    return state;
  }
  
  TileValue getValue(Location loc) {
    if (!loc.onBoard) return TileValue.OOB;
    return this._data[loc.index];
  }

  bool setValue(Location loc, TileValue value) {
    if (!loc.onBoard) return false;
    this._data[loc.index] = value;
    return true;
  }

  Location findItem(TileValue value) {
    TileValue item = value.item;
    for (int i = 0; i < this._data.length; ++i) {
      TileValue other = this._data[i].item;
      if (other == item) return new Location.fromIndex(i);
    }
    return new Location(0, 0);
  }

  void applyMovement(Movement move) {
    // Get both values before any piece has been moved.
    TileValue piece = this.getValue(move.source);
    TileValue other = null;
    if (move.otherSource != null) other = this.getValue(move.otherSource);

    // Clear out both locations.
    this.setValue(move.source, TileValue.Empty);
    if (other != null) this.setValue(move.otherSource, TileValue.Empty);

    // Apply value to both locations.
    this.setValue(move.destination, piece|TileValue.Moved);
    if ((other != null) && (move.otherDestination != null)) {
        this.setValue(move.otherDestination, other|TileValue.Moved);
      // else the that other piece was taken
    }
  }

  int condition(bool white) {
    // TODO: Determine Stalemate
    if (this.isChecked(white)) {
      if (!hasAnyMovements(white)) {
        return Checkmate;
      }
      return Check;
    }
    return None;
  }

  bool isChecked(bool white) {
    TileValue value = new TileValue.king(white);
    Location loc = this.findItem(value);
    if (!loc.onBoard) return false;

    // Check for pawns
    int pawnSide = white? -1: 1;
    if (this._hasValue(loc.offset(pawnSide,  1), !white, [TileValue.Pawn])) return true;
    if (this._hasValue(loc.offset(pawnSide, -1), !white, [TileValue.Pawn])) return true;

    // Check for knights
    if (this._hasValue(loc.offset( 2,  1), !white, [TileValue.Knight])) return true;
    if (this._hasValue(loc.offset( 2, -1), !white, [TileValue.Knight])) return true;
    if (this._hasValue(loc.offset( 1,  2), !white, [TileValue.Knight])) return true;
    if (this._hasValue(loc.offset(-1,  2), !white, [TileValue.Knight])) return true;
    if (this._hasValue(loc.offset(-2,  1), !white, [TileValue.Knight])) return true;
    if (this._hasValue(loc.offset(-2, -1), !white, [TileValue.Knight])) return true;
    if (this._hasValue(loc.offset( 1, -2), !white, [TileValue.Knight])) return true;
    if (this._hasValue(loc.offset(-1, -2), !white, [TileValue.Knight])) return true;

    // Check for queens, rooks, and bishop
    for (int i = 1; i < 8; ++i) {
      Location checkLoc = loc.offset(0, i);
      if (this._hasValue(checkLoc, !white, [TileValue.Rook, TileValue.Queen])) return true;
      if (this._doneCheckingValues(checkLoc)) break;
    }
    for (int i = 1; i < 8; ++i) {
      Location checkLoc = loc.offset(0, -i);
      if (this._hasValue(checkLoc, !white, [TileValue.Rook, TileValue.Queen])) return true;
      if (this._doneCheckingValues(checkLoc)) break;
    }
    for (int i = 1; i < 8; ++i) {
      Location checkLoc = loc.offset(i, 0);
      if (this._hasValue(checkLoc, !white, [TileValue.Rook, TileValue.Queen])) return true;
      if (this._doneCheckingValues(checkLoc)) break;
    }
    for (int i = 1; i < 8; ++i) {
      Location checkLoc = loc.offset(-i, 0);
      if (this._hasValue(checkLoc, !white, [TileValue.Rook, TileValue.Queen])) return true;
      if (this._doneCheckingValues(checkLoc)) break;
    }
    
    for (int i = 1; i < 8; ++i) {
      Location checkLoc = loc.offset(i, i);
      if (this._hasValue(checkLoc, !white, [TileValue.Bishop, TileValue.Queen])) return true;
      if (this._doneCheckingValues(checkLoc)) break;
    }
    for (int i = 1; i < 8; ++i) {
      Location checkLoc = loc.offset(i, -i);
      if (this._hasValue(checkLoc, !white, [TileValue.Bishop, TileValue.Queen])) return true;
      if (this._doneCheckingValues(checkLoc)) break;
    }
    for (int i = 1; i < 8; ++i) {
      Location checkLoc = loc.offset(-i, i);
      if (this._hasValue(checkLoc, !white, [TileValue.Bishop, TileValue.Queen])) return true;
      if (this._doneCheckingValues(checkLoc)) break;
    }
    for (int i = 1; i < 8; ++i) {
      Location checkLoc = loc.offset(-i, -i);
      if (this._hasValue(checkLoc, !white, [TileValue.Bishop, TileValue.Queen])) return true;
      if (this._doneCheckingValues(checkLoc)) break;
    }
    
    // Check for kings (to check that a king doesn't move into another kings space)
    if (this._hasValue(loc.offset( 1,  1), !white, [TileValue.King])) return true;
    if (this._hasValue(loc.offset( 1,  0), !white, [TileValue.King])) return true;
    if (this._hasValue(loc.offset( 1, -1), !white, [TileValue.King])) return true;
    if (this._hasValue(loc.offset( 0, -1), !white, [TileValue.King])) return true;
    if (this._hasValue(loc.offset(-1, -1), !white, [TileValue.King])) return true;
    if (this._hasValue(loc.offset(-1,  0), !white, [TileValue.King])) return true;
    if (this._hasValue(loc.offset(-1,  1), !white, [TileValue.King])) return true;
    if (this._hasValue(loc.offset( 0,  1), !white, [TileValue.King])) return true;

    return false;
  }

  bool _hasValue(Location loc, bool white, List<TileValue> peices) {
    if (loc.onBoard) {
      TileValue value = this.getValue(loc);
      if (value.white == white) {
        TileValue peice = value.piece;
        for (int i = peices.length - 1; i >= 0; --i) {
          if (peice == peices[i].piece) return true;
        }
      }
    }
    return false;
  }

  bool _doneCheckingValues(Location loc) =>
    !(loc.onBoard && this.getValue(loc).empty);

  List<Movement> getAllMovements(bool white, [List<Movement> movers = null]) {
    movers ??= new List<Movement>();
    for (int i = 0; i < 64; ++i) {
      TileValue value = this._data[i];
      if (!value.empty && value.white == white)
        this.getMovementsForPiece(value, movers);
    };
    return movers;
  }

  List<Movement> getMovementsForPiece(TileValue value, [List<Movement> movers = null]) {
    movers ??= new List<Movement>();
    this.foreachMovementsForPiece(movers.add, value);
    return movers;
  }
  
  bool hasAnyMovements(bool white) {
    for (int i = 0; i < 64; ++i) {
      TileValue value = this._data[i];
      if (!value.empty && value.white == white) {
        if (this.hasPieceMovements(value)) return true;
      }
    }
    return false;
  }

  bool hasPieceMovements(TileValue value) {
    bool hadMovement = false;
    this.foreachMovementsForPiece((Movement move) { hadMovement = true; }, value);
    return hadMovement;
  }

  bool isValidMovement(Movement move) {
    if (move == null) return false;
    TileValue piece = this.getValue(move.source);
    bool movementFound = false;
    this.foreachMovementsForPiece((Movement other) {
      if (movementFound) return;
      if ((other.source == move.source) &&
          (other.destination == move.destination) &&
          (other.otherSource == move.otherSource) &&
          (other.otherDestination == move.otherDestination))
        movementFound = true;
    }, piece);
    return movementFound;
  }

  void foreachMovementsForPiece(MovementCallback hndl, TileValue value) {
    Location loc = this.findItem(value);
    value = this.getValue(loc);
    if (!loc.onBoard) return;
    bool white = value.white;
    bool moved = value.moved;

    // Prevent any movements from being suggested which will put current player into check.
    MovementCallback filtered = (Movement move) {
      State testState = this.copy();
      testState.applyMovement(move);
      if (!testState.isChecked(white)) hndl(move);
    };
  
    TileValue piece = value.piece;
    if      (piece == TileValue.Pawn)   this._pawnMovement(  filtered, white, moved, loc);
    else if (piece == TileValue.Rook)   this._rookMovement(  filtered, white, moved, loc);
    else if (piece == TileValue.Knight) this._knightMovement(filtered, white, moved, loc);
    else if (piece == TileValue.Bishop) this._bishopMovement(filtered, white, moved, loc);
    else if (piece == TileValue.Queen)  this._queenMovement( filtered, white, moved, loc);
    else if (piece == TileValue.King)   this._kingMovement(  filtered, white, moved, loc);
  }
  
  bool _movement(MovementCallback hndl, bool white, Location source, int deltaRow, int deltaColumn) {
      Location dest = source.offset(deltaRow, deltaColumn);
      if (!dest.onBoard) return true;
      TileValue srcValue = this.getValue(source);
      TileValue destValue = this.getValue(dest);

      if (destValue.empty) {
        String desc = "${srcValue.pieceName} move to $dest";
        hndl(new Movement(desc, source, dest));
        return false;
      }
      
      if (destValue.opponent(white)) {
        String desc = "${srcValue.pieceName} take ${destValue.pieceName} at $dest";
        hndl(new Movement(desc, source, dest, dest));
      }
      
      return true;
  }

  void _movementPath(MovementCallback hndl, bool white, Location source, int deltaRow, int deltaColumn) {
    for (int i = 1; i < 8; ++i) {
      if(this._movement(hndl, white, source, deltaRow*i, deltaColumn*i)) return;
    }
  }

  // Pawns are very complex:
  // - Forward is based on color of the pawn
  // - Move straight forwards one square if vacant
  // - If first move then can move forwards two squares if both are vacant
  // - If there is an opponent forward diagonally from the pawn,
  //   the pawn can capture that opponent
  // - If there is an opponent pawn vertically from this pawn,
  //   and on the opponent pawn's last move it moved two spaces as a first move,
  //   then this pawn can move diagonally while capturing the opponents virtical pawn
  void _pawnMovement(MovementCallback hndl, bool white, bool moved, Location loc) {
    int dir = white? -1: 1;

    // Check forward movement for vacancies
    Location dest = loc.offset(dir, 0);
    TileValue otherVal = this.getValue(dest);
    if (otherVal.empty) {
      String desc = "Pawn move to $dest";
      hndl(new Movement(desc, loc, dest));

      if (!moved) {
        dest = loc.offset(dir+dir, 0);
        otherVal = this.getValue(dest);
        if (otherVal.empty) {
          desc = "Pawn move to $dest";
          hndl(new Movement(desc, loc, dest));
        }
      }
    }

    // Check for opponents on the diagonalls
    dest = loc.offset(dir, -1);
    otherVal = this.getValue(dest);
    if ((!otherVal.outOfBounds) && otherVal.opponent(white)) {
      String desc = "Pawn take ${otherVal.pieceName} at $dest";
      hndl(new Movement(desc, loc, dest, dest));
    }

    dest = loc.offset(dir, 1);
    otherVal = this.getValue(dest);
    if ((!otherVal.outOfBounds) && otherVal.opponent(white)) {
      String desc = "Pawn take ${otherVal.pieceName} at $dest";
      hndl(new Movement(desc, loc, dest, dest));
    }

    // Check for en passent condition
    if ((this.prev != null) && (loc.row == (white? 4: 5))) {
      dest = loc.offset(dir, -1);
      if (dest.onBoard && this.getValue(dest).empty) {
        Location oppLoc = loc.offset(0, -1);
        otherVal = this.getValue(oppLoc);
        if (otherVal.opponent(white)) {
          TileValue lastVal = this.prev.getValue(oppLoc.offset(dir+dir, 0));
          if ((!lastVal.moved) && lastVal.sameItem(otherVal)) {
            String desc = "Pawn en passent ${otherVal.pieceName} at $dest";
            hndl(new Movement(desc, loc, dest, oppLoc));
          }
        }
      }

      dest = loc.offset(dir, 1);
      if (dest.onBoard && this.getValue(dest).empty) {
        Location oppLoc = loc.offset(0, 1);
        otherVal = this.getValue(oppLoc);
        if (otherVal.opponent(white)) {
          TileValue lastVal = this.prev.getValue(oppLoc.offset(dir+dir, 0));
          if ((!lastVal.moved) && lastVal.sameItem(otherVal)) {
            String desc = "Pawn en passent ${otherVal.pieceName} at $dest";
            hndl(new Movement(desc, loc, dest, oppLoc));
          }
        }
      }
    }
  }

  void _rookMovement(MovementCallback hndl, bool white, bool moved, Location loc) {
    this._movementPath(hndl, white, loc,  0,  1);
    this._movementPath(hndl, white, loc,  0, -1);
    this._movementPath(hndl, white, loc,  1,  0);
    this._movementPath(hndl, white, loc, -1,  0);

    // Check for castle condition
    if (!moved) {
      Location kingLoc = new Location(white? 8: 1, 4);
      TileValue kingVal = this.getValue(kingLoc);
      if ((kingVal.piece == TileValue.King) && !kingVal.moved) {
        bool allEmpty = true;
        int dir = (loc.column > kingLoc.column)? -1: 1;
        for (int c = loc.column + dir; c != kingLoc.column; c += dir) {
          if (!this.getValue(new Location(loc.row, c)).empty) {
            allEmpty = false;
            break;
          }
        }

        if (allEmpty) {
          String desc = "Rook castles with King";
          Location dest = new Location(kingLoc.row, kingLoc.column-dir-dir);
          Location otherDest = new Location(dest.row, dest.column+dir);
          hndl(new Movement(desc, loc, otherDest, kingLoc, dest));
        }
      }
    }
  }
  
  void _knightMovement(MovementCallback hndl, bool white, bool moved, Location loc) {
    this._movement(hndl, white, loc,  2,  1);
    this._movement(hndl, white, loc,  2, -1);
    this._movement(hndl, white, loc,  1,  2);
    this._movement(hndl, white, loc, -1,  2);
    this._movement(hndl, white, loc, -2,  1);
    this._movement(hndl, white, loc, -2, -1);
    this._movement(hndl, white, loc,  1, -2);
    this._movement(hndl, white, loc, -1, -2);
  }
  
  void _bishopMovement(MovementCallback hndl, bool white, bool moved, Location loc) {
    this._movementPath(hndl, white, loc,  1,  1);
    this._movementPath(hndl, white, loc,  1, -1);
    this._movementPath(hndl, white, loc, -1, -1);
    this._movementPath(hndl, white, loc, -1,  1);
  }
  
  void _queenMovement(MovementCallback hndl, bool white, bool moved, Location loc) {
    this._movementPath(hndl, white, loc,  1,  1);
    this._movementPath(hndl, white, loc,  1,  0);
    this._movementPath(hndl, white, loc,  1, -1);
    this._movementPath(hndl, white, loc,  0, -1);
    this._movementPath(hndl, white, loc, -1, -1);
    this._movementPath(hndl, white, loc, -1,  0);
    this._movementPath(hndl, white, loc, -1,  1);
    this._movementPath(hndl, white, loc,  0,  1);
  }
  
  void _kingMovement(MovementCallback hndl, bool white, bool moved, Location loc) {
    this._movement(hndl, white, loc,  1,  1);
    this._movement(hndl, white, loc,  1,  0);
    this._movement(hndl, white, loc,  1, -1);
    this._movement(hndl, white, loc,  0, -1);
    this._movement(hndl, white, loc, -1, -1);
    this._movement(hndl, white, loc, -1,  0);
    this._movement(hndl, white, loc, -1,  1);
    this._movement(hndl, white, loc,  0,  1);
    
    // Check for castle condition
    if (!moved) {
      for (int rookCol = 1; rookCol <= 8; rookCol += 7) {
        Location rookLoc = new Location(loc.row, rookCol);
        TileValue rookVal = this.getValue(rookLoc);
        if ((rookVal.piece == TileValue.Rook) && !rookVal.moved) {
          bool allEmpty = true;
          int dir = (loc.column > rookLoc.column)? -1: 1;
          for (int i = loc.column + dir; i != rookLoc.column; i += dir) {
            if (!this.getValue(new Location(loc.row, i)).empty) {
              allEmpty = false;
              break;
            }
          }

          if (allEmpty) {
            String desc = "King castles with Rook";
            Location dest = new Location(loc.row, loc.column+dir+dir);
            Location otherDest = new Location(dest.row, dest.column-dir);
            hndl(new Movement(desc, loc, dest, rookLoc, otherDest));
          }
        }
      }
    }
  }

  @override
  String toString({bool showLabels: true, bool showCount: false}) {
    bool hasMoved = false;
    for (int i = 0; i < 64; ++i) {
      if (this._data[i].moved) {
        hasMoved = true;
        break;
      }
    }
    
    StringGrid grid = new StringGrid();
    grid.showLabels = showLabels;
    for (int r = 0; r < 8; ++r) {
      for (int c = 0; c < 8; ++c) {
        int i = new Location(r+1, c+1).index;
        TileValue value = this._data[i];
        String str = value.toString(showMoved: hasMoved, showCount: showCount);
        grid.setCell(r, c, str);
      }
    }
    return grid.toString();
  }
}
