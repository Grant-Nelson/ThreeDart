part of ThreeDart.Animation;

/// A handler for changing how smoothing is performed.
typedef double SmoothHandle(double t);

/// A class for smoothing movements.
class Handler extends Smoother {
  /// The handler function to call on smooth.
  final SmoothHandle _hndl;

  /// Privatize the constructor for the smoother.
  Handler(this._hndl) : super._();

  /// [smooth] changes a linear 0.0 to 1.0 into different order of movements.
  /// This should return 0.0 for 0.0 and be a continuous function up to 1.0 which should return 1.0.
  @override
  double smooth(double t) => this._hndl(t);
}
