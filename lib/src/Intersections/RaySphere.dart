part of ThreeDart.Intersections;

/// Determines the intersection between the given [ray] and [sphere].
RaySphereResult raySphere(Math.Ray3 ray, Math.Sphere sphere) {
  Math.Point3 start = ray.start;
  Math.Vector3 e = start.vectorTo(sphere.center);

  final double e2 = e.length2();
  final double r2 = sphere.radius*sphere.radius;
  if (e2 <= r2) return new RaySphereResult(true, start, 0.0);

  final double a = e.dot(ray.vector);
  final double t = a - math.sqrt(r2 - e2 + a*a);
  if ((t < 0.0) || (t > 1.0)) return RaySphereResult(false, null, 0.0);

  Math.Point3 pnt = new Math.Point3(ray.x + ray.dx*t, ray.y + ray.dy*t, ray.z + ray.dz*t);
  return new RaySphereResult(true, pnt, t);
}

/// Results from an intersection between a 3D ray and sphere.
class RaySphereResult extends BaseResult {

  /// The point in or on the surface of the sphere which the ray intersects.
  final Math.Point3 point;

  /// The parametric value between 0 and 1 inclusively of the ray to the intersection point.
  final double parametric;

  /// Creates a new intersection result.
  RaySphereResult(bool intersects, this.point, this.parametric): super(intersects);

  /// Gets the string for this intersection.
  @override
  String toString() => "${super.toString()} $point $parametric";
}
