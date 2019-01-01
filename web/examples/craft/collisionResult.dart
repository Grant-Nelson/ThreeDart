part of craft;

/// TODO: Comment everything
class CollisionResult {

  final Math.Point3 result;

  final bool touchingGround;

  CollisionResult(this.result, this.touchingGround);
  
  /// Gets the string for this collision result.
  @override
  String toString() =>
    "CollisionResult($result, $touchingGround)";
}
