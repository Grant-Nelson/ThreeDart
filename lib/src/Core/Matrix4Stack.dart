part of ThreeDart.Core;

/// A stack of matrix 4x4s.
class Matrix4Stack implements Changable {

  /// The list storing the stack.
  List<Math.Matrix4> _mat;

  /// The event indicating the stack has changed.
  Event _changed;

  /// Creates a new matrix stack.
  Matrix4Stack() {
    this._mat = new List<Math.Matrix4>();
    this._changed = null;
  }

  /// Clears the stack.
  void clear() {
    this._mat.clear();
    this._onChanged();
  }

  /// The length of the stack.
  int get length => this._mat.length;

  /// The event emitted when the stack has changed.
  Event get changed {
    this._changed ??= new Event();
    return this._changed;
  }

  /// Handles changes to the stack.
  void _onChanged([EventArgs args = null]) {
    this._changed?.emit(args);
  }

  /// The current matrix on the top of the stack.
  /// Returns the identity matrix if the stack is empty.
  Math.Matrix4 get matrix {
    if (this._mat.length > 0) return this._mat.last;
    else return new Math.Matrix4.identity();
  }

  /// Pushes a new matrix onto the stack.
  /// If null is pushed the identity matrix will be put on the top of the stack.
  void push(Math.Matrix4 mat) {
    if (mat == null) {
      this._mat.add(new Math.Matrix4.identity());
    } else {
      this._mat.add(mat);
    }
    this._onChanged();
  }

  /// Pushes a new matrix onto the stack which is the multiple of this and the given [mat].
  /// If null is pushed the current top of the stack will be pushed on the top
  /// of the stack as if multiplies by the identity.
  void pushMul(Math.Matrix4 mat) {
    if (mat == null) {
      this._mat.add(this.matrix);
    } else {
      this._mat.add(mat * this.matrix);
    }
    this._onChanged();
  }

  /// Pops the top matrix from the stack.
  void pop() {
    if (this._mat.length > 0) {
      this._mat.removeLast();
      this._onChanged();
    }
  }
}
