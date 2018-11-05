part of chess;

class Queen extends Piece {
  static ThreeDart.Entity _shapeEntity;

  Queen(ThreeDart.ThreeDart td, Board board, bool white, int row, int column, double angle):
    super._(board, white, row, column, angle) {
    if (_shapeEntity == null) {
      _shapeEntity = new ThreeDart.Entity(name: "queen shape");
      IO.ObjType.fromFile("./resources/queen.obj", td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          _shapeEntity.shape = loadedEntity.shape;
        });
    }

    this.name = (this._white?"white":"black")+" queen ${this._column}";
    this.children.add(_shapeEntity);
  }

}
