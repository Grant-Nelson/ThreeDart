part of ThreeDart.Input;

/// The interface for an object which can attach to the 3Dart user input.
abstract class Interactable {

  /// Attaches this object onto the given [UserInput].
  /// Returns true if this object is attached, false otherwise.
  bool attach(UserInput input);

  /// Detaches this object from it's attached [UserInput].
  void detach();
}
