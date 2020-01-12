part of graphics;

/// King is a piece which the player only has one of.
/// Kings move diagonally, vertically, and horizontally only one tile.
/// https://en.wikipedia.org/wiki/King_(chess)
class King extends Piece {

  /// The singleton for the shape of the king with the render cache for the color shader.
  /// Used for rendering to the screen.
  static ThreeDart.Entity _colorShapeEntity;

  /// The singleton for the shape of the king with the render cache for the picker shader.
  /// Used for determining which piece or tile was clicked on.
  static ThreeDart.Entity _pickShapeEntity;

  /// Creates a new king entity.
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
