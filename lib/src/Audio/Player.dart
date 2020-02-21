part of ThreeDart.Audio;

/// A player for starting and stopping a sound, music, or any audio.
class Player {
  html.AudioElement _elem;
  bool _loaded;
  Events.Event _changed;

  /// Creates a new audio player.
  Player._(html.AudioElement this._elem) {
    this._loaded = false;
    this._changed = null;
  }

  /// Sets the loaded state for this audio.
  void _setLoaded() {
    if (!this._loaded) {
      this._loaded = true;
      this._changed?.emit();
    }
  }

  /// The loaded state of the audio.
  bool get loaded => this._loaded;

  /// Indicates if this audio is currently playing or not.
  bool get playing => !this._elem.paused;

  /// Indicates if this audio should automatically start playing
  /// again once it is done, the audio will loop.
  bool get loop => this._elem.loop;
  set loop(bool loop) {
    loop ??= false;
    if (this.loop != loop) {
      this._elem.loop = loop;
      this._changed?.emit();
    }
  }

  /// This is the volume to playplack the audio at.
  double get volume => this._elem.volume;
  set volume(double volume) {
    volume = Math.clampVal(volume ?? 1.0);
    if (Math.Comparer.notEquals(this.volume, volume)) {
      this._elem.volume = volume;
      this._changed?.emit();
    }
  }

  /// This is the rate to playback the audio at.
  double get rate => this._elem.playbackRate;
  set rate(double rate) {
    rate = Math.clampVal(rate ?? 1.0, 0.001, 100.0);
    if (Math.Comparer.notEquals(this.rate, rate)) {
      this._elem.playbackRate = rate;
      this._changed?.emit();
    }
  }

  /// Plays this audio.
  void play() => this._elem.play();

  /// Pauses the audio.
  void pause() => this._elem.pause();

  /// Emitted when the audio has finished being loading.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }
}
