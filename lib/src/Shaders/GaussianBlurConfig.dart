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

  /// Adds a blur method to the given buffer with the given data.
  void _addBlurMethod(StringBuffer buf, int blurSize, List<double> offsets, List<double> weights) {
    int count = offsets.length;
    bool hasCenter = Math.Comparer.equals(offsets[0], 0.0000);
    double centerWeight = 0.0;
    if (hasCenter) {
      centerWeight = weights[0];
      weights = weights.sublist(1);
      offsets = offsets.sublist(1);
      count--;
    }

    buf.writeln("vec4 blur${blurSize}()");
    buf.writeln("{");
    if (hasCenter)
      buf.writeln("  vec4 color = texture2D(colorTxt, txt2D)*$centerWeight;");
    else buf.writeln("  vec4 color = vec4(0.0);");
    buf.writeln("  vec2 offset;");
  	for (int i = 0; i < count; ++i) {
      buf.writeln("  offset = blurScale * ${offsets[i]};");
      buf.writeln("  color += texture2D(colorTxt, txt2D + offset) * ${weights[i]};");
      buf.writeln("  color += texture2D(colorTxt, txt2D - offset) * ${weights[i]};");
    }
    buf.writeln("  return color; ");
    buf.writeln("}");
    buf.writeln("");
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
    if (this.blurTxt) {
      buf.writeln("uniform sampler2D blurTxt;");
      buf.writeln("uniform vec4 blurAdj;");
    } else {
      buf.writeln("uniform float blurValue;");
    }
    buf.writeln("uniform vec2 blurScale;");
    buf.writeln("");
    buf.writeln("varying vec2 txt2D;");
    buf.writeln("");

    _addBlurMethod(buf, 3, [0.75000], [0.50000]);
    _addBlurMethod(buf, 6, [0.42857,  2.14286], [0.41667,  0.08333]);
    _addBlurMethod(buf, 9, [0.00000,  1.80000], [0.51220,  0.24390]);
    _addBlurMethod(buf, 12, [0.00000,  1.38462,  3.23077], [0.22703,  0.31622,  0.07027]);
    _addBlurMethod(buf, 15, [0.93750,  2.81250], [0.36184,  0.13816]);
    _addBlurMethod(buf, 18, [0.47368,  2.36842,  4.26316], [0.29916,  0.16318,  0.03766]);

    buf.writeln("void main()");
    buf.writeln("{");
    if (this.blurTxt)
      buf.writeln("   float blurValue = dot(texture2D(blurTxt, txt2D), blurAdj);");
    buf.writeln("   float blurOffset = abs(blurValue);");
    buf.writeln("");

    buf.writeln("   if     (blurOffset < 0.15) gl_FragColor = texture2D(colorTxt, txt2D);");
    buf.writeln("   else if(blurOffset < 0.3)  gl_FragColor = blur3();");
    buf.writeln("   else if(blurOffset < 0.45) gl_FragColor = blur6();");
    buf.writeln("   else if(blurOffset < 0.6)  gl_FragColor = blur9();");
    buf.writeln("   else if(blurOffset < 0.75) gl_FragColor = blur12();");
    buf.writeln("   else if(blurOffset < 0.9)  gl_FragColor = blur15();");
    buf.writeln("   else                       gl_FragColor = blur18();");
    buf.writeln("}");
    return buf.toString();
  }

  /// Gets the name for the configuration.
  String toString() => this.name;
}