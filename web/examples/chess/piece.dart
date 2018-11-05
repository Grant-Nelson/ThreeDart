part of chess;

abstract class Piece extends ThreeDart.Entity {
  int _row;
  int _column;
  double _angle;
  Movers.Constant _mover;
  Board _board;
  bool _white;
  bool _hasMoved;
  bool _dead;
  bool _selected;

  Piece._(this._board, this._white, this._row, this._column, this._angle) {
    this._mover = new Movers.Constant();
    this.mover = this._mover;
    this._hasMoved = false;
    this._dead = false;
    this._selected = false;
    
    this._updateLocation();
    this._updateTech();
  }

  void _updateLocation() {
    this._mover.matrix = 
      new Math.Matrix4.translate(this._row.toDouble()-4.5, 0.0, this._column.toDouble()-4.5)*
      new Math.Matrix4.rotateY(this._angle);
  }

  void _updateTech() {
    if (this._white) {
      if (this._selected)
        this.technique = this._board.materials.selectedWhitePieceTech;
      else this.technique = this._board.materials.whitePieceTech;
    } else {
      if (this._selected)
        this.technique = this._board.materials.selectedBlackPieceTech;
      else this.technique = this._board.materials.blackPieceTech;
    }
  }
}