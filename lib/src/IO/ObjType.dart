part of ThreeDart.IO;

/// Entity reader and writer for *.obj files.
/// @see https://en.wikipedia.org/wiki/Wavefront_.obj_file
class ObjType {
  ObjType._();

  /// Loads a *.obj from the given [filename].
  /// [txtLoader] is used to load any textures required by materials for this entity.
  /// [strict] is optional and will print errors for unknown line types.
  static Future<Core.Entity> fromFile(String fileName, Textures.TextureLoader txtLoader,
    {bool strict: false, Map<String, Techniques.MaterialLight> mtls: null, Events.Event progress: null}) async {
    try {
      String dir = getPathTo(fileName);
      _objReader reader = new _objReader(txtLoader, mtls: mtls, progress: progress);
      String data = await HttpRequest.getString(fileName);
      await reader.processMultiline(data, strict: strict, dir: dir);
      progress?.emit(new ProgressEventArgs(reader, 100.0, true));
      return reader.entity;
    } catch(e) {
      print("$fileName: $e");
      throw new Exception("$fileName: $e");
    }
  }

  /// Writes a *.obj lines as strings with the given entity.
  /// [normal] indicates normal vector is written.
  /// [txtCube] indicates the texture cube coordinates
  /// should be written instead of texture 2D coordinates.
  static List<String> toLines(Core.Entity entity,
    {bool normal = true, bool texture = true, bool txtCube = false, int decimals = 16}) {
    _objWriter writer = new _objWriter(normal, texture, txtCube, decimals);
    writer.addEntity(entity);
    return writer.lines;
  }
}
