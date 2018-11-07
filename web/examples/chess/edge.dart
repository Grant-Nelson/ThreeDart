part of chess;

class Edge extends ThreeDart.Entity {
  static ThreeDart.Entity _shapeEntity;

  Movers.Constant _mover;
  Board _board;

  Edge(ThreeDart.ThreeDart td, this._board) {
    if (_shapeEntity == null) {
      _shapeEntity = new ThreeDart.Entity(name: "edge shape");
      IO.ObjType.fromFile("./resources/edge.obj", td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          _shapeEntity.shape = loadedEntity.shape;
        });
    }

    this.mover = new Movers.Constant.translate(-4.0, 0.0, -4.0);
    this.name = "edge";
    this.children.add(_shapeEntity);
    this.technique = this._board.materials.selectedWhitePieceTech;
  }
}