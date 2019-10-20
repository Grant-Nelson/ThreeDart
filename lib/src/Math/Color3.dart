part of ThreeDart.Math;

/// A math structure for storing a red, green, and blue additive color.
///
/// There is no transparency component to [Color3] colors.
class Color3 {

  /// The red component between 0.0 and 1.0 inclusively.
  final double red;

  /// The green component between 0.0 and 1.0 inclusively.
  final double green;

  /// The blue component between 0.0 and 1.0 inclusively.
  final double blue;

  /// Constructs a new [Color3] instance.
  Color3._(double this.red, double this.green, double this.blue);

  /// Constructs a new [Color3] instance.
  ///
  /// [red], [green], and [blue] are the initial color components between 0.0 and 1.0 inclusively.
  factory Color3(double red, double green, double blue) =>
    new Color3._(clampVal(red), clampVal(green), clampVal(blue));

  /// Constructs a new [Color3] instance with no color, black.
  factory Color3.black() =>
    new Color3._(0.0, 0.0, 0.0);

  /// Constructs a new [Color3] instance with a gray color from the optional [value].
  factory Color3.gray([double value = 0.5]) {
    value = clampVal(value);
    return new Color3._(value, value, value);
  }

  /// Constructs a new [Color3] instance with full color, white.
  factory Color3.white() =>
    new Color3._(1.0, 1.0, 1.0);

  /// Constructs a new color from bytes.
  ///
  /// [red], [green], and [blue] are between 0 and 255. 
  factory Color3.fromBytes(int red, int green, int blue) =>
    new Color3(red/0xFF, green/0xFF, blue/0xFF);

  /// Constructs a new [Color3] instance from a [Color4] instance.
  ///
  /// [clr] contains the initial components for the color.
  /// The transparent component of [clr] is ignored.
  factory Color3.fromColor4(Color4 clr) =>
    new Color3._(clr.red, clr.green, clr.blue);

  /// Constructs a new [Color3] instance given a list of 3 doubles.
  ///
  /// [values] is a list of doubles are in the order red, green, then blue.
  /// [values] is the initial color components between 0.0 and 1.0 inclusively.
  factory Color3.fromList(List<double> values) {
    assert(values.length == 3);
    return new Color3(values[0], values[1], values[2]);
  }

  /// Constructs a new [Color3] instance given the hue, saturation, and value.
  ///
  /// [hue], [value], and [saturation] are from 0.0 to 1.0.
  factory Color3.fromHVS(double hue, double value, double saturation) {
  	hue *= 6.0; // sector 0 to 5
  	int index = hue.floor();
  	double fract = hue - index; // factorial part of h
  	double p = value*(1.0 - saturation);
  	double q = value*(1.0 - saturation*fract);
  	double t = value*(1.0 - saturation*(1.0 - fract));
  	switch (index) {
  		case 0: return new Color3(value, t, p);
  		case 1: return new Color3(q, value, p);
  		case 2: return new Color3(p, value, t);
  		case 3: return new Color3(p, q, value);
  		case 4: return new Color3(t, p, value);
  		default: return new Color3(value, p, q);
  	}
  }

  /// Gets an list of 3 doubles in the order red, green, then blue.
  List<double> toList() =>
    [this.red, this.green, this.blue];

  /// Gets the value at the zero based index in the order red, green, then blue.
  /// If out-of-bounds, zero is returned.
  double atIndex(int i) {
    switch(i) {
      case 0: return this.red;
      case 1: return this.green;
      case 2: return this.blue;
    }
    return 0.0;
  }

  /// Inverts the color, creating the complement color.
  Color3 invert() =>
    new Color3._(1.0 - this.red, 1.0 - this.green, 1.0 - this.blue);

  /// Trims the color into 24 bit space range.
  Color3 trim24() =>
    new Color3._(trimColor8(this.red),  trimColor8(this.green), trimColor8(this.blue));
                 
  /// Converts this color to an RGB 24 bit color integer.
  int toRGB24() =>
    ((this.red  *255.0).floor() << 16) +
    ((this.green*255.0).floor() <<  8) +
     (this.blue *255.0).floor();

  /// Creates the linear interpolation between this color and the [other] color.
  ///
  /// The [i] is interpolation factor. 0.0 or less will return this color.
  /// 1.0 or more will return the [other] color. Between 0.0 and 1.0 will be
  /// a scaled mixure of the two colors.
  Color3 lerp(Color3 other, double i) =>
    new Color3(lerpVal(this.red,   other.red,   i),
               lerpVal(this.green, other.green, i),
               lerpVal(this.blue,  other.blue,  i));

  /// Creates a new color as the sum of this color and the [other] color.
  ///
  /// The color components will saturate at 1.0 so are limited to 1.0.
  Color3 operator +(Color3 other) =>
    new Color3(this.red + other.red, this.green + other.green, this.blue + other.blue);

  /// Creates a new color as the difference of this color and the [other] color.
  ///
  /// The color components will deplete at 0.0 so are limited to 0.0.
  Color3 operator -(Color3 other) =>
    new Color3(this.red - other.red, this.green - other.green, this.blue - other.blue);

  /// Creates a new color scaled by the given [scalar].
  Color3 operator *(double scalar) =>
    new Color3(scalar * this.red, scalar * this.green, scalar * this.blue);

  /// Creates a new color inversely scaled by the given [scalar].
  Color3 operator /(double scalar) {
    if (Comparer.equals(scalar, 0.0)) {
      return new Color3.black();
    }
    return new Color3(this.red / scalar, this.green / scalar, this.blue / scalar);
  }

  /// Determines if the given [other] variable is a [Color3] equal to this color.
  ///
  /// The equality of the doubles is tested with the current [Comparer] method.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Color3) return false;
    Color3 clr = other as Color3;
    if (!Comparer.equals(clr.red,   this.red))   return false;
    if (!Comparer.equals(clr.green, this.green)) return false;
    if (!Comparer.equals(clr.blue,  this.blue))  return false;
    return true;
  }

  /// Gets the string for this color.
  String toString() => this.format();

  /// Gets the formatted string for this color.
  String format([int fraction = 3, int whole = 0]) => '['+
    formatDouble(this.red,   fraction, whole)+', '+
    formatDouble(this.green, fraction, whole)+', '+
    formatDouble(this.blue,  fraction, whole)+']';
}
