part of ThreeDart.Math;

/// A set of static methods and values used for comparing doubles.
class Comparer {

  /// The default comparer, an epsilong comparer, to use for comparing doubles.
  static final CustomComparer defaultComparer = new EpsilonComparer(1.0e-9);

  /// The current comparer instance to use for comparing doubles.
  static CustomComparer currentComparer = defaultComparer;
    
  /// Determines if the two values are equal.
  static bool equals(double a, double b) => currentComparer.equals(a, b);

  /// Determines if the two values are not equal.
  static bool notEquals(double a, double b) => !currentComparer.equals(a, b);

  /// Determines if 'a' is less than 'b'.
  static bool lessThan(double a, double b) => currentComparer.lessThan(a, b);

  /// Determines if 'a' is less than or equal to 'b'.
  static bool lessThanEquals(double a, double b) => currentComparer.lessThanEquals(a, b);

  /// Determines if 'a' is greater than 'b'.
  static bool greaterThan(double a, double b) => currentComparer.lessThan(b, a);

  /// Determines if 'a' is greater than or equal to 'b'.
  static bool greaterThanEquals(double a, double b) => currentComparer.lessThanEquals(b, a);
}
