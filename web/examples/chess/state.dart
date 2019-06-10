part of chess;

class State {

  static const int OOB    = -1;
  static const int Empty  = 0x0000;
  static const int Count  = 0x000F;
  static const int Moved  = 0x1000;
  static const int Mark   = 0x2000;

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
    this._next = null;
    this._prev = null;
  }

  factory State.initial() {
    //    1 2 3 4 5 6 7 8 < Column
    // 1 |R|H|B|Q|K|B|H|R| White
    // 2 |P|P|P|P|P|P|P|P|
    // 3 | | | | | | | | |
    // 4 | | | | | | | | |
    // 5 | | | | | | | | |
    // 6 | | | | | | | | |
    // 7 |P|P|P|P|P|P|P|P|
    // 8 |R|H|B|Q|K|B|H|R| Black
    State state = new State();
    state.setValue(1, 1, Rook   & White & 0);
    state.setValue(1, 2, Knight & White & 0);
    state.setValue(1, 3, Bishop & White & 0);
    state.setValue(1, 4, Queen  & White & 0);
    state.setValue(1, 5, King   & White & 0);
    state.setValue(1, 6, Bishop & White & 1);
    state.setValue(1, 7, Knight & White & 1);
    state.setValue(1, 8, Rook   & White & 1);
    
    state.setValue(2, 1, Pawn & White & 1);
    state.setValue(2, 2, Pawn & White & 2);
    state.setValue(2, 3, Pawn & White & 3);
    state.setValue(2, 4, Pawn & White & 4);
    state.setValue(2, 5, Pawn & White & 5);
    state.setValue(2, 6, Pawn & White & 6);
    state.setValue(2, 7, Pawn & White & 7);
    state.setValue(2, 8, Pawn & White & 8);
    
    state.setValue(7, 1, Pawn & Black & 1);
    state.setValue(7, 2, Pawn & Black & 2);
    state.setValue(7, 3, Pawn & Black & 3);
    state.setValue(7, 4, Pawn & Black & 4);
    state.setValue(7, 5, Pawn & Black & 5);
    state.setValue(7, 6, Pawn & Black & 6);
    state.setValue(7, 7, Pawn & Black & 7);
    state.setValue(7, 8, Pawn & Black & 8);
    
    state.setValue(8, 1, Rook   & Black & 0);
    state.setValue(8, 2, Knight & Black & 0);
    state.setValue(8, 3, Bishop & Black & 0);
    state.setValue(8, 4, Queen  & Black & 0);
    state.setValue(8, 5, King   & Black & 0);
    state.setValue(8, 6, Bishop & Black & 1);
    state.setValue(8, 7, Knight & Black & 1);
    state.setValue(8, 8, Rook   & Black & 1);
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

  int index(int row, int column) => (row-1)+ (column-1)*8;
  
  int rowForIndex(int index) => index%8 + 1;
  
  int columnForIndex(int index) => index~/8 + 1;

  bool onBoard(int row, int column) =>
    (row >= 1) && (row <= 8) && (column >= 1) && (column <= 8);

  int getValue(int row, int column) {
    if (!this.onBoard(row, column)) return OOB;
    return this._data[this.index(row, column)];
  }

  bool setValue(int row, int column, int value) {
    if (!this.onBoard(row, column)) return false;
    this._data[this.index(row, column)] = value;
    return true;
  }

  int indexOf(int item) => this._data.indexOf(item);

  void clearMarks() {
    for (int i = 0; i < this._data.length; ++i)
      this._data[i] &= ~Mark;
  }

  bool hasMarks() {
    for (int i = 0; i < this._data.length; ++i) {
      if (this._data[i] & Mark == Mark) return true;
    }
    return false;
  }

  /*
  int condition(bool white) {
    int kingIndex = indexOf(King | (white?White:Black));
    int kingRow   = this.rowForIndex(kingIndex);
    int kingCol   = this.columnForIndex(kingIndex);






  }*/

  void markPawn(int row, int column) {

  }

  void markRook(int row, int column) {
    
  }
  
  void markKnight(int row, int column) {
    
  }
  
  void markBiship(int row, int column) {
    
  }
  
  void markQueen(int row, int column) {
    
  }
  
  void markKing(int row, int column) {
    
  }

  @override
  String toString() {
    List<String> rows = new List<String>();
    for (int r = 0, i = 0; r < 8; ++r) {
      String row = "";
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