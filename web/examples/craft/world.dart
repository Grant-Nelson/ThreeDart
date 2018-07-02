part of craft;

class World {
  static const imgFile = "./examples/craft/blocks.png";
  static const maxSize = 192;
  
  Techniques.MaterialLight _matLit;
  ThreeDart.Entity _terrainGroup;
  ThreeDart.Entity _waterGroup;
  ThreeDart.Entity _plantsGroup;
  Generator _gen;
  List<Chunk> _chunks;
  Player _player;

  World(ThreeDart.ThreeDart td) {
    Textures.Texture2D blockTxt = td.textureLoader.load2DFromFile(imgFile, wrapEdges: false, nearest: false, mipMap: true);

    this._matLit = new Techniques.MaterialLight()
      ..emission.texture2D = blockTxt
      ..alpha.texture2D = blockTxt;

    this._terrainGroup = new ThreeDart.Entity()
      ..technique = this._matLit;

    this._waterGroup = new ThreeDart.Entity()
      ..technique = this._matLit;
      
    this._plantsGroup = new ThreeDart.Entity()
      ..technique = this._matLit;

    this._gen = new Generator(this);
    this._chunks = new List<Chunk>();

    for (int x = -maxSize; x < maxSize; x += Chunk.xSize) {
      for (int z = -maxSize; z < maxSize; z += Chunk.zSize) {
        this.insertChunk(x, z);
      }
    }
    this._gen.fillWorld();
  }

  Generator get generator => this._gen;
  Player get player => this._player;
  set player(Player player) => this._player = player;

  ThreeDart.Entity get terrainGroup => this._terrainGroup;
  ThreeDart.Entity get waterGroup => this._waterGroup;
  ThreeDart.Entity get plantsGroup => this._plantsGroup;

  Chunk findChunk(int x, int z) {
    for (Chunk chunk in this._chunks) {
      if ((chunk.x == x) && (chunk.z == z)) return chunk;
    }
    return null;
  }

  BlockInfo getBlock(double x, double y, double z) {
    int cx = (x.truncate() ~/ Chunk.xSize) * Chunk.xSize;
    int cz = (z.truncate() ~/ Chunk.zSize) * Chunk.zSize;
    if (x < 0.0) cx -= Chunk.xSize;
    if (z < 0.0) cz -= Chunk.zSize;
    Chunk chunk = this.findChunk(cx, cz);

    int bx = x.floor() - cx;
    int by = y.floor();
    int bz = z.floor() - cz;
    if (bx < 0) bx += Chunk.xSize;
    if (bz < 0) bz += Chunk.zSize;

    return new BlockInfo(bx, by, bz, chunk);
  }

  void insertChunk(int x, int z) {
    Chunk chunk = new Chunk(x, z, this);
    this._chunks.add(chunk);
    this._terrainGroup.children.add(chunk.terrainEntity);
    this._waterGroup.children.add(chunk.waterEntity);
    this._plantsGroup.children.add(chunk.plantsEntity);
  }

  void update(ThreeDart.EventArgs args) {
    Math.Matrix4 mat = this.player.location.matrix;
    Math.Point3 loc3 = mat.transPnt3(new Math.Point3(0.0, 0.0, 0.0));
    Math.Point3 front3 = mat.transPnt3(new Math.Point3(0.0, 0.0, -Chunk.zSize.toDouble()));
    Math.Point2 loc = new Math.Point2(loc3.x, loc3.z);
    Math.Point2 front = new Math.Point2(front3.x, front3.z);

    for (Chunk chunk in this._chunks) {
      chunk.updateShape();
      chunk.updateVisiblity(loc, front);
    }
  }
}
