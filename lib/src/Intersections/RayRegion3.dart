part of ThreeDart.Intersections;

/// Determines the intersection between the given [ray] and [region].
RayRegion3Result rayRegion3(Math.Ray3 ray, Math.Region3 region) {
  final double maxx = region.x + region.dx;
  final double maxy = region.y + region.dy;
  final double maxz = region.z + region.dz;

  // Check for point inside box, trivial reject, and determine
  // parametric distance to each front face
  bool inside = true;
  double xt, xn, xp;
  Math.HitRegion xregion;
  if (ray.x < region.x) {
    xt = region.x - ray.x;
    if (xt > ray.dx) return new RayRegion3Result.none();
    xt /= ray.dx;
    inside = false;
    xn = -1.0;
    xp = region.x;
    xregion = Math.HitRegion.XNeg;

  } else if (ray.x > maxx) {
    xt = maxx - ray.x;
    if (xt < ray.dx) return new RayRegion3Result.none();
    xt /= ray.dx;
    inside = false;
    xn = 1.0;
    xp = maxx;
    xregion = Math.HitRegion.XPos;

  } else {
    xt = -1.0;
  }

  double yt, yn, yp;
  Math.HitRegion yregion;
  if (ray.y < region.y) {
    yt = region.y - ray.y;
    if (yt > ray.dy) return new RayRegion3Result.none();
    yt /= ray.dy;
    inside = false;
    yn = -1.0;
    yp = region.y;
    yregion = Math.HitRegion.YNeg;

  } else if (ray.y > maxy) {
    yt = maxy - ray.y;
    if (yt < ray.dy) return new RayRegion3Result.none();
    yt /= ray.dy;
    inside = false;
    yn = 1.0;
    yp = maxy;
    yregion = Math.HitRegion.YPos;

  } else {
    yt = -1.0;
  }

  double zt, zn, zp;
  Math.HitRegion zregion;
  if (ray.z < region.z) {
    zt = region.z - ray.z;
    if (zt > ray.dz) return new RayRegion3Result.none();
    zt /= ray.dz;
    inside = false;
    zn = -1.0;
    zp = region.z;
    zregion = Math.HitRegion.ZNeg;

  } else if (ray.z > maxz) {
    zt = maxz - ray.z;
    if (zt < ray.dz) return new RayRegion3Result.none();
    zt /= ray.dz;
    inside = false;
    zn = 1.0;
    zp = maxz;
    zregion = Math.HitRegion.ZPos;

  } else {
    zt = -1.0;
  }

  if (inside) {
    return new RayRegion3Result(ray.start, -ray.vector.normal(), 0.0, Math.HitRegion.Inside);
  }

  // The farthest plane is the plane of intersection.
  int which = (yt > xt)? ((zt > yt)? 2: 1): ((zt > xt)? 2: 0);
  switch (which) {
  case 0: // intersect with yz plane
    double y = ray.y + ray.dy*xt;
    if (!Math.inRange(y, region.y, maxy)) return new RayRegion3Result.none();

    double z = ray.z + ray.dz*xt;
    if (!Math.inRange(z, region.z, maxz)) return new RayRegion3Result.none();

    return new RayRegion3Result(new Math.Point3(xp, y, z), new Math.Vector3(xn, 0.0, 0.0), xt, xregion);

  case 1: // intersect with xz plane
    double x = ray.x + ray.dx*yt;
    if (!Math.inRange(x, region.x, maxx)) return new RayRegion3Result.none();

    double z = ray.z + ray.dz*yt;
    if (!Math.inRange(z, region.z, maxz)) return new RayRegion3Result.none();

    return new RayRegion3Result(new Math.Point3(x, yp, z), new Math.Vector3(0.0, yn, 0.0), yt, yregion);

  default: // 2, intersect with xy plane
    double x = ray.x + ray.dx*zt;
    if (!Math.inRange(x, region.x, maxx)) return new RayRegion3Result.none();

    double y = ray.y + ray.dy*zt;
    if (!Math.inRange(y, region.y, maxy)) return new RayRegion3Result.none();

    return new RayRegion3Result(new Math.Point3(x, y, zp), new Math.Vector3(0.0, 0.0, zn), zt, zregion);
  }
}

/// Results from an intersection between a 3D ray and region.
class RayRegion3Result extends BaseResult {

  /// The point in or on the region which the ray intersects.
  final Math.Point3 point;

  /// The normal of the surface on the region that the ray intersects.
  final Math.Vector3 normal;

  /// The parametric value between 0 and 1 inclusively of the ray to the intersection point.
  final double parametric;

  /// The side of the region which was hit.
  final Math.HitRegion region;

  /// Creates a new intersection result.
  RayRegion3Result._(bool intesects, this.point, this.normal, this.parametric, this.region): super(intesects);

  /// Creates a new intersection result for an intersection.
  factory RayRegion3Result(Math.Point3 point, Math.Vector3 normal, double parametric, Math.HitRegion region) =>
    new RayRegion3Result._(true, point, normal, parametric, region);
  
  /// Creates a new intersection result for no intersection.
  factory RayRegion3Result.none() =>
    new RayRegion3Result._(false, null, null, 0.0, Math.HitRegion.None);

  /// Gets the string for this intersection.
  @override
  String toString() => "${super.toString()} $point <$normal> $parametric $region";
}
