part of ThreeDart.Collisions;

/// Results from an collision between two moving AABB regions.
class TwoAABBResult extends BaseResult {

  /// The side of the target region which was hit.
  final Math.HitRegion region;

  /// Creates a new collision result for collision between AABB regions.
  TwoAABBResult(Type type, double parametric, Math.HitRegion this.region):
    super(type, parametric);

  /// Gets the string for this collision.
  @override
  String toString() =>
    super.toString() + (this.collided? " ${this.region}": "");
}

/// Determines the collision between two moving axial aligned bounding box (AABB).
/// The given vectors represent the constant amount of distance moved in a time span.
/// Optionally sides of the AABBs can be disabled to provide single sided collision.
TwoAABBResult twoAABB2(Math.Region2    regionA,       Math.Region2   regionB,
                       Math.Vector2    vecA,          Math.Vector2   vecB,
                      [Math.HitRegion sidesA = null, Math.HitRegion sidesB = null]) {
  if (regionA == null || regionB == null || vecA == null || vecB == null) return null;

  sidesA ??= Math.HitRegion.All;
  sidesB ??= Math.HitRegion.All;
  Math.HitRegion sides = sidesB & sidesA.inverse();
  Math.Vector2 vector = vecA - vecB;

  double t = 100.0, d;
  Math.HitRegion region = Math.HitRegion.None, edge;
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
    return new TwoAABBResult(type, 0.0, Math.HitRegion.None);
  }
  return new TwoAABBResult(Type.Collision, t, region);
}

/// Determines the collision between two moving axial aligned bounding box (AABB).
/// The given vectors represent the constant amount of distance moved in a time span.
/// Optionally sides of the AABBs can be disabled to provide single sided collision.
TwoAABBResult twoAABB3(Math.Region3   regionA,       Math.Region3   regionB,
                       Math.Vector3   vecA,          Math.Vector3   vecB,
                      [Math.HitRegion sidesA = null, Math.HitRegion sidesB = null]) {
  if (regionA == null || regionB == null || vecA == null || vecB == null) return null;

  sidesA ??= Math.HitRegion.All;
  sidesB ??= Math.HitRegion.All;
  Math.HitRegion sides = sidesB & sidesA.inverse();
  Math.Vector3 vector = vecA - vecB;

  double t = 100.0, d;
  Math.HitRegion region = Math.HitRegion.None, edge;
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
        double z = regionA.z + vector.dz*d;
        if (Math.rangeOverlap(regionB.z, regionB.z + regionB.dz, z, z + regionA.dz)) {
          t = d;
          region = edge;
        }
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
        double z = regionA.z + vector.dz*d;
        if (Math.rangeOverlap(regionB.z, regionB.z + regionB.dz, z, z + regionA.dz)) {
          t = d;
          region = edge;
        }
      }
    }
  }

  if (vector.dz != 0.0) {
    edgeTest = false;
    if (vector.dz > 0.0) {
      if (sides.has(Math.HitRegion.ZNeg)) {
        edge = Math.HitRegion.ZNeg;
        edgeTest = true;
        if (Math.Comparer.equals(regionB.z, regionA.z + regionA.dz)) d = 0.0;
        else d = (regionB.z - (regionA.z + regionA.dz)) / vector.dz;
      }
    } else {
      if (sides.has(Math.HitRegion.ZPos)) {
        edge = Math.HitRegion.ZPos;
        edgeTest = true;
        if (Math.Comparer.equals(regionB.z + regionB.dz, regionA.z)) d = 0.0;
        else d = ((regionB.z + regionB.dz) - regionA.z) / vector.dz;
      }
    }

    if (edgeTest && (d < t) && (d >= 0.0) && (d <= 1.0)) {
      double x = regionA.x + vector.dx*d;
      if (Math.rangeOverlap(regionB.x, regionB.x + regionB.dx, x, x + regionA.dx)) {
        double y = regionA.y + vector.dy*d;
        if (Math.rangeOverlap(regionB.y, regionB.y + regionB.dy, y, y + regionA.dy)) {
          t = d;
          region = edge;
        }
      }
    }
  }

  if (region == Math.HitRegion.None) {
    bool overlap = regionA.overlaps(regionB);
    Type type = overlap? Type.Intesected: Type.NoCollision;
    return new TwoAABBResult(type, 0.0, Math.HitRegion.None);
  }
  return new TwoAABBResult(Type.Collision, t, region);
}
