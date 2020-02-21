part of graphics;

/// Knight is a piece which the player starts with two of.
/// Knights move in an "L" shape of 2 by 1 tiles.
/// https://en.wikipedia.org/wiki/Knight_(chess)
class Knight extends Piece {

  /// The singleton for the shape of the knight with the render cache for the color shader.
  /// Used for rendering to the screen.
  static ThreeDart.Entity _colorShapeEntity;

  /// The singleton for the shape of the knight with the render cache for the picker shader.
  /// Used for determining which piece or tile was clicked on.
  static ThreeDart.Entity _pickShapeEntity;

  /// Creates a new knight entity.
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

    String name = (this._white?"white":"black") + " knight $index";
    game.TileValue value = new game.TileValue.knight(this._white, index);
    this._initialize(name, value, _colorShapeEntity, _pickShapeEntity);
  }
}
