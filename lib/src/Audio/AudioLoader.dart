part of ThreeDart.Audio;

/// A loader for loading sounds.
class AudioLoader {
  int _soundCount = 0;
  int _loadedCount = 0;

  /// Creates a new audio loader.
  AudioLoader();
  
  /// The number of sounds being loaded.
  int get loading => this._soundCount - this._loadedCount;

  /// The percentage of sounds loaded.
  double get percentage {
    if (this._soundCount == 0) return 100.0;
    return this._loadedCount*100.0/this._soundCount;
  }

  /// Resets the loading counters.
  void resetCounter() {
    this._soundCount = 0;
    this._loadedCount = 0;
  }
  
  /// Handles loading a new audio player with the audio from the given file path.
  Player loadFromFile(String path) {
    html.AudioElement elem = new html.AudioElement(path)
      ..autoplay = false
      ..preload = "auto";
    this._incLoading();
    Player player = new Player._(elem);
    elem.onLoad.listen((_){
        player._setLoaded();
        this._decLoading();
      });
    return player;
  }

  /// Increments the loading count.
  void _incLoading() => this._soundCount++;

  /// Decrement the loading count.
  void _decLoading() => this._loadedCount--;
}
