part of game;

class Location {
  final int row;
  final int column;

  Location(int this.row, int this.column);

  factory Location.fromIndex(int index) {
    if (index < 0) return new Location(0, 0);
    int row = index~/8 + 1;
    int column = index%8 + 1;
    return new Location(row, column);
  }

  Location offset(int deltaRow, int deltaColumn) =>
    new Location(this.row+deltaRow, this.column+deltaColumn);

  bool get onBoard =>
    (this.row >= 1) && (this.row <= 8) && (this.column >= 1) && (this.column <= 8);

  int get index => (this.row-1)*8 + (this.column-1);

  String toString() => "$row $column";

  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Location) return false;
    Location loc = other as Location;
    if (loc.row != this.row) return false;
    if (loc.column != this.column) return false;
    return true;
  }
}
