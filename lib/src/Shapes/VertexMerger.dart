part of ThreeDart.Shapes;

/// A merger for joining or manipulating vertices.
abstract class VertexMerger {

  /// Merges the given vertices into one vertex and returns it.
  /// Or null can be returned and the list of vertices can have thier values updated.
  Vertex merge(List<Vertex> vertices);
}

/// Vertex joiner constructs a single vertex which is the average
/// of the values in all the given vertices.
class VertexJoiner extends VertexMerger {

  /// Merges all the given vertices into an average vertices.
  Vertex merge(List<Vertex> vertices) {
    int divLoc = 0;
    Math.Point3 avgLoc = null;
    Math.Vector3 avgNorm = null;
    Math.Vector3 avgBinm = null;
    int divClr = 0;
    Math.Vector4 avgClr = null;
    int divTxt = 0;
    Math.Point2 avgTxt = null;
    int divWeight = 0;
    double avgWeight = 0.0;

    for (Vertex ver in vertices) {
      if (ver.location != null) {
        if (avgLoc == null) {
          avgLoc = ver.location;
        } else {
          avgLoc += ver.location;
        }
        divLoc++;
      }
      if (ver.normal != null) {
        if (avgNorm == null) {
          avgNorm = ver.normal;
        } else {
          avgNorm += ver.normal;
        }
      }
      if (ver.binormal != null) {
        if (avgBinm == null) {
          avgBinm = ver.binormal;
        } else {
          avgBinm += ver.binormal;
        }
      }
      if (ver.texture != null) {
        if (avgTxt == null) {
          avgTxt = ver.texture;
        } else {
          avgTxt += ver.texture;
        }
        divTxt++;
      }
      if (ver.color != null) {
        if (avgClr == null) {
          avgClr = new Math.Vector4.fromList(ver.color.toList());
        } else {
          avgClr += new Math.Vector4.fromList(ver.color.toList());
        }
        divClr++;
      }
      avgWeight += ver.weight;
      divWeight++;
    }

    Vertex argVer = new Vertex();
    if ((divLoc <= 0) || (avgLoc == null)) {
      argVer.location = null;
    } else {
      argVer.location = avgLoc/divLoc.toDouble();
    }
    if (avgNorm == null) {
      argVer.normal = null;
    } else {
      argVer.normal = avgNorm.normal();
    }
    if (avgBinm == null) {
      argVer.binormal = null;
    } else {
      argVer.binormal = avgBinm.normal();
    }
    if ((divTxt <= 0) || (avgTxt == null)) {
      argVer.texture = null;
    } else {
      argVer.texture = avgTxt / divTxt.toDouble();
    }
    if ((divClr <= 0) || (avgClr == null)) {
      argVer.color = null;
    } else {
      argVer.color = new Math.Color4.fromList((avgClr / divClr.toDouble()).toList());
    }
    if (divWeight <= 0) {
      argVer.weight = 0.0;
    } else {
      argVer.weight = avgWeight / divWeight.toDouble();
    }
    return argVer;
  }
}

/// Adjustes all the vertices so they have the same averaged normal.
class NormalAdjuster extends VertexMerger {

  /// Returns null and updates the normal of all
  /// the [vertices] to the average of all the normals.
  Vertex merge(List<Vertex> vertices) {
    Math.Vector3 avgNorm = new Math.Vector3.zero();
    for (Vertex ver in vertices) {
      if (ver.normal != null) {
        avgNorm += ver.normal;
      }
    }
    avgNorm = avgNorm.normal();
    for (Vertex ver in vertices) {
      ver.normal = avgNorm;
    }
    return null;
  }
}

/// Adjustes all the vertices so they have the same averaged binormal.
class BinormalAdjuster extends VertexMerger {

  /// Returns null and updates the binormal of all
  /// the [vertices] to the average of all the binormals.
  Vertex merge(List<Vertex> vertices) {
    Math.Vector3 avgBinorm = new Math.Vector3.zero();
    for (Vertex ver in vertices) {
      if (ver.binormal != null) {
        avgBinorm += ver.binormal;
      }
    }
    avgBinorm = avgBinorm.normal();
    for (Vertex ver in vertices) {
      ver.binormal = avgBinorm;
    }
    return null;
  }
}
