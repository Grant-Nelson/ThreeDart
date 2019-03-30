part of ThreeDart.Math;

class EpsilonComparer implements CustomComparer {

  /// The value to use as padding for equality closeness.
  final double epsilon;

  /// Constructs a new epsilong comparer with the given expsilon value.
  EpsilonComparer(double this.epsilon);
  
  /// Determines if the two values are equal.
  bool equals(double a, double b) => (a-b).abs() < epsilon;

  /// Determines if 'a' is less than 'b'.
  bool lessThan(double a, double b) => a < b;

  /// Determines if 'a' is less than or equal to 'b'.
  bool lessThanEquals(double a, double b) => a-epsilon < b;
}
