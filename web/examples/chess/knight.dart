part of chess;

class Knight extends Piece {
  static ThreeDart.Entity _colorShapeEntity;
  static ThreeDart.Entity _pickShapeEntity;

  Knight(ThreeDart.ThreeDart td, Board board, bool white, int row, int column, double angle, double scalar):
    super._(board, white, row, column, angle, scalar) {
    if (_colorShapeEntity == null) {
      _colorShapeEntity = new ThreeDart.Entity(name: "color knight shape");
      _pickShapeEntity = new ThreeDart.Entity(name: "pick knight shape");
      IO.ObjType.fromFile("./resources/knight.obj", td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          _colorShapeEntity.shape = loadedEntity.shape;
          _pickShapeEntity.shape = loadedEntity.shape;
        });
    }
    this._initialize((this._white?"white":"black")+" knight ${this._column}", _colorShapeEntity, _pickShapeEntity);
  }
}
