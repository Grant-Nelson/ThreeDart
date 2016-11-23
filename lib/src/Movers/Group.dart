part of ThreeDart.Movers;

/// A mover which groups several movers.
class Group extends Core.Collection<Mover> implements Mover {
  Core.Event _changed;

  /// Creates a new group of movers.
  Group([List<Mover> movers = null]) {
    if (movers != null) this.addAll(movers);
    this._changed = new Core.Event();
  }

  /// Handles a child mover being changed.
  void _onChildChanged(Core.EventArgs args) {
    this._changed.emit(args);
  }

  /// Is called when one or more items are added to this collection.
  ///
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onAdded(int index, Iterable<Mover> added) {
    for (Mover mover in added) {
      if (mover != null) mover.changed.add(this._onChildChanged);
    }
  }

  /// Is called when one or more items are removed from this collection.
  ///
  /// This isn't meant to be called from outside the entity, in other languages this would
  /// be a protected method. This method is exposed to that the entity is extended and
  /// these methods can be overwritten. If overwritten call this super method to still emit events.
  void onRemoved(int index, Iterable<Mover> removed) {
    for (Mover mover in removed) {
      if (mover != null) mover.changed.remove(this._onChildChanged);
    }
  }

  /// Emits when the mover has changed.
  Core.Event get changed => this._changed;

  /// Updates all of the contained movers then multiply their results in order.
  ///
  /// This updates with the given [state] and the [obj] this mover is attached to.
  Math.Matrix4 update(Core.RenderState state, Movable obj) {
    this._changed.suspend();
    Math.Matrix4 mat = null;
    for (Mover mover in this._movers) {
      if (mover != null) {
        Math.Matrix4 next = mover.update(state, obj);
        if (next != null) {
          if (mat == null) {
            mat = next;
          } else {
            mat = next*mat;
          }
        }
      }
    }
    if (mat == null) {
      mat = new Math.Matrix4.identity();
    }
    this._changed.resume();
    return mat;
  }

  /// Determines if the given [other] variable is a [Group] equal to this one.
  bool operator ==(var other) {
    if (identical(this, other)) return true;
    if (other is! Group) return false;
    Group grp = other as Group;
    int length = this._movers.length;
    for (int i = 0; i < length; ++i) {
      if (this._movers[i] != grp._movers[i]) return false;
    }
    return true;
  }

  /// The string for this constant mover.
  String toString([int fraction = 3, int whole = 0]) {
    return "Group";
  }
}
