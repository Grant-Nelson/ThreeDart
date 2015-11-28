part of ThreeDart.Lights;

/// Storage for spot light data.
class Spot implements Light {

  /// Creates a new spot light data.
  Spot({
      Math.Point3 position: null,
      Math.Vector3 direction: null,
      Math.Color3 color: null,
      double penumbra: null,
      double umbra: null,
      double fallOff: null}) {
    this.position = position;
    this.direction = direction;
    this.color = color;
    this.penumbra = penumbra;
    this.umbra = umbra;
    this.fallOff = fallOff;
  }

    /// The location the light.
  Math.Point3 get position => this._position;
  set position(Math.Point3 position) =>
    this._position = (position == null)? new Math.Point3.zero(): position;
  Math.Point3 _position;

  /// The direction the light is pointing.
  Math.Vector3 get direction => this._direction;
  set direction(Math.Vector3 direction) =>
    this._direction = (direction == null)?
    new Math.Vector3(0.0, -1.0, 0.0): direction.normal();
  Math.Vector3 _direction;

  /// The color of the light.
  Math.Color3 get color => this._color;
  set color(Math.Color3 color) =>
    this._color = (color == null)? new Math.Color3.white(): color;
  Math.Color3 _color;

    /// The penumbra of the light.
  double get penumbra => this._penumbra;
  set penumbra(double penumbra) =>
    this._penumbra = (penumbra == null)? math.PI:
    (penumbra < 0.0)? 0.0: (penumbra > math.PI)? math.PI: penumbra;
  double _penumbra;

    /// The umbra of the light.
  double get umbra => this._umbra;
  set umbra(double umbra) =>
    this._umbra = (umbra == null)? math.PI:
    (umbra < 0.0)? 0.0: (umbra > math.PI)? math.PI: umbra;
  double _umbra;

    /// The fall off of the light.
  double get fallOff => this._fallOff;
  set fallOff(double fallOff) =>
    this._fallOff = (fallOff == null)? 1.0:
    (fallOff < 1.0e-6)? 1.0e-6: (fallOff > 1.0e6)? 1.0e6: fallOff;
  double _fallOff;
}
