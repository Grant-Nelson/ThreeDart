part of ThreeDart.Shaders;

enum MaterialComponentType {
  None,
  Solid,
  Texture2D,
  TextureCube
}

/// The shader configuration for rendering solid color light.
class MaterialLightConfig {

  MaterialComponentType _emission;
  MaterialComponentType _ambient;
  MaterialComponentType _diffuse;
  MaterialComponentType _specular;
  MaterialComponentType _bumpy;
  bool _reflection;
  bool _refraction;
  bool _enviromental;
  bool _viewObjMat;
  bool _viewMat;
  bool _lights;
  bool _camPos;
  bool _norm;
  bool _binm;
  bool _txt2D;
  bool _txtCube;
  String _name;

  MaterialLightConfig(MaterialComponentType this._emission,
    MaterialComponentType this._ambient, MaterialComponentType this._diffuse,
    MaterialComponentType this._specular, MaterialComponentType this._bumpy,
    bool this._reflection, bool this._refraction) {
    this._enviromental = this._reflection || this._refraction;
    this._lights = (this._ambient != MaterialComponentType.None) ||
                   (this._diffuse != MaterialComponentType.None) ||
                   (this._specular != MaterialComponentType.None);
    this._camPos = (this._specular != MaterialComponentType.None) || this._reflection || this._refraction;
    this._norm = (this._diffuse != MaterialComponentType.None) ||
                 (this._specular != MaterialComponentType.None) ||
                 (this._bumpy != MaterialComponentType.None) || this._reflection || this._refraction;
    this._binm = (this._bumpy != MaterialComponentType.None);
    this._txt2D = (this._emission == MaterialComponentType.Texture2D) ||
                  (this._ambient == MaterialComponentType.Texture2D) ||
                  (this._diffuse == MaterialComponentType.Texture2D) ||
                  (this._specular == MaterialComponentType.Texture2D) ||
                  (this._bumpy == MaterialComponentType.Texture2D);
    this._txtCube = (this._emission == MaterialComponentType.TextureCube) ||
                    (this._ambient == MaterialComponentType.TextureCube) ||
                    (this._diffuse == MaterialComponentType.TextureCube) ||
                    (this._specular == MaterialComponentType.TextureCube) ||
                    (this._bumpy == MaterialComponentType.TextureCube);
    this._viewObjMat = this._norm || this._binm || this._camPos;
    this._viewMat = this._lights;
    this._name = this._createShaderName();
  }

  String _stringForComponentType(MaterialComponentType type) {
    switch (type) {
      case MaterialComponentType.None:
        return "0";
      case MaterialComponentType.Solid:
        return "1";
      case MaterialComponentType.Texture2D:
        return "2";
      case MaterialComponentType.TextureCube:
        return "3";
    }
  }

  String _createShaderName() {
    StringBuffer buf = new StringBuffer();
    buf.write("MaterialLight_");
    buf.write(this._stringForComponentType(this._emission));
    buf.write(this._stringForComponentType(this._ambient));
    buf.write(this._stringForComponentType(this._diffuse));
    buf.write(this._stringForComponentType(this._specular));
    buf.write(this._stringForComponentType(this._bumpy));
    if (!this._reflection) buf.write("0");
    else                   buf.write("1");
    if (!this._refraction) buf.write("0");
    else                   buf.write("1");
    return buf.toString();
  }

  MaterialComponentType get emission => this._emission;
  MaterialComponentType get ambient => this._ambient;
  MaterialComponentType get diffuse => this._diffuse;
  MaterialComponentType get specular => this._specular;
  MaterialComponentType get bumpy => this._bumpy;
  bool get reflection => this._reflection;
  bool get refraction => this._refraction;
  bool get enviromental => this._enviromental;
  bool get viewObjMat => this._viewObjMat;
  bool get viewMat => this._viewMat;
  bool get lights => this._lights;
  bool get camPos => this._camPos;
  bool get norm => this._norm;
  bool get binm => this._binm;
  bool get txt2D => this._txt2D;
  bool get txtCube => this._txtCube;
  String get name => this._name;

