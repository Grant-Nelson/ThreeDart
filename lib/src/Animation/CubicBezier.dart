part of ThreeDart.Animation;

/// Cubic Bezier smoother class.
class CubicBezier extends Polynomial {
  /// The Cubic Bezier function from P0=0, P1, P2, and P3=1.
  static double _curve(double p1, double p2, double t) {
    double t2 = t * t;
    double t3 = t2 * t;
    double i  = 1.0 - t;
    double i2 = i * i;
    return 3.0 * p1 * i2 * t + 3.0 * p2 * i * t2 + t3;
  }

  /// Internal smoother for creating constant cubic Bezier.
  CubicBezier(double dx1, double dy1, double dx2, double dy2, [int samples = 20])
      : super(((double t) => _curve(Smoother.clamp(dx1), Smoother.clamp(dx2), t)) as PolynomialHandle,
              ((double t) => _curve(dy1, dy2, t)) as PolynomialHandle, samples);
}
