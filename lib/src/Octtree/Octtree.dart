library ThreeDart.Octtree;

part 'Branch.dart';
part 'Leaf.dart';
part 'Node.dart';
part 'Pass.dart';
part 'Path.dart';

class Octtree {

  final double maxSize;
  final double xOffset;
  final double yOffset;
  final double zOffset;

  Node _root;
  Path _rootPath;

  Octtree({this.maxSize = 10000.0, this.xOffset = -5000.0, this.yOffset = -5000.0, this.zOffset = -5000.0}) {
    this._root = null;
    this._rootPath = null;
  }

}
