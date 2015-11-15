part of ThreeDart.Shapes;

abstract class VertexMerger {
  Vertex merge(List<Vertex> vertices);
}

class VertexJoiner extends VertexMerger {
  Vertex merge(List<Vertex> vertices) {
    int divLoc = 0;
    Math.Point3 avgLoc = null;
    Math.Vector3 avgNorm = null;
    Math.Vector3 avgBinm = null;
    int divTxt = 0;
    Math.Point2 avgTxt = null;

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
    return argVer;
  }
}

class NormalAdjuster extends VertexMerger {
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
