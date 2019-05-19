part of ThreeDart.Shaders;

/// A shader for cover pass rendering several layed out textures.
class TextureLayout extends Shader {

  /// The name for this shader.
  static String _getName(int maxTxtCount, ColorBlendType blend) =>
    "TextureLayout_${maxTxtCount}_${stringForColorBlendType(blend)}";

  /// The vertex shader source code in glsl.
  static String _vertexSource() {
    StringBuffer buf = new StringBuffer();
    buf.writeln("attribute vec3 posAttr;");
    buf.writeln("");
    buf.writeln("varying vec2 pos;");
    buf.writeln("");
    buf.writeln("void main()");
    buf.writeln("{");
    buf.writeln("  pos = posAttr.xy*0.5 + 0.5;");
    buf.writeln("  gl_Position = vec4(posAttr, 1.0);");
    buf.writeln("}");
    return buf.toString();
  }

  /// The fragment shader source code in glsl.
  static String _fragmentSource(int maxTxtCount, ColorBlendType blend) {
    StringBuffer buf = new StringBuffer();
    buf.writeln("precision mediump float;");
    buf.writeln("");
    buf.writeln("uniform vec4 backClr;");
    buf.writeln("");
    buf.writeln("varying vec2 pos;");
    buf.writeln("");
    buf.writeln("uniform int txtCount;");
    for (int i = 0; i < maxTxtCount; ++i) {
      buf.writeln("uniform sampler2D txt$i;");
      buf.writeln("uniform mat4 clrMat$i;");
      buf.writeln("uniform vec2 srcLoc$i;");
      buf.writeln("uniform vec2 srcSize$i;");
      buf.writeln("uniform vec2 destLoc$i;");
      buf.writeln("uniform vec2 destSize$i;");
      buf.writeln("uniform int flip$i;");
    }
    buf.writeln("");
    buf.writeln("vec4 clrAccum;");
    if ((blend == ColorBlendType.Average) || (blend == ColorBlendType.Overwrite)) {
      buf.writeln("float colorCount;");
    }
      buf.writeln("");
    buf.writeln("void layout(sampler2D txt, mat4 clrMat,");
    buf.writeln("            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)");
    buf.writeln("{");
    buf.writeln("   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;");
    buf.writeln("   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&");
    buf.writeln("      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))");
    buf.writeln("   {");
    buf.writeln("      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;");
    buf.writeln("      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);");
    buf.writeln("      color = clamp(color, vec4(0.0), vec4(1.0));");
    if (blend == ColorBlendType.Additive) {
      buf.writeln("      clrAccum += color;");
    } else if (blend == ColorBlendType.AlphaBlend) {
      buf.writeln("      clrAccum = mix(clrAccum, color, color.a);");
    } else if (blend == ColorBlendType.Average) {
      buf.writeln("      clrAccum += color;");
      buf.writeln("      colorCount += 1.0;");
    } else { // ColorBlendType.Overwrite
      buf.writeln("      clrAccum = color;");
      buf.writeln("      colorCount = 1.0;");
    }
    buf.writeln("   }");
    buf.writeln("}");
    buf.writeln("");
    buf.writeln("void layoutAll()");
    buf.writeln("{");
    if (blend == ColorBlendType.Overwrite) {
      for (int i = maxTxtCount-1; i >= 0; --i) {
        buf.writeln("   if(txtCount > $i)");
        buf.writeln("   {");
        buf.writeln("     layout(txt$i, clrMat$i, srcLoc$i, srcSize$i, destLoc$i, destSize$i, flip$i);");
        buf.writeln("     if(colorCount > 0.0) return;");
        buf.writeln("   }");
      }
    } else {
      for (int i = 0; i < maxTxtCount; ++i) {
        buf.writeln("   if(txtCount <= $i) return;");
        buf.writeln("   layout(txt$i, clrMat$i, srcLoc$i, srcSize$i, destLoc$i, destSize$i, flip$i);");
      }
    }
    buf.writeln("}");
    buf.writeln("");
    buf.writeln("void main()");
    buf.writeln("{");
    buf.writeln("   clrAccum = backClr;");
    if (blend == ColorBlendType.Average) {
      buf.writeln("   colorCount = 1.0;");
    } else if (blend == ColorBlendType.Overwrite) {
      buf.writeln("   colorCount = 0.0;");
    }
    buf.writeln("   layoutAll();");
    if (blend == ColorBlendType.Average) {
      buf.writeln("   clrAccum = clrAccum/colorCount;");
    }
    buf.writeln("   if(clrAccum.a <= 0.0) discard;");
    buf.writeln("   gl_FragColor = clrAccum;");
    buf.writeln("}");
    return buf.toString();
  }

