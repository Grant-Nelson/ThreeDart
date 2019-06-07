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
      if (piece.white == this._whiteTurn) {
        this._pieceSelected(piece);
        return;
      }
      if (piece.highlighted) {
        this._moveTo(piece.row, piece.column);
        return;
      }
    }
    
    Tile tile = this._board.pickTile(color);
    if (tile != null) {
      Piece piece = this._board.findPiece(tile.row, tile.column);
      if ((piece != null) && (piece.white == this._whiteTurn)) {
        this._pieceSelected(piece);
        return;
      }
      if (tile.highlighted) {
        this._moveTo(tile.row, tile.column);
        return;
      }
    }
  }

  void _pieceSelected(Piece piece) {
    if (this._selected != piece) {
      if (this._selected != null) {
        this._selected.selected = false;
        this._board.clearHighlights();
        this._board.clearSelections();
      }

      this._selected = piece;
      if (this._selected != null) {
        this._selected.selected = true;
        Tile tile = this._board.findTile(this._selected.row, this._selected.column);
        tile.selected = true;
        this._selected.setMovement();
      }
    }
  }

  void _moveTo(int row, int column) {
    this._board.clearHighlights();
    this._board.clearSelections();

    Piece piece = this._board.findPiece(row, column);
    if (piece != null) piece.kill();

    this._selected.setLocation(row, column);
    this._selected = null;

    this._whiteTurn = !this._whiteTurn;
  }
}