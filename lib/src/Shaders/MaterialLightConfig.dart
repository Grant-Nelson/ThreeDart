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
  int _totalLights;
  bool _enviromental;
  bool _invViewMat;
  bool _viewObjMat;
  bool _objMat;
  bool _lights;
  bool _objPos;
  bool _viewPos;
  bool _norm;
  bool _binm;
  bool _txt2D;
  bool _txtCube;
  String _name;
  Data.VertexType _vertexType;

  MaterialLightConfig(MaterialComponentType this._emission,
    MaterialComponentType this._ambient, MaterialComponentType this._diffuse,
    MaterialComponentType this._invDiffuse, MaterialComponentType this._specular,
    MaterialComponentType this._bumpy, MaterialComponentType this._reflection,
    MaterialComponentType this._refraction, MaterialComponentType this._alpha,
    int this._dirLight, int this._pointLight, int this._spotLight,
    int this._txtDirLight, int this._txtPointLight, int this._txtSpotLight) {

    this._totalLights = this._dirLight + this._pointLight + this._spotLight +
                      this._txtDirLight + this._txtPointLight + this._txtSpotLight;
    this._enviromental = (this._reflection != MaterialComponentType.None) ||
                         (this._refraction != MaterialComponentType.None);
    this._invViewMat = this._enviromental;
    this._objMat = (this._pointLight + this._txtPointLight + this._txtDirLight +
                    this.spotLight + this.txtSpotLight) > 0;
    this._lights = ((this._ambient    != MaterialComponentType.None) ||
                    (this._diffuse    != MaterialComponentType.None) ||
                    (this._invDiffuse != MaterialComponentType.None) ||
                    (this._specular   != MaterialComponentType.None)) &&
                   (this._totalLights > 0);
    this._objPos = this._objMat;
    this._viewPos = (this._specular != MaterialComponentType.None) ||
                    this._enviromental;
    this._norm = (this._diffuse    != MaterialComponentType.None) ||
                 (this._invDiffuse != MaterialComponentType.None) ||
                 (this._specular   != MaterialComponentType.None) ||
                 (this._bumpy      != MaterialComponentType.None) ||
                 this._enviromental;
    this._binm = (this._bumpy != MaterialComponentType.None);
    this._txt2D = (this._emission   == MaterialComponentType.Texture2D) ||
                  (this._ambient    == MaterialComponentType.Texture2D) ||
                  (this._diffuse    == MaterialComponentType.Texture2D) ||
                  (this._invDiffuse == MaterialComponentType.Texture2D) ||
                  (this._specular   == MaterialComponentType.Texture2D) ||
                  (this._bumpy      == MaterialComponentType.Texture2D) ||
                  (this._reflection == MaterialComponentType.Texture2D) ||
                  (this._refraction == MaterialComponentType.Texture2D) ||
                  (this._alpha      == MaterialComponentType.Texture2D);
    this._txtCube = (this._emission   == MaterialComponentType.TextureCube) ||
                    (this._ambient    == MaterialComponentType.TextureCube) ||
                    (this._diffuse    == MaterialComponentType.TextureCube) ||
                    (this._invDiffuse == MaterialComponentType.TextureCube) ||
                    (this._specular   == MaterialComponentType.TextureCube) ||
                    (this._bumpy      == MaterialComponentType.TextureCube) ||
                    (this._reflection == MaterialComponentType.TextureCube) ||
                    (this._refraction == MaterialComponentType.TextureCube) ||
                    (this._alpha      == MaterialComponentType.TextureCube);
    this._viewObjMat = this._norm || this._binm || this._viewPos;
    this._name = this._createShaderName();
    this._vertexType = this._createVertexType();
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

  Data.VertexType _createVertexType()
  {
    Data.VertexType vertexType = Data.VertexType.Pos;
    if (this._norm) vertexType |= Data.VertexType.Norm;
    if (this._binm) vertexType |= Data.VertexType.Binm;
    if (this._txt2D) vertexType |= Data.VertexType.Txt2D;
    if (this._txtCube) vertexType |= Data.VertexType.TxtCube;
    return vertexType;
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
  int get totalLights => this._totalLights;
  bool get enviromental => this._enviromental;
  bool get invViewMat => this._invViewMat;
  bool get viewObjMat => this._viewObjMat;
  bool get objMat => this._objMat;
  bool get lights => this._lights;
  bool get objPos => this._objPos;
  bool get viewPos => this._viewPos;
  bool get norm => this._norm;
  bool get binm => this._binm;
  bool get txt2D => this._txt2D;
  bool get txtCube => this._txtCube;
  String get name => this._name;
  Data.VertexType get vertexType => this._vertexType;

  // Creates the vertex source code for the material light shader for the given configurations.
  String createVertexSource() {
    StringBuffer buf = new StringBuffer();
    if (this._objMat) buf.writeln("uniform mat4 objMat;");
    if (this._viewObjMat) buf.writeln("uniform mat4 viewObjMat;");
    buf.writeln("uniform mat4 projViewObjMat;");
    if (this._txt2D)   buf.writeln("uniform mat3 txt2DMat;");
    if (this._txtCube) buf.writeln("uniform mat4 txtCubeMat;");
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
    if (this._objPos)  buf.writeln("varying vec3 objPos;");
    if (this._viewPos) buf.writeln("varying vec3 viewPos;");
    buf.writeln("");

    buf.writeln("void main()");
    buf.writeln("{");
    if (this._norm)    buf.writeln("   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;");
    if (this._binm)    buf.writeln("   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;");
    if (this._txt2D)   buf.writeln("   txt2D = (txt2DMat*vec3(txt2DAttr, 1.0)).xy;");
    if (this._txtCube) buf.writeln("   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;");
    if (this._objPos)  buf.writeln("   objPos = (objMat*vec4(posAttr, 1.0)).xyz;");
    if (this._viewPos) buf.writeln("   viewPos = (viewObjMat*vec4(posAttr, 1.0)).xyz;");
    buf.writeln("   gl_Position = projViewObjMat*vec4(posAttr, 1.0);");
    buf.writeln("}");
    return buf.toString();
  }

  // Creates the fragmant source code for the material light shader for the given configurations.
  String createFragmentSource() {
    StringBuffer buf = new StringBuffer();
    buf.writeln("precision mediump float;");
    buf.writeln("");

    if (this._norm)    buf.writeln("varying vec3 normalVec;");
    if (this._binm)    buf.writeln("varying vec3 binormalVec;");
    if (this._txt2D)   buf.writeln("varying vec2 txt2D;");
    if (this._txtCube) buf.writeln("varying vec3 txtCube;");
    if (this._objPos)  buf.writeln("varying vec3 objPos;");
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

    if (this._invViewMat) buf.writeln("uniform mat4 invViewMat;");

    if (this._enviromental) {
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
    buf.writeln("uniform mat4 colorMat;");
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
        buf.writeln("   vec3 point;");
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

      if (this._spotLight > 0) {
        buf.writeln("struct SpotLight {");
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
        buf.writeln("uniform SpotLight spotLights[${this._spotLight}];");
        buf.writeln("");
      }

      if (this._txtDirLight > 0) {
        buf.writeln("struct TexturedDirLight {");
        buf.writeln("   vec3 objUp;");
        buf.writeln("   vec3 objRight;");
        buf.writeln("   vec3 objDir;");
        buf.writeln("   vec3 viewDir;");
        buf.writeln("   vec3 color;");
        buf.writeln("   int nullTxt;");
        buf.writeln("};");
        buf.writeln("");
        buf.writeln("uniform int txtDirLightCount;");
        buf.writeln("uniform TexturedDirLight txtDirLights[${this._txtDirLight}];");
        for (int i = 0; i < this._txtDirLight; i++)
          buf.writeln("uniform sampler2D txtDirLightsTxt2D$i;");
        buf.writeln("");
      }

      if (this._txtPointLight > 0) {
        buf.writeln("struct TexturedPointLight {");
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
        buf.writeln("uniform TexturedPointLight txtPntLights[${this._txtPointLight}];");
        for (int i = 0; i < this._txtPointLight; i++)
          buf.writeln("uniform samplerCube txtPntLightsTxtCube$i;");
        buf.writeln("");
      }

      if (this._txtSpotLight > 0) {
        buf.writeln("struct TexturedSpotLight {");
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
        buf.writeln("uniform TexturedSpotLight txtSpotLights[${this._txtSpotLight}];");
        for (int i = 0; i < this._txtSpotLight; i++)
          buf.writeln("uniform sampler2D txtSpotLightsTxt2D$i;");
        buf.writeln("");
      }
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
      buf.writeln("   if ((litClr.r < 0.001) && (litClr.g < 0.001) && (litClr.b < 0.001)) return litClr;");
      List<String> parts = new List<String>();
      if (this._ambient != MaterialComponentType.None) parts.add("ambient()");
      if (this._diffuse != MaterialComponentType.None) parts.add("diffuse(norm, litVec)");
      if (this._invDiffuse != MaterialComponentType.None) parts.add("invDiffuse(norm, litVec)");
      if (this._specular != MaterialComponentType.None) parts.add("specular(norm, litVec)");
      buf.writeln("   return litClr*(" + parts.join(" + ") + ");");
      buf.writeln("}");
      buf.writeln("");

      if (this._dirLight > 0) {
        buf.writeln("vec3 allDirLightValues(vec3 norm)");
        buf.writeln("{");
        buf.writeln("   vec3 lightAccum = vec3(0.0, 0.0, 0.0);");
        buf.writeln("   for(int i = 0; i < ${this._dirLight}; ++i)");
        buf.writeln("   {");
        buf.writeln("      if(i >= dirLightCount) break;");
        buf.writeln("      DirLight lit = dirLights[i];");
        buf.writeln("      lightAccum += lightValue(norm, lit.color, lit.viewDir);");
        buf.writeln("   }");
        buf.writeln("   return lightAccum;");
        buf.writeln("}");
        buf.writeln("");
      }

      if (this._pointLight > 0) {
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
        buf.writeln("   for(int i = 0; i < ${this._pointLight}; ++i)");
        buf.writeln("   {");
        buf.writeln("      if(i >= pntLightCount) break;");
        buf.writeln("      lightAccum += pointLightValue(norm, pntLights[i]);");
        buf.writeln("   }");
        buf.writeln("   return lightAccum;");
        buf.writeln("}");
        buf.writeln("");
      }

      if (this._spotLight > 0) {
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
        buf.writeln("   for(int i = 0; i < ${this._spotLight}; ++i)");
        buf.writeln("   {");
        buf.writeln("      if(i >= spotLightCount) break;");
        buf.writeln("      lightAccum += spotLightValue(norm, spotLights[i]);");
        buf.writeln("   }");
        buf.writeln("   return lightAccum;");
        buf.writeln("}");
        buf.writeln("");
      }

      if (this._txtDirLight > 0) {
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
        for (int i = 0; i < this._txtDirLight; ++i) {
          buf.writeln("   if(txtDirLightCount <= $i) return lightAccum;");
          buf.writeln("   lightAccum += txtDirLightValue(norm, txtDirLights[$i], txtDirLightsTxt2D$i);");
        }
        buf.writeln("   return lightAccum;");
        buf.writeln("}");
        buf.writeln("");
      }

      if (this._txtPointLight > 0) {
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
        for (int i = 0; i < this._txtPointLight; ++i) {
          buf.writeln("   if(txtPntLightCount <= $i) return lightAccum;");
          buf.writeln("   lightAccum += txtPointLightValue(norm, txtPntLights[$i], txtPntLightsTxtCube$i);");
        }
        buf.writeln("   return lightAccum;");
        buf.writeln("}");
        buf.writeln("");
      }

      if (this._txtSpotLight > 0) {
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
        for (int i = 0; i < this._txtSpotLight; ++i) {
          buf.writeln("   if(txtSpotLightCount <= $i) return lightAccum;");
          buf.writeln("   lightAccum += txtSpotLightValue(norm, txtSpotLights[$i], txtSpotLightsTxt2D$i);");
        }
        buf.writeln("   return lightAccum;");
        buf.writeln("}");
        buf.writeln("");
      }
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
      if (this._dirLight > 0)      buf.writeln("   lightAccum += allDirLightValues(norm);");
      if (this._pointLight > 0)    buf.writeln("   lightAccum += allPointLightValues(norm);");
      if (this._spotLight > 0)     buf.writeln("   lightAccum += allSpotLightValues(norm);");
      if (this._txtDirLight > 0)   buf.writeln("   lightAccum += allTxtDirLightValues(norm);");
      if (this._txtPointLight > 0) buf.writeln("   lightAccum += allTxtPointLightValues(norm);");
      if (this._txtSpotLight > 0)  buf.writeln("   lightAccum += allTxtSpotLightValues(norm);");
    }
    if (this._emission != MaterialComponentType.None) fragParts.add("emission()");
    if (this._reflection != MaterialComponentType.None) fragParts.add("reflect(refl)");
    if (this._refraction != MaterialComponentType.None) fragParts.add("refract(refl)");
    if (fragParts.length <= 0) fragParts.add("vec3(0.0, 0.0, 0.0)");
    buf.writeln("   gl_FragColor = colorMat*vec4(" + fragParts.join(" + ") + ", alpha);");
    buf.writeln("}");
    return buf.toString();
  }

  /// Gets the name for the configuration.
  String toString() => this.name;
}
