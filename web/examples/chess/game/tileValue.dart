part of game;

class TileValue {
  static final TileValue OOB   = new TileValue(-1);
  static final TileValue Empty = new TileValue(0x0000);
  static final TileValue Moved = new TileValue(0x1000);
  static final TileValue Count = new TileValue(0x000F);
  static final TileValue ItemMask = Color|Piece|Count;

  static final TileValue Black = new TileValue(0x0100);
  static final TileValue White = new TileValue(0x0200);
  static final TileValue Color = new TileValue(0x0300);

  static final TileValue Pawn   = new TileValue(0x0010);
  static final TileValue Rook   = new TileValue(0x0020);
  static final TileValue Knight = new TileValue(0x0030);
  static final TileValue Bishop = new TileValue(0x0040);
  static final TileValue Queen  = new TileValue(0x0050);
  static final TileValue King   = new TileValue(0x0060);
  static final TileValue Piece  = new TileValue(0x00F0);

  final int value;

  TileValue(int this.value);
  
  factory TileValue.colorFromLetter(String value) {
    switch (value) {
      case "W": return White;
      case "B": return Black;
      default:  return Empty;
    }
  }
  
  factory TileValue.pieceFromLetter(String value) {
    switch (value) {
      case "P": return Pawn;
      case "R": return Rook;
      case "H": return Knight;
      case "B": return Bishop;
      case "Q": return Queen;
      case "K": return King;
      default:  return Empty;
    }
  }

  factory TileValue.parse(String str) {
    if (str.length < 1) return Empty;
    TileValue value = Empty;
    if (str[0] == '+') {
      value |= Moved;
      str = str.substring(1);
    }
    if (str.length < 2) return Empty;
    value |= new TileValue.colorFromLetter(str[0]) |
             new TileValue.pieceFromLetter(str[1]);
    if (str.length >= 3)
      value |= new TileValue(int.parse(str[2])).count;
    return value;
  }
  
  factory TileValue._piece(TileValue piece, bool white, int count) =>
    piece|(white? White: Black)|(new TileValue(count)&Count);

  factory TileValue.pawn(bool white, int count)        => new TileValue._piece(Pawn, white, count);
  factory TileValue.rook(bool white, int count)        => new TileValue._piece(Rook, white, count);
  factory TileValue.knight(bool white, int count)      => new TileValue._piece(Knight, white, count);
  factory TileValue.bishop(bool white, int count)      => new TileValue._piece(Bishop, white, count);
  factory TileValue.queen(bool white, [int count = 0]) => new TileValue._piece(Queen, white, count);
  factory TileValue.king(bool white)                   => new TileValue._piece(Queen, white, 0);

  TileValue operator |(TileValue other) => new TileValue(this.value | other.value);
  TileValue operator &(TileValue other) => new TileValue(this.value & other.value);

  bool has(TileValue value) => (this.value & value.value) == value.value;
  
  TileValue get color => new TileValue(this.value & Color.value);
  TileValue get piece => new TileValue(this.value & Piece.value);
  TileValue get count => new TileValue(this.value & Count.value);

  bool get outOfBounds => this.value == OOB.value;
  bool get empty => this.value == Empty;
  bool get moved => this.has(Moved);
  bool get white => this.has(White);
  bool get black => this.has(Black);
  
  bool opponent(bool white) =>
    !this.empty && (this.color != TileValue.White);

  bool sameItem(TileValue other) =>
    (this.value & ItemMask.value) == (other.value & ItemMask.value);
 
  bool operator ==(dynamic other) =>
    this.value == (other as TileValue)?.value;
    
  String get colorLetter {
    TileValue color = this.color;
    if (color == Black) return "B";
    if (color == White) return "W";
    return " ";
  }

  String get pieceLetter {
    TileValue piece = this.piece;
    if (piece == Pawn)   return "P";
    if (piece == Rook)   return "R";
    if (piece == Knight) return "H";
    if (piece == Bishop) return "B";
    if (piece == Queen)  return "Q";
    if (piece == King)   return "K";
    return " ";
  }

  String get numberLetter {
    TileValue count = this.count;
    if (count.empty) return " ";
    return "${count.value}";
  }
  
  String get pieceName {
    TileValue piece = this.piece;
    if (piece == Pawn)   return "Pawn";
    if (piece == Rook)   return "Rook";
    if (piece == Knight) return "Knight";
    if (piece == Bishop) return "Bishop";
    if (piece == Queen)  return "Queen";
    if (piece == King)   return "King";
    return "Empty";
  }

  String toString({bool showMoved: false, bool showCount: false}) {
    if (this.empty) return "  " + (showMoved? " ": "") + (showCount? " ": "");
    String result = "";
    if (showMoved) {
      result += this.moved? "+": " ";
    }
    result += this.colorLetter;
    result += this.pieceLetter;
    if (showCount) result += this.numberLetter;
    return result;
  }
}