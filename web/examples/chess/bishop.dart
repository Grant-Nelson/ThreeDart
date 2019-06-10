part of chess;

/// Bishop is a piece which the player starts with two of.
/// Bishops move diagonally with no restriction to the distance.
/// https://en.wikipedia.org/wiki/Bishop_(chess)
class Bishop extends Piece {

  /// The singleton for the shape of the bishop with the render cache for the color shader.
  /// Used for rendering to the screen.
  static ThreeDart.Entity _colorShapeEntity;

  /// The singleton for the shape of the bishop with the render cache for the picker shader.
  /// Used for determining which piece or tile was clicked on.
  static ThreeDart.Entity _pickShapeEntity;

  Bishop(ThreeDart.ThreeDart td, Board board, bool white, int index, double angle, double scalar):
    super._(board, white, angle, scalar) {
    if (_colorShapeEntity == null) {
      _colorShapeEntity = new ThreeDart.Entity(name: "color bishop shape");
      _pickShapeEntity = new ThreeDart.Entity(name: "pick bishop shape");
      IO.ObjType.fromFile("./resources/bishop.obj", td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          _colorShapeEntity.shape = loadedEntity.shape;
          _pickShapeEntity.shape = loadedEntity.shape;
        });
    }
    this._initialize((this._white?"white":"black") + " bishop $index",
      (this._white?State.White:State.Black) & State.Bishop & index, _colorShapeEntity, _pickShapeEntity);
  }
}
