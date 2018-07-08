part of ThreeDart.Math;

/// Results from an intersection between a 2D ray and region.
class IntersectionRayRegion2 {

  /// The point in or on the region which the ray intersects. 
  final Point2 point;

  /// The normal of the surface on the region that the ray intersects.
  final Vector2 normal;

  /// The parametric value between 0 and 1 inclusively of the ray to the intersection point.
  final double parametric;

  /// The side of the region which was hit.
  final HitRegion region;

  /// Creates a new intersection result.
  IntersectionRayRegion2(this.point, this.normal, this.parametric, this.region);

  /// Gets the string for this intersection.
  @override
  String toString() => "$point <$normal> $parametric $region";
}

/// Results from an intersection between a 3D ray and region.
class IntersectionRayRegion3 {

  /// The point in or on the region which the ray intersects. 
  final Point3 point;

  /// The normal of the surface on the region that the ray intersects.
  final Vector3 normal;

  /// The parametric value between 0 and 1 inclusively of the ray to the intersection point.
  final double parametric;

  /// The side of the region which was hit.
  final HitRegion region;

  /// Creates a new intersection result.
  IntersectionRayRegion3(this.point, this.normal, this.parametric, this.region);
  
  /// Gets the string for this intersection.
  @override
  String toString() => "$point <$normal> $parametric $region";
}
