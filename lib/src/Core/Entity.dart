part of ThreeDart.Core;

/// A renderable dntity in a tree of dntities for a scene.
///
/// An [Entity] is a [Shape], [Technique], and a [Mover]
/// to create an output when rendered.
class Entity implements Movers.Movable, Renderable {

  /// The shape to render.
  /// May be null to not render this Entity which is useful
  /// when grouping other Entitys.
  Shapes.Shape _shape;

  /// The cache of the shape transformed into the buffers required
  /// by the shader in the currently set technique.
  Data.TechniqueCache _cache;

  /// The technique to render with or null to inherit from it's parent.
  Techniques.Technique _tech;

  /// The list of children Entitys to this Entity.
  EntityCollection _children;

  /// The mover to position, rotate, and scale this Entity and children.
  /// May be null to not move the Entity.
  Movers.Mover _mover;

  /// The event emitted when any part of the entity is changed.
  Event _changed;

  /// The event emitted when the shape has been changed.
  Event _shapeChanged;

  /// The event emitted when the technique has been changed.
  Event _techChanged;

  /// The event emitted when a child is added.
  Event _childAdded;

  /// The event emitted when a child is removed.
  Event _childRemoved;

  /// The event emitted when the mover has been changed.
  Event _moverChanged;

  /// Creates a new Entity.
  /// May provide an initial [shape], [tech], or [mover].
  Entity({Shapes.Shape shape: null,
          Techniques.Technique tech: null,
          Movers.Mover mover: null}) {
    this._shape = shape;
    this._cache = null;
    this._tech = tech;
    this._children = new EntityCollection._(this);
    this._mover = mover;
    this._changed = new Event();
    this._shapeChanged = new Event();
    this._techChanged = new Event();
    this._childAdded = new Event();
    this._childRemoved = new Event();
    this._moverChanged = new Event();
  }

  /// Indicates if the shape cashe needs to be updated.
  bool get cacheNeedsUpdate => this._cache == null;

  /// Requests that the shape cache is updated.
  ///
  /// If the shape is changed internally without being removed and reset or the requirements
  /// of the technique has changed without being removed then calling this will update the cache.
  /// Typically this should not have to be called.
  void clearCache() => this._cache = null;

  /// The event emitted when any part of the entity is changed.
  Event get changed => this._changed;

  /// The event emitted when the shape has been changed.
  Event get shapeChanged => this._shapeChanged;

  /// The event emitted when the technique has been changed.
  Event get techChanged => this._techChanged;

  /// The event emitted when a child is added.
  Event get childAdded => this._childAdded;

  /// The event emitted when a child is removed.
  Event get childRemoved => this._childRemoved;

  /// The event emitted when the mover has been changed.
  Event get moverChanged => this._moverChanged;

  /// Requests that this and child shape caches are updated.
  ///
  /// This will clear the caches for updating when the technique changes.
  /// Since techniques are shared to children which don't provide thier
  /// own technique this will clear all children and descendents which
  /// currently use this technique.
  void _cacheUpdateForTech() {
    this.clearCache();
    for(Entity child in this._children._children) {
      if (child._tech == null) {
        child._cacheUpdateForTech();
      }
    }
  }

  /// The cache of the current shape in buffers for the current technique.
  set cache(Data.TechniqueCache cache) => _cache = cache;
  Data.TechniqueCache get cache => this._cache;

  /// The children Entitys of this Entity.
  EntityCollection get children => _children;

  /// The mover which moves this Entity.
  ///
  /// May be null to not move the Entity.
  Movers.Mover get mover => this._mover;
  void set mover(Movers.Mover mover) {
    if (this._mover != mover) {
      Movers.Mover oldMover = this._mover;
      this._mover = mover;
      this.onMoverChanged(oldMover, this._mover);
    }
  }

  /// The shape to draw at this Entity.
  ///
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
  ///
  /// May be null to inherit the technique from this Entitys parent.
  Techniques.Technique get technique => this._tech;
  set technique(Techniques.Technique technique) {
    if (this._tech != technique) {
      Techniques.Technique oldTech = this._tech;
      this._tech = technique;
      this._cacheUpdateForTech();
      this.onTechChanged(oldTech, this._tech);
    }
  }

  /// Renders the Entity with the given [RenderState].
  void render(RenderState state) {
    Math.Matrix4 mat = null;
    if (this._mover != null) {
      mat = this._mover.update(state, this);
    }

    // Push state onto the renderer.
    state.object.pushMul(mat);
    state.pushTechnique(this._tech);

    // Render this Entity.
    Techniques.Technique tech = state.technique;
    if ((tech != null) && (this._shape != null)) {
      tech.render(state, this);
    }

    // Render all children.
    for (Entity child in this._children._children) {
      child.render(state);
    }

    // Pop state from renderer.
    state.popTechnique();
    state.object.pop();
  }

  /// Called when any change has occurred.
  /// This emits the [changed] event.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onChanged() {
    this._changed.emit();
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
  }

  /// Called when the shape is added or removed.
  ///
  /// This emits the [shapeChanged] event and calls [onChanged].
  /// The [oldShape] that was removed (may be null), and the [newShape] that was added (may be null).
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onShapeChanged(Shapes.Shape oldShape, Shapes.Shape newShape) {
    this._shapeChanged.emit();
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
    this._techChanged.emit();
    this.onChanged();
  }

  /// Called when a child is added.
  ///
  /// This emits the [childAdded] event and calls [onChanged].
  /// The [entity] is the newly added child.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onChildAdded(Entity entity) {
    this._childAdded.emit();
    this.onChanged();
  }

  /// Called when a child is removed.
  ///
  /// This emits the [childRemoved] event and calls [onChanged].
  /// The [entity] is the child which was removed.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onChildRemoved(Entity entity) {
    this._childRemoved.emit();
    this.onChanged();
  }

  /// Called when the mover is added or removed is removed.
  ///
  /// This emits the [moverChanged] event and calls [onChanged].
  /// The [oldMover] that was removed (may be null), and the [newMover] that was added (may be null).
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onMoverChanged(Movers.Mover oldMover, Movers.Mover newMover) {
    this._moverChanged.emit();
    this.onChanged();
  }
}
