part of ThreeDart.Core;

/// A renderable entity in a tree of entities for a scene.
///
/// An [Entity] is a [Shape], [Technique], and a [Mover]
/// to create an output when rendered.
class Entity implements Movers.Movable, Changable {

  /// The name for this entity.
  String _name;

  /// Indicates if this entity and its children
  /// will be rendered or not.
  bool _enabled;

  /// The shape to render.
  /// May be null to not render this Entity which is useful
  /// when grouping other Entitys.
  Shapes.Shape _shape;

  /// The cache of the shape transformed into the buffers required
  /// by the shader in the currently set technique.
  /// TODO: Need to make the cache work for two techinques when there are parents.
  Data.TechniqueCache _cache;

  /// The technique to render with or null to inherit from it's parent.
  Techniques.Technique _tech;

  /// The mover to position, rotate, and scale this Entity and children.
  /// May be null to not move the Entity.
  Movers.Mover _mover;

  /// The location and rotation of this entity.
  Math.Matrix4 _matrix;

  /// The list of children entities to this entity.
  Data.Collection<Entity> _children;

  /// The event emitted when any part of the entity is changed.
  Event _changed;

  /// The event emitted when the shape has been changed.
  Event _shapeChanged;

  /// The event emitted when the technique has been changed.
  Event _techChanged;

  /// The event emitted when the mover has been changed.
  Event _moverChanged;

  /// The event emitted when the matrix has been changed.
  Event _matrixChanged;

  /// The event emitted when one or more children is added.
  Event _childrenAdded;

  /// The event emitted when one or more children is removed.
  Event _childrenRemoved;

  /// The event emitted when an extension is added.
  Event _extensionAdded;

  /// The event emitted when an extension is removed.
  Event _extensionRemoved;

  /// Creates a new Entity.
  Entity({String name: "",
          bool enabled: true,
          Shapes.Shape shape: null,
          Techniques.Technique tech: null,
          Movers.Mover mover: null,
          List<Entity> children: null}) {
    this._name = name;
    this._enabled = enabled;
    this._shape = shape;
    this._cache = null;
    this._tech = tech;
    this._mover = mover;
    this._matrix = null;
    this._children = new Data.Collection<Entity>(
      onAddedHndl: this.onChildrenAdded,
      onRemovedHndl: this.onChildrenRemoved);
    this._changed = null;
    this._shapeChanged = null;
    this._techChanged = null;
    this._moverChanged = null;
    this._matrixChanged = null;
    this._childrenAdded = null;
    this._childrenRemoved = null;
    this._extensionAdded = null;
    this._extensionRemoved = null;
    if (children != null)
      this._children.addAll(children);
  }

  /// The name for this entity.
  String get name => this._name;
  void set name(String name) { this._name = name; }

  /// Indicates if this entity and its children
  /// will be rendered or not.
  bool get enabled => this._enabled;
  void set enabled(bool enabled) { this._enabled = enabled; }

  /// Indicates if the shape cashe needs to be updated.
  bool get cacheNeedsUpdate => this._cache == null;

  /// Requests that the shape cache is updated.
  ///
  /// If the shape is changed internally without being removed and reset or the requirements
  /// of the technique has changed without being removed then calling this will update the cache.
  /// Typically this should not have to be called.
  void clearCache() => this._cache = null;

  /// Requests that this and child shape caches are updated.
  ///
  /// This will clear the caches for updating when the technique changes.
  /// Since techniques are shared to children which don't provide thier
  /// own technique this will clear all children and descendents which
  /// currently use this technique.
  void _cacheUpdateForTech() {
    this.clearCache();
    for(Entity child in this._children) {
      if (child._tech == null) {
        child._cacheUpdateForTech();
      }
    }
  }

  /// The cache of the current shape in buffers for the current technique.
  set cache(Data.TechniqueCache cache) => _cache = cache;
  Data.TechniqueCache get cache => this._cache;

  /// The children Entitys of this Entity.
  Data.Collection<Entity> get children => _children;

  /// The shape to draw at this Entity.
  /// May be null to not draw anything, usefull if this Entity
  /// is just a container for child Entitys.
  Shapes.Shape get shape => this._shape;
  set shape(Shapes.Shape shape) {
    if (this._shape != shape) {
      Shapes.Shape oldShape = this._shape;
      this._shape = shape;
      this.clearCache();
      if (oldShape != null) oldShape.changed.remove(this.onShapeModified);
      if (this._shape != null) this._shape.changed.add(this.onShapeModified);
      this.onShapeChanged(oldShape, this._shape);
    }
  }

