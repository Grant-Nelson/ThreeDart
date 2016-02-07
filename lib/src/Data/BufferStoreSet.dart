part of ThreeDart.Data;

/// A map of strings to buffer stores used as a single cache.
class BufferStoreSet implements TechniqueCache {

  /// The map of cached buffer stores.
  Map<String, BufferStore> _map;

  /// Creates a new buffer store map.
  BufferStoreList() {
    this._map = new Map<String, BufferStore>();
  }

  /// The map of cached buffer stores.
  Map<String, BufferStore> get map => this._map;
}
