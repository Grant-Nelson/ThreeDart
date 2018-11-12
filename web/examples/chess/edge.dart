part of chess;

class Edge extends ThreeDart.Entity {
  static ThreeDart.Entity _shapeEntity;

  Board _board;

  Edge(ThreeDart.ThreeDart td, this._board, double dx, double dz, double angle, int textureIndex) {
    if (_shapeEntity == null) {
      _shapeEntity = new ThreeDart.Entity(name: "edge shape");
      IO.ObjType.fromFile("./resources/edge.obj", td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          _shapeEntity.shape = loadedEntity.shape;
        });
    }
    
    this.mover = new Movers.Constant( 
      new Math.Matrix4.translate(dx-4.0, 0.0, dz-4.0)*
      new Math.Matrix4.rotateY(angle));
    this.name = "edge";
    this.children.add(_shapeEntity);
    this.technique = this._board.materials.edgeTechs[textureIndex];
  }
}