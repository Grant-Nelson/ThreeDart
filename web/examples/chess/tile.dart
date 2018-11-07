part of chess;

class Tile extends ThreeDart.Entity {
  static ThreeDart.Entity _shapeEntity;

  int _row;
  int _column;
  Movers.Constant _mover;
  Board _board;
  bool _white;
  bool _selected;

  Tile(ThreeDart.ThreeDart td, this._board, this._white, this._row, this._column) {
    if (_shapeEntity == null) {
      _shapeEntity = new ThreeDart.Entity(name: "tile shape");
      IO.ObjType.fromFile("./resources/tile.obj", td.textureLoader).
        then((ThreeDart.Entity loadedEntity) {
          _shapeEntity.shape = loadedEntity.shape;
        });
    }

    this.mover = new Movers.Constant.translate(this._row.toDouble()-4.5, 0.0, this._column.toDouble()-4.5);
    this._selected = false;
    this.name = (this._white?"white":"black")+" tile ${this._row} ${this._column}";
    this.children.add(_shapeEntity);
    
    this._updateTech();
  }

  void _updateTech() {
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