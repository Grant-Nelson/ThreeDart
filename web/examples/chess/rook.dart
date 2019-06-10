part of chess;

class Rook extends Piece {
  static ThreeDart.Entity _colorShapeEntity;
  static ThreeDart.Entity _pickShapeEntity;

  Rook(ThreeDart.ThreeDart td, Board board, bool white, int index, double angle, double scalar):
    super._(board, white, angle, scalar) {
    if (_colorShapeEntity == null) {
      _colorShapeEntity = new ThreeDart.Entity(name: "rook shape");
      _pickShapeEntity = new ThreeDart.Entity(name: "rook shape");
      IO.ObjType.fromFile("./resources/rook.obj", td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          _colorShapeEntity.shape = loadedEntity.shape;
          _pickShapeEntity.shape = loadedEntity.shape;
        });
    }
    this._initialize((this._white?"white":"black") + " rook $index",
      (this._white?State.White:State.Black) & State.Rook & index, _colorShapeEntity, _pickShapeEntity);
  }
}
