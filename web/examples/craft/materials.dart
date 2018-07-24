part of craft;

class Materials {
  static const String imgFolder = "./examples/craft/resources/";

  ThreeDart.ThreeDart _td;
  Map<int, int> _groupOffset;
  List<Techniques.MaterialLight> _mats;

  Materials(this._td) {
    this._groupOffset = new Map<int, int>();
    this._mats = new List<Techniques.MaterialLight>();

    this._addCubeEntities(BlockType.Test,        "test", true);
    this._addCubeEntities(BlockType.Dirt,        "dirt");
    this._addCubeEntities(BlockType.Turf,        "turf");
    this._addCubeEntities(BlockType.Rock,        "rock");
    this._addCubeEntities(BlockType.Sand,        "sand");
    this._addCubeEntities(BlockType.DryLeaves,   "dryLeaves");
    this._addCubeEntities(BlockType.Trunk,       "trunk");
    this._addCubeEntities(BlockType.Brick,       "brick");
    this._addCubeEntities(BlockType.RedShine,    "redShine",    true);
    this._addCubeEntities(BlockType.WhiteShine,  "whiteShine",  true);
    this._addCubeEntities(BlockType.YellowShine, "yellowShine", true);
    this._addCubeEntities(BlockType.BlackShine,  "blackShine",  true);
    this._addCubeEntities(BlockType.Leaves,      "leaves");

    // TODO: Animate the water
    this._addSetEntities(BlockType.Water,       "water", 1, true);
    this._addSetEntities(BlockType.Grass,       "grass", 6);
    this._addSetEntities(BlockType.Fern,        "fern", 6);
    this._addSetEntities(BlockType.WhiteFlower, "whiteFlower", 4);
    this._addSetEntities(BlockType.BlueFlower,  "blueFlower", 4);
    this._addSetEntities(BlockType.RedFlower,   "redFlower", 4);
    this._addSetEntities(BlockType.Mushroom,    "mushroom", 4);
  }
  
  int groupOffset(int value) => this._groupOffset[value];
  List<Techniques.MaterialLight> get materials => this._mats;

  int _addEntity(String path, [bool shiny = false]) {
    Textures.Texture2D blockTxt = this._td.textureLoader.
      load2DFromFile(imgFolder+path, wrapEdges: true, nearest: false, mipMap: true);

    Techniques.MaterialLight tech = new Techniques.MaterialLight()
      ..emission.texture2D = blockTxt
      ..alpha.texture2D = blockTxt;

    if (shiny) {
      tech.specular
        ..color = new Math.Color3.white()
        ..shininess = 100.0;
    }

    this._mats.add(tech);
    return this._mats.length - 1;
  }

  void _addCubeEntities(int blockType, String basePath, [bool shiny = false]) {
    int start = this._addEntity(basePath+"Top.png", shiny);
    this._addEntity(basePath+"Bottom.png", shiny);
    this._addEntity(basePath+"Left.png", shiny);
    this._addEntity(basePath+"Right.png", shiny);
    this._addEntity(basePath+"Front.png", shiny);
    this._addEntity(basePath+"Back.png", shiny);
    this._groupOffset[blockType] = start;
  }

  void _addSetEntities(int blockType, String basePath, int count, [bool shiny = false]) {
    int start = -1;
    for (int i = 1; i <= count; i++) {
      int index = this._addEntity(basePath+"$i.png", shiny);
      if (start < 0) start = index;
    }
    this._groupOffset[blockType] = start;
  }
}
