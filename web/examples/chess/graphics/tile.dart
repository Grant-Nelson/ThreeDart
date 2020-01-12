part of graphics;

/// A tile is the entity on the board which can be clicked on and highlighted.
class Tile extends ThreeDart.Entity {

  /// The singleton for the shape of the tile with the render cache for the color shader.
  /// Used for rendering to the screen.
  static ThreeDart.Entity _colorShapeEntity;

  /// The singleton for the shape of the tile with the render cache for the picker shader.
  /// Used for determining which piece or tile was clicked on.
  static ThreeDart.Entity _pickShapeEntity;

  /// The location for this tile on the board.
  game.Location _loc;

  /// The mover to position the tile in the correct location.
  Movers.Constant _mover;

  /// The board which this tile belongs to.
  Board _board;

  /// Indicates if this is a white tile or black tile.
  bool _white;

  /// Indicates if this tile is selected.
  bool _selected;

  /// Indicates if this tile is highlighted.
  bool _highlighted;

  /// Indicates that the pick color should be rendered.
  bool _showPick;

  /// The techinque for drawing the pick color for this tile.
  Techniques.SolidColor _pickTech;

  /// The child entity for the shown color of this tile.
  ThreeDart.Entity _colorEntity;

  /// The child entity for the pick color of this tile.
  ThreeDart.Entity _pickEntity;

  /// Creates a new tile entity.
  Tile(ThreeDart.ThreeDart td, Board this._board, bool this._white, game.Location this._loc) {
    if (_colorShapeEntity == null) {
      _colorShapeEntity = new ThreeDart.Entity(name: "color tile shape");
      _pickShapeEntity = new ThreeDart.Entity(name: "pick tile shape");
      IO.ObjType.fromFile("./resources/tile.obj", td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          _colorShapeEntity.shape = loadedEntity.shape;
          _pickShapeEntity.shape = loadedEntity.shape;
        });
    }

    this._selected    = false;
    this._highlighted = false;
    this._showPick    = false;

    String name = (this._white?"white":"black")+" tile ${this._loc.row} ${this._loc.column}";
    this._pickTech = this._board.nextPickTech();

    this._colorEntity = new ThreeDart.Entity(
      children: [_colorShapeEntity], name: "color "+name);

    this._pickEntity = new ThreeDart.Entity(
      children: [_pickShapeEntity], name: "pick "+name,
      tech: this._pickTech, enabled: false);

    this.mover = new Movers.Constant.translate(this._loc.row.toDouble()-4.5, 0.0, this._loc.column.toDouble()-4.5);
    this.name = name;
    this.children.add(this._colorEntity);
    this.children.add(this._pickEntity);

    this._updateColorTech();
  }

  /// Gets the location of this tile.
  game.Location get location => this._loc;

  /// Gets or sets if the pick color should be rendered.
  bool get showPick => this._showPick;
  set showPick(bool show) {
    if (show != this._showPick) {
      this._showPick = show;
      this._colorEntity.enabled = !show;
      this._pickEntity.enabled = show;
    }
  }

  /// Gets or sets if the tile should be selected.
  bool get selected => this._selected;
  set selected(bool selected) {
    if (selected != this.selected) {
      this._selected = selected;
      this._highlighted = false;
      this._updateColorTech();
    }
  }

  /// Gets or sets if the tile should be highlighted.
  bool get highlighted => this._highlighted;
  set highlighted(bool highlighted) {
    if (highlighted != this._highlighted) {
      this._highlighted = highlighted;
      this._selected = false;
      this._updateColorTech();
    }
  }

  /// Checks if the given color is this tile's pick color.
  bool isPick(Math.Color4 pick) =>
    this._pickTech.color == pick;

  /// Updates the technique used for the shown color of the tile.
  void _updateColorTech() {
    if (this._white) {
      if (this._selected)
        this.technique = this._board.materials.selectedWhiteTileTech;
      else if (this._highlighted)
        this.technique = this._board.materials.highlightedWhiteTileTech;
      else this.technique = this._board.materials.whiteTileTech;
    } else {
      if (this._selected)
        this.technique = this._board.materials.selectedBlackTileTech;
      else if (this._highlighted)
        this.technique = this._board.materials.highlightedBlackTileTech;
      else this.technique = this._board.materials.blackTileTech;
    }
  }
}