part of example1;

class World {
  Techniques.MaterialLight _matLit;
  ThreeDart.Entity _group;
  List<Chunk> _chunks;
  Player _player;

  World(ThreeDart.ThreeDart td) {
    Textures.Texture2D blockTxt = td.textureLoader.load2DFromFile("./examples/example1/blocks.png", wrapEdges: false, nearest: true, mipMap: false);

    this._matLit = new Techniques.MaterialLight()
      ..emission.texture2D = blockTxt;

    this._group = new ThreeDart.Entity();
    this._chunks = new List<Chunk>();

    int maxSize = 256;
    for (int x = -maxSize; x < maxSize; x += Chunk.chunkXSize) {
      for (int z = -maxSize; z < maxSize; z += Chunk.chunkZSize) {
        this.insertChunk(x, z);
      }
    }
  }

  Player get player => this._player;
  set player(Player player) => this._player = player;

  ThreeDart.Entity get group => this._group;

  Chunk findChunk(int x, int z) {
    for (Chunk chunk in this._chunks) {
      if ((chunk.x == x) && (chunk.z == z)) return chunk;
    }
    return null;
  }

  BlockInfo getBlock(double x, double y, double z) {
    int cx = (x.truncate() ~/ Chunk.chunkXSize) * Chunk.chunkXSize;
    int cz = (z.truncate() ~/ Chunk.chunkXSize) * Chunk.chunkXSize;
    if (x < 0.0) cx -= Chunk.chunkXSize;
    if (z < 0.0) cz -= Chunk.chunkXSize;
    Chunk chunk = this.findChunk(cx, cz);

    int bx = x.floor() - cx;
    int by = y.floor();
    int bz = z.floor() - cz;
    if (bx < 0) bx += Chunk.chunkXSize;
    if (bz < 0) bz += Chunk.chunkZSize;

    int value = BlockType.Air;
    if (y <= 0.0) value = BlockType.Rock;
    else if (y >= Chunk.chunkYSize) value = BlockType.Air;
    else if (chunk != null) value = chunk.getBlock(bx, by, bz);

    return new BlockInfo(bx, by, bz, chunk, value);
  }

  void insertChunk(int x, int z) {
    Chunk chunk = new Chunk(x, z)..entity.technique = this._matLit;
    this._chunks.add(chunk);
    this._group.children.add(chunk.entity);
  }

  void update(ThreeDart.EventArgs args) {
    Math.Matrix4 mat = this.player.location.matrix;
    Math.Point3 loc3 = mat.transPnt3(new Math.Point3(0.0, 0.0, 0.0));
    Math.Point3 front3 = mat.transPnt3(new Math.Point3(0.0, 0.0, -Chunk.chunkZSize.toDouble()));
    Math.Point2 loc = new Math.Point2(loc3.x, loc3.z);
    Math.Point2 front = new Math.Point2(front3.x, front3.z);

    for (Chunk chunk in this._chunks) {
      chunk.updateShape(this);
      chunk.updateVisiblity(loc, front);
    }
  }
}
