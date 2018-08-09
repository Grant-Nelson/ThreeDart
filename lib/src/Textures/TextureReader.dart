part of ThreeDart.Textures;

/// A 2D texture reader for getting the color from a texture.
class TextureReader {
  Typed.Uint8List _data;
  int _width;
  int _height;

  /// Reads the entire given [texture] into the reader buffer.
  factory TextureReader.readAll(WebGL.RenderingContext gl, Texture2D texture) {
    return new TextureReader.read(gl, texture, 0, 0, texture.actualWidth, texture.actualHeight);
  }

  /// Reads the given range of the given [texture] into the reader buffer.
  factory TextureReader.read(WebGL.RenderingContext gl, Texture2D texture, int x, int y, int width, int height) {
    WebGL.Framebuffer fb = gl.createFramebuffer();
    gl.bindFramebuffer(WebGL.WebGL.FRAMEBUFFER, fb);
    gl.framebufferTexture2D(WebGL.WebGL.FRAMEBUFFER, WebGL.WebGL.COLOR_ATTACHMENT0, WebGL.WebGL.TEXTURE_2D, texture.texture, 0);

    Typed.Uint8List data = new Typed.Uint8List(width*height*4);
    gl.readPixels(x, y, width, height, WebGL.WebGL.RGBA, WebGL.WebGL.UNSIGNED_BYTE, data);
    gl.bindFramebuffer(WebGL.WebGL.FRAMEBUFFER, null);
    return new TextureReader._(data, width, height);
  }

  /// Creates a new 2D texture reader.
  TextureReader._(Typed.Uint8List this._data, int this._width, int this._height);

  /// Gets the buffer for the reader.
  Typed.Uint8List get data => this._data;

  /// Gets the width of the read section.
  int get width => this._width;

  /// Gets the height of the read section.
  int get height => this._height;

  /// Gets the color at the given texture 2D location.
  Math.Color4 atLoc(Math.Point2 txt2D) {
    int x = (txt2D.x*(this._width-1)).floor();
    int y = (txt2D.y*(this._height-1)).floor();
    return this.at(x, y);
  }

  /// Gets the color at the given location.
  Math.Color4 at(int x, int y) {
    if (x >= 0) x %= this._width;
    else x = this._width + (x % this._width);

    if (y >= 0) y %= this._height;
    else y = this._height + (y % this._height);

    int offset = (x + y*this._width)*4;
    return new Math.Color4(
      this._data[offset]/255.0,
      this._data[offset+1]/255.0,
      this._data[offset+2]/255.0,
      this._data[offset+3]/255.0);
  }
}
