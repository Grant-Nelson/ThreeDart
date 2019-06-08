part of chess;

class King extends Piece {
  static ThreeDart.Entity _colorShapeEntity;
  static ThreeDart.Entity _pickShapeEntity;

  King(ThreeDart.ThreeDart td, Board board, bool white, int row, int column, double angle, double scalar):
    super._(board, white, row, column, angle, scalar) {
    if (_colorShapeEntity == null) {
      _colorShapeEntity = new ThreeDart.Entity(name: "color king shape");
      _pickShapeEntity = new ThreeDart.Entity(name: "pick king shape");
      IO.ObjType.fromFile("./resources/king.obj", td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          _colorShapeEntity.shape = loadedEntity.shape;
          _pickShapeEntity.shape = loadedEntity.shape;
        });
    }
    this._initialize((this._white?"white":"black")+" king ${this._column}", _colorShapeEntity, _pickShapeEntity);
  }

  @override
  void setMovement() {
    this._board._highlightPath(this._white, this._row+1, this._column+1);
    this._board._highlightPath(this._white, this._row-1, this._column+1);
    this._board._highlightPath(this._white, this._row+1, this._column-1);
    this._board._highlightPath(this._white, this._row-1, this._column-1);
    this._board._highlightPath(this._white, this._row+1, this._column);
    this._board._highlightPath(this._white, this._row-1, this._column);
    this._board._highlightPath(this._white, this._row, this._column+1);
    this._board._highlightPath(this._white, this._row, this._column-1);
  }
}
