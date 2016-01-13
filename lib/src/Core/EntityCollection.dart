part of ThreeDart.Core;

class EntityCollection {

  Entity _obj;
  List<Entity> _children;

  EntityCollection._(Entity this._obj) {
    this._children = new List<Entity>();
  }

  Entity get entity => this._obj;

  void add(Entity obj) {
    this._children.add(obj);
    this._obj._childrenChanged.emit(new ChangedEventArgs.added(obj));
  }

  bool get isEmpty => this._children.isEmpty;
  int get length => this._children.length;
  Entity operator[](int index) => this._children[index];
  int indexOf(Entity obj) => this._children.indexOf(obj);
  void forEach(void funcHndl(Entity obj)) => this._children.forEach(funcHndl);

  Entity removeAt(int index) {
    Entity obj = this._children.removeAt(index);
    if (obj != null)
      this._obj._childrenChanged.emit(new ChangedEventArgs.removed(obj));
    return obj;
  }

  bool remove(Entity obj) {
    if (this._children.remove(obj)) {
      this._obj._childrenChanged.emit(new ChangedEventArgs.removed(obj));
      return true;
    }
    return false;
  }
}
