part of craft.game;

/// The generator for initializing chunks to create the world.
abstract class Generator {

  /// Fills the given chunk with data.
  void fillChunk(Chunk chunk);
}
