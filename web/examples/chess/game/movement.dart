part of game;

class Movement {
  
  final String description;

  final Location source;

  final Location destination;

  final Location otherSource;

  final Location otherDestination;

  Movement(String this.description, Location this.source, Location this.destination,
    [Location this.otherSource = null, Location this.otherDestination = null]);

  String toString() {
    String other = "";
    if (this.otherSource != null)
      other = ", ${this.otherSource} => ${this.otherDestination}";
    return "${this.description} ${this.source} => ${this.destination}$other";
  }
}