  String createVertexSource() {
    StringBuffer buf = new StringBuffer();
    if (this._viewObjMat) buf.writeln("uniform mat4 viewObjMat;");
    if (this._viewMat)    buf.writeln("uniform mat4 viewMat;");
    buf.writeln("uniform mat4 projViewObjMat;");
    if (this._lights) {
      // TODO: Work on different types of lights.
      buf.writeln("uniform vec3 lightVec;");
    }
    buf.writeln("");

    buf.writeln("attribute vec3 posAttr;");
    if (this._norm)    buf.writeln("attribute vec3 normAttr;");
    if (this._binm)    buf.writeln("attribute vec3 binmAttr;");
    if (this._txt2D)   buf.writeln("attribute vec2 txt2DAttr;");
    if (this._txtCube) buf.writeln("attribute vec3 txtCubeAttr;");
    buf.writeln("");

    if (this._norm)    buf.writeln("varying vec3 normalVec;");
    if (this._binm)    buf.writeln("varying vec3 binormalVec;");
    if (this._txt2D)   buf.writeln("varying vec2 txt2D;");
    if (this._txtCube) buf.writeln("varying vec3 txtCube;");
    if (this._lights)  buf.writeln("varying vec3 litVec;");
    if (this._camPos)  buf.writeln("varying vec3 camPos;");
    buf.writeln("");

    buf.writeln("void main()");
    buf.writeln("{");
    if (this._norm)    buf.writeln("   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;");
    if (this._binm)    buf.writeln("   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;");
    if (this._txt2D)   buf.writeln("   txt2D = txt2DAttr;");
    if (this._txtCube) buf.writeln("   txtCube = txtCubeAttr;");
    if (this._lights)  buf.writeln("   litVec = normalize((viewMat*vec4(lightVec, 0.0)).xyz);");
    if (this._camPos)  buf.writeln("   camPos = -(viewObjMat*vec4(posAttr, 1.0)).xyz;");
    buf.writeln("   gl_Position = projViewObjMat*vec4(posAttr, 1.0);");
    buf.writeln("}");
    return buf.toString();
  }

