part of ThreeDart.Shaders;

/// A description of what kind of source the color comes from.
class ColorSourceType {
  
  /// Indicates that the source color has a solid value such as a float or RGB color.
  final bool hasSolid;

  /// Indicates that the source color comes from a 2D texture.
  final bool hasTxt2D;

  /// Indicates that the source color comes from a cube texture.
  final bool hasTxtCube;

  /// Creates a new color source with the given values.
  ColorSourceType._(bool this.hasSolid, bool this.hasTxt2D, bool this.hasTxtCube);

  /// Creates a new color source with none as the source.
  factory ColorSourceType() => new ColorSourceType._(false, false, false);

  /// Indicates that there is no color source being used.
  bool get hasNone => !hasAny;

  /// Indicates that there is some kind of color source being used.
  bool get hasAny => this.hasSolid || this.hasTxt2D || this.hasTxtCube;

  /// Creates a new color source by enabling/disabling the solid color.
  ColorSourceType enableSolid(bool enable) =>
    new ColorSourceType._(enable, this.hasTxt2D, this.hasTxtCube);

  /// Creates a new color source by enabling/disabling the 3D texture color.
  ColorSourceType enableTxt2D(bool enable) =>
    new ColorSourceType._(this.hasSolid, enable, enable?false:this.hasTxtCube);

  /// Creates a new color source by enabling/disabling the cube texture color.
  ColorSourceType enableTxtCube(bool enable) =>
    new ColorSourceType._(this.hasSolid, enable?false:this.hasTxt2D, enable);

  /// Gets a integer value which represents this source color.
  int get value => (this.hasSolid?1:0) | (this.hasTxt2D?2:0) | (this.hasTxtCube?4:0);

  /// Gets a string for the source color.
  String toString() => "$value";

  /// Checks if this source color is equal to the given other type.
  bool operator == (dynamic other) {
    if (other is! ColorSourceType) return false;
    ColorSourceType otherType = other as ColorSourceType;
    return (this.hasSolid   == otherType.hasSolid) &&
           (this.hasTxt2D   == otherType.hasTxt2D) &&
           (this.hasTxtCube == otherType.hasTxtCube);
  }
}
