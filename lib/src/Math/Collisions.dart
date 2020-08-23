part of ThreeDart.Math;

/// Collision is a collection of methods for determining if moving mathmatical shapes will
/// collide within a time frame as defined by the length of movement vectors.
class Collision {

  /// Keeps [Collision] from being constructed.
  Collision._();

  /// Determines the collision between this region moving with the given [vector]
  /// and the other region, the [target], not moving.
  /// TODO: Improve comment
  static CollisionBetweenRegionsResult betweenTwoRegion2s(Region2 regionA, Region2 regionB,
    Vector2 vecA, Vector2 vecB, [HitRegion sidesA = null, HitRegion sidesB = null]) {
    sidesA ??= HitRegion.All;
    sidesB ??= HitRegion.All;
    HitRegion sides = sidesB & sidesA.inverse();
    Vector2 vector = vecA - vecB;

    double t = 100.0, d;
    HitRegion region = HitRegion.None, edge;
    bool edgeTest;

    if (vector.dx != 0.0) {
      edgeTest = false;
      if (vector.dx > 0.0) {
        if (sides.has(HitRegion.XNeg)) {
          edge = HitRegion.XNeg;
          edgeTest = true;
          if (Comparer.equals(regionB.x, regionA.x + regionA.dx)) d = 0.0;
          else d = (regionB.x - (regionA.x + regionA.dx)) / vector.dx;
        }
      } else {
        if (sides.has(HitRegion.XPos)) {
          edge = HitRegion.XPos;
          edgeTest = true;
          if (Comparer.equals(regionB.x + regionB.dx, regionA.x)) d = 0.0;
          else d = ((regionB.x + regionB.dx) - regionA.x) / vector.dx;
        }
      }

      if (edgeTest && (d < t) && (d >= 0.0) && (d <= 1.0)) {
        double y = regionA.y + vector.dy*d;
        if (rangeOverlap(regionB.y, regionB.y + regionB.dy, y, y + regionA.dy)) {
          t = d;
          region = edge;
        }
      }
    }

    if (vector.dy != 0.0) {
      edgeTest = false;
      if (vector.dy > 0.0) {
        if (sides.has(HitRegion.YNeg)) {
          edge = HitRegion.YNeg;
          edgeTest = true;
          if (Comparer.equals(regionB.y, regionA.y + regionA.dy)) d = 0.0;
          else d = (regionB.y - (regionA.y + regionA.dy)) / vector.dy;
        }
      } else {
        if (sides.has(HitRegion.YPos)) {
          edge = HitRegion.YPos;
          edgeTest = true;
          if (Comparer.equals(regionB.y + regionB.dy, regionA.y)) d = 0.0;
          else d = ((regionB.y + regionB.dy) - regionA.y) / vector.dy;
        }
      }

      if (edgeTest && (d < t) && (d >= 0.0) && (d <= 1.0)) {
        double x = regionA.x + vector.dx*d;
        if (rangeOverlap(regionB.x, regionB.x + regionB.dx, x, x + regionA.dx)) {
          t = d;
          region = edge;
        }
      }
    }

    if (region == HitRegion.None)
      return new CollisionBetweenRegionsResult(CollisionType.NoCollision, 0.0, HitRegion.None);
    return new CollisionBetweenRegionsResult(CollisionType.Collision, t, region);
  }

