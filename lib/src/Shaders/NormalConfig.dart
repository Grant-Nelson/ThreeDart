part of ThreeDart.Shaders;

/// The shader configuration for rendering solid color light.
class NormalConfig {

  ColorSourceType _bumpy;
  bool _binm;
  bool _txt2D;
  bool _txtCube;
  String _name;
  Data.VertexType _vertexType;

  NormalConfig(ColorSourceType this._bumpy) {
    this._binm = (this._bumpy != ColorSourceType.None);
    this._txt2D = (this._bumpy == ColorSourceType.Texture2D);
    this._txtCube = (this._bumpy == ColorSourceType.TextureCube);
    this._name = this._createShaderName();
    this._vertexType = this._createVertexType();
  }

  String _createShaderName() {
    switch (this._bumpy) {
      case ColorSourceType.None:
        return "Normal_0";
      case ColorSourceType.Solid:
        return "Normal_1";
      case ColorSourceType.Texture2D:
        return "Normal_2";
      case ColorSourceType.TextureCube:
        return "Normal_3";
    }
  }

  Data.VertexType _createVertexType() {
    Data.VertexType vertexType = Data.VertexType.Pos | Data.VertexType.Norm;
    if (this._binm) vertexType |= Data.VertexType.Binm;
    if (this._txt2D) vertexType |= Data.VertexType.Txt2D;
    if (this._txtCube) vertexType |= Data.VertexType.TxtCube;
    return vertexType;
  }

  ColorSourceType get bumpy => this._bumpy;
  bool get binm => this._binm;
  bool get txt2D => this._txt2D;
  bool get txtCube => this._txtCube;
  String get name => this._name;
  Data.VertexType get vertexType => this._vertexType;

  // Creates the vertex source code for the material light shader for the given configurations.
  String createVertexSource() {
    StringBuffer buf = new StringBuffer();
    buf.writeln("uniform mat4 viewObjMat;");
    buf.writeln("uniform mat4 projViewObjMat;");
    if (this._txt2D)   buf.writeln("uniform mat3 txt2DMat;");
    if (this._txtCube) buf.writeln("uniform mat4 txtCubeMat;");
    buf.writeln("");

    buf.writeln("attribute vec3 posAttr;");
    buf.writeln("attribute vec3 normAttr;");
    if (this._binm)    buf.writeln("attribute vec3 binmAttr;");
    if (this._txt2D)   buf.writeln("attribute vec2 txt2DAttr;");
    if (this._txtCube) buf.writeln("attribute vec3 txtCubeAttr;");
    buf.writeln("");

    buf.writeln("varying vec3 normalVec;");
    if (this._binm)    buf.writeln("varying vec3 binormalVec;");
    if (this._txt2D)   buf.writeln("varying vec2 txt2D;");
    if (this._txtCube) buf.writeln("varying vec3 txtCube;");
    buf.writeln("");

    buf.writeln("void main()");
    buf.writeln("{");
    buf.writeln("   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;");
    if (this._binm)    buf.writeln("   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;");
    if (this._txt2D)   buf.writeln("   txt2D = (txt2DMat*vec3(txt2DAttr, 1.0)).xy;");
    if (this._txtCube) buf.writeln("   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;");
    buf.writeln("   gl_Position = projViewObjMat*vec4(posAttr, 1.0);");
    buf.writeln("}");
    return buf.toString();
  }

  // Creates the fragmant source code for the material light shader for the given configurations.
  String createFragmentSource() {
    StringBuffer buf = new StringBuffer();
    buf.writeln("precision mediump float;");
    buf.writeln("");

    buf.writeln("varying vec3 normalVec;");
    if (this._binm)    buf.writeln("varying vec3 binormalVec;");
    if (this._txt2D)   buf.writeln("varying vec2 txt2D;");
    if (this._txtCube) buf.writeln("varying vec3 txtCube;");
    buf.writeln("");

    switch (this._bumpy) {
      case ColorSourceType.None: break;
      case ColorSourceType.Solid: break;
      case ColorSourceType.Texture2D:
        buf.writeln("uniform sampler2D bumpTxt;");
        buf.writeln("uniform int nullBumpTxt;");
        break;
      case ColorSourceType.TextureCube:
        buf.writeln("uniform samplerCube bumpTxt;");
        buf.writeln("uniform int nullBumpTxt;");
        break;
    }
    buf.writeln("");

    buf.writeln("vec3 normal()");
    buf.writeln("{");
    if ((this._bumpy == ColorSourceType.None) ||
        (this._bumpy == ColorSourceType.Solid)) {
      buf.writeln("   return normalize(normalVec);");
    } else {
      buf.writeln("   if(nullBumpTxt > 0) return normalVec;");
      if (this._bumpy == ColorSourceType.Texture2D) {
        buf.writeln("   vec3 color = texture2D(bumpTxt, txt2D).rgb;");
      } else { // ColorSourceType.TextureCube
        buf.writeln("   vec3 color = textureCube(bumpTxt, txtCube).rgb;");
      }
      buf.writeln("   vec3 n = normalize(normalVec);");
      buf.writeln("   vec3 b = normalize(binormalVec);");
      buf.writeln("   vec3 c = normalize(cross(b, n));");
      buf.writeln("   b = cross(n, c);");
      buf.writeln("   mat3 mat = mat3( b.x,  b.y,  b.z,");
      buf.writeln("                   -c.x, -c.y, -c.z,");
      buf.writeln("                    n.x,  n.y,  n.z);");
      buf.writeln("   return mat * normalize(2.0*color - 1.0);");
    }

    buf.writeln("}");
    buf.writeln("");

    buf.writeln("void main()");
    buf.writeln("{");
    buf.writeln("   vec3 norm = normal();");
    buf.writeln("   norm = -norm*0.5 + 0.5;");
    buf.writeln("   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);");
    buf.writeln("}");
    return buf.toString();
  }

  /// Gets the name for the configuration.
  String toString() => this.name;
}
