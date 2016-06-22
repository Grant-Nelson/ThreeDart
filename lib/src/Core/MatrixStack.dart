part of ThreeDart.Core;

/// A stack of matrix 4x4s.
class Matrix4Stack {

  /// The list storing the stack.
  List<Math.Matrix4> _mat;

  /// The event indicating the stack has changed.
  Event _onChanged;

  /// Creates a new matrix stack.
  Matrix4Stack() {
    this._mat = new List<Math.Matrix4>();
    this._onChanged = new Event();
  }

  /// Clears the stack.
  void clear() {
    this._mat.clear();
    this._onChanged.emit();
  }

  /// The length of the stack.
  int get length => this._mat.length;

  /// The event indicating the stack has changed.
  Event get onChanged => this._onChanged;

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
    this._onChanged.emit();
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
    this._onChanged.emit();
  }

  /// Pops the top matrix from the stack.
  void pop() {
    if (this._mat.length > 0) {
      this._mat.removeLast();
      this._onChanged.emit();
    }
  }
}
