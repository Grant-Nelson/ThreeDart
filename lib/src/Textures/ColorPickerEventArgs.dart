part of ThreeDart.Textures;

/// The event argument for event's with information about entities changing.
class ColorPickerEventArgs extends Events.EventArgs {

  /// The location the color was picked from.
  final Math.Vector2 location;

  /// The color which was picked.
  final Math.Color4 color;

  /// Creates an entity event argument.
  ColorPickerEventArgs(Object sender, this.location, this.color):
    super(sender);

  /// The string for this event argument.
  String toString() => "ColorPicker: $location => $color";
}
