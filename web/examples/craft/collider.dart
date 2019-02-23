part of craft;

abstract class _collisionSensor {
  String get name;
  Math.HitRegion get hitRegion;
  Math.Point3 get location;
  bool isMoving(Math.Vector3 vel);
  Math.Vector3 stopMovement(Math.Vector3 vel);
  Math.Point3 getOffset(BlockInfo info, Math.Point3 point);
}

// Hit wall to the right
class _xPosSensor implements _collisionSensor {
  String get name => "xPosSensor";
  Math.HitRegion get hitRegion => Math.HitRegion.XPos;
  Math.Point3 get location => new Math.Point3(Constants.horizontalPad, 0.0, 0.0);
  bool isMoving(Math.Vector3 vel) => vel.dx > 0.0;
  Math.Vector3 stopMovement(Math.Vector3 vel) => new Math.Vector3(0.0, vel.dy, vel.dz);
  Math.Point3 getOffset(BlockInfo info, Math.Point3 point) => new Math.Point3(info.worldX - point.x, 0.0, 0.0);
}

// Hit wall to the left
class _xNegSensor implements _collisionSensor {
  String get name => "xNegSensor";
  Math.HitRegion get hitRegion => Math.HitRegion.XNeg;
  Math.Point3 get location => new Math.Point3(-Constants.horizontalPad, 0.0, 0.0);
  bool isMoving(Math.Vector3 vel) => vel.dx < 0.0;
  Math.Vector3 stopMovement(Math.Vector3 vel) => new Math.Vector3(0.0, vel.dy, vel.dz);
  Math.Point3 getOffset(BlockInfo info, Math.Point3 point) => new Math.Point3(point.x - info.worldX - 1.0, 0.0, 0.0);
}

// Hit ceiling
class _yPosSensor implements _collisionSensor {
  String get name => "yPosSensor";
  Math.HitRegion get hitRegion => Math.HitRegion.YPos;
  Math.Point3 get location => new Math.Point3(0.0, Constants.verticalPad, 0.0);
  bool isMoving(Math.Vector3 vel) => vel.dy > 0.0;
  Math.Vector3 stopMovement(Math.Vector3 vel) => new Math.Vector3(vel.dx, 0.0, vel.dz);
  Math.Point3 getOffset(BlockInfo info, Math.Point3 point) => new Math.Point3(0.0, info.y - point.y, 0.0);
}

// Ether hitting the floor or stuck inside of hard block, push character up.
class _yNegSensor implements _collisionSensor {
  String get name => "yNegSensor";
  Math.HitRegion get hitRegion => Math.HitRegion.YNeg;
  Math.Point3 get location => new Math.Point3(0.0, -Constants.verticalPad, 0.0);
  bool isMoving(Math.Vector3 vel) => vel.dy < 0.0;
  Math.Vector3 stopMovement(Math.Vector3 vel) => new Math.Vector3(vel.dx, 0.0, vel.dz);
  Math.Point3 getOffset(BlockInfo info, Math.Point3 point) => new Math.Point3(0.0, point.y - info.y - 1.0, 0.0);
}

// Hit wall to the front
class _zPosSensor implements _collisionSensor {
  String get name => "zPosSensor";
  Math.HitRegion get hitRegion => Math.HitRegion.ZPos;
  Math.Point3 get location => new Math.Point3(0.0, 0.0, Constants.horizontalPad);
  bool isMoving(Math.Vector3 vel) => vel.dz > 0.0;
  Math.Vector3 stopMovement(Math.Vector3 vel) => new Math.Vector3(vel.dx, vel.dy, 0.0);
  Math.Point3 getOffset(BlockInfo info, Math.Point3 point) => new Math.Point3(0.0, 0.0, info.worldZ - point.z);
}

