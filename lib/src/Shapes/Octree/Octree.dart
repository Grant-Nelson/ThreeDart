library ThreeDart.Shapes.Octree;

import '../../Math/Math.dart' as Math;

part 'Branch.dart';
part 'Leaf.dart';
part 'Node.dart';
part 'Pass.dart';
part 'Path.dart';

/// An octree for storing a shape. It uses more memory than other shape storage
/// but provides significantly faster shape mathematics
class Octree {
  Node _root;
  Path _rootPath;

  final Math.Cube maxCube;
  
  Octree._(this.maxCube) {
    this._root = null;
    this._rootPath = null;
  }

  factory Octree({Math.Cube maxCube = null}) =>
    new Octree._(new Math.Cube(-5000.0, -5000.0, -5000.0, 10000.0));
}
