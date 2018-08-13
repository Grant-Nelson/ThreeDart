part of ThreeDart.Input;

/// The key event arguments for events from the keyboard.
class KeyEventArgs extends Events.EventArgs {

  /// The key which was pressed or released.
  final Key key;

  /// Creates a new key event argument.
  KeyEventArgs(Object sender, Key this.key):
    super(sender);
}
