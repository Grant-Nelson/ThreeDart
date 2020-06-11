part of ThreeDart.Techniques;

/// A technique for debugging entities with by writing strings to a buffer
/// which can be compared against instead of rendering to the target.
class Debugger extends Technique {

  /// Buffer to write output to, or null not to output.
  StringBuffer _buf;

  /// The list of resulting points from a render.
  List<Math.Point3> _results;

  /// An event to indicate when this technique has been changed.
  Events.Event _changed;

  /// Creates a new debugging technique.
  Debugger([StringBuffer this._buf = null]) {
    this._results = new List<Math.Point3>();
    this._changed = null;
  }

  /// The list of resulting points from a render.
  List<Math.Point3> get results => this._results;

  /// Since there are no setting, this is currently never emitted.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }

  /// Updates this technique for the given state.
  void update(Core.RenderState state) {
    // Do Nothing
  }

  /// Renders this technique for the given state and entity.
  void render(Core.RenderState state, Core.Entity obj) {
    Math.Matrix4 projMat = state.projection.matrix;
    Math.Matrix4 viewMat = state.view.matrix;
    Math.Matrix4 objMat  = state.object.matrix;

    if (this._buf != null) {
      this._buf.write("Object:     "+objMat.format("            ")+"\n\n");
      this._buf.write("View:       "+viewMat.format("            ")+"\n\n");
      this._buf.write("Projection: "+projMat.format("            ")+"\n\n");
    }

    this._results.clear();
    if (obj.shape != null) {
      obj.shape.vertices.forEach((Shapes.Vertex vertex) {
        Math.Point3 pnt0 = vertex.location;
        Math.Point4 pnt1 = new Math.Point4.fromPoint3(pnt0, 1.0);
        Math.Point4 pnt2 = objMat.transPnt4(pnt1);
        Math.Point4 pnt3 = viewMat.transPnt4(pnt2);
        Math.Point4 pnt4 = projMat.transPnt4(pnt3);
        Math.Point3 pnt5 = new Math.Point3.fromPoint4(pnt4)/pnt4.w;

        if (this._buf != null) {
          this._buf.write(pnt1.format(3, 2) + " => " +
                          pnt2.format(3, 2) + " => " +
                          pnt3.format(3, 2) + " => " +
                          pnt4.format(3, 2) + " => " +
                          pnt5.format(3, 2) + "\n");
        }

        this._results.add(pnt5);
      });
    }
  }
}
