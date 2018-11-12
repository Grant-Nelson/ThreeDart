part of ThreeDart.IO;

/// MaterialLight technique reader and writer for *.mtl files.
/// @see https://en.wikipedia.org/wiki/Wavefront_.obj_file#Material_template_library
class MtlType {
  MtlType._();

  /// Loads a *.mtl from the given [filename].
  /// [txtLoader] is used to load any textures required by this material.
  /// [strict] is optional and will print errors for unknown line types.
  static Future<Map<String, Techniques.MaterialLight>> fromFile(String fileName, Textures.TextureLoader txtLoader, {bool strict: false}) async {
    try {
      String dir = getPathTo(fileName);
      _mtlReader loader = new _mtlReader(txtLoader);
      String data = await HttpRequest.getString(fileName);
      await loader.processMultiline(data, strict: strict, dir: dir);
      return loader.materials;
    } catch(e) {
      print("$fileName: $e");
      throw new Exception("$fileName: $e");
    }
  }
}
