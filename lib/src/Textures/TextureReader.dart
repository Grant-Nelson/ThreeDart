part of ThreeDart.Textures;

/// A 2D texture reader for getting the color from a texture.
class TextureReader {
  Typed.Uint8List _data;
  final int _width;
  final int _height;

  /// Reads the given range of the given [texture] into the reader buffer.
  /// The x, y, width, and height are based on actual buffer size.
  factory TextureReader._read(WebGL.RenderingContext2 gl, Texture2D texture,
    {int x, int y, int width, int height, bool flipY: false}) {
    x ??= 0;
    y ??= 0;
    width ??= texture.actualWidth;
    height ??= texture.actualHeight;

    if (flipY) y = texture.actualHeight-height-y;

    WebGL.Framebuffer fb = gl.createFramebuffer();
    gl.bindFramebuffer(WebGL.WebGL.FRAMEBUFFER, fb);
    gl.readBuffer(WebGL.WebGL.COLOR_ATTACHMENT0);
    gl.framebufferTexture2D(WebGL.WebGL.FRAMEBUFFER, WebGL.WebGL.COLOR_ATTACHMENT0, WebGL.WebGL.TEXTURE_2D, texture.texture, 0);

    Typed.Uint8List data = new Typed.Uint8List(width*height*4);
    gl.readPixels(x, y, width, height, WebGL.WebGL.RGBA, WebGL.WebGL.UNSIGNED_BYTE, data);
    gl.bindFramebuffer(WebGL.WebGL.FRAMEBUFFER, null);
    TextureReader reader = new TextureReader._(data, width, height);

    // Update once WebGL allows a readPixels flag setting similar to "UNPACK_FLIP_Y_WEBGL".
    if (flipY) reader._flipYInternal();
    return reader;
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
    return new Math.Color4.fromBytes(
      this._data[offset],
      this._data[offset+1],
      this._data[offset+2],
      this._data[offset+3]);
  }

  /// Creates a copy of this texture data.
  TextureReader copy() {
    Typed.Uint8List data = new Typed.Uint8List(this._data.length);
    data.setAll(0, this._data);
    return new TextureReader._(data, this._width, this._height);
  }

  /// Flips the image's Y axis within this own reader.
  void _flipYInternal() {
    for(int y = this._height~/2; y >= 0; --y) {
      int y1 = this._width*4*y;
      int y2 = this._width*4*(this._height-1-y);
      for(int x = 0; x < this._width; ++x) {
        int x1 = y1 + 4*x;
        int x2 = y2 + 4*x;
        for(int b = 0; b < 4; ++b) {
          int b1 = x1 + b;
          int b2 = x2 + b;
          int val = this._data[b1];
          this._data[b1] = this._data[b2];
          this._data[b2] = val;
        }
      }
    }
  }

  /// Gets the data for the given mime type as a base64 string.
  String toDataUrl({String type: 'image/png', double quality: 100.0}) {
    html.CanvasElement canvas = new html.CanvasElement()
      ..width  = this._width
      ..height = this._height;

    html.CanvasRenderingContext2D ctx = canvas.getContext('2d');
    html.ImageData img = ctx.createImageData(this._width, this._height);
    img.data.setAll(0, this._data);
    ctx.putImageData(img, 0, 0);

    return canvas.toDataUrl(type, quality);
  }

  /// Save this texture information to the given PNG file.
  void savePng(String fileName, {double quality: 100.0}) {
    String data = this.toDataUrl(quality: quality).replaceFirst("image/png", "image/octet-stream");

    html.AnchorElement link = new html.AnchorElement();
    link.setAttribute("download", fileName);
    link.setAttribute("href", data);
    link.click();
  }
}
