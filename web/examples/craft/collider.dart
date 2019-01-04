part of craft;

final Math.Point3 _xNegPadOffset = new Math.Point3(-Constants.horizontalPad, 0.0, 0.0);
final Math.Point3 _xPosPadOffset = new Math.Point3(Constants.horizontalPad, 0.0, 0.0);
final Math.Point3 _yNegPadOffset = new Math.Point3(0.0, -Constants.verticalPad, 0.0);
final Math.Point3 _yPosPadOffset = new Math.Point3(0.0, Constants.verticalPad, 0.0);
final Math.Point3 _zNegPadOffset = new Math.Point3(0.0, 0.0, -Constants.horizontalPad);
final Math.Point3 _zPosPadOffset = new Math.Point3(0.0, 0.0, Constants.horizontalPad);

/// TODO: Comment everything
class Collider {

  World _world;
  List<Math.Ray3> _rays;
  List<Math.Ray3> _backs;
  List<HandleTraverseNeighbor> _hndls;
  List<NeighborBlockInfo> _neighbors;
  bool _notDone;
  Math.Point3 _loc;
  Math.Point3 _offset;
  Math.Vector3 _vector;
  bool _touchingGround;

  Collider(this._world) {
    this._rays = new List<Math.Ray3>();
    this._backs = new List<Math.Ray3>();
    this._hndls = new List<HandleTraverseNeighbor>();
    this._neighbors = new List<NeighborBlockInfo>();
    this._notDone = true;
    this._loc = null;
    this._offset = null;
    this._vector = null;
    this._touchingGround = false;
  }
  
  bool collide(List<Math.Point3> points, Math.Vector3 vector) {
    this._touchingGround = false;
    this._notDone = true;
    this._vector = vector;

    if (points.length <= 0) return false;
    this._setupRays(points);

    while (this._notDone) {
      this._loc = this._rays[0].start + new Math.Point3.fromVector3(this._vector);
      this._traverseNeighbors();

      // Update start locations and vector to the new offset.
      if (this._offset != null) {
        for (int i = this._rays.length - 1; i >= 0; i--)
          this._updateRay(i);
      }
    }

    return true;
  }
  
  Math.Point3 get location => this._loc;
  bool get touchingGround => this._touchingGround;
  
  void _traverseNeighbors() {
    int depth = 0;
    final int count = this._rays.length;
    while (true) {
      for (int i = 0; i < count; i++) {
        NeighborBlockInfo neighbor = this._neighbors[i];
        if (!this._hndls[i](neighbor)) return;
        this._neighbors[i] = this._world.getNeighborBlock(neighbor.info, this._rays[i], this._backs[i], depth);
      }
      depth++;
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

  void _addRay(Math.Point3 point, HandleTraverseNeighbor hndl) {
    Math.Ray3 ray = new Math.Ray3.fromVector(point, this._vector);
    this._rays.add(ray);
    this._backs.add(ray.reverse);
    this._hndls.add(hndl);

    BlockInfo info = this._world.getBlock(point.x, point.y, point.z);
    this._neighbors.add(new NeighborBlockInfo(info, Math.HitRegion.Inside, ray, 0));
  }

  void _setupRays(List<Math.Point3> points) {
    this._rays.clear();
    this._backs.clear();
    this._hndls.clear();
    this._neighbors.clear();
    for (Math.Point3 point in points) {
      this._addRay(point + _yNegPadOffset, this._collideYNeg);
      this._addRay(point + _yPosPadOffset, this._collideYPos);
    }
    for (Math.Point3 point in points) {
      this._addRay(point + _xNegPadOffset, this._collideXNeg);
      this._addRay(point + _xPosPadOffset, this._collideXPos);
    }
    for (Math.Point3 point in points) {
      this._addRay(point + _zNegPadOffset, this._collideZNeg);
      this._addRay(point + _zPosPadOffset, this._collideZPos);
    }
  }
  
  bool _collideXPos(NeighborBlockInfo neighbor) {
    if (neighbor?.info == null) return true;
    if (!BlockType.hard(neighbor.info.value)) return false;
    if ((neighbor.region != Math.HitRegion.XPos) &&
        (neighbor.region != Math.HitRegion.Inside)) return false;

    // Hit wall to the right
    this._offset = new Math.Point3(neighbor.info.worldX - neighbor.ray.x, 0.0, 0.0);
    this._vector = new Math.Vector3(0.0, this._vector.dy, this._vector.dz);
    return true;
  }

  bool _collideXNeg(NeighborBlockInfo neighbor) {
    if (neighbor?.info == null) return true;
    if (!BlockType.hard(neighbor.info.value)) return false;
    if ((neighbor.region != Math.HitRegion.XNeg) &&
        (neighbor.region != Math.HitRegion.Inside)) return false;

    // Hit wall to the left
    this._offset = new Math.Point3(neighbor.info.worldX + 1.0 - neighbor.ray.x, 0.0, 0.0);
    this._vector = new Math.Vector3(0.0, this._vector.dy, this._vector.dz);
    return true;
  }

  bool _collideYPos(NeighborBlockInfo neighbor) {
    if (neighbor?.info == null) return true;
    if (!BlockType.hard(neighbor.info.value)) return false;
    if ((neighbor.region != Math.HitRegion.YPos) &&
        (neighbor.region != Math.HitRegion.Inside)) return false;

    // Hit ceiling
    this._offset = new Math.Point3(0.0, neighbor.info.y - neighbor.ray.y, 0.0);
    this._vector = new Math.Vector3(this._vector.dx, 0.0, this._vector.dz);
    return true;
  }

  bool _collideYNeg(NeighborBlockInfo neighbor) {
    if (neighbor?.info == null) return true;
    if (!BlockType.hard(neighbor.info.value)) return false;
    if ((neighbor.region != Math.HitRegion.YNeg) &&
        (neighbor.region != Math.HitRegion.Inside)) return false;

    // Ether hitting the floor or stuck inside of hard block, push character up.
    this._offset = new Math.Point3(0.0, neighbor.info.y + 1.0 - neighbor.ray.y, 0.0);
    this._vector = new Math.Vector3(this._vector.dx, 0.0, this._vector.dz);
    this._touchingGround = true;
    return true;
  }

  bool _collideZPos(NeighborBlockInfo neighbor) {
    if (neighbor?.info == null) return true;
    if (!BlockType.hard(neighbor.info.value)) return false;
    if ((neighbor.region != Math.HitRegion.ZPos) &&
        (neighbor.region != Math.HitRegion.Inside)) return false;

    // Hit wall to the front
    this._offset = new Math.Point3(0.0, 0.0, neighbor.info.worldZ - neighbor.ray.z);
    this._vector = new Math.Vector3(this._vector.dx, this._vector.dy, 0.0);
    return true;
  }

  bool _collideZNeg(NeighborBlockInfo neighbor) {
    if (neighbor?.info == null) return true;
    if (!BlockType.hard(neighbor.info.value)) return false;
    if ((neighbor.region != Math.HitRegion.ZNeg) &&
        (neighbor.region != Math.HitRegion.Inside)) return false;

    // Hit wall to the back
    this._offset = new Math.Point3(0.0, 0.0, neighbor.info.worldZ + 1.0 - neighbor.ray.z);
    this._vector = new Math.Vector3(this._vector.dx, this._vector.dy, 0.0);
    return true;
  }
  
  /// Gets the string for this collision result.
  @override
  String toString() =>
    "Collider($_loc, $_touchingGround)";
}