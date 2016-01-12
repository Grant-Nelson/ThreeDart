part of ThreeDart.Movers;

/*
class UserRotater extends UserMover {

  /// The maximum allowed pitch rotation in radians.
  double _maxPitch;

  /// The minimum allowed pitch rotation in radians.
  double _minPitch;

  /// The maximum allowed zoom scalar.
  double _maxZoomScalar;

  /// The minimum allowed zoom scalar.
  double _minZoomScalar;

  /// The scalar to apply to the mouse movements in the x axis.
  double _mouseXScalar;

  /// The scalar to apply to the mouse movements in the y axis.
  double _mouseYScalar;

  /// The scalar to apply to the mouse wheel in the y axis.
  double _wheelScalar;

  /// The yaw rotation in radians.
  double _yaw;

  /// The pitch rotation in radians.
  double _pitch;

  /// The zoom scalar for zooming the view.
  double _zoomScalar;

  /// Indicates a mouse button is pressed.
  bool _mouseDown;

  /// The mouse x location when the button was pressed.
  int _lastMouseX;

  /// The mouse y location when the button was pressed.
  int _lastMouseY;

  /// The yaw rotation in radians when the button was pressed.
  double _lastYaw;

  /// The pitch rotation in radians when the button was pressed.
  double _lastPitch;

  /// The matrix describing the mover's position.
  Math.Matrix4 _mat;

  UserRotater() {
    this._maxPitch = math.PI * 0.5;
    this._minPitch = -math.PI * 0.5;
    this._maxZoomScalar = 10.0;
    this._minZoomScalar = 0.1;
    this._mouseXScalar = 0.005;
    this._mouseYScalar = 0.005;
    this._wheelScalar = 0.005;
    this._yaw = 0.0;
    this._pitch = 0.0;
    this._zoomScalar = 1.0;
    this._mouseDown = false;
    this._lastMouseX = 0;
    this._lastMouseY = 0;
    this._lastYaw = 0.0;
    this._lastPitch = 0.0;
    this._mat = null;
  }

  bool initialize(Core.ThreeDart td) {
    gl.canvas.onmousedown = function(event) {
        self._handleMouseDown(event);
    };
    document.onmouseup = function(event) {
        self._handleMouseUp(event);
    };
    document.onmousemove = function(event) {
        self._handleMouseMove(event);
    };
    document.onwheel = function(event) {
        self._handleMouseWheel(event);
    };
    return true;
  }

  void dispose() {

  }

  double get yaw => this._yaw;
  set yaw(double value) => this._yaw = Math.wrapVal(value, 0.0, 2.0*math.PI);

  double get pitch => this._pitch;
  set pitch(double value) => this._pitch = Math.clampVal(value, this._minPitch, this._maxPitch);

  /// The zoom scalar for zooming the view.
  double get zoomScalar => this._zoomScalar;
  set zoomScalar(double value) => this._zoomScalar = Math.clampVal(value, this._minZoomScalar, this._maxZoomScalar);

  /// The maximum allowed pitch rotation in radians.
  double get maxPitch => this._maxPitch;
  set maxPitch(double value) {
    this._maxPitch = value;
    if (this._minPitch > value) this._minPitch = value;
  }

  /// The minimum allowed pitch rotation in radians.
  double get minPitch => this._minPitch;
  set minPitch(double value) {
    this._minPitch = value;
    if (this._maxPitch < value) this._maxPitch = value;
  }

  /// The maximum allowed zoom scalar.
  double get maxZoomScalar => this._maxZoomScalar;
  set maxZoomScalar(double value) {
    this._maxZoomScalar = value;
    if (this._minZoomScalar < value) this._minZoomScalar = value;
  }

  /// The minimum allowed zoom scalar.
  double get minZoomScalar => this._minZoomScalar;
  set minZoomScalar(double value) {
    this._minZoomScalar = value;
    if (this._maxZoomScalar < value) this._maxZoomScalar = value;
  }

  /// The scalar to apply to the mouse movements in the x axis.
  double get mouseXScalar => this._mouseXScalar;
  set mouseXScalar(double value) => this._mouseXScalar = value;

  /// The scalar to apply to the mouse movements in the y axis.
  double get mouseYScalar => this._mouseYScalar;
  set mouseYScalar(double value) => this._mouseYScalar = value;

  /// The scalar to apply to the mouse wheel in the y axis.
  double get wheelScalar => this._wheelScalar;
  set wheelScalar(double value) => this._wheelScalar = value;





  void _update(Core.RenderState state, Core.Entity obj) {
    this._frameNum = state.frameNumber;




    this._yaw += this.deltaYaw*state.dt;
    this._pitch += this._deltaPitch*state.dt;

    double pi2 = math.PI*2.0;
    if ((this._yaw > pi2) || (this._yaw < 0.0)) this._yaw %= pi2;
    if ((this._pitch > pi2) || (this._pitch < 0.0)) this._pitch %= pi2;

    this._mat = new Math.Matrix4.rotateX(this._yaw)*
                new Math.Matrix4.rotateY(this._pitch);
  }

  Math.Matrix4 update(Core.RenderState state, Core.Entity obj) {
    if (this._frameNum < state.frameNumber) this._update(state, obj);
    return this._mat;
  }
}
*/
