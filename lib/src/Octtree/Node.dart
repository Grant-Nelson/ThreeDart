part of ThreeDart.Octtree;

class Node {
  Node _parent;

  Node._() {
    this._parent = null;
  }

  Node get parent => this._parent;
}
