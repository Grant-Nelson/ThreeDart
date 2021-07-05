part of ThreeDart.Intersections;

/// Determines the intersection between the given [ray] and this region.
RayRegion2Result rayRegion2(Math.Ray2 ray, Math.Region2 region) {
  final double maxx = region.x + region.dx;
  final double maxy = region.y + region.dy;

  // Check for point inside box, trivial reject, and determine
  // parametric distance to each front face
  bool inside = true;
  double xt = 0.0, xn = 0.0, xp = 0.0;
  Math.HitRegion xregion = Math.HitRegion.None;
  if (ray.x < region.x) {
    xt = region.x - ray.x;
    if (xt > ray.dx) return new RayRegion2Result.none();
    xt /= ray.dx;
    inside = false;
    xn = -1.0;
    xp = region.x;
    xregion = Math.HitRegion.XNeg;
  } else {
    if (ray.x > maxx) {
      xt = maxx - ray.x;
      if (xt < ray.dx) return new RayRegion2Result.none();
      xt /= ray.dx;
      inside = false;
      xn = 1.0;
      xp = maxx;
      xregion = Math.HitRegion.XPos;
    } else {
      xt = -1.0;
    }
  }

  double yt = 0.0, yn = 0.0, yp = 0.0;
  Math.HitRegion yregion = Math.HitRegion.None;
  if (ray.y < region.y) {
    yt = region.y - ray.y;
    if (yt > ray.dy) return new RayRegion2Result.none();
    yt /= ray.dy;
    inside = false;
    yn = -1.0;
    yp = region.y;
    yregion = Math.HitRegion.YNeg;
  } else {
    if (ray.y > maxy) {
      yt = maxy - ray.y;
      if (yt < ray.dy) return new RayRegion2Result.none();
      yt /= ray.dy;
      inside = false;
      yn = 1.0;
      yp = maxy;
      yregion = Math.HitRegion.YPos;
    } else {
      yt = -1.0;
    }
  }

  if (inside)
    return new RayRegion2Result(ray.start, -ray.vector.normal(), 0.0, Math.HitRegion.Inside);

  // The farthest plane is the plane of intersection.
  if (yt > xt) {
    // intersect with xz plane
    double x = ray.x + ray.dx*yt;
    if (Math.inRange(x, region.x, maxx))
      return new RayRegion2Result(new Math.Point2(x, yp), new Math.Vector2(0.0, yn), yt, yregion);

  } else {
    // intersect with yz plane
    double y = ray.y + ray.dy*xt;
    if (Math.inRange(y, region.y, maxy))
      return new RayRegion2Result(new Math.Point2(xp, y), new Math.Vector2(xn, 0.0), xt, xregion);
  }

  return new RayRegion2Result.none();
}

/// Results from an intersection between a 2D ray and region.
class RayRegion2Result extends BaseResult {

  /// The point in or on the region which the ray intersects.
  final Math.Point2? point;

  /// The normal of the surface on the region that the ray intersects.
  final Math.Vector2? normal;

  /// The parametric value between 0 and 1 inclusively of the ray to the intersection point.
  final double parametric;

  /// The side of the region which was hit.
  final Math.HitRegion region;
  
  /// Creates a new intersection result.
  RayRegion2Result._(bool intersets, this.point, this.normal, this.parametric, this.region): super(intersets);

  /// Creates a new intersection result for an intersection.
  factory RayRegion2Result(Math.Point2 point, Math.Vector2 normal, double parametric, Math.HitRegion region) =>
    new RayRegion2Result._(true, point, normal, parametric, region);
  
  /// Creates a new intersection result for no intersection.
  factory RayRegion2Result.none() =>
    new RayRegion2Result._(false, null, null, 0.0, Math.HitRegion.None);

  /// Gets the string for this intersection.
  @override
  String toString() => "${super.toString()} $point <$normal> $parametric $region";
}
