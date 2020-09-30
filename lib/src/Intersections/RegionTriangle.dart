part of ThreeDart.Intersections;

// Project the triangle's vertices onto the potential seperating axis
// and determine if this axis is seperating or not.
// Based on code from https://gdbooks.gitbooks.io/3dcollisions/content/Chapter4/aabb-triangle.html
bool _isSeparatingAxis(Math.Vector3 regionSize, Math.Vector3 axis, Math.Vector3 v1, Math.Vector3 v2, Math.Vector3 v3) {
  final double p0 = v1.dot(axis);
  final double p1 = v2.dot(axis);
  final double p2 = v3.dot(axis);

  // Project the AABB size onto the seperating axis, since the AABB will be centered on the origin.
  final double r = regionSize.dx * Math.Vector3.posX.dot(axis).abs() +
                   regionSize.dy * Math.Vector3.posY.dot(axis).abs() +
                   regionSize.dz * Math.Vector3.posZ.dot(axis).abs();

  // Check if the extreme points from the triangle intersect r.
  final double max = math.max(math.max(p0, p1), p2);
  final double min = math.min(math.min(p0, p1), p2);
  if (math.max(-max, min) <= r) {
      // This means the extreme points of the projected triangle is outside the
      // projected AABB size. Therefore the axis is seperating and we can exit.
      return true;
  }

  // Can not seperate along this axis.
  return false;
}

// Determine if there is a separating axis between the a triangle and an AABB.
bool _hasSeparatingAxis(Math.Point3 regionCenter, Math.Vector3 regionSize, Math.Triangle3 tri) {
  Math.Vector3 v1 = regionCenter.vectorTo(tri.point1);
  Math.Vector3 v2 = regionCenter.vectorTo(tri.point2);
  Math.Vector3 v3 = regionCenter.vectorTo(tri.point3);

  // Check the 3 AABB face normals.
  if (_isSeparatingAxis(regionSize, Math.Vector3.posX, v1, v2, v3)) return true;
  if (_isSeparatingAxis(regionSize, Math.Vector3.posY, v1, v2, v3)) return true;
  if (_isSeparatingAxis(regionSize, Math.Vector3.posZ, v1, v2, v3)) return true;

  // Check the 9 axis for the edge vectors of the triangle cross with face normals.
  Math.Vector3 f1 = v2 - v1;
  if (_isSeparatingAxis(regionSize, Math.Vector3.posX.cross(f1), v1, v2, v3)) return true;
  if (_isSeparatingAxis(regionSize, Math.Vector3.posY.cross(f1), v1, v2, v3)) return true;
  if (_isSeparatingAxis(regionSize, Math.Vector3.posZ.cross(f1), v1, v2, v3)) return true;
  
  Math.Vector3 f2 = v3 - v2;
  if (_isSeparatingAxis(regionSize, Math.Vector3.posX.cross(f2), v1, v2, v3)) return true;
  if (_isSeparatingAxis(regionSize, Math.Vector3.posY.cross(f2), v1, v2, v3)) return true;
  if (_isSeparatingAxis(regionSize, Math.Vector3.posZ.cross(f2), v1, v2, v3)) return true;
  
  Math.Vector3 f3 = v1 - v3;
  if (_isSeparatingAxis(regionSize, Math.Vector3.posX.cross(f3), v1, v2, v3)) return true;
  if (_isSeparatingAxis(regionSize, Math.Vector3.posY.cross(f3), v1, v2, v3)) return true;
  if (_isSeparatingAxis(regionSize, Math.Vector3.posZ.cross(f3), v1, v2, v3)) return true;

  // Check the triangle normal.
  if (_isSeparatingAxis(regionSize, f1.cross(f2), v1, v2, v3)) return true;
  
  // Checked all 13 separating axii and found no separation.
  return false;
}

/// Determines if the [region] intersects or contains given [triangle].
BaseResult regionTriangle(Math.Region3 region, Math.Triangle3 tri) {
  Math.Point3 center = region.center;
  Math.Vector3 size = center.vectorTo(region.maxCorner);
  final bool hasSep = _hasSeparatingAxis(center, size, tri);
  return new BaseResult(!hasSep);
}

/// Determines if the [cube] intersects or contains given [triangle].
BaseResult cubeTriangle(Math.Cube cube, Math.Triangle3 tri) {
  Math.Point3 center = cube.center;
  final double halfSize = cube.size * 0.5;
  Math.Vector3 size = new Math.Vector3(halfSize, halfSize, halfSize);
  final bool hasSep = _hasSeparatingAxis(center, size, tri);
  return new BaseResult(!hasSep);
}
