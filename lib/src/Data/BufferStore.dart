part of ThreeDart.Data;

/// A storage for a shapes with the components required for a specific technique.
class BufferStore implements Core.Bindable, Core.Renderable, TechniqueCache {

  /// The buffer storing all the vertex data for the shape.
  WebGL.Buffer _vertexBuf;

  /// The list of indices for the order of vertex rendering and type of resterization.
  List<IndexObject> _indexObjs;

  /// The list of buffer attributes describing the type of vertices in the buffer.
  List<BufferAttr> _attrs;

  /// Creates a new buffer store.
  BufferStore(this._vertexBuf, this._attrs) {
    this._indexObjs = new List<IndexObject>();
  }

    /// The list of buffer attributes describing the type of vertices in the buffer.
  List<BufferAttr> get attributes => this._attrs;

  /// The list of indices for the order of vertex rendering and type of resterization.
  List<IndexObject> get indexObjects => this._indexObjs;

  /// Binds the buffer to prepare for rendering.
  void bind(Core.RenderState state) {
    state.gl.bindBuffer(WebGL.ARRAY_BUFFER, this._vertexBuf);
    for (int i = this._attrs.length - 1; i >= 0; i--) {
      this._attrs[i].bind(state);
    }
  }

  /// Unbinds the buffer when done rendering.
  void unbind(Core.RenderState state) {
    for (int i = this._attrs.length - 1; i >= 0; i--) {
      this._attrs[i].unbind(state);
    }
    state.gl.bindBuffer(WebGL.ARRAY_BUFFER, null);
  }

  /// Renders the buffer with the current technique.
  ///
  /// The buffer must be bound to the state first.
  void render(Core.RenderState state) {
    int objCount = this._indexObjs.length;
    for (int i = 0; i < objCount; i++) {
      IndexObject indexObj = this._indexObjs[i];
      state.gl.bindBuffer(WebGL.ELEMENT_ARRAY_BUFFER, indexObj.buffer);
      state.gl.drawElements(indexObj.type, indexObj.count, WebGL.UNSIGNED_SHORT, 0);
    }
  }
}
