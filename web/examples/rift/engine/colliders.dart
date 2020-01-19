part of engine;

enum Block {
  Air,
  Solid,
  Top,   /// Top will allow a player to go up and to the sides through but not fall through it.
}

class Colliders {
  Room _room;
  Layer _layer;
  List<List<Block>> _data;

  Colliders._(Room this._room, Layer this._layer) {
    this._data = new List<List<Block>>();
  }

  void setValue(int x, int y, Block value) {
    while (this._data.length <= x) this._data.add(new List<Block>());
    List<Block> colData = this._data[x];
    while (colData.length <= y) colData.add(Block.Air);
    colData[y] = value;

    this._layer.addBlock(x, y, 'Col${value.index}.png');
  }

  Block getValue(int x, int y) {
    if (this._data.length < x) return Block.Air;
    List<Block> colData = this._data[x];
    if (colData.length < y) return Block.Air;
    return colData[y];
  }
}
