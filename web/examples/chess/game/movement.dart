part of game;

/// Defines a movement which can be performed on a chess board.
class Movement {

  /// A description of the move.
  final String description;

  /// The location of the piece which is about to be moved.
  final Location source;

  /// The location that the piece will be moved into.
  final Location destination;

  /// The location of another piece, typically an opponents but not always,
  /// which will be moved or removed during this movement.
  /// If this is null then no other piece is effected.
  final Location otherSource;

  /// The location the other piece will be moved into.
  /// If this is null then the other piece is being removed from the board.
  final Location otherDestination;

  /// Constructs a movement with the given information.
  Movement(String this.description, Location this.source, Location this.destination,
    [Location this.otherSource = null, Location this.otherDestination = null]);

  /// Gets a string for this movement.
  @override
  String toString() {
    String other = "";
    if (this.otherSource != null)
      other = ", ${this.otherSource} => ${this.otherDestination}";
    return "${this.description}, ${this.source} => ${this.destination}$other";
  }
}
