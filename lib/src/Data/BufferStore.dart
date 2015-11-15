part of ThreeDart.Data;

class BufferStore extends Core.Bindable {

  WebGL.Buffer _vertexBuf;
  List<IndexObject> _indexObjs;
  List<BufferAttr> _attrs;

  BufferStore(this._vertexBuf, this._attrs) {
    this._indexObjs = new List<IndexObject>();
  }

  List<BufferAttr> get attributes => this._attrs;
  List<IndexObject> get indexObjects => this._indexObjs;

  void bind(Core.RenderState state) {
    state.gl.bindBuffer(WebGL.ARRAY_BUFFER, this._vertexBuf);
    for (int i = this._attrs.length - 1; i >= 0; i--) {
      this._attrs[i].bind(state);
    }
  }

  void unbind(Core.RenderState state) {
    for (int i = this._attrs.length - 1; i >= 0; i--) {
      this._attrs[i].unbind(state);
    }
    state.gl.bindBuffer(WebGL.ARRAY_BUFFER, null);
  }

  void draw(Core.RenderState state) {
    int objCount = this._indexObjs.length;
    for (int i = 0; i < objCount; i++) {
      IndexObject indexObj = this._indexObjs[i];
      state.gl.bindBuffer(WebGL.ELEMENT_ARRAY_BUFFER, indexObj.buffer);
      state.gl.drawElements(indexObj.type, indexObj.count, WebGL.UNSIGNED_SHORT, 0);
    }
  }
}
