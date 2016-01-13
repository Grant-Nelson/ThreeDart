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

  // TODO: Connect and expose these events.

  Event _shapeChanged;
  Event _techChanged;
  Event _childrenChanged;
  Event _moverChanged;

  /// Creates a new Entity.
  Entity({
      Shapes.Shape shape: null,
      Techniques.Technique tech: null,
      Movers.Mover mover: null}) {
    this._shape = shape;
    this._cache = null;
    this._tech = tech;
    this._children = new EntityCollection._(this);
    this._mover = mover;
    this._shapeChanged = new Event(this);
    this._techChanged = new Event(this);
    this._childrenChanged = new Event(this);
    this._moverChanged = new Event(this);
  }

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
    this._mover = mover;
  }

  /// The shape to draw at this Entity.
  ///
  /// May be null to not draw anything, usefull if this Entity
  /// is just a container for child Entitys.
  Shapes.Shape get shape => this._shape;
  set shape(Shapes.Shape shape) {
    this._shape = shape;
    this.clearCache();
  }

  /// The techinque to render this Entity and/or it's children with.
  ///
  /// May be null to inherit the technique from this Entitys parent.
  Techniques.Technique get technique => this._tech;
  set technique(Techniques.Technique technique) {
    this._tech = technique;
    this._cacheUpdateForTech();
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
}
