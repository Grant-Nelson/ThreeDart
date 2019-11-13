part of engine;

class Layer extends Scenes.EntityPass {
  Room _room;

  Layer._(Room this._room);

  ThreeDart.Entity AddFlat(double x, double y, double width, double height,
    double z, double scaleDX, double scaleDY, double scaleU, double scaleV, String texture, [bool wrapEdges = true]) {
    Shapes.Shape shape = Shapes.square()
      ..applyPositionMatrix(
        Math.Matrix4.translate(x+width*0.5, y+height*0.5, z)*
        Math.Matrix4.rotateX(Math.PI)*
        Math.Matrix4.scale(width*0.5, height*0.5, 1.0))
      ..applyTexture2DMatrix(
        Math.Matrix3.scale(scaleU, scaleV, 1.0));

    String path = Constants.imgFolder+texture;
    Techniques.MaterialLight tech = new Techniques.MaterialLight()
      ..ambient.texture2D = this._room.td.textureLoader.load2DFromFile(path, wrapEdges: wrapEdges)
      ..lights.add(this._room.globalLight);

    ThreeDart.Entity entity = new ThreeDart.Entity()
      ..shape = shape
      ..technique = tech;

    this.children.add(entity);
    return entity;
  }

}
