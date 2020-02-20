part of ThreeDart.Techniques;

/// A technique for rendering entities with a solid color.
class SolidColor extends Technique {
  Shaders.SolidColor _shader;
  Math.Color4 _clr;
  Events.Event _changed;

  /// Creates a new solid color technique with the given initial values.
  SolidColor({Math.Color4 color: null}) {
    this._shader  = null;
    this._clr     = null;
    this._changed = null;

    this.color = color;
  }

  /// Indicates that this technique has changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Handles a change in this technique.
  void _onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// The color to draw the shape with.
  Math.Color4 get color => this._clr;
  void set color(Math.Color4 clr) {
    clr ??= new Math.Color4.white();
    if (this._clr != clr) {
      Math.Color4 prev = this._clr;
      this._clr = clr;
      this._onChanged(new Events.ValueChangedEventArgs(this, "color", prev, this._clr));
    }
  }

  /// Gets the vertex source code used for the shader used by this technique.
  String get vertexSourceCode => this._shader?.vertexSourceCode;

  /// Gets the fragment source code used for the shader used by this technique.
  String get fragmentSourceCode => this._shader?.fragmentSourceCode;

  /// Updates this technique for the given state.
  void update(Core.RenderState state) {
    // Do Nothing
  }

  /// Renders this technique for the given state and entity.
  void render(Core.RenderState state, Core.Entity obj) {
    this._shader ??= new Shaders.SolidColor.cached(state);

    if (obj.cache is! Data.BufferStore) obj.clearCache();
    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shapeBuilder.build(new Data.WebGLBufferBuilder(state.gl), Data.VertexType.Pos)
        ..findAttribute(Data.VertexType.Pos).attr = this._shader.posAttr.loc;
    }

    this._shader
      ..bind(state)
      ..color = this._clr
      ..projViewObjectMatrix = state.projectionViewObjectMatrix;

    (obj.cache as Data.BufferStore)
      ..bind(state)
      ..render(state)
      ..unbind(state);

    this._shader.unbind(state);
  }
}
