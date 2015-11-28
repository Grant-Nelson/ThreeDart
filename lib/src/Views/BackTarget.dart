part of ThreeDart.Views;

// TODO: Finish Implementation

class BackTarget extends Target {

  Textures.Texture2D _color;
  Textures.Texture2D _depth;
  int _width;
  int _height;

  BackTarget(int width, int height) {

  }

  Textures.Texture2D get color => this._color;
  Textures.Texture2D get depth => this._depth;
  int get width => this._width;
  int get height => this._height;

  void bind(Core.RenderState state) {
    
  }

  void unbind(Core.RenderState state) {

  }

}
