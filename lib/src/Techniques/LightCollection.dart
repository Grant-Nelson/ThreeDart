part of ThreeDart.Techniques;

/// The material/light rendering technique.
class LightCollection {
  MaterialLight _tech;

  List<Lights.Light> _allLights;
  List<Lights.Directional> _dirLights;
  // TODO: Add more lights.

  LightCollection._(MaterialLight this._tech) {
    this._allLights = new List<Lights.Light>();
    this._dirLights = new List<Lights.Directional>();
    // TODO: Add more lights.
  }

  /// The parent technique this collection belongs to.
  MaterialLight get technique => this._tech;

  /// Adds the given [light] to this collection.
  void add(Lights.Light light) {
    if (light == null) return;
    this._allLights.add(light);
    if (light is Lights.Directional) this._dirLights.add(light);
    // TODO: Add more lights.
    this._tech._shader = null;
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
    // TODO: Add more lights.
  }
}
