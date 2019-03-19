part of craft;

/// TODO: Comment everything
class Collider {

  World _world;
  List<_colliderTest> _tests;
  Math.Point3 _loc;
  Math.Point3 _offset;
  Math.Vector3 _vector;
  Math.HitRegion _touching;
  int _killCount;

  Collider(this._world) {
    this._tests = new List<_colliderTest>();
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
    final int count = this._tests.length;
    while (count > 0) {

      this._killCount--; // TODO: REMOVE
      if (this._killCount <= 0) {
        print("KILL COUNT EXCEEDED!");
        return false;
      }

      for (int i = 0; i < count; i++) {
        _colliderTest test = this._tests[i];
        NeighborBlockInfo neighbor = test._neighbor;
        if (neighbor?.info == null) return false;

        if (BlockType.hard(neighbor.info.value)) {
          if (_isCollision(neighbor, test._sensor)) {
            _collided(neighbor.info, neighbor.ray.start, test._sensor);
            return true;
          }
        }
        test._neighbor = this._world.getNeighborBlock(neighbor.info, test._ray, test._back, depth);
      }
      depth++;
    }
    return true;
  }

  void _addRays(List<Math.Point3> points, Math.HitRegion prevTouching) {
    this._loc = points[0];
    this._tests.clear();

    for (_collisionSensor sensor in _allSensors) {
      this._addRayGroup(points, sensor, prevTouching);
    }
  }

  void _addRayGroup(List<Math.Point3> points, _collisionSensor sensor, Math.HitRegion prevTouching) {
    if (prevTouching.has(sensor.hitRegion)) {
      
      for (Math.Point3 point in points) {
        Math.Point3 testPnt = point + sensor.location;
        BlockInfo info = this._world.getBlock(testPnt.x, testPnt.y, testPnt.z);
        if (BlockType.hard(info.value)) {
          _collided(info, testPnt, sensor);
          break;
        }
      }
    }
    
    for (Math.Point3 point in points) {
      this._addRay(point + sensor.location, sensor);
    }
  }

  void _addRay(Math.Point3 point, _collisionSensor sensor) {
    if (sensor.isMoving(this._vector)) {
      Math.Ray3 ray = new Math.Ray3.fromVector(point, this._vector);
      BlockInfo info = this._world.getBlock(point.x, point.y, point.z);
      _colliderTest test = new _colliderTest()
        .._ray      = ray
        .._back     = ray.reverse
        .._sensor   = sensor
        .._neighbor = new NeighborBlockInfo(info, Math.HitRegion.Inside, ray, 0);
      this._tests.add(test);
    }
  }

  // Update start locations and vector to the new offset.
  void _updateRays() {
    this._loc += this._offset;
    if (this._offset != null) {
      for (int i = this._tests.length - 1; i >= 0; i--)
        this._updateRay(i);
    }
  }

  void _updateRay(int index) {
    _colliderTest test = this._tests[index];
    Math.Point3 point = test._ray.start + this._offset;
    Math.Ray3 ray = new Math.Ray3.fromVector(point, this._vector);
    test._ray = ray;
    test._back = ray.reverse;

    BlockInfo info = this._world.getBlock(point.x, point.y, point.z);
    test._neighbor = new NeighborBlockInfo(info, Math.HitRegion.Inside, ray, 0);
  }

  bool _isCollision(NeighborBlockInfo neighbor, _collisionSensor sensor) =>
    ((neighbor.region == sensor.hitRegion) ||
     (neighbor.region == Math.HitRegion.Inside)) &&
     sensor.isMoving(this._vector);
  
  void _collided(BlockInfo info, Math.Point3 point, _collisionSensor sensor) {
    this._offset = sensor.getOffset(info, point);
    if (sensor.isMoving(this._vector))
      this._vector = sensor.stopMovement(this._vector);
    this._touching |= sensor.hitRegion;
  }
  
  /// Gets the string for this collision result.
  @override
  String toString() =>
    "Collider($_loc, $_touching)";
}
