part of ThreeDart.Data;

/// A list of buffer stores used as a single cache.
class BufferStoreList implements TechniqueCache {

  /// The list of cached buffer stores.
  List<BufferStore> _list;

  /// Creates a new buffer store list.
  BufferStoreList() {
    this._list = new List<BufferStore>();
  }

  /// The list of cached buffer stores.
  List<BufferStore> get list => this._list;
}
