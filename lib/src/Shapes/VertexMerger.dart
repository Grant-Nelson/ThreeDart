part of ThreeDart.Shapes;

/// A merger for joining or manipulating vertices.
abstract class VertexMerger {

  /// Merges the given vertices into one vertex and returns it.
  /// Or null can be returned and the list of vertices can have their values updated.
  Vertex? merge(List<Vertex> vertices);
}

/// Vertex joiner constructs a single vertex which is the average
/// of the values in all the given vertices.
class VertexJoiner extends VertexMerger {

  /// Merges all the given vertices into an average vertices.
  Vertex? merge(List<Vertex> vertices) {
    int divLoc = 0;
    Math.Point3? avgLoc = null;
    Math.Vector3? avgNorm = null;
    Math.Vector3? avgBinm = null;
    int divClr = 0;
    Math.Vector4? avgClr = null;
    int divTxt2D = 0;
    Math.Point2? avgTxt2D = null;
    int divTxtCube = 0;
    Math.Vector3? avgTxtCube = null;
    int divWeight = 0;
    double avgWeight = 0.0;

    for (Vertex ver in vertices) {
      Math.Point3? loc = ver.location;
      if (loc != null) {
        if (avgLoc == null) avgLoc = loc;
        else avgLoc += loc;
        divLoc++;
      }

      Math.Vector3? norm = ver.normal;
      if (norm != null) {
        if (avgNorm == null) avgNorm = norm;
        else avgNorm += norm;
      }

      Math.Vector3? binm = ver.binormal;
      if (binm != null) {
        if (avgBinm == null) avgBinm = binm;
        else avgBinm += binm;
      }

      Math.Point2? txt2D = ver.texture2D;
      if (txt2D != null) {
        if (avgTxt2D == null) avgTxt2D = txt2D;
        else avgTxt2D += txt2D;
        divTxt2D++;
      }
      
      Math.Vector3? txtCube = ver.textureCube;
      if (txtCube != null) {
        if (avgTxtCube == null) avgTxtCube = txtCube;
        else avgTxtCube += txtCube;
        divTxtCube++;
      }

      Math.Color4? clr = ver.color;
      if (clr != null) {
        if (avgClr == null)
          avgClr = new Math.Vector4.fromList(clr.toList());
        else avgClr += new Math.Vector4.fromList(clr.toList());
        divClr++;
      }
      avgWeight += ver.weight;
      divWeight++;
    }

    Vertex argVer = new Vertex();
    if ((divLoc <= 0) || (avgLoc == null)) argVer.location = null;
    else argVer.location = avgLoc/divLoc.toDouble();
    
    if (avgNorm == null) argVer.normal = null;
    else argVer.normal = avgNorm.normal();

    if (avgBinm == null) argVer.binormal = null;
    else argVer.binormal = avgBinm.normal();

    if ((divTxt2D <= 0) || (avgTxt2D == null)) argVer.texture2D = null;
    else argVer.texture2D = avgTxt2D / divTxt2D.toDouble();

    if ((divTxtCube <= 0) || (avgTxtCube == null)) argVer.textureCube = null;
    else argVer.textureCube = avgTxtCube / divTxtCube.toDouble();

    if ((divClr <= 0) || (avgClr == null)) argVer.color = null;
    else argVer.color = new Math.Color4.fromList((avgClr / divClr.toDouble()).toList());

    if (divWeight <= 0) argVer.weight = 0.0;
    else argVer.weight = avgWeight / divWeight.toDouble();
    
    return argVer;
  }
}

/// Adjusts all the vertices so they have the same averaged normal.
class NormalAdjuster extends VertexMerger {

  /// Returns null and updates the normal of all
  /// the [vertices] to the average of all the normals.
  Vertex? merge(List<Vertex> vertices) {
    Math.Vector3 avgNorm = Math.Vector3.zero;
    for (Vertex ver in vertices) {
      Math.Vector3? norm = ver.normal;
      if (norm != null) avgNorm += norm;
    }
    avgNorm = avgNorm.normal();
    for (Vertex ver in vertices) {
      ver.normal = avgNorm;
    }
    return null;
  }
}

/// Adjusts all the vertices so they have the same averaged binormal.
class BinormalAdjuster extends VertexMerger {

  /// Returns null and updates the binormal of all
  /// the [vertices] to the average of all the binormals.
  Vertex? merge(List<Vertex> vertices) {
    Math.Vector3 avgBinorm = Math.Vector3.zero;
    for (Vertex ver in vertices) {
      Math.Vector3? binm = ver.binormal;
      if (binm != null) avgBinorm += binm;
    }
    avgBinorm = avgBinorm.normal();
    for (Vertex ver in vertices) ver.binormal = avgBinorm;
    return null;
  }
}
