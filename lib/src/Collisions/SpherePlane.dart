part of ThreeDart.Collisions;

/// The results of a collision test between a sphere and a plane.
class SpherePlaneResult extends BaseResult {

  /// The sphere in this collision.
  final Math.Sphere sphere;

  /// The plane in this collision.
  final Math.Plane plane;

  /// The vector for the sphere moving in the given time frame.
  final Math.Vector3 vec;

  /// Indicates if the back of the plane should collide or not.
  final bool backside;
  
  /// The center point of the sphere when the collision occurred.
  /// This is null when no collision occurred.
  final Math.Point3 center;

  /// The point on the surface of the sphere and plane the collision occurred at.
  /// This is null when no collision occurred or intersected.
  final Math.Point3 hitPoint;
  
  /// Creates a new collision result for collision between a sphere and a plane.
  SpherePlaneResult(Type type, double parametric,
    Math.Sphere this.sphere, Math.Plane this.plane, Math.Vector3 this.vec, bool this.backside,
    [Math.Point3 this.center = null, Math.Point3 this.hitPoint = null]):
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
  if (div == 0.0) // Moving parallel to the plane
    return SpherePlaneResult(Type.NoCollision, 0.0, sphere, plane, vec, backside);
  if ((div > 0.0) && !backside) // Heading in the same direction as the normal.
    return SpherePlaneResult(Type.NoCollision, 0.0, sphere, plane, vec, backside);

  Math.Vector3 c = new Math.Vector3(sphere.x, sphere.y, sphere.z);
  double t = (plane.offset - c.dot(n) + sphere.radius) / div;
  if (t < 0.0) // Heading away from eachother.
    return new SpherePlaneResult(Type.NoCollision, t, sphere, plane, vec, backside);
  if (t > 1.0) // Hit's in the future.
    return new SpherePlaneResult(Type.OutOfRange, t, sphere, plane, vec, backside);

  Math.Point3 c2 = new Math.Point3(sphere.x + vec.dx*t, sphere.y + vec.dy*t, sphere.z + vec.dz*t);
  Math.Point3 hit = plane.nearestPoint(c2);
  Type type = Type.Collision;
  if (c2.distance(hit) < sphere.radius) type = Type.Intesected;
  return new SpherePlaneResult(type, t, sphere, plane, vec, backside, c2, hit);
}
