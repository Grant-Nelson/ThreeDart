part of ThreeDart.Data;

/// A vertex type or group of types for creating simple shapes.
class VertexType {

  /// [None] indicates no vertex type at all.
  static VertexType None = new VertexType._(0x0000);

  /// [None] indicates all vertex types.
  static VertexType All = new VertexType._(0xFFFF);

  /// [Pos] indicates 3D positional data.
  static VertexType Pos = new VertexType._(0x0001);

  /// [Norm] indicates 3D normal data.
  static VertexType Norm = new VertexType._(0x0002);

  /// [Binm] indicates 3D binormal data.
  static VertexType Binm = new VertexType._(0x0004);

  /// [Txt2D] indicates 2D texture data.
  static VertexType Txt2D = new VertexType._(0x0008);

  /// [TxtCube] indicates cube texture data.
  static VertexType TxtCube = new VertexType._(0x0010);

  /// [Clr3] indicates RGB color data.
  static VertexType Clr3 = new VertexType._(0x0020);

  /// [Clr4] indicates RGBA color data.
  static VertexType Clr4 = new VertexType._(0x0040);

  /// [Clr3] indicates RGB or RGBA color data.
  static VertexType Color = new VertexType._(0x0060);

  /// [Weight] indicates an additional single float data.
  static VertexType Weight = new VertexType._(0x0080);

  /// [Bending] indicates float data for bending a shape.
  static VertexType Bending = new VertexType._(0x0100);

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
    if (this.has(Pos))     result++;
    if (this.has(Norm))    result++;
    if (this.has(Binm))    result++;
    if (this.has(Txt2D))   result++;
    if (this.has(TxtCube)) result++;
    if (this.has(Clr3))    result++;
    if (this.has(Clr4))    result++;
    if (this.has(Weight))  result++;
    if (this.has(Bending)) result++;
    return result;
  }

  /// The total number of floats in the vertex type.
  int get size {
    int result = 0;
    if (this.has(Pos))     result += 3;
    if (this.has(Norm))    result += 3;
    if (this.has(Binm))    result += 3;
    if (this.has(Txt2D))   result += 2;
    if (this.has(TxtCube)) result += 3;
    if (this.has(Clr3))    result += 3;
    if (this.has(Clr4))    result += 4;
    if (this.has(Weight))  result += 1;
    if (this.has(Bending)) result += 1;
    return result;
  }

  /// The vertex type at the given [index].
  VertexType at(int index) {
    int count = 0;
    if (this.has(Pos)) {
      if (count == index) return Pos;
      count++;
    }
    if (this.has(Norm)) {
      if (count == index) return Norm;
      count++;
    }
    if (this.has(Binm)) {
      if (count == index) return Binm;
      count++;
    }
    if (this.has(Txt2D)) {
      if (count == index) return Txt2D;
      count++;
    }
    if (this.has(TxtCube)) {
      if (count == index) return TxtCube;
      count++;
    }
    if (this.has(Clr3)) {
      if (count == index) return Clr3;
      count++;
    }
    if (this.has(Clr4)) {
      if (count == index) return Clr4;
      count++;
    }
    if (this.has(Weight)) {
      if (count == index) return Weight;
      count++;
    }
    if (this.has(Bending)) {
      if (count == index) return Bending;
      count++;
    }
    return None;
  }

  /// The index of the given [type] in this combined type.
  int indexOf(VertexType type) {
    int result = 0;
    if (this.has(Pos)) {
      if (type == Pos) return result;
      result++;
    }
    if (this.has(Norm)) {
      if (type == Norm) return result;
       result++;
    }
    if (this.has(Binm)) {
      if (type == Binm) return result;
      result++;
    }
    if (this.has(Txt2D)) {
      if (type == Txt2D) return result;
      result++;
    }
    if (this.has(TxtCube)) {
      if (type == TxtCube) return result;
      result++;
    }
    if (this.has(Clr3)) {
      if (type == Clr3) return result;
      result++;
    }
    if (this.has(Clr4)) {
      if (type == Clr4) return result;
      result++;
    }
    if (this.has(Weight)) {
      if (type == Weight) return result;
      result++;
    }
    if (this.has(Bending)) {
      if (type == Bending) return result;
      //result++;
    }
    return -1;
  }

  /// The number of floats to the given [type] in this combined type.
  int offset(VertexType type) {
    int result = 0;
    if (this.has(Pos)) {
      if (type == Pos) return result;
      result += 3;
    }
    if (this.has(Norm)) {
      if (type == Norm) return result;
      result += 3;
    }
    if (this.has(Binm)) {
      if (type == Binm) return result;
      result += 3;
    }
    if (this.has(Txt2D)) {
      if (type == Txt2D) return result;
      result += 2;
    }
    if (this.has(TxtCube)) {
      if (type == TxtCube) return result;
      result += 3;
    }
    if (this.has(Clr3)) {
      if (type == Clr3) return result;
      result += 3;
    }
    if (this.has(Clr4)) {
      if (type == Clr4) return result;
      result += 4;
    }
    if (this.has(Weight)) {
      if (type == Weight) return result;
      result += 1;
    }
    if (this.has(Bending)) {
      if (type == Bending) return result;
      result += 1;
    }
    return -1;
  }

  /// The string for this vertex type.
  String toString() {
    List<String> parts = new List<String>();
    if (this.has(Pos))     parts.add("Pos");
    if (this.has(Norm))    parts.add("Norm");
    if (this.has(Binm))    parts.add("Binm");
    if (this.has(Txt2D))   parts.add("Txt2D");
    if (this.has(TxtCube)) parts.add("TxtCube");
    if (this.has(Clr3))    parts.add("Clr3");
    if (this.has(Clr4))    parts.add("Clr4");
    if (this.has(Weight))  parts.add("Weight");
    if (this.has(Bending)) parts.add("Bending");
    if (parts.length <= 0) return "None";
    return parts.join("|");
  }
}
