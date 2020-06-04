library ThreeDart.Octtree;

import '../Math/Math.dart' as Math;

part 'Branch.dart';
part 'Leaf.dart';
part 'Node.dart';
part 'Pass.dart';
part 'Path.dart';

class Octtree {
  final Math.Cube maxCube;

  Node _root;
  Path _rootPath;
  
  Octtree._(this.maxCube) {
    this._root = null;
    this._rootPath = null;
  }

  factory Octtree({Math.Cube maxCube = null}) =>
    new Octtree._(new Math.Cube(-5000.0, -5000.0, -5000.0, 10000.0));
}
