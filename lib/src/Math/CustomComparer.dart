part of ThreeDart.Math;

/// The interface to implement for the custom comparer.
abstract class CustomComparer {

  /// Determines if the two values are equal.
  bool equals(double a, double b);

  /// Determines if 'a' is less than 'b'.
  bool lessThan(double a, double b);

  /// Determines if 'a' is less than or equal to 'b'.
  bool lessThanEquals(double a, double b);
}
