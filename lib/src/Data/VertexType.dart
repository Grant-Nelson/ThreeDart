part of ThreeDart.Data;

/// A vertex type or group of types for creating simple shapes.
class VertexType {

  /// [None] indicates no vertex type at all.
  static VertexType None = new VertexType._(0x00);

  /// [Pos] indicates 3D positional data.
  static VertexType Pos = new VertexType._(0x01);

  /// [Norm] indicates 3D normal data.
  static VertexType Norm = new VertexType._(0x02);

  /// [Binm] indicates 3D binormal data.
  static VertexType Binm = new VertexType._(0x04);

  /// [Txt] indicates 2D texture data.
  static VertexType Txt = new VertexType._(0x08);

  /// [Clr3] indicates RGB color data.
  static VertexType Clr3 = new VertexType._(0x10);

  /// [Clr4] indicates RGBA color data.
  static VertexType Clr4 = new VertexType._(0x20);

  /// [Weight] indicates an additional single float data.
  static VertexType Weight = new VertexType._(0x40);

  /// The combined vertex type value.
  final int _value;

  /// Creates a new vertex type.
  VertexType._(this._value);

  /// Combines two vertex types into one.
  VertexType operator|(VertexType right) {
    return new VertexType._(this._value|right._value);
  }

  /// The interal value of the vertex type.
  int get value => this._value;

  /// Determines if this vertex type contains the given type.
  bool has(VertexType type) {
    return (this._value  & type._value) != 0x00;
  }

  /// The number of vertex types combined into this type.
  int get count {
    int result = 0;
    if (this.has(Pos)) result++;
    if (this.has(Norm)) result++;
    if (this.has(Binm)) result++;
    if (this.has(Txt)) result++;
    if (this.has(Clr3)) result++;
    if (this.has(Clr4)) result++;
    if (this.has(Weight)) result++;
    return result;
  }

  /// The total number of floats in the vertex type.
  int get size {
    int result = 0;
    if (this.has(Pos)) result += 3;
    if (this.has(Norm)) result += 3;
    if (this.has(Binm)) result += 3;
    if (this.has(Txt)) result += 2;
    if (this.has(Clr3)) result += 3;
    if (this.has(Clr4)) result += 4;
    if (this.has(Weight)) result += 1;
    return result;
  }

  /// The vertex type at the given [index].
  VertexType at(int index) {
    int count = 0;
    if (count == index) return Pos;
    if (this.has(Pos)) count++;

    if (count == index) return Norm;
    if (this.has(Norm)) count++;

    if (count == index) return Binm;
    if (this.has(Binm)) count++;

    if (count == index) return Txt;
    if (this.has(Txt)) count++;

    if (count == index) return Clr3;
    if (this.has(Clr3)) count++;

    if (count == index) return Clr4;
    if (this.has(Clr4)) count++;

    if (count == index) return Weight;
    if (this.has(Weight)) count++;
    return None;
  }

  /// The index of the given [type] in this combined type.
  int offset(VertexType type) {
    int result = 0;
    if (type == Pos) return result;
    if (this.has(Pos)) result += 3;

    if (type == Norm) return result;
    if (this.has(Norm)) result += 3;

    if (type == Binm) return result;
    if (this.has(Binm)) result += 3;

    if (type == Txt) return result;
    if (this.has(Txt)) result += 2;

    if (type == Clr3) return result;
    if (this.has(Clr3)) result += 3;

    if (type == Clr4) return result;
    if (this.has(Clr4)) result += 4;

    if (type == Weight) return result;
    if (this.has(Weight)) result += 1;
    return result;
  }

  /// The string for this vertex type.
  String toString() {
    List<String> parts = new List<String>();
    if (this.has(Pos)) parts.add("Pos");
    if (this.has(Norm)) parts.add("Norm");
    if (this.has(Binm)) parts.add("Binm");
    if (this.has(Txt)) parts.add("Txt");
    if (this.has(Clr3)) parts.add("Clr3");
    if (this.has(Clr4)) parts.add("Clr4");
    if (this.has(Weight)) parts.add("Weight");
    return parts.join("|");
  }
}
