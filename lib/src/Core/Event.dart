part of ThreeDart.Core;

typedef void EventHandler(Object sender, EventArgs args);

class EventArgs {
  EventArgs();
  void merge(EventArgs args) { }
}

class Event {

  Object _sender;
  List<EventHandler> _hndls;
  EventArgs _pendingArgs;
  int _suspended;

  Event(Object this._sender) {
    this._hndls = new List<EventHandler>();
    this._pendingArgs = null;
    this._suspended = 0;
  }

  void add(EventHandler hndl) {
    this._hndls.add(hndl);
  }

  bool remove(EventHandler hndl) {
    return this._hndls.remove(hndl);
  }

  void emitNow([EventArgs args = null]) {
    if (args == null) args = new EventArgs();
    this._hndls.forEach((EventHandler hndl) {
      hndl(this._sender, args);
    });
  }

  void emit([EventArgs args = null]) {
    if (args == null) args = new EventArgs();
    if (this.suspended) {
      if (this.pending) this._pendingArgs.merge(args);
      else this._pendingArgs = args;
    } else {
      this.emitNow(args);
    }
  }

  /// @note  Is not effected by the suspended flag.
  void asyncEmit([EventArgs args = null]) {
    new async.Future(() { this.emit(args); });
  }

  void suspend() {
    this._suspended++;
  }

  bool get suspended => this._suspended > 0;
  bool get pending => this._pendingArgs != null;
  EventArgs get pendingArgs => this._pendingArgs;
  void set pendingArgs(EventArgs args) { this._pendingArgs = args; }

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
