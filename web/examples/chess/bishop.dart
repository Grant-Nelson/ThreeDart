part of chess;

class Bishop extends Piece {
  static ThreeDart.Entity _colorShapeEntity;
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
