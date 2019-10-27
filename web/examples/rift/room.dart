part of rift;

class Room {
  List<Layer> _background;
  List<Layer> _backDistort;
  List<Layer> _main;
  List<Layer> _foreDistort;
  List<Layer> _foreground;

  Room() {
    this._background = new List<Layer>();
    this._backDistort = new List<Layer>();
    this._main = new List<Layer>();
    this._foreDistort = new List<Layer>();
    this._foreground = new List<Layer>();

  }

  List<Layer> get background => this._background;
  List<Layer> get backDistort => this._backDistort;
  List<Layer> get main => this._main;
  List<Layer> get foreDistort => this._foreDistort;
  List<Layer> get foreground => this._foreground;

}
