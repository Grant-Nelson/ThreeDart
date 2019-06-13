part of chess;

class Knight extends Piece {
  static ThreeDart.Entity _colorShapeEntity;
  static ThreeDart.Entity _pickShapeEntity;

  Knight(ThreeDart.ThreeDart td, Board board, bool white, int index, double angle, double scalar):
    super._(board, white, angle, scalar) {
    if (_colorShapeEntity == null) {
      _colorShapeEntity = new ThreeDart.Entity(name: "color knight shape");
      _pickShapeEntity = new ThreeDart.Entity(name: "pick knight shape");
      IO.ObjType.fromFile("./resources/knight.obj", td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          _colorShapeEntity.shape = loadedEntity.shape;
          _pickShapeEntity.shape = loadedEntity.shape;
        });
    }
    this._initialize((this._white?"white":"black") + " knight $index", 
      (this._white?State.White:State.Black)|State.Knight|index, _colorShapeEntity, _pickShapeEntity);
  }
}