  /// Determines the collision between this region moving with the given [vector]
  /// and the other region, the [target], not moving.
  /// This will not detect collisions where the two rectangles are already within
  /// each other, this is so that "already hit" can be handled as needed.
  /// TODO: Improve comment
  static CollisionBetweenRegionsResult betweenTwoRegion3s(Region3 regionA, Region3 regionB,
    Vector3 vecA, Vector3 vecB, [HitRegion sidesA = null, HitRegion sidesB = null]) {
    sidesA ??= HitRegion.All;
    sidesB ??= HitRegion.All;
    HitRegion sides = sidesB & sidesA.inverse();
    Vector3 vector = vecA - vecB;

    double t = 100.0, d;
    HitRegion region = HitRegion.None, edge;
    bool edgeTest;

    if (vector.dx != 0.0) {
      edgeTest = false;
      if (vector.dx > 0.0) {
        if (sides.has(HitRegion.XNeg)) {
          edge = HitRegion.XNeg;
          edgeTest = true;
          if (Comparer.equals(regionB.x, regionA.x + regionA.dx)) d = 0.0;
          else d = (regionB.x - (regionA.x + regionA.dx)) / vector.dx;
        }
      } else {
        if (sides.has(HitRegion.XPos)) {
          edge = HitRegion.XPos;
          edgeTest = true;
          if (Comparer.equals(regionB.x + regionB.dx, regionA.x)) d = 0.0;
          else d = ((regionB.x + regionB.dx) - regionA.x) / vector.dx;
        }
      }

      if (edgeTest && (d < t) && (d >= 0.0) && (d <= 1.0)) {
        double y = regionA.y + vector.dy*d;
        if (rangeOverlap(regionB.y, regionB.y + regionB.dy, y, y + regionA.dy)) {
          double z = regionA.z + vector.dz*d;
          if (rangeOverlap(regionB.z, regionB.z + regionB.dz, z, z + regionA.dz)) {
            t = d;
            region = edge;
          }
        }
      }
    }

    if (vector.dy != 0.0) {
      edgeTest = false;
      if (vector.dy > 0.0) {
        if (sides.has(HitRegion.YNeg)) {
          edge = HitRegion.YNeg;
          edgeTest = true;
          if (Comparer.equals(regionB.y, regionA.y + regionA.dy)) d = 0.0;
          else d = (regionB.y - (regionA.y + regionA.dy)) / vector.dy;
        }
      } else {
        if (sides.has(HitRegion.YPos)) {
          edge = HitRegion.YPos;
          edgeTest = true;
          if (Comparer.equals(regionB.y + regionB.dy, regionA.y)) d = 0.0;
          else d = ((regionB.y + regionB.dy) - regionA.y) / vector.dy;
        }
      }

      if (edgeTest && (d < t) && (d >= 0.0) && (d <= 1.0)) {
        double x = regionA.x + vector.dx*d;
        if (rangeOverlap(regionB.x, regionB.x + regionB.dx, x, x + regionA.dx)) {
          double z = regionA.z + vector.dz*d;
          if (rangeOverlap(regionB.z, regionB.z + regionB.dz, z, z + regionA.dz)) {
            t = d;
            region = edge;
          }
        }
      }
    }

    if (vector.dz != 0.0) {
      edgeTest = false;
      if (vector.dz > 0.0) {
        if (sides.has(HitRegion.ZNeg)) {
          edge = HitRegion.ZNeg;
          edgeTest = true;
          if (Comparer.equals(regionB.z, regionA.z + regionA.dz)) d = 0.0;
          else d = (regionB.z - (regionA.z + regionA.dz)) / vector.dz;
        }
      } else {
        if (sides.has(HitRegion.ZPos)) {
          edge = HitRegion.ZPos;
          edgeTest = true;
          if (Comparer.equals(regionB.z + regionB.dz, regionA.z)) d = 0.0;
          else d = ((regionB.z + regionB.dz) - regionA.z) / vector.dz;
        }
      }

      if (edgeTest && (d < t) && (d >= 0.0) && (d <= 1.0)) {
        double x = regionA.x + vector.dx*d;
        if (rangeOverlap(regionB.x, regionB.x + regionB.dx, x, x + regionA.dx)) {
          double y = regionA.y + vector.dy*d;
          if (rangeOverlap(regionB.y, regionB.y + regionB.dy, y, y + regionA.dy)) {
            t = d;
            region = edge;
          }
        }
      }
    }

    if (region == HitRegion.None)
      return new CollisionBetweenRegionsResult(CollisionType.NoCollision, 0.0, HitRegion.None);
    return new CollisionBetweenRegionsResult(CollisionType.Collision, t, region);
  }

