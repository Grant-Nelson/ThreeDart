part of graphics;

/// TODO: Comment
class Board extends ThreeDart.Entity {
  game.Game _game;
  List<Piece> _pieces;
  List<Tile> _tiles;
  ThreeDart.Entity _table;
  ThreeDart.Entity _edges;
  Materials _mats;
  bool _showPick;

  Board(ThreeDart.ThreeDart td, game.Game this._game) {
    this._pieces = new List<Piece>();
    this._tiles = new List<Tile>();
    this._mats = new Materials(td);
    this.name = "board";
    this._showPick = false;

    for (int i = 1; i <= 8; i++) {
      for (int j = 1; j <= 8; j++) {
        Tile tile = new Tile(td, this, ((i+j)%2) == 0, new game.Location(i, j));
        this._tiles.add(tile);
        this.children.add(tile);
      }
    }

    for (int i = 1; i <= 8; i++) {
      this._add(new Pawn(td, this, true,  i-1, 0.0, 0.7));
      this._add(new Pawn(td, this, false, i-1, 0.0, 0.7));
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

    this._add(new King(td,  this, true,  Math.PI_2, 0.9));
    this._add(new King(td,  this, false, Math.PI_2, 0.9));

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
  
  void pick(Math.Color4 color) {
    for (Piece piece in this._pieces) {
      if (piece.isPick(color)) {
        this._game.pick(piece.location);
        return;
      }
    }
    
    for (Tile tile in this._tiles) {
      if (tile.isPick(color)) {
        this._game.pick(tile.location);
        return;
      }
    }
  }
  
  Piece findPiece(game.TileValue stateValue) {
    for (Piece piece in this._pieces) {
      if (piece.stateItem == stateValue) return piece;
    }
    return null;
  }
  
  Piece pieceAt(game.Location loc) {
    for (Piece piece in this._pieces) {
      if (piece.location == loc) return piece;
    }
    return null;
  }

  Tile tileAt(game.Location loc) {
    for (Tile tile in this._tiles) {
      if (tile.location == loc) return tile;
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

  void setSelection(game.TileValue stateItem) {
    Piece piece = this.findPiece(stateItem);
    if (piece != null) {
      piece.selected = true;
      Tile tile = this.tileAt(piece.location);
      tile?.selected = true;
    }
  }

  void setLocations(game.State state) {
    for (Piece piece in this._pieces) {
      game.Location loc = state.findItem(piece.stateItem);
      piece.setLocation(loc);
      piece.enabled = loc.onBoard;
    }
  }

  void setHighlights(List<game.Movement> movements) {
    for (game.Movement movement in movements) {
      Tile tile = this.tileAt(movement.destination);
      tile.highlighted = true;
      //if (movement.opponent != null) {
      //  Piece piece = this.pieceAt(movement.opponent);
      //  piece.highlighted = true;
      //}
    }
  }
}
