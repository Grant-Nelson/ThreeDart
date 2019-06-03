part of ThreeDart.Textures;

/// A roller which rotates an object in response to user input.
class ColorPicker implements Input.Interactable, Events.Changable {

  /// Texture loader used to read the colors from the given texture.
  TextureLoader _loader;

  /// The user input this roller is attached to.
  Input.UserInput _input;

  /// Indicates if the modifier keys which must be pressed or released.
  Input.Modifiers _mods;

  /// The texture to pick colors from.
  Texture2D _txt;

  /// Event for handling changes to this picker.
  Events.Event _changed;
  
  /// Event emitted before an update for this picker.
  Events.Event _preUpdate;

  /// Event emitted after an update for this picker.
  Events.Event _postUpdate;
  
  /// Event for handling when a color has been picked.
  Events.Event _colorPicked;

  /// Indicates if the color picker should trigger on mouse down or mouse up.
  bool _mouseDown;

  /// Creates a new user rotater instance.
  ColorPicker(TextureLoader loader, {
      bool ctrl:      false,
      bool alt:       false,
      bool shift:     false,
      bool mouseDown: true,
      Texture2D       txt:    null,
      Input.Modifiers mod:    null,
      Input.UserInput input:  null}) {
    this._loader      = loader;
    this._input       = null;
    this._mods        = null;
    this._txt         = null;
    this._changed     = null;
    this._preUpdate   = null;
    this._postUpdate  = null;
    this._colorPicked = null;
    this._mouseDown   = true;

    this.modifiers = mod ?? new Input.Modifiers(ctrl, alt, shift);
    this.mouseDown = mouseDown;
    this.texture   = txt;
    this.attach(input);
  }

  /// Emits when the picker has changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Handles a child picker being changed.
  void _onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Event emitted before an update for this picker.
  Events.Event get onPreUpdate {
    this._preUpdate ??= new Events.Event();
    return this._preUpdate;
  }

  /// Event emitted after an update for this picker.
  Events.Event get onPostUpdate {
    this._postUpdate ??= new Events.Event();
    return this._postUpdate;
  }

  /// Emits when the picker has changed.
  Events.Event get colorPicked {
    this._colorPicked ??= new Events.Event();
    return this._colorPicked;
  }

  /// Handles prior to a color being picked.
  void _onPreUpdate([Events.EventArgs args = null]) {
    this._preUpdate?.emit(args);
  }
  
  /// Handles after a color being picked.
  void _onPostUpdate([Events.EventArgs args = null]) {
    this._postUpdate?.emit(args);
  }

  /// Handles a color being picked.
  void _onColorPicked([Events.EventArgs args = null]) {
    this._colorPicked?.emit(args);
  }

  /// The texture to pick color from.
  Texture2D get texture => this._txt;
  void set texture(Texture2D txt) {
    if (this._txt != txt) {
      if (this._txt != null) this._txt.changed.remove(this._onChanged);
      Texture2D prev = this._txt;
      this._txt = txt;
      if (this._txt != null) this._txt.changed.add(this._onChanged);
      this._onChanged(new Events.ValueChangedEventArgs(this, "texture", prev, this._txt));
    }
  }

  /// Indicates if the modifiers keys must be pressed or released.
  Input.Modifiers get modifiers => this._mods;
  void set modifiers(Input.Modifiers mods) {
    mods = mods ?? new Input.Modifiers.none();
    if (this._mods != mods) {
      Input.Modifiers prev = this._mods;
      this._mods = mods;
      this._onChanged(new Events.ValueChangedEventArgs(this, "modifiers", prev, mods));
    }
  }

  /// Indicates if the color picker should trigger on mouse down or mouse up.
  bool get mouseDown => this._mouseDown;
  void set mouseDown(bool down) {
    down = down ?? true;
    if (this._mouseDown != down) {
      bool prev = this._mouseDown;
      this._mouseDown = down;
      this._onChanged(new Events.ValueChangedEventArgs(this, "mouseDown", prev, down));
    }
  }

  /// Attaches this picker to the user input.
  bool attach(Input.UserInput input) {
    if (input == null) return false;
    if (this._input != null) return false;
    this._input = input;
    this._input.mouse.down.add(this._mouseDownHandle);
    this._input.mouse.up.add(this._mouseUpHandle);
    return true;
  }

  /// Detaches this picker from the user input.
  void detach() {
    if (this._input != null) {
      this._input.mouse.down.remove(this._mouseDownHandle);
      this._input.mouse.up.remove(this._mouseUpHandle);
      this._input = null;
    }
  }

  /// Handles the mouse down event.
  void _mouseDownHandle(Events.EventArgs args) {
    if (this._mouseDown) this._pickColor(args);
  }

  /// Handle the mouse up event.
  void _mouseUpHandle(Events.EventArgs args) {
    if (!this._mouseDown) this._pickColor(args);
  }

  /// This handles determining the color for the location and
  /// emitting a color picker event arguments.
  void _pickColor(Events.EventArgs args) {
    Input.MouseEventArgs margs = args as Input.MouseEventArgs;
    if (margs.button.modifiers != this._mods) return;
    this._onPreUpdate(new Events.EventArgs(this));
    double dx = margs.rawPoint.x/margs.size.dx;
    double dy = margs.rawPoint.y/margs.size.dy;
    Math.Vector2 loc = new Math.Vector2(dx, dy);
    Math.Color4 clr = this._loader.pickColor(this._txt, loc);
    this._onColorPicked(new ColorPickerEventArgs(this, loc, clr));
    _onPostUpdate(new Events.EventArgs(this));
  }
}
