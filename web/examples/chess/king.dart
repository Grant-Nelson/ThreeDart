part of chess;

class King extends Piece {
  static ThreeDart.Entity _shapeEntity;

  King(ThreeDart.ThreeDart td, Board board, bool white, int row, int column, double angle):
    super._(board, white, row, column, angle) {
    if (_shapeEntity == null) {
      _shapeEntity = new ThreeDart.Entity(name: "king shape");
      IO.ObjType.fromFile("./resources/king.obj", td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          _shapeEntity.shape = loadedEntity.shape;
        });
    }

    this.name = (this._white?"white":"black")+" king ${this._column}";
    this.children.add(_shapeEntity);
  }

}
