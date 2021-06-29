part of ThreeDart.Textures;

/// A loader for loading textures.
class TextureLoader {
  WebGL.RenderingContext2 _gl;
  int _max2DSize = 0;
  int _maxCubeSize = 0;
  int _imageCount = 0;
  int _loadedCount = 0;

  /// Creates a new texture loader.
  TextureLoader(this._gl) {
    this._max2DSize = this._gl.getParameter(WebGL.WebGL.MAX_TEXTURE_SIZE) as int;
    this._maxCubeSize = this._gl.getParameter(WebGL.WebGL.MAX_CUBE_MAP_TEXTURE_SIZE) as int;
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
  Texture2D load2DFromFile(String path, {bool flipY: false, bool wrapEdges: false, bool mipMap: false, bool nearest: false}) {
    WebGL.Texture texture = this._gl.createTexture();
    this._gl.bindTexture(WebGL.WebGL.TEXTURE_2D, texture);
    if (wrapEdges) {
      this._gl.texParameteri(WebGL.WebGL.TEXTURE_2D, WebGL.WebGL.TEXTURE_WRAP_S, WebGL.WebGL.REPEAT);
      this._gl.texParameteri(WebGL.WebGL.TEXTURE_2D, WebGL.WebGL.TEXTURE_WRAP_T, WebGL.WebGL.REPEAT);
    } else {
      this._gl.texParameteri(WebGL.WebGL.TEXTURE_2D, WebGL.WebGL.TEXTURE_WRAP_S, WebGL.WebGL.CLAMP_TO_EDGE);
      this._gl.texParameteri(WebGL.WebGL.TEXTURE_2D, WebGL.WebGL.TEXTURE_WRAP_T, WebGL.WebGL.CLAMP_TO_EDGE);
    }
    int min = nearest?(mipMap?WebGL.WebGL.NEAREST_MIPMAP_NEAREST:WebGL.WebGL.NEAREST):(mipMap?WebGL.WebGL.LINEAR_MIPMAP_LINEAR:WebGL.WebGL.LINEAR);
    this._gl.texParameteri(WebGL.WebGL.TEXTURE_2D, WebGL.WebGL.TEXTURE_MIN_FILTER, min);
    this._gl.texParameteri(WebGL.WebGL.TEXTURE_2D, WebGL.WebGL.TEXTURE_MAG_FILTER, nearest?WebGL.WebGL.NEAREST:WebGL.WebGL.LINEAR);
    this._gl.bindTexture(WebGL.WebGL.TEXTURE_2D, null);

    this._incLoading();
    html.ImageElement image = new html.ImageElement(src: path);
    Texture2DSolid result = new Texture2DSolid(texture: texture);
    image.onLoad.listen((_) {
      result._width  = image.width ?? 512;
      result._height = image.height ?? 512;
      dynamic data = this._resizeImage(image, this._max2DSize, nearest);
      result._actualWidth  = image.width ?? 512;
      result._actualHeight = image.height ?? 512;

      this._gl.bindTexture(WebGL.WebGL.TEXTURE_2D, texture);
      this._gl.pixelStorei(WebGL.WebGL.UNPACK_FLIP_Y_WEBGL, flipY? 1: 0);
      this._gl.texImage2D(WebGL.WebGL.TEXTURE_2D, 0, WebGL.WebGL.RGBA, WebGL.WebGL.RGBA, WebGL.WebGL.UNSIGNED_BYTE, data);
      if (mipMap) this._gl.generateMipmap(WebGL.WebGL.TEXTURE_2D);
      this._gl.bindTexture(WebGL.WebGL.TEXTURE_2D, null);
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
    this._gl.bindTexture(WebGL.WebGL.TEXTURE_CUBE_MAP, texture);
    this._gl.texParameteri(WebGL.WebGL.TEXTURE_CUBE_MAP, WebGL.WebGL.TEXTURE_WRAP_S, WebGL.WebGL.REPEAT);
    this._gl.texParameteri(WebGL.WebGL.TEXTURE_CUBE_MAP, WebGL.WebGL.TEXTURE_WRAP_T, WebGL.WebGL.REPEAT);
    this._gl.texParameteri(WebGL.WebGL.TEXTURE_CUBE_MAP, WebGL.WebGL.TEXTURE_MIN_FILTER, WebGL.WebGL.LINEAR);
    this._gl.texParameteri(WebGL.WebGL.TEXTURE_CUBE_MAP, WebGL.WebGL.TEXTURE_MAG_FILTER, WebGL.WebGL.LINEAR);
    this._gl.bindTexture(WebGL.WebGL.TEXTURE_CUBE_MAP, null);

    TextureCube result = new TextureCube(texture: texture);
    this._loadCubeFace(result, texture, posXPath, WebGL.WebGL.TEXTURE_CUBE_MAP_POSITIVE_X, flipY, false);
    this._loadCubeFace(result, texture, negXPath, WebGL.WebGL.TEXTURE_CUBE_MAP_NEGATIVE_X, flipY, false);
    this._loadCubeFace(result, texture, posYPath, WebGL.WebGL.TEXTURE_CUBE_MAP_POSITIVE_Y, flipY, false);
    this._loadCubeFace(result, texture, negYPath, WebGL.WebGL.TEXTURE_CUBE_MAP_NEGATIVE_Y, flipY, false);
    this._loadCubeFace(result, texture, posZPath, WebGL.WebGL.TEXTURE_CUBE_MAP_POSITIVE_Z, flipY, false);
    this._loadCubeFace(result, texture, negZPath, WebGL.WebGL.TEXTURE_CUBE_MAP_NEGATIVE_Z, flipY, false);
    return result;
  }
    
  /// Reads the entire given [texture] into the reader buffer.
  TextureReader readAll(Texture2D texture, [bool flipY = true]) =>
    new TextureReader._read(this._gl, texture, flipY: flipY);

  /// Reads the given range of the given [texture] into the reader buffer.
  /// The x, y, width, and height are based on actual buffer size.
  TextureReader read(Texture2D texture, int x, int y, int width, int height, [bool flipY = true]) =>
    new TextureReader._read(this._gl, texture, x: x, y: y, width: width, height: height, flipY: flipY);

  /// Reads a color out of the given texture.
  Math.Color4 pickColor(Texture2D texture, Math.Vector2 loc, [bool flipY = true]) {
    int adjX = (loc.dx*(texture.actualWidth-1)).floor();
    int adjY = (loc.dy*(texture.actualHeight-1)).floor();
    TextureReader reader = this.read(texture, adjX, adjY, 1, 1, flipY);
    return reader.at(0, 0);
  }

  /// Loads a face from the given path.
  /// The image will load asynchronously.
  void _loadCubeFace(TextureCube result, WebGL.Texture texture, String path, int face, bool flipY, bool nearest) {
    html.ImageElement image = new html.ImageElement(src: path);
    this._incLoading();
    image.onLoad.listen((_) {
        dynamic data = this._resizeImage(image, this._maxCubeSize, nearest);
        this._gl.bindTexture(WebGL.WebGL.TEXTURE_CUBE_MAP, texture);
        this._gl.pixelStorei(WebGL.WebGL.UNPACK_FLIP_Y_WEBGL, flipY? 1: 0);
        this._gl.texImage2D(face, 0, WebGL.WebGL.RGBA, WebGL.WebGL.RGBA, WebGL.WebGL.UNSIGNED_BYTE, data);
        this._gl.bindTexture(WebGL.WebGL.TEXTURE_CUBE_MAP, null);
        result._incLoaded();
        this._decLoading();
    });
  }

  /// Resizes the given image to the maximum size proportional to the power of 2.
  dynamic _resizeImage(html.ImageElement image, int maxSize, bool nearest) {
    maxSize    = Math.nearestPower(maxSize);
    int width  = Math.nearestPower(image.width ?? 512);
    int height = Math.nearestPower(image.height ?? 512);
    width  = math.min(width, maxSize);
    height = math.min(height, maxSize);
    if ((image.width == width) && (image.height == height)) {
      return image;
    } else {
      html.CanvasElement canvas = new html.CanvasElement()
        ..width  = width
        ..height = height;

      html.CanvasRenderingContext2D ctx = canvas.getContext('2d') as html.CanvasRenderingContext2D;
      ctx.imageSmoothingEnabled = nearest;
      ctx.drawImageScaled(image, 0, 0, canvas.width ?? 512, canvas.height ?? 512);
      return ctx.getImageData(0, 0, canvas.width ?? 512, canvas.height ?? 512);
    }
  }

  /// Increments the loading count.
  void _incLoading() => this._imageCount++;

  /// Decrement the loading count.
  void _decLoading() => this._loadedCount++;
}
