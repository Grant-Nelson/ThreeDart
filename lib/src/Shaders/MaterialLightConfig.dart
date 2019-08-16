part of ThreeDart.Shaders;

/// The shader configuration for rendering solid color light.
class MaterialLightConfig {

  /// The emission color source type.
  final ColorSourceType emission;

  /// The ambient color source type.
  final ColorSourceType ambient;

  /// The diffuse color source type.
  final ColorSourceType diffuse;

  /// The inverse diffuse color source type.
  final ColorSourceType invDiffuse;

  /// The specular color source type.
  final ColorSourceType specular;

  /// The bumpy color source type.
  final ColorSourceType bumpy;

  /// The reflection color source type.
  final ColorSourceType reflection;

  /// The refraction color source type.
  final ColorSourceType refraction;

  /// The alpha color source type.
  final ColorSourceType alpha;

  /// The number of allowed directional lights.
  final int dirLight;

  /// The number of allowed point lights.
  final int pointLight;

  /// The number of allowed spot lights.
  final int spotLight;

  /// The number of allowed textured directional lights.
  final int txtDirLight;

  /// The number of allowed textured point lights.
  final int txtPointLight;

  /// The number of allowed textured spot lights.
  final int txtSpotLight;

  /// The total number of any type of light.
  final int totalLights;

  /// Indicates there is either reflection or refration
  /// meaning that an enviromental map is needed for this shader.
  final bool enviromental;

  /// Indicates the inverse view matrix is needed for this shader.
  final bool invViewMat;

  /// Indicates the object matrix is needed for this shader.
  final bool objMat;

  /// Indicates the view object matrix is needed for this shader.
  final bool viewObjMat;

  /// Indicates the projection view object matrix is needed for this shader.
  final bool projViewObjMat;

  /// Indicates the view matrix is needed for this shader.
  final bool viewMat;

  /// Indicates the projection view matrix is needed for this shader.
  final bool projViewMat;

  /// Indicates the ambient, diffuse, inverse diffuse, or specular
  /// material compenent is used meaning lighting is needed for this shader.
  /// If lighting is needed but no lights are provided a default light is used.
  final bool lights;

  /// Indicates the object's position is needed by the fragment shader.
  final bool objPos;

  /// Indicates the camera's position is needed by the fragment shader.
  final bool viewPos;

  /// Indicates the normal vector is needed by the fragment shader.
  final bool norm;

  /// Indicates the binormal vector is needed by the fragment shader.
  final bool binm;

  /// Indicates the 2D texture coordinate is needed by the fragment shader.
  final bool txt2D;

  /// Indicates the cube texture coordinate is needed by the fragment shader.
  final bool txtCube;

  /// Indicates the bending is needed by the vertex shader.
  final bool bending;

  /// Indicates the 2D texture matrix is needed by the vertex shader.
  final bool txt2DMat;

  /// Indicates the cube texture matrix is needed by the vertex shader.
  final bool txtCubeMat;

  /// Indicates the color matrix is needed by the fragment shader.
  final bool colorMat;

  /// Indicates that fog is enabled.
  final bool fog;

  /// The total number of bend matrices allowed by this shader.
  final int bendMats;

  /// The name of this shader configuration.
  final String name;

  /// The vertex type required from shapes to be drawn using this shader.
  final Data.VertexType vertexType;

  /// Creates a new material light configuration with all final values
  /// calculated by the other MaterialLightConfig constructor.
  MaterialLightConfig._(
    ColorSourceType this.emission, ColorSourceType this.ambient,
    ColorSourceType this.diffuse, ColorSourceType this.invDiffuse,
    ColorSourceType this.specular, ColorSourceType this.bumpy,
    ColorSourceType this.reflection, ColorSourceType this.refraction,
    ColorSourceType this.alpha,
    int this.dirLight, int this.pointLight, int this.spotLight,
    int this.txtDirLight, int this.txtPointLight, int this.txtSpotLight,
    int this.totalLights,
    bool this.enviromental, bool this.invViewMat,
    bool this.objMat, bool this.viewObjMat, bool this.projViewObjMat,
    bool this.viewMat, bool this.projViewMat,
    bool this.lights, bool this.objPos,
    bool this.viewPos, bool this.norm, bool this.binm,
    bool this.txt2D, bool this.txtCube, bool this.bending,
    bool this.txt2DMat, bool this.txtCubeMat,
    bool this.colorMat, bool this.fog, int this.bendMats,
    String this.name, Data.VertexType this.vertexType);

