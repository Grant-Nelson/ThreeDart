part of ThreeDart.Techniques;

/// The material/light rendering technique.
class LightCollection {
  MaterialLight _tech;

  List<Lights.Light> _allLights;
  List<Lights.Directional> _dirLights;
  List<Lights.Point> _pntLights;
  List<Lights.Spot> _spotLights;
  List<Lights.TexturedDirectional> _txtDirLights;
  List<Lights.TexturedPoint> _txtPntLights;
  List<Lights.TexturedSpot> _txtSpotLights;

  LightCollection._(MaterialLight this._tech) {
    this._allLights = new List<Lights.Light>();
    this._dirLights = new List<Lights.Directional>();
    this._pntLights = new List<Lights.Point>();
    this._spotLights = new List<Lights.Spot>();
    this._txtDirLights = new List<Lights.TexturedDirectional>();
    this._txtPntLights = new List<Lights.TexturedPoint>();
    this._txtSpotLights = new List<Lights.TexturedSpot>();
  }

  /// The parent technique this collection belongs to.
  MaterialLight get technique => this._tech;

  /// Adds the given [light] to this collection.
  bool add(Lights.Light light) {
    if (light == null) return false;
    if (light is Lights.Directional) {
      if (this._dirLights.contains(light)) return false;
      this._dirLights.add(light);
    }
    if (light is Lights.Point) {
      if (this._pntLights.contains(light)) return false;
      this._pntLights.add(light);
    }
    if (light is Lights.Spot) {
      if (this._spotLights.contains(light)) return false;
      this._spotLights.add(light);
    }
    if (light is Lights.TexturedDirectional) {
      if (this._txtDirLights.contains(light)) return false;
      this._txtDirLights.add(light);
    }
    if (light is Lights.TexturedPoint) {
      if (this._txtPntLights.contains(light)) return false;
      this._txtPntLights.add(light);
    }
    if (light is Lights.TexturedSpot) {
      if (this._txtSpotLights.contains(light)) return false;
      this._txtSpotLights.add(light);
    }
    this._allLights.add(light);
    this._tech._shader = null;
    return true;
  }

  /// Determines if the collection is empty.
  bool get isEmpty => this._allLights.isEmpty;

  /// The number of lights in the collection.
  int get length => this._allLights.length;

  /// Gets the light at the given [index].
  Lights.Light operator[](int index) => this._allLights[index];

  /// Gets the index of the given [light].
  int indexOf(Lights.Light light) => this._allLights.indexOf(light);

  /// Calls the given function handler, [funcHndl], foreach light.
  void forEach(void funcHndl(Lights.Light light)) => this._allLights.forEach(funcHndl);

  /// Removes the light at the given [index] in this collection.
  /// The removed light is returned.
  Lights.Light removeAt(int index) {
    Lights.Light light = this._allLights.removeAt(index);
    if (light != null) {
      this._tech._shader = null;
      this._removeOther(light);
    }
    return light;
  }

  /// Removed the first instance of the given [light] from this collection.
  /// True is returned if the entity was found and removed, false if not found.
  bool remove(Lights.Light light) {
    if (this._allLights.remove(light)) {
      this._tech._shader = null;
      this._removeOther(light);
      return true;
    }
    return false;
  }

  /// Removes the light from the specific lists of lights.
  void _removeOther(Lights.Light light) {
    if (light is Lights.Directional) this._dirLights.remove(light);
    if (light is Lights.Point) this._pntLights.remove(light);
    if (light is Lights.Spot) this._spotLights.remove(light);
    if (light is Lights.TexturedDirectional) this._txtDirLights.remove(light);
    if (light is Lights.TexturedPoint) this._txtPntLights.remove(light);
    if (light is Lights.TexturedSpot) this._txtSpotLights.remove(light);
  }
}
