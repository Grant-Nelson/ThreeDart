part of craft;

/// TODO: Comment everything
class Collider {

  World _world;
  Math.Point3 _loc;
  Math.Region3 _region;
  Math.Vector3 _vector;
  Math.HitRegion _touching;
  List<Math.Region3> _blocks;
  List<Math.HitRegion> _blockSides;
  List<bool> _hasHit;

  Collider(this._world) {
    this._loc = null;
    this._region = null;
    this._vector = null;
    this._touching = Math.HitRegion.None;
    this._blocks = new List<Math.Region3>();
    this._blockSides = new List<Math.HitRegion>();
    this._hasHit = new List<bool>();
  }
  
  bool collide(Math.Region3 region, Math.Point3 loc, Math.Vector3 vector) {
    this._loc = loc;
    this._region = region;
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
    Math.Region3 region = this._region.translate(new Math.Vector3.fromPoint3(this._loc));
    Math.Region3 aabb = region.expandWithRegion(region.translate(this._vector));
    BlockInfo minXYZ = this._world.getBlock(aabb.x, aabb.y, aabb.z);
    BlockInfo maxXYZ = this._world.getBlock(aabb.x+aabb.dx, aabb.y+aabb.dy, aabb.z+aabb.dz);
    int maxWorldX = maxXYZ.worldX, maxWorldZ = maxXYZ.worldZ;
    
    this._blocks.clear();
    this._blockSides.clear();
    this._hasHit.clear();
    for (BlockInfo x = minXYZ; (x != null) && (x.worldX <= maxWorldX); x = x.right) {
      for (BlockInfo y = x; (y != null) && (y.y <= maxXYZ.y); y = y.above) {
        for (BlockInfo z = y; (z != null) && (z.worldZ <= maxWorldZ); z = z.front) {
          if (BlockType.hard(z.value)) {
            Math.HitRegion sides = z.solidNeighbors();
            if (sides != Math.HitRegion.Cardinals) {
              this._blocks.add(z.blockRegion);
              this._blockSides.add(Math.HitRegion.Cardinals & ~sides);
              this._hasHit.add(false);
            }
          }
        }
      }
    }
  }

  bool _singleCollide() {
    if (this._vector.isZero()) return false;
    Math.Region3 region = this._region.translate(new Math.Vector3.fromPoint3(this._loc));
    
    double parametric = 0.0;
    Math.HitRegion hitRegion = Math.HitRegion.None;
    int hitIndex = -1;
    for (int i = 0; i < this._blocks.length; i++) {
      if (!this._hasHit[i]) {
        Math.Region3 block = this._blocks[i];
        Math.HitRegion sides = this._blockSides[i];
        Math.IntersectionBetweenMovingRegions cur = region.collision(block, this._vector, sides);
        if (cur != null) {
          if ((hitRegion == Math.HitRegion.None) || (parametric > cur.parametric)) {
            hitRegion = cur.region;
            parametric = cur.parametric;
            hitIndex = i;
          }
        }
      }
    }
    if (hitRegion == Math.HitRegion.None) return false;
    this._hasHit[hitIndex] = true;

    if (hitRegion == Math.HitRegion.Inside) {
      throw Exception("WHAT?!? HOW?!?");
      // double dy = this._region.x+this._region.dx-hitBlock.x;
      // Math.Vector3 shift = new Math.Vector3(0.0, dy, 0.0);
      // this._loc += new Math.Point3.fromVector3(shift);
      // this._region = this._region.translate(shift);
      // this._vector = Math.Vector3.zero;
      // this._touching |= Math.HitRegion.YNeg;
      // return false; // TODO: handle bump
    }

    Math.Vector3 shift = this._vector * parametric;
    Math.Vector3 remainder = this._vector * (1.0 - parametric);

    if ((hitRegion == Math.HitRegion.XPos) || (hitRegion == Math.HitRegion.XNeg)) {
      double x = this._loc.x+shift.dx;
      this._loc = new Math.Point3(x, this._loc.y+shift.dy, this._loc.z+shift.dz);
      this._vector = new Math.Vector3(0.0, remainder.dy, remainder.dz);

    } else if ((hitRegion == Math.HitRegion.YPos) || (hitRegion == Math.HitRegion.YNeg)) {
      double y = this._loc.y+shift.dy;
      this._loc = new Math.Point3(this._loc.x+shift.dx, y, this._loc.z+shift.dz);
      this._vector = new Math.Vector3(remainder.dx, 0.0, remainder.dz);

    } else if ((hitRegion == Math.HitRegion.ZPos) || (hitRegion == Math.HitRegion.ZNeg)) {
      double z = this._loc.z+shift.dz;
      this._loc = new Math.Point3(this._loc.x+shift.dx, this._loc.y+shift.dy, z);
      this._vector = new Math.Vector3(remainder.dx, remainder.dy, 0.0);
    }

    this._touching |= hitRegion;
    return true;
  }
  
  /// Gets the string for this collision result.
  @override
  String toString() =>
    "Collider($_loc, $_touching)";
}
