part of ThreeDart.Shaders;

abstract class Uniform {
  final WebGL.RenderingContext _gl;
  final WebGL.Program _program;
  final String name;
  final WebGL.UniformLocation loc;

  Uniform(this._gl, this._program, this.name, this.loc);

  dynamic get rawValue =>
    this._gl.getUniform(this._program, this.loc);
}

class UniformContainer {
  List<Uniform> _uniforms;

  UniformContainer(List<Uniform> this._uniforms);

  int get count =>
    this._uniforms.length;

  Uniform at(int i) =>
      this._uniforms[i];

  Uniform operator [](String name) {
    for (Uniform uniform in this._uniforms) {
        if(uniform.name == name) return uniform;
    }
    return null;
  }

  int indexOf(String name) {
      for (int i = this._uniforms.length - 1; i >= 0; --i) {
          if (this._uniforms[i].name == name) return i;
      }
      return -1;
  }

  bool contains(String name) {
    for (Uniform uniform in this._uniforms) {
        if(uniform.name == name) return true;
    }
    return false;
  }
}

//=======================================================================

class Uniform1i extends Uniform {
  Uniform1i(gl, program, name, loc): super(gl, program, name, loc);

  int getValue() {
    List<int> list = this.getList();
    assert(list.length == 1);
    return list[0];
  }
  void setValue(int value) => this._gl.uniform1i(super.loc, value);

  List<int> getList() => this.rawValue;
  setList(List<int> values) {
    assert(values.length == 1);
    this.setValue(values[0]);
  }
}

class Uniform2i extends Uniform {
  Uniform2i(gl, program, name, loc): super(gl, program, name, loc);

  void setValues(int x, int y) =>
      this._gl.uniform2i(super.loc, x, y);

  List<int> getList() => this.rawValue;
  void setList(List<int> values) {
    assert(values.length == 2);
    this.setValues(values[0], values[1]);
  }
}

class Uniform3i extends Uniform {
    Uniform3i(gl, program, name, loc): super(gl, program, name, loc);

    void setValues(int x, int y, int z) =>
        this._gl.uniform3i(super.loc, x, y, z);

    List<int> getList() => this.rawValue;
    void setList(List<int> values) {
      assert(values.length == 3);
      this.setValues(values[0], values[1], values[2]);
    }
}

class Uniform4i extends Uniform {
    Uniform4i(gl, program, name, loc): super(gl, program, name, loc);

    void setValues(int x, int y, int z, int w) =>
        this._gl.uniform4i(super.loc, x, y, z, w);

    List<int> getList() => this.rawValue;
    void setList(List<int> values) {
      assert(values.length == 4);
      this.setValues(values[0], values[1], values[2], values[3]);
    }
}

//=======================================================================

class Uniform1f extends Uniform {
    Uniform1f(gl, program, name, loc): super(gl, program, name, loc);

    double getValue() {
      List<double> list = this.getList();
      assert(list.length == 1);
      return list[0];
    }
    void setValue(double value) => this._gl.uniform1f(super.loc, value);

    List<double> getList() => this.rawValue;
    setList(List<double> values) {
      assert(values.length == 1);
      this.setValue(values[0]);
    }
}

class Uniform2f extends Uniform {
    Uniform2f(gl, program, name, loc): super(gl, program, name, loc);

    void setValues(double x, double y) =>
        this._gl.uniform2f(super.loc, x, y);

    List<double> getList() => this.rawValue;
    void setList(List<double> values) {
      assert(values.length == 2);
      this.setValues(values[0], values[1]);
    }

    Math.Vector2 getVector2() => new Math.Vector2.fromList(this.getList());
    void setVector2(Math.Vector2 vec) => this.setValues(vec.dx, vec.dy);

    Math.Point2 getPoint2() => new Math.Point2.fromList(this.getList());
    void setPoint2(Math.Point2 pnt) => this.setValues(pnt.x, pnt.y);
}

class Uniform3f extends Uniform {
    Uniform3f(gl, program, name, loc): super(gl, program, name, loc);

    void setValues(double x, double y, double z) =>
        this._gl.uniform3f(super.loc, x, y, z);

    List<double> getList() => this.rawValue;
    void setList(List<double> values) {
      assert(values.length == 3);
      this.setValues(values[0], values[1], values[2]);
    }

    Math.Vector3 getVector3() => new Math.Vector3.fromList(this.getList());
    void setVector3(Math.Vector3 vec) => this.setValues(vec.dx, vec.dy, vec.dz);

