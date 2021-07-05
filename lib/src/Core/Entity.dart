part of ThreeDart.Core;

/// A renderable entity in a tree of entities for a scene.
///
/// An [Entity] is a [Shape], [Technique], and a [Mover]
/// to create an output when rendered.
class Entity implements Movers.Movable, Events.Changeable {

  /// The name for this entity.
  String _name;

  /// Indicates if this entity and its children
  /// will be rendered or not.
  bool _enabled;

  /// The shape to render.
  /// May be null to not render this Entity which is useful
  /// when grouping other Entities.
  Shapes.Shape? _shape;

  /// The shape builder used to build the rendering data.
  /// When using a shape this will be a shape.
  /// May be null to not when not rendering.
  Shapes.ShapeBuilder? _shapeBuilder;

  /// The cache of the shape transformed into the buffers required
  /// by the shader in the currently set technique.
  /// TODO: Need to make the cache work for two techniques when there are parents.
  Data.TechniqueCache? _cache;

  /// The technique to render with or null to inherit from it's parent.
  Techniques.Technique? _tech;

  /// The mover to position, rotate, and scale this Entity and children.
  /// May be null to not move the Entity.
  Movers.Mover? _mover;

  /// The location and rotation of this entity.
  Math.Matrix4? _matrix;

  /// The list of children entities to this entity.
  Collections.Collection<Entity> _children;

  /// The event emitted when any part of the entity is changed.
  Events.Event? _changed;

  /// The event emitted when the shape has been changed.
  Events.Event? _shapeChanged;

  /// The event emitted when the shape builder has been changed.
  Events.Event? _shapeBuilderChanged;

  /// The event emitted when the technique has been changed.
  Events.Event? _techChanged;

  /// The event emitted when the mover has been changed.
  Events.Event? _moverChanged;

  /// The event emitted when the matrix has been changed.
  Events.Event? _matrixChanged;

  /// The event emitted when one or more children is added.
  Events.Event? _childrenAdded;

  /// The event emitted when one or more children is removed.
  Events.Event? _childrenRemoved;

  /// The event emitted when an extension is added.
  Events.Event? _extensionAdded;

  /// The event emitted when an extension is removed.
  Events.Event? _extensionRemoved;

  /// Creates a new Entity.
  Entity({String name: '',
          bool enabled: true,
          Shapes.Shape? shape: null,
          Techniques.Technique? tech: null,
          Movers.Mover? mover: null,
          List<Entity>? children: null}): 
    this._name    = name,
    this._enabled = enabled,
    this._shape        = null,
    this._shapeBuilder = null,
    this._cache    = null,
    this._tech     = null,
    this._mover    = null,
    this._matrix   = null,
    this._children = new Collections.Collection<Entity>(),
    this._changed      = null,
    this._shapeChanged = null,
    this._shapeBuilderChanged = null,
    this._techChanged      = null,
    this._moverChanged     = null,
    this._matrixChanged    = null,
    this._childrenAdded    = null,
    this._childrenRemoved  = null,
    this._extensionAdded   = null,
    this._extensionRemoved = null {
    this._children.setHandlers(
      onAddedHndl:   this.onChildrenAdded,
      onRemovedHndl: this.onChildrenRemoved);
    this.shape = shape;
    this.technique = tech;
    this.mover = mover;
    if (children != null)
      this._children.addAll(children);
  }

  /// The name for this entity.
  String get name => this._name;
  set name(String name) { this._name = name; }

  /// Indicates if this entity and its children
  /// will be rendered or not.
  bool get enabled => this._enabled;
  set enabled(bool enabled) { this._enabled = enabled; }

  /// Indicates if the shape cache needs to be updated.
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
  /// Since techniques are shared to children which don't provide their
  /// own technique this will clear all children and descendants which
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
  Data.TechniqueCache? get cache => this._cache;
  set cache(Data.TechniqueCache? cache) => this._cache = cache;

  /// The children Entities of this Entity.
  Collections.Collection<Entity> get children => this._children;

