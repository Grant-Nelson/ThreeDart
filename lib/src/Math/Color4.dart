part of ThreeDart.Math;

/// A math structure for storing a red, green, blue, and alpha additive color.
///
/// The alpha color component is the transparency of the color.
/// 0.0 it completely transparent. 1.0 is completely opaque.
class Color4 {

  /// The red component between 0.0 and 1.0 inclusively.
  final double red;

  /// The green component between 0.0 and 1.0 inclusively.
  final double green;

  /// The blue component between 0.0 and 1.0 inclusively.
  final double blue;

  /// The alpha component between 0.0 and 1.0 inclusively.
  final double alpha;

  /// Constructs a new [Color4] instance.
  Color4._(double this.red, double this.green, double this.blue, double this.alpha);

  /// Constructs a new [Color4] instance.
  ///
  /// [red], [green], [blue], and [alpha] are the initial color components between 0.0 and 1.0 inclusively.
  factory Color4(double red, double green, double blue, [double alpha = 1.0]) =>
    new Color4._(clampVal(red), clampVal(green), clampVal(blue), clampVal(alpha));

  /// Constructs a new [Color4] instance with no color, opaque black.
  factory Color4.black([double alpha = 1.0]) =>
    new Color4._(0.0, 0.0, 0.0, clampVal(alpha));

  /// Constructs a new [Color4] instance with a gray color from the optional [value].
  factory Color4.gray([double value = 0.5, double alpha = 1.0]) {
    value = clampVal(value);
    return new Color4._(value, value, value, clampVal(alpha));
  }

  /// Constructs a new [Color4] instance with full color, white.
  factory Color4.white([double alpha = 1.0]) =>
    new Color4._(1.0, 1.0, 1.0, clampVal(alpha));

  /// Constructs a new transparent [Color4] instance, transparent black.
  factory Color4.transparent() =>
    new Color4._(0.0, 0.0, 0.0, 0.0);

  /// Constructs a new color from bytes.
  ///
  /// [red], [green], [blue], and [alpha] are between 0 and 255. 
  factory Color4.fromBytes(int red, int green, int blue, [int alpha = 0xFF]) =>
    new Color4(red/0xFF, green/0xFF, blue/0xFF, alpha/0xFF);

  /// Constructs a new [Color4] instance from a [Color3] instance.
  ///
  /// [clr] contains the initial components for the color.
  /// [alpha] is the transparent component of the new color.
  /// If [alpha] is not provided the color will be completely opaque.
  factory Color4.fromColor3(Color3 clr, [double alpha = 1.0]) =>
    new Color4._(clr.red, clr.green, clr.blue, clampVal(alpha));

  /// Constructs a new [Color3] instance given a list of 4 doubles.
  ///
  /// [values] is a list of doubles are in the order red, green, blue, then alpha.
  /// [values] is the initial color components between 0.0 and 1.0 inclusively.
  factory Color4.fromList(List<double> values) {
    assert(values.length == 4);
    return new Color4(values[0], values[1], values[2], values[3]);
  }

  /// Constructs a new [Color4] instance given the hue, saturation, and value.
  ///
  /// [hue], [value], and [saturation] are from 0.0 to 1.0.
  factory Color4.fromHVS(double hue, double value, double saturation, [double alpha = 1.0]) {
  	return new Color4.fromColor3(new Color3.fromHVS(hue, value, saturation), alpha);
  }

  /// Gets an list of 4 doubles in the order red, green, blue, then alpha.
  List<double> toList() =>
      [this.red, this.green, this.blue, this.alpha];

  /// Gets the value at the zero based index in the order red, green, blue, then alpha.
  /// If out-of-bounds, zero is returned.
  double atIndex(int i) {
    switch(i) {
      case 0: return this.red;
      case 1: return this.green;
      case 2: return this.blue;
      case 3: return this.alpha;
    }
    return 0.0;
  }

  /// Inverts the color, creating the complement color and inverted translucency.
  Color4 invert() =>
    new Color4._(1.0 - this.red, 1.0 - this.green, 1.0 - this.blue, 1.0 - this.alpha);

  /// Trims the color into 32 bit space range.
  Color4 trim32() =>
    new Color4._(trimColor8(this.red),  trimColor8(this.green),
                 trimColor8(this.blue), trimColor8(this.alpha));
                 
  /// Converts this color to an ARGB 32 bit color integer.
  int toARGB32() =>
    ((this.alpha*255.0).floor() << 24) +
    ((this.red  *255.0).floor() << 16) +
    ((this.green*255.0).floor() <<  8) +
     (this.blue *255.0).floor();

  /// Creates the linear interpolation between this color and the [other] color.
  ///
  /// The [i] is interpolation factor. 0.0 or less will return this color.
  /// 1.0 or more will return the [other] color. Between 0.0 and 1.0 will be
  /// a scaled mixture of the two colors.
  Color4 lerp(Color4 other, double i) =>
    new Color4(lerpVal(this.red,  other.red,  i), lerpVal(this.green, other.green, i),
               lerpVal(this.blue, other.blue, i), lerpVal(this.alpha, other.alpha, i));

  /// Creates a new color as the sum of this color and the [other] color.
  ///
  /// The color components will saturate at 1.0 so are limited to 1.0.
  Color4 operator +(Color4 other) =>
    new Color4(this.red  + other.red,  this.green + other.green,
               this.blue + other.blue, this.alpha + other.alpha);

  /// Creates a new color as the difference of this color and the [other] color.
  ///
  /// The color components will deplete at 0.0 so are limited to 0.0.
  Color4 operator -(Color4 other) =>
    new Color4(this.red  - other.red,  this.green - other.green,
               this.blue - other.blue, this.alpha - other.alpha);

  /// Creates a new color scaled by the given [scalar].
  Color4 operator *(double scalar) =>
    new Color4(scalar * this.red,  scalar * this.green,
               scalar * this.blue, scalar * this.alpha);

  /// Creates a new color inversely scaled by the given [scalar].
  Color4 operator /(double scalar) {
    if (Comparer.equals(scalar, 0.0)) {
      return new Color4.transparent();
    }
    return new Color4(this.red  / scalar, this.green / scalar,
                      this.blue / scalar, this.alpha / scalar);
  }

  /// Determines if the given [other] variable is a [Color4] equal to this color.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Color4) return false;
    Color4 clr = other as Color4;
    if (!Comparer.equals(clr.red,   this.red))   return false;
    if (!Comparer.equals(clr.green, this.green)) return false;
    if (!Comparer.equals(clr.blue,  this.blue))  return false;
    if (!Comparer.equals(clr.alpha, this.alpha)) return false;
    return true;
  }

  /// Gets the string for this color.
  String toString() => this.format();

  /// Gets the formatted string for this color.
  String format([int fraction = 3, int whole = 0]) => '['+
    formatDouble(this.red,   fraction, whole)+', '+
    formatDouble(this.green, fraction, whole)+', '+
    formatDouble(this.blue,  fraction, whole)+', '+
    formatDouble(this.alpha, fraction, whole)+']';
}