    Math.Point3 getPoint3() => new Math.Point3.fromList(this.getList());
    void setPoint3(Math.Point3 pnt) => this.setValues(pnt.x, pnt.y, pnt.z);

    Math.Color3 getColor3() => new Math.Color3.fromList(this.getList());
    void setColor3(Math.Color3 clr) => this.setValues(clr.red, clr.green, clr.blue);
}

class Uniform4f extends Uniform {
    Uniform4f(gl, program, name, loc): super(gl, program, name, loc);

    void setValues(double x, double y, double z, double w) =>
        this._gl.uniform4f(super.loc, x, y, z, w);

    List<double> getList() => this.rawValue;
    void setList(List<double> values) {
      assert(values.length == 4);
      this.setValues(values[0], values[1], values[2], values[3]);
    }

    Math.Vector4 getVector4() => new Math.Vector4.fromList(this.getList());
    void setVector4(Math.Vector4 vec) => this.setValues(vec.dx, vec.dy, vec.dz, vec.dw);

    Math.Point4 getPoint4() => new Math.Point4.fromList(this.getList());
    void setPoint4(Math.Point4 pnt) => this.setValues(pnt.x, pnt.y, pnt.z, pnt.w);

    Math.Color4 getColor4() => new Math.Color4.fromList(this.getList());
    void setColor4(Math.Color4 clr) => this.setValues(clr.red, clr.green, clr.blue, clr.alpha);
}

//=======================================================================

class UniformMat2 extends Uniform {
  UniformMat2(gl, program, name, loc): super(gl, program, name, loc);

    void setValues(double m11, double m21,
                   double m12, double m22) {
      this.setList([m11, m21,
                    m12, m22]);
    }

    List<double> getList() => this.rawValue;
    void setList(List<double> values) {
      assert(values.length == 4);
      Typed.Float32List list = new Typed.Float32List.fromList(values);
      this._gl.uniformMatrix2fv(super.loc, false, list);
    }

    Math.Matrix2 getMatrix2() => new Math.Matrix2.fromList(this.getList());
    void setMatrix2(Math.Matrix2 mat) => this.setList(mat.toList());
}

class UniformMat3 extends Uniform {
  UniformMat3(gl, program, name, loc): super(gl, program, name, loc);

    void setValues(double m11, double m21, double m31,
                   double m12, double m22, double m32,
                   double m13, double m23, double m33) {
      this.setList([m11, m21, m31,
                    m12, m22, m32,
                    m13, m23, m33]);
    }

    List<double> getList() => this.rawValue;
    void setList(List<double> values) {
      assert(values.length == 9);
      Typed.Float32List list = new Typed.Float32List.fromList(values);
      this._gl.uniformMatrix3fv(super.loc, false, list);
    }

    Math.Matrix3 getMatrix3() => new Math.Matrix3.fromList(this.getList());
    void setMatrix3(Math.Matrix3 mat) => this.setList(mat.toList());
}

class UniformMat4 extends Uniform {
  UniformMat4(gl, program, name, loc): super(gl, program, name, loc);

    void setValues(double m11, double m21, double m31, double m41,
                   double m12, double m22, double m32, double m42,
                   double m13, double m23, double m33, double m43,
                   double m14, double m24, double m34, double m44) {
      this.setList([m11, m21, m31, m41,
                    m12, m22, m32, m42,
                    m13, m23, m33, m43,
                    m14, m24, m34, m44]);
    }

    List<double> getList() => this.rawValue;
    void setList(List<double> values) {
      assert(values.length == 16);
      Typed.Float32List list = new Typed.Float32List.fromList(values);
      this._gl.uniformMatrix4fv(super.loc, false, list);
    }

    Math.Matrix4 getMatrix4() => new Math.Matrix4.fromList(this.getList());
    void setMatrix4(Math.Matrix4 mat) => this.setList(mat.toList());
}

//=======================================================================

class UniformSampler2D extends Uniform {
  UniformSampler2D(gl, program, name, loc): super(gl, program, name, loc);

    List<double> getIndex() => this.rawValue;
    void setIndex(int index) {
      this._gl.uniform1i(this.loc, index);
    }

    void setTexture2D(Data.Texture2D tex2D) => this.setIndex(tex2D.index);
}

class UniformSamplerCube extends Uniform {
  UniformSamplerCube(gl, program, name, loc): super(gl, program, name, loc);

    List<double> getIndex() => this.rawValue;
    void setIndex(int index) {
      this._gl.uniform1i(this.loc, index);
    }

    void setTextureCube(Data.TextureCube texCube) => this.setIndex(texCube.index);
}
