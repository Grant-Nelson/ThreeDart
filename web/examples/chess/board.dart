part of chess;

///
class Board extends ThreeDart.Entity {
  List<Piece> _pieces;
  List<Tile> _tiles;
  Materials _mats;

  Board(ThreeDart.ThreeDart td) {
    this._pieces = new List<Piece>();
    this._tiles = new List<Tile>();
    this._mats = new Materials(td);
    this.name = "board";

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
    
    this.children.add(new Edge(td, this, 0.0, 0.0, 0.0, 0));
    this.children.add(new Edge(td, this, 8.0, 0.0, Math.PI_2, 1));
    this.children.add(new Edge(td, this, 8.0, 8.0, Math.PI, 2));
    this.children.add(new Edge(td, this, 0.0, 8.0, Math.PI3_2, 3));
  }
  
  Materials get materials => this._mats;

  void _add(Piece piece) {
    this._pieces.add(piece);
    this.children.add(piece);
  }

}