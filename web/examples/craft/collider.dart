part of craft;

/// TODO: Comment everything
class Collider {

  World _world;
  Math.Point3 _loc;
  Math.Region3 _region;
  Math.Vector3 _vector;
  Math.HitRegion _touching;
  List<Math.Region3> _blocks;

  Collider(this._world) {
    this._loc = null;
    this._region = null;
    this._vector = null;
    this._touching = Math.HitRegion.None;
    this._blocks = new List<Math.Region3>();
  }
  
  bool collide(Math.Region3 region, Math.Point3 loc, Math.Vector3 vector) {
    this._loc = loc;
    this._region = region.translate(new Math.Vector3.fromPoint3(loc));
    this._vector = vector;
    this._touching = Math.HitRegion.None;

    this._collectBlocks();
    while (this._singleCollide());

    this._loc += new Math.Point3.fromVector3(this._vector);
    return true;
  }
  
  Math.Point3 get location => this._loc;
  Math.HitRegion get touching => this._touching;
  
  void _collectBlocks() {
    Math.Region3 aabb = this._region.expandWithRegion(this._region.translate(this._vector));
    //BlockInfo minXYZ = this._world.getBlock(aabb.x-0.5, aabb.y-0.5, aabb.z-0.5);
    //BlockInfo maxXYZ = this._world.getBlock(aabb.x+aabb.dx+0.5, aabb.y+aabb.dy+0.5, aabb.z+aabb.dz+0.5);
    BlockInfo minXYZ = this._world.getBlock(aabb.x, aabb.y, aabb.z);
    BlockInfo maxXYZ = this._world.getBlock(aabb.x+aabb.dx, aabb.y+aabb.dy, aabb.z+aabb.dz);
    int maxWorldX = maxXYZ.worldX, maxWorldZ = maxXYZ.worldZ;

    this._blocks.clear();
    for (BlockInfo x = minXYZ; (x != null) && (x.worldX <= maxWorldX); x = x.right) {
      for (BlockInfo y = x; (y != null) && (y.y <= maxXYZ.y); y = y.above) {
        for (BlockInfo z = y; (z != null) && (z.worldZ <= maxWorldZ); z = z.front) {
          if (BlockType.hard(z.value)) {
            this._blocks.add(z.blockRegion);
          }
        }
      }
    }
  }

  bool _singleCollide() {
    if (this._vector.isZero()) return false;

    Math.IntersectionBetweenMovingRegions hit = null;
    Math.Region3 hitBlock = null;
    for (Math.Region3 block in this._blocks) {
      Math.IntersectionBetweenMovingRegions cur = this._region.collision(block, this._vector);
      if (cur != null) {
        if ((hit == null) || (hit.parametric > hit.parametric)) {
          hit = cur;
          hitBlock = block;
        }
      }
    }
    if (hit == null) return false;

    if (hit.region == Math.HitRegion.Inside) {
      double dy = this._region.x+this._region.dx-hitBlock.x;
      Math.Vector3 shift = new Math.Vector3(0.0, dy, 0.0);
      this._loc += new Math.Point3.fromVector3(shift);
      this._region = this._region.translate(shift);
      this._vector = Math.Vector3.zero;
      this._touching |= Math.HitRegion.YNeg;
      return false; // TODO: handle bump
    }

    Math.Vector3 shift = this._vector * hit.parametric;
    this._loc += new Math.Point3.fromVector3(shift);
    this._region = this._region.translate(shift);
    this._touching |= hit.region;

    Math.Vector3 remainder = this._vector * (1.0 - hit.parametric);
    if ((hit.region == Math.HitRegion.XPos) || (hit.region == Math.HitRegion.XNeg))
      remainder = new Math.Vector3(0.0, remainder.dy, remainder.dz);
    else if ((hit.region == Math.HitRegion.YPos) || (hit.region == Math.HitRegion.YNeg))
      remainder = new Math.Vector3(remainder.dx, 0.0, remainder.dz);
    else if ((hit.region == Math.HitRegion.ZPos) || (hit.region == Math.HitRegion.ZNeg))
      remainder = new Math.Vector3(remainder.dx, remainder.dy, 0.0);
    this._vector = remainder;
    return true;
  }
  
  /// Gets the string for this collision result.
  @override
  String toString() =>
    "Collider($_loc, $_touching)";
}
