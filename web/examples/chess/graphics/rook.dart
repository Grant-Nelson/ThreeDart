part of graphics;

/// Rook is a piece which the player starts with two of.
/// Rooks move horizontally and vertically with no restriction to the distance.
/// https://en.wikipedia.org/wiki/Rook_(chess)
class Rook extends Piece {

  /// The singleton for the shape of the rook with the render cache for the color shader.
  /// Used for rendering to the screen.
  static ThreeDart.Entity _colorShapeEntity;

  /// The singleton for the shape of the rook with the render cache for the picker shader.
  /// Used for determining which piece or tile was clicked on.
  static ThreeDart.Entity _pickShapeEntity;

  /// Creates a new rook entity.
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

    String name = (this._white?"white":"black") + " rook $index";
    game.TileValue value = new game.TileValue.rook(this._white, index);
    this._initialize(name, value, _colorShapeEntity, _pickShapeEntity);
  }
}
