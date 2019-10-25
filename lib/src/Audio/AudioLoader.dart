part of ThreeDart.Audio;

/// A loader for loading sounds.
class AudioLoader {
  html.HtmlElement _elem;
  int _soundCount;
  int _loadedCount;

  /// Creates a new audio loader.
  AudioLoader(html.HtmlElement this._elem) {
    this._soundCount = 0;
    this._loadedCount = 0;
  }
  
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
  



  /// Increments the loading count.
  void _incLoading() {
    this._soundCount++;
  }

  /// Decrement the loading count.
  void _decLoading() {
    this._loadedCount++;
  }
}
