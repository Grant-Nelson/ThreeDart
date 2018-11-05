part of chess;

///
class Board extends ThreeDart.Entity {
  List<Piece> _pieces;
  Materials _mats;

  Board(ThreeDart.ThreeDart td) {
    this._pieces = new List<Piece>();
    this._mats = new Materials();
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
      this._add(new Pawn(td, this, true, 2, i, 0.0));
      this._add(new Pawn(td, this, false, 7, i, 0.0));
    }

    this._add(new Rook(td, this, true, 1, 1, 0.0));
    this._add(new Rook(td, this, true, 1, 8, 0.0));
    this._add(new Rook(td, this, false, 8, 1, 0.0));
    this._add(new Rook(td, this, false, 8, 8, 0.0));

    this._add(new Knight(td, this, true, 1, 2, 0.0));
    this._add(new Knight(td, this, true, 1, 7, Math.PI));
    this._add(new Knight(td, this, false, 8, 2, 0.0));
    this._add(new Knight(td, this, false, 8, 7, Math.PI));

    this._add(new Bishop(td, this, true, 1, 3, -Math.PI_2));
    this._add(new Bishop(td, this, true, 1, 6, Math.PI_2));
    this._add(new Bishop(td, this, false, 8, 3, -Math.PI_2));
    this._add(new Bishop(td, this, false, 8, 6, Math.PI_2));

    this._add(new Queen(td, this, true, 1, 4, 0.0));
    this._add(new King(td, this, true, 1, 5, Math.PI_2));
    this._add(new Queen(td, this, false, 8, 4, 0.0));
    this._add(new King(td, this, false, 8, 5, Math.PI_2));
  }
  
  Materials get materials => this._mats;

  void _add(Piece piece) {
    this._pieces.add(piece);
    this.children.add(piece);
  }

}