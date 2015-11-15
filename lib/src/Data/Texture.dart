part of ThreeDart.Data;

abstract class Texture {
  int _index;

  Texture(this._index);

  int get index => this._index;
  set index(int index) => this._index = index;
}