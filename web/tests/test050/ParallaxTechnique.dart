part of ThreeDart.test.test008;

/// The parallax test rendering technique.
class ParallaxTechnique extends Techniques.Technique {
  ParallaxShader _shader;
  Textures.Texture2D _colorTxt;
  Textures.Texture2D _bumpTxt;
  Textures.Texture2D _heightTxt;
  Math.Vector3 _lightDirection;
  Math.Color3 _ambientClr;
  Math.Color3 _diffuseClr;
  Math.Color3 _specularClr;
  double _shininess;
  double _heightScale;
  Events.Event _changed;

  /// Creates a new parallax test technique technique.
  ParallaxTechnique() {
    this._shader = null;
    this._colorTxt = null;
    this._bumpTxt = null;
    this._heightTxt = null;
    this._lightDirection = Math.Vector3.negZ;
    this._ambientClr  = new Math.Color3.white();
    this._diffuseClr  = new Math.Color3.white();
    this._specularClr = new Math.Color3.white();
    this._shininess   = 10.0;
    this._heightScale = 1.0;
    this._changed = null;
  }

  /// Emits an event when the technique being changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Handles the technique being changed.
  void _onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// The color texture to render with.
  Textures.Texture2D get colorTexture => this._colorTxt;
  void set colorTexture(Textures.Texture2D txt) {
    if (this._colorTxt != txt) {
      if (this._colorTxt != null) this._colorTxt.changed.remove(this._onChanged);
      Textures.Texture2D prev = this._colorTxt;
      this._colorTxt = txt;
      if (this._colorTxt != null) this._colorTxt.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "colorTexture", prev, this._colorTxt));
    }
  }

  /// The bump texture to render with.
  Textures.Texture2D get bumpTexture => this._bumpTxt;
  void set bumpTexture(Textures.Texture2D txt) {
    if (this._bumpTxt != txt) {
      if (this._bumpTxt != null) this._bumpTxt.changed.remove(this._onChanged);
      Textures.Texture2D prev = this._bumpTxt;
      this._bumpTxt = txt;
      if (this._bumpTxt != null) this._bumpTxt.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "bumpTexture", prev, this._bumpTxt));
    }
  }

  /// The height texture to render with.
  Textures.Texture2D get heightTexture => this._heightTxt;
  void set heightTexture(Textures.Texture2D txt) {
    if (this._heightTxt != txt) {
      if (this._heightTxt != null) this._heightTxt.changed.remove(this._onChanged);
      Textures.Texture2D prev = this._heightTxt;
      this._heightTxt = txt;
      if (this._heightTxt != null) this._heightTxt.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "heightTexture", prev, this._heightTxt));
    }
  }

  /// The light direction.
  Math.Vector3 get lightDirection => this._lightDirection;
  void set lightDirection(Math.Vector3 dir) {
    if (this._lightDirection != dir) {
      Math.Vector3 prev = this._lightDirection;
      this._lightDirection = dir;
      this._onChanged(new Events.ValueChangedEventArgs(this, "lightDirection", prev, this._lightDirection));
    }
  }

  /// The ambient color for the material.
  Math.Color3 get ambientColor => this._ambientClr;
  void set ambientColor(Math.Color3 color) {
    if (this._ambientClr != color) {
      Math.Color3 prev = this._ambientClr;
      this._ambientClr = color;
      this._onChanged(new Events.ValueChangedEventArgs(this, "ambientColor", prev, this._ambientClr));
    }
  }
  
  /// The diffuse color for the material.
  Math.Color3 get diffuseColor => this._diffuseClr;
  void set diffuseColor(Math.Color3 color) {
    if (this._diffuseClr != color) {
      Math.Color3 prev = this._diffuseClr;
      this._diffuseClr = color;
      this._onChanged(new Events.ValueChangedEventArgs(this, "diffuseColor", prev, this._diffuseClr));
    }
  }
  
  /// The specular color for the material.
  Math.Color3 get specularColor => this._specularClr;
  void set specularColor(Math.Color3 color) {
    if (this._specularClr != color) {
      Math.Color3 prev = this._specularClr;
      this._specularClr = color;
      this._onChanged(new Events.ValueChangedEventArgs(this, "specularColor", prev, this._specularClr));
    }
  }

  /// The shininess of the material.
  double get shininess => this._shininess;
  void set shininess(double shininess) {
    if (!Math.Comparer.equals(this._shininess, shininess)) {
      double prev = this._shininess;
      this._shininess = shininess;
      this._onChanged(new Events.ValueChangedEventArgs(this, "shininess", prev, this._shininess));
    }
  }

  /// The scalar for parallax height.
  double get heightScale => this._heightScale;
  void set heightScale(double heightScale) {
    if (!Math.Comparer.equals(this._heightScale, heightScale)) {
      double prev = this._heightScale;
      this._heightScale = heightScale;
      this._onChanged(new Events.ValueChangedEventArgs(this, "heightScale", prev, this._heightScale));
    }
  }

  /// Gets the vertex source code used for the shader used by this technique.
  String get vertexSourceCode => this._shader?.vertexSourceCode;

  /// Gets the fragment source code used for the shader used by this technique.
  String get fragmentSourceCode => this._shader?.fragmentSourceCode;

  /// Updates this technique for the given state.
  void update(ThreeDart.RenderState state) {
    // Do Nothing
  }

  /// Renders the given [obj] with the current texture for the given [state].
  void render(ThreeDart.RenderState state, ThreeDart.Entity obj) {
    this._shader ??= new ParallaxShader.cached(state);

    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.Binm|Data.VertexType.Txt2D)
        ..findAttribute(Data.VertexType.Pos).attr   = this._shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr  = this._shader.normAttr.loc
        ..findAttribute(Data.VertexType.Binm).attr  = this._shader.binmAttr.loc
        ..findAttribute(Data.VertexType.Txt2D).attr = this._shader.txt2DAttr.loc;
    }

    if ((this._colorTxt != null) && (this._bumpTxt != null) && (this._heightTxt != null)) {
      this._colorTxt.index = 0;
      this._bumpTxt.index = 1;
      this._heightTxt.index = 2;

      Math.Matrix4 viewMat = state.view.matrix;
      Math.Vector3 lightViewDir = viewMat.transVec3(this._lightDirection).normal();

      this._shader
        ..bind(state)
        ..colorTexture  = this._colorTxt
        ..bumpTexture   = this._bumpTxt
        ..heightTexture = this._heightTxt
        ..projectionViewObjectMatrix = state.projectionViewObjectMatrix
        ..viewObjectMatrix           = state.viewObjectMatrix
        ..viewMatrix                 = state.view.matrix
        ..objectMatrix               = state.object.matrix
        ..lightViewDirection = lightViewDir
        ..ambientColor  = this._ambientClr
        ..diffuseColor  = this._diffuseClr
        ..specularColor = this._specularClr
        ..shininess     = this._shininess
        ..heightScale   = this._heightScale;

      this._colorTxt.bind(state);
      this._bumpTxt.bind(state);
      this._heightTxt.bind(state);
      if (obj.cache is Data.BufferStore) {
        (obj.cache as Data.BufferStore)
          ..bind(state)
          ..render(state)
          ..unbind(state);
      } else obj.clearCache();

      this._shader.unbind(state);
      this._colorTxt.unbind(state);
      this._bumpTxt.unbind(state);
      this._heightTxt.unbind(state);
    }
  }
}
