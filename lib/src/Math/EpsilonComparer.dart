part of ThreeDart.Math;

/// An epsilon comparer where things are equal when two values are
/// with a given difference, epsilon, which is relatively small.
class EpsilonComparer implements CustomComparer {

  /// The value to use as padding for equality closeness.
  final double epsilon;

  /// Constructs a new epsilon comparer with the given epsilon value.
  EpsilonComparer(double this.epsilon);

  /// Determines if the two values are equal.
  bool equals(double a, double b) => (a-b).abs() < epsilon;

  /// Determines if 'a' is less than 'b'.
  bool lessThan(double a, double b) => a < b;

  /// Determines if 'a' is less than or equal to 'b'.
  bool lessThanEquals(double a, double b) => a-epsilon < b;
}
