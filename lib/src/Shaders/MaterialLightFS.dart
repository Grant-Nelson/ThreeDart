part of ThreeDart.Shaders;

/// The fragment shader writer for rendering material light.
class _materialLightFS {

  /// Writes the typical variables for the given source type
  /// with the given [name] to the fragment shader [buf].
  static void _fragmentSrcTypeVars(StringBuffer buf, ColorSourceType srcType, String name) {
    if (srcType.hasSolid)
      buf.writeln("uniform vec3 ${name}Clr;");
    if (srcType.hasTxt2D)
      buf.writeln("uniform sampler2D ${name}Txt;");
    else if (srcType.hasTxtCube)
      buf.writeln("uniform samplerCube ${name}Txt;");
  }

  /// Writes the basics for a color source in a vertex fragment.
  static void _writeColorSource(StringBuffer buf, ColorSourceType srcType, String name) {
    _fragmentSrcTypeVars(buf, srcType, name);
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
  static void _writeEmission(MaterialLightConfig cfg, StringBuffer buf) {
    if (cfg.emission.hasNone) return;
    buf.writeln("// === Emission ===");
    buf.writeln("");
    _fragmentSrcTypeVars(buf, cfg.emission, "emission");
    buf.writeln("");
    buf.writeln("vec3 emissionColor()");
    buf.writeln("{");
    if (cfg.emission.hasSolid) {
      if (cfg.emission.hasTxt2D)
        buf.writeln("   return emissionClr*texture2D(emissionTxt, txt2D).rgb;");
      else if (cfg.emission.hasTxtCube)
        buf.writeln("   return emissionClr*textureCube(emissionTxt, txtCube).rgb;");
      else
        buf.writeln("   return emissionClr;");
    } else if (cfg.emission.hasTxt2D)
        buf.writeln("   return texture2D(emissionTxt, txt2D).rgb;");
    else if (cfg.emission.hasTxtCube)
        buf.writeln("   return textureCube(emissionTxt, txtCube).rgb;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the ambient material component to the fragment shader [buf].
  static void _writeAmbient(MaterialLightConfig cfg, StringBuffer buf) {
    if (cfg.ambient.hasNone) return;
    buf.writeln("// === Ambient ===");
    buf.writeln("");
    _writeColorSource(buf, cfg.ambient, "ambient");
    buf.writeln("");
  }

  /// Writes the diffuse material component to the fragment shader [buf].
  static void _writeDiffuse(MaterialLightConfig cfg, StringBuffer buf) {
    if (cfg.diffuse.hasNone) return;
    buf.writeln("// === Diffuse ===");
    buf.writeln("");
    _writeColorSource(buf, cfg.diffuse, "diffuse");
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
  static void _writeInvDiffuse(MaterialLightConfig cfg, StringBuffer buf) {
    if (cfg.invDiffuse.hasNone) return;
    buf.writeln("// === Inverse Diffuse ===");
    buf.writeln("");
    _writeColorSource(buf, cfg.invDiffuse, "invDiffuse");
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
  static void _writeSpecular(MaterialLightConfig cfg, StringBuffer buf) {
    if (cfg.specular.hasNone) return;
    buf.writeln("// === Specular ===");
    buf.writeln("");
    buf.writeln("uniform float shininess;");
    _writeColorSource(buf, cfg.specular, "specular");
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
  static void _writeNormal(MaterialLightConfig cfg, StringBuffer buf) {
    if (!cfg.norm) return;
    buf.writeln("// === Normal ===");
    buf.writeln("");
    if (cfg.bumpy.hasTxt2D) {
      buf.writeln("uniform sampler2D bumpTxt;");
      buf.writeln("");
    } else if (cfg.bumpy.hasTxtCube) {
      buf.writeln("uniform samplerCube bumpTxt;");
      buf.writeln("");
    }
    buf.writeln("vec3 normal()");
    buf.writeln("{");
    if (cfg.bumpy.hasNone || cfg.bumpy.hasSolid) {
        buf.writeln("   return normalize(normalVec);");
    } else {
      if (cfg.bumpy.hasTxt2D) {
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
  static void _writeReflection(MaterialLightConfig cfg, StringBuffer buf) {
    if (cfg.reflection.hasNone) return;
    buf.writeln("// === Reflection ===");
    buf.writeln("");
    _fragmentSrcTypeVars(buf, cfg.reflection, "reflect");
    buf.writeln("");
    buf.writeln("vec3 reflect(vec3 refl)");
    buf.writeln("{");

    if (cfg.reflection.hasSolid) {
      if (cfg.reflection.hasTxt2D)
        buf.writeln("   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;");
      else if (cfg.reflection.hasTxtCube)
        buf.writeln("   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;");
      else
        buf.writeln("   vec3 scalar = reflectClr;");
    } else if (cfg.reflection.hasTxt2D)
        buf.writeln("   vec3 scalar = texture2D(reflectTxt, txt2D).rgb;");
    else if (cfg.reflection.hasTxtCube)
        buf.writeln("   vec3 scalar = textureCube(reflectTxt, txtCube).rgb;");

    buf.writeln("   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));");
    buf.writeln("   return scalar*textureCube(envSampler, invRefl).rgb;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the refraction calculation to the fragment shader [buf].
  static void _writeRefraction(MaterialLightConfig cfg, StringBuffer buf) {
    if (cfg.refraction.hasNone) return;
    buf.writeln("// === Refraction ===");
    buf.writeln("");
    _fragmentSrcTypeVars(buf, cfg.refraction, "refract");
    buf.writeln("uniform float refraction;");
    buf.writeln("");
    buf.writeln("vec3 refract(vec3 refl)");
    buf.writeln("{");

    if (cfg.refraction.hasSolid) {
      if (cfg.refraction.hasTxt2D)
        buf.writeln("   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;");
      else if (cfg.refraction.hasTxtCube)
        buf.writeln("   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;");
      else
        buf.writeln("   vec3 scalar = refractClr;");
    } else if (cfg.refraction.hasTxt2D)
        buf.writeln("   vec3 scalar = texture2D(refractTxt, txt2D).rgb;");
    else if (cfg.refraction.hasTxtCube)
        buf.writeln("   vec3 scalar = textureCube(refractTxt, txtCube).rgb;");

    buf.writeln("   vec3 refr = mix(-refl, viewPos, refraction);");
    buf.writeln("   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));");
    buf.writeln("   return scalar*textureCube(envSampler, invRefr).rgb;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the alpha component to the fragment shader [buf].
  static void _writeAlpha(MaterialLightConfig cfg, StringBuffer buf) {
    buf.writeln("// === Alpha ===");
    buf.writeln("");

    if (cfg.alpha.hasSolid)
      buf.writeln("uniform float alpha;");
    if (cfg.alpha.hasTxt2D)
      buf.writeln("uniform sampler2D alphaTxt;");
    if (cfg.alpha.hasTxtCube)
      buf.writeln("uniform samplerCube alphaTxt;");

    buf.writeln("float alphaValue()");
    buf.writeln("{");

    if (cfg.alpha.hasNone)
      buf.writeln("   return 1.0;");
    else if (cfg.alpha.hasTxt2D || cfg.alpha.hasTxtCube) {
      if (cfg.alpha.hasSolid) {
        if (cfg.alpha.hasTxt2D)
          buf.writeln("   float a = alpha*texture2D(alphaTxt, txt2D).a;");
        else if (cfg.alpha.hasTxtCube)
          buf.writeln("   float a = alpha*textureCube(alphaTxt, txtCube).a;");
      } else if (cfg.alpha.hasTxt2D)
        buf.writeln("   float a = texture2D(alphaTxt, txt2D).a;");
      else if (cfg.alpha.hasTxtCube)
        buf.writeln("   float a = textureCube(alphaTxt, txtCube).a;");
      buf.writeln("   if (a <= 0.000001) discard;");
      buf.writeln("   return a;");
    } else if (cfg.alpha.hasSolid)
      buf.writeln("   return alpha;");

    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the directional lights to the fragment shader [buf].
  static void _writeDirLight(MaterialLightConfig cfg, StringBuffer buf) {
    if (cfg.dirLight <= 0) return;
    buf.writeln("// === Directional Light ===");
    buf.writeln("");
    buf.writeln("struct DirLight");
    buf.writeln("{");
    buf.writeln("   vec3 viewDir;");
    buf.writeln("   vec3 color;");
    buf.writeln("};");
    buf.writeln("");
    buf.writeln("uniform int dirLightCount;");
    buf.writeln("uniform DirLight dirLights[${cfg.dirLight}];");
    buf.writeln("");
    buf.writeln("vec3 allDirLightValues(vec3 norm)");
    buf.writeln("{");
    buf.writeln("   vec3 lightAccum = vec3(0.0, 0.0, 0.0);");
    buf.writeln("   for(int i = 0; i < ${cfg.dirLight}; ++i)");
    buf.writeln("   {");
    buf.writeln("      if(i >= dirLightCount) break;");
    buf.writeln("      DirLight lit = dirLights[i];");
    buf.writeln("      lightAccum += lightValue(norm, lit.color, lit.viewDir);");
    buf.writeln("   }");
    buf.writeln("   return lightAccum;");
    buf.writeln("}");
    buf.writeln("");
  }
  
  /// Writes the texture directional lights to the fragment shader [buf].
  static void _writeTxtDirLight(MaterialLightConfig cfg, StringBuffer buf) {
    if (cfg.txtDirLight <= 0) return;
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
    buf.writeln("uniform TexturedDirLight txtDirLights[${cfg.txtDirLight}];");
    for (int i = 0; i < cfg.txtDirLight; i++)
      buf.writeln("uniform sampler2D txtDirLightsTxt2D$i;");
    buf.writeln("");
    buf.writeln("vec3 txtDirLightValue(vec3 norm, TexturedDirLight lit, sampler2D txt2D)");
    buf.writeln("{");
    buf.writeln("   vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);");
    buf.writeln("   float tu = dot(offset, lit.objUp);");
    buf.writeln("   float tv = dot(offset, lit.objRight);");
    buf.writeln("   vec2 txtLoc = vec2(tu, tv);");
    buf.writeln("   vec3 color = lit.color*texture2D(txt2D, txtLoc).xyz;");
    buf.writeln("   return lightValue(norm, color, lit.viewDir);");
    buf.writeln("}");
    buf.writeln("");
    buf.writeln("vec3 allTxtDirLightValues(vec3 norm)");
    buf.writeln("{");
    buf.writeln("   vec3 lightAccum = vec3(0.0, 0.0, 0.0);");
    for (int i = 0; i < cfg.txtDirLight; ++i) {
      buf.writeln("   if(txtDirLightCount <= $i) return lightAccum;");
      buf.writeln("   lightAccum += txtDirLightValue(norm, txtDirLights[$i], txtDirLightsTxt2D$i);");
    }
    buf.writeln("   return lightAccum;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the point lights to the fragment shader [buf].
  static void _writePointLight(MaterialLightConfig cfg, StringBuffer buf) {
    if (cfg.pointLight <= 0) return;
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
    buf.writeln("uniform PointLight pntLights[${cfg.pointLight}];");
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
    buf.writeln("   for(int i = 0; i < ${cfg.pointLight}; ++i)");
    buf.writeln("   {");
    buf.writeln("      if(i >= pntLightCount) break;");
    buf.writeln("      lightAccum += pointLightValue(norm, pntLights[i]);");
    buf.writeln("   }");
    buf.writeln("   return lightAccum;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the texture point lights to the fragment shader [buf].
  static void _writeTxtPointLight(MaterialLightConfig cfg, StringBuffer buf) {
    if (cfg.txtPointLight <= 0) return;
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
    buf.writeln("uniform TexturedPointLight txtPntLights[${cfg.txtPointLight}];");
    for (int i = 0; i < cfg.txtPointLight; i++)
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
    for (int i = 0; i < cfg.txtPointLight; ++i) {
      buf.writeln("   if(txtPntLightCount <= $i) return lightAccum;");
      buf.writeln("   lightAccum += txtPointLightValue(norm, txtPntLights[$i], txtPntLightsTxtCube$i);");
    }
    buf.writeln("   return lightAccum;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the spot lights to the fragment shader [buf].
  static void _writeSpotLight(SpotLightConfig light, StringBuffer buf) {
    if (light.lightCount <= 0) return;
    final String name = light.toString();
    final String title = toTitleCase(name);

    buf.writeln("// === $title ===");
    buf.writeln("");
    buf.writeln("struct $title");
    buf.writeln("{");
    buf.writeln("   vec3 objPnt;");
    buf.writeln("   vec3 objDir;");
    buf.writeln("   vec3 viewPnt;");
    buf.writeln("   vec3 color;");
    if (light.hasTexture) {
      buf.writeln("   vec3 objUp;");
      buf.writeln("   vec3 objRight;");
      buf.writeln("   float tuScalar;");
      buf.writeln("   float tvScalar;");
    }
    if (light.shadowTexture)
      buf.writeln("   vec4 shadowAdj;");
    if (light.hasCutOff) {
      buf.writeln("   float cutoff;");
      buf.writeln("   float coneAngle;");
    }
    if (light.hasAttenuation) {
      buf.writeln("   float att0;");
      buf.writeln("   float att1;");
      buf.writeln("   float att2;");
    }
    buf.writeln("};");
    buf.writeln("");
    buf.writeln("uniform int ${name}Count;");
    buf.writeln("uniform $title ${name}s[${light.lightCount}];");
    for (int i = 0; i < light.lightCount; i++) {
      if (light.colorTexture)
        buf.writeln("uniform sampler2D ${name}sTexture2D$i;");
      if (light.shadowTexture)
        buf.writeln("uniform sampler2D ${name}sShadow2D$i;");
    }
    buf.writeln("");

    String params = "";
    if (light.colorTexture)  params += ", sampler2D txt2D";
    if (light.shadowTexture) params += ", sampler2D shadow2D";
    buf.writeln("vec3 ${name}Value(vec3 norm, $title lit$params)");
    buf.writeln("{");
    buf.writeln("   vec3 dir = objPos - lit.objPnt;");
    if (light.hasDist)
      buf.writeln("   float dist = length(dir);");
    if (light.hasAttenuation) {
      buf.writeln("   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);");
      buf.writeln("   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);");
    }
    buf.writeln("   vec3 normDir = normalize(dir);");
    buf.writeln("   float zScale = dot(normDir, lit.objDir);");
    buf.writeln("   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);");
    if (light.hasCutOff) {
      buf.writeln("   float angle = acos(zScale);");
      buf.writeln("   float scale = (lit.cutoff-angle) / (lit.cutoff-lit.coneAngle);");
      buf.writeln("   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);");
      buf.writeln("   if(scale >= 1.0) scale = 1.0;");
    }
    if (light.hasTexture) {
      buf.writeln("   normDir = normDir / zScale;");
      buf.writeln("   float tu = 0.5 - dot(normDir, lit.objRight)*lit.tuScalar;");
      buf.writeln("   if((tu < 0.0) || (tu > 1.0)) return vec3(0.0, 0.0, 0.0);");
      buf.writeln("   float tv = dot(normDir, lit.objUp)*lit.tvScalar + 0.5;");
      buf.writeln("   if((tv < 0.0) || (tv > 1.0)) return vec3(0.0, 0.0, 0.0);");
      buf.writeln("   vec2 txtLoc = vec2(tu, tv);");
    }
    if (light.shadowTexture) {
      buf.writeln("   float depth = dot(texture2D(shadow2D, txtLoc), lit.shadowAdj);");
      buf.writeln("   attenuation = 1.0;");
      buf.writeln("   scale = depth;");
      //buf.writeln("   depth = depth*9.0 + 1.0;"); // TODO: Fix scaling
      //buf.writeln("   if(depth > dist) return vec3(0.0, 0.0, 0.0);");
    }

    List<String> parts = new List<String>();
    parts.add("lit.color");
    if (light.hasAttenuation) parts.add("attenuation");
    if (light.hasCutOff)      parts.add("scale");
    if (light.colorTexture)   parts.add("texture2D(txt2D, txtLoc).rgb");
    buf.writeln("   vec3 color = ${parts.join(" * ")};");
    buf.writeln("   return lightValue(norm, color, normalize(viewPos - lit.viewPnt));");
    buf.writeln("}");
    buf.writeln("");

    buf.writeln("vec3 all${title}Values(vec3 norm)");
    buf.writeln("{");
    buf.writeln("   vec3 lightAccum = vec3(0.0, 0.0, 0.0);");
    if (light.hasTexture) {
      for (int i = 0; i < light.lightCount; ++i) {
        buf.writeln("   if(${name}Count <= $i) return lightAccum;");
        String params = "";
        if (light.colorTexture)  params += ", ${name}sTexture2D$i";
        if (light.shadowTexture) params += ", ${name}sShadow2D$i";
        buf.writeln("   lightAccum += ${name}Value(norm, ${name}s[$i]$params);");
      }
    } else {
      buf.writeln("   for(int i = 0; i < ${light.lightCount}; ++i)");
      buf.writeln("   {");
      buf.writeln("      if(i >= ${name}Count) break;");
      buf.writeln("      lightAccum += ${name}Value(norm, ${name}s[i]);");
      buf.writeln("   }");
    }
    buf.writeln("   return lightAccum;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the no lights code to the fragment shader [buf].
  static void _writeNoLight(MaterialLightConfig cfg, StringBuffer buf) {
    if (cfg.totalLights > 0) return;
    buf.writeln("// === No Lights ===");
    buf.writeln("");
    buf.writeln("vec3 nonLightValues(vec3 norm)");
    buf.writeln("{");
    buf.writeln("   return lightValue(norm, vec3(1.0, 1.0, 1.0), vec3(0.0, 0.0, 1.0));");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Creates the fragmant source code for the material light shader for the given configurations.
  static String createFragmentSource(MaterialLightConfig cfg) {
    StringBuffer buf = new StringBuffer();
    buf.writeln("precision mediump float;");
    buf.writeln("");

    if (cfg.norm)    buf.writeln("varying vec3 normalVec;");
    if (cfg.binm)    buf.writeln("varying vec3 binormalVec;");
    if (cfg.txt2D)   buf.writeln("varying vec2 txt2D;");
    if (cfg.txtCube) buf.writeln("varying vec3 txtCube;");
    if (cfg.objPos)  buf.writeln("varying vec3 objPos;");
    if (cfg.viewPos) buf.writeln("varying vec3 viewPos;");
    buf.writeln("");

    if (cfg.colorMat)   buf.writeln("uniform mat4 colorMat;");
    if (cfg.invViewMat) buf.writeln("uniform mat4 invViewMat;");
    if (cfg.fog) {
      buf.writeln("uniform vec4 fogColor;");
      buf.writeln("uniform float fogStop;");
      buf.writeln("uniform float fogWidth;");
    }
    buf.writeln("");

    _writeEmission(cfg, buf);
    _writeAmbient(cfg, buf);
    _writeDiffuse(cfg, buf);
    _writeInvDiffuse(cfg, buf);
    _writeSpecular(cfg, buf);
    if (cfg.enviromental) {
      buf.writeln("// === Enviromental ===");
      buf.writeln("");
      buf.writeln("uniform samplerCube envSampler;");
      buf.writeln("");
      _writeReflection(cfg, buf);
      _writeRefraction(cfg, buf);
    }
    _writeNormal(cfg, buf);
    _writeAlpha(cfg, buf);

    if (cfg.lights) {
      buf.writeln("// === Lighting ===");
      buf.writeln("");
      buf.writeln("vec3 lightValue(vec3 norm, vec3 litClr, vec3 litVec)");
      buf.writeln("{");
      buf.writeln("   if ((litClr.r < 0.001) && (litClr.g < 0.001) && (litClr.b < 0.001)) return litClr;");
      List<String> parts = new List<String>();
      if (cfg.ambient.hasAny)    parts.add("ambientColor");
      if (cfg.diffuse.hasAny)    parts.add("diffuse(norm, litVec)");
      if (cfg.invDiffuse.hasAny) parts.add("invDiffuse(norm, litVec)");
      if (cfg.specular.hasAny)   parts.add("specular(norm, litVec)");
      buf.writeln("   return litClr*(${parts.join(" + ")});");
      buf.writeln("}");
      buf.writeln("");

      _writeDirLight(cfg, buf);
      _writePointLight(cfg, buf);
      
      for (SpotLightConfig light in cfg.spotLights)
        _writeSpotLight(light, buf);

      _writeTxtDirLight(cfg, buf);
      _writeTxtPointLight(cfg, buf);
      _writeNoLight(cfg, buf);
    }

    buf.writeln("// === Main ===");
    buf.writeln("");
    buf.writeln("void main()");
    buf.writeln("{");
    buf.writeln("   float alpha = alphaValue();");
    if (cfg.norm) buf.writeln("   vec3 norm = normal();");
    if (cfg.enviromental) {
      buf.writeln("   vec3 refl = reflect(normalize(viewPos), norm);");
    }
    List<String> fragParts = new List<String>();
    if (cfg.lights) {
      buf.writeln("   vec3 lightAccum = vec3(0.0, 0.0, 0.0);");
      fragParts.add("lightAccum");
      if (cfg.ambient.hasAny)    buf.writeln("   setAmbientColor();");
      if (cfg.diffuse.hasAny)    buf.writeln("   setDiffuseColor();");
      if (cfg.invDiffuse.hasAny) buf.writeln("   setInvDiffuseColor();");
      if (cfg.specular.hasAny)   buf.writeln("   setSpecularColor();");
      if (cfg.dirLight      > 0) buf.writeln("   lightAccum += allDirLightValues(norm);");
      if (cfg.pointLight    > 0) buf.writeln("   lightAccum += allPointLightValues(norm);");

      for (SpotLightConfig light in cfg.spotLights) {
        String title = toTitleCase(light.toString());
        buf.writeln("   lightAccum += all${title}Values(norm);");
      }

      if (cfg.txtDirLight   > 0) buf.writeln("   lightAccum += allTxtDirLightValues(norm);");
      if (cfg.txtPointLight > 0) buf.writeln("   lightAccum += allTxtPointLightValues(norm);");
      if (cfg.totalLights  <= 0) buf.writeln("   lightAccum += nonLightValues(norm);");
    }
    if (cfg.emission.hasAny)   fragParts.add("emissionColor()");
    if (cfg.reflection.hasAny) fragParts.add("reflect(refl)");
    if (cfg.refraction.hasAny) fragParts.add("refract(refl)");
    if (fragParts.length <= 0) fragParts.add("vec3(0.0, 0.0, 0.0)");
    buf.writeln("   vec4 objClr = vec4(" + fragParts.join(" + ") + ", alpha);");
    if (cfg.colorMat) buf.writeln("   objClr = colorMat*objClr;");
    if (cfg.fog) {
      buf.writeln("   float fogFactor = (viewPos.z-fogStop) / fogWidth;");
      buf.writeln("   objClr = mix(fogColor, objClr, clamp(fogFactor, 0.0, 1.0));");
    }
    buf.writeln("   gl_FragColor = objClr;");
    buf.writeln("}");
    return buf.toString();
  }
}
