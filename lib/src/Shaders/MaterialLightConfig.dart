part of ThreeDart.Shaders;

/// The shader configuration for rendering solid color light.
class MaterialLightConfig {

  /// The emission color source type.
  final ColorSourceType emission;

  /// The emission color source type.
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

  /// Indicates the view object matrix is needed for this shader.
  final bool viewObjMat;

  /// Indicates the object matrix is needed for this shader.
  final bool objMat;

  /// Indicates the ambient, diffuse, inverse diffuse, or specular
  /// material compenent is used meaning lighting is needed for this shader.
  /// If lighting is needed but no lights are provided a default light is used.
  final bool lights;

  /// Indicates the object's position is needed by the fragment shader.
  final bool objPos;

  /// Indicates the camara's position is needed by the fragment shader.
  final bool viewPos;

  /// Indicates the normal vector is needed by the fragment shader.
  final bool norm;

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
    bool this.enviromental, bool this.invViewMat, bool this.viewObjMat,
    bool this.objMat, bool this.lights, bool this.objPos,
    bool this.viewPos, bool this.norm, bool this.binm,
    bool this.txt2D, bool this.txtCube,
    String this.name, Data.VertexType this.vertexType);

  /// Creates a new material light configuration.
  /// The configuration for the material light shader.
  factory MaterialLightConfig(ColorSourceType emission,
    ColorSourceType ambient, ColorSourceType diffuse,
    ColorSourceType invDiffuse, ColorSourceType specular,
    ColorSourceType bumpy, ColorSourceType reflection,
    ColorSourceType refraction, ColorSourceType alpha,
    int dirLight, int pointLight, int spotLight,
    int txtDirLight, int txtPointLight, int txtSpotLight) {

    int totalLights = dirLight + pointLight + spotLight +
                      txtDirLight + txtPointLight + txtSpotLight;
    bool enviromental = (reflection != ColorSourceType.None) ||
                        (refraction != ColorSourceType.None);
    bool invViewMat = enviromental;
    bool objMat = (pointLight + txtPointLight + txtDirLight +
                   spotLight + txtSpotLight) > 0;
    bool lights = (ambient    != ColorSourceType.None) ||
                  (diffuse    != ColorSourceType.None) ||
                  (invDiffuse != ColorSourceType.None) ||
                  (specular   != ColorSourceType.None);
    bool objPos = objMat;
    bool viewPos = (specular != ColorSourceType.None) ||
                    enviromental;
    bool norm = (diffuse    != ColorSourceType.None) ||
                (invDiffuse != ColorSourceType.None) ||
                (specular   != ColorSourceType.None) ||
                (bumpy      != ColorSourceType.None) ||
                enviromental;
    bool binm = (bumpy != ColorSourceType.None);
    bool txt2D = (emission   == ColorSourceType.Texture2D) ||
                 (ambient    == ColorSourceType.Texture2D) ||
                 (diffuse    == ColorSourceType.Texture2D) ||
                 (invDiffuse == ColorSourceType.Texture2D) ||
                 (specular   == ColorSourceType.Texture2D) ||
                 (bumpy      == ColorSourceType.Texture2D) ||
                 (reflection == ColorSourceType.Texture2D) ||
                 (refraction == ColorSourceType.Texture2D) ||
                 (alpha      == ColorSourceType.Texture2D);
    bool txtCube = (emission   == ColorSourceType.TextureCube) ||
                   (ambient    == ColorSourceType.TextureCube) ||
                   (diffuse    == ColorSourceType.TextureCube) ||
                   (invDiffuse == ColorSourceType.TextureCube) ||
                   (specular   == ColorSourceType.TextureCube) ||
                   (bumpy      == ColorSourceType.TextureCube) ||
                   (reflection == ColorSourceType.TextureCube) ||
                   (refraction == ColorSourceType.TextureCube) ||
                   (alpha      == ColorSourceType.TextureCube);
    bool viewObjMat = norm || binm || viewPos;

    StringBuffer buf = new StringBuffer();
    buf.write("MaterialLight_");
    buf.write(stringForComponentType(emission));
    buf.write(stringForComponentType(ambient));
    buf.write(stringForComponentType(diffuse));
    buf.write(stringForComponentType(invDiffuse));
    buf.write(stringForComponentType(specular));
    buf.write(stringForComponentType(bumpy));
    buf.write(stringForComponentType(reflection));
    buf.write(stringForComponentType(refraction));
    buf.write(stringForComponentType(alpha));
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

    Data.VertexType vertexType = Data.VertexType.Pos;
    if (norm) vertexType |= Data.VertexType.Norm;
    if (binm) vertexType |= Data.VertexType.Binm;
    if (txt2D) vertexType |= Data.VertexType.Txt2D;
    if (txtCube) vertexType |= Data.VertexType.TxtCube;

    return new MaterialLightConfig._(emission, ambient,
      diffuse, invDiffuse, specular, bumpy, reflection, refraction,
      alpha, dirLight, pointLight, spotLight, txtDirLight,
      txtPointLight, txtSpotLight, totalLights, enviromental,
      invViewMat, viewObjMat, objMat, lights, objPos, viewPos,
      norm, binm, txt2D, txtCube, name, vertexType);
  }

  /// Creates the vertex source code for the material light shader for the given configurations.
  String createVertexSource() {
    StringBuffer buf = new StringBuffer();
    if (this.objMat) buf.writeln("uniform mat4 objMat;");
    if (this.viewObjMat) buf.writeln("uniform mat4 viewObjMat;");
    buf.writeln("uniform mat4 projViewObjMat;");
    if (this.txt2D)   buf.writeln("uniform mat3 txt2DMat;");
    if (this.txtCube) buf.writeln("uniform mat4 txtCubeMat;");
    buf.writeln("");

    buf.writeln("attribute vec3 posAttr;");
    if (this.norm)    buf.writeln("attribute vec3 normAttr;");
    if (this.binm)    buf.writeln("attribute vec3 binmAttr;");
    if (this.txt2D)   buf.writeln("attribute vec2 txt2DAttr;");
    if (this.txtCube) buf.writeln("attribute vec3 txtCubeAttr;");
    buf.writeln("");

    if (this.norm)    buf.writeln("varying vec3 normalVec;");
    if (this.binm)    buf.writeln("varying vec3 binormalVec;");
    if (this.txt2D)   buf.writeln("varying vec2 txt2D;");
    if (this.txtCube) buf.writeln("varying vec3 txtCube;");
    if (this.objPos)  buf.writeln("varying vec3 objPos;");
    if (this.viewPos) buf.writeln("varying vec3 viewPos;");
    buf.writeln("");

    buf.writeln("void main()");
    buf.writeln("{");
    if (this.norm)    buf.writeln("   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;");
    if (this.binm)    buf.writeln("   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;");
    if (this.txt2D)   buf.writeln("   txt2D = (txt2DMat*vec3(txt2DAttr, 1.0)).xy;");
    if (this.txtCube) buf.writeln("   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;");
    if (this.objPos)  buf.writeln("   objPos = (objMat*vec4(posAttr, 1.0)).xyz;");
    if (this.viewPos) buf.writeln("   viewPos = (viewObjMat*vec4(posAttr, 1.0)).xyz;");
    buf.writeln("   gl_Position = projViewObjMat*vec4(posAttr, 1.0);");
    buf.writeln("}");
    return buf.toString();
  }

  /// Writes the typical variables for the given source type
  /// with the given [name] to the fragment shader [buf].
  void _fragmentSrcTypeVars(StringBuffer buf, ColorSourceType srcType, String name) {
    if (srcType == ColorSourceType.None) return;

    buf.writeln("uniform vec3 ${name}Clr;");
    if (srcType == ColorSourceType.Solid) return;

    String capName = name[0].toUpperCase()+name.substring(1);
    buf.writeln("uniform int null${capName}Txt;");

    if (srcType == ColorSourceType.Texture2D)
      buf.writeln("uniform sampler2D ${name}Txt;");
    else if (srcType == ColorSourceType.TextureCube)
      buf.writeln("uniform samplerCube ${name}Txt;");
  }

  /// Writes the emission material component to the fragment shader [buf].
  void _writeEmission(StringBuffer buf) {
    if (this.emission == ColorSourceType.None) return;
    buf.writeln("// === Emission ===");
    buf.writeln("");
    this._fragmentSrcTypeVars(buf, this.emission, "emission");
    buf.writeln("");
    buf.writeln("vec3 emission()");
    buf.writeln("{");
    switch (this.emission) {
      case ColorSourceType.None: break;
      case ColorSourceType.Solid:
        buf.writeln("   return emissionClr;");
        break;
      case ColorSourceType.Texture2D:
        buf.writeln("   if(nullEmissionTxt > 0) return emissionClr;");
        buf.writeln("   return emissionClr*texture2D(emissionTxt, txt2D).rgb;");
        break;
      case ColorSourceType.TextureCube:
        buf.writeln("   if(nullEmissionTxt > 0) return emissionClr;");
        buf.writeln("   return emissionClr*textureCube(emissionTxt, txtCube).rgb;");
        break;
    }
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the ambient material component to the fragment shader [buf].
  void _writeAmbient(StringBuffer buf) {
    if (this.ambient == ColorSourceType.None) return;
    buf.writeln("// === Ambient ===");
    buf.writeln("");
    this._fragmentSrcTypeVars(buf, this.ambient, "ambient");
    buf.writeln("");
    buf.writeln("vec3 ambient()");
    buf.writeln("{");
    switch (this.ambient) {
      case ColorSourceType.None: break;
      case ColorSourceType.Solid:
        buf.writeln("   return ambientClr;");
        break;
      case ColorSourceType.Texture2D:
        buf.writeln("   if(nullAmbientTxt > 0) return ambientClr;");
        buf.writeln("   return ambientClr*texture2D(ambientTxt, txt2D).rgb;");
        break;
      case ColorSourceType.TextureCube:
        buf.writeln("   if(nullAmbientTxt > 0) return ambientClr;");
        buf.writeln("   return ambientClr*textureCube(ambientTxt, txtCube).rgb;");
        break;
    }
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the diffuse material component to the fragment shader [buf].
  void _writeDiffuse(StringBuffer buf) {
    if (this.diffuse == ColorSourceType.None) return;
    buf.writeln("// === Diffuse ===");
    buf.writeln("");
    this._fragmentSrcTypeVars(buf, this.diffuse, "diffuse");
    buf.writeln("vec3 diffuseColor;");
    buf.writeln("");
    buf.writeln("void setDiffuseColor()");
    buf.writeln("{");
    switch (this.diffuse) {
      case ColorSourceType.None: break;
      case ColorSourceType.Solid:
        buf.writeln("   diffuseColor = diffuseClr;");
        break;
      case ColorSourceType.Texture2D:
        buf.writeln("   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;");
        buf.writeln("   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;");
        break;
      case ColorSourceType.TextureCube:
        buf.writeln("   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;");
        buf.writeln("   else diffuseColor = diffuseClr*textureCube(diffuseTxt, txtCube).rgb;");
        break;
    }
    buf.writeln("}");
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
    if (this.invDiffuse == ColorSourceType.None) return;
    buf.writeln("// === Inverse Diffuse ===");
    buf.writeln("");
    this._fragmentSrcTypeVars(buf, this.invDiffuse, "invDiffuse");
    buf.writeln("vec3 invDiffuseColor;");
    buf.writeln("");
    buf.writeln("void setInvDiffuseColor()");
    buf.writeln("{");
    switch (this.invDiffuse) {
      case ColorSourceType.None: break;
      case ColorSourceType.Solid:
        buf.writeln("   invDiffuseColor = invDiffuseClr;");
        break;
      case ColorSourceType.Texture2D:
        buf.writeln("   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;");
        buf.writeln("   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;");
        break;
      case ColorSourceType.TextureCube:
        buf.writeln("   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;");
        buf.writeln("   else invDiffuseColor = invDiffuseClr*textureCube(invDiffuseTxt, txtCube).rgb;");
        break;
    }
    buf.writeln("}");
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
    if (this.specular == ColorSourceType.None) return;
    buf.writeln("// === Specular ===");
    buf.writeln("");
    this._fragmentSrcTypeVars(buf, this.specular, "specular");
    buf.writeln("uniform float shininess;");
    buf.writeln("vec3 specularColor;");
    buf.writeln("");
    buf.writeln("void setSpecularColor()");
    buf.writeln("{");
    switch (this.specular) {
      case ColorSourceType.None: break;
      case ColorSourceType.Solid:
        buf.writeln("   specularColor = specularClr;");
        break;
      case ColorSourceType.Texture2D:
        buf.writeln("   if(nullSpecularTxt > 0) specularColor = specularClr;");
        buf.writeln("   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;");
        break;
      case ColorSourceType.TextureCube:
        buf.writeln("   if(nullSpecularTxt > 0) specularColor = specularClr;");
        buf.writeln("   else specularColor = specularClr*textureCube(specularTxt, txtCube).rgb;");
        break;
    }
    buf.writeln("}");
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
    switch (this.bumpy) {
      case ColorSourceType.None: break;
      case ColorSourceType.Solid: break;
      case ColorSourceType.Texture2D:
        buf.writeln("uniform sampler2D bumpTxt;");
        buf.writeln("uniform int nullBumpTxt;");
        buf.writeln("");
        break;
      case ColorSourceType.TextureCube:
        buf.writeln("uniform samplerCube bumpTxt;");
        buf.writeln("uniform int nullBumpTxt;");
        buf.writeln("");
        break;
    }
    buf.writeln("vec3 normal()");
    buf.writeln("{");
    switch (this.bumpy) {
      case ColorSourceType.None:
        buf.writeln("   return normalize(normalVec);");
        break;
      case ColorSourceType.Solid:
        buf.writeln("   return normalize(normalVec);");
        break;
      case ColorSourceType.Texture2D:
        buf.writeln("   if(nullBumpTxt > 0) return normalVec;");
        buf.writeln("   vec3 color = texture2D(bumpTxt, txt2D).rgb;");
        buf.writeln("   vec3 n = normalize(normalVec);");
        buf.writeln("   vec3 b = normalize(binormalVec);");
        buf.writeln("   vec3 c = normalize(cross(b, n));");
        buf.writeln("   b = cross(n, c);");
        buf.writeln("   mat3 mat = mat3( b.x,  b.y,  b.z,");
        buf.writeln("                   -c.x, -c.y, -c.z,");
        buf.writeln("                    n.x,  n.y,  n.z);");
        buf.writeln("   return mat * normalize(2.0*color - 1.0);");
        break;
      case ColorSourceType.TextureCube:
        buf.writeln("   if(nullBumpTxt > 0) return normalVec;");
        buf.writeln("   vec3 color = textureCube(bumpTxt, txtCube).rgb;");
        buf.writeln("   vec3 n = normalize(normalVec);");
        buf.writeln("   vec3 b = normalize(binormalVec);");
        buf.writeln("   vec3 c = cross(b, n);");
        buf.writeln("   b = cross(n, c);");
        buf.writeln("   mat3 mat = mat3( b.x,  b.y,  b.z,");
        buf.writeln("                   -c.x, -c.y, -c.z,");
        buf.writeln("                    n.x,  n.y,  n.z);");
        buf.writeln("   return mat * normalize(2.0*color - 1.0);");
        break;
    }
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the reflection calculation to the fragment shader [buf].
  void _writeReflection(StringBuffer buf) {
    if (this.reflection == ColorSourceType.None) return;
    buf.writeln("// === Reflection ===");
    buf.writeln("");
    this._fragmentSrcTypeVars(buf, this.reflection, "reflect");
    buf.writeln("");
    buf.writeln("vec3 reflect(vec3 refl)");
    buf.writeln("{");
    buf.writeln("   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);");
    switch (this.reflection) {
      case ColorSourceType.None: break;
      case ColorSourceType.Solid:
        buf.writeln("   vec3 scalar = reflectClr;");
        break;
      case ColorSourceType.Texture2D:
        buf.writeln("   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);");
        buf.writeln("   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;");
        break;
      case ColorSourceType.TextureCube:
        buf.writeln("   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);");
        buf.writeln("   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;");
        break;
    }
    buf.writeln("   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));");
    buf.writeln("   return scalar*textureCube(envSampler, invRefl).rgb;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the refraction calculation to the fragment shader [buf].
  void _writeRefraction(StringBuffer buf) {
    if (this.refraction == ColorSourceType.None) return;
    buf.writeln("// === Refraction ===");
    buf.writeln("");
    this._fragmentSrcTypeVars(buf, this.refraction, "refract");
    buf.writeln("uniform float refraction;");
    buf.writeln("");
    buf.writeln("vec3 refract(vec3 refl)");
    buf.writeln("{");
    buf.writeln("   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);");
    switch (this.refraction) {
      case ColorSourceType.None: break;
      case ColorSourceType.Solid:
        buf.writeln("   vec3 scalar = refractClr;");
        break;
      case ColorSourceType.Texture2D:
        buf.writeln("   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);");
        buf.writeln("   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;");
        break;
      case ColorSourceType.TextureCube:
        buf.writeln("   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);");
        buf.writeln("   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;");
        break;
    }
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
    this._fragmentSrcTypeVars(buf, this.alpha, "alpha");
    buf.writeln("");
    buf.writeln("float alphaValue()");
    buf.writeln("{");
    switch (this.alpha) {
      case ColorSourceType.None:
        buf.writeln("   return 1.0;");
        break;
      case ColorSourceType.Solid:
        buf.writeln("   return alpha;");
        break;
      case ColorSourceType.Texture2D:
        buf.writeln("   if(nullAlphaTxt > 0) return alpha;");
        buf.writeln("   float a = alpha*texture2D(alphaTxt, txt2D).a;");
        buf.writeln("   if (a <= 0.000001) discard;");
        buf.writeln("   return a;");
        break;
      case ColorSourceType.TextureCube:
        buf.writeln("   if(nullAlphaTxt > 0) return alpha;");
        buf.writeln("   float a = alpha*textureCube(alphaTxt, txtCube).a;");
        buf.writeln("   if (a <= 0.000001) discard;");
        buf.writeln("   return a;");
        break;
    }
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
    buf.writeln("   int nullTxt;");
    buf.writeln("};");
    buf.writeln("");
    buf.writeln("uniform int txtDirLightCount;");
    buf.writeln("uniform TexturedDirLight txtDirLights[${this.txtDirLight}];");
    for (int i = 0; i < this.txtDirLight; i++)
      buf.writeln("uniform sampler2D txtDirLightsTxt2D$i;");
    buf.writeln("");
    buf.writeln("vec3 txtDirLightValue(vec3 norm, TexturedDirLight lit, sampler2D txt2D)");
    buf.writeln("{");
    buf.writeln("   vec3 color;");
    buf.writeln("   if(lit.nullTxt > 0) color = lit.color;");
    buf.writeln("   else");
    buf.writeln("   {");
    buf.writeln("      vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);");
    buf.writeln("      float tu = dot(offset, lit.objUp);");
    buf.writeln("      float tv = dot(offset, lit.objRight);");
    buf.writeln("      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;");
    buf.writeln("   }");
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
    buf.writeln("   int nullTxt;");
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
    buf.writeln("   vec3 color;");
    buf.writeln("   if(lit.nullTxt > 0) color = lit.color;");
    buf.writeln("   else");
    buf.writeln("   {");
    buf.writeln("      vec3 invNormDir = lit.invViewRotMat*normDir;");
    buf.writeln("      color = lit.color*textureCube(txtCube, invNormDir).xyz;");
    buf.writeln("   }");
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
    buf.writeln("   int nullTxt;");
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
    buf.writeln("   vec3 color;");
    buf.writeln("   if(lit.nullTxt > 0) color = lit.color;");
    buf.writeln("   else");
    buf.writeln("   {");
    buf.writeln("      float tu = dot(normDir, lit.objUp)*lit.tuScalar+0.5;");
    buf.writeln("      if((tu > 1.0) || (tu < 0.0)) return vec3(0.0, 0.0, 0.0);");
    buf.writeln("      float tv = dot(normDir, lit.objRight)*lit.tvScalar+0.5;");
    buf.writeln("      if((tv > 1.0) || (tv < 0.0)) return vec3(0.0, 0.0, 0.0);");
    buf.writeln("      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;");
    buf.writeln("   }");
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

    buf.writeln("uniform mat4 colorMat;");
    if (this.invViewMat) buf.writeln("uniform mat4 invViewMat;");
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
      buf.writeln("uniform int nullEnvTxt;");
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
      if (this.ambient    != ColorSourceType.None) parts.add("ambient()");
      if (this.diffuse    != ColorSourceType.None) parts.add("diffuse(norm, litVec)");
      if (this.invDiffuse != ColorSourceType.None) parts.add("invDiffuse(norm, litVec)");
      if (this.specular   != ColorSourceType.None) parts.add("specular(norm, litVec)");
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
      if (this.diffuse    != ColorSourceType.None) buf.writeln("   setDiffuseColor();");
      if (this.invDiffuse != ColorSourceType.None) buf.writeln("   setInvDiffuseColor();");
      if (this.specular   != ColorSourceType.None) buf.writeln("   setSpecularColor();");
      if (this.dirLight      > 0) buf.writeln("   lightAccum += allDirLightValues(norm);");
      if (this.pointLight    > 0) buf.writeln("   lightAccum += allPointLightValues(norm);");
      if (this.spotLight     > 0) buf.writeln("   lightAccum += allSpotLightValues(norm);");
      if (this.txtDirLight   > 0) buf.writeln("   lightAccum += allTxtDirLightValues(norm);");
      if (this.txtPointLight > 0) buf.writeln("   lightAccum += allTxtPointLightValues(norm);");
      if (this.txtSpotLight  > 0) buf.writeln("   lightAccum += allTxtSpotLightValues(norm);");
      if (this.totalLights  <= 0) buf.writeln("   lightAccum += nonLightValues(norm);");
    }
    if (this.emission   != ColorSourceType.None) fragParts.add("emission()");
    if (this.reflection != ColorSourceType.None) fragParts.add("reflect(refl)");
    if (this.refraction != ColorSourceType.None) fragParts.add("refract(refl)");
    if (fragParts.length <= 0) fragParts.add("vec3(0.0, 0.0, 0.0)");
    buf.writeln("   gl_FragColor = colorMat*vec4(" + fragParts.join(" + ") + ", alpha);");
    buf.writeln("}");
    return buf.toString();
  }

  /// Gets the name for the configuration.
  String toString() => this.name;
}
