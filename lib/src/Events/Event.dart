part of ThreeDart.Events;

/// The collection of handles which can be called when some action has occurred.
///
/// This is similar to an [async.Stream] except it is lighter weight and
/// allows event handlers to be fired synchronized in a specific order.
class Event {

  /// The list of the event handlers to call when this event is emitted.
  List<EventHandler> _hndls;

  /// The list of the event handlers to call only once when this event is emitted.
  List<EventHandler> _onceHndls;

  /// The pending argument from the first emit while the event is suspended.
  EventArgs _pendingArgs;

  /// Indicates if the event is suspended or not.
  int _suspended;

  /// Constructs a new event.
  Event() {
    this._hndls = null;
    this._onceHndls = null;
    this._pendingArgs = null;
    this._suspended = 0;
  }

  /// Indicates that there are no handlers attached to this events.
  bool get isEmpty => (this._hndls?.isEmpty ?? true) && (this._onceHndls?.isEmpty ?? true);

  /// Adds a new event handler to be called by this event when an action has occurred.
  void add(EventHandler hndl) {
    this._hndls ??= new List<EventHandler>();
    this._hndls.add(hndl);
  }

  /// Adds a new event handler to be called by this event when an action has occurred.
  /// This event is only called once and then removed.
  void once(EventHandler hndl) {
    this._onceHndls ??= new List<EventHandler>();
    this._onceHndls.add(hndl);
  }

  /// Removes the first instance of the event handler from this event.
  /// True is returned if the handler is found, false if not found.
  bool remove(EventHandler hndl) {
    bool removed = false;
    if (this._hndls?.contains(hndl) ?? false) {
      removed = this._hndls.remove(hndl) || removed;
    }
    if (this._onceHndls?.contains(hndl) ?? false) {
      removed = this._onceHndls.remove(hndl) || removed;
    }
    return removed;
  }

  /// Emits this event to all the attached event handlers.
  ///
  /// The [args] will be submitted to each event handler.
  /// The event will not be emitted if it is currently suspended.
  /// The method will return after all event handlers has returned.
  /// Returns true if any handler could be emitted even if suspended, false if empty.
  bool emit([EventArgs args = null]) {
    if (this.isEmpty) return false;

    args ??= new EventArgs(null);
    if (this.suspended) {
      if (!this.pending) this._pendingArgs = args;
      return true;
    }

    this._hndls?.forEach((EventHandler hndl) {
      if (args.propagate) hndl(args);
    });

    this._onceHndls?.forEach((EventHandler hndl) {
      if (args.propagate) hndl(args);
    });
    this._onceHndls?.clear();
    return true;
  }

  /// Puts a future into the main event loop to emit this event.
  ///
  /// The [args] will be submitted to each event handler.
  /// This is not effected by the suspended flag.
  /// The future is returned.
  async.Future asyncEmit([EventArgs args = null]) {
    return new async.Future(() { this.emit(args); });
  }

  /// Suspends this event or increases the level of suspension.
  void suspend() {
    this._suspended++;
  }

  /// True if this event is suspended, false otherwise.
  bool get suspended => this._suspended > 0;

  /// True if an emit was called while suspended and that emit is pending.
  bool get pending => this._pendingArgs != null;

  /// The arguments of the first emit called while suspended.
  ///
  /// The pending argument is used once the event is resumed.
  EventArgs get pendingArgs => this._pendingArgs;
  void set pendingArgs(EventArgs args) { this._pendingArgs = args; }

  /// Resumes the event or removes a level of suspension.
  ///
  /// If an argument is pending and [emitPending] is true then
  /// the event is emitted with that pending argument.
  /// If [force] is set to true then the level of suspension is
  /// ignored an the event is immediately set to no longer suspended.
  void resume({bool force: false, bool emitPending: true}) {
    if (this.suspended) {
      if (force) {
        this._suspended = 0;
      } else {
        this._suspended--;
      }
      if ((!this.suspended) && emitPending && pending) {
        EventArgs args = this._pendingArgs;
        this._pendingArgs = null;
        this.emit(args);
      }
    }
  }
}
