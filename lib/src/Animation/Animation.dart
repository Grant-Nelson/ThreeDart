library ThreeDart.Animation;

import 'dart:html';

part 'CubicBezier.dart';
part 'Handler.dart';
part 'Modifier.dart';
part 'Polynomial.dart';
part 'Shifter.dart';
part 'Smoother.dart';
part 'Smoothers.dart';

/// Animation is used for running a set of timed events.
class Animation {
  /// Indicates the animation is running.
  bool _running;

  /// Indicates the animation should restart after the last shifter finishes.
  bool _loop;

  /// Is the start time for the animation.
  DateTime _start;

  /// The set of shifters for the animation.
  List<Shifter> _shifters;

  /// Creates a new animation which optionally loops.
  Animation({bool loop: false}):
    this._running = false,
    this._loop = loop,
    this._start = DateTime.now(),
    this._shifters = [];

  /// Adds a shifter to this animation.
  Shifter add({int delay: 0, int duration: 1000, bool init: false, Smoother? easing: null}) {
    Shifter shifter = new Shifter(delay:delay, duration:duration, init:init, easing:easing);
    this._shifters.add(shifter);
    return shifter;
  }

  /// Indicates if the animation is running or not.
  bool get running => this._running;

  /// Resets the shifters and animation.
  void _reset() {
    this._start = this._now;
    for (Shifter shifter in this._shifters) shifter._reset();
  }

  /// Starts the animation running.
  /// If the animation is already running then this has no effect.
  void start() {
    if (this._running) return;
    this._running = true;
    this._reset();
    this._requestUpdate();
  }

  /// Stops the animation running.
  /// If the animation is not running this has no effect.
  void stop() {
    if (!this._running) return;
    this._running = false;
  }

  /// Gets the current time.
  DateTime get _now => new DateTime.now();

  /// Requests an update at the next browser animation frame event.
  void _requestUpdate() {
    window.requestAnimationFrame(this._update);
  }

  /// Performs an update of the animation.
  void _update(num) {
    if (!this._running) return;
    int offset = this._now.difference(this._start).inMilliseconds;
    bool done = true;
    for (Shifter shifter in this._shifters)
      done = shifter._update(offset) && done;
    if (done) {
      if (this._loop)
        this._reset();
      else {
        this._running = false;
        return;
      }
    }
    this._requestUpdate();
  }
}
