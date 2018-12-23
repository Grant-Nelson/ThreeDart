part of craft.game;

/// This defines which materials to use on which side of a block.
/// This will be associated with a block value in a map so that the chunk can pick
/// the correct materials when rendering.
class CubeData {

  /// The index of the material to apply to the top of the block.
  final int topIndex;

  /// The index of the material to apply to the bottom of the block.
  final int bottomIndex;

  /// The index of the material to apply to the left of the block.
  final int leftIndex;

  /// The index of the material to apply to the right of the block.
  final int rightIndex;

  /// The index of the material to apply to the front of the block.
  final int frontIndex;

  /// The index of the material to apply to the back of the block.
  final int backIndex;

  /// Creates a new cube data with the given values.
  CubeData(int this.topIndex, int this.bottomIndex, int this.leftIndex, int this.rightIndex, int this.frontIndex, int this.backIndex);
}

/// This loads and prepares all the materials (colors and textures) used for rendering.
class Materials {
  ThreeDart.ThreeDart _td;
  Map<int, CubeData> _cubeData;
  Map<int, List<int>> _matData;
  List<Techniques.MaterialLight> _mats;
  Lights.Directional _light;
  Techniques.MaterialLight _selection;
  Techniques.MaterialLight _crosshair;
  Textures.Texture2DChanger _waterChanger;

  /// Creates a new material collection and starts loading the materials.
  Materials(this._td) {
    this._cubeData = new Map<int, CubeData>();
    this._matData = new Map<int, List<int>>();
    this._mats = new List<Techniques.MaterialLight>();

    // Create the light source attached to most of the textures a used for the world being created.
    this._light = new Lights.Directional(color: new Math.Color3.white(),
      mover: new Movers.Constant.lookAtTarget(Math.Point3.zero,
      Math.Vector3.posZ, new Math.Point3(0.5, -1.0, 0.2)));

    int boundary       = this._addMat("boundary");
    int brick          = this._addMat("brick");
    int dirt           = this._addMat("dirt");
    int dryLeavesSide  = this._addMat("dryLeavesSide");
    int dryLeavesTop   = this._addMat("dryLeavesTop");
    int leaves         = this._addMat("leaves");
    int rock           = this._addMat("rock");
    int sand           = this._addMat("sand");
    int trunkEnd       = this._addMat("trunkEnd");
    int trunkSide      = this._addMat("trunkSide");
    int trunkTilted    = this._addMat("trunkTilted");
    int turfSide       = this._addMat("turfSide");
    int turfTop        = this._addMat("turfTop");
    int woodEnd        = this._addMat("woodEnd");
    int woodSide       = this._addMat("woodSide");
    int woodTilted     = this._addMat("woodTilted");

    int blackShine     = this._addMat("blackShine", true);
    int redShine       = this._addMat("redShine", true);
    int yellowShine    = this._addMat("yellowShine", true);
    int whiteShine     = this._addMat("whiteShine", true);

    int mushroomBottom = this._addMat("mushroomBottom");
    int mushroomSide   = this._addMat("mushroomSide");
    int mushroomTop    = this._addMat("mushroomTop");

    // Load alpha materials (done later so that the entities made in shaper are drawn later)
    int grass          = this._addMat("grass");
    int fern           = this._addMat("fern");
    int blueFlowers    = this._addMat("blueFlowers");
    int redFlowers     = this._addMat("redFlowers");
    int whiteFlowers   = this._addMat("whiteFlowers");

    this._waterChanger = new Textures.Texture2DChanger(
      textures: new List<Textures.Texture2D>.from([
        this._loadText("water1"),
        this._loadText("water2"),
        this._loadText("water3"),
      ]));
    int water = this._addMatTxt(this._waterChanger, true);

    //                value,                 top,           bottom,        left,          right,         front,         back
    this._addCubeData(BlockType.Boundary,    boundary,      boundary,      boundary,      boundary,      boundary,      boundary);
    this._addCubeData(BlockType.Dirt,        dirt,          dirt,          dirt,          dirt,          dirt,          dirt);
    this._addCubeData(BlockType.Turf,        turfTop,       dirt,          turfSide,      turfSide,      turfSide,      turfSide);
    this._addCubeData(BlockType.Rock,        rock,          rock,          rock,          rock,          rock,          rock);
    this._addCubeData(BlockType.Sand,        sand,          sand,          sand,          sand,          sand,          sand);
    this._addCubeData(BlockType.DryLeaves,   dryLeavesTop,  dirt,          dryLeavesSide, dryLeavesSide, dryLeavesSide, dryLeavesSide);
    this._addCubeData(BlockType.TrunkUD,     trunkEnd,      trunkEnd,      trunkSide,     trunkSide,     trunkSide,     trunkSide);
    this._addCubeData(BlockType.TrunkNS,     trunkSide,     trunkSide,     trunkTilted,   trunkTilted,   trunkEnd,      trunkEnd);
    this._addCubeData(BlockType.TrunkEW,     trunkTilted,   trunkTilted,   trunkEnd,      trunkEnd,      trunkTilted,   trunkTilted);
    this._addCubeData(BlockType.Brick,       brick,         brick,         brick,         brick,         brick,         brick);
    this._addCubeData(BlockType.RedShine,    redShine,      redShine,      redShine,      redShine,      redShine,      redShine);
    this._addCubeData(BlockType.WhiteShine,  whiteShine,    whiteShine,    whiteShine,    whiteShine,    whiteShine,    whiteShine);
    this._addCubeData(BlockType.YellowShine, yellowShine,   yellowShine,   yellowShine,   yellowShine,   yellowShine,   yellowShine);
    this._addCubeData(BlockType.BlackShine,  blackShine,    blackShine,    blackShine,    blackShine,    blackShine,    blackShine);
    this._addCubeData(BlockType.Leaves,      leaves,        leaves,        leaves,        leaves,        leaves,        leaves);
    this._addCubeData(BlockType.WoodUD,      woodEnd,       woodEnd,       woodSide,      woodSide,      woodSide,      woodSide);
    this._addCubeData(BlockType.WoodNS,      woodSide,      woodSide,      woodTilted,    woodTilted,    woodEnd,       woodEnd);
    this._addCubeData(BlockType.WoodEW,      woodTilted,    woodTilted,    woodEnd,       woodEnd,       woodTilted,    woodTilted);
    this._addCubeData(BlockType.Water,       water,         water,         water,         water,         water,         water);

    this._addMatData(BlockType.Grass,       [grass]);
    this._addMatData(BlockType.Fern,        [fern]);
    this._addMatData(BlockType.WhiteFlower, [whiteFlowers]);
    this._addMatData(BlockType.BlueFlower,  [blueFlowers]);
    this._addMatData(BlockType.RedFlower,   [redFlowers]);
    this._addMatData(BlockType.Mushroom,    [mushroomTop, mushroomBottom, mushroomSide]);

    // Special materials not used in blocks
    this._selection = this._addEmissionMat("selection");
    this._crosshair = this._addEmissionMat("crosshair");
  }

