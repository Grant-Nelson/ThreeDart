part of ThreeDart.Shapes;

/// A builder for filling out a for a shape buffer.
abstract class ShapeBuilder extends Events.Changeable {

  /// Calculates the normals for the vertices and faces.
  /// True if successful, false on error.
  bool calculateNormals();

  /// Calculates the binormals for the vertices and faces.
  /// Typically the normals should be calculated first.
  /// True if successful, false on error.
  bool calculateBinormals();

  /// Calculates the cube texture coordinate for the vertices and faces.
  /// The normals should be calculated first.
  /// True if successful, false on error.
  bool calculateCubeTextures();

  /// Calculates the axial alligned bounding box of the shape.
  Math.Region3 calculateAABB();

  /// Builds a buffer store for caching the shape for rendering.
  /// This requires the buffer [builder] for WebGL or testing,
  /// and the vertex [type] required for technique.
  Data.BufferStore build(Data.BufferBuilder builder, Data.VertexType type);
}
