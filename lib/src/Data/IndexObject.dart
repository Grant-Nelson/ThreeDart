part of ThreeDart.Data;

class IndexObject {
  int _type;
  int _count;
  WebGL.Buffer _buffer;

  IndexObject(this._type, this._count, this._buffer);

  factory IndexObject.pack(WebGL.RenderingContext gl, int type, List<int> indices) {
    WebGL.Buffer buffer = gl.createBuffer();
    gl.bindBuffer(WebGL.ELEMENT_ARRAY_BUFFER, buffer);
    gl.bufferData(WebGL.ELEMENT_ARRAY_BUFFER, new Typed.Int16List.fromList(indices), WebGL.STATIC_DRAW);
    gl.bindBuffer(WebGL.ELEMENT_ARRAY_BUFFER, null);
    return new IndexObject(type, indices.length, buffer);
  }

  int get type => _type;
  int get count => _count;
  WebGL.Buffer get buffer => _buffer;
}
