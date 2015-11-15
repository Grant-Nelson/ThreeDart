part of ThreeDart.Data;

class BufferAttr extends Core.Bindable {

  final VertexType _type;
  final int _size;
  final int _offset;
  final int _stride;
  int _attr;

  BufferAttr(this._type, this._size, this._offset, this._stride, [this._attr = 0]);

  VertexType get type => _type;
  int get attr => _attr;
  set attr(int value) => _attr = value;

  void bind(Core.RenderState state) {
    state.gl.enableVertexAttribArray(this._attr);
    state.gl.vertexAttribPointer(this._attr, this._size, WebGL.FLOAT, false, this._stride, this._offset);
  }

  void unbind(Core.RenderState state) {
    state.gl.disableVertexAttribArray(this._attr);
  }
}
