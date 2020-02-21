part of engine;

class Layer extends ThreeDart.Entity {
  Room _room;
  double _scaleDX;
  double _scaleDY;
  Movers.Constant _mover;

  Layer._(Room this._room, double this._scaleDX, double this._scaleDY) {
    this._mover = new Movers.Constant.identity();
    this.mover = this._mover;
  }
  
  ThreeDart.Entity addBlock(int x, int y, String texture) =>
    this.addFlat(x*50.0, y*50.0, 50.0, 50.0, -10.0, 1.0, 1.0, texture);

  ThreeDart.Entity addFlat(double x, double y, double width, double height,
    double z, double scaleU, double scaleV, String texture, [bool wrapEdges = true]) {
    Shapes.Shape shape = Shapes.square()
      ..applyPositionMatrix(
        Math.Matrix4.translate(x+width*0.5, -y+height*0.5, z)*
        Math.Matrix4.rotateX(Math.PI)*
        Math.Matrix4.scale(width*0.5, height*0.5, 1.0))
      ..applyTexture2DMatrix(
        Math.Matrix3.scale(scaleU, scaleV, 1.0));

    String path = Constants.imgFolder+texture;
    Textures.Texture2D tex2D = this._room.td.textureLoader.load2DFromFile(path, wrapEdges: wrapEdges);

    Techniques.MaterialLight tech = new Techniques.MaterialLight()
      ..ambient.texture2D = tex2D
      ..alpha.texture2D = tex2D
      ..lights.add(this._room.globalLight);

    ThreeDart.Entity entity = new ThreeDart.Entity()
      ..shape = shape
      ..technique = tech;

    this.children.add(entity);
    return entity;
  }
  
  void setView(Math.Point2 loc) {
    this._mover.matrix = new Math.Matrix4.translate(
      loc.x*this._scaleDX,
      loc.y*this._scaleDY, 0.0);
  }
}
