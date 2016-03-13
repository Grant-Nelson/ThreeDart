part of ThreeDart.Math;

/// A math structure for storing a red, green, blue, and alpha additive color.
///
/// The alpha color compoent is the transparency of the color.
/// 0.0 it completely transparent. 1.0 is completely opaque.
class Color4 {

  /// The red component of the color.
  double _red;

  /// The green component of the color.
  double _green;

  /// The blue component of the color.
  double _blue;

  /// The alpha component of the color.
  double _alpha;

  /// Constructs a new [Color4] instance.
  ///
  /// [red], [green], [blue], and [alpha] are the initial color components between 0.0 and 1.0 inclusively.
  Color4(double red, double green, double blue, [double alpha = 1.0]) {
    this.set(red, green, blue, alpha);
  }

  /// Constructs a new [Color4] instance with no color, opaque black.
  factory Color4.black() =>
    new Color4(0.0, 0.0, 0.0, 1.0);

  /// Constructs a new [Color3] instance with full color, white.
  factory Color4.white() =>
    new Color4(1.0, 1.0, 1.0, 1.0);

  /// Constructs a new transpanent [Color4] instance, transparent black.
  factory Color4.transparent() =>
    new Color4(0.0, 0.0, 0.0, 0.0);

  /// Constructs a new [Color4] instance from a [Color3] instance.
  ///
  /// [clr] contains the initial components for the color.
  /// [alpha] is the transparent component of the new color.
  /// If [alpha] is not provided the color will be completely opaque.
  factory Color4.fromColor3(Color3 clr, [double apha = 1.0]) =>
    new Color4(clr._red, clr._green, clr._blue, apha);

  /// Constructs a new [Color3] instance given a list of 4 doubles.
  ///
  /// [values] is a list of doubles are in the order red, green, blue, then alpha.
  /// [values] is the initial color components between 0.0 and 1.0 inclusively.
  factory Color4.fromList(List<double> values) {
    assert(values.length == 4);
    return new Color4(values[0], values[1], values[2], values[3]);
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

  /// The alpha component between 0.0 and 1.0 inclusively.
  double get alpha => this._alpha;
  set alpha(double alpha) => this._alpha = clampVal(alpha);

  /// Sets the color of this instance.
  ///
  /// [red], [green], [blue], and [alpha] are the new color components between 0.0 and 1.0 inclusively.
  void set(double red, double green, double blue, double alpha) {
    this._red   = clampVal(red);
    this._green = clampVal(green);
    this._blue  = clampVal(blue);
    this._alpha = clampVal(alpha);
  }

  /// Gets an list of 4 doubles in the order red, green, blue, then alpha.
  List<double> toList() =>
      [this._red, this._green, this._blue, this._alpha];

  /// Creates a copy of the color.
  Color4 copy() =>
      new Color4(this._red, this._green, this._blue, this._alpha);

  /// Inverts the color, creating the complement color and inverted translucency.
  Color4 invert() =>
    new Color4(1.0 - this._red, 1.0 - this._green, 1.0 - this._blue, 1.0 - this._alpha);

  /// Creates the linear interpolation between this color and the [other] color.
  ///
  /// The [i] is interpolation factor. 0.0 or less will return this color.
  /// 1.0 or more will return the [other] color. Between 0.0 and 1.0 will be
  /// a scaled mixure of the two colors.
  Color4 lerp(Color4 other, double i) =>
    new Color4(lerpVal(this._red,  other._red,  i), lerpVal(this._green, other._green, i),
               lerpVal(this._blue, other._blue, i), lerpVal(this._alpha, other._alpha, i));

  /// Creates a new color as the sum of this color and the [other] color.
  ///
  /// The color components will saturate at 1.0 so are limited to 1.0.
  Color4 operator +(Color4 other) =>
      new Color4(this._red  + other._red,  this._green + other._green,
                 this._blue + other._blue, this._alpha + other._alpha);

  /// Creates a new color as the difference of this color and the [other] color.
  ///
  /// The color components will deplete at 0.0 so are limited to 0.0.
  Color4 operator -(Color4 other) =>
      new Color4(this._red  - other._red,  this._green - other._green,
                 this._blue - other._blue, this._alpha - other._alpha);

  /// Creates a new color scaled by the given [scalar].
  Color4 operator *(double scalar) =>
      new Color4(scalar * this._red,  scalar * this._green,
                 scalar * this._blue, scalar * this._alpha);

  /// Creates a new color inversely scaled by the given [scalar].
  Color4 operator /(double scalar) {
    if (Comparer.equals(scalar, 0.0)) {
      return new Color4.transparent();
    }
    return new Color4(this._red  / scalar, this._green / scalar,
                      this._blue / scalar, this._alpha / scalar);
  }

  /// Determines if the given [other] variable is a [Color4] equal to this color.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Color4) return false;
    Color4 clr = other as Color4;
    if (!Comparer.equals(clr._red,   this._red))   return false;
    if (!Comparer.equals(clr._green, this._green)) return false;
    if (!Comparer.equals(clr._blue,  this._blue))  return false;
    if (!Comparer.equals(clr._alpha, this._alpha)) return false;
    return true;
  }

  /// Gets the string for this color.
  String toString([int fraction = 3, int whole = 0]) => '['+
      formatDouble(this._red, fraction, whole)+', '+
      formatDouble(this._green, fraction, whole)+', '+
      formatDouble(this._blue, fraction, whole)+', '+
      formatDouble(this._alpha, fraction, whole)+']';
}
