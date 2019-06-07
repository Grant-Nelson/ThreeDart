part of chess;

class Tile extends ThreeDart.Entity {
  static ThreeDart.Entity _colorShapeEntity;
  static ThreeDart.Entity _pickShapeEntity;

  int _row;
  int _column;
  Movers.Constant _mover;
  Board _board;
  bool _white;
  bool _selected;
  bool _highlighted;
  bool _showPick;
  Techniques.SolidColor _pickTech;
  ThreeDart.Entity _colorEntity;
  ThreeDart.Entity _pickEntity;

  Tile(ThreeDart.ThreeDart td, this._board, this._white, this._row, this._column) {
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

    String name = (this._white?"white":"black")+" tile ${this._row} ${this._column}";
    this._pickTech = this._board.nextpickTech();

    this._colorEntity = new ThreeDart.Entity(
      children: [_colorShapeEntity], name: "color "+name);

    this._pickEntity = new ThreeDart.Entity(
      children: [_pickShapeEntity], name: "pick "+name,
      tech: this._pickTech, enabled: false);

    this.mover = new Movers.Constant.translate(this._row.toDouble()-4.5, 0.0, this._column.toDouble()-4.5);
    this.name = name;
    this.children.add(this._colorEntity);
    this.children.add(this._pickEntity);

    this._updateColorTech();
  }
  
  int get row => this._row;
  int get column => this._column;

  bool get showPick => this._showPick;
  set showPick(bool show) {
    if (show != this._showPick) {
      this._showPick = show;
      this._colorEntity.enabled = !show;
      this._pickEntity.enabled = show;
    }
  }

  bool get selected => this._selected;
  set selected(bool selected) {
    if (selected != this.selected) {
      this._selected = selected;
      this._highlighted = false;
      this._updateColorTech();
    }
  }

  bool get highlighted => this._highlighted;
  set highlighted(bool highlighted) {
    if (highlighted != this._highlighted) {
      this._highlighted = highlighted;
      this._selected = false;
      this._updateColorTech();
    }
  }

  bool isPick(Math.Color4 pick) =>
    this._pickTech.color == pick;

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