part of craft;

abstract class _collisionSensor {
  Math.HitRegion get hitRegion;
  Math.Point3 get location;
  bool isMoving(Math.Vector3 vel);
  Math.Vector3 stopMovement(Math.Vector3 vel);
  Math.Point3 getOffset(BlockInfo info, Math.Point3 point);
}

// Hit wall to the right
class _xPosSensor implements _collisionSensor {
  Math.HitRegion get hitRegion => Math.HitRegion.XPos;
  Math.Point3 get location => new Math.Point3(Constants.horizontalPad, 0.0, 0.0);
  bool isMoving(Math.Vector3 vel) => vel.dx > 0.0;
  Math.Vector3 stopMovement(Math.Vector3 vel) => new Math.Vector3(0.0, vel.dy, vel.dz);
  Math.Point3 getOffset(BlockInfo info, Math.Point3 point) => new Math.Point3(info.worldX - point.x, 0.0, 0.0);
}

// Hit wall to the left
class _xNegSensor implements _collisionSensor {
  Math.HitRegion get hitRegion => Math.HitRegion.XNeg;
  Math.Point3 get location => new Math.Point3(-Constants.horizontalPad, 0.0, 0.0);
  bool isMoving(Math.Vector3 vel) => vel.dx < 0.0;
  Math.Vector3 stopMovement(Math.Vector3 vel) => new Math.Vector3(0.0, vel.dy, vel.dz);
  Math.Point3 getOffset(BlockInfo info, Math.Point3 point) => new Math.Point3(point.x - info.worldX - 1.0, 0.0, 0.0);
}

// Hit ceiling
class _yPosSensor implements _collisionSensor {
  Math.HitRegion get hitRegion => Math.HitRegion.YPos;
  Math.Point3 get location => new Math.Point3(0.0, Constants.verticalPad, 0.0);
  bool isMoving(Math.Vector3 vel) => vel.dy > 0.0;
  Math.Vector3 stopMovement(Math.Vector3 vel) => new Math.Vector3(vel.dx, 0.0, vel.dz);
  Math.Point3 getOffset(BlockInfo info, Math.Point3 point) => new Math.Point3(0.0, info.y - point.y, 0.0);
}

// Ether hitting the floor or stuck inside of hard block, push character up.
class _yNegSensor implements _collisionSensor {
  Math.HitRegion get hitRegion => Math.HitRegion.YNeg;
  Math.Point3 get location => new Math.Point3(0.0, -Constants.verticalPad, 0.0);
  bool isMoving(Math.Vector3 vel) => vel.dy < 0.0;
  Math.Vector3 stopMovement(Math.Vector3 vel) => new Math.Vector3(vel.dx, 0.0, vel.dz);
  Math.Point3 getOffset(BlockInfo info, Math.Point3 point) => new Math.Point3(0.0, info.y + 1.0 - point.y, 0.0);
  // Why not this? > point.z - info.worldZ - 1.0
  // Why does the order matter for the sensors?
}

// Hit wall to the front
class _zPosSensor implements _collisionSensor {
  Math.HitRegion get hitRegion => Math.HitRegion.ZPos;
  Math.Point3 get location => new Math.Point3(0.0, 0.0, Constants.horizontalPad);
  bool isMoving(Math.Vector3 vel) => vel.dz > 0.0;
  Math.Vector3 stopMovement(Math.Vector3 vel) => new Math.Vector3(vel.dx, vel.dy, 0.0);
  Math.Point3 getOffset(BlockInfo info, Math.Point3 point) => new Math.Point3(0.0, 0.0, info.worldZ - point.z);
}

// Hit wall to the back
class _zNegSensor implements _collisionSensor {
  Math.HitRegion get hitRegion => Math.HitRegion.ZNeg;
  Math.Point3 get location => new Math.Point3(0.0, 0.0, -Constants.horizontalPad);
  bool isMoving(Math.Vector3 vel) => vel.dz < 0.0;
  Math.Vector3 stopMovement(Math.Vector3 vel) => new Math.Vector3(vel.dx, vel.dy, 0.0);
  Math.Point3 getOffset(BlockInfo info, Math.Point3 point) => new Math.Point3(0.0, 0.0, point.z - info.worldZ - 1.0);
}

final List<_collisionSensor> _allSensors = [
  new _yNegSensor(),
  new _yPosSensor(),
  new _xNegSensor(),
  new _xPosSensor(),
  new _zNegSensor(),
  new _zPosSensor()
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
    while (true) {

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
    Math.Ray3 ray = new Math.Ray3.fromVector(point, this._vector);
    BlockInfo info = this._world.getBlock(point.x, point.y, point.z);
    _colliderTest test = new _colliderTest()
      .._ray      = ray
      .._back     = ray.reverse
      .._sensor   = sensor
      .._neighbor = new NeighborBlockInfo(info, Math.HitRegion.Inside, ray, 0);
    this._tests.add(test);
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