  /// Creates a new material light configuration.
  /// The configuration for the material light shader.
  factory MaterialLightConfig(
    bool txt2DMat, bool txtCubeMat, bool colorMat,
    bool fog, int bendMats, ColorSourceType emission,
    ColorSourceType ambient, ColorSourceType diffuse,
    ColorSourceType invDiffuse, ColorSourceType specular,
    ColorSourceType bumpy, ColorSourceType reflection,
    ColorSourceType refraction, ColorSourceType alpha,
    int dirLight, int pointLight, int spotLight,
    int txtDirLight, int txtPointLight, int txtSpotLight) {

    StringBuffer buf = new StringBuffer();
    buf.write("MaterialLight_");
    buf.write(emission.toString());
    buf.write(ambient.toString());
    buf.write(diffuse.toString());
    buf.write(invDiffuse.toString());
    buf.write(specular.toString());
    buf.write(bumpy.toString());
    buf.write(reflection.toString());
    buf.write(refraction.toString());
    buf.write(alpha.toString());
    buf.write("_");
    buf.write(txt2DMat?   "1": "0");
    buf.write(txtCubeMat? "1": "0");
    buf.write(colorMat?   "1": "0");
    buf.write(fog?        "1": "0");
    buf.write("_");
    buf.write(bendMats);
    buf.write("_");
    buf.write(dirLight);
    buf.write("_");
    buf.write(pointLight);
    buf.write("_");
    buf.write(spotLight);
    buf.write("_");
    buf.write(txtDirLight);
    buf.write("_");
    buf.write(txtPointLight);
    buf.write("_");
    buf.write(txtSpotLight);
    String name = buf.toString();

    int totalLights = dirLight + pointLight + spotLight +
                      txtDirLight + txtPointLight + txtSpotLight;
    bool enviromental = reflection.hasAny || refraction.hasAny;
    bool invViewMat = enviromental;
    bool lights = ambient.hasAny || diffuse.hasAny ||
                  invDiffuse.hasAny || specular.hasAny;
    bool viewPos = (specular.hasAny) ||
                   ((pointLight + txtPointLight) > 0) ||
                    enviromental;
    bool norm = diffuse.hasAny || invDiffuse.hasAny || specular.hasAny ||
                bumpy.hasAny || enviromental;
    bool binm = bumpy.hasAny;
    bool txt2D = emission.hasTxt2D || ambient.hasTxt2D || diffuse.hasTxt2D ||
                 invDiffuse.hasTxt2D || specular.hasTxt2D || bumpy.hasTxt2D ||
                 reflection.hasTxt2D || refraction.hasTxt2D || alpha.hasTxt2D;
    bool txtCube = emission.hasTxtCube || ambient.hasTxtCube ||
                   diffuse.hasTxtCube || invDiffuse.hasTxtCube ||
                   specular.hasTxtCube || bumpy.hasTxtCube ||
                   reflection.hasTxtCube || refraction.hasTxtCube ||
                   alpha.hasTxtCube;
    bool hasLight = (pointLight + txtPointLight + txtDirLight +
                     spotLight + txtSpotLight) > 0;
    bool objPos  = hasLight || fog;
    bool bending = bendMats > 0;
    bool objMat  = objPos;
    bool viewObjMat = norm || binm || viewPos || fog;
    bool viewMat        = false;
    bool projViewObjMat = true;
    bool projViewMat    = false;
    txt2DMat   = txt2DMat   && txt2D;
    txtCubeMat = txtCubeMat && txtCube;

    Data.VertexType vertexType = Data.VertexType.Pos;
    if (norm)    vertexType |= Data.VertexType.Norm;
    if (binm)    vertexType |= Data.VertexType.Binm;
    if (txt2D)   vertexType |= Data.VertexType.Txt2D;
    if (txtCube) vertexType |= Data.VertexType.TxtCube;
    if (bending) vertexType |= Data.VertexType.Bending;

    return new MaterialLightConfig._(emission, ambient,
      diffuse, invDiffuse, specular, bumpy, reflection, refraction,
      alpha, dirLight, pointLight, spotLight, txtDirLight,
      txtPointLight, txtSpotLight, totalLights, enviromental,
      invViewMat, objMat, viewObjMat, projViewObjMat,
      viewMat, projViewMat, lights, objPos, viewPos,
      norm, binm, txt2D, txtCube, bending, txt2DMat, txtCubeMat,
      colorMat, fog, bendMats, name, vertexType);
  }

  //=====================================================================

  /// Writes variables for the vertex shader [buf].
  void _writeVariables(StringBuffer buf) {
    if (this.objMat)     buf.writeln("uniform mat4 objMat;");
    if (this.viewObjMat) buf.writeln("uniform mat4 viewObjMat;");
    buf.writeln("uniform mat4 projViewObjMat;");
    buf.writeln("");
    buf.writeln("attribute vec3 posAttr;");
    if (this.norm) buf.writeln("attribute vec3 normAttr;");
    if (this.binm) buf.writeln("attribute vec3 binmAttr;");
    buf.writeln("");
  }

