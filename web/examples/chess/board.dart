part of chess;

/// TODO: Comment
class Board extends ThreeDart.Entity {
  List<Piece> _pieces;
  List<Tile> _tiles;
  ThreeDart.Entity _table;
  ThreeDart.Entity _edges;
  Materials _mats;
  bool _showPick;

  Board(ThreeDart.ThreeDart td) {
    this._pieces = new List<Piece>();
    this._tiles = new List<Tile>();
    this._mats = new Materials(td);
    this.name = "board";
    this._showPick = false;

    for (int i = 1; i <= 8; i++) {
      for (int j = 1; j <= 8; j++) {
        Tile tile = new Tile(td, this, ((i+j)%2) == 0, i, j);
        this._tiles.add(tile);
        this.children.add(tile);
      }
    }

    for (int i = 1; i <= 8; i++) {
      this._add(new Pawn(td, this, true,  i, 0.0, 0.7));
      this._add(new Pawn(td, this, false, i, 0.0, 0.7));
    }

    this._add(new Rook(td, this, true,  0, 0.0, 0.7));
    this._add(new Rook(td, this, true,  1, 0.0, 0.7));
    this._add(new Rook(td, this, false, 0, 0.0, 0.7));
    this._add(new Rook(td, this, false, 1, 0.0, 0.7));

    this._add(new Knight(td, this, true,  0, 0.0,     0.7));
    this._add(new Knight(td, this, true,  1, Math.PI, 0.7));
    this._add(new Knight(td, this, false, 0, 0.0,     0.7));
    this._add(new Knight(td, this, false, 1, Math.PI, 0.7));

    this._add(new Bishop(td, this, true,  0, -Math.PI_2, 0.8));
    this._add(new Bishop(td, this, true,  1,  Math.PI_2, 0.8));
    this._add(new Bishop(td, this, false, 0, -Math.PI_2, 0.8));
    this._add(new Bishop(td, this, false, 1,  Math.PI_2, 0.8));

    this._add(new Queen(td, this, true,  0, 0.0, 1.0));
    this._add(new Queen(td, this, false, 0, 0.0, 1.0));

    this._add(new King(td,  this, true,  0, Math.PI_2, 0.9));
    this._add(new King(td,  this, false, 0, Math.PI_2, 0.9));

    this._edges = new ThreeDart.Entity();
    this.children.add(this._edges);
    this._edges.children.add(new Edge(td, this, 0.0, 0.0, 0.0, 0));
    this._edges.children.add(new Edge(td, this, 8.0, 0.0, Math.PI_2, 1));
    this._edges.children.add(new Edge(td, this, 8.0, 8.0, Math.PI, 2));
    this._edges.children.add(new Edge(td, this, 0.0, 8.0, Math.PI3_2, 3));

    this._table = new ThreeDart.Entity(
      shape: Shapes.disk(sides: 30),
      tech: this._mats._tableTech,
      mover: new Movers.Constant(
        new Math.Matrix4.translate(0.0, -0.5, 0.0)*
        new Math.Matrix4.rotateX(-Math.PI_2)*
        new Math.Matrix4.scale(12.0, 12.0, 12.0)
      )
    );
    this.children.add(this._table);
  }

  Materials get materials => this._mats;

  Techniques.SolidColor nextpickTech() =>
    this._mats.nextpickTech(this.children.length);

  void _add(Piece piece) {
    this._pieces.add(piece);
    this.children.add(piece);
  }

  Piece pickPiece(Math.Color4 color) {
    for (Piece piece in this._pieces) {
      if (piece.isPick(color)) return piece;
    }
    return null;
  }

  Tile pickTile(Math.Color4 color) {
    for (Tile tile in this._tiles) {
      if (tile.isPick(color)) return tile;
    }
    return null;
  }
  
  Piece findPiece(int row, int column) {
    for (Piece piece in this._pieces) {
      if ((piece.row == row) && (piece.column == column))
        return piece;
    }
    return null;
  }

  Tile findTile(int row, int column) {
    for (Tile tile in this._tiles) {
      if ((tile.row == row) && (tile.column == column))
        return tile;
    }
    return null;
  }

  void clearHighlights() {
    for (Piece piece in this._pieces)
      piece.highlighted = false;
    for (Tile tile in this._tiles)
      tile.highlighted = false;
  }

  void clearSelections() {
    for (Piece piece in this._pieces)
      piece.selected = false;
    for (Tile tile in this._tiles)
      tile.selected = false;
  }

  bool get showPick => this._showPick;
  set showPick(bool show) {
    if (show != this._showPick) {
      this._showPick = show;
      this._table.enabled = !show;
      this._edges.enabled = !show;
      for(Piece piece in this._pieces)
        piece.showPick = show;
      for(Tile tile in this._tiles)
        tile.showPick = show;
    }
  }

  bool onBoard(int row, int column) =>
    (row >= 1) && (row <= 8) && (column >= 1) && (column <= 8);

  void setLocations(State state) {
    for (Piece piece in this._pieces) {
      int index = state.indexOf(piece.stateItem);
      if (index < 0) {
        piece.setLocation(0, 0);
        piece.enabled = false;
      } else {
        int row = state.rowForIndex(index);
        int column = state.columnForIndex(index);
        piece.setLocation(row, column);
        piece.enabled = true;
      }
    }
  }

  void setHighlights(State state) {

  }
}
