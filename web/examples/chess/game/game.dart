library game;

import 'package:ThreeDart/Events.dart' as Events;

part 'location.dart';
part 'movement.dart';
part 'state.dart';
part 'stringGrid.dart';
part 'tileValue.dart';

/// This is a handler for returning possible movements for a piece.
typedef MovementCallback = void Function(Movement move);

/// The main controller for a chess game.
class Game {

  /// Indicates if it is (true) white's turn or (false) black's turn.
  bool _whiteTurn = true;

  /// The condition of the current state of the game.
  int _condition = State.Normal;

  /// The current board state of the game with potentially previous
  /// and future states for undo/redo.
  State _state = new State.initial();

  /// Indicates the game has changed state, condition, and/or turn.
  Events.Event? _changed = null;

  /// Creates a new chess game.
  Game();

  /// Indicates if it is (true) white's turn or (false) black's turn.
  bool get whiteTurn => this._whiteTurn;

  /// Gets the condition of the current state of the game.
  /// Check, Checkmate, Stalemate, or Normal.
  int get condition => this._condition;

  /// Gets the current board state.
  State get state => this._state;

  /// Indicates if there is any previous board state which can be undone to.
  bool get hasUndo => this._state.prev != null;

  /// Indicates if there is any future board state which can be redone to.
  bool get hasRedo => this._state.next != null;

  /// The event is fired when the game has changed state, condition, and/or turn.
  Events.Event get changed =>
    this._changed ??= new Events.Event();
  
  /// Is called to fire the game changed event.
  void _onChanged([Events.EventArgs? args = null]) => this._changed?.emit(args);

  /// Gets the tile value indicating the state of the game board at the given location.
  TileValue getValue(Location loc) => this._state.getValue(loc);

  /// Gets the location of the given piece value, or null if the piece is not on the board.
  Location findItem(TileValue item) => this._state.findItem(item);

  /// Gets all the possible movements for the current color's turn.
  List<Movement> getAllMovements() => this._state.getAllMovements(this._whiteTurn);

  /// Gets all the possible movements for the given piece.
  /// The piece must be on the board and a piece for the current color's turn.
  List<Movement> getMovements(TileValue piece) {
    if (piece.outOfBounds)
      throw new Exception("may not get movements for an out-of-bounds piece");
    if (piece.white != this._whiteTurn)
      throw new Exception("may not get movements out-of-turn");
    return this._state.getMovements(this._state.findItem(piece));
  }

  /// Performs a move to this game. Makes a copy of the current state and
  /// applies this move to the state. It switches to the other color's turn.
  /// The movement must be for the current color's turn and must be a valid possible movement.
  void makeMove(Movement move) {
    TileValue piece = this._state.getValue(move.source);
    if (piece.white != this._whiteTurn)
      throw new Exception("may not make a move movement out-of-turn");
    if (!this._state.isValidMovement(move))
      throw new Exception("not a valid move: "+move.toString());
    this._state = this._state.pushState();
    this._state.applyMovement(move);
    this._whiteTurn = !this._whiteTurn;
    this._condition = this._state.condition(this.whiteTurn);
    this._onChanged();
  }

  /// Undo will transition to the previous state and color turn,
  /// while putting the current state into the redo.
  /// This can run multiple undoes at the same time by setting the number of `steps` greater than 1.
  /// Will return true if any change was made, false if no undo was possible.
  bool undo([int steps = 1]) {
    bool changed = false;
    for (int i = 0; i < steps; ++i) {
      State? prev = this._state.prev;
      if (prev == null) break;

      changed = true;
      this._state = prev;
      this._whiteTurn = !this._whiteTurn;
    }
    if (changed) {
      this._condition = this._state.condition(this.whiteTurn);
      this._onChanged();
    }
    return changed;
  }

  /// Redo is the same of undo except that it moves to any future state if there is one. 
  /// This can run multiple redoes at the same time by setting the number of `steps` greater than 1.
  bool redo([int steps = 1]) {
    bool changed = false;
    for (int i = 0; i < steps; ++i) {
      State? next = this._state.next;
      if (next == null) break;

      changed = true;
      this._state = next;
      this._whiteTurn = !this._whiteTurn;
    }
    if (changed) {
      this._condition = this._state.condition(this.whiteTurn);
      this._onChanged();
    }
    return changed;
  }
}