part of ThreeDart.Lights;

/// Storage for directional light data.
class Directional implements Light {

  /// Creates a new directional light data.
  Directional({
      Math.Vector3 direction: null,
      Math.Color3 color: null}) {
    this.direction = direction;
    this.color = color;
  }

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
}
