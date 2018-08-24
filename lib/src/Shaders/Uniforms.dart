part of ThreeDart.Shaders;

/// The uniform variable for a shader.
abstract class Uniform {

  /// The rendering context for the uniform variable.
  final WebGL.RenderingContext _gl;

  /// The program for the shader.
  final WebGL.Program _program;

  /// The name for the uniform variable in the shader source code.
  final String name;

  /// The location of the uniform variable in the shader.
  final WebGL.UniformLocation loc;

  /// Constructs a new uniform shader variable.
  Uniform._(this._gl, this._program, this.name, this.loc);

  /// Gets the raw value of the uniform shader.
  dynamic get rawValue => this._gl.getUniform(this._program, this.loc);
}

/// A container of uniform shader variables.
class UniformContainer {

  /// The list of uniform shader variables.
  List<Uniform> _uniforms;

  /// Creates a new uniform container for the given list of uniforms.
  UniformContainer._(List<Uniform> this._uniforms);

  /// The number of uniform variables in the container.
  int get count => this._uniforms.length;

  /// Gets the uniform variable at the given [i].
  Uniform at(int i) => this._uniforms[i];

  /// Gets the uniform variable by the name.
  Uniform operator [](String name) {
    for (Uniform uniform in this._uniforms) {
        if(uniform.name == name) return uniform;
    }
    return null;
  }

  /// Gets the uniform variable by the name.
  /// If the uniform doesn't exist an exception will be thrown.
  Uniform required(String name) {
    Uniform uniform = this[name];
    if (uniform == null) {
      throw new Exception("Required uniform value, $name, was not defined or used in shader.");
    }
    return uniform;
  }

  /// Gets the index of the uniform variable with the given name.
  int indexOf(String name) {
      for (int i = this._uniforms.length - 1; i >= 0; --i) {
          if (this._uniforms[i].name == name) return i;
      }
      return -1;
  }

  /// Determines if the uniform variable with the given name exists in this list.
  bool contains(String name) {
    for (Uniform uniform in this._uniforms) {
        if(uniform.name == name) return true;
    }
    return false;
  }

  /// Gets the string for this collection.
  String toString() => this.format();

  /// Gets the formatted string for this collection.
  String format({String sep: "\n"}) {
    String result = "";
    for (Uniform uniform in this._uniforms) {
        result += "$uniform$sep";
    }
    return result;
  }
}

//=======================================================================

/// The uniform variable for a single integer.
class Uniform1i extends Uniform {

  /// Creates a new single integer uniform variable.
  Uniform1i._(gl, program, name, loc): super._(gl, program, name, loc);

  /// Gets the single integer value.
  int getValue() {
    List<int> list = this.getList();
    assert(list.length == 1);
    return list[0];
  }

  /// Sets the single integer value of the uniform.
  void setValue(int value) => this._gl.uniform1i(super.loc, value);

  /// Gets the list containing a single integer value.
  List<int> getList() => this.rawValue;

  /// Sets the value with the given list.
  /// The list must contain only a single value.
  void setList(List<int> values) {
    assert(values.length == 1);
    this.setValue(values[0]);
  }

  /// Gets the name for this uniform variable.
  String toString() => "Uniform1i: ${this.name}";
}

/// The uniform variable for two integers.
class Uniform2i extends Uniform {

  /// Creates a new two integer uniform variable.
  Uniform2i._(gl, program, name, loc): super._(gl, program, name, loc);

  /// Sets the two integers value of the uniform.
  void setValues(int x, int y) => this._gl.uniform2i(super.loc, x, y);

  /// Gets the list containing two integer values.
  List<int> getList() => this.rawValue;

  /// Sets the values with the given list.
  /// The list must contain two values.
  void setList(List<int> values) {
    assert(values.length == 2);
    this.setValues(values[0], values[1]);
  }

  /// Gets the name for this uniform variable.
  String toString() => "Uniform2i: ${this.name}";
}

/// The uniform variable for three integers.
class Uniform3i extends Uniform {

  /// Creates a new three integer uniform variable.
  Uniform3i._(gl, program, name, loc): super._(gl, program, name, loc);

  /// Sets the three integers value of the uniform.
  void setValues(int x, int y, int z) =>
      this._gl.uniform3i(super.loc, x, y, z);

  /// Gets the list containing three integer values.
  List<int> getList() => this.rawValue;

