part of ThreeDart.Textures;

/// A loader for loading textures.
class TextureLoader {
  WebGL.RenderingContext _gl;
  int _max2DSize;
  int _maxCubeSize;
  int _imageCount;
  int _loadedCount;

  /// Creates a new texture loader.
  TextureLoader(this._gl) {
    this._max2DSize = this._gl.getParameter(WebGL.MAX_TEXTURE_SIZE);
    this._maxCubeSize = this._gl.getParameter(WebGL.MAX_CUBE_MAP_TEXTURE_SIZE);
    this._imageCount = 0;
    this._loadedCount = 0;
  }

  /// The number of textures being loaded.
  int get loading => this._imageCount - this._loadedCount;

  /// The percentage of textures loaded.
  double get percentage {
    if (this._imageCount == 0) return 100.0;
    return this._loadedCount*100.0/this._imageCount;
  }

  /// Resets the loading counters.
  void resetCounter() {
    this._imageCount = 0;
    this._loadedCount = 0;
  }

  /// Loads a file from the given [path].
  /// The image will load asynchronously.
  Texture2D load2DFromFile(String path, {bool flipY: false, bool wrapEdges: false}) {
    WebGL.Texture texture = this._gl.createTexture();
    this._gl.bindTexture(WebGL.TEXTURE_2D, texture);
    if (wrapEdges) {
      this._gl.texParameteri(WebGL.TEXTURE_2D, WebGL.TEXTURE_WRAP_S, WebGL.REPEAT);
      this._gl.texParameteri(WebGL.TEXTURE_2D, WebGL.TEXTURE_WRAP_T, WebGL.REPEAT);
    } else {
      this._gl.texParameteri(WebGL.TEXTURE_2D, WebGL.TEXTURE_WRAP_S, WebGL.CLAMP_TO_EDGE);
      this._gl.texParameteri(WebGL.TEXTURE_2D, WebGL.TEXTURE_WRAP_T, WebGL.CLAMP_TO_EDGE);
    }
    this._gl.texParameteri(WebGL.TEXTURE_2D, WebGL.TEXTURE_MIN_FILTER, WebGL.LINEAR);
    this._gl.texParameteri(WebGL.TEXTURE_2D, WebGL.TEXTURE_MAG_FILTER, WebGL.LINEAR);
    this._gl.bindTexture(WebGL.TEXTURE_2D, null);

    this._incLoading();
    html.ImageElement image = new html.ImageElement(src: path);
    Texture2D result = new Texture2D(texture: texture);
    image.onLoad.listen((_) {
      result._width  = image.width;
      result._height = image.height;
      image = this._resizeImage(image, this._max2DSize);
      result._actualWidth  = image.width;
      result._actualHeight = image.height;

      this._gl.bindTexture(WebGL.TEXTURE_2D, texture);
      this._gl.pixelStorei(WebGL.UNPACK_FLIP_Y_WEBGL, flipY? 1: 0);
      this._gl.texImage2D(WebGL.TEXTURE_2D, 0, WebGL.RGBA, WebGL.RGBA, WebGL.UNSIGNED_BYTE, image);
      this._gl.bindTexture(WebGL.TEXTURE_2D, null);
      result._setLoaded();
      this._decLoading();
    });
    return result;
  }

  /// Loads files from the given path.
  /// The images will load asynchronously.
  /// The files must be named: 'posx.png', 'negx.png', 'posy.png', etc.
  TextureCube loadCubeFromPath(String path, {pre: '', ext: '.png', bool flipY: false}) {
    return this.loadCubeFromFiles(
      '$path/${pre}posx${ext}',
      '$path/${pre}posy${ext}',
      '$path/${pre}posz${ext}',
      '$path/${pre}negx${ext}',
      '$path/${pre}negy${ext}',
      '$path/${pre}negz${ext}',
      flipY: flipY);
  }

