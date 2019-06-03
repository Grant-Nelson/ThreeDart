part of chess;

abstract class Piece extends ThreeDart.Entity {
  int _row;
  int _column;
  double _angle;
  double _scalar;
  Movers.Constant _mover;
  Board _board;
  bool _white;
  bool _hasMoved;
  bool _dead;
  bool _selected;
  bool _showPick;
  Techniques.SolidColor _pickTech;
  ThreeDart.Entity _colorEntity;
  ThreeDart.Entity _pickEntity;

  Piece._(this._board, this._white, this._row, this._column, this._angle, this._scalar) {
    this._mover = new Movers.Constant();
    this._hasMoved = false;
    this._dead = false;
    this._selected = false;
    this._showPick = false;
  }

  void _initialize(String name, ThreeDart.Entity colorShapeEntity, ThreeDart.Entity pickShapeEntity) {
    this._pickTech = this._board.nextpickTech();
    
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
    if (selected != this._selected) {
      this._selected = selected;
      this._updateColorTech();
    }
  }
  
  bool isPick(Math.Color4 pick) =>
    this._pickTech.color == pick;

  void _updateLocation() {
    this._mover.matrix =
      new Math.Matrix4.translate(this._row.toDouble()-4.5, 0.0, this._column.toDouble()-4.5)*
      new Math.Matrix4.rotateY(this._angle)*
      new Math.Matrix4.scale(this._scalar, this._scalar, this._scalar);
  }

  void _updateColorTech() {
    if (this._white) {
      if (this._selected)
        this.technique = this._board.materials.selectedWhitePieceTech;
      else this.technique = this._board.materials.whitePieceTech;
    } else {
      if (this._selected)
        this.technique = this._board.materials.selectedBlackPieceTech;
      else this.technique = this._board.materials.blackPieceTech;
    }
  }
}