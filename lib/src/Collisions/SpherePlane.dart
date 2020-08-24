part of ThreeDart.Collisions;

/// The results of a collision test between a sphere and a plane.
class SpherePlaneResult extends BaseResult {
  
  /// The center point of the sphere when the collision occurred.
  /// This is null when no collision occurred.
  final Math.Point3 center;

  /// The point on the surface of the sphere and plane the collision occurred at.
  /// This is null when no collision occurred or intersected.
  final Math.Point3 hitPoint;
  
  /// Creates a new collision result for collision between a sphere and a plane.
  SpherePlaneResult(Type type, [double parametric = 0.0,
    Math.Point3 this.center = null, Math.Point3 this.hitPoint = null]):
    super(type, parametric);
    
  /// Gets the string for this collision.
  @override
  String toString() =>
    super.toString() + (this.collided? " ${this.center} ${this.hitPoint}": "");
}

/// Tests the collision between two moving spheres.
/// The given vector represent the constant amount of distance moved in a time span.
/// The optional [backside] parameter indicates if the back of the plane should collide or not.
SpherePlaneResult spherePlane(Math.Sphere sphere, Math.Plane plane, Math.Vector3 vec, [bool backside = false]) {
  if (sphere == null || plane == null || vec == null) return null;

  Math.Vector3 n = plane.normal.normal();
  double div = vec.dot(n);
  if (div == 0.0) return SpherePlaneResult(Type.NoCollision);
  if ((div > 0.0) && !backside) return SpherePlaneResult(Type.NoCollision);

  Math.Vector3 c = new Math.Vector3(sphere.x, sphere.y, sphere.z);
  double t = (plane.offset - c.dot(n) - sphere.radius) / div;
  if (t < 0.0) return new SpherePlaneResult(Type.NoCollision, t); // Heading away from eachother.
  if (t > 1.0) return new SpherePlaneResult(Type.OutOfRange, t); // Hit's in the future.

  Math.Point3 c2 = new Math.Point3(sphere.x + vec.dx*t, sphere.y + vec.dy*t, sphere.z + vec.dz*t);
  Math.Point3 hit = new Math.Point3(c2.x - n.dx*sphere.radius, c2.y - n.dy*sphere.radius, c2.z - n.dz*sphere.radius);
  return new SpherePlaneResult(Type.Intesected, t, c2, hit);
}
