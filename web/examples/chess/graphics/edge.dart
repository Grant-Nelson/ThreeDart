part of graphics;

/// An entity for rendering the edge of the chess board.
class Edge extends ThreeDart.Entity {

  /// The singleton for the shape of the edge with the render cache for the color shader.
  /// Used for rendering to the screen.
  static ThreeDart.Entity? _shapeEntity;

  /// Creates a new edge entity.
  Edge(ThreeDart.ThreeDart td, Board board, double dx, double dz, double angle, int textureIndex) {
    var shapeEntity = _shapeEntity;
    if (shapeEntity == null) {
      _shapeEntity = shapeEntity = new ThreeDart.Entity(name: "edge shape");
      IO.ObjType.fromFile("./resources/edge.obj", td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          _shapeEntity?.shape = loadedEntity.shape;
        });
    }

    this.mover = new Movers.Constant(
      new Math.Matrix4.translate(dx-4.0, 0.0, dz-4.0)*
      new Math.Matrix4.rotateY(angle));
    this.name = "edge";
    this.children.add(shapeEntity);
    this.technique = board.materials.edgeTechs[textureIndex];
  }
}