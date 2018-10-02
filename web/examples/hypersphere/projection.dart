part of hypersphere;

class Projection {
  Movers.Group _userMover;
  ThreeDart.Entity _proj;
  ThreeDart.Entity _cube;
  ThreeDart.Entity _sphere;
  Movers.Constant _sphereScalar;
  Techniques.Inspection _tech;

  Projection(ThreeDart.ThreeDart td) {
   this._tech = new Techniques.Inspection()
      ..showWireFrame = true
      ..diffuse1 = new Math.Color4(0.4, 0.6, 0.8, 0.2)
      ..ambient1 = new Math.Color4(0.2, 0.4, 0.6, 0.2);

    this._userMover = new Movers.Group()
      ..add(new Movers.UserRotater(input: td.userInput, invertY: true))
      ..add(new Movers.UserRoller(input: td.userInput, ctrl: true))
      ..add(new Movers.UserZoom(input: td.userInput));

    this._cube = new ThreeDart.Entity()
      ..shape = Shapes.cube();
  
    this._sphereScalar = new Movers.Constant();

    this._sphere = new ThreeDart.Entity()
      ..shape = Shapes.isosphere(2)
      ..mover = this._sphereScalar;
        
    this._proj = new ThreeDart.Entity()
      ..children.add(this._cube)
      ..children.add(this._sphere)
      ..technique = this._tech
      ..mover = this._userMover;
  }
  
  ThreeDart.Entity get entity => this._proj;

  void setWOffset(double wOffset) {
    if ((wOffset <= 0.0) || (wOffset >= Math.PI)) {
      this._proj.enabled = false;
    } else {
      double r = sin(wOffset);
      this._sphereScalar.matrix = new Math.Matrix4.scale(r, r, r);
      this._proj.enabled = true;
    }
  }
}
