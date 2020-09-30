part of ThreeDart.Intersections;

/// Determines there is an intersection between the given [triangle] and [plane].
BaseResult trianglePlane(Math.Triangle3 tri, Math.Plane plane) {
  Math.Side side = plane.sideOfPointComponents(tri.x1, tri.y1, tri.z1);
  if (side == Math.Side.Inside) return new BaseResult(true);

  Math.Side other = plane.sideOfPointComponents(tri.x2, tri.y2, tri.z2);
  if (other == Math.Side.Inside) return new BaseResult(true);
  if (side != other) return new BaseResult(true);
  
  other = plane.sideOfPointComponents(tri.x3, tri.y3, tri.z3);
  if (other == Math.Side.Inside) return new BaseResult(true);
  return new BaseResult(side != other);
}
