part of ThreeDart.Math;

/// A function signiture for testing equality between two doubles.
typedef bool EqualityFunction(double a, double b);

/// A set of static methods and values used for comparing doubles.
class Comparer {

  /// The current equality method to use for comparing doubles.
  static EqualityFunction currentEquality = defaultEquality;

  /// The default equality method for comparing doubles.
  ///
  /// The default test is an epsilon equality test with a tolerance of 1.0e-9.
  static bool defaultEquality(double a, double b) {
    return epsilonEquals(a, b, 1.0e-9);
  }

  /// Epsilon equality method to compare two doubles with.
  ///
  /// [epsilon] is the maximum allowed absolute difference between the two doubles.
  static bool epsilonEquals(double a, double b, double epsilon) {
    if (a < b) return (b - a) <= epsilon;
    else return (a - b) <= epsilon;
  }

  /// Determines if the two given doubles are equal according to the current equality method.
  static bool equals(double a, double b) {
    return currentEquality(a, b);
  }
}
