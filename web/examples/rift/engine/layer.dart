part of engine;

class Layer extends Scenes.EntityPass {
  Room _room;

  Layer._(Room this._room);

  ThreeDart.Entity AddFlat(double x, double y, double width, double height, String texture, [bool wrapEdges = false]) {
    Techniques.MaterialLight tech = new Techniques.MaterialLight()
      ..diffuse.texture2D = this._room.td.textureLoader.load2DFromFile(texture, wrapEdges: wrapEdges)
      ..lights.add(this._room.globalLight);

    ThreeDart.Entity entity = new ThreeDart.Entity()
      ..shape = Shapes.cube()
      ..technique = tech;

    this.children.add(entity);
    return entity;
  }


}