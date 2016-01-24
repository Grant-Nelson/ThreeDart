part of ThreeDart.Data;

/// A builder for creating buffers while building a cache for a shape.
abstract class BufferBuilder {

  /// Creates a new buffer from the given double list.
  Buffer fromDoubleList(int bufType, List<double> vertices);

  /// Creates a new buffer from the given integer list.
  Buffer fromIntList(int bufType, List<int> vertices);
}

/// A builder for creating WebGL buffers.
class WebGLBufferBuilder implements BufferBuilder {

  /// The rendering context to create buffers for.
  WebGL.RenderingContext _gl;

  /// Creates a new WebGL buffer builder.
  WebGLBufferBuilder(this._gl);

  /// Creates a new buffer from the given double list.
  Buffer fromDoubleList(int bufType, List<double> vertices) {
    return new WebGLBuffer.fromDoubleList(this._gl, bufType, vertices);
  }

  /// Creates a new buffer from the given integer list.
  Buffer fromIntList(int bufType, List<int> vertices) {
    return new WebGLBuffer.fromIntList(this._gl, bufType, vertices);
  }
}

/// A builder for creating test buffers.
class TestBufferBuilder implements BufferBuilder {

  /// Creates a new test buffer builder.
  TestBufferBuilder();

  /// Creates a new buffer from the given double list.
  Buffer fromDoubleList(int bufType, List<double> vertices) {
    return new TestDoubleBuffer(bufType, vertices);
  }

  /// Creates a new buffer from the given integer list.
  Buffer fromIntList(int bufType, List<int> vertices) {
    return new TestIntBuffer(bufType, vertices);
  }
}
