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
  int _killCountDown;

  Collider(this._world) {
    this._loc = null;
    this._region = null;
    this._vector = null;
    this._touching = Math.HitRegion.None;
    this._blocks = new List<Math.Region3>();
    this._blockSides = new List<Math.HitRegion>();
    this._hasHit = new List<bool>();
    this._killCountDown = 20;
  }
  
  bool collide(Math.Region3 region, Math.Point3 loc, Math.Vector3 vector) {
    this._loc = loc;
    this._region = region;
    this._vector = vector;
    this._touching = Math.HitRegion.None;

    //print(">>======================================");
    //print(">> loc:    $_loc");
    //print(">> vector: $_vector");
    //print(">> region: $_region");

    this._collectBlocks();
    while (this._singleCollide());

    this._loc += new Math.Point3.fromVector3(this._vector);
    
    //print(">> loc:    $_loc");
    //print(">> vector: $_vector");
    //print(">> region: $_region");
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
    
    //print(">>================================================");
    //print(">> aabb:   ${aabb}");
    //print(">> minXYZ: ${minXYZ.blockRegion}");
    //print(">> maxXYZ: ${maxXYZ.blockRegion}");

    this._blocks.clear();
    this._blockSides.clear();
    this._hasHit.clear();
    for (BlockInfo x = minXYZ; (x != null) && (x.worldX <= maxWorldX); x = x.right) {
      for (BlockInfo y = x; (y != null) && (y.y <= maxXYZ.y); y = y.above) {
        for (BlockInfo z = y; (z != null) && (z.worldZ <= maxWorldZ); z = z.front) {
          if (BlockType.hard(z.value)) {
            Math.HitRegion sides = z.solidNeighbors();
            if (sides != Math.HitRegion.Cardinals) {
              // print(">>--------------------------------------");
              // print(">> Solids:  $sides");
              // print(">> Inverse: ${sides.inverse()}");
              // print(">> Not:     ${Math.HitRegion.Cardinals & ~sides}");
              //print(">> z: ${z.blockRegion} $sides");
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
    
    //this._killCountDown--;
    //if (this._killCountDown < 0){  
    //  print(">> Stop");
    //  throw Exception("OUCH");
    //}

    //print(">>--------------------------------------");
    // print(">> loc:    $_loc");
    // print(">> vector: $_vector");
    // print(">> region: $region");

    Math.IntersectionBetweenMovingRegions hit = null;
    Math.Region3 hitBlock = null;
    int hitIndex = -1;
    for (int i = 0; i < this._blocks.length; i++) {
      if (!this._hasHit[i]) {
        Math.Region3 block = this._blocks[i];
        Math.HitRegion sides = this._blockSides[i];
        //print(">> block: $block $sides");
        Math.IntersectionBetweenMovingRegions cur = region.collision(block, this._vector, sides);
        if (cur != null) {
          if ((hit == null) || (hit.parametric > cur.parametric)) {
            hit = cur;
            hitBlock = block;
            hitIndex = i;
            //print(">> hit:   $hit");
          }
        }
      }
    }
    if (hit == null) return false;
    this._hasHit[hitIndex] = true;

    // print(">> result:   $hit");
    // print(">> hitBlock: $hitBlock");
    if (hit.region == Math.HitRegion.Inside) {
      throw Exception("WHAT?!? HOW?!?");
      // double dy = this._region.x+this._region.dx-hitBlock.x;
      // Math.Vector3 shift = new Math.Vector3(0.0, dy, 0.0);
      // this._loc += new Math.Point3.fromVector3(shift);
      // this._region = this._region.translate(shift);
      // this._vector = Math.Vector3.zero;
      // this._touching |= Math.HitRegion.YNeg;
      // return false; // TODO: handle bump
    }

    Math.Vector3 shift = this._vector * hit.parametric;
    Math.Vector3 remainder = this._vector * (1.0 - hit.parametric);

    if ((hit.region == Math.HitRegion.XPos) || (hit.region == Math.HitRegion.XNeg)) {
      double x = this._trim(this._loc.x+shift.dx);
      this._loc = new Math.Point3(x, this._loc.y+shift.dy, this._loc.z+shift.dz);
      this._vector = new Math.Vector3(0.0, remainder.dy, remainder.dz);

    } else if ((hit.region == Math.HitRegion.YPos) || (hit.region == Math.HitRegion.YNeg)) {
      double y = this._trim(this._loc.y+shift.dy);
      this._loc = new Math.Point3(this._loc.x+shift.dx, y, this._loc.z+shift.dz);
      this._vector = new Math.Vector3(remainder.dx, 0.0, remainder.dz);

    } else if ((hit.region == Math.HitRegion.ZPos) || (hit.region == Math.HitRegion.ZNeg)) {
      double z = this._trim(this._loc.z+shift.dz);
      this._loc = new Math.Point3(this._loc.x+shift.dx, this._loc.y+shift.dy, z);
      this._vector = new Math.Vector3(remainder.dx, remainder.dy, 0.0);
    }

    this._touching |= hit.region;
    return true;
  }

  double _trim(double value) => value;// (value*100.0).roundToDouble()/100.0;
  
  /// Gets the string for this collision result.
  @override
  String toString() =>
    "Collider($_loc, $_touching)";
}
