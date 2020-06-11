part of ThreeDart.Shapes.Shared;

abstract class BaseShape {
  
  Events.Event _changed;
  
  /// Creates a new shape.
  Shape() {
    this._changed = null;
  }

  void internalUpdateVertexIndices();
  
  void internalAddVertices(Vertex vertex);

  void internalAddPoint(Point point);

  void internalRemovePoint(Point point);
  
  void internalAddLine(Line line);

  void internalRemoveLine(Line line);
  
  void internalAddFace(Face face);

  void internalRemoveFace(Face face);

  void suspendChanged() => this._changed?.suspend();
  
  void resumeChanged() => this._changed?.resume();

  /// The changed event to signal when ever the shape is modified.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Handles any change to this shape.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onChanged([Events.EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Called when the given [vertex] has been added.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onVertexAdded(Vertex vertex) {
    this.onChanged();
  }

  /// Called when the given [vertex] has been modified.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onVertexModified(Vertex vertex) {
    this.onChanged();
  }

  /// Called when the given [vertex] has been removed.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onVertexRemoved(Vertex vertex) {
    this.onChanged();
  }

  /// Called when the given [face] has been added.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onFaceAdded(Face face) {
    this.onChanged();
  }

  /// Called when the given [face] has been modified.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onFaceModified(Face face) {
    this.onChanged();
  }

  /// Called when the given [face] has been removed.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onFaceRemoved(Face face) {
    this.onChanged();
  }

  /// Called when the given [line] has been added.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onLineAdded(Line line) {
    this.onChanged();
  }

  /// Called when the given [line] has been modified.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onLineModified(Line line) {
    this.onChanged();
  }

  /// Called when the given [line] has been removed.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onLineRemoved(Line line) {
    this.onChanged();
  }

  /// Called when the given [point] has been added.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onPointAdded(Point point) {
    this.onChanged();
  }

  /// Called when the given [point] has been modified.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onPointModified(Point point) {
    this.onChanged();
  }

  /// Called when the given [point] has been removed.
  /// This calls the [onChanged] method.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the shape is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onPointRemoved(Point point) {
    this.onChanged();
  }
}