  /// The shape to draw at this Entity.
  /// May be null to not draw anything, useful if this Entity
  /// is just a container for child Entities.
  Shapes.Shape? get shape => this._shape;
  set shape(Shapes.Shape? shape) {
    if (this._shape != shape) {
      Shapes.Shape? oldShape = this._shape;
      this._shape = shape;
      this._shapeBuilder = shape;
      this.clearCache();
      oldShape?.changed.remove(this.onShapeModified);
      shape?.changed.add(this.onShapeModified);
      this.onShapeChanged(oldShape, shape);
    }
  }

  /// The shape builder to draw at this Entity.
  /// A shape builder is a predetermined shape drawing instructions.
  /// Typically this is set through [shape] but is exposed so that
  /// renders with higher requirements can precalculate shapes or provide
  /// custom shapes to the entity.
  Shapes.ShapeBuilder? get shapeBuilder => this._shapeBuilder;
  set shapeBuilder(Shapes.ShapeBuilder? builder) {
    if (this._shapeBuilder != builder) {
      Shapes.ShapeBuilder? oldBuilder = this._shapeBuilder;
      this._shape = null;
      this._shapeBuilder = builder;
      this.clearCache();
      oldBuilder?.changed.remove(this.onShapeModified);
      builder?.changed.add(this.onShapeModified);
      this.onShapeBuilderChanged(oldBuilder, builder);
    }
  }

  /// The technique to render this Entity and/or it's children with.
  /// May be null to inherit the technique from this Entities parent.
  Techniques.Technique? get technique => this._tech;
  set technique(Techniques.Technique? technique) {
    if (this._tech != technique) {
      Techniques.Technique? oldTech = this._tech;
      this._tech = technique;
      oldTech?.changed.remove(this.onTechModified);
      technique?.changed.add(this.onTechModified);
      this._cacheUpdateForTech();
      this.onTechChanged(oldTech, technique);
    }
  }

  /// The mover which moves this Entity.
  /// May be null to not move the Entity.
  Movers.Mover? get mover => this._mover;
  set mover(Movers.Mover? mover) {
    if (this._mover != mover) {
      Movers.Mover? oldMover = this._mover;
      this._mover = mover;
      oldMover?.changed.remove(this.onMoverModified);
      mover?.changed.add(this.onMoverModified);
      this.onMoverChanged(oldMover, this._mover);
    }
  }

  /// The matrix for the location and rotation of the entity.
  Math.Matrix4? get matrix => this._matrix;

  /// Finds this or the first child entity with the given name.
  /// Null is returned if none was found.
  Entity? findFirstByName(String name) {
    if (this.name == name) return this;
    for(Entity child in this._children) {
      Entity? result = child.findFirstByName(name);
      if (result != null) return result;
    }
    return null;
  }

  /// Finds this and all a children entities with the given name.
  /// If the optional given entity list is not null,
  /// then the found entities are added to that list.
  List<Entity> findAllByName(String name, [List<Entity>? entities = null]) {
    entities ??= [];
    if (this.name == name) entities.add(this);
    for(Entity child in this._children)
      child.findAllByName(name, entities);
    return entities;
  }

  /// Calculates the axial aligned bounding box of this entity and its children.
  Math.Region3? calculateAABB() {
    Math.Region3? region = null;
    if (this._shapeBuilder != null)
      region = Math.Region3.union(region, this._shapeBuilder?.calculateAABB());
    for (Entity child in this._children)
      region = Math.Region3.union(region, child.calculateAABB());
    return region;
  }

