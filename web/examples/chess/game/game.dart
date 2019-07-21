library game;

import 'package:ThreeDart/Events.dart' as Events;

import '../graphics/graphics.dart';

part 'location.dart';
part 'movement.dart';
part 'state.dart';
part 'stringGrid.dart';
part 'tileValue.dart';

typedef MovementCallback = void Function(Movement move);

class Game {

  bool _whiteTurn;
  int _condition;
  State _state;
  Events.Event _changed;

  Game() {
    this._whiteTurn = true;
    this._condition = State.None;
    this._state     = new State.initial();
    this._changed   = null;
  }

  bool get whiteTurn => this._whiteTurn;
  int get condition => this._condition;
  State get state => this._state;
  bool get hasUndo => this._state.prev != null;
  bool get hasRedo => this._state.next != null;

  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }
  
  void _onChanged([Events.EventArgs args = null]) =>
    this._changed?.emit(args);

  TileValue getValue(Location loc) =>
    this._state.getValue(loc);

  Location findItem(TileValue item) =>
    this._state.findItem(item);

  List<Movement> getAllMovements() =>
    this._state.getAllMovements(this._whiteTurn);

  List<Movement> getMovements(TileValue piece) {
    if (piece.outOfBounds)
      throw new Exception("may not get movements for an out-of-bounds piece");
    if (piece.white != this._whiteTurn)
      throw new Exception("may not get movements out-of-turn");
    return this._state.getMovementsForPiece(piece);
  }

  void makeMove(Movement move) {
    TileValue piece = this._state.getValue(move.source);
    if (piece.white != this._whiteTurn)
      throw new Exception("may not make a move movement out-of-turn");
    if (!this._state.isValidMovement(move))
      throw new Exception("not a valid move: "+move.toString());
      
    print(">> perform move: $move");
    this._state = this._state.pushState();
    this._state.applyMovement(move);
    this._whiteTurn = !this._whiteTurn;
    this._condition = this._state.condition(this.whiteTurn);
    this._onChanged();
  }

  void undo([int steps = 1]) {
    bool changed = false;
    for (int i = 0; i < steps; ++i) {
      State prev = this._state.prev;
      if (prev == null) break;

      changed = true;
      this._state = prev;
      this._whiteTurn = !this._whiteTurn;
    }
    if (changed) {
      this._condition = this._state.condition(this.whiteTurn);
      this._onChanged();
    }
  }

  void redo([int steps = 1]) {
    bool changed = false;
    for (int i = 0; i < steps; ++i) {
      State next = this._state.next;
      if (next == null) break;

      changed = true;
      this._state = next;
      this._whiteTurn = !this._whiteTurn;
    }
    if (changed) {
      this._condition = this._state.condition(this.whiteTurn);
      this._onChanged();
    }
  }
}