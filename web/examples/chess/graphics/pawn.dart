part of graphics;

/// Pawn is a piece which the player starts with eight of.
/// Pawns move forward only one space.
/// https://en.wikipedia.org/wiki/Pawn_(chess)
class Pawn extends Piece {

  /// The singleton for the shape of the pawn with the render cache for the color shader.
  /// Used for rendering to the screen.
  static ThreeDart.Entity _colorShapeEntity;

  /// The singleton for the shape of the pawn with the render cache for the picker shader.
  /// Used for determining which piece or tile was clicked on.
  static ThreeDart.Entity _pickShapeEntity;

  /// Creates a new pawn entity.
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
    game.TileValue value = new game.TileValue.pawn(this._white, index);
    this._initialize(name, value, _colorShapeEntity, _pickShapeEntity);
  }
}
