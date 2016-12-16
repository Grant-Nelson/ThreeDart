part of ThreeDart.Movers;

/// TODO: Comment
/// A zoom mover which zooms on an object in response to user input.
class UserTranslator implements Mover, Core.UserInteractable {

  /// The user input this zoomer is attached to.
  Core.UserInput _input;

  /// TODO: Comment
  ComponentShift _offsetX;

  /// TODO: Comment
  ComponentShift _offsetY;

  /// TODO: Comment
  ComponentShift _offsetZ;

  /// The last frame the mover was updated for.
  int _frameNum;

  /// The matrix describing the zoom.
  Math.Matrix4 _mat;

  /// Event for handling changes to this mover.
  Core.Event _changed;

  /// Creates an instance of [UserZoom].
  UserTranslator({Core.UserInput input: null}) {
    this._input    = null;
    this._offsetX  = new ComponentShift();
    this._offsetY  = new ComponentShift();
    this._offsetZ  = new ComponentShift();
    this._frameNum = 0;
    this._mat      = null;
    this._changed  = null;

    this.attach(input);
  }

  /// Emits when the mover has changed.
  Core.Event get changed {
    if (this._changed == null) this._changed = new Core.Event();
    return this._changed;
  }

  /// Handles a child mover being changed.
  void _onChanged([Core.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Attaches this mover to the user input.
  bool attach(Core.UserInput input) {
    if (input == null) return false;
    if (this._input != null) return false;
    this._input = input;



    return true;
  }

  /// Detaches this mover from the user input.
  void detach() {
    if (this._input != null) {



      this._input = null;
    }
  }

  /// Updates this mover and returns the matrix for the given object.
  Math.Matrix4 update(Core.RenderState state, Movable obj) {
    if (this._frameNum < state.frameNumber) {
      this._frameNum = state.frameNumber;
      this._mat = new Math.Matrix4.identity();
    }
    return this._mat;
  }
}
