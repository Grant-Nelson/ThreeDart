part of ThreeDart.Events;

/// The event argument for event's with information about entities changing.
class ValueChangedEventArgs<T> extends EventArgs {

  /// The name of the value which was changed in the sender.
  final String name;

  /// The previous value (or null) of the value before it was changed.
  final T previous;

  /// The current value that the value was just changed to.
  final T value;

  /// Creates an entity event argument.
  ValueChangedEventArgs(Object sender, this.name, this.previous, this.value):
    super(sender);

  /// The string for this event argument.
  String toString() => "ValueChanged: $name, $previous => $value";
}