  /// The techinque to render this Entity and/or it's children with.
  /// May be null to inherit the technique from this Entitys parent.
  Techniques.Technique get technique => this._tech;
  set technique(Techniques.Technique technique) {
    if (this._tech != technique) {
      Techniques.Technique oldTech = this._tech;
      if (oldTech != null) oldTech.changed.remove(this.onTechModified);
      if (technique != null) technique.changed.add(this.onTechModified);
      this._tech = technique;
      this._cacheUpdateForTech();
      this.onTechChanged(oldTech, this._tech);
    }
  }

  /// The mover which moves this Entity.
  /// May be null to not move the Entity.
  Movers.Mover get mover => this._mover;
  void set mover(Movers.Mover mover) {
    if (this._mover != mover) {
      Movers.Mover oldMover = this._mover;
      if (oldMover != null) oldMover.changed.remove(this.onMoverModified);
      if (mover != null) mover.changed.add(this.onMoverModified);
      this._mover = mover;
      this.onMoverChanged(oldMover, this._mover);
    }
  }

  /// The matrix for the location and rotation of the entity.
  Math.Matrix4 get matrix => this._matrix;

  /// Calculates the axial aligned bounding box of this entity and its children.
  Math.Region3 calculateAABB() {
    Math.Region3 region = null;
    if (this._shape != null)
      region = new Math.Region3.union(region, this._shape.calculateAABB());
    for (Entity child in this._children)
      region = new Math.Region3.union(region, child.calculateAABB());
    return region;
  }

  /// Scales the AABB so that the longest size the given [size],
  /// and the shape is centered then offset by the given [offset].
  void resizeCenter([double size = 2.0, Math.Point3 offset = null]) {
    Math.Region3 aabb = this.calculateAABB();
    offset = offset ?? new Math.Point3.zero();
    offset = offset - aabb.center;
    double maxSize = aabb.dx;
    if (aabb.dy > maxSize) maxSize = aabb.dy;
    if (aabb.dz > maxSize) maxSize = aabb.dz;
    if (maxSize == 0.0) return;
    double invSize = size/maxSize;
    this.applyPositionMatrix(
      new Math.Matrix4.scale(invSize, invSize, invSize)*
      new Math.Matrix4.translate(offset.x, offset.y, offset.z));
  }

  /// Modifies the position, normal, and binormal
  /// by translating it with the given [mat]
  /// for this entity's shape and chilren shapes.
  void applyPositionMatrix(Math.Matrix4 mat) {
    if (this.shape != null)
      this.shape.applyPositionMatrix(mat);
    for (Entity child in this._children)
      child.applyPositionMatrix(mat);
  }

  /// Modifies the color by translating it with the given [mat]
  /// for this entity's shape and children shapes.
  void applyColorMatrix(Math.Matrix3 mat) {
    if (this.shape != null)
      this.shape.applyColorMatrix(mat);
    for (Entity child in this._children)
      child.applyColorMatrix(mat);
  }

  /// Modifies the 2D texture by translating it with the given [mat]
  /// for this entity's shape and children shapes.
  void applyTexture2DMatrix(Math.Matrix3 mat) {
    if (this.shape != null)
      this.shape.applyTexture2DMatrix(mat);
    for (Entity child in this._children)
      child.applyTexture2DMatrix(mat);
  }

  /// Modifies the cube texture by translating it with the given [mat]
  /// for this entity's shape and children shapes.
  void applyTextureCubeMatrix(Math.Matrix4 mat) {
    if (this.shape != null)
      this.shape.applyTextureCubeMatrix(mat);
    for (Entity child in this._children)
      child.applyTextureCubeMatrix(mat);
  }

  /// Updates the Entity with the given [UpdateState].
  void update(RenderState state) {
    Math.Matrix4 mat = null;
    if (this._mover != null) {
      mat = this._mover.update(state, this);
    }
    if (mat != this._matrix) {
      Math.Matrix4 oldMat = this._matrix;
      this._matrix = mat;
      this.onMatrixChanged(oldMat, this._matrix);
    }

    // Updated the technique.
    if (this._tech != null) this._tech.update(state);

    // Update all children.
    for (Entity child in this._children) {
      child.update(state);
    }
  }

  /// Renders the Entity with the given [RenderState].
  void render(RenderState state) {
    if (!this._enabled) return;

    // Push state onto the render state.
    state.object.pushMul(this._matrix);
    state.pushTechnique(this._tech);

    // Render this entity.
    Techniques.Technique tech = state.technique;
    if ((tech != null) && (this._shape != null)) {
      tech.render(state, this);
    }

    // Render all children.
    for (Entity child in this._children) {
      child.render(state);
    }

    // Pop state from update.
    state.popTechnique();
    state.object.pop();
  }

