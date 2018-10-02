part of hypersphere;

class Projection {
  Movers.Group _userMover;
  Scenes.EntityPass _pass;
  ThreeDart.Entity _cube;
  ThreeDart.Entity _sphere;
  Movers.Constant _sphereScalar;
  Techniques.Inspection _tech;
  Views.Perspective _userCamera;

  Projection(ThreeDart.ThreeDart td) {
   this._tech = new Techniques.Inspection()
      ..showWireFrame = true
      ..showFilled = true
      ..diffuse1 = new Math.Color4(0.2, 0.3, 0.4, 0.2)
      ..ambient1 = new Math.Color4(0.1, 0.2, 0.3, 0.2);

    this._userMover = new Movers.Group()
      ..add(new Movers.UserRotater(input: td.userInput, invertY: true))
      ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
      ..add(new Movers.UserZoom(input: td.userInput));

    this._cube = new ThreeDart.Entity()
      ..shape = Shapes.cube()
      ..mover = this._userMover;

    this._sphereScalar = new Movers.Constant();

    this._sphere = new ThreeDart.Entity()
      ..shape = Shapes.isosphere(2)
      ..mover = (new Movers.Group()
        ..add(this._sphereScalar)
        ..add(this._userMover));

    this._userCamera = new Views.Perspective()
      ..premover = new Movers.Constant.translate(0.5, 0.0, 0.0)
      ..mover = new Movers.Constant.translate(0.0, 0.0, 5.0);

    this._pass = new Scenes.EntityPass()
      ..camera = this._userCamera
      ..technique = this._tech
      ..children.add(this._sphere)
      ..children.add(this._cube);
  }

  Scenes.EntityPass get pass => this._pass;

  void setWOffset(double wOffset) {
    if ((wOffset <= 0.0) || (wOffset >= 1.0)) {
      this._cube.enabled = false;
      this._sphere.enabled = false;
    } else {
      double r = sin(wOffset*Math.PI);
      this._sphereScalar.matrix = new Math.Matrix4.scale(r, r, r);
      this._cube.enabled = true;
      this._sphere.enabled = true;
    }
  }
}
