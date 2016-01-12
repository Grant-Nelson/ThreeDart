part of ThreeDart.Core;

enum ChangedEventType {
  Added,
  Modified,
  Removed
}

class ChangedEventArgs implements EventArgs {

  Map<Object, ChangedEventType> _changes;

  ChangedEventArgs() {
    this._changes = new Map<Object, ChangedEventType>();
  }

  factory ChangedEventArgs.added(Object obj) {
    return new ChangedEventArgs()..include(obj, ChangedEventType.Added);
  }

  factory ChangedEventArgs.modified(Object obj) {
    return new ChangedEventArgs()..include(obj, ChangedEventType.Modified);
  }

  factory ChangedEventArgs.removed(Object obj) {
    return new ChangedEventArgs()..include(obj, ChangedEventType.Removed);
  }

  Map<Object, ChangedEventType> get changes => this._changes;

  void include(Object obj, ChangedEventType type) {
    if (this._changes.containsKey(obj)) {
      ChangedEventType oldType = this._changes[obj];
      if (oldType == ChangedEventType.Added) {
        if (type == ChangedEventType.Removed) this._changes.remove(obj);
        // else type == Added or Changed, no change
      } else if (oldType == ChangedEventType.Modified) {
        if (type != ChangedEventType.Modified) this._changes[obj] = type;
        // else type == Changed, no change
      } else { // oldtype == Removed
        if (type == ChangedEventType.Added) this._changes.remove(obj);
        // else type == Removed or Changed, no change
      }
    } else this._changes[obj] = type;
  }

  void merge(EventArgs args) {
    if (args is ChangedEventArgs) args._changes.forEach(this.include);
  }
}
