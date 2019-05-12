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
  String createFragmentSource() {
    StringBuffer buf = new StringBuffer();
    buf.writeln("precision mediump float;");
    buf.writeln("");
    buf.writeln("#define MAX_BLUR_RANGE 10.0");
    buf.writeln("#define BLUR_STEP 0.3");
    buf.writeln("");

    buf.writeln("uniform sampler2D colorTxt;");
    buf.writeln("uniform int nullColorTxt;");
    buf.writeln("uniform float width;");
    buf.writeln("uniform float height;");
    buf.writeln("");

    if (this.blurTxt) {
      buf.writeln("uniform sampler2D blurTxt;");
      buf.writeln("uniform int nullBlurTxt;");
      buf.writeln("uniform float highBlur;");
      buf.writeln("uniform float lowBlur;");
    } else {
      buf.writeln("uniform float blurValue;");
    }
    buf.writeln("");

    buf.writeln("varying vec2 txt2D;");
    buf.writeln("");
    buf.writeln("float div;");
    buf.writeln("vec4 color;");
    buf.writeln("");

    if (this.blurTxt)
      buf.writeln("void offsetColor(float baseBlur, float tu, float tv)");
    else buf.writeln("void offsetColor(float tu, float tv)");
    buf.writeln("{");
    buf.writeln("   vec2 txtOffset = vec2(txt2D.x + tu/width,");
    buf.writeln("                         txt2D.y + tv/height);");
    buf.writeln("   div += 1.0;");
    buf.writeln("   color += texture2D(colorTxt, txtOffset);");
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
    buf.writeln("   color = texture2D(colorTxt, txt2D);");
    buf.writeln("");

    if (this.blurTxt) {
      buf.writeln("   float baseBlur = texture2D(blurTxt, txt2D).r;");
      buf.writeln("   float blurValue = mix(lowBlur, highBlur, baseBlur);");
      buf.writeln("   blurValue = abs(blurValue);");
      buf.writeln("");
    }

    /// TODO: Update using the mathmatics from
    /// http://rastergrid.com/blog/2010/09/efficient-gaussian-blur-with-linear-sampling/
    /// instead of using for-loops
    buf.writeln("   div = 1.0;");
    buf.writeln("   if(blurValue >= 1.0)");
    buf.writeln("   {");
    buf.writeln("      for(float x=0.0; x<MAX_BLUR_RANGE; x+=BLUR_STEP)");
    buf.writeln("      {");
    buf.writeln("         if(x > blurValue) break;");
    buf.writeln("         for(float y=0.0; y<MAX_BLUR_RANGE; y+=BLUR_STEP)");
    buf.writeln("         {");
    buf.writeln("            if(y > blurValue) break;");
    if (this.blurTxt) {
      buf.writeln("            offsetColor(baseBlur,  x,  y);");
      buf.writeln("            offsetColor(baseBlur,  x, -y);");
      buf.writeln("            offsetColor(baseBlur, -x,  y);");
      buf.writeln("            offsetColor(baseBlur, -x, -y);");
    } else {
      buf.writeln("            offsetColor( x,  y);");
      buf.writeln("            offsetColor( x, -y);");
      buf.writeln("            offsetColor(-x,  y);");
      buf.writeln("            offsetColor(-x, -y);");
    }
    buf.writeln("         }");
    buf.writeln("      }");
    buf.writeln("   }");
    buf.writeln("   gl_FragColor = color / div;");
    buf.writeln("}");
    return buf.toString();
  }

  /// Gets the name for the configuration.
  String toString() => this.name;
}