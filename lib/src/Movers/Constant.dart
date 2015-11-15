part of ThreeDart.Movers;

class Constant extends Mover {

  Math.Matrix4 _mat;

  Constant([Math.Matrix4 mat = null]) {
    this.matrix = mat;
  }

  Math.Matrix4 get matrix => _mat;
  set matrix(Math.Matrix4 mat) => _mat = (mat == null)? new Math.Matrix4.identity(): mat;

  Math.Matrix4 update(Core.RenderState state, Movable obj) {
    return _mat;
  }
}
