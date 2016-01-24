part of ThreeDart.Lights;

/// Storage for point light data.
class Point implements Light {

  /// Creates a new point light data.
  Point({
      Math.Point3 position: null,
      Math.Color3 color: null,
      double attenuation0: null,
      double attenuation1: null,
      double attenuation2: null}) {
    this.position = position;
    this.color = color;
  }

  /// The location the light.
  Math.Point3 get position => this._position;
  set position(Math.Point3 position) =>
    this._position = (position == null)? new Math.Point3.zero(): position;
  Math.Point3 _position;

  /// The color of the light.
  Math.Color3 get color => this._color;
  set color(Math.Color3 color) =>
    this._color = (color == null)? new Math.Color3.white(): color;
  Math.Color3 _color;

  /// The constant attenuation factor of the light.
  double get attenuation0 => this._attenuation0;
  set attenuation0(double attenuation0) =>
    this._attenuation0 = (attenuation0 == null)? 0.0: attenuation0;
  double _attenuation0;

  /// The linear attenuation factor of the light.
  double get attenuation1 => this._attenuation1;
  set attenuation1(double attenuation1) =>
    this._attenuation1 = (attenuation1 == null)? 0.0: attenuation1;
  double _attenuation1;

  /// The quadratic attenuation factor of the light.
  double get attenuation2 => this._attenuation2;
  set attenuation2(double attenuation2) =>
    this._attenuation2 = (attenuation2 == null)? 0.0: attenuation2;
  double _attenuation2;
}
