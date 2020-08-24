library ThreeDart.Collisions;

import 'dart:math' as math;

import '../Math/Math.dart' as Math;

part 'TwoAABB.dart';
part 'TwoSphere.dart';
part 'SpherePlane.dart';

// FUTURE: Add the following:
// - TwoRegion2
// - TwoRegion3
// - RegionSphere
// - AABBSphere
// - RegionPlane
// - AABBPlane
// - SpherePlane
// - TriangleRegion
// - TriangleAABB
// - TriangleSphere
// - TrianglePlane
// - TwoTriangle

/// Indicates the result type of the collision.
enum Type {

  /// Indicates there was no collision because the two shapes were already intesected at t = 0.
  Intesected,

  /// Indicates that no collision is possible, meaning the shapes are not moving relative
  /// to eachother, they are moving parrallel to eachother, or they are moving away from eachother.
  NoCollision,

  /// Indicates that a collision would happen in the future if the shapes doen't change direction,
  /// but didn't happen within the length of the given vector(s).
  /// 
  /// Although additional information such as the hit location can be determined for
  /// out-of-range collisions, they are not calculated to save computation time since normally
  /// out-of-range collisions are treated the same as no collision.
  OutOfRange,

  /// Indicaates the shape collide within the given vector(s).
  Collision,
}

/// The common shared result of a collision test between two shapes.
class BaseResult {

  /// The type of collision which occurred.
  final Type type;

  /// The amount of time based on the vector(s) before the collision.
  /// A collision within the vector will have a parametric between 0 and 1 inclusively.
  final double parametric;

  /// Indicates if a collision occurred with the given vector(s).
  bool get collided => type == Type.Collision;
  
  /// Creates a new collision result for collision between shapes.
  BaseResult(Type this.type, double this.parametric);

  /// Gets the string for this collision.
  @override
  String toString() {
    switch (this.type) {
      case Type.Intesected:  return "intesected";
      case Type.NoCollision: return "noCollision";
      case Type.OutOfRange:  return "outOfRange at ${this.parametric}";
      case Type.Collision:   return "collision at ${this.parametric}";
      default: return "Unknown collision value";
    }
  }
}
