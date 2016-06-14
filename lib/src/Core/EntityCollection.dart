part of ThreeDart.Core;

/// A collection of entities which are children of an entity.
class EntityCollection {

  /// The parent entity this collection belongs to.
  Entity _entity;

  /// The list of all the children.
  List<Entity> _children;

  /// Constructs a new entity collection for the given parent [_entity].
  EntityCollection._(this._entity) {
    this._children = new List<Entity>();
  }

  /// The parent entity this collection belongs to.
  Entity get entity => this._entity;

  /// Adds the given [entity] to this collection.
  void add(Entity entity) {
    this._children.add(entity);
    this._entity.onChildAdded(entity);
  }

  /// Removes all the children.
  /// This will not emit the child removed
  void clear() {
    if (this._children.length > 0) {
      this._children.clear();
      this._entity.onChildrenCleared();
    }
  }

  /// Determines if the collection is empty.
  bool get isEmpty => this._children.isEmpty;

  /// The number of entities in the collection.
  int get length => this._children.length;

  /// Gets the entity at the given [index].
  Entity operator[](int index) => this._children[index];

  /// Gets the index of the given [entity].
  int indexOf(Entity entity) => this._children.indexOf(entity);

  /// Calls the given function handler, [funcHndl], foreach entity.
  void forEach(void funcHndl(Entity entity)) => this._children.forEach(funcHndl);

  /// Removes the entity at the given [index] in this collection.
  /// The removed entity is returned.
  Entity removeAt(int index) {
    Entity entity = this._children.removeAt(index);
    if (entity != null) this._entity.onChildRemoved(entity);
    return entity;
  }

  /// Removed the first instance of the given [entity] from this collection.
  /// True is returned if the entity was found and removed, false if not found.
  bool remove(Entity entity) {
    if (this._children.remove(entity)) {
      this._entity.onChildRemoved(entity);
      return true;
    }
    return false;
  }
}
