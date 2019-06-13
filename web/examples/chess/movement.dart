part of chess;

class Movement {
  
  final String description;

  final Location source;

  final Location opponent;

  final Location destination;

  Movement(String this.description, Location this.source, Location this.opponent, Location this.destination);
}