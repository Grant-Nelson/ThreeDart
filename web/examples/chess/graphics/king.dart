part of graphics;

class King extends Piece {
  static ThreeDart.Entity _colorShapeEntity;
  static ThreeDart.Entity _pickShapeEntity;

  King(ThreeDart.ThreeDart td, Board board, bool white, double angle, double scalar):
    super._(board, white, angle, scalar) {
    if (_colorShapeEntity == null) {
      _colorShapeEntity = new ThreeDart.Entity(name: "color king shape");
      _pickShapeEntity = new ThreeDart.Entity(name: "pick king shape");
      IO.ObjType.fromFile("./resources/king.obj", td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          _colorShapeEntity.shape = loadedEntity.shape;
          _pickShapeEntity.shape = loadedEntity.shape;
        });
    }

    String name = (this._white?"white":"black") + " king";
    game.TileValue value = new game.TileValue.king(this._white);
    this._initialize(name, value, _colorShapeEntity, _pickShapeEntity);
  }
}