  /// The block value to cube data map to define which materials to apply to which sides.
  CubeData cubeData(int value) => this._cubeData[value];

  /// The materials to use for non-cube block values such as flowers.
  List<int> matData(int value) => this._matData[value];

  /// This full set of all the materials used by craft.
  List<Techniques.MaterialLight> get materials => this._mats;

  /// The changer to animate the water.
  Textures.Texture2DChanger get waterChanger => this._waterChanger;

  /// The meterial used for all the sides of the selection box.
  Techniques.MaterialLight get selection => this._selection;

  /// The material used for the cross hair in the center of the screen.
  Techniques.MaterialLight get crosshair => this._crosshair;

  /// Loads a texture with the given file name.
  Textures.Texture2D _loadText(String fileName) {
    String path = Constants.imgFolder + fileName + Constants.fileExt;
    return this._td.textureLoader.load2DFromFile(path, wrapEdges: false, nearest: false, mipMap: true);
  }

  /// Loads a material with lighting information and adds it to the material list.
  /// Returns the index for the new material.
  int _addMat(String fileName, [bool shiny = false]) {
    return this._addMatTxt(this._loadText(fileName), shiny);
  }

  /// Creates a material with lighting information and adds
  /// it to the material list with the given texture.
  /// Returns the index for the new material.
  int _addMatTxt(Textures.Texture2D blockTxt, [bool shiny = false]) {
    Techniques.MaterialLight tech = new Techniques.MaterialLight()
      ..lights.add(this._light)
      ..ambient.color = new Math.Color3.gray(0.8)
      ..diffuse.color = new Math.Color3.gray(0.4)
      ..ambient.texture2D = blockTxt
      ..diffuse.texture2D = blockTxt
      ..alpha.texture2D   = blockTxt;

    if (shiny) {
      tech.specular
        ..color = new Math.Color3.gray(0.5)
        ..shininess = 3.0;
    }

    this._mats.add(tech);
    return this._mats.length - 1;
  }

  /// Loads a material with no lighting information and adds it to the material list.
  /// Returns the material which was loaded.
  Techniques.MaterialLight _addEmissionMat(String fileName) {
    Textures.Texture2D blockTxt = this._loadText(fileName);
    Techniques.MaterialLight tech = new Techniques.MaterialLight()
      ..emission.texture2D = blockTxt
      ..alpha.texture2D = blockTxt;
    return tech;
  }

  /// Adds a cube data entry for the given block value.
  void _addCubeData(int value, int topIndex, int bottomIndex, int leftIndex, int rightIndex, int frontIndex, int backIndex) {
    this._cubeData[value] = new CubeData(topIndex, bottomIndex, leftIndex, rightIndex, frontIndex, backIndex);
  }

  /// Adds the materials for non-cube values.
  void _addMatData(int value, List<int> indices) {
    this._matData[value] = indices;
  }
}
