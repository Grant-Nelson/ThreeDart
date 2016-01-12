part of ThreeDart.Core;

class EntityCollection {

  Entity _obj;
  List<Entity> _children;

  EntityCollection._(Entity this._obj) {
    this._children = new List<Entity>();
  }

  Entity get Entity => this._obj;

  void add(Entity obj) {
    this._children.add(obj);
  }

  bool get isEmpty => this._children.isEmpty;
  int get length => this._children.length;
  Entity operator[](int index) => this._children[index];
  int indexOf(Entity obj) => this._children.indexOf(obj);
  void forEach(void funcHndl(Entity obj)) => this._children.forEach(funcHndl);

  Entity removeAt(int index) {
    return this._children.removeAt(index);
  }

  bool remove(Entity obj) {
    return this._children.remove(obj);
  }
}
