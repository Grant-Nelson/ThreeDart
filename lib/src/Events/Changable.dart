part of ThreeDart.Events;

/// The interface for a changable.
abstract class Changable {

  /// Emits when the object has changed.
  ///
  /// On change typically indicates a new render is needed.
  Event get changed;
}