  String createFragmentSource() {
    StringBuffer buf = new StringBuffer();
    buf.writeln("precision mediump float;");
    buf.writeln("");

    if (this._norm)    buf.writeln("varying vec3 normalVec;");
    if (this._binm)    buf.writeln("varying vec3 binormalVec;");
    if (this._txt2D)   buf.writeln("varying vec2 txt2D;");
    if (this._txtCube) buf.writeln("varying vec3 txtCube;");
    if (this._lights)  buf.writeln("varying vec3 litVec;");
    if (this._camPos)  buf.writeln("varying vec3 camPos;");
    buf.writeln("");

    if (this._lights) {
      // TODO: Work on lights
      buf.writeln("uniform vec4 lightClr;");
    }

    switch (this._emission) {
      case MaterialComponentType.None: break;
      case MaterialComponentType.Solid:
        buf.writeln("uniform vec4 emissionClr;");
        break;
      case MaterialComponentType.Texture2D:
        buf.writeln("uniform sampler2D emissionTxt;");
        buf.writeln("uniform vec4 emissionClr;");
        break;
      case MaterialComponentType.TextureCube:
        buf.writeln("uniform samplerCube emissionTxt;");
        buf.writeln("uniform vec4 emissionClr;");
        break;
    }

    switch (this._ambient) {
      case MaterialComponentType.None: break;
      case MaterialComponentType.Solid:
        buf.writeln("uniform vec4 ambientClr;");
        break;
      case MaterialComponentType.Texture2D:
        buf.writeln("uniform sampler2D ambientTxt;");
        buf.writeln("uniform vec4 ambientClr;");
        break;
      case MaterialComponentType.TextureCube:
        buf.writeln("uniform samplerCube ambientTxt;");
        buf.writeln("uniform vec4 ambientClr;");
        break;
    }

    switch (this._diffuse) {
      case MaterialComponentType.None: break;
      case MaterialComponentType.Solid:
        buf.writeln("uniform vec4 diffuseClr;");
        break;
      case MaterialComponentType.Texture2D:
        buf.writeln("uniform sampler2D diffuseTxt;");
        buf.writeln("uniform vec4 diffuseClr;");
        break;
      case MaterialComponentType.TextureCube:
        buf.writeln("uniform samplerCube diffuseTxt;");
        buf.writeln("uniform vec4 diffuseClr;");
        break;
    }

    switch (this._specular) {
      case MaterialComponentType.None: break;
      case MaterialComponentType.Solid:
        buf.writeln("uniform vec4 specularClr;");
        buf.writeln("uniform float shininess;");
        break;
      case MaterialComponentType.Texture2D:
        buf.writeln("uniform sampler2D specularTxt;");
        buf.writeln("uniform vec4 specularClr;");
        buf.writeln("uniform float shininess;");
        break;
      case MaterialComponentType.TextureCube:
        buf.writeln("uniform samplerCube specularTxt;");
        buf.writeln("uniform vec4 specularClr;");
        buf.writeln("uniform float shininess;");
        break;
    }

    switch (this._bumpy) {
      case MaterialComponentType.None: break;
      case MaterialComponentType.Solid: break;
      case MaterialComponentType.Texture2D:
        buf.writeln("uniform sampler2D bumpTxt;");
        break;
      case MaterialComponentType.TextureCube:
        buf.writeln("uniform samplerCube bumpTxt;");
        break;
    }

    if (this._enviromental) {
      buf.writeln("uniform mat4 invViewMat;");
      buf.writeln("uniform samplerCube envSampler;");
      if (this._reflection) {
        buf.writeln("uniform vec4 reflectClr;");
      }
      if (this._refraction) {
        buf.writeln("uniform float refraction;");
        buf.writeln("uniform vec4 refractClr;");
      }
    }
    buf.writeln("");

    if (this._emission != MaterialComponentType.None) {
      buf.writeln("vec4 emission()");
      buf.writeln("{");
      switch (this._emission) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid:
          buf.writeln("   return emissionClr;");
          break;
        case MaterialComponentType.Texture2D:
          buf.writeln("   if(emissionClr.a <= 0.0) return vec4(0.0, 0.0, 0.0, 0.0);");
          buf.writeln("   return emissionClr*texture2D(emissionTxt, txt2D);");
          break;
        case MaterialComponentType.TextureCube:
          buf.writeln("   if(emissionClr.a <= 0.0) return vec4(0.0, 0.0, 0.0, 0.0);");
          buf.writeln("   return emissionClr*textureCube(emissionTxt, txtCube);");
          break;
      }
      buf.writeln("}");
      buf.writeln("");
    }

