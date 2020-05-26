part of ThreeDart.Shapes.Octtree;

class Branch extends Node {

  List<Node> _children;

  Branch(): super._() {
    this._children = new List<Node>.filled(8, null, growable: false);
  }

  Node getChild(int index) =>
    this._children[index];
}
