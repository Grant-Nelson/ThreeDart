part of ThreeDart.Data;

  /// The indices for the order of vertex rendering and type of resterization.
class IndexObject {

  /// The type of rasterization to use.
  final int type;

  /// The number of indices in the buffer.
  final int count;

  /// The buffer of indices for a shape.
  final Buffer buffer;

  /// Creates an index object for a shape.
  /// [type] is the type of rasterization to use.
  /// [count] is the number of indices in the buffer.
  /// [buffer] is the buffer of indices for a shape.
  IndexObject(this.type, this.count, this.buffer);

  /// Gets the string for this index Entity.
  String toString() {
    return "Type: ${this.type}, Count: ${this.count}, [${this.buffer.toString()}]";
  }
}