  /// Sets the values with the given list.
  /// The list must contain three values.
  void setList(List<int> values) {
    assert(values.length == 3);
    this.setValues(values[0], values[1], values[2]);
  }

  /// Gets the name for this uniform variable.
  String toString() => "Uniform3i: ${this.name}";
}

/// The uniform variable for four integers.
class Uniform4i extends Uniform {

  /// Creates a new four integer uniform variable.
  Uniform4i._(gl, program, name, loc): super._(gl, program, name, loc);

  /// Sets the four integers value of the uniform.
  void setValues(int x, int y, int z, int w) =>
      this._gl.uniform4i(super.loc, x, y, z, w);

  /// Gets the list containing four integer values.
  List<int> getList() => this.rawValue;

  /// Sets the values with the given list.
  /// The list must contain four values.
  void setList(List<int> values) {
    assert(values.length == 4);
    this.setValues(values[0], values[1], values[2], values[3]);
  }

  /// Gets the name for this uniform variable.
  String toString() => "Uniform4i: ${this.name}";
}

/// The uniform variable for a single integer array.
class Uniform1iv extends Uniform {
  List<int> _values;

  /// Creates a new single integer array uniform variable.
  Uniform1iv._(gl, program, name, size, loc): super._(gl, program, name, loc) {
    this._size = size;
    this._values = new List<int>.filled(this._size, 0);
  }

  /// The size of the array;
  int get size => this._size;
  int _size;

  /// Gets the list containing a single integer array.
  List<int> getList() => this.rawValue;

  /// Gets the list containing a single integer array.
  List<int> getCachedList() => this._values;

  /// Sets the array with the given list.
  void setList(List<int> values) {
    this._values = values;
    this._gl.uniform1iv(super.loc, values);
  }

  /// Sets the value nt the list at the given index.
  void setAt(int index, int value) {
    this._values[index] = value;
    this._gl.uniform1iv(super.loc, this._values);
  }

  /// Gets the name for this uniform variable.
  String toString() => "Uniform1iv: ${this.name}";
}

//=======================================================================

/// The uniform variable for a single float.
class Uniform1f extends Uniform {

  /// Creates a new single float uniform variable.
  Uniform1f._(gl, program, name, loc): super._(gl, program, name, loc);

  /// Gets the single float value.
  double getValue() {
    List<double> list = this.getList();
    assert(list.length == 1);
    return list[0];
  }

  /// Sets the single float value of the uniform.
  void setValue(double value) => this._gl.uniform1f(super.loc, value);

  /// Gets the list containing a single float value.
  List<double> getList() => this.rawValue;

  /// Sets the values with the given list.
  /// The list must contain a single value.
  setList(List<double> values) {
    assert(values.length == 1);
    this.setValue(values[0]);
  }

  /// Gets the name for this uniform variable.
  String toString() => "Uniform1f: ${this.name}";
}

/// The uniform variable for two floats.
class Uniform2f extends Uniform {

  /// Creates a new two float uniform variable.
  Uniform2f._(gl, program, name, loc): super._(gl, program, name, loc);

  /// Sets the two float values of the uniform.
  void setValues(double x, double y) =>
      this._gl.uniform2f(super.loc, x, y);

  /// Gets the list containing two float values.
  List<double> getList() => this.rawValue;

  /// Sets the values with the given list.
  /// The list must contain two values.
  void setList(List<double> values) {
    assert(values.length == 2);
    this.setValues(values[0], values[1]);
  }

  /// Gets the 2D vector with the value of this uniform.
  Math.Vector2 getVector2() => new Math.Vector2.fromList(this.getList());

  /// Sets the uniform with the given 2D vector.
  void setVector2(Math.Vector2 vec) => this.setValues(vec.dx, vec.dy);

  /// Gets the 2D point with the value of this uniform.
  Math.Point2 getPoint2() => new Math.Point2.fromList(this.getList());

  /// Sets the uniform with the given 2D point.
  void setPoint2(Math.Point2 pnt) => this.setValues(pnt.x, pnt.y);

  /// Gets the name for this uniform variable.
  String toString() => "Uniform2f: ${this.name}";
}

/// The uniform variable for three floats.
class Uniform3f extends Uniform {

  /// Creates a new three float uniform variable.
  Uniform3f._(gl, program, name, loc): super._(gl, program, name, loc);

