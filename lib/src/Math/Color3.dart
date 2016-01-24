part of ThreeDart.Math;

/// A math structure for storing a red, green, and blue additive color.
///
/// There is no transparency component to [Color3] colors.
class Color3 {

  /// The red component of the color.
  double _red;

  /// The green component of the color.
  double _green;

  /// The blue component of the color.
  double _blue;

  /// Constructs a new [Color3] instance.
  ///
  /// [red], [green], and [blue] are the initial color components between 0.0 and 1.0 inclusively.
  Color3(double red, double green, double blue) {
    this.set(red, green, blue);
  }

  /// Constructs a new [Color3] instance with no color, black.
  factory Color3.black() =>
    new Color3(0.0, 0.0, 0.0);

  /// Constructs a new [Color3] instance with full color, white.
  factory Color3.white() =>
    new Color3(1.0, 1.0, 1.0);

  /// Constructs a new [Color3] instance from a [Color4] instance.
  ///
  /// [clr] contains the initial components for the color.
  /// The transparent component of [clr] is ignored.
  factory Color3.fromColor4(Color4 clr) =>
    new Color3(clr.red, clr.green, clr.blue);

  /// Constructs a new [Color3] instance given a list of 3 doubles.
  ///
  /// [values] is a list of doubles are in the order red, green, then blue.
  /// [values] is the initial color components between 0.0 and 1.0 inclusively.
  factory Color3.fromList(List<double> values) {
    assert(values.length == 3);
    return new Color3(values[0], values[1], values[2]);
  }

  /// The red component between 0.0 and 1.0 inclusively.
  double get red => this._red;
  set red(double red) => this._red = clampVal(red);

  /// The green component between 0.0 and 1.0 inclusively.
  double get green => this._green;
  set green(double green) => this._green = clampVal(green);

  /// The blue component between 0.0 and 1.0 inclusively.
  double get blue => this._blue;
  set blue(double blue) => this._blue = clampVal(blue);

  /// Sets the color of this instance.
  ///
  /// [red], [green], and [blue] are the new color components between 0.0 and 1.0 inclusively.
  void set(double red, double green, double blue) {
    this._red   = clampVal(red);
    this._green = clampVal(green);
    this._blue  = clampVal(blue);
  }

  /// Gets an list of 3 doubles in the order red, green, then blue.
  List<double> toList() =>
      [this._red, this._green, this._blue];

  /// Creates a copy of the color.
  Color3 copy() =>
      new Color3(this._red, this._green, this._blue);

  /// Inverts the color, creating the complement color.
  Color3 invert() =>
    new Color3(1.0 - this._red, 1.0 - this._green, 1.0 - this._blue);

  /// Creates the linear interpolation between this color and the [other] color.
  ///
  /// The [i] is interpolation factor. 0.0 or less will return this color.
  /// 1.0 or more will return the [other] color. Between 0.0 and 1.0 will be
  /// a scaled mixure of the two colors.
  Color3 lerp(Color3 other, double i) =>
    new Color3(lerpVal(this._red,   other._red,   i),
               lerpVal(this._green, other._green, i),
               lerpVal(this._blue,  other._blue,  i));

  /// Creates a new color as the sum of this color and the [other] color.
  ///
  /// The color components will saturate at 1.0 so are limited to 1.0.
  Color3 operator +(Color3 other) =>
      new Color3(this._red + other._red, this._green + other._green, this._blue + other._blue);

  /// Creates a new color as the difference of this color and the [other] color.
  ///
  /// The color components will deplete at 0.0 so are limited to 0.0.
  Color3 operator -(Color3 other) =>
      new Color3(this._red - other._red, this._green - other._green, this._blue - other._blue);

  /// Creates a new color scaled by the given [scalar].
  Color3 operator *(double scalar) =>
      new Color3(scalar * this._red, scalar * this._green, scalar * this._blue);

  /// Creates a new color inversely scaled by the given [scalar].
  Color3 operator /(double scalar) {
    if (Comparer.equals(scalar, 0.0)) {
      return new Color3.black();
    }
    return new Color3(this._red / scalar, this._green / scalar, this._blue / scalar);
  }

  /// Determines if the given [other] variable is a [Color3] equal to this color.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Color3) return false;
    Color3 clr = other as Color3;
    if (!Comparer.equals(clr._red,   this._red))   return false;
    if (!Comparer.equals(clr._green, this._green)) return false;
    if (!Comparer.equals(clr._blue,  this._blue))  return false;
    return true;
  }

  /// Gets the string for this color.
  String toString() => '['+
      formatDouble(this._red)+', '+
      formatDouble(this._green)+', '+
      formatDouble(this._blue)+']';
}
