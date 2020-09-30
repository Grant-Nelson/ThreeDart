part of ThreeDart.Intersections;

/// Determines there is an intersection between the given [region] and [plane].
BaseResult regionPlane(Math.Region3 range, Math.Plane plane) {
  Math.Point3 min = range.minCorner;
  Math.Point3 max = range.maxCorner;

  Math.Side side = plane.sideOfPointComponents(min.x, min.y, min.z);
  if (side == Math.Side.Inside) return new BaseResult(true);

  Math.Side other = plane.sideOfPointComponents(min.x, min.y, max.z);
  if (other == Math.Side.Inside) return new BaseResult(true);
  if (side != other) return new BaseResult(true);

  other = plane.sideOfPointComponents(min.x, max.y, min.z);
  if (other == Math.Side.Inside) return new BaseResult(true);
  if (side != other) return new BaseResult(true);

  other = plane.sideOfPointComponents(min.x, max.y, max.z);
  if (other == Math.Side.Inside) return new BaseResult(true);
  if (side != other) return new BaseResult(true);

  other = plane.sideOfPointComponents(max.x, min.y, min.z);
  if (other == Math.Side.Inside) return new BaseResult(true);
  if (side != other) return new BaseResult(true);

  other = plane.sideOfPointComponents(max.x, min.y, max.z);
  if (other == Math.Side.Inside) return new BaseResult(true);
  if (side != other) return new BaseResult(true);

  other = plane.sideOfPointComponents(max.x, max.y, min.z);
  if (other == Math.Side.Inside) return new BaseResult(true);
  if (side != other) return new BaseResult(true);

  other = plane.sideOfPointComponents(max.x, max.y, max.z);
  if (other == Math.Side.Inside) return new BaseResult(true);
  return new BaseResult(side != other);
}
