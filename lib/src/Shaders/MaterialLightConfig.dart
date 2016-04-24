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
  MaterialComponentType _invDiffuse;
  MaterialComponentType _specular;
  MaterialComponentType _bumpy;
  MaterialComponentType _reflection;
  MaterialComponentType _refraction;
  MaterialComponentType _alpha;
  int _dirLight;
  int _pointLight;
  int _spotLight;
  int _txtDirLight;
  int _txtPointLight;
  int _txtSpotLight;
  bool _enviromental;
  bool _viewObjMat;
  bool _lights;
  bool _viewPos;
  bool _norm;
  bool _binm;
  bool _txt2D;
  bool _txtCube;
  String _name;

  MaterialLightConfig(MaterialComponentType this._emission,
    MaterialComponentType this._ambient, MaterialComponentType this._diffuse,
    MaterialComponentType this._invDiffuse, MaterialComponentType this._specular,
    MaterialComponentType this._bumpy, MaterialComponentType this._reflection,
    MaterialComponentType this._refraction, MaterialComponentType this._alpha,
    int this._dirLight, int this._pointLight, int this._spotLight,
    int this._txtDirLight, int this._txtPointLight, int this._txtSpotLight) {
    int totalLights = this._dirLight + this._pointLight + this._spotLight +
                      this._txtDirLight + this._txtPointLight + this._txtSpotLight;
    this._enviromental = (this._reflection != MaterialComponentType.None) ||
                         (this._refraction != MaterialComponentType.None);
    this._lights = ((this._ambient != MaterialComponentType.None) ||
                   (this._diffuse != MaterialComponentType.None) ||
                   (this._invDiffuse != MaterialComponentType.None) ||
                   (this._specular != MaterialComponentType.None)) && (totalLights > 0);
    this._viewPos = (this._specular != MaterialComponentType.None) || this._enviromental;
    this._norm = (this._diffuse != MaterialComponentType.None) ||
                 (this._invDiffuse != MaterialComponentType.None) ||
                 (this._specular != MaterialComponentType.None) ||
                 (this._bumpy != MaterialComponentType.None) || this._enviromental;
    this._binm = (this._bumpy != MaterialComponentType.None);
    this._txt2D = (this._emission == MaterialComponentType.Texture2D) ||
                  (this._ambient == MaterialComponentType.Texture2D) ||
                  (this._diffuse == MaterialComponentType.Texture2D) ||
                  (this._invDiffuse == MaterialComponentType.Texture2D) ||
                  (this._specular == MaterialComponentType.Texture2D) ||
                  (this._bumpy == MaterialComponentType.Texture2D) ||
                  (this._reflection == MaterialComponentType.Texture2D) ||
                  (this._refraction == MaterialComponentType.Texture2D) ||
                  (this._alpha == MaterialComponentType.Texture2D);
    this._txtCube = (this._emission == MaterialComponentType.TextureCube) ||
                    (this._ambient == MaterialComponentType.TextureCube) ||
                    (this._diffuse == MaterialComponentType.TextureCube) ||
                    (this._invDiffuse == MaterialComponentType.TextureCube) ||
                    (this._specular == MaterialComponentType.TextureCube) ||
                    (this._bumpy == MaterialComponentType.TextureCube) ||
                    (this._reflection == MaterialComponentType.TextureCube) ||
                    (this._refraction == MaterialComponentType.TextureCube) ||
                    (this._alpha == MaterialComponentType.TextureCube);
    this._viewObjMat = this._norm || this._binm || this._viewPos;
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
    buf.write(this._stringForComponentType(this._invDiffuse));
    buf.write(this._stringForComponentType(this._specular));
    buf.write(this._stringForComponentType(this._bumpy));
    buf.write(this._stringForComponentType(this._reflection));
    buf.write(this._stringForComponentType(this._refraction));
    buf.write(this._stringForComponentType(this._alpha));
    buf.write("_");
    buf.write(this._dirLight);
    buf.write("_");
    buf.write(this._pointLight);
    buf.write("_");
    buf.write(this._spotLight);
    buf.write("_");
    buf.write(this._txtDirLight);
    buf.write("_");
    buf.write(this._txtPointLight);
    buf.write("_");
    buf.write(this._txtSpotLight);
    return buf.toString();
  }

  MaterialComponentType get emission => this._emission;
  MaterialComponentType get ambient => this._ambient;
  MaterialComponentType get diffuse => this._diffuse;
  MaterialComponentType get invDiffuse => this._invDiffuse;
  MaterialComponentType get specular => this._specular;
  MaterialComponentType get bumpy => this._bumpy;
  MaterialComponentType get reflection => this._reflection;
  MaterialComponentType get refraction => this._refraction;
  MaterialComponentType get alpha => this._alpha;
  int get dirLight => this._dirLight;
  int get pointLight => this._pointLight;
  int get spotLight => this._spotLight;
  int get txtDirLight => this._txtDirLight;
  int get txtPointLight => this._txtPointLight;
  int get txtSpotLight => this._txtSpotLight;
  bool get enviromental => this._enviromental;
  bool get viewObjMat => this._viewObjMat;
  bool get lights => this._lights;
  bool get viewPos => this._viewPos;
  bool get norm => this._norm;
  bool get binm => this._binm;
  bool get txt2D => this._txt2D;
  bool get txtCube => this._txtCube;
  String get name => this._name;

  String createVertexSource() {
    StringBuffer buf = new StringBuffer();
    if (this._viewObjMat) buf.writeln("uniform mat4 viewObjMat;");
    buf.writeln("uniform mat4 projViewObjMat;");
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
    if (this._viewPos) buf.writeln("varying vec3 viewPos;");
    buf.writeln("");

    buf.writeln("void main()");
    buf.writeln("{");
    if (this._norm)    buf.writeln("   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;");
    if (this._binm)    buf.writeln("   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;");
    if (this._txt2D)   buf.writeln("   txt2D = txt2DAttr;");
    if (this._txtCube) buf.writeln("   txtCube = txtCubeAttr;");
    if (this._viewPos) buf.writeln("   viewPos = (viewObjMat*vec4(posAttr, 1.0)).xyz;");
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
    if (this._viewPos) buf.writeln("varying vec3 viewPos;");
    buf.writeln("");

    switch (this._emission) {
      case MaterialComponentType.None: break;
      case MaterialComponentType.Solid:
        buf.writeln("uniform vec3 emissionClr;");
        break;
      case MaterialComponentType.Texture2D:
        buf.writeln("uniform sampler2D emissionTxt;");
        buf.writeln("uniform vec3 emissionClr;");
        buf.writeln("uniform int nullEmissionTxt;");
        break;
      case MaterialComponentType.TextureCube:
        buf.writeln("uniform samplerCube emissionTxt;");
        buf.writeln("uniform vec3 emissionClr;");
        buf.writeln("uniform int nullEmissionTxt;");
        break;
    }

    switch (this._ambient) {
      case MaterialComponentType.None: break;
      case MaterialComponentType.Solid:
        buf.writeln("uniform vec3 ambientClr;");
        break;
      case MaterialComponentType.Texture2D:
        buf.writeln("uniform sampler2D ambientTxt;");
        buf.writeln("uniform vec3 ambientClr;");
        buf.writeln("uniform int nullAmbientTxt;");
        break;
      case MaterialComponentType.TextureCube:
        buf.writeln("uniform samplerCube ambientTxt;");
        buf.writeln("uniform vec3 ambientClr;");
        buf.writeln("uniform int nullAmbientTxt;");
        break;
    }

    switch (this._diffuse) {
      case MaterialComponentType.None: break;
      case MaterialComponentType.Solid:
        buf.writeln("uniform vec3 diffuseClr;");
        break;
      case MaterialComponentType.Texture2D:
        buf.writeln("uniform sampler2D diffuseTxt;");
        buf.writeln("uniform vec3 diffuseClr;");
        buf.writeln("uniform int nullDiffuseTxt;");
        break;
      case MaterialComponentType.TextureCube:
        buf.writeln("uniform samplerCube diffuseTxt;");
        buf.writeln("uniform vec3 diffuseClr;");
        buf.writeln("uniform int nullDiffuseTxt;");
        break;
    }

    switch (this._invDiffuse) {
      case MaterialComponentType.None: break;
      case MaterialComponentType.Solid:
        buf.writeln("uniform vec3 invDiffuseClr;");
        break;
      case MaterialComponentType.Texture2D:
        buf.writeln("uniform sampler2D invDiffuseTxt;");
        buf.writeln("uniform vec3 invDiffuseClr;");
        buf.writeln("uniform int nullInvDiffuseTxt;");
        break;
      case MaterialComponentType.TextureCube:
        buf.writeln("uniform samplerCube invDiffuseTxt;");
        buf.writeln("uniform vec3 invDiffuseClr;");
        buf.writeln("uniform int nullInvDiffuseTxt;");
        break;
    }

    switch (this._specular) {
      case MaterialComponentType.None: break;
      case MaterialComponentType.Solid:
        buf.writeln("uniform vec3 specularClr;");
        buf.writeln("uniform float shininess;");
        break;
      case MaterialComponentType.Texture2D:
        buf.writeln("uniform sampler2D specularTxt;");
        buf.writeln("uniform vec3 specularClr;");
        buf.writeln("uniform float shininess;");
        buf.writeln("uniform int nullSpecularTxt;");
        break;
      case MaterialComponentType.TextureCube:
        buf.writeln("uniform samplerCube specularTxt;");
        buf.writeln("uniform vec3 specularClr;");
        buf.writeln("uniform float shininess;");
        buf.writeln("uniform int nullSpecularTxt;");
        break;
    }

    switch (this._bumpy) {
      case MaterialComponentType.None: break;
      case MaterialComponentType.Solid: break;
      case MaterialComponentType.Texture2D:
        buf.writeln("uniform sampler2D bumpTxt;");
        buf.writeln("uniform int nullBumpTxt;");
        break;
      case MaterialComponentType.TextureCube:
        buf.writeln("uniform samplerCube bumpTxt;");
        buf.writeln("uniform int nullBumpTxt;");
        break;
    }

    if (this._enviromental) {
      buf.writeln("uniform mat4 invViewMat;");
      buf.writeln("uniform samplerCube envSampler;");
      buf.writeln("uniform int nullEnvTxt;");

      switch (this._reflection) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid:
          buf.writeln("uniform vec3 reflectClr;");
          break;
        case MaterialComponentType.Texture2D:
          buf.writeln("uniform sampler2D reflectTxt;");
          buf.writeln("uniform vec3 reflectClr;");
          buf.writeln("uniform int nullReflectTxt;");
          break;
        case MaterialComponentType.TextureCube:
          buf.writeln("uniform samplerCube reflectTxt;");
          buf.writeln("uniform vec3 reflectClr;");
          buf.writeln("uniform int nullReflectTxt;");
          break;
      }

      switch (this._refraction) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid:
          buf.writeln("uniform float refraction;");
          buf.writeln("uniform vec3 refractClr;");
          break;
        case MaterialComponentType.Texture2D:
          buf.writeln("uniform sampler2D refractTxt;");
          buf.writeln("uniform vec3 refractClr;");
          buf.writeln("uniform float refraction;");
          buf.writeln("uniform int nullRefractTxt;");
          break;
        case MaterialComponentType.TextureCube:
          buf.writeln("uniform samplerCube refractTxt;");
          buf.writeln("uniform vec3 refractClr;");
          buf.writeln("uniform float refraction;");
          buf.writeln("uniform int nullRefractTxt;");
          break;
      }
    }

    switch (this._alpha) {
      case MaterialComponentType.None: break;
      case MaterialComponentType.Solid:
        buf.writeln("uniform float alpha;");
        break;
      case MaterialComponentType.Texture2D:
        buf.writeln("uniform sampler2D alphaTxt;");
        buf.writeln("uniform float alpha;");
        buf.writeln("uniform int nullAlphaTxt;");
        break;
      case MaterialComponentType.TextureCube:
        buf.writeln("uniform samplerCube alphaTxt;");
        buf.writeln("uniform float alpha;");
        buf.writeln("uniform int nullAlphaTxt;");
        break;
    }
    buf.writeln("");

    if (this._lights) {
      if (this._dirLight > 0) {
        buf.writeln("struct DirLight {");
        buf.writeln("   vec3 viewDir;");
        buf.writeln("   vec3 color;");
        buf.writeln("};");
        buf.writeln("");
        buf.writeln("uniform int dirLightCount;");
        buf.writeln("uniform DirLight dirLights[${this._dirLight}];");
        buf.writeln("");
      }

      if (this._pointLight > 0) {
        buf.writeln("struct PointLight {");
        buf.writeln("   vec3 viewPnt;");
        buf.writeln("   vec3 color;");
        buf.writeln("   float att0;");
        buf.writeln("   float att1;");
        buf.writeln("   float att2;");
        buf.writeln("};");
        buf.writeln("");
        buf.writeln("uniform int pntLightCount;");
        buf.writeln("uniform PointLight pntLights[${this._pointLight}];");
        buf.writeln("");
      }

      //
      // TODO: Add more lights.
      //

    }

    if (this._emission != MaterialComponentType.None) {
      buf.writeln("vec3 emission()");
      buf.writeln("{");
      switch (this._emission) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid:
          buf.writeln("   return emissionClr;");
          break;
        case MaterialComponentType.Texture2D:
          buf.writeln("   if(nullEmissionTxt > 0) return emissionClr;");
          buf.writeln("   return emissionClr*texture2D(emissionTxt, txt2D).rgb;");
          break;
        case MaterialComponentType.TextureCube:
          buf.writeln("   if(nullEmissionTxt > 0) return emissionClr;");
          buf.writeln("   return emissionClr*textureCube(emissionTxt, txtCube).rgb;");
          break;
      }
      buf.writeln("}");
      buf.writeln("");
    }

    if (this._ambient != MaterialComponentType.None) {
      buf.writeln("vec3 ambient()");
      buf.writeln("{");
      switch (this._ambient) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid:
          buf.writeln("   return ambientClr;");
          break;
        case MaterialComponentType.Texture2D:
          buf.writeln("   if(nullAmbientTxt > 0) return ambientClr;");
          buf.writeln("   return ambientClr*texture2D(ambientTxt, txt2D).rgb;");
          break;
        case MaterialComponentType.TextureCube:
          buf.writeln("   if(nullAmbientTxt > 0) return ambientClr;");
          buf.writeln("   return ambientClr*textureCube(ambientTxt, txtCube).rgb;");
          break;
      }
      buf.writeln("}");
      buf.writeln("");
    }

    if (this._diffuse != MaterialComponentType.None) {
      buf.writeln("vec3 diffuseColor;");
      buf.writeln("void setDiffuseColor()");
      buf.writeln("{");
      switch (this._diffuse) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid:
          buf.writeln("   diffuseColor = diffuseClr;");
          break;
        case MaterialComponentType.Texture2D:
          buf.writeln("   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;");
          buf.writeln("   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;");
          break;
        case MaterialComponentType.TextureCube:
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

    if (this._invDiffuse != MaterialComponentType.None) {
      buf.writeln("vec3 invDiffuseColor;");
      buf.writeln("void setInvDiffuseColor()");
      buf.writeln("{");
      switch (this._invDiffuse) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid:
          buf.writeln("   invDiffuseColor = invDiffuseClr;");
          break;
        case MaterialComponentType.Texture2D:
          buf.writeln("   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;");
          buf.writeln("   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;");
          break;
        case MaterialComponentType.TextureCube:
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

    if (this._specular != MaterialComponentType.None) {
      buf.writeln("vec3 specularColor;");
      buf.writeln("void setSpecularColor()");
      buf.writeln("{");
      switch (this._specular) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid:
          buf.writeln("   specularColor = specularClr;");
          break;
        case MaterialComponentType.Texture2D:
          buf.writeln("   if(nullSpecularTxt > 0) specularColor = specularClr;");
          buf.writeln("   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;");
          break;
        case MaterialComponentType.TextureCube:
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
        case MaterialComponentType.TextureCube:
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

    if (this._reflection != MaterialComponentType.None) {
      buf.writeln("vec3 reflect(vec3 refl)");
      buf.writeln("{");
      buf.writeln("   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);");
      switch (this._reflection) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid:
          buf.writeln("   vec3 scalar = reflectClr;");
          break;
        case MaterialComponentType.Texture2D:
          buf.writeln("   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);");
          buf.writeln("   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;");
          break;
        case MaterialComponentType.TextureCube:
          buf.writeln("   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);");
          buf.writeln("   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;");
          break;
      }
      buf.writeln("   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));");
      buf.writeln("   return scalar*textureCube(envSampler, invRefl).rgb;");
      buf.writeln("}");
      buf.writeln("");
    }

    if (this._refraction != MaterialComponentType.None) {
      buf.writeln("vec3 refract(vec3 refl)");
      buf.writeln("{");
      buf.writeln("   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);");
      switch (this._refraction) {
        case MaterialComponentType.None: break;
        case MaterialComponentType.Solid:
          buf.writeln("   vec3 scalar = refractClr;");
          break;
        case MaterialComponentType.Texture2D:
          buf.writeln("   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);");
          buf.writeln("   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;");
          break;
        case MaterialComponentType.TextureCube:
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

    buf.writeln("float alphaValue()");
    buf.writeln("{");
    switch (this._alpha) {
      case MaterialComponentType.None:
        buf.writeln("   return 1.0;");
        break;
      case MaterialComponentType.Solid:
        buf.writeln("   return alpha;");
        break;
      case MaterialComponentType.Texture2D:
        buf.writeln("   if(nullAlphaTxt > 0) return alpha;");
        buf.writeln("   float a = alpha*texture2D(alphaTxt, txt2D).a;");
        buf.writeln("   if (a <= 0.000001) discard;");
        buf.writeln("   return a;");
        break;
      case MaterialComponentType.TextureCube:
        buf.writeln("   if(nullAlphaTxt > 0) return alpha;");
        buf.writeln("   float a = alpha*textureCube(alphaTxt, txtCube).a;");
        buf.writeln("   if (a <= 0.000001) discard;");
        buf.writeln("   return a;");
        break;
    }
    buf.writeln("}");
    buf.writeln("");

    if (this._lights) {
      buf.writeln("vec3 lightValue(vec3 norm, vec3 litClr, vec3 litVec)");
      buf.writeln("{");
      List<String> parts = new List<String>();
      if (this._ambient != MaterialComponentType.None) parts.add("ambient()");
      if (this._diffuse != MaterialComponentType.None) parts.add("diffuse(norm, litVec)");
      if (this._invDiffuse != MaterialComponentType.None) parts.add("invDiffuse(norm, litVec)");
      if (this._specular != MaterialComponentType.None) parts.add("specular(norm, litVec)");
      buf.writeln("  return litClr*(" + parts.join(" + ") + ");");
      buf.writeln("}");
      buf.writeln("");
    }

    buf.writeln("void main()");
    buf.writeln("{");
    buf.writeln("   float alpha = alphaValue();");
    if (this._norm) buf.writeln("   vec3 norm = normal();");
    if (this._enviromental) {
      buf.writeln("   vec3 refl = reflect(normalize(viewPos), norm);");
    }
    List<String> fragParts = new List<String>();
    if (this._lights) {
      buf.writeln("   vec3 lightAccum = vec3(0.0, 0.0, 0.0);");
      fragParts.add("lightAccum");
      if (this._diffuse != MaterialComponentType.None) buf.writeln("   setDiffuseColor();");
      if (this._invDiffuse != MaterialComponentType.None) buf.writeln("   setInvDiffuseColor();");
      if (this._specular != MaterialComponentType.None) buf.writeln("   setSpecularColor();");
      buf.writeln("");

      if (this._dirLight > 0) {
        buf.writeln("   for(int i = 0; i < ${this._dirLight}; ++i)");
        buf.writeln("   {");
        buf.writeln("      if(i >= dirLightCount) break;");
        buf.writeln("      DirLight lit = dirLights[i];");
        buf.writeln("      lightAccum += lightValue(norm, lit.color, lit.viewDir);");
        buf.writeln("   }");
        buf.writeln("");
      }

      if (this._pointLight > 0) {
        buf.writeln("   for(int i = 0; i < ${this._pointLight}; ++i)");
        buf.writeln("   {");
        buf.writeln("      if(i >= pntLightCount) break;");
        buf.writeln("      PointLight lit = pntLights[i];");
        buf.writeln("      vec3 viewDir = viewPos - lit.viewPnt;");
        buf.writeln("      float d = length(viewDir);");
        buf.writeln("      float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*d)*d);");
        buf.writeln("      if(attenuation > 0.005)");
        buf.writeln("      {");
        buf.writeln("         lightAccum += lightValue(norm, lit.color*attenuation, normalize(viewDir));");
        buf.writeln("      }");
        buf.writeln("   }");
        buf.writeln("");
      }

      //
      // TODO: Add new light types.
      //
    }
    if (this._emission != MaterialComponentType.None) fragParts.add("emission()");
    if (this._reflection != MaterialComponentType.None) fragParts.add("reflect(refl)");
    if (this._refraction != MaterialComponentType.None) fragParts.add("refract(refl)");
    if (fragParts.length <= 0) fragParts.add("vec3(0.0, 0.0, 0.0)");
    buf.writeln("   gl_FragColor = vec4(" + fragParts.join(" + ") + ", alpha);");
    buf.writeln("}");
    return buf.toString();
  }

  /// Gets the name for the configuration.
  String toString() => this.name;
}
