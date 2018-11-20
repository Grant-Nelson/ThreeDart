part of ThreeDart.Techniques;

/// A technique for rendering entities with a depth fog.
class Depth extends Technique {
  Shaders.Depth _shader;
  Math.Color3 _objClr;
  Math.Color3 _fogClr;
  double _fogStart;
  double _fogStop;
  Events.Event _changed;

  /// Creates a new depth technique with the given initial values.
  Depth({Math.Color3 objClr:   null,
         Math.Color3 fogClr:   null,
         double      fogStart: 1.0,
         double      fogStop:  10.0}) {
    this._shader   = null;
    this._objClr   = null;
    this._fogClr   = null;
    this._fogStart = 1.0;
    this._fogStop  = 10.0;
    this._changed  = null;

    this.objectColor = objClr;
    this.fogColor    = fogClr;
    this.fogStart    = fogStart;
    this.fogStop     = fogStop;
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

  /// The color to draw the object with.
  Math.Color3 get objectColor => this._objClr;
  void set objectColor(Math.Color3 clr) {
    clr ??= new Math.Color3.white();
    if (this._objClr != clr) {
      Math.Color3 prev = this._objClr;
      this._objClr = clr;
      this._onChanged(new Events.ValueChangedEventArgs(this, "objectColor", prev, this._objClr));
    }
  }

  /// The color to draw the fog with, typically the same color as the background.
  Math.Color3 get fogColor => this._fogClr;
  void set fogColor(Math.Color3 clr) {
    clr ??= new Math.Color3.black();
    if (this._fogClr != clr) {
      Math.Color3 prev = this._fogClr;
      this._fogClr = clr;
      this._onChanged(new Events.ValueChangedEventArgs(this, "fogColor", prev, this._fogClr));
    }
  }

  /// The depth the fog starts. Closer than this has the object color.
  double get fogStart => this._fogStart;
  void set fogStart(double start) {
    start ??= 1.0;
    if (!Math.Comparer.equals(this._fogStart, start)) {
      double prev = this._fogStart;
      this._fogStart = start;
      this._onChanged(new Events.ValueChangedEventArgs(this, "fogStart", prev, this._fogStart));
    }
  }

  /// The depth the fog stops. Farther than this has the fog color.
  double get fogStop => this._fogStop;
  void set fogStop(double stop) {
    stop ??= 10.0;
    if (!Math.Comparer.equals(this._fogStop, stop)) {
      double prev = this._fogStop;
      this._fogStop = stop;
      this._onChanged(new Events.ValueChangedEventArgs(this, "fogStop", prev, this._fogStop));
    }
  }

  /// Gets the vertex source code used for the shader used by this techinique.
  String get vertexSourceCode => this._shader?.vertexSourceCode;

  /// Gets the fragment source code used for the shader used by this techinique.
  String get fragmentSourceCode => this._shader?.fragmentSourceCode;

  /// Updates this technique for the given state.
  void update(Core.RenderState state) {
    // Do Nothing
  }

  /// Renders this technique for the given state and entity.
  void render(Core.RenderState state, Core.Entity obj) {
    this._shader ??= new Shaders.Depth.cached(state);

    if (obj.cache is! Data.BufferStore) obj.clearCache();
    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shapeBuilder.build(new Data.WebGLBufferBuilder(state.gl), Data.VertexType.Pos)
        ..findAttribute(Data.VertexType.Pos).attr = this._shader.posAttr.loc;
    }

    this._shader
      ..bind(state)
      ..objectColor = this._objClr
      ..fogColor = this._fogClr
      ..fogStart = this._fogStart
      ..fogStop = this._fogStop
      ..projectMatrix = state.projection.matrix
      ..viewObjectMatrix = state.viewObjectMatrix;

    (obj.cache as Data.BufferStore)
      ..bind(state)
      ..render(state)
      ..unbind(state);

    this._shader.unbind(state);
  }
}
