part of ThreeDart.Events;

/// The event argument for event's when items are added to a collection.
class ItemsAddedEventArgs<T> extends EventArgs {

  /// The index that the items were inserted at.
  final int index;

  /// The list of items which were added.
  final Iterable<T> added;

  /// Creates an items added event argument.
  ItemsAddedEventArgs(Object sender, this.index, this.added):
    super(sender);
}
