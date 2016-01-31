part of ThreeDart.Movers;

/// A mover which groups several movers.
class Group extends Mover {

  /// The list of movers.
  List<Mover> _movers;

  /// Creates a new group of movers.
  Group() {
    this._movers = new List<Mover>();
  }

  /// The list of movers in the group.
  List<Mover> get list => this._movers;

  /// Adds a new mover to this group.
  void add(Mover mover) {
    this._movers.add(mover);
  }

  /// Updates all of the contained movers then multiply thier results in order.
  ///
  /// This updates with the given [state] and the [obj] this mover is attached to.
  Math.Matrix4 update(Core.RenderState state, Movable obj) {
    Math.Matrix4 mat = null;
    for (Mover mover in this._movers) {
      if (mover != null) {
        Math.Matrix4 next = mover.update(state, obj);
        if (next != null) {
          if (mat == null) {
            mat = next;
          } else {
            mat = mat*next;
          }
        }
      }
    }
    if (mat == null) {
      mat = new Math.Matrix4.identity();
    }
    return mat;
  }
}
