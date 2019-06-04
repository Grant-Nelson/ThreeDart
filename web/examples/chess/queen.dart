part of chess;

class Queen extends Piece {
  static ThreeDart.Entity _colorShapeEntity;
  static ThreeDart.Entity _pickShapeEntity;

  Queen(ThreeDart.ThreeDart td, Board board, bool white, int row, int column, double angle, double scalar):
    super._(board, white, row, column, angle, scalar) {
    if (_colorShapeEntity == null) {
      _colorShapeEntity = new ThreeDart.Entity(name: "color queen shape");
      _pickShapeEntity = new ThreeDart.Entity(name: "pick queen shape");
      IO.ObjType.fromFile("./resources/queen.obj", td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          _colorShapeEntity.shape = loadedEntity.shape;
          _pickShapeEntity.shape = loadedEntity.shape;
        });
    }
    this._initialize((this._white?"white":"black")+" queen ${this._column}", _colorShapeEntity, _pickShapeEntity);
  }
}
