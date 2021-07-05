part of graphics;

/// Bishop is a piece which the player starts with two of.
/// Bishops move diagonally with no restriction to the distance.
/// https://en.wikipedia.org/wiki/Bishop_(chess)
class Bishop extends Piece {

  /// The singleton for the shape of the bishop with the render cache for the color shader.
  /// Used for rendering to the screen.
  static ThreeDart.Entity? _colorShapeEntity = null;

  /// The singleton for the shape of the bishop with the render cache for the picker shader.
  /// Used for determining which piece or tile was clicked on.
  static ThreeDart.Entity? _pickShapeEntity = null;

  /// Creates a new bishop entity.
  Bishop(ThreeDart.ThreeDart td, Board board, bool white, int index, double angle, double scalar):
    super._(board, white, angle, scalar) {
    var colorEntity = _colorShapeEntity;
    var pickEntity  = _pickShapeEntity;
    if (colorEntity == null || pickEntity == null) {
      _colorShapeEntity = colorEntity = new ThreeDart.Entity(name: 'color bishop shape');
      _pickShapeEntity  = pickEntity  = new ThreeDart.Entity(name: 'pick bishop shape');
      IO.ObjType.fromFile('./resources/bishop.obj', td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          colorEntity?.shape = loadedEntity.shape;
          pickEntity?.shape  = loadedEntity.shape;
        });
    }

    String name = (this._white?'white':'black') + ' bishop $index';
    game.TileValue value = new game.TileValue.bishop(this._white, index);
    this._initialize(name, value, colorEntity, pickEntity);
  }
}
