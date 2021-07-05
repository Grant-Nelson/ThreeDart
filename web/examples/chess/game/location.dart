part of game;

/// Location is the chess board.
class Location {

  /// This is the vertical offset to the horizontal strip of tiles.
  /// The top most is 1 and the bottom most is 8.
  final int row;

  /// This is the horizontal offset to the vertical strip of tiles.
  /// The left most is 1 and the right most is 8.
  final int column;

  /// Constructs a new board location.
  Location(int this.row, int this.column);

  /// Constructs a new board location with the index to the chess state data.
  factory Location.fromIndex(int index) {
    if ((index < 0) || (index >= 64)) return new Location(0, 0);
    int row = index~/8 + 1;
    int column = index%8 + 1;
    return new Location(row, column);
  }

  /// Gets a new location with the row and column offset with the given deltas.
  Location offset(int deltaRow, int deltaColumn) =>
    new Location(this.row+deltaRow, this.column+deltaColumn);

  /// Indicates if this location is on the board (true) or not (false).
  bool get onBoard =>
    (this.row >= 1) && (this.row <= 8) && (this.column >= 1) && (this.column <= 8);

  /// Gets the index into the chess state data which stores the tile data for this location.
  int get index => onBoard? (this.row-1)*8 + (this.column-1): -1;

  /// Gets the formal notation for chess location.
  String toNotation() => onBoard? "${'abcdefgh'[column-1]}${9-row}": "xx";

  /// Gets the string for this location.
  @override
  String toString() => "$row $column";

  /// Determines if the two locations are equal to each other.
  @override
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Location) return false;
    if (other.row != this.row) return false;
    if (other.column != this.column) return false;
    return true;
  }
}
