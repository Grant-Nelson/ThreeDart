part of ThreeDart.Movers;

/// The interface for an object which can be moved.
abstract class Movable {

  /// The mover to mover this object.
  Mover? get mover;
  set mover(Mover? mover);
}