  Attribute _posAttr;
  Uniform1i _txtCount;
  Uniform4f _backClr;
  List<UniformSampler2D> _txts;
  List<UniformMat4> _clrMats;
  List<Uniform2f> _srcLocs;
  List<Uniform2f> _srcSizes;
  List<Uniform2f> _destLocs;
  List<Uniform2f> _destSizes;
  List<Uniform1i> _flips;

  /// Checks for the shader in the shader cache in the given [state],
  /// if it is not found then this shader is compiled and added
  /// to the shader cache before being returned.
  factory TextureLayout.cached(int maxTxtCount, ColorBlendType blend, Core.RenderState state) {
    TextureLayout shader = state.shader(_getName(maxTxtCount, blend));
    if (shader == null) {
      shader = new TextureLayout(maxTxtCount, blend, state.gl);
      state.addShader(shader);
    }
    return shader;
  }

  /// Compiles this shader for the given rendering context.
  TextureLayout(int maxTxtCount, ColorBlendType blend, WebGL.RenderingContext2 gl):
      super(gl, _getName(maxTxtCount, blend)) {
    this.initialize(_vertexSource(), _fragmentSource(maxTxtCount, blend));
    this._posAttr   = this.attributes["posAttr"];
    this._txtCount  = this.uniforms.required("txtCount") as Uniform1i;
    this._backClr   = this.uniforms.required("backClr") as Uniform4f;
    this._txts      = new List<UniformSampler2D>();
    this._clrMats   = new List<UniformMat4>();
    this._srcLocs   = new List<Uniform2f>();
    this._srcSizes  = new List<Uniform2f>();
    this._destLocs  = new List<Uniform2f>();
    this._destSizes = new List<Uniform2f>();
    this._flips     = new List<Uniform1i>();
    for (int i = 0; i < maxTxtCount; ++i) {
      this._txts.add(this._uniforms.required("txt$i") as UniformSampler2D);
      this._clrMats.add(this._uniforms.required("clrMat$i") as UniformMat4);
      this._srcLocs.add(this._uniforms.required("srcLoc$i") as Uniform2f);
      this._srcSizes.add(this._uniforms.required("srcSize$i") as Uniform2f);
      this._destLocs.add(this._uniforms.required("destLoc$i") as Uniform2f);
      this._destSizes.add(this._uniforms.required("destSize$i") as Uniform2f);
      this._flips.add(this._uniforms.required("flip$i") as Uniform1i);
    }
  }

  /// The position vertex shader attribute.
  Attribute get posAttr => this._posAttr;

  /// The background color to put behind the layout.
  Math.Color4 get backgroundColor => this._backClr.getColor4();
  set backgroundColor(Math.Color4 value) => this._backClr.setColor4(value);

  /// The number of textures to layout.
  int get textureCount => this._txtCount.getValue();
  set textureCount(int value) => this._txtCount.setValue(value);

  /// Sets the texture at the given [index] to cover with.
  void setTexture(int index, Textures.Texture2D txt) =>
    this._txts[index].setTexture2D(txt);

  /// Sets the color matrix at the given [index].
  void setColorMatrix(int index, Math.Matrix4 mat) =>
    this._clrMats[index].setMatrix4(mat ?? Math.Matrix4.identity);

  /// Sets the source rectangle at the given [index].
  void setSourceRect(int index, Math.Region2 rect) {
    rect ??= Math.Region2.unit;
    this._srcLocs[index].setValues(rect.x, rect.y);
    this._srcSizes[index].setValues(rect.dx, rect.dy);
  }

  /// Sets the destination rectangle at the given [index].
  void setDestinationRect(int index, Math.Region2 rect) {
    rect ??= Math.Region2.unit;
    this._destLocs[index].setValues(rect.x, rect.y);
    this._destSizes[index].setValues(rect.dx, rect.dy);
  }

  /// Sets if the texture should be flipped at the given [index].
  void setFlip(int index, bool flip) {
    this._flips[index].setValue(flip? 1: 0);
  }
}