  /// Tests the collision between two moving spheres.
  static CollisionBetweenSpheresResult betweenTwoSpheres(Sphere sphereA, Sphere sphereB, Vector3 vecA, Vector3 vecB) {
    if (sphereA == null || sphereB == null || vecA == null || vecB == null) return null;

    Point3 cA = sphereA.center;
    Point3 cB = sphereB.center;
    Vector3 e = cA.vectorTo(cB);
    double r = sphereA.radius + sphereB.radius;
    double r2 = r*r;
    double ee = e.length2();
    if (ee < r2) return new CollisionBetweenSpheresResult(
      CollisionType.Intesected, 0.0, cA, cB, null); // Spheres are inside eachother.

    Vector3 d = vecB - vecA;
    double ed = e.dot(d);
    double f = ed*ed + r2 - ee;
    if (f < 0.0) return new CollisionBetweenSpheresResult(
      CollisionType.NoCollision); // No intersection.

    double t = ed - math.sqrt(f);
    if (t < 0.0) return new CollisionBetweenSpheresResult(
      CollisionType.NoCollision, t); // Heading away from eachother.
    if (t > 1.0) return new CollisionBetweenSpheresResult(
      CollisionType.OutOfRange, t); // Hit's in the future.

    Point3 cA2 = new Point3(sphereA.x + vecA.dx*t, sphereA.y + vecA.dy*t, sphereA.z + vecA.dz*t);
    Point3 cB2 = new Point3(sphereB.x + vecB.dx*t, sphereB.y + vecB.dy*t, sphereB.z + vecB.dz*t);
    double scalar = sphereA.radius / math.sqrt(ee);
    Point3 hit = new Point3((cB2.x - cA2.x)*scalar + cA2.x,
                            (cB2.y - cA2.y)*scalar + cA2.y,
                            (cB2.z - cA2.z)*scalar + cA2.z);
    return new CollisionBetweenSpheresResult(
      CollisionType.Collision, t, cA2, cB2, hit);
  }

  // TODO: Add the following:
  // - betweenRegionSphere
  // - betweenRegionPlane
  // - betweenSpherePlane
  // - betweenTriangleRegion
  // - betweenTriangleSphere
  // - betweenTrianglePlane
  // - betweenBetweenTriangles
}

/// Indicates the result type of the collision.
enum CollisionType {

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
class CollisionBase {

  /// The type of collision which occurred.
  final CollisionType type;

  /// The amount of time based on the vector(s) before the collision.
  /// A collision within the vector will have a parametric between 0 and 1 inclusively.
  final double parametric;

  /// Indicates if a collision occurred with the given vector(s).
  bool get collided => type == CollisionType.Collision;
  
  /// Creates a new collision result for collision between shapes.
  CollisionBase(CollisionType this.type, double this.parametric);

  /// Gets the string for this collision.
  @override
  String toString() {
    switch (this.type) {
      case CollisionType.Intesected:  return "intesected";
      case CollisionType.NoCollision: return "noCollision";
      case CollisionType.OutOfRange:  return "outOfRange at ${this.parametric}";
      case CollisionType.Collision:   return "collision at ${this.parametric}";
      default: return "Unknown collision value";
    }
  }
}

/// Results from an collision between two moving regions.
class CollisionBetweenRegionsResult extends CollisionBase {

  /// The side of the target region which was hit.
  final HitRegion region;

  /// Creates a new collision result for collision between regions.
  CollisionBetweenRegionsResult(CollisionType type, double parametric, HitRegion this.region):
    super(type, parametric);
}

/// The results of a collision test between two spheres.
class CollisionBetweenSpheresResult extends CollisionBase {
  
  /// The center point of sphere A when the collision occurred.
  /// This is null when no collision occurred.
  final Point3 centerA;

  /// The center point of sphere B when the collision occurred.
  /// This is null when no collision occurred.
  final Point3 centerB;

  /// The point on the surface of sphere A and B the collision occurred at.
  /// This is null when no collision occurred or intersected.
  final Point3 hitPoint;
  
  /// Creates a new collision result for collision between spheres.
  CollisionBetweenSpheresResult(CollisionType type, [double parametric = 0.0,
    Point3 this.centerA = null, Point3 this.centerB = null, Point3 this.hitPoint = null]):
    super(type, parametric);
}
