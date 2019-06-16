library game;

import 'package:ThreeDart/Events.dart' as Events;

part 'location.dart';
part 'movement.dart';
part 'state.dart';

class Game {

  bool _whiteTurn;
  int _selected;
  int _condition;
  State _state;
  Events.Event _changed;

  Game() {
    this._whiteTurn = true;
    this._selected = State.Empty;
    this._condition = State.None;
    this._state = new State.initial();
    this._changed = null;
  }

  bool get whiteTurn => this._whiteTurn;
  int get selected => this._selected;
  int get condition => this._condition;
  State get state => this._state;

  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  void 


  /*
  void _pieceSelected(Piece piece) {
    if (this._selected != piece) {
      if (this._selected != null) {
        this._selected.selected = false;
        this._board.clearHighlights();
        this._board.clearSelections();
      }

      this._selected = piece;
      if (this._selected != null) {
        this._selected.selected = true;
        Tile tile = this._board.findTile(this._selected.location);
        tile.selected = true;

        List<Movement> movements = this._state.getMovementsForPiece(this._selected.stateItem);
        this._board.setHighlights(movements);
      }
    }
  }

  void _moveTo(Location loc) {
    this._board.clearHighlights();
    this._board.clearSelections();

    //Piece piece = this._board.findPiece(loc);
    //if (piece != null) piece.kill();

    this._selected.setLocation(loc);
    this._selected = null;

    this._whiteTurn = !this._whiteTurn;
  }
  */
}