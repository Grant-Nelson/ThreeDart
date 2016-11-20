part of ThreeDart.Movers;

/// A mover which groups several movers.
class Group extends Mover {
  List<Mover> _movers;
  Core.Event _changed;

  /// Creates a new group of movers.
  Group([List<Mover> movers = null]) {
    this._movers = new List<Mover>();
    if (movers != null) this.addAll(movers);
    this._changed = new Core.Event();
  }

  /// Handles a child mover being changed.
  void _onChildChanged(Core.EventArgs args) {
    this._changed.emit(args);
  }

  /// Starts watching for changes in the given [mover].
  void _startWatch(Mover mover) {
    if (mover != null) mover.changed.add(this._onChildChanged);
  }

  /// Stops watching for changes in the given [mover].
  void _stopWatch(Mover mover) {
    if (mover != null) mover.changed.remove(this._onChildChanged);
  }

  /// Adds a new mover to this group.
  void add(Mover mover) {
    this._movers.add(mover);
    this._startWatch(mover);
    this._changed.emit();
  }

  /// Adds a new mover to this group.
  void addAll(Iterable<Mover> movers) {
    for (Mover mover in movers) {
      this._movers.add(mover);
      this._startWatch(mover);
    }
    this._changed.emit();
  }

  /// Removed a mover from this group.
  void remove(Mover mover) {
    this._stopWatch(mover);
    this._movers.remove(mover);
    this._changed.emit();
  }

  /// Removes the mover with at the given index.
  /// The removed mover is returned or null if none removed.
  Mover removeAt(int index) {
    Mover mover = this._movers.removeAt(index);
    this._stopWatch(mover);
    this._changed.emit();
    return mover;
  }

  /// Determines if this group contains any movers or not.
  bool get isEmpty => this._movers.isEmpty;

  /// The number of movers in this group.
  int get length => this._movers.length;

  /// Gets the mover at the at given index.
  Mover operator[](int index) => this._movers[index];

  /// Gets the mover at the at given index.
  void operator[]=(int index, Mover mover) {
    Mover older = this._movers[index];
    this._stopWatch(older);
    this._startWatch(mover);
    this._movers[index] = mover;
    this._changed.emit();
  }

  /// Gets the index of the given [mover] or -1 if not found.
  int indexOf(Mover mover) => this._movers.indexOf(mover);

  /// Runs the given function handler for every line in this group.
  void forEach(void funcHndl(Mover mover)) => this._movers.forEach(funcHndl);

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
