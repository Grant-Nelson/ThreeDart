part of graphics;

/// The board entity which contains tiles, pieces, and edges.
class Board extends ThreeDart.Entity {
  game.Game _game;
  List<Piece> _pieces;
  List<Tile> _tiles;
  List<game.Movement> _moves;
  ThreeDart.Entity _table;
  ThreeDart.Entity _edges;
  Materials _mats;
  bool _showPick;

  /// Creates a board for the given game.
  Board(ThreeDart.ThreeDart td, game.Game this._game) {
    this._pieces = new List<Piece>();
    this._tiles = new List<Tile>();
    this._moves = new List<game.Movement>();
    this._mats = new Materials(td);
    this.name = "board";
    this._showPick = false;

    for (int i = 1; i <= 8; i++) {
      for (int j = 1; j <= 8; j++) {
        Tile tile = new Tile(td, this, ((i+j)%2) == 0, new game.Location(i, j));
        this._tiles.add(tile);
        this.children.add(tile);
      }
    }

    for (int i = 1; i <= 8; i++) {
      this._add(new Pawn(td, this, true,  i, 0.0, 0.7));
      this._add(new Pawn(td, this, false, i, 0.0, 0.7));
    }

    this._add(new Rook(td, this, true,  1, 0.0, 0.7));
    this._add(new Rook(td, this, true,  2, 0.0, 0.7));
    this._add(new Rook(td, this, false, 1, 0.0, 0.7));
    this._add(new Rook(td, this, false, 2, 0.0, 0.7));

    this._add(new Knight(td, this, true,  1, 0.0,     0.7));
    this._add(new Knight(td, this, true,  2, Math.PI, 0.7));
    this._add(new Knight(td, this, false, 1, 0.0,     0.7));
    this._add(new Knight(td, this, false, 2, Math.PI, 0.7));

    this._add(new Bishop(td, this, true,  1, -Math.PI_2, 0.8));
    this._add(new Bishop(td, this, true,  2,  Math.PI_2, 0.8));
    this._add(new Bishop(td, this, false, 1, -Math.PI_2, 0.8));
    this._add(new Bishop(td, this, false, 2,  Math.PI_2, 0.8));

    this._add(new Queen(td, this, true,  1, 0.0, 1.0));
    this._add(new Queen(td, this, false, 1, 0.0, 1.0));

    this._add(new King(td, this, true,  Math.PI_2, 0.9));
    this._add(new King(td, this, false, Math.PI_2, 0.9));

    this._edges = new ThreeDart.Entity();
    this.children.add(this._edges);
    this._edges.children.add(new Edge(td, this, 0.0, 0.0, 0.0, 0));
    this._edges.children.add(new Edge(td, this, 8.0, 0.0, Math.PI_2, 1));
    this._edges.children.add(new Edge(td, this, 8.0, 8.0, Math.PI, 2));
    this._edges.children.add(new Edge(td, this, 0.0, 8.0, Math.PI3_2, 3));

    this._table = new ThreeDart.Entity(
      shape: Shapes.disk(sides: 30),
      tech: this._mats._tableTech,
      mover: new Movers.Constant(
        new Math.Matrix4.translate(0.0, -0.5, 0.0)*
        new Math.Matrix4.rotateX(-Math.PI_2)*
        new Math.Matrix4.scale(12.0, 12.0, 12.0)
      )
    );
    this.children.add(this._table);
    this._game.changed.add(_onGameChange);
    this.setLocations(this._game.state);
  }

  /// The collection of material techniques to use for this game.
  Materials get materials => this._mats;

  /// Gets the next unique pick color material technique.
  Techniques.SolidColor nextPickTech() =>
    this._mats.nextPickTech(this.children.length);

  /// Adds the given piece to the board.
  void _add(Piece piece) {
    this._pieces.add(piece);
    this.children.add(piece);
  }

  /// Handles a picked color being clicked on causing either
  /// a selection of a piece, performs a movement, or has no effect
  /// based on what is piece or tile was clicked on.
  void pick(Math.Color4 color) {
    for (Piece piece in this._pieces) {
      if (piece.isPick(color)) {
        this._pickLoc(piece.location);
        return;
      }
    }
    
    for (Tile tile in this._tiles) {
      if (tile.isPick(color)) {
        this._pickLoc(tile.location);
        return;
      }
    }
  }

