part of ThreeDart.Core;

/// The event argument for event's with information about entities changing.
class EntityEventArgs extends Events.EventArgs {

  /// The list of entities which have been changed.
  /// Typically this will be entities added or removed.
  final List<Entity> entities;

  /// Creates an entity event argument.
  EntityEventArgs(Object sender, this.entities):
    super(sender);
}
