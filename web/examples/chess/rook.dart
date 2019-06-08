part of chess;

class Rook extends Piece {
  static ThreeDart.Entity _colorShapeEntity;
  static ThreeDart.Entity _pickShapeEntity;

  Rook(ThreeDart.ThreeDart td, Board board, bool white, int row, int column, double angle, double scalar):
    super._(board, white, row, column, angle, scalar) {
    if (_colorShapeEntity == null) {
      _colorShapeEntity = new ThreeDart.Entity(name: "rook shape");
      _pickShapeEntity = new ThreeDart.Entity(name: "rook shape");
      IO.ObjType.fromFile("./resources/rook.obj", td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          _colorShapeEntity.shape = loadedEntity.shape;
          _pickShapeEntity.shape = loadedEntity.shape;
        });
    }
    this._initialize((this._white?"white":"black")+" rook ${this._column}", _colorShapeEntity, _pickShapeEntity);
  }

  @override
  void setMovement() {
    if (!this._hasMoved) {
      // TODO: Implement castle move
      // Also, how are we going to differentiate between just moving
      // normally and castle, as in how will the player pick it.
      // Maybe highlight the King of the same color and then change
      // the [toMove] method to check for that condition.
    }

    for (int i = 1; i < 8; ++i) {
      if (this._board._highlightPath(this._white, this._row+i, this._column)) break;
    }
    
    for (int i = 1; i < 8; ++i) {
      if (this._board._highlightPath(this._white, this._row-i, this._column)) break;
    }
    
    for (int i = 1; i < 8; ++i) {
      if (this._board._highlightPath(this._white, this._row, this._column-i)) break;
    }
    
    for (int i = 1; i < 8; ++i) {
      if (this._board._highlightPath(this._white, this._row, this._column-i)) break;
    }
  }
}
