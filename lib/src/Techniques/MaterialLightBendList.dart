part of ThreeDart.Techniques;

/// A collection of matrices for describing the bending of a shape.
class MaterialLightBendList {

  /// The parent entity this collection belongs to.
  MaterialLight _owner;

  /// The list of all the children.
  List<Math.Matrix4> _mats;

  /// Constructs a new bend matrix collection for the given parent [_owner].
  MaterialLightBendList._(this._owner) {
    this._mats = new List<Math.Matrix4>();
  }

  /// Called when the list changes length.
  void _onChangedLength() {
    this._owner._resetShader();
  }

  /// Adds the given [entity] to this collection.
  void add(Math.Matrix4 matrix) {
    this._mats.add(matrix);
    this._onChangedLength();
  }

  /// Adds the given [matices] to this collection.
  void addAll(Iterable<Math.Matrix4> matices) {
    this._mats.addAll(matices);
    this._onChangedLength();
  }

  /// Removes all the children.
  /// This will not emit the child removed
  void clear() {
    if (this._mats.length > 0) {
      this._mats = new List<Math.Matrix4>();
      this._onChangedLength();
    }
  }

  /// Determines if the collection is empty.
  bool get isEmpty => this._mats.isEmpty;

  /// The number of metrices in the collection.
  int get length => this._mats.length;

  /// Gets or sets the matrix at the given [index].
  Math.Matrix4 operator[](int index) => this._mats[index];
  operator[]=(int index, Math.Matrix4 mat) => this._mats[index] = mat;

  /// Calls the given function handler, [funcHndl], foreach matrix.
  void forEach(void funcHndl(Math.Matrix4 entity)) => this._mats.forEach(funcHndl);

  /// Removes the matrix at the given [index] in this collection.
  /// The removed matrix is returned.
  Math.Matrix4 removeAt(int index) {
    Math.Matrix4 entity = this._mats.removeAt(index);
    this._onChangedLength();
    return entity;
  }
}