  /// Scales the AABB so that the longest size the given [size],
  /// and the shape is centered then offset by the given [offset].
  void resizeCenter([double size = 2.0, Math.Point3? offset = null]) {
    Math.Region3? aabb = this.calculateAABB();
    if (aabb == null) return;
    offset ??= Math.Point3.zero;
    offset -= aabb.center;
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
  /// for this entity's shape and children shapes.
  void applyPositionMatrix(Math.Matrix4 mat) {
    this.shape?.applyPositionMatrix(mat);
    for (Entity child in this._children)
      child.applyPositionMatrix(mat);
  }

  /// Modifies the color by translating it with the given [mat]
  /// for this entity's shape and children shapes.
  void applyColorMatrix(Math.Matrix3 mat) {
    this.shape?.applyColorMatrix(mat);
    for (Entity child in this._children)
      child.applyColorMatrix(mat);
  }

  /// Modifies the 2D texture by translating it with the given [mat]
  /// for this entity's shape and children shapes.
  void applyTexture2DMatrix(Math.Matrix3 mat) {
    this.shape?.applyTexture2DMatrix(mat);
    for (Entity child in this._children)
      child.applyTexture2DMatrix(mat);
  }

  /// Modifies the cube texture by translating it with the given [mat]
  /// for this entity's shape and children shapes.
  void applyTextureCubeMatrix(Math.Matrix4 mat) {
    this.shape?.applyTextureCubeMatrix(mat);
    for (Entity child in this._children)
      child.applyTextureCubeMatrix(mat);
  }

  /// Updates the Entity with the given [UpdateState].
  void update(RenderState state) {
    Math.Matrix4? mat = this._mover?.update(state, this);
    if (mat != this._matrix) {
      Math.Matrix4? oldMat = this._matrix;
      this._matrix = mat;
      this.onMatrixChanged(oldMat, this._matrix);
    }

    // Updated the technique.
    this._tech?.update(state);

    // Update all children.
    for (Entity child in this._children)
      child.update(state);
  }

  /// Renders the Entity with the given [RenderState].
  void render(RenderState state) {
    if (!this._enabled) return;

    // Push state onto the render state.
    state.object.pushMul(this._matrix);
    state.pushTechnique(this._tech);

    // Render this entity.
    Techniques.Technique? tech = state.technique;
    if (this._shapeBuilder != null)
      tech?.render(state, this);

    // Render all children.
    for (Entity child in this._children)
      child.render(state);

    // Pop state from update.
    state.popTechnique();
    state.object.pop();
  }

  /// The event emitted when any part of the entity is changed.
  Events.Event get changed =>
    this._changed ??= new Events.Event();

  /// The event emitted when the shape has been changed.
  Events.Event get shapeChanged =>
    this._shapeChanged ??= new Events.Event();

  /// The event emitted when the technique has been changed.
  Events.Event get techChanged =>
    this._techChanged ??= new Events.Event();

  /// The event emitted when the mover has been changed.
  Events.Event get moverChanged =>
    this._moverChanged ??= new Events.Event();

  /// The event emitted when the matrix has been changed.
  Events.Event get matrixChanged =>
    this._matrixChanged ??= new Events.Event();

  /// The event emitted when one or more child is added.
  Events.Event get childrenAdded =>
    this._childrenAdded ??= new Events.Event();

  /// The event emitted when one or more child is removed.
  Events.Event get childrenRemoved =>
    this._childrenRemoved ??= new Events.Event();

  /// The event emitted when an extension is added.
  Events.Event get extensionAdded =>
    this._extensionAdded ??= new Events.Event();

  /// The event emitted when an extension is removed.
  Events.Event get extensionRemoved =>
    this._extensionRemoved ??= new Events.Event();

  /// Called when any change has occurred.
  ///
  /// This emits the [changed] event.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onChanged([Events.EventArgs? args = null]) =>
    this._changed?.emit(args);

  /// Called when the shape or shape builder is modified.
  ///
  /// This will clear the shape cache.
  /// The [args] are the arguments of the change.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onShapeModified([Events.EventArgs? args = null]) {
    this.clearCache();
    this.onChanged(args);
  }

