part of ThreeDart.Data;

/// An attribute for a buffer to describe the contents in a buffer.
class BufferAttr extends Core.Bindable {

  /// The type of vertex being stored.
  final VertexType _type;

  /// The size in bytes of the vertex being stored.
  final int _size;

  /// The offset in bytes from the beginning of vertex to this type.
  final int _offset;

  /// The stride in bytes between this type of elements in the buffer.
  final int _stride;

  /// The shader attribute identifier.
  int _attr;

  /// Creates a new buffer attribute.
  ///
  /// [_type] is the type of vertex being stored.
  /// [_size] is the size in bytes of the vertex being stored.
  /// [_offset] is the offset in bytes from the beginning of vertex to this type.
  /// [_stride] is the stride in bytes between this type of elements in the buffer.
  /// [_attr] is the initial shader attribute identifier.
  BufferAttr(this._type, this._size, this._offset, this._stride, [this._attr = 0]);

  /// The type of vertex being stored.
  VertexType get type => _type;

  /// The shader attribute identifier.
  int get attr => _attr;
  set attr(int value) => _attr = value;

  /// Binds this attribute to the render state so that it may
  /// be used when rendering from it's assotiated buffer.
  void bind(Core.RenderState state) {
    state.gl.enableVertexAttribArray(this._attr);
    state.gl.vertexAttribPointer(this._attr, this._size, WebGL.FLOAT, false, this._stride, this._offset);
  }

  /// Unbinds this attribute from the render state.
  void unbind(Core.RenderState state) {
    state.gl.disableVertexAttribArray(this._attr);
  }
}
