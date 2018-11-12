part of chess;

class Rook extends Piece {
  static ThreeDart.Entity _shapeEntity;

  Rook(ThreeDart.ThreeDart td, Board board, bool white, int row, int column, double angle, double scalar):
    super._(board, white, row, column, angle, scalar) {
    if (_shapeEntity == null) {
      _shapeEntity = new ThreeDart.Entity(name: "rook shape");
      IO.ObjType.fromFile("./resources/rook.obj", td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          _shapeEntity.shape = loadedEntity.shape;
        });
    }

    this.name = (this._white?"white":"black")+" rook ${this._column}";
    this.children.add(_shapeEntity);
  }

}
