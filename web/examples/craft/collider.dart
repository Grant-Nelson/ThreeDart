part of craft;

final Math.Point3 _xNegPadOffset = new Math.Point3(-Constants.horizontalPad, 0.0, 0.0);
final Math.Point3 _xPosPadOffset = new Math.Point3(Constants.horizontalPad, 0.0, 0.0);
final Math.Point3 _yNegPadOffset = new Math.Point3(0.0, -Constants.verticalPad, 0.0);
final Math.Point3 _yPosPadOffset = new Math.Point3(0.0, Constants.verticalPad, 0.0);
final Math.Point3 _zNegPadOffset = new Math.Point3(0.0, 0.0, -Constants.horizontalPad);
final Math.Point3 _zPosPadOffset = new Math.Point3(0.0, 0.0, Constants.horizontalPad);

typedef void HandleCollision(BlockInfo info, Math.Point3 point);

/// TODO: Comment everything
class Collider {

  World _world;
  List<Math.Ray3> _rays;
  List<Math.Ray3> _backs;
  List<HandleTraverseNeighbor> _isCollision;
  List<HandleCollision> _collided;
  List<NeighborBlockInfo> _neighbors;
  Math.Point3 _loc;
  Math.Point3 _offset;
  Math.Vector3 _vector;
  Math.HitRegion _touching;
  int _killCount;

  Collider(this._world) {
    this._rays = new List<Math.Ray3>();
    this._backs = new List<Math.Ray3>();
    this._isCollision = new List<HandleTraverseNeighbor>();
    this._collided = new List<HandleCollision>();
    this._neighbors = new List<NeighborBlockInfo>();
    this._loc = null;
    this._offset = null;
    this._vector = null;
    this._touching = Math.HitRegion.None;
    this._killCount = 0;
  }
  
  bool collide(List<Math.Point3> points, Math.Vector3 vector) {
    Math.HitRegion prevTouching = this._touching;
    this._touching = Math.HitRegion.None;
    this._vector = vector;
    this._killCount = 100;

    if (points.length <= 0) return false;
    this._addRays(points, prevTouching);

    while (true) {
      this._offset = null;
      if (!this._traverseNeighbors()) break;
      if (this._offset == null) break;
      this._updateRays();
    }

    this._loc += new Math.Point3.fromVector3(this._vector);
    return true;
  }
  
  Math.Point3 get location => this._loc;
  Math.HitRegion get touching => this._touching;
  
  bool _traverseNeighbors() {
    int depth = 0;
    final int count = this._rays.length;
    while (true) {
      for (int i = 0; i < count; i++) {
        NeighborBlockInfo neighbor = this._neighbors[i];
        if (neighbor?.info == null) return false;

        this._killCount--; // TODO: REMOVE
        if (this._killCount <= 0) {
          print("KILL COUNT EXCEEDED!");
          return false;
        }

        if (BlockType.hard(neighbor.info.value)) {
          if (this._isCollision[i](neighbor)) {
            this._collided[i](neighbor.info, neighbor.ray.start);
            return true;
          }
        }
        this._neighbors[i] = this._world.getNeighborBlock(neighbor.info, this._rays[i], this._backs[i], depth);
      }
      depth++;
    }
  }

  void _addRays(List<Math.Point3> points, Math.HitRegion prevTouching) {
    this._loc = points[0];
    this._rays.clear();
    this._backs.clear();
    this._isCollision.clear();
    this._collided.clear();
    this._neighbors.clear();
    this._addRayGroup(points, _yNegPadOffset, this._isCollideYNeg, this._moveYNeg, prevTouching, Math.HitRegion.YNeg);
    this._addRayGroup(points, _yPosPadOffset, this._isCollideYPos, this._moveYPos, prevTouching, Math.HitRegion.YPos);
    this._addRayGroup(points, _xNegPadOffset, this._isCollideXNeg, this._moveXNeg, prevTouching, Math.HitRegion.XNeg);
    this._addRayGroup(points, _xPosPadOffset, this._isCollideXPos, this._moveXPos, prevTouching, Math.HitRegion.XPos);
    this._addRayGroup(points, _zNegPadOffset, this._isCollideZNeg, this._moveZNeg, prevTouching, Math.HitRegion.ZNeg);
    this._addRayGroup(points, _zPosPadOffset, this._isCollideZPos, this._moveZPos, prevTouching, Math.HitRegion.ZPos);
  }

  void _addRayGroup(List<Math.Point3> points, Math.Point3 offset, HandleTraverseNeighbor isCollision,
    HandleCollision collided, Math.HitRegion prevTouching, Math.HitRegion region) {
    if (prevTouching.has(region)) {
      
      for (Math.Point3 point in points) {
        Math.Point3 testPnt = point + offset;
        BlockInfo info = this._world.getBlock(testPnt.x, testPnt.y, testPnt.z);
        if (BlockType.hard(info.value)) {
          collided(info, testPnt);
          break;
        }
      }
    }
    
    for (Math.Point3 point in points) {
      this._addRay(point + offset, isCollision, collided, region);
    }
  }


