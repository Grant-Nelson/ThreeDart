part of ThreeDart.Shaders;

/// A description of what kind of source the color comes from.
class ColorSourceType {
  
  final bool hasSolid;

  final bool hasTxt2D;

  final bool hasTxtCube;

  ColorSourceType._(bool this.hasSolid, bool this.hasTxt2D, bool this.hasTxtCube);

  factory ColorSourceType() => new ColorSourceType._(false, false, false);

  bool get hasNone => !hasAny;
  bool get hasAny => this.hasSolid || this.hasTxt2D || this.hasTxtCube;

  ColorSourceType enableSolid(bool enable) =>
    new ColorSourceType._(enable, this.hasTxt2D, this.hasTxtCube);

  ColorSourceType enableTxt2D(bool enable) =>
    new ColorSourceType._(this.hasSolid, enable, enable?false:this.hasTxtCube);

  ColorSourceType enableTxtCube(bool enable) =>
    new ColorSourceType._(this.hasSolid, enable?false:this.hasTxt2D, enable);

  int get value => (this.hasSolid?1:0) | (this.hasTxt2D?2:0) | (this.hasTxtCube?4:0);

  String toString() => "$value";

  bool operator == (dynamic other) {
    if (other is! ColorSourceType) return false;
    ColorSourceType otherType = other as ColorSourceType;
    return (this.hasSolid   == otherType.hasSolid) &&
           (this.hasTxt2D   == otherType.hasTxt2D) &&
           (this.hasTxtCube == otherType.hasTxtCube);
  }
}
