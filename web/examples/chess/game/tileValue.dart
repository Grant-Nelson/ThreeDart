part of game;

/// This is the value stored in a chess board location.
/// This may or no may contain information about a piece.
class TileValue {
  static final TileValue OOB   = new TileValue(-1);     /// The value for when a tile location is out-of-bounds.
  static final TileValue Empty = new TileValue(0x0000); /// The value of an empty tile.
  static final TileValue Moved = new TileValue(0x1000); /// The mask which indicates a moved flag for a piece.
  static final TileValue Count = new TileValue(0x000F); /// The mask for the count to differentiates between pieces.
  static final TileValue ItemMask = Color|Piece|Count;  /// The mask for the values required to identify a piece.

  static final TileValue Black = new TileValue(0x0100); /// The value for a black piece.
  static final TileValue White = new TileValue(0x0200); /// The value for a white piece.
  static final TileValue Color = new TileValue(0x0300); /// The mask for the values which indicate if the piece is black or white.

  static final TileValue Pawn   = new TileValue(0x0010); /// The value for a pawn.
  static final TileValue Rook   = new TileValue(0x0020); /// The value for a rook.
  static final TileValue Knight = new TileValue(0x0030); /// The value for a knight.
  static final TileValue Bishop = new TileValue(0x0040); /// The value for a bishop.
  static final TileValue Queen  = new TileValue(0x0050); /// The value for a queen.
  static final TileValue King   = new TileValue(0x0060); /// The value for a king.
  static final TileValue Piece  = new TileValue(0x00F0); /// The mask for the values which indicates the kind of piece.

  /// The raw value for the tile.
  final int value;

  /// Constructs a new tile value.
  TileValue(int this.value);

  /// Constructs a value from a given color letter.
  /// 'W' for a white value, 'B' for a black value, otherwise empty.
  factory TileValue.colorFromLetter(String value) {
    switch (value) {
      case 'W': return White;
      case 'B': return Black;
      default:  return Empty;
    }
  }

  /// Constructs a value from a given piece kind letter.
  /// 'P' for a pawn value, 'R' for a rook value, 'H' for a knight value,
  /// 'B' for a bishop value, 'Q' for a queen value, 'K' for a king value,
  /// otherwise empty.
  factory TileValue.pieceFromLetter(String value) {
    switch (value) {
      case 'P': return Pawn;
      case 'R': return Rook;
      case 'H': return Knight;
      case 'B': return Bishop;
      case 'Q': return Queen;
      case 'K': return King;
      default:  return Empty;
    }
  }

  /// Constructs a tile value from the given string.
  /// If it starts with a plus sign, then the piece has moved. If there are piece values, it will
  /// be two characters, the first is the color and the second is the piece kind.
  /// An optional since digit number may be added to set the piece's count.
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

    if (str.length > 2)
      value |= new TileValue(int.parse(str[2])).count;
    return value;
  }
  
  /// Constructs a non-moved piece with the given conditions.
  factory TileValue._piece(TileValue piece, bool white, int count) =>
    piece|(white? White: Black)|(new TileValue(count)&Count);

  factory TileValue.pawn(bool white, int count)        => new TileValue._piece(Pawn, white, count);   /// Constructs a pawn value.
  factory TileValue.rook(bool white, int count)        => new TileValue._piece(Rook, white, count);   /// Constructs a rook value.
  factory TileValue.knight(bool white, int count)      => new TileValue._piece(Knight, white, count); /// Constructs a knight value.
  factory TileValue.bishop(bool white, int count)      => new TileValue._piece(Bishop, white, count); /// Constructs a bishop value.
  factory TileValue.queen(bool white, [int count = 1]) => new TileValue._piece(Queen, white, count);  /// Constructs a queen value.
  factory TileValue.king(bool white)                   => new TileValue._piece(King, white, 1);       /// Constructs a king value.

  /// Creates a new tile value with is the OR of the two raw values.
  /// This is mainly used for adding conditions onto a tile value.
  TileValue operator |(TileValue other) => new TileValue(this.value | other.value);
  
  /// Creates a new tile value with is the AND of the two raw values.
  /// This is mainly used to examine some condition of a tile value.
  TileValue operator &(TileValue other) => new TileValue(this.value & other.value);

  /// Checks if the given value is a subset or equal to this value.
  /// It is used to determine if a specific value or set of values has been set to this value.
  bool has(TileValue value) => (this.value & value.value) == value.value;
  
  TileValue get color => new TileValue(this.value & Color.value);    /// Gets the color for this tile value.
  TileValue get piece => new TileValue(this.value & Piece.value);    /// Gets the piece kind from this tile value.
  TileValue get count => new TileValue(this.value & Count.value);    /// Gets the count value from this tile value.
  TileValue get item  => new TileValue(this.value & ItemMask.value); /// Gets the values required to identify a piece.

  bool get outOfBounds => this.value == OOB.value; /// Indicates if this value is out of bounds.
  bool get empty => this.value == Empty.value; /// Indicates if this value is empty.
  bool get moved => this.has(Moved); /// Indicates if this piece has been moved.
  bool get white => this.has(White); /// Indicates if this piece is white.
  bool get black => this.has(Black); /// Indicates if this piece is black.
  
  /// Indicates if this piece is an opponent of the given color.
  bool opponent(bool white) =>
    (!this.empty) && (this.white != white);

  /// Indicates if these to values has the same color, piece kind, and count.
  bool sameItem(TileValue other) =>
    (this.value & ItemMask.value) == (other.value & ItemMask.value);

  /// Indicates if these two tile values are equal.
  bool operator ==(dynamic other) {
    if (other is! TileValue) return false;
    return this.value == other.value;
  }

  /// Gets the letter for the given color.
  String get colorLetter {
    TileValue color = this.color;
    if (color == Black) return 'B';
    if (color == White) return 'W';
    return ' ';
  }

  /// Gets the letter for the piece kind.
  String get pieceLetter {
    TileValue piece = this.piece;
    if (piece == Pawn)   return 'P';
    if (piece == Rook)   return 'R';
    if (piece == Knight) return 'H';
    if (piece == Bishop) return 'B';
    if (piece == Queen)  return 'Q';
    if (piece == King)   return 'K';
    return ' ';
  }

  /// Gets the letter for the number of the piece.
  String get numberLetter {
    TileValue count = this.count;
    if (count.empty) return ' ';
    return '${count.value}';
  }

  /// Gets the long name of this piece kind.
  String get pieceName {
    TileValue piece = this.piece;
    if (piece == Pawn)   return 'Pawn';
    if (piece == Rook)   return 'Rook';
    if (piece == Knight) return 'Knight';
    if (piece == Bishop) return 'Bishop';
    if (piece == Queen)  return 'Queen';
    if (piece == King)   return 'King';
    return 'Empty';
  }

  /// Gets the short name for this whole value.
  @override
  String toString({bool showMoved: true, bool showCount: true}) {
    if (this.empty) return '';
    String result = '';
    if (showMoved) result += this.moved? '+': ' ';
    result += this.colorLetter;
    result += this.pieceLetter;
    if (showCount) result += this.numberLetter;
    return result;
  }
}