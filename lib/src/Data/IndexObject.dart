part of ThreeDart.Data;

  /// The indices for the order of vertex rendering and type of resterization.
class IndexObject {

  /// The type of rasterization to use.
  final int _type;

  /// The number of indices in the buffer.
  final int _count;

  /// The buffer of indices for a shape.
  final Buffer _buffer;

  /// Creates an index object for a shape.
  ///
  /// [_type] is the type of rasterization to use.
  /// [_count] is the number of indices in the buffer.
  /// [_buffer] is the buffer of indices for a shape.
  IndexObject(this._type, this._count, this._buffer);

  /// The type of rasterization to use.
  int get type => this._type;

  /// The number of indices in the buffer.
  int get count => this._count;

  /// The buffer of indices for a shape.
  Buffer get buffer => this._buffer;

  /// Gets the string for this index Entity.
  String toString() {
    return "Type: ${this._type}, Count: ${this._count}, [${this.buffer.toString()}]";
  }
}
