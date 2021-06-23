part of ThreeDart.Intersections;

/// Determines the intersection between the given [ray] and [plane].
RayPlaneResult rayPlane(Math.Ray3 ray, Math.Plane plane) {
  Math.Vector3 norm = plane.normal;
  Math.Vector3 p0 = new Math.Vector3(ray.x, ray.y, ray.z);
  Math.Vector3 vec = ray.vector;
  final double dem = vec.dot(norm);
  if (dem == 0.0) return new RayPlaneResult.none();

  double t = (plane.offset - p0.dot(norm)) / dem;
  if ((t < 0.0) || (t > 1.0)) return new RayPlaneResult.none();

  return new RayPlaneResult(Math.Point3.fromVector3(p0 + norm*t), t);
}

/// Results from an intersection between a 3D ray and plane.
class RayPlaneResult extends BaseResult {

  /// The point in or on the plane which the ray intersects.
  final Math.Point3? point;

  /// The parametric value between 0 and 1 inclusively of the ray to the intersection point.
  final double parametric;

  /// Creates a new intersection result.
  RayPlaneResult._(bool intesects, this.point, this.parametric): super(intesects);

  /// Creates a new intersection result.
  factory RayPlaneResult(Math.Point3 point, double parametric) =>
    new RayPlaneResult._(true, point, parametric);

  /// Creates a new intersection result.
  factory RayPlaneResult.none() =>
    new RayPlaneResult._(false, null, 0.0);

  /// Gets the string for this intersection.
  @override
  String toString() => "${super.toString()} $point $parametric";
}
