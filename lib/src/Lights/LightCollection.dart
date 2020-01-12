part of ThreeDart.Lights;

/// A collection of lights.
class LightCollection extends Collections.Collection<Light> {
  List<Bar> _barLights;
  List<Directional> _dirLights;
  List<Point> _pntLights;
  List<Spot> _spotLights;
  Events.Event _changed;
  Events.Event _lightChanged;

  /// Creates a new light collection.
  LightCollection() {
    this._barLights    = new List<Bar>();
    this._dirLights    = new List<Directional>();
    this._pntLights    = new List<Point>();
    this._spotLights   = new List<Spot>();
    this._changed      = null;
    this._lightChanged = null;
    this.setHandlers(onPreaddHndl:  this._onPreaddLights,
                     onAddedHndl:   this._onAddedLights,
                     onRemovedHndl: this._onRemovedLights);
  }

  /// The event emitted when the collection has changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// The event emitted when a light's value has changed.
  Events.Event get lightChanged {
    this._lightChanged ??= new Events.Event();
    return this._lightChanged;
  }

  /// Handles changes to the collection.
  void _onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Handles changes to the light's values.
  void _onLightChanged([Events.EventArgs args = null]) {
    this._lightChanged?.emit(args);
  }

  /// Checks if the light can be added to this set.
  bool _onPreaddLights(Iterable<Light> added) {
    for (Light light in added) {
      if ((light == null) || this._contains(light)) return false;
    }
    return true;
  }

  /// Handles a light being added.
  void _onAddedLights(int index, Iterable<Light> added) {
    for (Light light in added) {
      this._addOther(light);
      light.changed.add(this._onLightChanged);
    }
    this._onChanged(new Events.ItemsAddedEventArgs(this, index, added));
  }

  /// Handles a light being removed.
  void _onRemovedLights(int index, Iterable<Light> removed) {
    for (Light light in removed) {
      this._removeOther(light);
      light.changed.remove(this._onLightChanged);
    }
    this._onChanged(new Events.ItemsRemovedEventArgs(this, index, removed));
  }

  /// Gets the set of bar lights in this collection.
  Iterable<Bar> get barLights => this._barLights;

  /// Gets the set of directional lights in this collection.
  Iterable<Directional> get directionalLights => this._dirLights;

  /// Gets the set of point lights in this collection.
  Iterable<Point> get pointLights => this._pntLights;

  /// Gets the set of spot lights in this collection.
  Iterable<Spot> get spotLights => this._spotLights;

  /// Checks the given [light] is in the collection.
  bool _contains(Light light) {
    if (light is Bar)
      return this._barLights.contains(light);
    if (light is Directional)
      return this._dirLights.contains(light);
    if (light is Point)
      return this._pntLights.contains(light);
    if (light is Spot)
      return this._spotLights.contains(light);
    return false;
  }

  /// Adds the given [light] to this collection.
  void _addOther(Light light) {
    if (light is Bar)
      this._barLights.add(light);
    else if (light is Directional)
      this._dirLights.add(light);
    else if (light is Point)
      this._pntLights.add(light);
    else if (light is Spot)
      this._spotLights.add(light);
  }

  /// Removes the light from the specific lists of lights.
  void _removeOther(Light light) {
    if (light is Bar)
      this._barLights.remove(light);
    else if (light is Directional)
      this._dirLights.remove(light);
    else if (light is Point)
      this._pntLights.remove(light);
    else if (light is Spot)
      this._spotLights.remove(light);
  }
}
