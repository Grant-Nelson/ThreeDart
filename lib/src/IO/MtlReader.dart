part of ThreeDart.IO;

/// MaterialLight technique loader for loading *.mtl files.
/// @see https://en.wikipedia.org/wiki/Wavefront_.obj_file#Material_template_library
class _mtlReader {

  /// The texture loader to load all required images with.
  Textures.TextureLoader? _txtLoader;

  /// The map of material names to materials which have been loaded.
  Map<String, Techniques.MaterialLight> _mtls = {};

  /// The material currently being loaded.
  Techniques.MaterialLight? _cur = null;

  /// Creates a new material loader.
  _mtlReader(Textures.TextureLoader? this._txtLoader);

  /// The map of material names to materials which have been loaded.
  Map<String, Techniques.MaterialLight> get materials => this._mtls;

  /// Processes multiple lines of a *.mtl file.
  Future processMultiline(String data, {bool strict: false, String dir: ''}) async {
    await this.processLines(data.split('\n'), strict: strict, dir:dir);
  }

  /// Processes a list of lines of a *.mtl file.
  Future processLines(List<String> lines, {bool strict: false, String dir: ''}) async {
    for (int i = 0; i < lines.length; ++i) {
      try {
        await this.processLine(lines[i], strict: strict, dir:dir);
      } catch(e) {
        throw new Exception('Line ${i+1}: $e');
      }
    }
  }

  /// Processes a single line of a *.mtl file.
  Future processLine(String line, {bool strict: false, String dir: ''}) async {
    try {
      // Trim off comments and whitespace.
      int index = line.indexOf('#');
      if (index >= 0) line = line.substring(0, index);
      line = line.trim();
      if (line.length <= 0) return;

      // Strip off first part of line.
      List<String> parts = _stripFront(line);
      if (parts.length < 1) return;

      // Determine line type.
      switch (parts[0]) {
        case 'newmtl':   this._processNewMaterial(parts[1]);  return;
        case 'Ka':       this._processAmbient(parts[1]);      return;
        case 'Kd':       this._processDiffuse(parts[1]);      return;
        case 'Ks':       this._processSpecular(parts[1]);     return;
        case 'Ns':       this._processShininess(parts[1]);    return;
        case 'd':        this._processAlpha(parts[1]);        return;
        case 'Tr':       this._processTransparency(parts[1]); return;
        case 'map_Ka':   await this._processAmbientMap(parts[1], dir);  return;
        case 'map_Kd':   await this._processDiffuseMap(parts[1], dir);  return;
        case 'map_Ks':   await this._processSpecularMap(parts[1], dir); return;
        case 'map_d':    await this._processAlphaMap(parts[1], dir);    return;
        case 'map_bump': await this._processBumpMap(parts[1], dir);     return;
        case 'bump':     await this._processBumpMap(parts[1], dir);     return;
        default:
          if (!strict) return;
          throw new Exception('Unknown or unsupported line type \'${parts[0]}\'.');
      }
    } catch(e) {
      throw new Exception('Line: \'$line\': $e');
    }
  }

  /// processes a new material (newmtl) line of a *.mtl file.
  void _processNewMaterial(String data) =>
    this._mtls[data] = this._cur = new Techniques.MaterialLight();

  /// processes a new ambient colors (Ka) line of a *.mtl file.
  void _processAmbient(String data) {
    var cur = this._cur;
    if (cur == null) return;
    List<double> vals = _getNumbers(data);
    cur.ambient.color = new Math.Color3.fromList(vals);
  }

  /// processes a new diffuse colors (Kd) line of a *.mtl file.
  void _processDiffuse(String data) {
    var cur = this._cur;
    if (cur == null) return;
    List<double> vals = _getNumbers(data);
    cur.diffuse.color = new Math.Color3.fromList(vals);
  }

  /// processes a new specular colors (Ks) line of a *.mtl file.
  void _processSpecular(String data) {
    var cur = this._cur;
    if (cur == null) return;
    List<double> vals = _getNumbers(data);
    cur.specular.color = new Math.Color3.fromList(vals);
  }

  /// processes a new shininess (Ns) line of a *.mtl file.
  void _processShininess(String data) {
    var cur = this._cur;
    if (cur == null) return;
    List<double> vals = _getNumbers(data);
    if (vals.length != 1)
      throw new Exception('Shininess may only have 1 number.');
    cur.specular.shininess = vals[0];
  }

  /// processes a new alpha (d) line of a *.mtl file.
  void _processAlpha(String data) {
    var cur = this._cur;
    if (cur == null) return;
    List<double> vals = _getNumbers(data);
    if (vals.length != 1)
      throw new Exception('Alpha may only have 1 number.');
    cur.alpha.value = vals[0];
  }

  /// processes a new transparency (Tr) line of a *.mtl file.
  void _processTransparency(String data) {
    var cur = this._cur;
    if (cur == null) return;
    List<double> vals = _getNumbers(data);
    if (vals.length != 1)
      throw new Exception('Alpha may only have 1 number.');
    cur.alpha.value = 1.0-vals[0];
  }

  /// processes a new ambient map (map_Ka) line of a *.mtl file.
  Future _processAmbientMap(String data, String dir) async {
    var cur = this._cur;
    var txtLoader = this._txtLoader;
    if (cur == null || txtLoader == null) return;
    String file = joinPath(dir, data);
    cur.ambient.texture2D = txtLoader.load2DFromFile(file);
  }

  /// processes a new diffuse map (map_Kd) line of a *.mtl file.
  Future _processDiffuseMap(String data, String dir) async {
    var cur = this._cur;
    var txtLoader = this._txtLoader;
    if (cur == null || txtLoader == null) return;
    String file = joinPath(dir, data);
    this._cur?.diffuse.texture2D = txtLoader.load2DFromFile(file);
  }

  /// processes a new specular map (map_Ks) line of a *.mtl file.
  Future _processSpecularMap(String data, String dir) async {
    var cur = this._cur;
    var txtLoader = this._txtLoader;
    if (cur == null || txtLoader == null) return;
    String file = joinPath(dir, data);
    this._cur?.specular.texture2D = txtLoader.load2DFromFile(file);
  }

  /// processes a new alpha map (map_d) line of a *.mtl file.
  Future _processAlphaMap(String data, String dir) async {
    var cur = this._cur;
    var txtLoader = this._txtLoader;
    if (cur == null || txtLoader == null) return;
    String file = joinPath(dir, data);
    this._cur?.alpha.texture2D = txtLoader.load2DFromFile(file);
  }

  /// processes a new bump map (map_bump/bump) line of a *.mtl file.
  Future _processBumpMap(String data, String dir) async {
    var cur = this._cur;
    var txtLoader = this._txtLoader;
    if (cur == null || txtLoader == null) return;
    String file = joinPath(dir, data);
    this._cur?.bump.texture2D = txtLoader.load2DFromFile(file);
  }
}