  /// Loads files from the given paths.
  /// The images will load asynchronously.
  TextureCube loadCubeFromFiles(String posXPath, String posYPath, String posZPath,
    String negXPath, String negYPath, String negZPath, {bool flipY: false}) {
    WebGL.Texture texture = this._gl.createTexture();
    this._gl.bindTexture(WebGL.TEXTURE_CUBE_MAP, texture);
    this._gl.texParameteri(WebGL.TEXTURE_CUBE_MAP, WebGL.TEXTURE_WRAP_S, WebGL.REPEAT);
    this._gl.texParameteri(WebGL.TEXTURE_CUBE_MAP, WebGL.TEXTURE_WRAP_T, WebGL.REPEAT);
    this._gl.texParameteri(WebGL.TEXTURE_CUBE_MAP, WebGL.TEXTURE_MIN_FILTER, WebGL.LINEAR);
    this._gl.texParameteri(WebGL.TEXTURE_CUBE_MAP, WebGL.TEXTURE_MAG_FILTER, WebGL.LINEAR);
    this._gl.bindTexture(WebGL.TEXTURE_CUBE_MAP, null);

    TextureCube result = new TextureCube(texture: texture);
    this._loadCubeFace(result, texture, posXPath, WebGL.TEXTURE_CUBE_MAP_POSITIVE_X, flipY);
    this._loadCubeFace(result, texture, negXPath, WebGL.TEXTURE_CUBE_MAP_NEGATIVE_X, flipY);
    this._loadCubeFace(result, texture, posYPath, WebGL.TEXTURE_CUBE_MAP_POSITIVE_Y, flipY);
    this._loadCubeFace(result, texture, negYPath, WebGL.TEXTURE_CUBE_MAP_NEGATIVE_Y, flipY);
    this._loadCubeFace(result, texture, posZPath, WebGL.TEXTURE_CUBE_MAP_POSITIVE_Z, flipY);
    this._loadCubeFace(result, texture, negZPath, WebGL.TEXTURE_CUBE_MAP_NEGATIVE_Z, flipY);
    return result;
  }

  /// Reads the entire given [texture] into the reader buffer.
  TextureReader readAll(Texture2D texture) {
    return this.read(texture, 0, 0, texture.actualWidth, texture.actualHeight);
  }

  /// Reads the given range of the given [texture] into the reader buffer.
  TextureReader read(Texture2D texture, int x, int y, int width, int height) {
    WebGL.Framebuffer fb = this._gl.createFramebuffer();
    this._gl.bindFramebuffer(WebGL.FRAMEBUFFER, fb);
    this._gl.framebufferTexture2D(WebGL.FRAMEBUFFER, WebGL.COLOR_ATTACHMENT0, WebGL.TEXTURE_2D, texture.texture, 0);

    Typed.Uint8List data = new Typed.Uint8List(width*height*4);
    this._gl.readPixels(x, y, width, height, WebGL.RGBA, WebGL.UNSIGNED_BYTE, data);
    this._gl.bindFramebuffer(WebGL.FRAMEBUFFER, null);
    return new TextureReader._(data, width, height);
  }

  /// Loads a face from the given path.
  /// The image will load asynchronously.
  void _loadCubeFace(TextureCube result, WebGL.Texture texture, String path, int face, bool flipY) {
    html.ImageElement image = new html.ImageElement(src: path);
    this._incLoading();
    image.onLoad.listen((_) {
        image = this._resizeImage(image, this._maxCubeSize);
        this._gl.bindTexture(WebGL.TEXTURE_CUBE_MAP, texture);
        this._gl.pixelStorei(WebGL.UNPACK_FLIP_Y_WEBGL, flipY? 1: 0);
        this._gl.texImage2D(face, 0, WebGL.RGBA, WebGL.RGBA, WebGL.UNSIGNED_BYTE, image);
        this._gl.bindTexture(WebGL.TEXTURE_CUBE_MAP, null);
        result._incLoaded();
        this._decLoading();
    });
  }

  /// Resizes the given image to the maximum size proportional to the power of 2.
  html.ImageElement _resizeImage(html.ImageElement image, int maxSize) {
    maxSize    = Math.nearestPower(maxSize);
    int width  = Math.nearestPower(image.width);
    int height = Math.nearestPower(image.height);
    width  = math.min(width, maxSize);
    height = math.min(height, maxSize);
    if ((image.width == width) && (image.height == height)) {
      return image;
    } else {
      html.CanvasElement canvas = new html.CanvasElement()
        ..width  = width
        ..height = height;

      var ctx = canvas.getContext('2d');
      ctx.drawImageScaled(image, 0, 0, canvas.width, canvas.height);
      return ctx.getImageData(0, 0, canvas.width, canvas.height);
    }
  }

  /// Increments the loading count.
  void _incLoading() {
    this._imageCount++;
  }

  /// Decrement the loading count.
  void _decLoading() {
    this._loadedCount++;
  }
}
