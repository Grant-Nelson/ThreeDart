part of graphics;

/// The abstract base entity for all chess pieces.
abstract class Piece extends ThreeDart.Entity {
  game.Location _loc;
  double _angle;
  double _scalar;
  Movers.Constant _mover;
  Board _board;
  bool _white;
  game.TileValue _stateItem;
  bool _selected;
  bool _highlighted;
  bool _showPick;
  Techniques.SolidColor _pickTech;
  ThreeDart.Entity _colorEntity;
  ThreeDart.Entity _pickEntity;

  /// Creates a new piece.
  Piece._(this._board, this._white, this._angle, this._scalar) {
    this._loc         = new game.Location(0, 0);
    this._mover       = new Movers.Constant();
    this._stateItem   = game.TileValue.Empty;
    this._selected    = false;
    this._highlighted = false;
    this._showPick    = false;
  }

  /// Must be called by the inheriting piece kind to finish initialize the piece.
  void _initialize(String name, game.TileValue stateItem, ThreeDart.Entity colorShapeEntity, ThreeDart.Entity pickShapeEntity) {
    this._pickTech = this._board.nextPickTech();
    this._stateItem = stateItem;
    
    this._colorEntity = new ThreeDart.Entity(
      children: [colorShapeEntity], name: "color "+name);

    this._pickEntity = new ThreeDart.Entity(
      children: [pickShapeEntity], name: "pick "+name,
      tech: this._pickTech, enabled: false);

    this.mover = this._mover;
    this.name = name;
    this.children.add(this._colorEntity);
    this.children.add(this._pickEntity);

    this._updateLocation();
    this._updateColorTech();
  }

  /// Indicates if this piece is white or black.
  bool get white => this._white;

  /// Get the value which represents this piece in the game.
  game.TileValue get stateItem => this._stateItem;

  /// Gets or sets if the pick color should be rendered.
  bool get showPick => this._showPick;
  set showPick(bool show) {
    if (show != this._showPick) {
      this._showPick = show;
      this._colorEntity.enabled = !show;
      this._pickEntity.enabled = show;
    }
  }

  /// Gets or sets if the piece should be selected.
  bool get selected => this._selected;
  set selected(bool selected) {
    if (selected != this._selected) {
      this._selected = selected;
      this._highlighted = false;
      this._updateColorTech();
    }
  }
  
  /// Gets or sets if the piece should be highlighted.
  bool get highlighted => this._highlighted;
  set highlighted(bool highlighted) {
    if (highlighted != this._highlighted) {
      this._highlighted = highlighted;
      this._selected = false;
      this._updateColorTech();
    }
  }

  /// Checks if the given color is this piece's pick color.
  bool isPick(Math.Color4 pick) =>
    this._pickTech.color == pick;

  /// Gets or sets the location of this piece.
  game.Location get location => this._loc;
  set location(game.Location loc) {
    if (this._loc != loc) {
      this._loc = loc;
      this._updateLocation();
    }
  }

  /// Updates the movement matrix to place the piece.
  void _updateLocation() =>
    this._mover.matrix =
      new Math.Matrix4.translate(this._loc.row.toDouble()-4.5, 0.0, this._loc.column.toDouble()-4.5)*
      new Math.Matrix4.rotateY(this._angle)*
      new Math.Matrix4.scale(this._scalar, this._scalar, this._scalar);

  /// Updates the technique used for the shown color of the piece.
  void _updateColorTech() {
    if (this._white) {
      if (this._selected)
        this.technique = this._board.materials.selectedWhitePieceTech;
      else if (this._highlighted)
        this.technique = this._board.materials.highlightedWhitePieceTech;
      else this.technique = this._board.materials.whitePieceTech;
    } else {
      if (this._selected)
        this.technique = this._board.materials.selectedBlackPieceTech;
      else if (this._highlighted)
        this.technique = this._board.materials.highlightedBlackPieceTech;
      else this.technique = this._board.materials.blackPieceTech;
    }
  }
}