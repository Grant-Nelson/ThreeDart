part of ThreeDart.Animation;

/// Shifter for changing several values from start values to another in a specific duration.
class Shifter {
  /// Set of values to be modified.
  List<_modifier> _mods;

  /// The milliseconds to delay before starting shifting.
  final int _delay;

  /// The milliseconds this shifter is run.
  final int _duration;

  /// Indicates if the value should initialize during the initial delay.
  final bool _init;

  /// The smoother effects the rate of change
  final Smoother _smoother;

  /// Indicates the shifter is done.
  bool _done;

  /// Indicates the shifter has been initialized.
  bool _inited;

  /// Constructs a shifter with the final information set.
  Shifter._(this._delay, this._duration, this._init, this._smoother):
    this._mods = [],
    this._done = false,
    this._inited = false;

  /// Creates a new shifter for the given duration and optional smoother.
  factory Shifter({int delay:0, int duration:1000, bool init: false, Smoother? easing:null}) {
    if (delay < 0) delay = 0;
    if (duration < 1) duration = 1;
    easing ??= Smoothers.linear;
    return new Shifter._(delay, duration, init, easing);
  }

  /// Updates the shifter to the new time.
  /// The given offset it the milliseconds since the animation started.
  /// Returns true if done, false to keep going.
  bool _update(int offset) {
    if (this._done) return true;
    double t = (offset - this._delay) / this._duration;
    if ((!this._init || this._inited) && (t < 0.0)) return false;
    double y = Smoother.clamp(this._smoother.smooth(Smoother.clamp(t)));
    for (_modifier mod in this._mods) mod._update(y);
    this._done = t >= 1.0;
    this._inited = true;
    return this._done;
  }

  /// Resets the done flag.
  void _reset() => this._done = this._inited = false;

  /// Adds a value that will be moved.
  void move(double start, double end, Setter hndl) => this._mods.add(new _modifier(start, end, hndl));
}
