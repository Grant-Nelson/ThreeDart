part of ThreeDart.Core;

class EntityCollection {

  Entity _entity;
  List<Entity> _children;

  EntityCollection._(Entity this._entity) {
    this._children = new List<Entity>();
  }

  Entity get entity => this._entity;

  void add(Entity entity) {
    this._children.add(entity);
    this._entity.onChildAdded(entity);
  }

  bool get isEmpty => this._children.isEmpty;
  int get length => this._children.length;
  Entity operator[](int index) => this._children[index];
  int indexOf(Entity entity) => this._children.indexOf(entity);
  void forEach(void funcHndl(Entity entity)) => this._children.forEach(funcHndl);

  Entity removeAt(int index) {
    Entity entity = this._children.removeAt(index);
    if (entity != null) this._entity.onChildRemoved(entity);
    return entity;
  }

  bool remove(Entity entity) {
    if (this._children.remove(entity)) {
      this._entity.onChildRemoved(entity);
      return true;
    }
    return false;
  }
}
