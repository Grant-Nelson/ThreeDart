part of ThreeDart.Animation;

/// A handler to set some value from a mover.
typedef void Setter(double);

// Linear interpolation between the start and goal.
// The given [i] must be between 0.0 and 1.0. 
double Lerp(double start, double goal, double i) => start * (1.0 - i) + goal * i;

/// A double modifier for setting a value for a mover.
class _modifier {
  /// The initial value to start from.
  final double start;

  /// The final value to end at.
  final double goal;

  /// The handler to set the value with.
  final Setter _setHndl;

  /// Creates a new double modifier.
  _modifier(this.start, this.goal, this._setHndl);

  /// Updates the value for the mover.
  void _update(double i) => this._setHndl(Lerp(start, goal, i));
}
