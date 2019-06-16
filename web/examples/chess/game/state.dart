part of game;

class State {

  static const int OOB    = -1;
  static const int Empty  = 0x0000;
  static const int Count  = 0x000F;
  static const int Moved  = 0x1000;

  static const int Black  = 0x0100;
  static const int White  = 0x0200;
  static const int Color  = 0x0300;

  static const int Pawn   = 0x0010;
  static const int Rook   = 0x0020;
  static const int Knight = 0x0030;
  static const int Bishop = 0x0040;
  static const int Queen  = 0x0050;
  static const int King   = 0x0060;
  static const int Piece  = 0x00F0;

  static const int None      = 0;
  static const int Check     = 1;
  static const int Checkmate = 2;
  static const int Stalemate = 3;

  List<int> _data;
  State _next;
  State _prev;

  State() {
    this._data = new List<int>(64);
    this._data.fillRange(0, 64, 0);
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

    state.setValue(new Location(1, 1), 0|Black|Rook);
    state.setValue(new Location(1, 2), 0|Black|Knight);
    state.setValue(new Location(1, 3), 0|Black|Bishop);
    state.setValue(new Location(1, 4), 0|Black|King);
    state.setValue(new Location(1, 5), 0|Black|Queen);
    state.setValue(new Location(1, 6), 1|Black|Bishop);
    state.setValue(new Location(1, 7), 1|Black|Knight);
    state.setValue(new Location(1, 8), 1|Black|Rook);
    
    state.setValue(new Location(2, 1), 0|Black|Pawn);
    state.setValue(new Location(2, 2), 1|Black|Pawn);
    state.setValue(new Location(2, 3), 2|Black|Pawn);
    state.setValue(new Location(2, 4), 3|Black|Pawn);
    state.setValue(new Location(2, 5), 4|Black|Pawn);
    state.setValue(new Location(2, 6), 5|Black|Pawn);
    state.setValue(new Location(2, 7), 6|Black|Pawn);
    state.setValue(new Location(2, 8), 7|Black|Pawn);
    
    state.setValue(new Location(7, 1), 0|White|Pawn);
    state.setValue(new Location(7, 2), 1|White|Pawn);
    state.setValue(new Location(7, 3), 2|White|Pawn);
    state.setValue(new Location(7, 4), 3|White|Pawn);
    state.setValue(new Location(7, 5), 4|White|Pawn);
    state.setValue(new Location(7, 6), 5|White|Pawn);
    state.setValue(new Location(7, 7), 6|White|Pawn);
    state.setValue(new Location(7, 8), 7|White|Pawn);
    
    state.setValue(new Location(8, 1), 0|White|Rook);
    state.setValue(new Location(8, 2), 0|White|Knight);
    state.setValue(new Location(8, 3), 0|White|Bishop);
    state.setValue(new Location(8, 4), 0|White|King);
    state.setValue(new Location(8, 5), 0|White|Queen);
    state.setValue(new Location(8, 6), 1|White|Bishop);
    state.setValue(new Location(8, 7), 1|White|Knight);
    state.setValue(new Location(8, 8), 1|White|Rook);

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
  
  int getValue(Location loc) {
    if (!loc.onBoard) return OOB;
    return this._data[loc.index];
  }

  bool setValue(Location loc, int value) {
    if (!loc.onBoard) return false;
    this._data[loc.index] = value;
    return true;
  }

  Location findItem(int item) {
    for (int i = 0; i < this._data.length; ++i) {
      int value = this._data[i] & (Piece|Color);
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

  bool _empty(int value) => value == Empty;

  bool _opponent(bool white, int value) =>
    !this._empty(value) && this._isWhite(value) != white;

  bool _isWhite(int value) => value & White == White;

  bool _hasMoved(int value) => value & Moved == Moved;

  String _name(int value) {
    switch(value & Piece) {
      case Pawn:   return "Pawn";
      case Rook:   return "Rook";
      case Knight: return "Knight";
      case Bishop: return "Bishop";
      case Queen:  return "Queen";
      case King:   return "King";
    }
    return "Empty";
  }

  List<Movement> getMovementsForPiece(int item) {
    Location loc = this.findItem(item);
    bool white = this._isWhite(item);
    bool moved = this._hasMoved(item);
    List<Movement> movers = new List<Movement>();
    switch(item & Piece) {
      case Pawn:   movers = this._pawnMovement(  white, moved, loc); break;
      case Rook:   movers = this._rookMovement(  white, moved, loc); break;
      case Knight: movers = this._knightMovement(white, moved, loc); break;
      case Bishop: movers = this._bishopMovement(white, moved, loc); break;
      case Queen:  movers = this._queenMovement( white, moved, loc); break;
      case King:   movers = this._kingMovement(  white, moved, loc); break;
    }

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
    int value = this.getValue(dest);
    if (this._empty(value)) {
      String desc = "Pawn move to $dest";
      movers.add(new Movement(desc, loc, dest));

      if (!moved) {
        dest = loc.offset(dir+dir, 0);
        value = this.getValue(dest);
        if (this._empty(value)) {
          desc = "Pawn move to $dest";
          movers.add(new Movement(desc, loc, dest));
        }
      }
    }

    // Check for opponents on the diagonalls
    dest = loc.offset(dir, -1);
    value = this.getValue(dest);
    if (this._opponent(white, value)) {
      String desc = "Pawn take ${this._name(value)} at $dest";
      movers.add(new Movement(desc, loc, dest, dest));
    }

    dest = loc.offset(dir, 1);
    value = this.getValue(dest);
    if (this._opponent(white, value)) {
      String desc = "Pawn take ${this._name(value)} at $dest";
      movers.add(new Movement(desc, loc, dest, dest));
    }

    // Check for en passent condition
    if ((this._prev != null) && (loc.row == (white? 5: 4))) {
      dest = loc.offset(dir, -1);
      Location oppLoc = loc.offset(0, -1);
      value = this.getValue(oppLoc);
      if (this._opponent(white, value) && this._empty(this.getValue(dest))) {
        int lastLoc = this._prev.getValue(oppLoc.offset(dir+dir, 0));
        if (this._hasMoved(lastLoc) && (lastLoc|Moved == value)) {
          String desc = "Pawn en passent ${this._name(value)} at $dest";
          movers.add(new Movement(desc, loc, dest, oppLoc));
        }
      }

      dest = loc.offset(dir, 1);
      oppLoc = loc.offset(0, 1);
      value = this.getValue(oppLoc);
      if (this._opponent(white, value) && this._empty(this.getValue(dest))) {
        int lastLoc = this._prev.getValue(oppLoc.offset(dir+dir, 0));
        if (this._hasMoved(lastLoc) && (lastLoc|Moved == value)) {
          String desc = "Pawn en passent ${this._name(value)} at $dest";
          movers.add(new Movement(desc, loc, dest, oppLoc));
        }
      }
    }
    return movers;
  }

  bool _movement(bool white, Location source, int deltaRow, int deltaColumn, List<Movement> movers) {
      Location dest = source.offset(deltaRow, deltaColumn);
      if (!dest.onBoard) return true;
      int srcValue = this.getValue(source);
      int destValue = this.getValue(dest);

      if (this._empty(destValue)) {
        String desc = "${this._name(srcValue)} move to $dest";
        movers.add(new Movement(desc, source, dest));
        return false;
      }
      
      if (this._opponent(white, destValue)) {
        String desc = "${this._name(srcValue)} take ${this._name(destValue)} at $dest";
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
      int kingVal = this.getValue(kingLoc);
      if ((kingVal & Piece == King) && !this._hasMoved(kingVal)) {
        bool allEmpty = true;
        int dir = (loc.column > kingLoc.column)? -1: 1;
        for (int i = loc.column + dir; i != kingLoc.column; i += dir) {
          if (!this._empty(this.getValue(loc))) {
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
        int rookVal = this.getValue(rookLoc);
        if ((rookVal & Piece == Rook) && !this._hasMoved(rookVal)) {
          bool allEmpty = true;
          int dir = (loc.column > rookLoc.column)? -1: 1;
          for (int i = loc.column + dir; i != rookLoc.column; i += dir) {
            if (!this._empty(this.getValue(loc))) {
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
  String toString() {
    List<String> rows = new List<String>();
    rows.add("    1   2   3   4   5   6   7   8");
    for (int r = 0, i = 0; r < 8; ++r) {
      String row = "${r+1} ";
      for (int c = 0; c < 8; ++c, ++i) {
        int value = this._data[i];
        switch (value & Color) {
          case White: row += "[W"; break;
          case Black: row += "[B"; break;
          default:    row += "[ "; break;
        }
        switch (value & Piece) {
          case Pawn:   row += "P]"; break;
          case Rook:   row += "R]"; break;
          case Knight: row += "H]"; break;
          case Bishop: row += "B]"; break;
          case Queen:  row += "Q]"; break;
          case King:   row += "K]"; break;
          default:     row += " ]"; break;
        }
      }
      rows.add(row);
    }
    return rows.join("\n");
  }
}