part of ThreeDart.Animation;

/// A handler for a coordinate function for a polynomial.
typedef double PolynomialHandle(double);

/// A smoother which is initialized with a polynomial.
class Polynomial extends Smoother {
  /// The precalculated data for the polynomial.
  List<double> _data;

  /// Finds a specific t value for a given x value and the t to x function.
  /// This reverses the given function so that a x to y can be figured out.
  static double _find(PolynomialHandle xFunc, double x, double tmin, double tmax) {
    double t = x;
    while (tmin < tmax) {
      double xp = xFunc(t);
      if ((xp - x).abs() < 1.0e-9) return t;
      if (x > xp) tmin = t;
      else        tmax = t;
      t = (tmax + tmin) / 2;
    }
    return t;
  }

  /// Creates a new polynomial for the two given functions.
  /// This precalculates the polynomial with the given number of sample locations.
  /// The more the samples, the slower the precalculations take and more memory used.
  /// The less samples, the rougher the polynomial result data is.
  Polynomial(PolynomialHandle xFunc, PolynomialHandle yFunc, [int samples = 20]) : super._() {
    List<double> yValues = new List<double>(samples);
    double t = 0.0;
    for (int i = 0; i < samples; i++) {
      double x = i / samples;
      t = _find(xFunc, x, t, 1.0);
      yValues[i] = yFunc(t);
    }
    this._data = yValues;
  }

  /// Linear interpolates between the precalculated polynomial data.
  @override
  double smooth(double x) {
    int len = this._data.length;
    double f = x * len;
    int i = f.floor();
    if (i < 0) return 0.0;
    if (i >= len) return 1.0;
    double p0 = this._data[i];
    double p1 = (i == len - 1) ? 1.0 : this._data[i + 1];
    double r = f - i;
    return p0 * (1.0 - r) + p1 * r;
  }
}
