part of ThreeDart.Data;

abstract class BufferBuilder {

  Buffer fromDoubleList(int bufType, List<double> vertices);

  Buffer fromIntList(int bufType, List<int> vertices);
}

class WebGLBufferBuilder implements BufferBuilder {

  WebGL.RenderingContext _gl;

  WebGLBufferBuilder(WebGL.RenderingContext this._gl);

  Buffer fromDoubleList(int bufType, List<double> vertices) {
    return new WebGLBuffer.fromDoubleList(this._gl, bufType, vertices);
  }

  Buffer fromIntList(int bufType, List<int> vertices) {
    return new WebGLBuffer.fromIntList(this._gl, bufType, vertices);
  }
}

class TestBufferBuilder implements BufferBuilder {

  TestBufferBuilder();

  Buffer fromDoubleList(int bufType, List<double> vertices) {
    return new TestDoubleBuffer(bufType, vertices);
  }

  Buffer fromIntList(int bufType, List<int> vertices) {
    return new TestIntBuffer(bufType, vertices);
  }
}
