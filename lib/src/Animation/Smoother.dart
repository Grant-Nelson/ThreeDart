part of ThreeDart.Animation;

/// A class for smoothing movements.
abstract class Smoother {
  /// Clamps the given value to between 0.0 and 1.0 inclusively.
  static double clamp(double val) => (val < 0.0) ? 0.0 : ((val > 1.0) ? 1.0 : val);

  /// Privatize the constructor for the smoother.
  const Smoother._();

  /// [smooth] changes a linear 0.0 to 1.0 into different order of movements.
  /// This should return 0.0 for 0.0 and be a continuous function up to 1.0 which should return 1.0.
  double smooth(double t);
}
