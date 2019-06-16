part of graphics;

class Pawn extends Piece {
  static ThreeDart.Entity _colorShapeEntity;
  static ThreeDart.Entity _pickShapeEntity;

  Pawn(ThreeDart.ThreeDart td, Board board, bool white, int index, double angle, double scalar):
    super._(board, white, angle, scalar) {
    if (_colorShapeEntity == null) {
      _colorShapeEntity = new ThreeDart.Entity(name: "color pawn shape");
      _pickShapeEntity = new ThreeDart.Entity(name: "pick pawn shape");
      IO.ObjType.fromFile("./resources/pawn.obj", td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          _colorShapeEntity.shape = loadedEntity.shape;
          _pickShapeEntity.shape = loadedEntity.shape;
        });
    }

    String name = (this._white?"white":"black") + " pawn $index";
    int value = (this._white?game.State.White:game.State.Black)|game.State.Pawn|index;
    this._initialize(name, value, _colorShapeEntity, _pickShapeEntity);
  }
}
