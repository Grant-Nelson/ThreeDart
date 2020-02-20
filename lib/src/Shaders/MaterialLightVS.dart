part of ThreeDart.Shaders;

/// The vertex shader writer for rendering material light.
class _materialLightVS {

  /// Writes variables for the vertex shader [buf].
  static void _writeVariables(MaterialLightConfig cfg, StringBuffer buf) {
    if (cfg.objMat)     buf.writeln("uniform mat4 objMat;");
    if (cfg.viewObjMat) buf.writeln("uniform mat4 viewObjMat;");
    buf.writeln("uniform mat4 projViewObjMat;");
    buf.writeln("");
    buf.writeln("attribute vec3 posAttr;");
    if (cfg.norm) buf.writeln("attribute vec3 normAttr;");
    if (cfg.binm) buf.writeln("attribute vec3 binmAttr;");
    buf.writeln("");
  }

  /// Writes vertex bending method for the vertex shader [buf].
  static void _writeBendSetup(MaterialLightConfig cfg, StringBuffer buf) {
    if (!cfg.bending) return;
    buf.writeln("struct BendingValue");
    buf.writeln("{");
    buf.writeln("   mat4 mat;");
    buf.writeln("};");
    buf.writeln("uniform int bendMatCount;");
    buf.writeln("uniform BendingValue bendValues[${cfg.bendMats}];");
    buf.writeln("attribute vec4 bendAttr;");
    buf.writeln("");
    buf.writeln("float weightSum;");
    buf.writeln("vec3 bendPos;");
    if (cfg.norm) buf.writeln("vec3 bendNorm;");
    if (cfg.binm) buf.writeln("vec3 bendBinm;");
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
    if (cfg.norm) buf.writeln("         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;");
    if (cfg.binm) buf.writeln("         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;");
    buf.writeln("      }");
    buf.writeln("   }");
    buf.writeln("}");
    buf.writeln("");
    buf.writeln("void setupBendData()");
    buf.writeln("{");
    buf.writeln("   bendPos = vec3(0.0, 0.0, 0.0);");
    if (cfg.norm) buf.writeln("   bendNorm = vec3(0.0, 0.0, 0.0);");
    if (cfg.binm) buf.writeln("   bendBinm = vec3(0.0, 0.0, 0.0);");
    buf.writeln("   weightSum = 0.0;");
    buf.writeln("   adjustBend(bendAttr.x);");
    buf.writeln("   adjustBend(bendAttr.y);");
    buf.writeln("   adjustBend(bendAttr.z);");
    buf.writeln("   adjustBend(bendAttr.w);");
    buf.writeln("   if(weightSum < 1.0)");
    buf.writeln("   {");
    buf.writeln("      float weight = 1.0 - weightSum;");
    buf.writeln("      bendPos += posAttr*weight;");
    if (cfg.norm) buf.writeln("      bendNorm += normAttr*weight;");
    if (cfg.binm) buf.writeln("      bendBinm += binmAttr*weight;");
    buf.writeln("   }");
    buf.writeln("   else");
    buf.writeln("   {");
    buf.writeln("      bendPos = bendPos/weightSum;");
    buf.writeln("   }");
    if (cfg.norm) buf.writeln("   bendNorm = normalize(bendNorm);");
    if (cfg.binm) buf.writeln("   bendBinm = normalize(bendBinm);");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes normal coordinates for the vertex shader [buf].
  static void _writeNormCoord(MaterialLightConfig cfg, StringBuffer buf) {
    if (!cfg.norm) return;
    buf.writeln("varying vec3 normalVec;");
    buf.writeln("");
    buf.writeln("vec3 getNorm()");
    buf.writeln("{");
    String normAttr = (cfg.bending)? "bendNorm": "normAttr";
    buf.writeln("   return normalize((viewObjMat*vec4($normAttr, 0.0)).xyz);");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes binormal coordinates for the vertex shader [buf].
  static void _writeBinmCoord(MaterialLightConfig cfg, StringBuffer buf) {
    if (!cfg.binm) return;
    buf.writeln("varying vec3 binormalVec;");
    buf.writeln("");
    buf.writeln("vec3 getBinm()");
    buf.writeln("{");
    String binmAttr = (cfg.bending)? "bendBinm": "binmAttr";
    buf.writeln("   return normalize((viewObjMat*vec4($binmAttr, 0.0)).xyz);");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes texture 2D coordinates for the vertex shader [buf].
  static void _writeTxt2DCoord(MaterialLightConfig cfg, StringBuffer buf) {
    if (!cfg.txt2D) return;
    if (cfg.txt2DMat) buf.writeln("uniform mat3 txt2DMat;");
    buf.writeln("attribute vec2 txt2DAttr;");
    buf.writeln("varying vec2 txt2D;");
    buf.writeln("");
    buf.writeln("vec2 getTxt2D()");
    buf.writeln("{");
    if (cfg.txt2DMat) buf.writeln("   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;");
    else               buf.writeln("   return txt2DAttr;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes texture Cube coordinates for the vertex shader [buf].
  static void _writeTxtCubeCoord(MaterialLightConfig cfg, StringBuffer buf) {
    if (!cfg.txtCube) return;
    if (cfg.txtCubeMat) buf.writeln("uniform mat4 txtCubeMat;");
    buf.writeln("attribute vec3 txtCubeAttr;");
    buf.writeln("varying vec3 txtCube;");
    buf.writeln("");
    buf.writeln("vec3 getTxtCube()");
    buf.writeln("{");
    if (cfg.txtCubeMat) buf.writeln("   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;");
    else                 buf.writeln("   return txtCubeAttr;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes object position for the vertex shader [buf].
  static void _writeObjPos(MaterialLightConfig cfg, StringBuffer buf) {
    if (!cfg.objPos) return;
    buf.writeln("varying vec3 objPos;");
    buf.writeln("");
    buf.writeln("vec3 getObjPos()");
    buf.writeln("{");
    String posAttr = (cfg.bending)? "bendPos": "posAttr";
    buf.writeln("   return (objMat*vec4($posAttr, 1.0)).xyz;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes view object position for the vertex shader [buf].
  static void _writeViewPos(MaterialLightConfig cfg, StringBuffer buf) {
    if (!cfg.viewPos) return;
    buf.writeln("varying vec3 viewPos;");
    buf.writeln("");
    buf.writeln("vec3 getViewPos()");
    buf.writeln("{");
    String posAttr = (cfg.bending)? "bendPos": "posAttr";
    buf.writeln("   return (viewObjMat*vec4($posAttr, 1.0)).xyz;");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes projected object position for the vertex shader [buf].
  static void _writePos(MaterialLightConfig cfg, StringBuffer buf) {
    buf.writeln("vec4 getPos()");
    buf.writeln("{");
    String posAttr = (cfg.bending)? "bendPos": "posAttr";
    buf.writeln("   return projViewObjMat*vec4($posAttr, 1.0);");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Writes the non-bending main method for the vertex shader [buf].
  static void _writeMain(MaterialLightConfig cfg, StringBuffer buf) {
    buf.writeln("void main()");
    buf.writeln("{");
    if (cfg.bending) buf.writeln("   setupBendData();");
    if (cfg.norm)    buf.writeln("   normalVec = getNorm();");
    if (cfg.binm)    buf.writeln("   binormalVec = getBinm();");
    if (cfg.txt2D)   buf.writeln("   txt2D = getTxt2D();");
    if (cfg.txtCube) buf.writeln("   txtCube = getTxtCube();");
    if (cfg.objPos)  buf.writeln("   objPos = getObjPos();");
    if (cfg.viewPos) buf.writeln("   viewPos = getViewPos();");
    buf.writeln("   gl_Position = getPos();");
    buf.writeln("}");
    buf.writeln("");
  }

  /// Creates the vertex source code for the material light shader for the given configurations.
  static String createVertexSource(MaterialLightConfig cfg) {
    StringBuffer buf = new StringBuffer();
    _writeVariables(cfg, buf);
    _writeBendSetup(cfg, buf);
    _writeNormCoord(cfg, buf);
    _writeBinmCoord(cfg, buf);
    _writeTxt2DCoord(cfg, buf);
    _writeTxtCubeCoord(cfg, buf);
    _writeObjPos(cfg, buf);
    _writeViewPos(cfg, buf);
    _writePos(cfg, buf);
    _writeMain(cfg, buf);
    return buf.toString();
  }
}
