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

  Bishop(ThreeDart.ThreeDart td, Board board, bool white, int row, int column, double angle, double scalar):
    super._(board, white, row, column, angle, scalar) {
    if (_colorShapeEntity == null) {
      _colorShapeEntity = new ThreeDart.Entity(name: "color bishop shape");
      _pickShapeEntity = new ThreeDart.Entity(name: "pick bishop shape");
      IO.ObjType.fromFile("./resources/bishop.obj", td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          _colorShapeEntity.shape = loadedEntity.shape;
          _pickShapeEntity.shape = loadedEntity.shape;
        });
    }
    this._initialize((this._white?"white":"black")+" bishop ${this._column}", _colorShapeEntity, _pickShapeEntity);
  }

  @override
  void setMovement() {
    for (int i = 1; i < 8; ++i) {
      if (this._board._highlightPath(this._white, this._row+i, this._column+i)) break;
    }
    
    for (int i = 1; i < 8; ++i) {
      if (this._board._highlightPath(this._white, this._row-i, this._column+i)) break;
    }
    
    for (int i = 1; i < 8; ++i) {
      if (this._board._highlightPath(this._white, this._row+i, this._column-i)) break;
    }
    
    for (int i = 1; i < 8; ++i) {
      if (this._board._highlightPath(this._white, this._row-i, this._column-i)) break;
    }
  }
}
