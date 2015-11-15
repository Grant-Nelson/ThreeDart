part of ThreeDart.Shaders;

class Attribute {
  final WebGL.RenderingContext _gl;
  final String name;
  final int loc;

  Attribute(this._gl, this.name, this.loc);

  void enable() =>
      this._gl.enableVertexAttribArray(this.loc);

  void disable() =>
      this._gl.disableVertexAttribArray(this.loc);
}

class AttributeContainer {
  List<Attribute> _attrs;

  AttributeContainer(this._attrs);

  int get count =>
    this._attrs.length;

  Attribute at(int i) =>
      this._attrs[i];

  Attribute operator [](String name) {
    for (Attribute attr in this._attrs) {
        if(attr.name == name) return attr;
    }
    return null;
  }

  int indexOf(String name) {
      for (int i = this._attrs.length - 1; i >= 0; --i) {
          if (this._attrs[i].name == name) return i;
      }
      return -1;
  }

  bool contains(String name) {
    for (Attribute attr in this._attrs) {
        if(attr.name == name) return true;
    }
    return false;
  }

  void enableAll() {
    for (Attribute attr in this._attrs) attr.enable();
  }

  void disableAll() {
    for (Attribute attr in this._attrs) attr.disable();
  }
}
