part of ThreeDart.Animation;

/// Set of predefined smoothers.
class Smoothers {
  /// Privatize this set of smoothers.
  Smoothers._();

  /// Default linear interpretation.
  static Smoother get linear => _linearLazy ??= new Handler((t) => t);
  static Smoother _linearLazy = null;

  /// Stays still until the very end then snaps to the stop location.
  static Smoother get snapEnd => _snapEndLazy ??= new Handler((t) => t > 0.99 ? 1.0 : 0.0);
  static Smoother _snapEndLazy = null;

  /// Stays still until half-way then snaps to the stop location.
  static Smoother get snapHalf => _snapHalfLazy ??= new Handler((t) => t >= 0.5 ? 1.0 : 0.0);
  static Smoother _snapHalfLazy = null;

  /// Stays snaps stop location at the start.
  static Smoother get snapStart => _snapStartLazy ??= new Handler((t) => t < 0.01 ? 0.0 : 1.0);
  static Smoother _snapStartLazy = null;

  /// Starts out slow and ends linear movement.
  static Smoother get easeInSine => _easeInSineLazy ??= new CubicBezier(0.47, 0.0, 0.745, 0.715);
  static Smoother _easeInSineLazy = null;

  /// Starts out linear and ends slow movement.
  static Smoother get easeOutSine => _easeOutSineLazy ??= new CubicBezier(0.39, 0.575, 0.565, 1.0);
  static Smoother _easeOutSineLazy = null;

  /// Start out slow and ends slow with a linear middle movement.
  static Smoother get easeInOutSine => _easeInOutSineLazy ??= new CubicBezier(0.445, 0.05, 0.55, 0.95);
  static Smoother _easeInOutSineLazy = null;

  /// Start out slow and ends a little faster.
  static Smoother get easeInQuad => _easeInQuadLazy ??= new CubicBezier(0.55, 0.085, 0.68, 0.53);
  static Smoother _easeInQuadLazy = null;

  /// Start out a little faster and ends slow.
  static Smoother get easeOutQuad => _easeOutQuadLazy ??= new CubicBezier(0.25, 0.46, 0.45, 0.94);
  static Smoother _easeOutQuadLazy = null;

  /// Start out slow and ends slow with a little faster in the middle.
  static Smoother get easeInOutQuad => _easeInOutQuadLazy ??= new CubicBezier(0.645, 0.045, 0.355, 1.0);
  static Smoother _easeInOutQuadLazy = null;

  /// Start out slow and ends a slightly faster.
  static Smoother get easeInQuart => _easeInQuartLazy ??= new CubicBezier(0.895, 0.03, 0.685, 0.22);
  static Smoother _easeInQuartLazy = null;

  /// Start out a slightly faster and ends slow.
  static Smoother get easeOutQuart => _easeOutQuartLazy ??= new CubicBezier(0.165, 0.84, 0.44, 1.0);
  static Smoother _easeOutQuartLazy = null;

  /// Start out slow and ends slow with a slightly faster in the middle.
  static Smoother get easeInOutQuart => _easeInOutQuartLazy ??= new CubicBezier(0.77, 0.0, 0.175, 1.0);
  static Smoother _easeInOutQuartLazy = null;

  /// Start out very slow and ends a fast.
  static Smoother get easeInQuint => _easeInQuintLazy ??= new CubicBezier(0.755, 0.05, 0.855, 0.06);
  static Smoother _easeInQuintLazy = null;

  /// Start out a very fast and ends slow.
  static Smoother get easeOutQuint => _easeOutQuintLazy ??= new CubicBezier(0.23, 1.0, 0.32, 1.0);
  static Smoother _easeOutQuintLazy = null;

  /// Start out very slow and ends slow with a fast in the middle.
  static Smoother get easeInOutQuint => _easeInOutQuintLazy ??= new CubicBezier(0.86, 0.0, 0.07, 1.0);
  static Smoother _easeInOutQuintLazy = null;

  /// Start out very slow and ends a fast.
  static Smoother get easeInExpo => _easeInExpoLazy ??= new CubicBezier(0.95, 0.05, 0.795, 0.035);
  static Smoother _easeInExpoLazy = null;

  /// Start out a very fast and ends slow.
  static Smoother get easeOutExpo => _easeOutExpoLazy ??= new CubicBezier(0.19, 1.0, 0.22, 1.0);
  static Smoother _easeOutExpoLazy = null;

  /// Start out very slow and ends slow with a fast in the middle.
  static Smoother get easeInOutExpo => _easeInOutExpoLazy ??= new CubicBezier(1.0, 0.0, 0.0, 1.0);
  static Smoother _easeInOutExpoLazy = null;

  /// Start out a little slow and ends a fast.
  static Smoother get easeInCirc => _easeInCircLazy ??= new CubicBezier(0.6, 0.04, 0.98, 0.335);
  static Smoother _easeInCircLazy = null;

  /// Start out a very fast and a little slow.
  static Smoother get easeOutCirc => _easeOutCircLazy ??= new CubicBezier(0.075, 0.82, 0.165, 1.0);
  static Smoother _easeOutCircLazy = null;

  /// Start out a little slow and ends a little slow with a fast in the middle.
  static Smoother get easeInOutCirc => _easeInOutCircLazy ??= new CubicBezier(0.785, 0.135, 0.15, 0.86);
  static Smoother _easeInOutCircLazy = null;

  /// Start out going a little the wrong way and ends a fast.
  static Smoother get easeInBack => _easeInBackLazy ??= new CubicBezier(0.6, -0.28, 0.735, 0.045);
  static Smoother _easeInBackLazy = null;

  /// Start out a very fast and over shoots a little.
  static Smoother get easeOutBack => _easeOutBackLazy ??= new CubicBezier(0.175, 0.885, 0.32, 1.275);
  static Smoother _easeOutBackLazy = null;

  /// Start out going a little the wrong way and then over shoots a little with a fast in the middle.
  static Smoother get easeInOutBack => _easeInOutBackLazy ??= new CubicBezier(0.68, -0.55, 0.265, 1.55);
  static Smoother _easeInOutBackLazy = null;
}
