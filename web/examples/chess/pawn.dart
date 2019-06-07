part of chess;

class Pawn extends Piece {
  static ThreeDart.Entity _colorShapeEntity;
  static ThreeDart.Entity _pickShapeEntity;

  Pawn(ThreeDart.ThreeDart td, Board board, bool white, int row, int column, double angle, double scalar):
    super._(board, white, row, column, angle, scalar) {
    if (_colorShapeEntity == null) {
      _colorShapeEntity = new ThreeDart.Entity(name: "color pawn shape");
      _pickShapeEntity = new ThreeDart.Entity(name: "pick pawn shape");
      IO.ObjType.fromFile("./resources/pawn.obj", td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          _colorShapeEntity.shape = loadedEntity.shape;
          _pickShapeEntity.shape = loadedEntity.shape;
        });
    }
    this._initialize((this._white?"white":"black")+" pawn ${this._column}", _colorShapeEntity, _pickShapeEntity);
  }

  @override
  void setMovement() {
    int dir = this._white? 1: -1;
    this._board._highlightIfOpponent(this._white, this._row+dir, this._column+1);
    this._board._highlightIfOpponent(this._white, this._row+dir, this._column-1);
    if (this._board._highlightIfEmpty(this._row+dir, this._column)) {
      if (!this._hasMoved) this._board._highlightIfEmpty(this._row+dir+dir, this._column);
    }
  }
}
