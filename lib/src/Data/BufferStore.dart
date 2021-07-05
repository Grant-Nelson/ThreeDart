part of ThreeDart.Data;

/// A storage for a shapes with the components required for a specific technique.
class BufferStore implements Core.Bindable, TechniqueCache {

  /// The buffer storing all the vertex data for the shape.
  Buffer _vertexBuf;

  /// The list of indices for the order of vertex rendering and type of rasterization.
  List<IndexObject> _indexObjs;

  /// The list of buffer attributes describing the type of vertices in the buffer.
  List<BufferAttr> _attrs;

  /// The vertex type stored in these buffers.
  VertexType _vertexType;

  /// Creates a new buffer store.
  BufferStore(this._vertexBuf, this._attrs, this._vertexType):
    this._indexObjs = [];

  /// The list of buffer attributes describing the type of vertices in the buffer.
  List<BufferAttr> get attributes => this._attrs;

  /// The list of indices for the order of vertex rendering and type of rasterization.
  List<IndexObject> get indexObjects => this._indexObjs;

  /// The vertex type stored in these buffers.
  VertexType get vertexType => this._vertexType;

  /// Finds the attribute which has the given type.
  BufferAttr? findAttribute(VertexType type) {
    for (BufferAttr attr in this._attrs) {
      if (attr._type.has(type)) return attr;
    }
    return null;
  }

  /// Binds the buffer to prepare for rendering.
  void bind(Core.RenderState state) {
    this._vertexBuf.bind(state);
    for (int i = this._attrs.length - 1; i >= 0; i--) {
      this._attrs[i].bind(state);
    }
  }

  /// Unbinds the buffer when done rendering.
  void unbind(Core.RenderState state) {
    for (int i = this._attrs.length - 1; i >= 0; i--) {
      this._attrs[i].unbind(state);
    }
    this._vertexBuf.unbind(state);
  }

  /// Renders the buffer with the current technique.
  ///
  /// The buffer must be bound to the state first.
  void render(Core.RenderState state) {
    int objCount = this._indexObjs.length;
    for (int i = 0; i < objCount; i++) {
      IndexObject indexObj = this._indexObjs[i];
      indexObj.buffer.bind(state);
      state.gl.drawElements(indexObj.type, indexObj.count, WebGL.WebGL.UNSIGNED_SHORT, 0);
      indexObj.buffer.unbind(state);
    }
  }

  /// Binds the buffers, renders, then unbinds with the given state.
  void oneRender(Core.RenderState state) {
    this.bind(state);
    this.render(state);
    this.unbind(state);
  }

  /// Gets the string for this buffer store.
  String toString() {
    List<String> indexStr = [];
    for (IndexObject obj in this._indexObjs) {
      indexStr.add(obj.toString());
    }
    List<String> attrStr = [];
    for (BufferAttr attr in this._attrs) {
      attrStr.add(attr.toString());
    }
    return "Buffer:  [${this._vertexBuf}]\nIndices: ${indexStr.join(", ")}\nAttrs:   ${attrStr.join(", ")}";
  }
}
