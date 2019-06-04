part of chess;

class Game {

  Board _board;
  bool _whiteTurn;
  Piece _selected;

  Game(Board this._board) {
    this._whiteTurn = true;
    this._selected = null;
  }

  void pick(Math.Color4 color) {
    Piece piece = this._board.pickPiece(color);
    if (piece != null) {
        piece.selected = !piece.selected;
        return;
    }
    
    Tile tile = this._board.pickTile(color);
    if (tile != null) {
        tile.selected = !tile.selected;
        return;
    }
  }
}