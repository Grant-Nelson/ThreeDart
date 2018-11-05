part of chess;

class Pawn extends Piece {
  static ThreeDart.Entity _shapeEntity;

  Pawn(ThreeDart.ThreeDart td, Board board, bool white, int row, int column, double angle):
    super._(board, white, row, column, angle) {
    if (_shapeEntity == null) {
      _shapeEntity = new ThreeDart.Entity(name: "pawn shape");
      IO.ObjType.fromFile("./resources/pawn.obj", td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          _shapeEntity.shape = loadedEntity.shape;
        });
    }

    this.name = (this._white?"white":"black")+" pawn ${this._column}";
    this.children.add(_shapeEntity);
  }

}