  /// Writes vertex bending method for the vertex shader [buf].
  void _writeBendSetup(StringBuffer buf) {
    if (!this.bending) return;
    buf.writeln("struct BendingValue");
    buf.writeln("{");
    buf.writeln("   mat4 mat;");
    buf.writeln("};");
    buf.writeln("uniform int bendMatCount;");
    buf.writeln("uniform BendingValue bendValues[${this.bendMats}];");
    buf.writeln("attribute vec4 bendAttr;");
    buf.writeln("");
    buf.writeln("float weightSum;");
    buf.writeln("vec3 bendPos;");
    if (this.norm) buf.writeln("vec3 bendNorm;");
    if (this.binm) buf.writeln("vec3 bendBinm;");
    buf.writeln("");
    buf.writeln("void adjustBend(float bendVal)");
    buf.writeln("{");
    buf.writeln("   if(bendVal >= 0.0)");
    buf.writeln("   {");
    buf.writeln("      int index = int(floor((bendVal + 0.5)*0.5));");
    buf.writeln("      if(index < bendMatCount)");
    buf.writeln("      {");
    buf.writeln("         float weight = clamp(bendVal - float(index)*2.0, 0.0, 1.0);");
    buf.writeln("         mat4 m = bendValues[index].mat;");
    buf.writeln("         weightSum += weight;");
    buf.writeln("         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;");
    if (this.norm) buf.writeln("         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;");
    if (this.binm) buf.writeln("         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;");
    buf.writeln("      }");
    buf.writeln("   }");
    buf.writeln("}");
    buf.writeln("");
    buf.writeln("void setupBendData()");
    buf.writeln("{");
    buf.writeln("   bendPos = vec3(0.0, 0.0, 0.0);");
    if (this.norm) buf.writeln("   bendNorm = vec3(0.0, 0.0, 0.0);");
    if (this.binm) buf.writeln("   bendBinm = vec3(0.0, 0.0, 0.0);");
    buf.writeln("   weightSum = 0.0;");
    buf.writeln("   adjustBend(bendAttr.x);");
    buf.writeln("   adjustBend(bendAttr.y);");
    buf.writeln("   adjustBend(bendAttr.z);");
    buf.writeln("   adjustBend(bendAttr.w);");
    buf.writeln("   if(weightSum < 1.0)");
    buf.writeln("   {");
    buf.writeln("      float weight = 1.0 - weightSum;");
    buf.writeln("      bendPos += posAttr*weight;");
    if (this.norm) buf.writeln("      bendNorm += normAttr*weight;");
    if (this.binm) buf.writeln("      bendBinm += binmAttr*weight;");
    buf.writeln("   }");
    buf.writeln("   else");
    buf.writeln("   {");
    buf.writeln("      bendPos = bendPos/weightSum;");
    buf.writeln("   }");
    if (this.norm) buf.writeln("   bendNorm = normalize(bendNorm);");
    if (this.binm) buf.writeln("   bendBinm = normalize(bendBinm);");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes normal coordinates for the vertex shader [buf].
  void _writeNormCoord(StringBuffer buf) {
    if (!this.norm) return;
    buf.writeln("varying vec3 normalVec;");
    buf.writeln("");
    buf.writeln("vec3 getNorm()");
    buf.writeln("{");
    String normAttr = (this.bending)? "bendNorm": "normAttr";
    buf.writeln("   return normalize((viewObjMat*vec4($normAttr, 0.0)).xyz);");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes binormal coordinates for the vertex shader [buf].
  void _writeBinmCoord(StringBuffer buf) {
    if (!this.binm) return;
    buf.writeln("varying vec3 binormalVec;");
    buf.writeln("");
    buf.writeln("vec3 getBinm()");
    buf.writeln("{");
    String binmAttr = (this.bending)? "bendBinm": "binmAttr";
    buf.writeln("   return normalize((viewObjMat*vec4($binmAttr, 0.0)).xyz);");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes texture 2D coordinates for the vertex shader [buf].
  void _writeTxt2DCoord(StringBuffer buf) {
    if (!this.txt2D) return;
    if (this.txt2DMat) buf.writeln("uniform mat3 txt2DMat;");
    buf.writeln("attribute vec2 txt2DAttr;");
    buf.writeln("varying vec2 txt2D;");
    buf.writeln("");
    buf.writeln("vec2 getTxt2D()");
    buf.writeln("{");
    if (this.txt2DMat) buf.writeln("   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;");
    else               buf.writeln("   return txt2DAttr;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes texture Cube coordinates for the vertex shader [buf].
  void _writeTxtCubeCoord(StringBuffer buf) {
    if (!this.txtCube) return;
    if (this.txtCubeMat) buf.writeln("uniform mat4 txtCubeMat;");
    buf.writeln("attribute vec3 txtCubeAttr;");
    buf.writeln("varying vec3 txtCube;");
    buf.writeln("");
    buf.writeln("vec3 getTxtCube()");
    buf.writeln("{");
    if (this.txtCubeMat) buf.writeln("   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;");
    else                 buf.writeln("   return txtCubeAttr;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes object position for the vertex shader [buf].
  void _writeObjPos(StringBuffer buf) {
    if (!this.objPos) return;
    buf.writeln("varying vec3 objPos;");
    buf.writeln("");
    buf.writeln("vec3 getObjPos()");
    buf.writeln("{");
    String posAttr = (this.bending)? "bendPos": "posAttr";
    buf.writeln("   return (objMat*vec4($posAttr, 1.0)).xyz;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes view object position for the vertex shader [buf].
  void _writeViewPos(StringBuffer buf) {
    if (!this.viewPos) return;
    buf.writeln("varying vec3 viewPos;");
    buf.writeln("");
    buf.writeln("vec3 getViewPos()");
    buf.writeln("{");
    String posAttr = (this.bending)? "bendPos": "posAttr";
    buf.writeln("   return (viewObjMat*vec4($posAttr, 1.0)).xyz;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes projected object position for the vertex shader [buf].
  void _writePos(StringBuffer buf) {
    buf.writeln("vec4 getPos()");
    buf.writeln("{");
    String posAttr = (this.bending)? "bendPos": "posAttr";
    buf.writeln("   return projViewObjMat*vec4($posAttr, 1.0);");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the non-bending main method for the vertex shader [buf].
  void _writeMain(StringBuffer buf) {
    buf.writeln("void main()");
    buf.writeln("{");
    if (this.bending) buf.writeln("   setupBendData();");
    if (this.norm)    buf.writeln("   normalVec = getNorm();");
    if (this.binm)    buf.writeln("   binormalVec = getBinm();");
    if (this.txt2D)   buf.writeln("   txt2D = getTxt2D();");
    if (this.txtCube) buf.writeln("   txtCube = getTxtCube();");
    if (this.objPos)  buf.writeln("   objPos = getObjPos();");
    if (this.viewPos) buf.writeln("   viewPos = getViewPos();");
    buf.writeln("   gl_Position = getPos();");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Creates the vertex source code for the material light shader for the given configurations.
  String createVertexSource() {
    StringBuffer buf = new StringBuffer();
    this._writeVariables(buf);
    this._writeBendSetup(buf);
    this._writeNormCoord(buf);
    this._writeBinmCoord(buf);
    this._writeTxt2DCoord(buf);
    this._writeTxtCubeCoord(buf);
    this._writeObjPos(buf);
    this._writeViewPos(buf);
    this._writePos(buf);
    this._writeMain(buf);
    return buf.toString();
  }

  //=====================================================================

  /// Upcases just the first character of the given string.
  String toTitleCase(String name) =>
    name[0].toUpperCase()+name.substring(1);

  /// Writes the typical variables for the given source type
  /// with the given [name] to the fragment shader [buf].
  void _fragmentSrcTypeVars(StringBuffer buf, ColorSourceType srcType, String name) {
    if (srcType.hasSolid)
      buf.writeln("uniform vec3 ${name}Clr;");
    if (srcType.hasTxt2D)
      buf.writeln("uniform sampler2D ${name}Txt;");
    else if (srcType.hasTxtCube)
      buf.writeln("uniform samplerCube ${name}Txt;");
  }

  /// Writes the basics for a color source in a vertex fragment.
  void _writeColorSource(StringBuffer buf, ColorSourceType srcType, String name) {
    this._fragmentSrcTypeVars(buf, srcType, name);
    buf.writeln("");
    buf.writeln("vec3 ${name}Color;");
    buf.writeln("");
    buf.writeln("void set${toTitleCase(name)}Color()");
    buf.writeln("{");
    if (srcType.hasSolid) {
      if (srcType.hasTxt2D)
        buf.writeln("   ${name}Color = ${name}Clr*texture2D(${name}Txt, txt2D).rgb;");
      else if (srcType.hasTxtCube)
        buf.writeln("   ${name}Color = ${name}Clr*textureCube(${name}Txt, txtCube).rgb;");
      else
        buf.writeln("   ${name}Color = ${name}Clr;");
    } else if (srcType.hasTxt2D)
        buf.writeln("   ${name}Color = texture2D(${name}Txt, txt2D).rgb;");
    else if (srcType.hasTxtCube)
        buf.writeln("   ${name}Color = textureCube(${name}Txt, txtCube).rgb;");
    buf.writeln("}");
  }

  /// Writes the emission material component to the fragment shader [buf].
  void _writeEmission(StringBuffer buf) {
    if (this.emission.hasNone) return;
    buf.writeln("// === Emission ===");
    buf.writeln("");    this._fragmentSrcTypeVars(buf, this.emission, "emission");
    buf.writeln("");
    buf.writeln("vec3 emissionColor()");
    buf.writeln("{");
    if (this.emission.hasSolid) {
      if (this.emission.hasTxt2D)
        buf.writeln("   return emissionClr*texture2D(emissionTxt, txt2D).rgb;");
      else if (this.emission.hasTxtCube)
        buf.writeln("   return emissionClr*textureCube(emissionTxt, txtCube).rgb;");
      else
        buf.writeln("   return emissionClr;");
    } else if (this.emission.hasTxt2D)
        buf.writeln("   return texture2D(emissionTxt, txt2D).rgb;");
    else if (this.emission.hasTxtCube)
        buf.writeln("   return textureCube(emissionTxt, txtCube).rgb;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the ambient material component to the fragment shader [buf].
  void _writeAmbient(StringBuffer buf) {
    if (this.ambient.hasNone) return;
    buf.writeln("// === Ambient ===");
    buf.writeln("");
    this._writeColorSource(buf, this.ambient, "ambient");
    buf.writeln("");
  }

  /// Writes the diffuse material component to the fragment shader [buf].
  void _writeDiffuse(StringBuffer buf) {
    if (this.diffuse.hasNone) return;
    buf.writeln("// === Diffuse ===");
    buf.writeln("");
    this._writeColorSource(buf, this.diffuse, "diffuse");
    buf.writeln("");
    buf.writeln("vec3 diffuse(vec3 norm, vec3 litVec)");
    buf.writeln("{");
    buf.writeln("   float scalar = dot(norm, -litVec);");
    buf.writeln("   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);");
    buf.writeln("   return diffuseColor*scalar;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the inverse diffuse material component to the fragment shader [buf].
  void _writeInvDiffuse(StringBuffer buf) {
    if (this.invDiffuse.hasNone) return;
    buf.writeln("// === Inverse Diffuse ===");
    buf.writeln("");
    this._writeColorSource(buf, this.invDiffuse, "invDiffuse");
    buf.writeln("");
    buf.writeln("vec3 invDiffuse(vec3 norm, vec3 litVec)");
    buf.writeln("{");
    buf.writeln("   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);");
    buf.writeln("   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);");
    buf.writeln("   return invDiffuseColor*scalar;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the specular material component to the fragment shader [buf].
  void _writeSpecular(StringBuffer buf) {
    if (this.specular.hasNone) return;
    buf.writeln("// === Specular ===");
    buf.writeln("");
    buf.writeln("uniform float shininess;");
    this._writeColorSource(buf, this.specular, "specular");
    buf.writeln("");
    buf.writeln("vec3 specular(vec3 norm, vec3 litVec)");
    buf.writeln("{");
    buf.writeln("   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);");
    buf.writeln("   vec3 lightRef = normalize(reflect(litVec, norm));");
    buf.writeln("   float scalar = dot(lightRef, -normalize(viewPos));");
    buf.writeln("   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);");
    buf.writeln("   return specularColor*pow(scalar, shininess);");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the normal calculation to the fragment shader [buf].
  void _writeNormal(StringBuffer buf) {
    if (!this.norm) return;
    buf.writeln("// === Normal ===");
    buf.writeln("");
    if (this.bumpy.hasTxt2D) {
      buf.writeln("uniform sampler2D bumpTxt;");
      buf.writeln("");
    } else if (this.bumpy.hasTxtCube) {
      buf.writeln("uniform samplerCube bumpTxt;");
      buf.writeln("");
    }
    buf.writeln("vec3 normal()");
    buf.writeln("{");
    if (this.bumpy.hasNone || this.bumpy.hasSolid) {
        buf.writeln("   return normalize(normalVec);");
    } else {
      if (this.bumpy.hasTxt2D) {
        buf.writeln("   vec3 color = texture2D(bumpTxt, txt2D).rgb;");
      } else { // hasTxtCube
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
  }

  /// Writes the reflection calculation to the fragment shader [buf].
  void _writeReflection(StringBuffer buf) {
    if (this.reflection.hasNone) return;
    buf.writeln("// === Reflection ===");
    buf.writeln("");
    this._fragmentSrcTypeVars(buf, this.reflection, "reflect");
    buf.writeln("");
    buf.writeln("vec3 reflect(vec3 refl)");
    buf.writeln("{");

    if (this.reflection.hasSolid) {
      if (this.reflection.hasTxt2D)
        buf.writeln("   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;");
      else if (this.reflection.hasTxtCube)
        buf.writeln("   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;");
      else
        buf.writeln("   vec3 scalar = reflectClr;");
    } else if (this.reflection.hasTxt2D)
        buf.writeln("   vec3 scalar = texture2D(reflectTxt, txt2D).rgb;");
    else if (this.reflection.hasTxtCube)
        buf.writeln("   vec3 scalar = textureCube(reflectTxt, txtCube).rgb;");

    buf.writeln("   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));");
    buf.writeln("   return scalar*textureCube(envSampler, invRefl).rgb;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the refraction calculation to the fragment shader [buf].
  void _writeRefraction(StringBuffer buf) {
    if (this.refraction.hasNone) return;
    buf.writeln("// === Refraction ===");
    buf.writeln("");
    this._fragmentSrcTypeVars(buf, this.refraction, "refract");
    buf.writeln("uniform float refraction;");
    buf.writeln("");
    buf.writeln("vec3 refract(vec3 refl)");
    buf.writeln("{");

    if (this.refraction.hasSolid) {
      if (this.refraction.hasTxt2D)
        buf.writeln("   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;");
      else if (this.refraction.hasTxtCube)
        buf.writeln("   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;");
      else
        buf.writeln("   vec3 scalar = refractClr;");
    } else if (this.refraction.hasTxt2D)
        buf.writeln("   vec3 scalar = texture2D(refractTxt, txt2D).rgb;");
    else if (this.refraction.hasTxtCube)
        buf.writeln("   vec3 scalar = textureCube(refractTxt, txtCube).rgb;");

    buf.writeln("   vec3 refr = mix(-refl, viewPos, refraction);");
    buf.writeln("   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));");
    buf.writeln("   return scalar*textureCube(envSampler, invRefr).rgb;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the alpha component to the fragment shader [buf].
  void _writeAlpha(StringBuffer buf) {
    buf.writeln("// === Alpha ===");
    buf.writeln("");

    if (this.alpha.hasSolid)
      buf.writeln("uniform float alpha;");
    if (this.alpha.hasTxt2D)
      buf.writeln("uniform sampler2D alphaTxt;");
    if (this.alpha.hasTxtCube)
      buf.writeln("uniform samplerCube alphaTxt;");

    buf.writeln("float alphaValue()");
    buf.writeln("{");

    if (this.alpha.hasNone)
      buf.writeln("   return 1.0;");
    else if (this.alpha.hasTxt2D || this.alpha.hasTxtCube) {
      if (this.alpha.hasSolid) {
        if (this.alpha.hasTxt2D)
          buf.writeln("   float a = alpha*texture2D(alphaTxt, txt2D).a;");
        else if (this.alpha.hasTxtCube)
          buf.writeln("   float a = alpha*textureCube(alphaTxt, txtCube).a;");
      } else if (this.alpha.hasTxt2D)
        buf.writeln("   float a = texture2D(alphaTxt, txt2D).a;");
      else if (this.alpha.hasTxtCube)
        buf.writeln("   float a = textureCube(alphaTxt, txtCube).a;");
      buf.writeln("   if (a <= 0.000001) discard;");
      buf.writeln("   return a;");
    } else if (this.alpha.hasSolid)
      buf.writeln("   return alpha;");

    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the directional lights to the fragment shader [buf].
  void _writeDirLight(StringBuffer buf) {
    if (dirLight <= 0) return;
    buf.writeln("// === Directional Light ===");
    buf.writeln("");
    buf.writeln("struct DirLight");
    buf.writeln("{");
    buf.writeln("   vec3 viewDir;");
    buf.writeln("   vec3 color;");
    buf.writeln("};");
    buf.writeln("");
    buf.writeln("uniform int dirLightCount;");
    buf.writeln("uniform DirLight dirLights[${this.dirLight}];");
    buf.writeln("");
    buf.writeln("vec3 allDirLightValues(vec3 norm)");
    buf.writeln("{");
    buf.writeln("   vec3 lightAccum = vec3(0.0, 0.0, 0.0);");
    buf.writeln("   for(int i = 0; i < ${this.dirLight}; ++i)");
    buf.writeln("   {");
    buf.writeln("      if(i >= dirLightCount) break;");
    buf.writeln("      DirLight lit = dirLights[i];");
    buf.writeln("      lightAccum += lightValue(norm, lit.color, lit.viewDir);");
    buf.writeln("   }");
    buf.writeln("   return lightAccum;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the point lights to the fragment shader [buf].
  void _writePointLight(StringBuffer buf) {
    if (this.pointLight <= 0) return;
    buf.writeln("// === Point Light ===");
    buf.writeln("");
    buf.writeln("struct PointLight");
    buf.writeln("{");
    buf.writeln("   vec3 point;");
    buf.writeln("   vec3 viewPnt;");
    buf.writeln("   vec3 color;");
    buf.writeln("   float att0;");
    buf.writeln("   float att1;");
    buf.writeln("   float att2;");
    buf.writeln("};");
    buf.writeln("");
    buf.writeln("uniform int pntLightCount;");
    buf.writeln("uniform PointLight pntLights[${this.pointLight}];");
    buf.writeln("");
    buf.writeln("vec3 pointLightValue(vec3 norm, PointLight lit)");
    buf.writeln("{");
    buf.writeln("   float dist = length(objPos - lit.point);");
    buf.writeln("   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);");
    buf.writeln("   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);");
    buf.writeln("   return lightValue(norm, lit.color*attenuation, normalize(viewPos - lit.viewPnt));");
    buf.writeln("}");
    buf.writeln("");
    buf.writeln("vec3 allPointLightValues(vec3 norm)");
    buf.writeln("{");
    buf.writeln("   vec3 lightAccum = vec3(0.0, 0.0, 0.0);");
    buf.writeln("   for(int i = 0; i < ${this.pointLight}; ++i)");
    buf.writeln("   {");
    buf.writeln("      if(i >= pntLightCount) break;");
    buf.writeln("      lightAccum += pointLightValue(norm, pntLights[i]);");
    buf.writeln("   }");
    buf.writeln("   return lightAccum;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the spot lights to the fragment shader [buf].
  void _writeSpotLight(StringBuffer buf) {
    if (this.spotLight <= 0) return;
    buf.writeln("// === Spot Light ===");
    buf.writeln("");
    buf.writeln("struct SpotLight");
    buf.writeln("{");
    buf.writeln("   vec3 objPnt;");
    buf.writeln("   vec3 objDir;");
    buf.writeln("   vec3 viewPnt;");
    buf.writeln("   vec3 color;");
    buf.writeln("   float cutoff;");
    buf.writeln("   float coneAngle;");
    buf.writeln("   float att0;");
    buf.writeln("   float att1;");
    buf.writeln("   float att2;");
    buf.writeln("};");
    buf.writeln("");
    buf.writeln("uniform int spotLightCount;");
    buf.writeln("uniform SpotLight spotLights[${this.spotLight}];");
    buf.writeln("");
    buf.writeln("vec3 spotLightValue(vec3 norm, SpotLight lit)");
    buf.writeln("{");
    buf.writeln("   vec3 dir = objPos - lit.objPnt;");
    buf.writeln("   float dist = length(dir);");
    buf.writeln("   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);");
    buf.writeln("   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);");
    buf.writeln("   float angle = acos(dot(normalize(dir), lit.objDir));");
    buf.writeln("   float scale = (lit.cutoff-angle)/(lit.cutoff-lit.coneAngle);");
    buf.writeln("   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);");
    buf.writeln("   if(scale > 1.0) scale = 1.0;");
    buf.writeln("   return lightValue(norm, lit.color*attenuation*scale, normalize(viewPos - lit.viewPnt));");
    buf.writeln("}");
    buf.writeln("");
    buf.writeln("vec3 allSpotLightValues(vec3 norm)");
    buf.writeln("{");
    buf.writeln("   vec3 lightAccum = vec3(0.0, 0.0, 0.0);");
    buf.writeln("   for(int i = 0; i < ${this.spotLight}; ++i)");
    buf.writeln("   {");
    buf.writeln("      if(i >= spotLightCount) break;");
    buf.writeln("      lightAccum += spotLightValue(norm, spotLights[i]);");
    buf.writeln("   }");
    buf.writeln("   return lightAccum;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the texture directional lights to the fragment shader [buf].
  void _writeTxtDirLight(StringBuffer buf) {
    if (this.txtDirLight <= 0) return;
    buf.writeln("// === Texture Directional Light ===");
    buf.writeln("");
    buf.writeln("struct TexturedDirLight");
    buf.writeln("{");
    buf.writeln("   vec3 objUp;");
    buf.writeln("   vec3 objRight;");
    buf.writeln("   vec3 objDir;");
    buf.writeln("   vec3 viewDir;");
    buf.writeln("   vec3 color;");
    buf.writeln("};");
    buf.writeln("");
    buf.writeln("uniform int txtDirLightCount;");
    buf.writeln("uniform TexturedDirLight txtDirLights[${this.txtDirLight}];");
    for (int i = 0; i < this.txtDirLight; i++)
      buf.writeln("uniform sampler2D txtDirLightsTxt2D$i;");
    buf.writeln("");
    buf.writeln("vec3 txtDirLightValue(vec3 norm, TexturedDirLight lit, sampler2D txt2D)");
    buf.writeln("{");
    buf.writeln("   vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);");
    buf.writeln("   float tu = dot(offset, lit.objUp);");
    buf.writeln("   float tv = dot(offset, lit.objRight);");
    buf.writeln("   vec3 color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;");
    buf.writeln("   return lightValue(norm, color, lit.viewDir);");
    buf.writeln("}");
    buf.writeln("");
    buf.writeln("vec3 allTxtDirLightValues(vec3 norm)");
    buf.writeln("{");
    buf.writeln("   vec3 lightAccum = vec3(0.0, 0.0, 0.0);");
    for (int i = 0; i < this.txtDirLight; ++i) {
      buf.writeln("   if(txtDirLightCount <= $i) return lightAccum;");
      buf.writeln("   lightAccum += txtDirLightValue(norm, txtDirLights[$i], txtDirLightsTxt2D$i);");
    }
    buf.writeln("   return lightAccum;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the texture point lights to the fragment shader [buf].
  void _writeTxtPointLight(StringBuffer buf) {
    if (this.txtPointLight <= 0) return;
    buf.writeln("// === Texture Point Light ===");
    buf.writeln("");
    buf.writeln("struct TexturedPointLight");
    buf.writeln("{");
    buf.writeln("   vec3 point;");
    buf.writeln("   vec3 viewPnt;");
    buf.writeln("   mat3 invViewRotMat;");
    buf.writeln("   vec3 color;");
    buf.writeln("   float att0;");
    buf.writeln("   float att1;");
    buf.writeln("   float att2;");
    buf.writeln("};");
    buf.writeln("");
    buf.writeln("uniform int txtPntLightCount;");
    buf.writeln("uniform TexturedPointLight txtPntLights[${this.txtPointLight}];");
    for (int i = 0; i < this.txtPointLight; i++)
      buf.writeln("uniform samplerCube txtPntLightsTxtCube$i;");
    buf.writeln("");
    buf.writeln("vec3 txtPointLightValue(vec3 norm, TexturedPointLight lit, samplerCube txtCube)");
    buf.writeln("{");
    buf.writeln("   float dist = length(objPos - lit.point);");
    buf.writeln("   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);");
    buf.writeln("   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);");
    buf.writeln("   vec3 normDir = normalize(viewPos - lit.viewPnt);");
    buf.writeln("   vec3 invNormDir = lit.invViewRotMat*normDir;");
    buf.writeln("   vec3 color = lit.color*textureCube(txtCube, invNormDir).xyz;");
    buf.writeln("   return lightValue(norm, attenuation*color, normDir);");
    buf.writeln("}");
    buf.writeln("");
    buf.writeln("vec3 allTxtPointLightValues(vec3 norm)");
    buf.writeln("{");
    buf.writeln("   vec3 lightAccum = vec3(0.0, 0.0, 0.0);");
    for (int i = 0; i < this.txtPointLight; ++i) {
      buf.writeln("   if(txtPntLightCount <= $i) return lightAccum;");
      buf.writeln("   lightAccum += txtPointLightValue(norm, txtPntLights[$i], txtPntLightsTxtCube$i);");
    }
    buf.writeln("   return lightAccum;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the texture spot lights to the fragment shader [buf].
  void _writeTxtSpotLight(StringBuffer buf) {
    if (this.txtSpotLight <= 0) return;
    buf.writeln("// === Texture Spot Light ===");
    buf.writeln("");
    buf.writeln("struct TexturedSpotLight");
    buf.writeln("{");
    buf.writeln("   vec3 objPnt;");
    buf.writeln("   vec3 objDir;");
    buf.writeln("   vec3 objUp;");
    buf.writeln("   vec3 objRight;");
    buf.writeln("   vec3 viewPnt;");
    buf.writeln("   vec3 color;");
    buf.writeln("   float tuScalar;");
    buf.writeln("   float tvScalar;");
    buf.writeln("   float att0;");
    buf.writeln("   float att1;");
    buf.writeln("   float att2;");
    buf.writeln("};");
    buf.writeln("");
    buf.writeln("uniform int txtSpotLightCount;");
    buf.writeln("uniform TexturedSpotLight txtSpotLights[${this.txtSpotLight}];");
    for (int i = 0; i < this.txtSpotLight; i++)
      buf.writeln("uniform sampler2D txtSpotLightsTxt2D$i;");
    buf.writeln("");
    buf.writeln("vec3 txtSpotLightValue(vec3 norm, TexturedSpotLight lit, sampler2D txt2D)");
    buf.writeln("{");
    buf.writeln("   vec3 dir = objPos - lit.objPnt;");
    buf.writeln("   float dist = length(dir);");
    buf.writeln("   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);");
    buf.writeln("   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);");
    buf.writeln("   vec3 normDir = normalize(dir);");
    buf.writeln("   float zScale = dot(normDir, lit.objDir);");
    buf.writeln("   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);");
    buf.writeln("   normDir = normDir/zScale;");
    buf.writeln("   float tu = dot(normDir, lit.objUp)*lit.tuScalar+0.5;");
    buf.writeln("   if((tu > 1.0) || (tu < 0.0)) return vec3(0.0, 0.0, 0.0);");
    buf.writeln("   float tv = dot(normDir, lit.objRight)*lit.tvScalar+0.5;");
    buf.writeln("   if((tv > 1.0) || (tv < 0.0)) return vec3(0.0, 0.0, 0.0);");
    buf.writeln("   vec3 color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;");
    buf.writeln("   return lightValue(norm, color*attenuation, normalize(viewPos - lit.viewPnt));");
    buf.writeln("}");
    buf.writeln("");
    buf.writeln("vec3 allTxtSpotLightValues(vec3 norm)");
    buf.writeln("{");
    buf.writeln("   vec3 lightAccum = vec3(0.0, 0.0, 0.0);");
    for (int i = 0; i < this.txtSpotLight; ++i) {
      buf.writeln("   if(txtSpotLightCount <= $i) return lightAccum;");
      buf.writeln("   lightAccum += txtSpotLightValue(norm, txtSpotLights[$i], txtSpotLightsTxt2D$i);");
    }
    buf.writeln("   return lightAccum;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the no lights code to the fragment shader [buf].
  void _writeNoLight(StringBuffer buf) {
    if (this.totalLights > 0) return;
    buf.writeln("// === No Lights ===");
    buf.writeln("");
    buf.writeln("vec3 nonLightValues(vec3 norm)");
    buf.writeln("{");
    buf.writeln("   return lightValue(norm, vec3(1.0, 1.0, 1.0), vec3(0.0, 0.0, 1.0));");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Creates the fragmant source code for the material light shader for the given configurations.
  String createFragmentSource() {
    StringBuffer buf = new StringBuffer();
    buf.writeln("precision mediump float;");
    buf.writeln("");

    if (this.norm)    buf.writeln("varying vec3 normalVec;");
    if (this.binm)    buf.writeln("varying vec3 binormalVec;");
    if (this.txt2D)   buf.writeln("varying vec2 txt2D;");
    if (this.txtCube) buf.writeln("varying vec3 txtCube;");
    if (this.objPos)  buf.writeln("varying vec3 objPos;");
    if (this.viewPos) buf.writeln("varying vec3 viewPos;");
    buf.writeln("");

    if (this.colorMat)   buf.writeln("uniform mat4 colorMat;");
    if (this.invViewMat) buf.writeln("uniform mat4 invViewMat;");
    if (this.fog) {
      buf.writeln("uniform vec4 fogColor;");
      buf.writeln("uniform float fogStop;");
      buf.writeln("uniform float fogWidth;");
    }
    buf.writeln("");

    this._writeEmission(buf);
    this._writeAmbient(buf);
    this._writeDiffuse(buf);
    this._writeInvDiffuse(buf);
    this._writeSpecular(buf);
    if (this.enviromental) {
      buf.writeln("// === Enviromental ===");
      buf.writeln("");
      buf.writeln("uniform samplerCube envSampler;");
      buf.writeln("");
      this._writeReflection(buf);
      this._writeRefraction(buf);
    }
    this._writeNormal(buf);
    this._writeAlpha(buf);

    if (this.lights) {
      buf.writeln("// === Lighting ===");
      buf.writeln("");
      buf.writeln("vec3 lightValue(vec3 norm, vec3 litClr, vec3 litVec)");
      buf.writeln("{");
      buf.writeln("   if ((litClr.r < 0.001) && (litClr.g < 0.001) && (litClr.b < 0.001)) return litClr;");
      List<String> parts = new List<String>();
      if (this.ambient.hasAny)    parts.add("ambientColor");
      if (this.diffuse.hasAny)    parts.add("diffuse(norm, litVec)");
      if (this.invDiffuse.hasAny) parts.add("invDiffuse(norm, litVec)");
      if (this.specular.hasAny)   parts.add("specular(norm, litVec)");
      buf.writeln("   return litClr*(" + parts.join(" + ") + ");");
      buf.writeln("}");
      buf.writeln("");

      this._writeDirLight(buf);
      this._writePointLight(buf);
      this._writeSpotLight(buf);
      this._writeTxtDirLight(buf);
      this._writeTxtPointLight(buf);
      this._writeTxtSpotLight(buf);
      this._writeNoLight(buf);
    }

    buf.writeln("// === Main ===");
    buf.writeln("");
    buf.writeln("void main()");
    buf.writeln("{");
    buf.writeln("   float alpha = alphaValue();");
    if (this.norm) buf.writeln("   vec3 norm = normal();");
    if (this.enviromental) {
      buf.writeln("   vec3 refl = reflect(normalize(viewPos), norm);");
    }
    List<String> fragParts = new List<String>();
    if (this.lights) {
      buf.writeln("   vec3 lightAccum = vec3(0.0, 0.0, 0.0);");
      fragParts.add("lightAccum");
      if (this.ambient.hasAny)    buf.writeln("   setAmbientColor();");
      if (this.diffuse.hasAny)    buf.writeln("   setDiffuseColor();");
      if (this.invDiffuse.hasAny) buf.writeln("   setInvDiffuseColor();");
      if (this.specular.hasAny)   buf.writeln("   setSpecularColor();");
      if (this.dirLight      > 0) buf.writeln("   lightAccum += allDirLightValues(norm);");
      if (this.pointLight    > 0) buf.writeln("   lightAccum += allPointLightValues(norm);");
      if (this.spotLight     > 0) buf.writeln("   lightAccum += allSpotLightValues(norm);");
      if (this.txtDirLight   > 0) buf.writeln("   lightAccum += allTxtDirLightValues(norm);");
      if (this.txtPointLight > 0) buf.writeln("   lightAccum += allTxtPointLightValues(norm);");
      if (this.txtSpotLight  > 0) buf.writeln("   lightAccum += allTxtSpotLightValues(norm);");
      if (this.totalLights  <= 0) buf.writeln("   lightAccum += nonLightValues(norm);");
    }
    if (this.emission.hasAny)   fragParts.add("emissionColor()");
    if (this.reflection.hasAny) fragParts.add("reflect(refl)");
    if (this.refraction.hasAny) fragParts.add("refract(refl)");
    if (fragParts.length <= 0) fragParts.add("vec3(0.0, 0.0, 0.0)");
    buf.writeln("   vec4 objClr = vec4(" + fragParts.join(" + ") + ", alpha);");
    if (this.colorMat) buf.writeln("   objClr = colorMat*objClr;");
    if (this.fog) {
      buf.writeln("   float fogFactor = (viewPos.z-fogStop) / fogWidth;");
      buf.writeln("   objClr = mix(fogColor, objClr, clamp(fogFactor, 0.0, 1.0));");
    }
    buf.writeln("   gl_FragColor = objClr;");
    buf.writeln("}");
    return buf.toString();
  }

  /// Gets the name for the configuration.
  String toString() => this.name;
}