    if (this._ambient != MaterialComponentType.None) {
      buf.writeln("vec4 ambient()");
      buf.writeln("{");
      buf.writeln("   if(ambientClr.a <= 0.0) return vec4(0.0, 0.0, 0.0, 0.0);");
      switch (this._ambient) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid:
          buf.writeln("   return ambientClr;");
          break;
        case MaterialComponentType.Texture2D:
          buf.writeln("   return ambientClr*texture2D(ambientTxt, txt2D);");
          break;
        case MaterialComponentType.TextureCube:
          buf.writeln("   return ambientClr*textureCube(ambientTxt, txtCube);");
          break;
      }
      buf.writeln("}");
      buf.writeln("");
    }

    if (this._diffuse != MaterialComponentType.None) {
      buf.writeln("vec4 diffuse(vec3 norm)");
      buf.writeln("{");
      buf.writeln("   if(diffuseClr.a <= 0.0) return vec4(0.0, 0.0, 0.0, 0.0);");
      buf.writeln("   float scalar = dot(norm, -litVec);");
      buf.writeln("   if(scalar < 0.0) return vec4(0.0, 0.0, 0.0, 0.0);");
      switch (this._diffuse) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid:
          buf.writeln("   return diffuseClr*max(scalar, 0.0);");
          break;
        case MaterialComponentType.Texture2D:
          buf.writeln("   return scalar*diffuseClr*texture2D(diffuseTxt, txt2D);");
          break;
        case MaterialComponentType.TextureCube:
          buf.writeln("   return scalar*diffuseClr*textureCube(diffuseTxt, txtCube);");
          break;
      }
      buf.writeln("}");
      buf.writeln("");
    }

    if (this._specular != MaterialComponentType.None) {
      buf.writeln("vec4 specular(vec3 norm)");
      buf.writeln("{");
      buf.writeln("   if(specularClr.a <= 0.0) return vec4(0.0, 0.0, 0.0, 0.0);");
      buf.writeln("   if(dot(norm, -litVec) > 0.0)");
      buf.writeln("   {");
      buf.writeln("      vec3 lightRef = normalize(reflect(litVec, norm));");
      buf.writeln("      float scalar = dot(lightRef, normalize(camPos));");
      buf.writeln("      if(scalar > 0.0)");
      buf.writeln("      {");
      switch (this._specular) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid:
          buf.writeln("         return specularClr*pow(scalar, shininess);");
          break;
        case MaterialComponentType.Texture2D:
          buf.writeln("         vec4 clr = specularClr*texture2D(specularTxt, txt2D);");
          buf.writeln("         return clr*pow(scalar, shininess);");
          break;
        case MaterialComponentType.TextureCube:
          buf.writeln("         vec4 clr = specularClr*textureCube(specularTxt, txtCube);");
          buf.writeln("         return clr*pow(scalar, shininess);");
          break;
      }
      buf.writeln("      }");
      buf.writeln("   }");
      buf.writeln("   return vec4(0.0, 0.0, 0.0, 0.0);");
      buf.writeln("}");
      buf.writeln("");
    }

    if (this.norm) {
      buf.writeln("vec3 normal()");
      buf.writeln("{");
      switch (this._bumpy) {
        case MaterialComponentType.None:
          buf.writeln("   return normalize(normalVec);");
          break;
        case MaterialComponentType.Solid:
          buf.writeln("   return normalize(normalVec);");
          break;
        case MaterialComponentType.Texture2D:
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
        case MaterialComponentType.TextureCube:
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

    if (this._reflection) {
      buf.writeln("vec4 reflect(vec3 refl)");
      buf.writeln("{");
      buf.writeln("   if(reflectClr.a > 0.0) {");
      buf.writeln("     vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));");
      buf.writeln("     return textureCube(envSampler, invRefl)*reflectClr;");
      buf.writeln("   }");
      buf.writeln("   return vec4(0.0, 0.0, 0.0, 1.0);");
      buf.writeln("}");
      buf.writeln("");
    }

    if (this._refraction) {
      buf.writeln("vec4 refract(vec3 refl)");
      buf.writeln("{");
      buf.writeln("   if(refractClr.a > 0.0) {");
      buf.writeln("     vec3 refr = mix(-refl, -camPos, refraction);");
      buf.writeln("     vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));");
      buf.writeln("     return textureCube(envSampler, invRefr)*refractClr;");
      buf.writeln("   }");
      buf.writeln("   return vec4(0.0, 0.0, 0.0, 1.0);");
      buf.writeln("}");
      buf.writeln("");
    }

    buf.writeln("void main()");
    buf.writeln("{");
    if (this._norm) buf.writeln("   vec3 norm = normal();");
    if (this._enviromental) {
      buf.writeln("   vec3 refl = reflect(-normalize(camPos), norm);");
    }
    List<String> fragParts = new List<String>();
    if (this._lights) {
      List<String> parts = new List<String>();
      if (this._ambient != MaterialComponentType.None) parts.add("ambient()");
      if (this._diffuse != MaterialComponentType.None) parts.add("diffuse(norm)");
      if (this._specular != MaterialComponentType.None) parts.add("specular(norm)");
      fragParts.add("lightClr*(" + parts.join(" + ") + ")");
    }
    if (this._emission != MaterialComponentType.None) fragParts.add("emission()");
    if (this._reflection) fragParts.add("reflect(refl)");
    if (this._refraction) fragParts.add("refract(refl)");
    if (fragParts.length <= 0) fragParts.add("vec4(0.0, 0.0, 0.0, 0.0)");
    buf.writeln("   gl_FragColor = " + fragParts.join(" + ") + ";");
    buf.writeln("}");
    return buf.toString();
  }

  /// Gets the name for the configuration.
  String toString() => this.name;
}
