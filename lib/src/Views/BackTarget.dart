part of ThreeDart.Views;

class BackTarget extends Target {

  Data.Texture2D _color;
  Data.Texture2D _depth;
  int _width;
  int _height;

  BackTarget(int width, int height) {

  }

  Data.Texture2D get color => this._color;
  Data.Texture2D get depth => this._depth;
  int get width => this._width;
  int get height => this._height;

  void bind(Core.RenderState state) {

  }

  void unbind(Core.RenderState state) {

  }

}
