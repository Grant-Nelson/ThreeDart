part of ThreeDart.Shaders;

/// The shader configuration for rendering solid color light.
class NormalConfig {

  /// The normal distortion color source type.
  final ColorSourceType bumpy;

  /// Indicates the binormal vector is needed by the fragment shader.
  final bool binm;

  /// Indicates the 2D texture coordinate is needed by the fragment shader.
  final bool txt2D;

  /// Indicates the cube texture coordinate is needed by the fragment shader.
  final bool txtCube;

  /// The name of this shader configuration.
  final String name;

  /// The vertex type required from shapes to be drawn using this shader.
  final Data.VertexType vertexType;

  /// Creates a new normal configuration with all final values
  /// calculated by the other NormalConfig constructor.
  NormalConfig._(ColorSourceType this.bumpy,
    bool this.binm, bool this.txt2D,
    bool this.txtCube, String this.name,
    Data.VertexType this.vertexType);

  /// Creates a new normal configuration.
  /// The configuration for the normal shader.
  factory NormalConfig(ColorSourceType bumpy) {
    bool binm = (bumpy != ColorSourceType.None);
    bool txt2D = (bumpy == ColorSourceType.Texture2D);
    bool txtCube = (bumpy == ColorSourceType.TextureCube);

    String name = "Normal_${stringForComponentType(bumpy)}";

    Data.VertexType vertexType = Data.VertexType.Pos | Data.VertexType.Norm;
    if (binm) vertexType |= Data.VertexType.Binm;
    if (txt2D) vertexType |= Data.VertexType.Txt2D;
    if (txtCube) vertexType |= Data.VertexType.TxtCube;

    return new NormalConfig._(bumpy, binm, txt2D, txtCube, name, vertexType);
  }

  /// Creates the vertex source code for the material light shader for the given configurations.
  String createVertexSource() {
    StringBuffer buf = new StringBuffer();
    buf.writeln("uniform mat4 viewObjMat;");
    buf.writeln("uniform mat4 projViewObjMat;");
    if (this.txt2D)   buf.writeln("uniform mat3 txt2DMat;");
    if (this.txtCube) buf.writeln("uniform mat4 txtCubeMat;");
    buf.writeln("");

    buf.writeln("attribute vec3 posAttr;");
    buf.writeln("attribute vec3 normAttr;");
    if (this.binm)    buf.writeln("attribute vec3 binmAttr;");
    if (this.txt2D)   buf.writeln("attribute vec2 txt2DAttr;");
    if (this.txtCube) buf.writeln("attribute vec3 txtCubeAttr;");
    buf.writeln("");

    buf.writeln("varying vec3 normalVec;");
    if (this.binm)    buf.writeln("varying vec3 binormalVec;");
    if (this.txt2D)   buf.writeln("varying vec2 txt2D;");
    if (this.txtCube) buf.writeln("varying vec3 txtCube;");
    buf.writeln("");

    buf.writeln("void main()");
    buf.writeln("{");
    buf.writeln("   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;");
    if (this.binm)    buf.writeln("   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;");
    if (this.txt2D)   buf.writeln("   txt2D = (txt2DMat*vec3(txt2DAttr, 1.0)).xy;");
    if (this.txtCube) buf.writeln("   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;");
    buf.writeln("   gl_Position = projViewObjMat*vec4(posAttr, 1.0);");
    buf.writeln("}");
    return buf.toString();
  }

  /// Creates the fragmant source code for the material light shader for the given configurations.
  String createFragmentSource() {
    StringBuffer buf = new StringBuffer();
    buf.writeln("precision mediump float;");
    buf.writeln("");

    buf.writeln("varying vec3 normalVec;");
    if (this.binm)    buf.writeln("varying vec3 binormalVec;");
    if (this.txt2D)   buf.writeln("varying vec2 txt2D;");
    if (this.txtCube) buf.writeln("varying vec3 txtCube;");
    buf.writeln("");

    switch (this.bumpy) {
      case ColorSourceType.None: break;
      case ColorSourceType.Solid: break;
      case ColorSourceType.Texture2D:
        buf.writeln("uniform sampler2D bumpTxt;");
        break;
      case ColorSourceType.TextureCube:
        buf.writeln("uniform samplerCube bumpTxt;");
        break;
    }
    buf.writeln("");

    buf.writeln("vec3 normal()");
    buf.writeln("{");
    if ((this.bumpy == ColorSourceType.None) ||
        (this.bumpy == ColorSourceType.Solid)) {
      buf.writeln("   return normalize(normalVec);");
    } else {
      if (this.bumpy == ColorSourceType.Texture2D) {
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
