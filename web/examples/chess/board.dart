part of chess;

///
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

    //    1 2 3 4 5 6 7 8
    // 1 |R|H|B|Q|K|B|H|R| White
    // 2 |P|P|P|P|P|P|P|P|
    // 3 | | | | | | | | |
    // 4 | | | | | | | | |
    // 5 | | | | | | | | |
    // 6 | | | | | | | | |
    // 7 |P|P|P|P|P|P|P|P|
    // 8 |R|H|B|Q|K|B|H|R| Black

    for (int i = 1; i <= 8; i++) {
      for (int j = 1; j <= 8; j++) {
        Tile tile = new Tile(td, this, ((i+j)%2) == 0, i, j);
        this._tiles.add(tile);
        this.children.add(tile);
      }
    }

    for (int i = 1; i <= 8; i++) {
      this._add(new Pawn(td, this, true, 2, i, 0.0, 0.7));
      this._add(new Pawn(td, this, false, 7, i, 0.0, 0.7));
    }

    this._add(new Rook(td, this, true, 1, 1, 0.0, 0.7));
    this._add(new Rook(td, this, true, 1, 8, 0.0, 0.7));
    this._add(new Rook(td, this, false, 8, 1, 0.0, 0.7));
    this._add(new Rook(td, this, false, 8, 8, 0.0, 0.7));

    this._add(new Knight(td, this, true, 1, 2, 0.0, 0.7));
    this._add(new Knight(td, this, true, 1, 7, Math.PI, 0.7));
    this._add(new Knight(td, this, false, 8, 2, 0.0, 0.7));
    this._add(new Knight(td, this, false, 8, 7, Math.PI, 0.7));

    this._add(new Bishop(td, this, true, 1, 3, -Math.PI_2, 0.8));
    this._add(new Bishop(td, this, true, 1, 6, Math.PI_2, 0.8));
    this._add(new Bishop(td, this, false, 8, 3, -Math.PI_2, 0.8));
    this._add(new Bishop(td, this, false, 8, 6, Math.PI_2, 0.8));

    this._add(new Queen(td, this, true, 1, 4, 0.0, 1.0));
    this._add(new King(td, this, true, 1, 5, Math.PI_2, 0.9));
    this._add(new Queen(td, this, false, 8, 4, 0.0, 1.0));
    this._add(new King(td, this, false, 8, 5, Math.PI_2, 0.9));

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

  void _add(Piece piece) {
    this._pieces.add(piece);
    this.children.add(piece);
  }

  void pick(Math.Color4 color) {
    for (int i = 0; i < this._pieces.length; ++i) {
      if (this._pieces[i].isPick(color)) {
        this._pieces[i].selected = !this._pieces[i].selected;
        break;
      }
    }
    
    for (int i = 0; i < this._tiles.length; ++i) {
      if (this._tiles[i].isPick(color)) {
        this._tiles[i].selected = !this._tiles[i].selected;
        break;
      }
    }
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

  Techniques.SolidColor nextpickTech() {
    const int max = 96;
    int index = this.children.length;
    Math.Color4 color = Math.Color4.fromHVS(index/max, 1.0, 1.0);
    return Techniques.SolidColor(color: color.trim32());
  }
}
