part of ThreeDart.Data;

  /// The indices for the order of vertex rendering and type of resterization.
class IndexObject {

  /// The type of rasterization to use.
  int _type;

  /// The number of indices in the buffer.
  int _count;

  /// The buffer of indices for a shape.
  WebGL.Buffer _buffer;

  /// Creates an index object for a shape.
  ///
  /// [_type] is the type of rasterization to use.
  /// [_count] is the number of indices in the buffer.
  /// [_buffer] is the buffer of indices for a shape.
  IndexObject(this._type, this._count, this._buffer);

  /// Creates an index object for a shape from a raw list of indices.
  ///
  /// [gl] is the rendering context to create the index object for.
  /// [type] is the type of rasterization to use.
  /// [indices] is the list of indices to fill the index buffer with.
  factory IndexObject.pack(WebGL.RenderingContext gl, int type, List<int> indices) {
    WebGL.Buffer buffer = gl.createBuffer();
    gl.bindBuffer(WebGL.ELEMENT_ARRAY_BUFFER, buffer);
    gl.bufferData(WebGL.ELEMENT_ARRAY_BUFFER, new Typed.Int16List.fromList(indices), WebGL.STATIC_DRAW);
    gl.bindBuffer(WebGL.ELEMENT_ARRAY_BUFFER, null);
    return new IndexObject(type, indices.length, buffer);
  }

  /// The type of rasterization to use.
  int get type => _type;
  
  /// The number of indices in the buffer.
  int get count => _count;

  /// The buffer of indices for a shape.
  WebGL.Buffer get buffer => _buffer;
}
