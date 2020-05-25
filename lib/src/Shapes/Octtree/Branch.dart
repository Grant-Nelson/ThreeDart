part of ThreeDart.Shapes.Octtree;

class Branch extends Node {

  List<Node> _children;

  Branch() {
    this._children = new List<Node>.filled(8, null, growable: false);
  }

  int _index(bool x, bool y, bool z) =>
    (x? 1: 0) | (y? 2: 0) | (z? 4: 0);

  Node getNode(bool x, bool y, bool z) =>
    this._children[this._index(x, y, z)];

}
