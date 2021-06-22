part of ThreeDart.Audio;

/// A player for starting and stopping a sound, music, or any audio.
class Player {
  html.AudioElement _elem;
  bool _loaded = false;
  Events.Event? _changed;
  Events.Event? _onPlaying;
  Events.Event? _onPause;

  /// Creates a new audio player.
  Player._(this._elem) {
    this._elem.onPlaying.listen(this._onElemPlaying);
    this._elem.onPause.listen(this._onElemPause);
  }

  /// Create a copy of this audio player.
  Player copy() =>
    new Player._(this._elem.clone(true) as html.AudioElement);

  /// Sets the loaded state for this audio.
  void _setLoaded() {
    if (!this._loaded) {
      this._loaded = true;
      this._changed?.emit();
    }
  }

  /// Handles the audio element playing.
  void _onElemPlaying(html.Event _) => this._onPlaying?.emit();

  /// Handles the audio element pausing.
  void _onElemPause(html.Event _) => this._onPause?.emit();

  /// The loaded state of the audio.
  bool get loaded => this._loaded;

  /// Indicates if this audio is currently playing or not.
  bool get playing => !this._elem.paused;

  /// Indicates if this audio should automatically start playing
  /// again once it is done, the audio will loop.
  bool get loop => this._elem.loop;
  set loop(bool loop) {
    if (this.loop != loop) {
      this._elem.loop = loop;
      this._changed?.emit();
    }
  }

  /// This is the volume to playback the audio at.
  double get volume => this._elem.volume.toDouble();
  set volume(double volume) {
    volume = Math.clampVal(volume);
    if (Math.Comparer.notEquals(this.volume, volume)) {
      this._elem.volume = volume;
      this._changed?.emit();
    }
  }

  /// This is the rate to playback the audio at.
  double get rate => this._elem.playbackRate.toDouble();
  set rate(double rate) {
    rate = Math.clampVal(rate, 0.001, 100.0);
    if (Math.Comparer.notEquals(this.rate, rate)) {
      this._elem.playbackRate = rate;
      this._changed?.emit();
    }
  }

  /// Plays this audio.
  void play({double? volume = null, double? rate = null, bool? loop = null}) {
    if (volume != null) this.volume = volume;
    if (rate   != null) this.rate   = rate;
    if (loop   != null) this.loop   = loop;
    this._elem.play();
  }
  
  /// Pauses the audio.
  void pause() => this._elem.pause();

  /// Emitted when the audio has finished being loading.
  Events.Event get changed =>
    this._changed ??= new Events.Event();

  /// Emitted when the audio starts playing.
  Events.Event get onPlaying =>
    this._onPlaying ??= new Events.Event();

  /// Emitted when the audio has paused.
  Events.Event get onPause =>
    this._onPause ??= new Events.Event();
}
