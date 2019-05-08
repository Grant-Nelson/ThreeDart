part of ThreeDart.Data;

/// A buffer is a special type of bindable designed to
/// store cached shape information for rendering.
abstract class Buffer extends Core.Bindable {
  // Empty
}

/// Storage for WebGL cached shape information.
class WebGLBuffer implements Buffer {

  /// Indicates the type of buffer, typically ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER.
  int _bufType;

  /// The WebGL packed buffer data.
  WebGL.Buffer _buf;

  /// Creates a new WebGL buffer.
  WebGLBuffer(this._bufType, this._buf);

  /// Creates a new WebGL buffer from a double list of data.
  /// Typically used for creating a vertex buffer, ARRAY_BUFFER.
  factory WebGLBuffer.fromDoubleList(WebGL.RenderingContext2 gl, int bufType, List<double> data) {
    WebGL.Buffer buffer = gl.createBuffer();
    gl.bindBuffer(bufType, buffer);
    gl.bufferData(bufType, new Typed.Float32List.fromList(data), WebGL.WebGL.STATIC_DRAW);
    gl.bindBuffer(bufType, null);
    return new WebGLBuffer(bufType, buffer);
  }

  /// Creates a new WebGL buffer from a integer list of data.
  /// Typically used for creating an index buffer, ELEMENT_ARRAY_BUFFER.
  factory WebGLBuffer.fromIntList(WebGL.RenderingContext2 gl, int bufType, List<int> data) {
    WebGL.Buffer buffer = gl.createBuffer();
    gl.bindBuffer(bufType, buffer);
    gl.bufferData(bufType, new Typed.Int16List.fromList(data), WebGL.WebGL.STATIC_DRAW);
    gl.bindBuffer(bufType, null);
    return new WebGLBuffer(bufType, buffer);
  }

  /// Binds the buffer to prepare for rendering.
  void bind(Core.RenderState state) {
    state.gl.bindBuffer(this._bufType, this._buf);
  }

  /// Unbinds the buffer when done rendering.
  void unbind(Core.RenderState state) {
    state.gl.bindBuffer(this._bufType, null);
  }
}

/// Test double buffer used for testing shape creation.
class TestDoubleBuffer implements Buffer {

  /// Indicates the type of buffer, typically ARRAY_BUFFER.
  int _bufType;

  /// The data stored by this buffer.
  List<double> _buf;

  /// Creates a new test double buffer.
  TestDoubleBuffer(this._bufType, this._buf);

  /// Throws an error because test buffers may not be binded.
  void bind(Core.RenderState state) {
    throw new Exception("May not bind a test doublebuffer.");
  }

  /// Has no effect for testing.
  void unbind(Core.RenderState state) {
    // Do Nothing
  }

  /// Gets the string for this buffer.
  String toString() {
    List<String> parts = new List<String>();
    for (int i = 0; i < this._buf.length; ++i) {
      parts.add(Math.formatDouble(this._buf[i]));
    }
    return "${this._bufType}:${parts.join(',')}";
  }
}

/// Test integer buffer used for testing shape creation.
class TestIntBuffer implements Buffer {

  /// Indicates the type of buffer, typically ELEMENT_ARRAY_BUFFER.
  int _bufType;

  /// The data stored by this buffer.
  List<int> _buf;

  /// Creates a new test integer buffer.
  TestIntBuffer(this._bufType, this._buf);

  /// Throws an error because test buffers may not be binded.
  void bind(Core.RenderState state) {
    throw new Exception("May not bind a test int buffer.");
  }

  /// Has no effect for testing.
  void unbind(Core.RenderState state) {
    // Do Nothing
  }

  /// Gets the string for this buffer.
  String toString() {
    List<String> parts = new List<String>();
    for (int i = 0; i < this._buf.length; ++i) {
      parts.add("${this._buf[i]}");
    }
    return "${this._bufType}: ${parts.join(', ')}";
  }
}
