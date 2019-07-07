library game;

import 'dart:collection';

import 'package:ThreeDart/Events.dart' as Events;

part 'location.dart';
part 'movement.dart';
part 'state.dart';
part 'stringGrid.dart';
part 'tileValue.dart';

class Game {

  bool _whiteTurn;
  TileValue _selected;
  int _condition;
  State _state;
  List<Movement> _movements;
  Events.Event _changedSelected;
  Events.Event _changedCondition;
  Events.Event _changedState;
  Events.Event _changedMovements;

  Game() {
    this._whiteTurn = true;
    this._selected  = TileValue.Empty;
    this._condition = State.None;
    this._state     = new State.initial();
    this._changedSelected  = null;
    this._changedCondition = null;
    this._changedState     = null;
    this._changedMovements = null;
  }

  bool get whiteTurn => this._whiteTurn;
  TileValue get selected => this._selected;
  int get condition => this._condition;
  State get state => this._state;
  List<Movement> get movements => this._movements;

  Events.Event get changedSelected {
    this._changedSelected ??= new Events.Event();
    return this._changedSelected;
  }

  Events.Event get changedCondition {
    this._changedCondition ??= new Events.Event();
    return this._changedCondition;
  }

  Events.Event get changedState {
    this._changedState ??= new Events.Event();
    return this._changedState;
  }

  Events.Event get changedMovements {
    this._changedMovements ??= new Events.Event();
    return this._changedMovements;
  }
  
  void _onChangedSelected([Events.EventArgs args = null]) {
    this._changedSelected?.emit(args);
  }
  
  void _onChangedCondition([Events.EventArgs args = null]) {
    this._changedCondition?.emit(args);
  }

  void _onChangedState([Events.EventArgs args = null]) {
    this._changedState?.emit(args);
  }

  void _onChangedMovements([Events.EventArgs args = null]) {
    this._changedMovements?.emit(args);
  }

  void pick(Location loc) {
    // TODO: Implement
  }

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