part of ThreeDart.Techniques;

/// An entry in the TextureLayout technique describing the layout of one texture.
class TextureLayoutEntry implements Events.Changeable {
  Textures.Texture2D _txt;
  Math.Matrix4 _clrMat;
  Math.Region2 _src;
  Math.Region2 _dest;
  bool _flip;
  Events.Event _changed;

  /// Creates an entry for the texture layout technique.
  TextureLayoutEntry({Textures.Texture2D texture:     null,
                      Math.Matrix4       colorMatrix: null,
                      Math.Region2       source:      null,
                      Math.Region2       destination: null,
                      bool               flip:        false}) {
    this.texture     = texture;
    this.colorMatrix = colorMatrix;
    this.source      = source;
    this.destination = destination;
    this.flip        = flip;
    this._changed    = null;
  }

  /// Indicates that this entity has changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Handles a change in this entity.
  void _onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// The texture to draw for this entry.
  Textures.Texture2D get texture => this._txt;
  void set texture(Textures.Texture2D txt) {
    if (this._txt != txt) {
      if (this._txt != null) this._txt.changed.remove(this._onChanged);
      Textures.Texture2D prev = this._txt;
      this._txt = txt;
      if (this._txt != null) this._txt.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "texture", prev, this._txt));
    }
  }

  /// The color adjustment matrix.
  Math.Matrix4 get colorMatrix => this._clrMat;
  void set colorMatrix(Math.Matrix4 mat) {
    mat ??= Math.Matrix4.identity;
    if (this._clrMat != mat) {
      Math.Matrix4 prev = this._clrMat;
      this._clrMat = mat;
      this._onChanged(new Events.ValueChangedEventArgs(this, "colorMatrix", prev, this._clrMat));
    }
  }

  /// The source region of the texture to render with.
  Math.Region2 get source => this._src;
  void set source(Math.Region2 src) {
    src ??= Math.Region2.unit;
    if (this._src != src) {
      Math.Region2 prev = this._src;
      this._src = src;
      this._onChanged(new Events.ValueChangedEventArgs(this, "source", prev, this._src));
    }
  }

  /// The destination to render the source region into.
  Math.Region2 get destination => this._dest;
  void set destination(Math.Region2 dest) {
    dest ??= Math.Region2.unit;
    if (this._dest != dest) {
      Math.Region2 prev = this._dest;
      this._dest = dest;
      this._onChanged(new Events.ValueChangedEventArgs(this, "destination", prev, this._dest));
    }
  }

  /// Indicates if the image should be flipped or not.
  bool get flip => this._flip;
  void set flip(bool flip) {
    flip ??= false;
    if (this._flip != flip) {
      this._flip = flip;
      this._onChanged(new Events.ValueChangedEventArgs(this, "flip", !flip, this._flip));
    }
  }
}
