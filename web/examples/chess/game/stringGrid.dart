part of game;

/// A tool for building an evenly spaced multi-line string output
/// which is human readable for debugging and unit-testing.
class StringGrid {

  /// The number of rows in the grid.
  final int rows;

  /// The number of columns in the grid.
  final int columns;

  /// The content for each cell of the grid stored by column then row.
  List<String> _content;

  /// A flag to indicate if the row and column numbers should be shown.
  bool showLabels;

  /// Constructs a new empty string grid tool.
  StringGrid([int this.rows = 8, int this.columns = 8]) {
    this.showLabels = false;
    this._content = new List(this.rows * this.columns);
  }

  /// Parses a set of strings which represents a grid.
  /// The columns in each given row are separated by a pipe character.
  factory StringGrid.parse(List<String> rows) {
    List<List<String>> cells = new List<List<String>>();
    int maxColumns = 0;
    for (int r = 0; r < rows.length; ++r) {
      List<String> columns = rows[r].split("|");
      if (columns.length > maxColumns) maxColumns = columns.length;
      cells.add(columns);
    }

    StringGrid grid = new StringGrid(rows.length, maxColumns);
    for (int r = 0; r < cells.length; ++r) {
      List<String> columns = cells[r];
      for (int c = 0; c < columns.length; ++c) {
        grid.setCell(r, c, columns[c]);
      }
    }

    return grid;
  }

  /// Gets the index into the grid data, or -1 if out of bounds.
  int _index(int row, int column) {
    int index = row*this.rows + column;
    if ((index < 0) || (index >= this.rows * this.columns)) return -1;
    return index;
  }

  /// Sets the cell value in the grid at the given row and column.
  void setCell(int row, int column, String value) {
    int index = this._index(row, column);
    if (index < 0) return;
    this._content[index] = value;
  }

  /// Gets the value of the grid cell at the given row and column.
  String getCell(int row, int column) {
    int index = this._index(row, column);
    if (index < 0) return "";
    return this._content[index] ?? "";
  }

  /// Determines the maximum width of all the cells.
  int _maxContentWidth() {
    int count = this._content.length;
    if (count <= 0) return 0;
    int maxWidth = (this._content[0] ?? "").length;
    for (int i = 1; i < count; ++i) {
      int width = (this._content[i] ?? "").length;
      if (width > maxWidth) maxWidth = width;
    }
    return maxWidth;
  }

  /// Gets the multi-lined grid output.
  @override
  String toString() {
    List<String> rows = new List<String>();
    int contentWidth = this._maxContentWidth();
    int rowLabelWidth = 0;

    if (this.showLabels) {
      rowLabelWidth = "${this.rows-1}".length+1;
      String row = "".padRight(rowLabelWidth + (contentWidth-1)~/2);
      for (int c = 0; c < this.columns; ++c) {
        row += " ${c+1}".padRight(contentWidth+1);
      }
      rows.add(row.trimRight());
    }

    for (int r = 0; r < this.rows; ++r) {
      String row = "";
      if (this.showLabels) row += "${r+1}".padRight(rowLabelWidth);

      for (int c = 0; c < this.columns; ++c) {
        if (this.showLabels || c != 0) row += "|";
        int i = this._index(r, c);
        String value = this._content[i] ?? "";
        row += value.padRight(contentWidth);
      }

      if (this.showLabels) row += "|";
      rows.add(row);
    }
    return rows.join("\n");
  }
}
