part of ThreeDart.Data;

abstract class Buffer extends Core.Bindable {
  // Empty
}

class WebGLBuffer implements Buffer {

  int _bufType;

  WebGL.Buffer _buf;

  WebGLBuffer(this._bufType, this._buf);

  factory WebGLBuffer.fromDoubleList(WebGL.RenderingContext gl, int bufType, List<double> data) {
    WebGL.Buffer buffer = gl.createBuffer();
    gl.bindBuffer(bufType, buffer);
    gl.bufferData(bufType, new Typed.Float32List.fromList(data), WebGL.STATIC_DRAW);
    gl.bindBuffer(bufType, null);
    return new WebGLBuffer(bufType, buffer);
  }

  factory WebGLBuffer.fromIntList(WebGL.RenderingContext gl, int bufType, List<int> data) {
    WebGL.Buffer buffer = gl.createBuffer();
    gl.bindBuffer(bufType, buffer);
    gl.bufferData(bufType, new Typed.Int16List.fromList(data), WebGL.STATIC_DRAW);
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

class TestDoubleBuffer implements Buffer {

  int _bufType;

  List<double> _buf;

  TestDoubleBuffer(this._bufType, this._buf);

  /// Throws an error because test buffers may not be binded.
  void bind(Core.RenderState state) {
    throw new Exception("May not bind a test doublebuffer.");
  }

  /// Has no effect for testing.
  void unbind(Core.RenderState state) {
    // Do Nothing
  }

  String toString() {
    List<String> parts = new List<String>();
    for (int i = 0; i < this._buf.length; ++i) {
      parts.add(Math.formatDouble(this._buf[i]));
    }
    return "${this._bufType}:${parts.join(',')}";
  }
}

class TestIntBuffer implements Buffer {

  int _bufType;

  List<int> _buf;

  TestIntBuffer(this._bufType, this._buf);

  /// Throws an error because test buffers may not be binded.
  void bind(Core.RenderState state) {
    throw new Exception("May not bind a test int buffer.");
  }

  /// Has no effect for testing.
  void unbind(Core.RenderState state) {
    // Do Nothing
  }

  String toString() {
    List<String> parts = new List<String>();
    for (int i = 0; i < this._buf.length; ++i) {
      parts.add("${this._buf[i]}");
    }
    return "${this._bufType}: ${parts.join(', ')}";
  }
}
