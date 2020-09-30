library ThreeDart.Intersections;

import 'dart:math' as math;

import '../Math/Math.dart' as Math;

part 'Planes.dart';
part 'RayPlane.dart';
part 'RayRegion2.dart';
part 'RayRegion3.dart';
part 'RaySphere.dart';
part 'RegionPlane.dart';
part 'RegionTriangle.dart';
part 'TrianglePlane.dart';

/// The common shared result of a intersection test between shapes.
class BaseResult {

  /// Indicates if a intersection occurred.
  final bool intesects;
  
  /// Creates a new intersection result for intersection between shapes.
  BaseResult(this.intesects);

  /// Gets the string for this intersection.
  @override
  String toString() => intesects? "intesection": "noIntesection";
}