  void _addRay(Math.Point3 point, HandleTraverseNeighbor isCollision, HandleCollision collided, Math.HitRegion region) {
    Math.Ray3 ray = new Math.Ray3.fromVector(point, this._vector);
    this._rays.add(ray);
    this._backs.add(ray.reverse);
    this._isCollision.add(isCollision);
    this._collided.add(collided);

    BlockInfo info = this._world.getBlock(point.x, point.y, point.z);
    this._neighbors.add(new NeighborBlockInfo(info, Math.HitRegion.Inside, ray, 0));
  }

  // Update start locations and vector to the new offset.
  void _updateRays() {
    this._loc += this._offset;
    if (this._offset != null) {
      for (int i = this._rays.length - 1; i >= 0; i--)
        this._updateRay(i);
    }
  }

  void _updateRay(int index) {
    Math.Point3 point = this._rays[index].start + this._offset;
    Math.Ray3 ray = new Math.Ray3.fromVector(point, this._vector);
    this._rays[index] = ray;
    this._backs[index] = ray.reverse;

    BlockInfo info = this._world.getBlock(point.x, point.y, point.z);
    this._neighbors[index] = new NeighborBlockInfo(info, Math.HitRegion.Inside, ray, 0);
  }
  
  bool _isCollideXPos(NeighborBlockInfo neighbor) {
    return !((neighbor.region != Math.HitRegion.XPos) &&
             (neighbor.region != Math.HitRegion.Inside) &&
             (this._vector.dx < 0.0));
  }

  bool _isCollideXNeg(NeighborBlockInfo neighbor) {
    return !((neighbor.region != Math.HitRegion.XNeg) &&
             (neighbor.region != Math.HitRegion.Inside) &&
             (this._vector.dx > 0.0));
  }

  bool _isCollideYPos(NeighborBlockInfo neighbor) {
    return !((neighbor.region != Math.HitRegion.YPos) &&
             (neighbor.region != Math.HitRegion.Inside) &&
             (this._vector.dy < 0.0));
  }

  bool _isCollideYNeg(NeighborBlockInfo neighbor) {
    return !((neighbor.region != Math.HitRegion.YNeg) &&
             (neighbor.region != Math.HitRegion.Inside) &&
             (this._vector.dy > 0.0));
  }

  bool _isCollideZPos(NeighborBlockInfo neighbor) {
    return !((neighbor.region != Math.HitRegion.ZPos) &&
             (neighbor.region != Math.HitRegion.Inside) &&
             (this._vector.dz < 0.0));
  }

  bool _isCollideZNeg(NeighborBlockInfo neighbor) {
    return !((neighbor.region != Math.HitRegion.ZNeg) &&
             (neighbor.region != Math.HitRegion.Inside) &&
             (this._vector.dz > 0.0));
  }

  // Hit wall to the right
  void _moveXPos(BlockInfo info, Math.Point3 point) {
    this._offset = new Math.Point3(info.worldX - point.x, 0.0, 0.0);
    this._vector = new Math.Vector3(0.0, this._vector.dy, this._vector.dz);
    this._touching |= Math.HitRegion.XPos;
  }

  // Hit wall to the left
  void _moveXNeg(BlockInfo info, Math.Point3 point) {
    this._offset = new Math.Point3(info.worldX + 1.0 - point.x, 0.0, 0.0);
    this._vector = new Math.Vector3(0.0, this._vector.dy, this._vector.dz);
    this._touching |= Math.HitRegion.XNeg;
  }

  // Hit ceiling
  void _moveYPos(BlockInfo info, Math.Point3 point) {
    this._offset = new Math.Point3(0.0, info.y - point.y, 0.0);
    this._vector = new Math.Vector3(this._vector.dx, 0.0, this._vector.dz);
    this._touching |= Math.HitRegion.YPos;
  }

  // Ether hitting the floor or stuck inside of hard block, push character up.
  void _moveYNeg(BlockInfo info, Math.Point3 point) {
    this._offset = new Math.Point3(0.0, info.y + 1.0 - point.y, 0.0);
    this._vector = new Math.Vector3(this._vector.dx, 0.0, this._vector.dz);
    this._touching |= Math.HitRegion.YNeg;
  }

  // Hit wall to the front
  void _moveZPos(BlockInfo info, Math.Point3 point) {
    this._offset = new Math.Point3(0.0, 0.0, info.worldZ - point.z);
    this._vector = new Math.Vector3(this._vector.dx, this._vector.dy, 0.0);
    this._touching |= Math.HitRegion.ZPos;
  }

  // Hit wall to the back
  void _moveZNeg(BlockInfo info, Math.Point3 point) {
    this._offset = new Math.Point3(0.0, 0.0, info.worldZ + 1.0 - point.z);
    this._vector = new Math.Vector3(this._vector.dx, this._vector.dy, 0.0);
    this._touching |= Math.HitRegion.ZNeg;
  }
  
  /// Gets the string for this collision result.
  @override
  String toString() =>
    "Collider($_loc, $_touching)";
}