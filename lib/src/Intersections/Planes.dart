part of ThreeDart.Intersections;

/// Get the point intersection of three planes.
PlanesResult planes(Math.Plane plane1, Math.Plane plane2, Math.Plane plane3) {
  Math.Vector3 normal1 = plane1.normal;
  Math.Vector3 normal2 = plane2.normal;
  Math.Vector3 normal3 = plane3.normal;

  Math.Vector3 cross12 = normal1.cross(normal2);
  double div = cross12.dot(normal3);
  if (Math.Comparer.equals(div, 0.0)) return new PlanesResult(false, null);

  Math.Vector3 cross23 = normal2.cross(normal3);
  Math.Vector3 cross31 = normal3.cross(normal1);
  Math.Vector3 result = (cross23*plane1.offset + cross31*plane2.offset + cross12*plane3.offset) / div;
  return new PlanesResult(true, new Math.Point3.fromVector3(result));
}

/// Results from an intersection between 3 planes.
class PlanesResult extends BaseResult {

  /// The point where the 3 planes intersect at or null when not intersection.
  final Math.Point3? point;

  /// Creates a new intersection result.
  PlanesResult(bool intesects, this.point): super(intesects);

  /// Gets the string for this intersection.
  @override
  String toString() => "${super.toString()} $point";
}
