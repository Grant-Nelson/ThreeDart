part of ThreeDart.Shapes;

/// A tool for measuring a distance to a vertex.
abstract class VertexMeasure {

  /// Determines the distance of the given vertex.
  double measure(Vertex ver);
}

/// A vector measure which measures the distance from a point.
/// Not recommended for getting a maximum distance or minimum distance
/// from a point since this performs a square root for each measurement.
class RadialVertexMeasure extends VertexMeasure {

  /// The scalar to apply to the distance.
  double _scalar;

  /// The center point to get this distance from.
  Math.Point3 _center;

  /// Creates a new radial measure tool with optional [center] and [scalar].
  RadialVertexMeasure({double scalar: 1.0, Math.Point3 center: null}) {
    this._scalar = scalar;
    this._center = (center == null)? new Math.Point3.zero(): center;
  }

  /// Determines the distance from the center point to the given vertex scaled.
  double measure(Vertex ver) {
    return this._center.distance(ver.location)*this._scalar;
  }
}

/// A vector measure which measures the distance squared from a point.
class Radial2VertexMeasure extends VertexMeasure {

  /// The scalar to apply to the distance.
  double _scalar;

  /// The center point to get this distance squared from.
  Math.Point3 _center;

  /// Creates a new radial 2 measure tool with optional [center] and [scalar].
  Radial2VertexMeasure({double scalar: 1.0, Math.Point3 center: null}) {
    this._scalar = scalar;
    this._center = (center == null)? new Math.Point3.zero(): center;
  }

  /// Determines the distance  squared from the center point to the given vertex scaled.
  double measure(Vertex ver) {
    return this._center.distance2(ver.location)*this._scalar;
  }
}

/// A vector measure which measures as a projection of the vertex onto
/// a ray defined by a common center point and vector.
class DirectionalVertexMeasure extends VertexMeasure {

  /// The vector for the direction and magnitude of projection measurement.
  Math.Vector3 _vector;

  /// The center point for the measurements and start of the vector's ray.
  Math.Point3 _center;

  /// Creates a new directional measure tool with optional [center] and [vector].
  DirectionalVertexMeasure({Math.Point3 center: null, Math.Vector3 vector: null}) {
    this._center = (center == null)? new Math.Point3.zero(): center;
    this._vector = (vector == null)? new Math.Vector3(0.0, 0.0, 1.0): vector;
  }

  /// Determins the distance from the center point of the given vertex
  /// projected on the vector.
  double measure(Vertex ver) {
    Math.Vector3 diff = new Math.Vector3.fromPoint3(ver.location - this._center);
    return this._vector.dot(diff);
  }
}