  /// Called when the shape is added or removed.
  ///
  /// This emits the [shapeChanged] event, the [shapeBuilderChanged] event, and calls [onChanged].
  /// The [oldShape] that was removed (may be null), and the [newShape] that was added (may be null).
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onShapeChanged(Shapes.Shape? oldShape, Shapes.Shape? newShape) {
    Events.EventArgs args = new Events.ValueChangedEventArgs(this, 'shape', oldShape, newShape);
    this._shapeChanged?.emit(args);
    this._shapeBuilderChanged?.emit(args);
    this.onChanged(args);
  }

  /// Called when the shape builder is added or removed.
  ///
  /// This emits the [shapeBuilderChanged] event and calls [onChanged].
  /// The [oldShape] that was removed (may be null), and the [newShape] that was added (may be null).
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onShapeBuilderChanged(Shapes.ShapeBuilder? oldShape, Shapes.ShapeBuilder? newShape) {
    Events.EventArgs args = new Events.ValueChangedEventArgs(this, 'shapeBuilder', oldShape, newShape);
    this._shapeBuilderChanged?.emit(args);
    this.onChanged(args);
  }

  /// Handles a change in the technique.
  ///
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onTechModified([Events.EventArgs? args = null]) =>
    this.onChanged(args);

  /// Called when the technique is added or removed.
  ///
  /// This emits the [techChanged] event and calls [onChanged].
  /// The [oldTech] that was removed (may be null), and the [newTech] that was added (may be null).
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onTechChanged(Techniques.Technique? oldTech, Techniques.Technique? newTech) {
    Events.EventArgs args = new Events.ValueChangedEventArgs(this, 'technique', oldTech, newTech);
    this._techChanged?.emit(args);
    this.onChanged(args);
  }

  /// Handles a change in the mover.
  ///
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onMoverModified([Events.EventArgs? args = null]) =>
    this.onChanged(args);

  /// Called when the mover is added or removed is removed.
  ///
  /// This emits the [moverChanged] event and calls [onChanged].
  /// The [oldMover] that was removed (may be null), and the [newMover] that was added (may be null).
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onMoverChanged(Movers.Mover? oldMover, Movers.Mover? newMover) {
    Events.EventArgs args = new Events.ValueChangedEventArgs(this, 'mover', oldMover, newMover);
    this._moverChanged?.emit(args);
    this.onChanged(args);
  }

  /// Called when the matrix is added or removed is removed.
  ///
  /// This emits the [matrixChanged] event and calls [onChanged].
  /// The [oldMatrix] that was removed (may be null), and the [newMatrix] that was added (may be null).
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onMatrixChanged(Math.Matrix4? oldMatrix, Math.Matrix4? newMatrix) {
    Events.EventArgs args = new Events.ValueChangedEventArgs(this, 'matrix', oldMatrix, newMatrix);
    this._matrixChanged?.emit(args);
    this.onChanged(args);
  }

  /// Handles a change in the child.
  ///
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onChildrenModified([Events.EventArgs? args = null]) =>
    this.onChanged(args);

  /// Called when one or more child is added.
  ///
  /// This emits the [onChildrenAdded] event and calls [onChanged].
  /// The [entities] are the newly added children.
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onChildrenAdded(int index, Iterable<Entity> entities) {
    this._childrenAdded?.emit(new EntityEventArgs(this, entities.toList()));
    for (Entity entity in entities)
      entity.changed.add(this.onChildrenModified);
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
    this._childrenRemoved?.emit(new EntityEventArgs(this, entities.toList()));
    for (Entity entity in entities)
      entity.changed.remove(this.onChildrenModified);
    this.onChanged();
  }

  /// Gets a string for this entity, the name if it has one.
  @override
  String toString() => this._name.isEmpty ? 'Unnamed entity' : this._name;

  /// Gets the string tree for these entity tree.
  Debug.StringTree _stringTree() {
    Debug.StringTree tree = new Debug.StringTree(this.toString());
    for (Entity child in this.children) tree.append(child._stringTree());
    return tree;
  }

  /// Gets a string for the branch of entities from this entity.
  String outlineString([String indent = '']) => this._stringTree().toString(indent);
}
