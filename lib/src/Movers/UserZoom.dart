part of ThreeDart.Movers;

/// A zoom mover which zooms on an object in response to user input.
class UserZoom implements Mover, Input.Interactable {

  /// The user input this zoomer is attached to.
  Input.UserInput? _input = null;

  /// Indicates if the modifier keys which must be pressed or released.
  Input.Modifiers _modPressed = Input.Modifiers.none();

  /// The scalar to change how fast the zoom occurs.
  double _zoomScalar = 0.01;

  /// The current zoom value.
  double _zoom = 0.0;

  /// The last frame the mover was updated for.
  int _frameNum = 0;

  /// The matrix describing the zoom.
  Math.Matrix4 _mat = Math.Matrix4.identity;

  /// Event for handling changes to this mover.
  Events.Event? _changed = null;

  /// Creates an instance of [UserZoom].
  /// If [mod] is provided it will override any value given to [ctrl], [alt], and [shift].
  UserZoom({
      bool ctrl:  false,
      bool alt:   false,
      bool shift: false,
      Input.Modifiers? mod:   null,
      Input.UserInput? input: null}) {
    this.modifiers = mod ?? new Input.Modifiers(ctrl, alt, shift);
    this.attach(input);
  }

  /// Emits when the mover has changed.
  Events.Event get changed =>
    this._changed ??= new Events.Event();

  /// Handles a child mover being changed.
  void _onChanged([Events.EventArgs? args = null]) =>
    this._changed?.emit(args);

  /// Attaches this mover to the user input.
  bool attach(Input.UserInput? input) {
    if (input == null) return false;
    if (this._input != null) return false;
    this._input = input;
    input.mouse.wheel.add(this._mouseWheelHandle);
    input.locked.wheel.add(this._mouseWheelHandle);
    return true;
  }

  /// Detaches this mover from the user input.
  void detach() {
    Input.UserInput? input = this._input;
    if (input != null) {
      input.mouse.wheel.remove(this._mouseWheelHandle);
      input.locked.wheel.remove(this._mouseWheelHandle);
      this._input = null;
    }
  }

  /// Handles the mouse wheel changing.
  void _mouseWheelHandle(Events.EventArgs args) {
    if (this._modPressed != this._input?.key.modifiers) return;
    Input.MouseWheelEventArgs margs = (args as Input.MouseWheelEventArgs);
    this.zoom += margs.wheel.dy*this._zoomScalar;
  }

  /// Indicates if the modifiers keys must be pressed or released.
  Input.Modifiers get modifiers => this._modPressed;
  set modifiers(Input.Modifiers mods) {
    if (this._modPressed != mods) {
      Input.Modifiers prev = this._modPressed;
      this._modPressed = mods;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'modifiers', prev, mods));
    }
  }

  /// The scalar to change how fast the zoom occurs.
  double get zoomScalar => this._zoomScalar;
  set zoomScalar(double value) {
    if (!Math.Comparer.equals(this._zoomScalar, value)) {
      double prev = this._zoomScalar;
      this._zoomScalar = value;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'zoomScalar', prev, this._zoomScalar));
    }
  }

  /// The current zoom value, the exponent on the scalar.
  double get zoom => this._zoom;
  set zoom(double value) {
    if (this._zoom != value) {
      double prev = this._zoom;
      this._zoom = value;
      this._onChanged(new Events.ValueChangedEventArgs(this, 'zoom', prev, this._zoom));
    }
  }

  /// Updates this mover and returns the matrix for the given object.
  Math.Matrix4 update(Core.RenderState state, Movable obj) {
    if (this._frameNum < state.frameNumber) {
      this._frameNum = state.frameNumber;
      double pow = math.pow(10.0, this._zoom).toDouble();
      this._mat = new Math.Matrix4.scale(pow, pow, pow);
    }
    return this._mat;
  }
}