  /// Sets the three float values of the uniform.
  void setValues(double x, double y, double z) =>
      this._gl.uniform3f(super.loc, x, y, z);

  /// Gets the list containing three float values.
  List<double> getList() => this.rawValue;

  /// Sets the values with the given list.
  /// The list must contain three values.
  void setList(List<double> values) {
    assert(values.length == 3);
    this.setValues(values[0], values[1], values[2]);
  }

  /// Gets the 3D vector with the value of this uniform.
  Math.Vector3 getVector3() => new Math.Vector3.fromList(this.getList());

  /// Sets the uniform with the given 3D vector.
  void setVector3(Math.Vector3 vec) => this.setValues(vec.dx, vec.dy, vec.dz);

  /// Gets the 3D point with the value of this uniform.
  Math.Point3 getPoint3() => new Math.Point3.fromList(this.getList());

  /// Sets the uniform with the given 3D point.
  void setPoint3(Math.Point3 pnt) => this.setValues(pnt.x, pnt.y, pnt.z);

  /// Gets the RGB color with the value of this uniform.
  Math.Color3 getColor3() => new Math.Color3.fromList(this.getList());

  /// Sets the uniform with the given RGB color.
  void setColor3(Math.Color3 clr) => this.setValues(clr.red, clr.green, clr.blue);

  /// Gets the name for this uniform variable.
  String toString() => "Uniform3f: ${this.name}";
}

/// The uniform variable for four floats.
class Uniform4f extends Uniform {

  /// Creates a new four float uniform variable.
  Uniform4f._(gl, program, name, loc): super._(gl, program, name, loc);

  /// Sets the four float values of the uniform.
  void setValues(double x, double y, double z, double w) =>
      this._gl.uniform4f(super.loc, x, y, z, w);

  /// Gets the list containing four float values.
  List<double> getList() => this.rawValue;

  /// Sets the values with the given list.
  /// The list must contain four values.
  void setList(List<double> values) {
    assert(values.length == 4);
    this.setValues(values[0], values[1], values[2], values[3]);
  }

  /// Gets the 4D vector with the value of this uniform.
  Math.Vector4 getVector4() => new Math.Vector4.fromList(this.getList());

  /// Sets the uniform with the given 4D vector.
  void setVector4(Math.Vector4 vec) => this.setValues(vec.dx, vec.dy, vec.dz, vec.dw);

  /// Gets the 4D point with the value of this uniform.
  Math.Point4 getPoint4() => new Math.Point4.fromList(this.getList());

  /// Sets the uniform with the given 4D point.
  void setPoint4(Math.Point4 pnt) => this.setValues(pnt.x, pnt.y, pnt.z, pnt.w);

  /// Gets the ARGB color with the value of this uniform.
  Math.Color4 getColor4() => new Math.Color4.fromList(this.getList());

  /// Sets the uniform with the given ARGB color.
  void setColor4(Math.Color4 clr) => this.setValues(clr.red, clr.green, clr.blue, clr.alpha);

  /// Gets the name for this uniform variable.
  String toString() => "Uniform4f: ${this.name}";
}

//=======================================================================

/// The uniform variable for a 2x2 matrix.
class UniformMat2 extends Uniform {

  /// Creates a new 2x2 matrix uniform variable.
  UniformMat2._(gl, program, name, loc): super._(gl, program, name, loc);

  /// Sets the 2x2 matrix of the uniform.
  void setValues(double m11, double m21,
                 double m12, double m22) {
    this.setList([m11, m21,
                  m12, m22]);
  }

  /// Gets the list containing four float values.
  List<double> getList() => this.rawValue;

  /// Sets the matrix with the given list.
  /// The list must contain four values.
  void setList(List<double> values) {
    assert(values.length == 4);
    Typed.Float32List list = new Typed.Float32List.fromList(values);
    this._gl.uniformMatrix2fv(super.loc, false, list);
  }

  /// Gets the 2x2 matrix with the value of this uniform.
  Math.Matrix2 getMatrix2() => new Math.Matrix2.fromList(this.getList(), true);

  /// Sets the uniform with the given 2x2 matrix.
  void setMatrix2(Math.Matrix2 mat) => this.setList(mat.toList(true));

  /// Gets the name for this uniform variable.
  String toString() => "Uniform1Mat2 ${this.name}";
}

/// The uniform variable for a 3x3 matrix.
class UniformMat3 extends Uniform {

