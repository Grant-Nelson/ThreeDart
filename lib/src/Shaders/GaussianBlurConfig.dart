part of ThreeDart.Shaders;

/// The shader configuration for a gaussian blur.
class GaussianBlurConfig {
  
  /// Indicates blur source type is a texture instead of a single solid value.
  final bool blurTxt;
  
  /// The name of this shader configuration.
  final String name;
  
  /// Creates a new gaussian blur configuration with all final values
  /// calculated by the other GaussianBlurConfig constructor.
  GaussianBlurConfig._(bool this.blurTxt, String this.name);

  /// Creates a new gaussian blur configuration.
  /// The configuration for the gaussian blur shader.
  factory GaussianBlurConfig(bool blurTxt) {
    StringBuffer buf = new StringBuffer();
    buf.write("GaussianBlur_");
    buf.write(blurTxt? "1": "0");
    String name = buf.toString();
    return new GaussianBlurConfig._(blurTxt, name);
  }

  /// Creates the vertex source code for the gaussian blur shader for the given configurations.
  String createVertexSource() {
    StringBuffer buf = new StringBuffer();
    buf.writeln("uniform mat4 projViewObjMat;");
    buf.writeln("uniform mat3 txt2DMat;");
    buf.writeln("");
    buf.writeln("attribute vec3 posAttr;");
    buf.writeln("attribute vec2 txtAttr;");
    buf.writeln("");
    buf.writeln("varying vec2 txt2D;");
    buf.writeln("");
    buf.writeln("void main()");
    buf.writeln("{");
    buf.writeln("  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;");
    buf.writeln("  gl_Position = projViewObjMat*vec4(posAttr, 1.0);");
    buf.writeln("}");
    return buf.toString();
  }
  
  /// Creates the fragmant source code for the gaussian blur shader for the given configurations.
  /// 
  /// This blur method is based off of Daniel Rákos, "Efficient Gaussian blur with linear sampling",
  /// http://rastergrid.com/blog/2010/09/efficient-gaussian-blur-with-linear-sampling/
  String createFragmentSource() {
    StringBuffer buf = new StringBuffer();
    buf.writeln("precision mediump float;");
    buf.writeln("");
    buf.writeln("uniform sampler2D colorTxt;");
    buf.writeln("uniform int nullColorTxt;");
    if (this.blurTxt) {
      buf.writeln("uniform sampler2D blurTxt;");
      buf.writeln("uniform int nullBlurTxt;");
      buf.writeln("uniform vec4 blurAdj;");
    } else {
      buf.writeln("uniform float blurValue;");
    }
    buf.writeln("uniform vec2 blurScale;");
    buf.writeln("");
    buf.writeln("varying vec2 txt2D;");
    buf.writeln("");

    buf.writeln("vec4 blur5()");
    buf.writeln("{");
    buf.writeln("  vec4 color = texture2D(colorTxt, txt2D) * 0.294117647;");
    buf.writeln("");
    buf.writeln("  vec2 offset = vec2(1.333333333) * blurScale;");
    buf.writeln("  color += texture2D(colorTxt, txt2D + offset) * 0.352941176;");
    buf.writeln("  color += texture2D(colorTxt, txt2D - offset) * 0.352941176;");
    buf.writeln("");
    buf.writeln("  return color; ");
    buf.writeln("}");
    buf.writeln("");

    buf.writeln("vec4 blur9()");
    buf.writeln("{");
    buf.writeln("  vec4 color = texture2D(colorTxt, txt2D) * 0.227027027;");
    buf.writeln("");
    buf.writeln("  vec2 offset = vec2(1.3846153846) * blurScale;");
    buf.writeln("  color += texture2D(colorTxt, txt2D + offset) * 0.316216216;");
    buf.writeln("  color += texture2D(colorTxt, txt2D - offset) * 0.316216216;");
    buf.writeln("");
    buf.writeln("  offset = vec2(3.2307692308) * blurScale;");
    buf.writeln("  color += texture2D(colorTxt, txt2D + offset) * 0.070270270;");
    buf.writeln("  color += texture2D(colorTxt, txt2D - offset) * 0.070270270;");
    buf.writeln("");
    buf.writeln("  return color; ");
    buf.writeln("}");
    buf.writeln("");

    buf.writeln("vec4 blur13()");
    buf.writeln("{");
    buf.writeln("  vec4 color = texture2D(colorTxt, txt2D) * 0.196482550;");
    buf.writeln("");
    buf.writeln("  vec2 offset = vec2(1.411764706) * blurScale;");
    buf.writeln("  color += texture2D(colorTxt, txt2D + offset) * 0.296906965;");
    buf.writeln("  color += texture2D(colorTxt, txt2D - offset) * 0.296906965;");
    buf.writeln("");
    buf.writeln("  offset = vec2(3.294117647) * blurScale;");
    buf.writeln("  color += texture2D(colorTxt, txt2D + offset) * 0.094470398;");
    buf.writeln("  color += texture2D(colorTxt, txt2D - offset) * 0.094470398;");
    buf.writeln("");
    buf.writeln("  offset = vec2(5.176470588) * blurScale;");
    buf.writeln("  color += texture2D(colorTxt, txt2D + offset) * 0.010381362;");
    buf.writeln("  color += texture2D(colorTxt, txt2D - offset) * 0.010381362;");
    buf.writeln("");
    buf.writeln("  return color; ");
    buf.writeln("}");
    buf.writeln("");
    
    buf.writeln("void main()");
    buf.writeln("{");
    if (this.blurTxt)
      buf.writeln("   if((nullColorTxt > 0) || (nullBlurTxt > 0))");
    else buf.writeln("   if(nullColorTxt > 0)");
    buf.writeln("   {");
    buf.writeln("      gl_FragColor = vec4(1.0);");
    buf.writeln("      return;");
    buf.writeln("   }");
    buf.writeln("");
    if (this.blurTxt) {
      buf.writeln("   float blurValue = dot(texture2D(blurTxt, txt2D), blurAdj);");
    }
    buf.writeln("   float blurOffset = abs(blurValue);");
    buf.writeln("");
    buf.writeln("   if(blurOffset >= 0.75)");
    buf.writeln("   {");
    buf.writeln("      gl_FragColor = blur13();");
    buf.writeln("   }");
    buf.writeln("   else if(blurOffset >= 0.5)");
    buf.writeln("   {");
    buf.writeln("      gl_FragColor = blur9();");
    buf.writeln("   }");
    buf.writeln("   else if(blurOffset >= 0.25)");
    buf.writeln("   {");
    buf.writeln("      gl_FragColor = blur5();");
    buf.writeln("   }");
    buf.writeln("   else");
    buf.writeln("   {");
    buf.writeln("      gl_FragColor = texture2D(colorTxt, txt2D);");
    buf.writeln("   }");
    buf.writeln("}");
    return buf.toString();
  }

  /// Gets the name for the configuration.
  String toString() => this.name;
}