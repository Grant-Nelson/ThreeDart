part of graphics;

/// Queen is a piece which the player starts with two of.
/// Queens move diagonally, horizontally, and vertically with no restriction to the distance.
/// https://en.wikipedia.org/wiki/Queen_(chess)
class Queen extends Piece {
  
  /// The singleton for the shape of the queen with the render cache for the color shader.
  /// Used for rendering to the screen.
  static ThreeDart.Entity? _colorShapeEntity = null;
  
  /// The singleton for the shape of the queen with the render cache for the picker shader.
  /// Used for determining which piece or tile was clicked on.
  static ThreeDart.Entity? _pickShapeEntity = null;

  /// Creates a new queen entity.
  Queen(ThreeDart.ThreeDart td, Board board, bool white, int index, double angle, double scalar):
    super._(board, white, angle, scalar) {
    ThreeDart.Entity? colorEntity = _colorShapeEntity;
    ThreeDart.Entity? pickEntity  = _pickShapeEntity;
    if (colorEntity == null || pickEntity == null) {
      _colorShapeEntity = colorEntity = new ThreeDart.Entity(name: 'color queen shape');
      _pickShapeEntity  = pickEntity  = new ThreeDart.Entity(name: 'pick queen shape');
      IO.ObjType.fromFile('./resources/queen.obj', td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          colorEntity?.shape = loadedEntity.shape;
          pickEntity?.shape = loadedEntity.shape;
        });
    }

    String name = (this._white?'white':'black') + ' queen $index';
    game.TileValue value = new game.TileValue.queen(this._white, index);
    this._initialize(name, value, colorEntity, pickEntity);
  }
}