  /// Creates a new 3x3 matrix uniform variable.
  UniformMat3._(gl, program, name, loc): super._(gl, program, name, loc);

  /// Sets the 3x3 matrix of the uniform.
  void setValues(double m11, double m21, double m31,
                 double m12, double m22, double m32,
                 double m13, double m23, double m33) {
    this.setList([m11, m21, m31,
                  m12, m22, m32,
                  m13, m23, m33]);
  }

  /// Gets the list containing nine float values.
  List<double> getList() => this.rawValue;

  /// Sets the matrix with the given list.
  /// The list must contain nine values.
  void setList(List<double> values) {
    assert(values.length == 9);
    Typed.Float32List list = new Typed.Float32List.fromList(values);
    this._gl.uniformMatrix3fv(super.loc, false, list);
  }

  /// Gets the 3x3 matrix with the value of this uniform.
  Math.Matrix3 getMatrix3() => new Math.Matrix3.fromList(this.getList(), true);

  /// Sets the uniform with the given 3x3 matrix.
  void setMatrix3(Math.Matrix3 mat) => this.setList(mat.toList(true));

  /// Gets the name for this uniform variable.
  String toString() => "UniformMat3: ${this.name}";
}

/// The uniform variable for a 4x4 matrix.
class UniformMat4 extends Uniform {

  /// Creates a new 4x4 matrix uniform variable.
  UniformMat4._(gl, program, name, loc): super._(gl, program, name, loc);

  /// Sets the 4x4 matrix of the uniform.
  void setValues(double m11, double m21, double m31, double m41,
                 double m12, double m22, double m32, double m42,
                 double m13, double m23, double m33, double m43,
                 double m14, double m24, double m34, double m44) {
    this.setList([m11, m21, m31, m41,
                  m12, m22, m32, m42,
                  m13, m23, m33, m43,
                  m14, m24, m34, m44]);
  }

  /// Gets the list containing sixteen float values.
  List<double> getList() => this.rawValue;

  /// Sets the matrix with the given list.
  /// The list must contain sixteen values.
  void setList(List<double> values) {
    assert(values.length == 16);
    Typed.Float32List list = new Typed.Float32List.fromList(values);
    this._gl.uniformMatrix4fv(super.loc, false, list);
  }

  /// Gets the 4x4 matrix with the value of this uniform.
  Math.Matrix4 getMatrix4() => new Math.Matrix4.fromList(this.getList(), true);

  /// Sets the uniform with the given 4x4 matrix.
  void setMatrix4(Math.Matrix4 mat) => this.setList(mat.toList(true));

  /// Gets the name for this uniform variable.
  String toString() => "UniformMat4: ${this.name}";
}

//=======================================================================

/// The uniform variable for a 2D texture sampler.
class UniformSampler2D extends Uniform {

  /// Creates a new 2D texture uniform variable.
  UniformSampler2D._(gl, program, name, loc): super._(gl, program, name, loc);

  /// Gets the sampler index of this uniform.
  List<double> getIndex() => this.rawValue;

  /// Sets the sampler index to this uniform.
  void setIndex(int index) {
    this._gl.uniform1i(this.loc, index);
  }

  /// Sets the uniform with the given texture 2D.
  void setTexture2D(Textures.Texture2D tex2D) {
    if ((tex2D == null) || !tex2D.loaded) this.setIndex(0);
    else this.setIndex(tex2D.index);
  }

  /// Gets the name for this uniform variable.
  String toString() => "UniformSampler2D: ${this.name}";
}

/// The uniform variable for a cube texture sampler.
class UniformSamplerCube extends Uniform {

  /// Creates a new cube texture uniform variable.
  UniformSamplerCube._(gl, program, name, loc): super._(gl, program, name, loc);

  /// Gets the sampler index of this uniform.
  List<double> getIndex() => this.rawValue;

  /// Sets the sampler index to this uniform.
  void setIndex(int index) {
    this._gl.uniform1i(this.loc, index);
  }

  /// Sets the uniform with the given texture cube.
  void setTextureCube(Textures.TextureCube texCube)  {
    if ((texCube == null) || !texCube.loaded) this.setIndex(0);
    else this.setIndex(texCube.index);
  }

  /// Gets the name for this uniform variable.
  String toString() => "UniformSamplerCube: ${this.name}";
}
