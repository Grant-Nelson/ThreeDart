part of ThreeDart.Events;

/// The event argument for event's when items removed from a collection.
class ItemsRemovedEventArgs<T> extends EventArgs {

  /// The index that the items were taken from.
  final int index;

  /// The list of items which were removed.
  final Iterable<T> removed;

  /// Creates an items removed event argument.
  ItemsRemovedEventArgs(Object sender, this.index, this.removed):
    super(sender);
}
