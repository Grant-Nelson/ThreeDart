part of ThreeDart.Shaders;

/// The vertex attribute of a shader.
class Attribute {

  /// The rendering context for the shader.
  final WebGL.RenderingContext2 _gl;

  /// The name of the attribute in the shader code.
  final String name;

  /// The attribute's code location in the shader.
  final int loc;

  /// Creates a new shader attribute.
  Attribute._(this._gl, this.name, this.loc);

  /// Enables this attribute in the rendering context.
  void enable() => this._gl.enableVertexAttribArray(this.loc);

  /// Disables this attribute from the rendering context.
  void disable() => this._gl.disableVertexAttribArray(this.loc);
}

/// The container for several shader attributes.
class AttributeContainer {

  /// The attributes being contained.
  List<Attribute> _attrs;

  /// Creates a new attribute container.
  /// [_attrs] is the complete list of attributes for a single shader.
  AttributeContainer._(this._attrs);

  /// The number of attributes in the container.
  int get count => this._attrs.length;

  /// Gets the attribute at [i].
  Attribute? at(int i) => this._attrs[i];

  /// Gets the attribute with the given [name].
  Attribute? operator [](String name) {
    for (Attribute attr in this._attrs) {
        if(attr.name == name) return attr;
    }
    return null;
  }

  /// Gets the index of an attribute for the given [name].
  int indexOf(String name) {
    for (int i = this._attrs.length - 1; i >= 0; --i) {
        if (this._attrs[i].name == name) return i;
    }
    return -1;
  }

  /// Indicates if an attribute for the given [name] exists.
  bool contains(String name) {
    for (Attribute attr in this._attrs) {
        if(attr.name == name) return true;
    }
    return false;
  }

  /// Enables all the shader attributes.
  void enableAll() {
    for (Attribute attr in this._attrs) attr.enable();
  }

  /// Disables all the shader attributes.
  void disableAll() {
    for (Attribute attr in this._attrs) attr.disable();
  }
}