// Hit wall to the back
class _zNegSensor implements _collisionSensor {
  String get name => "zNegSensor";
  Math.HitRegion get hitRegion => Math.HitRegion.ZNeg;
  Math.Point3 get location => new Math.Point3(0.0, 0.0, -Constants.horizontalPad);
  bool isMoving(Math.Vector3 vel) => vel.dz < 0.0;
  Math.Vector3 stopMovement(Math.Vector3 vel) => new Math.Vector3(vel.dx, vel.dy, 0.0);
  Math.Point3 getOffset(BlockInfo info, Math.Point3 point) => new Math.Point3(0.0, 0.0, point.z - info.worldZ - 1.0);
}

final List<_collisionSensor> _allSensors = [
  new _xPosSensor(),
  new _xNegSensor(),
  new _yPosSensor(),
  new _yNegSensor(),
  new _zPosSensor(),
  new _zNegSensor()
];

class _colliderTest {
  Math.Ray3 _ray;
  Math.Ray3 _back;
  _collisionSensor _sensor;
  NeighborBlockInfo _neighbor;
}

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
    //this._offset = Math.Point3.zero; // TODO: Restore

    if (points.length <= 0) return false;
    this._prepare(points, prevTouching);

    while (true) {
      this._offset = Math.Point3.zero;
      if (!this._traverseNeighbors()) break;
      if (this._offset == Math.Point3.zero) break;
      this._updateRays();
    }

    this._loc += new Math.Point3.fromVector3(this._vector);
    return true;
  }
  
  Math.Point3 get location => this._loc;
  Math.HitRegion get touching => this._touching;
  
  void _prepare(List<Math.Point3> points, Math.HitRegion prevTouching) {
    this._loc = points[0];
    this._tests.clear();

    for (_collisionSensor sensor in _allSensors) {
      this._checkTouchingSensor(sensor, points, prevTouching);
      this._addTestForSensor(sensor, points);
    }

    print("sensors: ${this._tests.length}");// TODO: REMOVE
  }

  // Check to see if previous collision still is occuring.
  void _checkTouchingSensor(_collisionSensor sensor, List<Math.Point3> points, Math.HitRegion prevTouching) {
    if (prevTouching.has(sensor.hitRegion)) {
      for (Math.Point3 point in points) {
        Math.Point3 testPnt = point + sensor.location;
        BlockInfo info = this._world.getBlock(testPnt.x, testPnt.y, testPnt.z);
        if (BlockType.hard(info.value)) {
          this._performMove(sensor, info, testPnt);
          break;
        }
      }
    }
  }

  // Add any tests for sensors which need to be checked.
  void _addTestForSensor(_collisionSensor sensor, List<Math.Point3> points) {
    print("add: $_collisionSensor => ${sensor.isMoving(this._vector)} && ${!this._touching.has(sensor.hitRegion)}"); // TODO: REMOVE

    if (sensor.isMoving(this._vector) && !this._touching.has(sensor.hitRegion)) {
      for (Math.Point3 point in points) {
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
  }

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
          _collisionSensor sensor = test._sensor;
          if (this._isCollision(sensor, neighbor)) {  
            this._performMove(sensor, neighbor.info, neighbor.ray.start);
            return true;
          }
        }
        test._neighbor = this._world.getNeighborBlock(neighbor.info, test._ray, test._back, depth);
      }
      depth++;
    }
    //return false; // TODO: Restore
  }

  // Update start locations and vector to the new offset.
  void _updateRays() {
    this._loc += this._offset;
    for (int i = this._tests.length - 1; i >= 0; i--)
      this._updateRay(i);
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

  bool _isCollision(_collisionSensor sensor, NeighborBlockInfo neighbor) =>
    BlockType.hard(neighbor.info.value) &&
    (neighbor.region == Math.HitRegion.Inside || neighbor.region == sensor.hitRegion) &&
    sensor.isMoving(this._vector);

  void _performMove(_collisionSensor sensor, BlockInfo info, Math.Point3 point) {
    this._offset += sensor.getOffset(info, point);
    if (sensor.isMoving(this._vector))
      this._vector = sensor.stopMovement(this._vector);
    this._touching |= sensor.hitRegion;
  }
  
  /// Gets the string for this collision result.
  @override
  String toString() =>
    "Collider($_loc, $_touching)";
}