part of game;

class State {
  static final int None      = 0;
  static final int Check     = 1;
  static final int Checkmate = 2;
  static final int Stalemate = 3;

  List<TileValue> _data;
  State _next;
  State _prev;

  State() {
    this._data = new List<TileValue>(64);
    this._data.fillRange(0, 64, TileValue.Empty);
    this._next = null;
    this._prev = null;
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

    state.setValue(new Location(1, 1), new TileValue.rook(false, 0));
    state.setValue(new Location(1, 2), new TileValue.knight(false, 0));
    state.setValue(new Location(1, 3), new TileValue.bishop(false, 0));
    state.setValue(new Location(1, 4), new TileValue.king(false));
    state.setValue(new Location(1, 5), new TileValue.queen(false, 0));
    state.setValue(new Location(1, 6), new TileValue.bishop(false, 1));
    state.setValue(new Location(1, 7), new TileValue.knight(false, 1));
    state.setValue(new Location(1, 8), new TileValue.rook(false, 1));

    state.setValue(new Location(2, 1), new TileValue.pawn(false, 0));
    state.setValue(new Location(2, 2), new TileValue.pawn(false, 1));
    state.setValue(new Location(2, 3), new TileValue.pawn(false, 2));
    state.setValue(new Location(2, 4), new TileValue.pawn(false, 3));
    state.setValue(new Location(2, 5), new TileValue.pawn(false, 4));
    state.setValue(new Location(2, 6), new TileValue.pawn(false, 5));
    state.setValue(new Location(2, 7), new TileValue.pawn(false, 6));
    state.setValue(new Location(2, 8), new TileValue.pawn(false, 7));

    state.setValue(new Location(7, 1), new TileValue.pawn(true, 0));
    state.setValue(new Location(7, 2), new TileValue.pawn(true, 1));
    state.setValue(new Location(7, 3), new TileValue.pawn(true, 2));
    state.setValue(new Location(7, 4), new TileValue.pawn(true, 3));
    state.setValue(new Location(7, 5), new TileValue.pawn(true, 4));
    state.setValue(new Location(7, 6), new TileValue.pawn(true, 5));
    state.setValue(new Location(7, 7), new TileValue.pawn(true, 6));
    state.setValue(new Location(7, 8), new TileValue.pawn(true, 7));

    state.setValue(new Location(8, 1), new TileValue.rook(true, 0));
    state.setValue(new Location(8, 2), new TileValue.knight(true, 0));
    state.setValue(new Location(8, 3), new TileValue.bishop(true, 0));
    state.setValue(new Location(8, 4), new TileValue.king(true));
    state.setValue(new Location(8, 5), new TileValue.queen(true, 0));
    state.setValue(new Location(8, 6), new TileValue.bishop(true, 1));
    state.setValue(new Location(8, 7), new TileValue.knight(true, 1));
    state.setValue(new Location(8, 8), new TileValue.rook(true, 1));

    return state;
  }

  /// This will load a state from a string repressenting the board.
  /// This string is the same as `toString(false)` of a state.
  /// This will return false if there aren't 128 color peice letter pairs.
  factory State.parse(String data, {bool hasMoved: false}) {
    State state = new State();
    Map<TileValue, int> used = new Map<TileValue, int>();
    data = data.replaceAll("\n", "").replaceAll("|", "");

    int expLength = 128;
    if (hasMoved) expLength += 64;
    if (data.length != expLength) return null;
    int stride = (hasMoved)? 3: 2;

    for (int r = 1, i = 0; r <= 8; ++r) {
      for (int c = 1; c <= 8; ++c, i += stride) {
        TileValue value = new TileValue.parse(data.substring(i, i+stride));
        if (value != None) {
          TileValue base = value & (TileValue.Color|TileValue.Piece);
          int count = used[base] ?? 0;
          used[base] = count + 1;
          value |= new TileValue(count);

          int index = new Location(r, c).index;
          state._data[index] = value;
        }
      }
    }
    return state;
  }

  /// This will copy the current state and return the copy.
  /// This will not modify previous or next states.
  State copy() {
    State state = new State();
    state._data.addAll(this._data);
    return state;
  }

  /// This will copy the current state and return the copy.
  /// This new copy will take the place of the next state in this state.
  /// The copy will have this state as it's previous state.
  State pushState() {
    State state = this.copy();
    state._prev = this;
    this._next = state;
    return state;
  }
  
  State get next => this._next;

  State get prev => this._prev;
  
  TileValue getValue(Location loc) {
    if (!loc.onBoard) return TileValue.OOB;
    return this._data[loc.index];
  }

  bool setValue(Location loc, TileValue value) {
    if (!loc.onBoard) return false;
    this._data[loc.index] = value;
    return true;
  }