  /// The event emitted when any part of the entity is changed.
  Event get changed {
    if (this._changed == null) this._changed = new Event();
    return this._changed;
  }

  /// The event emitted when the shape has been changed.
  Event get shapeChanged {
    if (this._shapeChanged == null) this._shapeChanged = new Event();
    return this._shapeChanged;
  }

  /// The event emitted when the technique has been changed.
  Event get techChanged {
    if (this._techChanged == null) this._techChanged = new Event();
    return this._techChanged;
  }

  /// The event emitted when the mover has been changed.
  Event get moverChanged {
    if (this._moverChanged == null) this._moverChanged = new Event();
    return this._moverChanged;
  }

  /// The event emitted when the matrix has been changed.
  Event get matrixChanged {
    if (this._matrixChanged == null) this._matrixChanged = new Event();
    return this._matrixChanged;
  }

  /// The event emitted when one or more child is added.
  Event get childrenAdded {
    if (this._childrenAdded == null) this._childrenAdded = new Event();
    return this._childrenAdded;
  }

  /// The event emitted when one or more child is removed.
  Event get childrenRemoved {
    if (this._childrenRemoved == null) this._childrenRemoved = new Event();
    return this._childrenRemoved;
  }

  /// The event emitted when an extension is added.
  Event get extensionAdded {
    if (this._extensionAdded == null) this._extensionAdded = new Event();
    return this._extensionAdded;
  }

  /// The event emitted when an extension is removed.
  Event get extensionRemoved {
    if (this._extensionRemoved == null) this._extensionRemoved = new Event();
    return this._extensionRemoved;
  }

  /// Called when any change has occurred.
  ///
  /// This emits the [changed] event.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onChanged([EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// Called when the shape is modified.
  ///
  /// This will clear the shape cache.
  /// The [args] are the arguments of the change.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onShapeModified(EventArgs args) {
    this.clearCache();
    this.onChanged();
  }

  /// Called when the shape is added or removed.
  ///
  /// This emits the [shapeChanged] event and calls [onChanged].
  /// The [oldShape] that was removed (may be null), and the [newShape] that was added (may be null).
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onShapeChanged(Shapes.Shape oldShape, Shapes.Shape newShape) {
    this._shapeChanged?.emit();
    this.onChanged();
  }

  /// Handles a change in the technique.
  ///
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onTechModified([EventArgs args = null]) {
    this.onChanged();
  }

  /// Called when the technique is added or removed.
  ///
  /// This emits the [techChanged] event and calls [onChanged].
  /// The [oldTech] that was removed (may be null), and the [newTech] that was added (may be null).
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onTechChanged(Techniques.Technique oldTech, Techniques.Technique newTech) {
    this._techChanged?.emit();
    this.onChanged();
  }

  /// Handles a change in the mover.
  ///
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onMoverModified([EventArgs args = null]) {
    this.onChanged(args);
  }

  /// Called when the mover is added or removed is removed.
  ///
  /// This emits the [moverChanged] event and calls [onChanged].
  /// The [oldMover] that was removed (may be null), and the [newMover] that was added (may be null).
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onMoverChanged(Movers.Mover oldMover, Movers.Mover newMover) {
    this._moverChanged?.emit();
    this.onChanged();
  }

  /// Called when the matrix is added or removed is removed.
  ///
  /// This emits the [matrixChanged] event and calls [onChanged].
  /// The [oldMatrix] that was removed (may be null), and the [newMatrix] that was added (may be null).
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onMatrixChanged(Math.Matrix4 oldMatrix, Math.Matrix4 newMatrix) {
    this._matrixChanged?.emit();
    this.onChanged();
  }

  /// Handles a change in the child.
  ///
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onChildrenModified([EventArgs args = null]) {
    this.onChanged(args);
  }

  /// Called when one or more child is added.
  ///
  /// This emits the [onChildrenAdded] event and calls [onChanged].
  /// The [entities] are the newly added children.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onChildrenAdded(int index, Iterable<Entity> entities) {
    if (this._childrenAdded != null)
      this._childrenAdded.emit(new EntityEventArgs(this, entities));
    for (Entity entity in entities) {
      if (entity == null) entity.changed.add(this.onChildrenModified);
    }
    this.onChanged();
  }

  /// Called when a child is removed.
  ///
  /// This emits the [onChildrenRemoved] event and calls [onChanged].
  /// The [entities] are the children which were removed.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onChildrenRemoved(int index, Iterable<Entity> entities) {
    if (this._childrenRemoved != null)
      this._childrenRemoved.emit(new EntityEventArgs(this, entities));
    for (Entity entity in entities) {
      if (entity == null) entity.changed.remove(this.onChildrenModified);
    }
    this.onChanged();
  }
}
