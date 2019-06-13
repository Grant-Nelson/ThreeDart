part of chess;

class Game {

  Board _board;
  bool _whiteTurn;
  Piece _selected;
  State _state;

  Game(Board this._board) {
    this._whiteTurn = true;
    this._selected = null;
    this._state = new State.initial();
    this._board.setLocations(this._state);
  }

  void pick(Math.Color4 color) {
    Piece piece = this._board.pickPiece(color);
    if (piece != null) {
      if (piece.white == this._whiteTurn) {
        this._pieceSelected(piece);
        return;
      }
      if (piece.highlighted) {
        //this._moveTo(piece.row, piece.column); TODO
        return;
      }
    }
    
    Tile tile = this._board.pickTile(color);
    if (tile != null) {
      Piece piece = this._board.findPiece(tile.location);
      if ((piece != null) && (piece.white == this._whiteTurn)) {
        this._pieceSelected(piece);
        return;
      }
      if (tile.highlighted) {
        //this._moveTo(tile.row, tile.column); TODO
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
        Tile tile = this._board.findTile(this._selected.location);
        tile.selected = true;

        List<Movement> movements = this._state.getMovementsForPiece(this._selected.stateItem);
        // TODO: set movement highlights
      }
    }
  }

  void _moveTo(Location loc) {
    this._board.clearHighlights();
    this._board.clearSelections();

    //Piece piece = this._board.findPiece(loc);
    //if (piece != null) piece.kill();

    this._selected.setLocation(loc);
    this._selected = null;

    this._whiteTurn = !this._whiteTurn;
  }
}