  Location findItem(TileValue item) {
    for (int i = 0; i < this._data.length; ++i) {
      TileValue value = this._data[i] & (TileValue.Piece|TileValue.Color|TileValue.Count);
      if (value == item) return new Location.fromIndex(i);
    }
    return new Location(0, 0);
  }

  /*
  int condition(bool white) {
    int kingIndex = indexOf(King | (white?White:Black));
    int kingRow   = this.rowForIndex(kingIndex);
    int kingCol   = this.columnForIndex(kingIndex);

  }*/

  List<Movement> getMovementsForPiece(TileValue value) {
    Location loc = this.findItem(value);
    bool white = value.white;
    bool moved = value.moved;
    List<Movement> movers = new List<Movement>();

    TileValue piece = value.piece;
    if      (piece == TileValue.Pawn)   movers = this._pawnMovement(  white, moved, loc);
    else if (piece == TileValue.Rook)   movers = this._rookMovement(  white, moved, loc);
    else if (piece == TileValue.Knight) movers = this._knightMovement(white, moved, loc);
    else if (piece == TileValue.Bishop) movers = this._bishopMovement(white, moved, loc);
    else if (piece == TileValue.Queen)  movers = this._queenMovement( white, moved, loc);
    else if (piece == TileValue.King)   movers = this._kingMovement(  white, moved, loc);

    // TODO: remove any movements which case check.
    return movers;
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
  List<Movement> _pawnMovement(bool white, bool moved, Location loc) {
    List<Movement> movers = new List<Movement>();
    int dir = white? -1: 1;

    // Check forward movement for vacancies
    Location dest = loc.offset(dir, 0);
    TileValue value = this.getValue(dest);
    if (value.empty) {
      String desc = "Pawn move to $dest";
      movers.add(new Movement(desc, loc, dest));

      if (!moved) {
        dest = loc.offset(dir+dir, 0);
        value = this.getValue(dest);
        if (value.empty) {
          desc = "Pawn move to $dest";
          movers.add(new Movement(desc, loc, dest));
        }
      }
    }

    // Check for opponents on the diagonalls
    dest = loc.offset(dir, -1);
    value = this.getValue(dest);
    if (value.opponent(white)) {
      String desc = "Pawn take ${value.pieceName} at $dest";
      movers.add(new Movement(desc, loc, dest, dest));
    }

    dest = loc.offset(dir, 1);
    value = this.getValue(dest);
    if (value.opponent(white)) {
      String desc = "Pawn take ${value.pieceName} at $dest";
      movers.add(new Movement(desc, loc, dest, dest));
    }

    // Check for en passent condition
    if ((this._prev != null) && (loc.row == (white? 5: 4))) {
      dest = loc.offset(dir, -1);
      Location oppLoc = loc.offset(0, -1);
      value = this.getValue(oppLoc);
      if (value.opponent(white) && this.getValue(dest).empty) {
        TileValue lastLoc = this._prev.getValue(oppLoc.offset(dir+dir, 0));
        if (lastLoc.moved && lastLoc.sameItem(value)) {
          String desc = "Pawn en passent ${value.pieceName} at $dest";
          movers.add(new Movement(desc, loc, dest, oppLoc));
        }
      }

      dest = loc.offset(dir, 1);
      oppLoc = loc.offset(0, 1);
      value = this.getValue(oppLoc);
      if (value.opponent(white) && this.getValue(dest).empty) {
        TileValue lastLoc = this._prev.getValue(oppLoc.offset(dir+dir, 0));
        if (lastLoc.moved && lastLoc.sameItem(value)) {
          String desc = "Pawn en passent ${value.pieceName} at $dest";
          movers.add(new Movement(desc, loc, dest, oppLoc));
        }
      }
    }
    return movers;
  }

  bool _movement(bool white, Location source, int deltaRow, int deltaColumn, List<Movement> movers) {
      Location dest = source.offset(deltaRow, deltaColumn);
      if (!dest.onBoard) return true;
      TileValue srcValue = this.getValue(source);
      TileValue destValue = this.getValue(dest);

      if (destValue.empty) {
        String desc = "${srcValue.pieceName} move to $dest";
        movers.add(new Movement(desc, source, dest));
        return false;
      }
      
      if (destValue.opponent(white)) {
        String desc = "${srcValue.pieceName} take ${destValue.pieceName} at $dest";
        movers.add(new Movement(desc, source, dest, dest));
      }
      
      return true;
  }

  void _movementPath(bool white, Location source, int deltaRow, int deltaColumn, List<Movement> movers) {
    for (int i = 1; i < 8; ++i) {
      if(this._movement(white, source, deltaRow*i, deltaColumn*i, movers)) break;
    }
  }

  List<Movement> _rookMovement(bool white, bool moved, Location loc) {
    List<Movement> movers = new List<Movement>();
    this._movementPath(white, loc,  0,  1, movers);
    this._movementPath(white, loc,  0, -1, movers);
    this._movementPath(white, loc,  1,  0, movers);
    this._movementPath(white, loc, -1,  0, movers);

    // Check for castle condition
    if (!moved) {
      Location kingLoc = new Location(white? 8: 1, 4);
      TileValue kingVal = this.getValue(kingLoc);
      if ((kingVal.piece == TileValue.King) && !kingVal.moved) {
        bool allEmpty = true;
        int dir = (loc.column > kingLoc.column)? -1: 1;
        for (int i = loc.column + dir; i != kingLoc.column; i += dir) {
          if (!this.getValue(loc).empty) {
            allEmpty = false;
            break;
          }
        }

        if (allEmpty) {
          String desc = "Rook castles with King";
          Location dest = new Location(kingLoc.row, kingLoc.column-dir-dir);
          Location otherDest = new Location(dest.row, dest.column+dir);
          movers.add(new Movement(desc, loc, dest, kingLoc, otherDest));
        }
      }
    }
    return movers;
  }
  
  List<Movement> _knightMovement(bool white, bool moved, Location loc) {
    List<Movement> movers = new List<Movement>();
    this._movement(white, loc,  2,  1, movers);
    this._movement(white, loc,  2, -1, movers);
    this._movement(white, loc,  1,  2, movers);
    this._movement(white, loc, -1,  2, movers);
    this._movement(white, loc, -2,  1, movers);
    this._movement(white, loc, -2, -1, movers);
    this._movement(white, loc,  1, -2, movers);
    this._movement(white, loc, -1, -2, movers);
    return movers;
  }
  
  List<Movement> _bishopMovement(bool white, bool moved, Location loc) {
    List<Movement> movers = new List<Movement>();
    this._movementPath(white, loc,  1,  1, movers);
    this._movementPath(white, loc,  1, -1, movers);
    this._movementPath(white, loc, -1, -1, movers);
    this._movementPath(white, loc, -1,  1, movers);
    return movers;
  }
  
  List<Movement> _queenMovement(bool white, bool moved, Location loc) {
    List<Movement> movers = new List<Movement>();
    this._movementPath(white, loc,  1,  1, movers);
    this._movementPath(white, loc,  1,  0, movers);
    this._movementPath(white, loc,  1, -1, movers);
    this._movementPath(white, loc,  0, -1, movers);
    this._movementPath(white, loc, -1, -1, movers);
    this._movementPath(white, loc, -1,  0, movers);
    this._movementPath(white, loc, -1,  1, movers);
    this._movementPath(white, loc,  0,  1, movers);
    return movers;
  }
  
  List<Movement> _kingMovement(bool white, bool moved, Location loc) {
    List<Movement> movers = new List<Movement>();
    this._movement(white, loc,  1,  1, movers);
    this._movement(white, loc,  1,  0, movers);
    this._movement(white, loc,  1, -1, movers);
    this._movement(white, loc,  0, -1, movers);
    this._movement(white, loc, -1, -1, movers);
    this._movement(white, loc, -1,  0, movers);
    this._movement(white, loc, -1,  1, movers);
    this._movement(white, loc,  0,  1, movers);
    
    // Check for castle condition
    if (!moved) {
      for (int i = 1; i <= 8; i += 7) {
        Location rookLoc = new Location(i, 4);
        TileValue rookVal = this.getValue(rookLoc);
        if ((rookVal.piece == TileValue.Rook) && !rookVal.moved) {
          bool allEmpty = true;
          int dir = (loc.column > rookLoc.column)? -1: 1;
          for (int i = loc.column + dir; i != rookLoc.column; i += dir) {
            if (!this.getValue(loc).empty) {
              allEmpty = false;
              break;
            }
          }

          if (allEmpty) {
            String desc = "King castles with Root";
            Location dest = new Location(loc.row, loc.column-dir-dir);
            Location otherDest = new Location(dest.row, dest.column+dir);
            movers.add(new Movement(desc, loc, dest, rookLoc, otherDest));
          }
        }
      }
    }
    return movers;
  }

  @override
  String toString([bool showNumbers = true, bool showCount = false, bool showMoved = false]) {
    List<String> rows = new List<String>();
    if (showNumbers) {
      String spacing = "  ";
      if (showCount) spacing += " ";
      if (showMoved) spacing += " ";
      rows.add("   1${spacing}2${spacing}3${spacing}4${spacing}5${spacing}6${spacing}7${spacing}8");
    }

    for (int r = 0; r < 8; ++r) {
      String row = "";
      if (showNumbers) row += "${r+1} ";

      for (int c = 0; c < 8; ++c) {
        if (showNumbers || c != 0) row += "|";

        int i = new Location(r+1, c+1).index;
        TileValue value = this._data[i];        
        row += value.toString(showMoved: showMoved, showCount: showCount);
      }

      if (showNumbers) row += "|";
      rows.add(row);
    }
    return rows.join("\n");
  }
}
