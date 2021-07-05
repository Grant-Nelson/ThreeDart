part of ThreeDart.Collisions;

/// Results from an collision between two moving AABB regions.
class TwoAABB2Result extends BaseResult {

  /// The first of the two regions in the collision.
  final Math.Region2 regionA;
  
  /// The second of the two regions in the collision.
  final Math.Region2 regionB;

  /// The vector for the first region moving in the given time frame.
  final Math.Vector2 vecA;

  /// The vector for the second region moving in the given time frame.
  final Math.Vector2 vecB;

  /// The sides for the first region can collide on.
  final Math.HitRegion sidesA;

  /// The sides for the first region can collide on.
  final Math.HitRegion sidesB;

  /// The side of the target region which was hit.
  final Math.HitRegion region;

  /// Creates a new collision result for collision between AABB regions.
  TwoAABB2Result(Type type, double parametric,
    Math.Region2 this.regionA, Math.Region2 this.regionB, Math.Vector2 this.vecA, Math.Vector2 this.vecB,
    Math.HitRegion this.sidesA, Math.HitRegion this.sidesB, Math.HitRegion this.region):
    super(type, parametric);

  /// Gets the string for this collision.
  @override
  String toString() =>
    super.toString() + (this.collided? " ${this.region}": "");
}

/// Determines the collision between two moving axial aligned bounding box (AABB).
/// The given vectors represent the constant amount of distance moved in a time span.
/// Optionally sides of the AABBs can be disabled to provide single sided collision.
TwoAABB2Result twoAABB2(Math.Region2    regionA,       Math.Region2    regionB,
                        Math.Vector2    vecA,          Math.Vector2    vecB,
                       [Math.HitRegion? sidesA = null, Math.HitRegion? sidesB = null]) {
  sidesA ??= Math.HitRegion.All;
  sidesB ??= Math.HitRegion.All;
  Math.HitRegion sides = sidesB & sidesA.inverse();
  Math.Vector2 vector = vecA - vecB;

  double t = 100.0, d = 0.0;
  Math.HitRegion region = Math.HitRegion.None, edge = Math.HitRegion.None;
  bool edgeTest;

  if (vector.dx != 0.0) {
    edgeTest = false;
    if (vector.dx > 0.0) {
      if (sides.has(Math.HitRegion.XNeg)) {
        edge = Math.HitRegion.XNeg;
        edgeTest = true;
        if (Math.Comparer.equals(regionB.x, regionA.x + regionA.dx)) d = 0.0;
        else d = (regionB.x - (regionA.x + regionA.dx)) / vector.dx;
      }
    } else {
      if (sides.has(Math.HitRegion.XPos)) {
        edge = Math.HitRegion.XPos;
        edgeTest = true;
        if (Math.Comparer.equals(regionB.x + regionB.dx, regionA.x)) d = 0.0;
        else d = ((regionB.x + regionB.dx) - regionA.x) / vector.dx;
      }
    }

    if (edgeTest && (d < t) && (d >= 0.0) && (d <= 1.0)) {
      double y = regionA.y + vector.dy*d;
      if (Math.rangeOverlap(regionB.y, regionB.y + regionB.dy, y, y + regionA.dy)) {
        t = d;
        region = edge;
      }
    }
  }

  if (vector.dy != 0.0) {
    edgeTest = false;
    if (vector.dy > 0.0) {
      if (sides.has(Math.HitRegion.YNeg)) {
        edge = Math.HitRegion.YNeg;
        edgeTest = true;
        if (Math.Comparer.equals(regionB.y, regionA.y + regionA.dy)) d = 0.0;
        else d = (regionB.y - (regionA.y + regionA.dy)) / vector.dy;
      }
    } else {
      if (sides.has(Math.HitRegion.YPos)) {
        edge = Math.HitRegion.YPos;
        edgeTest = true;
        if (Math.Comparer.equals(regionB.y + regionB.dy, regionA.y)) d = 0.0;
        else d = ((regionB.y + regionB.dy) - regionA.y) / vector.dy;
      }
    }

    if (edgeTest && (d < t) && (d >= 0.0) && (d <= 1.0)) {
      double x = regionA.x + vector.dx*d;
      if (Math.rangeOverlap(regionB.x, regionB.x + regionB.dx, x, x + regionA.dx)) {
        t = d;
        region = edge;
      }
    }
  }

  if (region == Math.HitRegion.None) {
    bool overlap = regionA.overlaps(regionB);
    Type type = overlap? Type.Intesected: Type.NoCollision;
    return new TwoAABB2Result(type, 0.0, regionA, regionB, vecA, vecB, sidesA, sidesB, Math.HitRegion.None);
  }
  return new TwoAABB2Result(Type.Collision, t, regionA, regionB, vecA, vecB, sidesA, sidesB, region);
}
