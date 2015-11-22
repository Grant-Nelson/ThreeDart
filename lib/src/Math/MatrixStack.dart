part of ThreeDart.Math;

/// A stack of matrix 4x4s.
class Matrix4Stack {

  /// The list storing the stack.
  List<Matrix4> _mat;

  /// Creates a new matrix stack.
  Matrix4Stack() {
    this._mat = new List<Matrix4>();
  }

  /// Clears the stack.
  void clear() {
    this._mat.clear();
  }

  /// The length of the stack.
  int get length => this._mat.length;

  /// The current matrix on the top of the stack.
  ///
  /// Returns the identity matrix if the stack is empty.
  Matrix4 get matrix {
    if (this._mat.length > 0) return this._mat.last;
    else return new Matrix4.identity();
  }

  /// Pushes a new matrix onto the stack.
  ///
  /// If null is pushed the identity matrix will be put on the top of the stack.
  void push(Matrix4 mat) {
    if (mat == null) {
      this._mat.add(new Matrix4.identity());
    } else {
      this._mat.add(mat);
    }
  }

  /// Pushes a new matrix onto the stack which is the multiple of this and the given [mat].
  ///
  /// If null is pushed the current top of the stack will be pushed on the top
  /// of the stack as if multiplies by the identity.
  void pushMul(Matrix4 mat) {
    if (mat == null) {
      this._mat.add(this.matrix);
    } else {
      this._mat.add(this.matrix*mat);
    }
  }

  /// Pops the top matrix from the stack.
  void pop() {
    if (this._mat.length > 0) {
      this._mat.removeLast();
    }
  }
}
