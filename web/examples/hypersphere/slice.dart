part of hypersphere;

class Slice {
  Movers.Group _userMover;
  Scenes.EntityPass _pass;
  ThreeDart.Entity _cube;
  ThreeDart.Entity _slice;
  Movers.Constant _sliceMover;
  Techniques.Inspection _cubeTech;
  Techniques.Inspection _sliceTech;
  Views.Perspective _userCamera;

  Slice(ThreeDart.ThreeDart td) {
   this._cubeTech = new Techniques.Inspection()
      ..showWireFrame = true
      //..showFilled = true
      ..diffuse1 = new Math.Color4(0.4, 0.6, 0.8, 0.2)
      ..ambient1 = new Math.Color4(0.2, 0.4, 0.6, 0.2);
      
   this._sliceTech = new Techniques.Inspection()
      ..showWireFrame = true
      ..showFilled = true
      ..diffuse1 = new Math.Color4(0.8, 0.6, 0.4, 0.2)
      ..ambient1 = new Math.Color4(0.6, 0.4, 0.2, 0.2)
      ..diffuse2 = new Math.Color4(0.7, 0.0, 0.0)
      ..ambient2 = new Math.Color4(0.3, 0.0, 0.0);

    this._sliceMover = new Movers.Constant();

    this._userMover = new Movers.Group()
      ..add(new Movers.Constant.rotateX(0.4))
      ..add(new Movers.Constant.rotateY(0.4));

    this._cube = new ThreeDart.Entity()
      ..technique = this._cubeTech
      ..shape = (Shapes.cube()
        ..merge(Shapes.cube()..applyPositionMatrix(new Math.Matrix4.scale(0.5, 0.5, 0.5))))
      ..mover = this._userMover;
      
    this._slice = new ThreeDart.Entity()
      ..technique = this._sliceTech 
      ..shape = Shapes.square()
      ..mover = (new Movers.Group()
        ..add(new Movers.Constant.scale(1.1, 1.1, 1.1))
        ..add(new Movers.Constant.rotateX(-Math.PI_2))
        ..add(this._sliceMover)
        ..add(this._userMover));

    this._userCamera = new Views.Perspective()
      ..premover = new Movers.Constant.translate(-0.5, 0.0, 0.0)
      ..mover = new Movers.Constant.translate(0.0, 0.0, 5.0);

    Views.FrontTarget frontTarget = new Views.FrontTarget(clearColor: false);

    this._pass = new Scenes.EntityPass()
      ..target = frontTarget
      ..camera = this._userCamera
      ..children.add(this._cube)
      ..children.add(this._slice);
  }

  Scenes.EntityPass get pass => this._pass;

  void setWOffset(double wOffset) {
    this._sliceMover.matrix = new Math.Matrix4.translate(0.0, 1.0-2.0*wOffset, 0.0);
  }
}
