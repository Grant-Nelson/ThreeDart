part of ThreeDart.Collisions;

/// The results of a collision test between two spheres.
class TwoSphereResult extends BaseResult {

  /// The first sphere in this collision.
  final Math.Sphere sphereA;
  
  /// The second sphere in this collision.
  final Math.Sphere sphereB;
  
  /// The vector for the first sphere moving in the given time frame.
  final Math.Vector3 vecA;
  
  /// The vector for the second sphere moving in the given time frame.
  final Math.Vector3 vecB;

  /// The center point of sphere A when the collision occurred.
  /// This is null when no collision occurred.
  final Math.Point3 centerA;

  /// The center point of sphere B when the collision occurred.
  /// This is null when no collision occurred.
  final Math.Point3 centerB;

  /// The point on the surface of sphere A and B the collision occurred at.
  /// This is null when no collision occurred or intersected.
  final Math.Point3 hitPoint;
  
  /// Creates a new collision result for collision between spheres.
  TwoSphereResult(Type type, double parametric,
    Math.Sphere this.sphereA, Math.Sphere this.sphereB, Math.Vector3 this.vecA, Math.Vector3 this.vecB,
    [Math.Point3 this.centerA = null, Math.Point3 this.centerB = null, Math.Point3 this.hitPoint = null]):
    super(type, parametric);
    
  /// Gets the string for this collision.
  @override
  String toString() =>
    super.toString() + (this.collided? " ${this.centerA} ${this.centerB} ${this.hitPoint}": "");
}

/// Tests the collision between two moving spheres.
/// The given vectors represent the constant amount of distance moved in a time span.
TwoSphereResult twoSphere(Math.Sphere  sphereA, Math.Sphere  sphereB,
                          Math.Vector3 vecA,    Math.Vector3 vecB) {
  if (sphereA == null || sphereB == null || vecA == null || vecB == null) return null;

  Math.Point3 cA = sphereA.center;
  Math.Point3 cB = sphereB.center;
  Math.Vector3 e = cA.vectorTo(cB);
  double r = sphereA.radius + sphereB.radius;
  double r2 = r*r;
  double ee = e.length2();
  if (ee < r2) // Spheres are inside eachother.
    return new TwoSphereResult(Type.Intesected, 0.0, sphereA, sphereB, vecA, vecB, cA, cB, null);

  Math.Vector3 d = vecA - vecB;
  double ed = e.dot(d);
  double f = ed*ed + r2 - ee;
  if (f < 0.0) // No intersection.
    return new TwoSphereResult(Type.NoCollision, 0.0, sphereA, sphereB, vecA, vecB);

  double t = ed - math.sqrt(f);
  if (t < 0.0) // Heading away from eachother.
    return new TwoSphereResult(Type.NoCollision, t, sphereA, sphereB, vecA, vecB);
  if (t > 1.0) // Hit's in the future.
    return new TwoSphereResult(Type.OutOfRange, t, sphereA, sphereB, vecA, vecB);

  Math.Point3 cA2 = new Math.Point3(sphereA.x + vecA.dx*t, sphereA.y + vecA.dy*t, sphereA.z + vecA.dz*t);
  Math.Point3 cB2 = new Math.Point3(sphereB.x + vecB.dx*t, sphereB.y + vecB.dy*t, sphereB.z + vecB.dz*t);
  double scalar = sphereA.radius / math.sqrt(ee);
  Math.Point3 hit = new Math.Point3((cB2.x - cA2.x)*scalar + cA2.x,
                                    (cB2.y - cA2.y)*scalar + cA2.y,
                                    (cB2.z - cA2.z)*scalar + cA2.z);
  return new TwoSphereResult(Type.Collision, t, sphereA, sphereB, vecA, vecB, cA2, cB2, hit);
}
