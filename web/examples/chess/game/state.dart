part of game;

/// This is a chess board at a given state.
class State {
  static final int Normal    = 0; /// Indicates the game condition is in no special condition.
  static final int Check     = 1; /// Indicates the game condition is in check for the current player.
  static final int Checkmate = 2; /// Indicates the game condition has reached checkmate.
  static final int Stalemate = 3; /// Indicates the game condition has reached stalemate.

  /// The tile values for all of the tiles on a chess board.
  List<int> _data;

  /// The next state after this state or nil if there is none.
  /// This next state is usually set to be used for redo and
  /// is overwrote when a movement is applied.
  State next;

  /// The previous state before this state or nil if there is none.
  /// This previous state is usually set to be used for undo.
  State prev;

  /// Creates a new state.
  State() {
    int empty = TileValue.Empty.value;
    this._data = new List<int>.generate(64, (_) => empty, growable: false);
    this.next = null;
    this.prev = null;
  }

  /// Creates a new state which is set to the initial chess board state.
  factory State.initial() {
    //    1  2  3  4  5  6  7  8  <- Column
    // 1 |R0|H0|B0|K0|Q0|B1|H1|R1| <- Black
    // 2 |P0|P1|P2|P3|P4|P5|P6|P7| <- Black
    // 3 |  |  |  |  |  |  |  |  |
    // 4 |  |  |  |  |  |  |  |  |
    // 5 |  |  |  |  |  |  |  |  |
    // 6 |  |  |  |  |  |  |  |  |
    // 7 |P0|P1|P2|P3|P4|P5|P6|P7| <- White
    // 8 |R0|H0|B0|K0|Q0|B1|H1|R1| <- White
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
          state._data[index] = tile.value;
        }
      }
    }

    // Set any counts which haven't been set yet.
    for (int i = 0; i < 64; ++i) {
      TileValue tile = new TileValue(state._data[i]);
      if ((!tile.empty) && tile.count.empty) {
        for (int count = 1; count < 64; ++count) {
          TileValue check = tile|new TileValue(count);
          if (!(used[check.item.value] ?? false)) {
            used[check.item.value] = true;
            state._data[i] = check.value;
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

  /// Gets the tile value at the given index.
  TileValue _dataAt(int index) => new TileValue(this._data[index]);
  
  /// Gets the tile value at the given location.
  TileValue getValue(Location loc) {
    if (!loc.onBoard) return TileValue.OOB;
    return this._dataAt(loc.index);
  }

  /// Sets the tile value to the given value at the given location.
  bool setValue(Location loc, TileValue value) {
    if (!loc.onBoard) return false;
    this._data[loc.index] = value.value;
    return true;
  }

  /// Finds the lovation of the given value on the board.
  /// The movement flag is ignored in the values.
  Location findItem(TileValue value) {
    TileValue item = value.item;
    for (int i = 0; i < this._data.length; ++i) {
      TileValue other = this._dataAt(i).item;
      if (other == item) return new Location.fromIndex(i);
    }
    return new Location(0, 0);
  }

  /// Applies the given movement to the current state.
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

  /// Determines the board condition for the given color.
  int condition(bool white) {
    // TODO: Determine Stalemate
    if (this.isChecked(white)) {
      if (!hasAnyMovements(white)) {
        return Checkmate;
      }
      return Check;
    }
    return Normal;
  }

  /// Determines if the king of the given color could be taken by the opponent, putting it in check.
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

  /// Determines if the given location has any of the given values in the given color.
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

  /// Determines if the given location is off the board or not empty.
  bool _doneCheckingValues(Location loc) =>
    !(loc.onBoard && this.getValue(loc).empty);

  /// Gets all the possible movements for the given color.
  /// If a list of movements is provided, that list is added to.
  List<Movement> getAllMovements(bool white, [List<Movement> movers = null]) {
    movers ??= new List<Movement>();
    for (int i = 0; i < 64; ++i) {
      TileValue value = this._dataAt(i);
      if (!value.empty && value.white == white)
        this.getMovements(new Location.fromIndex(i), movers);
    };
    return movers;
  }

  /// Gets the movement for the given location.
  /// If a list of movements is provided, that list is added to.
  List<Movement> getMovements(Location loc, [List<Movement> movers = null]) {
    movers ??= new List<Movement>();
    this.foreachMovements(movers.add, loc);
    return movers;
  }

  /// Determines if the given color has any movements.
  bool hasAnyMovements(bool white) {
    for (int i = 0; i < 64; ++i) {
      TileValue value = this._dataAt(i);
      if (!value.empty && value.white == white) {
        if (this.hasMovements(new Location.fromIndex(i))) return true;
      }
    }
    return false;
  }

  /// Determines if the given location has any movements.
  bool hasMovements(Location loc) {
    bool hadMovement = false;
    this.foreachMovements((Movement move) { hadMovement = true; }, loc);
    return hadMovement;
  }

  /// Determines if the given movement is a valid possible move on this board.
  bool isValidMovement(Movement move) {
    if (move == null) return false;
    bool movementFound = false;
    this.foreachMovements((Movement other) {
      if (movementFound) return;
      if ((other.source == move.source) &&
          (other.destination == move.destination) &&
          (other.otherSource == move.otherSource) &&
          (other.otherDestination == move.otherDestination))
        movementFound = true;
    }, move.source);
    return movementFound;
  }

  /// Calls back any possible movements via the given handler for the given location.
  void foreachMovements(MovementCallback hndl, Location loc) {
    if (!loc.onBoard) return;
    TileValue value = this.getValue(loc);

    // Prevent any movements from being suggested which will put current player into check.
    MovementCallback filtered = (Movement move) {
      State testState = this.copy();
      testState.applyMovement(move);
      if (!testState.isChecked(value.white)) hndl(move);
    };
  
    TileValue piece = value.piece;
    if      (piece == TileValue.Pawn)   this._pawnMovement(  filtered, loc);
    else if (piece == TileValue.Rook)   this._rookMovement(  filtered, loc);
    else if (piece == TileValue.Knight) this._knightMovement(filtered, loc);
    else if (piece == TileValue.Bishop) this._bishopMovement(filtered, loc);
    else if (piece == TileValue.Queen)  this._queenMovement( filtered, loc);
    else if (piece == TileValue.King)   this._kingMovement(  filtered, loc);
  }

  /// Checks if the given movement is possible for move or take.
  /// If the movement is possible, it will be returned via the given handler.
  /// The given source is the location of the piece to check and the given
  /// delta row and delta column gets the destination location of the movement.
  /// Returns false if this was a movement, true if off board or a non empty tile.
  bool _movement(MovementCallback hndl, Location source, int deltaRow, int deltaColumn) {
      Location dest = source.offset(deltaRow, deltaColumn);
      if (!dest.onBoard) return true;
      TileValue srcValue = this.getValue(source);
      TileValue destValue = this.getValue(dest);

      if (destValue.empty) {
        String desc = "${srcValue.pieceName} move to $dest";
        hndl(new Movement(desc, source, dest));
        return false;
      }
      
      if (destValue.opponent(srcValue.white)) {
        String desc = "${srcValue.pieceName} take ${destValue.pieceName} at $dest";
        hndl(new Movement(desc, source, dest, dest));
      }
      
      return true;
  }

  /// Checks for a given linear path has any possible moves or takes.
  /// If movements are possible, they will be returned via the given handler.
  /// The source is the starting location of the path and the given
  /// delta row and delta column gets the direction of the path.
  void _movementPath(MovementCallback hndl, Location source, int deltaRow, int deltaColumn) {
    for (int i = 1; i < 8; ++i) {
      if(this._movement(hndl, source, deltaRow*i, deltaColumn*i)) return;
    }
  }

  /// Gets the movement for the pawn at the given location.
  /// If movements are possible, they will be returned via the given handler.
  /// Pawns have the following movement constraints:
  /// - Forward is based on color of the pawn
  /// - Move straight forwards one square if vacant
  /// - If first move then can move forwards two squares if both are vacant
  /// - If there is an opponent forward diagonally from the pawn,
  ///   the pawn can capture that opponent
  /// - If there is an opponent pawn vertically from this pawn,
  ///   and on the opponent pawn's last move it moved two tiles as a first move,
  ///   then this pawn can move diagonally while capturing the opponents virtical pawn
  /// - See https://en.wikipedia.org/wiki/Pawn_(chess)
  void _pawnMovement(MovementCallback hndl, Location loc) {
    TileValue value = this.getValue(loc);
    final bool white = value.white;
    final bool moved = value.moved;
    final int dir = white? -1: 1;

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

  /// Gets the movement for the rook at the given location.
  /// If movements are possible, they will be returned via the given handler.
  /// Rooks have the following movement constraints:
  /// - They move horizontal or virtical any number of tiles until they reach a non-empty tile.
  ///   If that non-empty tile is an opponent that opponent can be taken.
  /// - If the rook hasn't been moved and the king of the same color hasn't been moved,
  ///   then check if there are only empty tiles between them. If the tiles are clear,
  ///   then the king and rook can both move as a castle movement.
  /// - See https://en.wikipedia.org/wiki/Rook_(chess)
  void _rookMovement(MovementCallback hndl, Location loc) {
    TileValue value = this.getValue(loc);
    final bool white = value.white;
    final bool moved = value.moved;

    this._movementPath(hndl, loc,  0,  1);
    this._movementPath(hndl, loc,  0, -1);
    this._movementPath(hndl, loc,  1,  0);
    this._movementPath(hndl, loc, -1,  0);

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
  
  /// Gets the movement for the knight at the given location.
  /// If movements are possible, they will be returned via the given handler.
  /// Knights have the following movement constraints:
  /// - They can move two tiles vertically or horizontally and one tiles perpendicularly.
  ///   If the location is an opponent that opponent can be taken.
  /// - See https://en.wikipedia.org/wiki/Knight_(chess)
  void _knightMovement(MovementCallback hndl, Location loc) {
    this._movement(hndl, loc,  2,  1);
    this._movement(hndl, loc,  2, -1);
    this._movement(hndl, loc,  1,  2);
    this._movement(hndl, loc, -1,  2);
    this._movement(hndl, loc, -2,  1);
    this._movement(hndl, loc, -2, -1);
    this._movement(hndl, loc,  1, -2);
    this._movement(hndl, loc, -1, -2);
  }
  
  /// Gets the movement for the bishop at the given location.
  /// If movements are possible, they will be returned via the given handler.
  /// Bishops have the following movement constraints:
  /// - They move diagonally any number of tiles until they reach a non-empty tile.
  ///   If that non-empty tile is an opponent that opponent can be taken.
  /// - See https://en.wikipedia.org/wiki/Bishop_(chess)
  void _bishopMovement(MovementCallback hndl, Location loc) {
    this._movementPath(hndl, loc,  1,  1);
    this._movementPath(hndl, loc,  1, -1);
    this._movementPath(hndl, loc, -1, -1);
    this._movementPath(hndl, loc, -1,  1);
  }
  
  /// Gets the movement for the queen at the given location.
  /// If movements are possible, they will be returned via the given handler.
  /// Queen have the following movement constraints:
  /// - They move diagonally, horizontally, or vertically any number of tiles until they
  ///   reach a non-empty tile. If that non-empty tile is an opponent that opponent can be taken.
  /// - See https://en.wikipedia.org/wiki/Queen_(chess)
  void _queenMovement(MovementCallback hndl, Location loc) {
    this._movementPath(hndl, loc,  1,  1);
    this._movementPath(hndl, loc,  1,  0);
    this._movementPath(hndl, loc,  1, -1);
    this._movementPath(hndl, loc,  0, -1);
    this._movementPath(hndl, loc, -1, -1);
    this._movementPath(hndl, loc, -1,  0);
    this._movementPath(hndl, loc, -1,  1);
    this._movementPath(hndl, loc,  0,  1);
  }
  
  /// Gets the movement for the king at the given location.
  /// If movements are possible, they will be returned via the given handler.
  /// King have the following movement constraints:
  /// - They move diagonally, horizontally, or vertically only one tile.
  ///   If the tile is an opponent that opponent can be taken.
  /// - If the king hasn't moved and any of the rooks of the same color haven't moved,
  ///   then check if there are only empty tiles between them. If the tiles are clear,
  ///   then the king and rook can both move as a castle movement.
  /// - See https://en.wikipedia.org/wiki/King_(chess)
  void _kingMovement(MovementCallback hndl, Location loc) {
    TileValue value = this.getValue(loc);
    final bool moved = value.moved;

    this._movement(hndl, loc,  1,  1);
    this._movement(hndl, loc,  1,  0);
    this._movement(hndl, loc,  1, -1);
    this._movement(hndl, loc,  0, -1);
    this._movement(hndl, loc, -1, -1);
    this._movement(hndl, loc, -1,  0);
    this._movement(hndl, loc, -1,  1);
    this._movement(hndl, loc,  0,  1);
    
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

  /// Gets the string for this current state.
  /// `showLabels` indicates that the row and column numbers should be outputted.
  /// `showCount` indicates that the pieces should be outputted with the pieces' count.
  @override
  String toString({bool showLabels: true, bool showCount: false}) {
    bool hasMoved = false;
    for (int i = 0; i < 64; ++i) {
      if (this._dataAt(i).moved) {
        hasMoved = true;
        break;
      }
    }
    
    StringGrid grid = new StringGrid();
    grid.showLabels = showLabels;
    for (int r = 0; r < 8; ++r) {
      for (int c = 0; c < 8; ++c) {
        int i = new Location(r+1, c+1).index;
        TileValue value = this._dataAt(i);
        String str = value.toString(showMoved: hasMoved, showCount: showCount);
        grid.setCell(r, c, str);
      }
    }
    return grid.toString();
  }
}
