part of ThreeDart.Data;

/// A map of strings to buffer stores used as a single cache.
class BufferStoreSet implements TechniqueCache {

  /// The map of cached buffer stores.
  Map<String, BufferStore> _map;

  /// Creates a new buffer store map.
  BufferStoreSet():
    this._map = {};

  /// The map of cached buffer stores.
  Map<String, BufferStore> get map => this._map;
}
