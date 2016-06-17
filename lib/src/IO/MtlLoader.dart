part of ThreeDart.IO;

// TODO: Comment
// Still under-construction
class MtlLoader {

  // TODO: Comment
  static Future<Map<String, Techniques.MaterialLight>> fromFile(String fileName, Textures.TextureLoader txtLoader, {bool strict: false}) async {
    try {
      String dir = getPathTo(fileName);
      MtlLoader loader = new MtlLoader._(txtLoader);
      String data = await HttpRequest.getString(fileName);
      await loader.processMultiline(data, strict: strict, dir: dir);
      return loader.materials;
    } catch(e) {
      print("$fileName: $e");
      throw new Exception("$fileName: $e");
    }
  }

  Textures.TextureLoader _txtLoader;
  RegExp _slicerRegex;
  Map<String, Techniques.MaterialLight> _mtls;
  Techniques.MaterialLight _cur;

  MtlLoader._(Textures.TextureLoader this._txtLoader) {
    this._slicerRegex = new RegExp(r'([^\s]+)');
    this._mtls = new Map<String, Techniques.MaterialLight>();
    this._cur = null;
  }

  Map<String, Techniques.MaterialLight> get materials => this._mtls;

  Future processMultiline(String data, {bool strict: false, String dir: ""}) async {
    await this.processLines(data.split("\n"), strict: strict, dir:dir);
  }

  Future processLines(List<String> lines, {bool strict: false, String dir: ""}) async {
    for (int i = 0; i < lines.length; ++i) {
      try {
        await this.processLine(lines[i], strict: strict, dir:dir);
      } catch(e) {
        throw new Exception("Line ${i+1}: $e");
      }
    }
  }

  Future processLine(String line, {bool strict: false, String dir: ""}) async {
    try {
      // Trim off comments and whitespace.
      int index = line.indexOf("#");
      if (index >= 0) line = line.substring(0, index);
      line = line.trim();
      if (line.length <= 0) return;

      // Strip off first part of line.
      List<String> parts = this._stripFront(line);
      if (parts.length < 1) return;

      // Determine line type.
      switch (parts[0]) {
        case "newmtl":   this._processNewMaterial(parts[1]);  return;
        case "Ka":       this._processAmbient(parts[1]);      return;
        case "Kd":       this._processDiffuse(parts[1]);      return;
        case "Ks":       this._processSpecular(parts[1]);     return;
        case "Ns":       this._processShininess(parts[1]);    return;
        case "d":        this._processAlpha(parts[1]);        return;
        case "Tr":       this._processTransparency(parts[1]); return;
        case "map_Ka":   await this._processAmbientMap(parts[1], dir);   return;
        case "map_Kd":   await this._processDiffuseMap(parts[1], dir);   return;
        case "map_Ks":   await this._processSpecularMap(parts[1], dir);  return;
        case "map_Ns":   await this._processShininessMap(parts[1], dir); return;
        case "map_d":    await this._processAlphaMap(parts[1], dir);     return;
        case "map_bump": await this._processBumpMap(parts[1], dir);      return;
        case "bump":     await this._processBumpMap(parts[1], dir);      return;
        case "disp":     await this._processDispMap(parts[1], dir);      return;
        case "refl ":    await this._processReflection(parts[1], dir);   return;
        default:
          if (!strict) return;
          throw new Exception("Unknown or unsupported line type \"${parts[0]}\".");
      }
    } catch(e) {
      throw new Exception("Line: \"$line\": $e");
    }
  }

  List<String> _stripFront(String line) {
    Match match = this._slicerRegex.firstMatch(line);
    if (match == null) return [];
    String front = match.group(1);
    String rest = line.substring(front.length).trim();
    return [front, rest];
  }

  List<String> _sliceLine(String data) {
    List<String> list = new List<String>();
    for (Match match in this._slicerRegex.allMatches(data)) {
      list.add(match.group(1));
    }
    return list;
  }

  List<double> _getNumbers(String data) {
    List<String> parts = this._sliceLine(data);
    List<double> values = new List<double>();
    final int count = parts.length;
    for (int i = 0; i < count; ++i)
      values.add(double.parse(parts[i]));
    return values;
  }

  void _processNewMaterial(String data) {
    this._cur = new Techniques.MaterialLight();
    this._mtls[data] = this._cur;
  }

  void _processAmbient(String data) {
    List<double> vals = this._getNumbers(data);
    this._cur.ambientColor = new Math.Color3.fromList(vals);
  }

  void _processDiffuse(String data) {
    List<double> vals = this._getNumbers(data);
    this._cur.diffuseColor = new Math.Color3.fromList(vals);
  }

  void _processSpecular(String data) {
    List<double> vals = this._getNumbers(data);
    this._cur.specularColor = new Math.Color3.fromList(vals);
  }

  void _processShininess(String data) {
    List<double> vals = this._getNumbers(data);
    if (vals.length != 1)
      throw new Exception("Shininess may only have 1 number.");
    this._cur.shininess = vals[0];
  }

  void _processAlpha(String data) {
    List<double> vals = this._getNumbers(data);
    if (vals.length != 1)
      throw new Exception("Alpha may only have 1 number.");
    this._cur.alpha = vals[0];
  }

  void _processTransparency(String data) {
    List<double> vals = this._getNumbers(data);
    if (vals.length != 1)
      throw new Exception("Alpha may only have 1 number.");
    this._cur.alpha = 1.0-vals[0];
  }

  Future _processAmbientMap(String data, String dir) async {
    String file = joinPath(dir, data);
    this._cur.ambientTexture2D = this._txtLoader.load2DFromFile(file);
  }

  Future _processDiffuseMap(String data, String dir) async {
    String file = joinPath(dir, data);
    this._cur.diffuseTexture2D = this._txtLoader.load2DFromFile(file);
  }

  Future _processSpecularMap(String data, String dir) async {
    // TODO: Implement
  }

  Future _processShininessMap(String data, String dir) async {
    // TODO: Implement
  }

  Future _processAlphaMap(String data, String dir) async {
    // TODO: Implement
  }

  Future _processBumpMap(String data, String dir) async {
    // TODO: Implement
  }

  Future _processDispMap(String data, String dir) async {
    // TODO: Implement
  }

  Future _processReflection(String data, String dir) async {
    // TODO: Implement
  }
}