  /// Handles a location being clicked on.
  void _pickLoc(game.Location loc) {
    // Check if a movement location was picked
    for (game.Movement move in this._moves) {
      if ((move.destination == loc) || (move.otherSource == loc)) {
        this._game.makeMove(move);
        this._moves.clear();
        return;
      }
    }

    // Check if a piece was picked.
    game.TileValue stateItem = this._game.getValue(loc);
    if (stateItem.empty || stateItem.white != this._game.whiteTurn) return;
    bool selected = this.isSelected(stateItem);
    this.clearHighlights();
    this.clearSelections();
    if (!selected) {
      this.setSelection(stateItem);
      this._moves = this._game.getMovements(stateItem);
      this.setHighlights(this._moves);
    }
  }

  /// Handles when a state changes has occurred in the game.
  void _onGameChange(Events.EventArgs args) {
    this.clearHighlights();
    this.clearSelections();
    this.setLocations(this._game.state);
    // TODO: Update condition information
    // TODO: Update whose turn indication
    // TODO: Update undo/redo buttons
  }

  /// Finds the piece entity with the given piece value or null if not found.
  Piece findPiece(game.TileValue stateValue) {
    game.TileValue item = stateValue.item;
    for (Piece piece in this._pieces) {
      if (piece.stateItem.item == item) return piece;
    }
    return null;
  }

  /// Gets the piece entity at the given location or null if that location is empty.
  Piece pieceAt(game.Location loc) {
    for (Piece piece in this._pieces) {
      if (piece.location == loc) return piece;
    }
    return null;
  }

  /// Gets the tile entity at the given location or null if out of bounds.
  Tile tileAt(game.Location loc) {
    for (Tile tile in this._tiles) {
      if (tile.location == loc) return tile;
    }
    return null;
  }

  /// Clears all highlights from pieces and tiles.
  void clearHighlights() {
    for (Piece piece in this._pieces)
      piece.highlighted = false;
    for (Tile tile in this._tiles)
      tile.highlighted = false;
  }

  /// Clears all selection from pieces and tiles.
  void clearSelections() {
    for (Piece piece in this._pieces)
      piece.selected = false;
    for (Tile tile in this._tiles)
      tile.selected = false;
  }

  /// Gets or sets if the board should render the pick colors.
  /// Typically this is set so the board's pick colors can be rendered to a back buffer
  /// to determine which piece or tile was picked before resetting to normal color rendering.
  bool get showPick => this._showPick;
  set showPick(bool show) {
    if (show != this._showPick) {
      this._showPick = show;
      this._table.enabled = !show;
      this._edges.enabled = !show;
      for(Piece piece in this._pieces)
        piece.showPick = show;
      for(Tile tile in this._tiles)
        tile.showPick = show;
    }
  }

  /// Determines if the piece with the given game piece value is currently selected.
  bool isSelected(game.TileValue stateItem) {
    Piece piece = this.findPiece(stateItem);
    return (piece != null) && piece.selected;
  }

  /// Sets the piece with the given game piece value and the tile it is on as selected.
  void setSelection(game.TileValue stateItem) {
    Piece piece = this.findPiece(stateItem);
    if (piece != null) {
      piece.selected = true;
      Tile tile = this.tileAt(piece.location);
      tile?.selected = true;
    }
  }

  /// Sets the location of the pieces based on the current board state.
  void setLocations(game.State state) {
    for (Piece piece in this._pieces) {
      game.Location loc = state.findItem(piece.stateItem);
      piece.location = loc;
      piece.enabled = loc.onBoard;
    }
  }

  /// Sets the highlights for all the given movements.
  void setHighlights(List<game.Movement> movements) {
    for (game.Movement movement in movements) {
      Tile tile = this.tileAt(movement.destination);
      tile.highlighted = true;
      if (movement.otherSource != null) {
        Piece piece = this.pieceAt(movement.otherSource);
        piece.highlighted = true;
      }
    }
  }
}
