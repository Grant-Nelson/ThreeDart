library ThreeDart.test.test038;

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Collisions.dart' as Collisions;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Input.dart' as Input;
import 'package:ThreeDart/Events.dart' as Events;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Scenes.dart' as Scenes;

import '../../common/common.dart' as common;

class Ball extends ThreeDart.Entity {
  static Math.Vector3 gravity;
  static Shapes.Shape ballShape;
  static const double dampening = 0.8;
  static const double terminalVelocity = 10.0;

  Movers.Constant ballMover;
  Math.Point3 position;
  Math.Vector3 velocity;
  bool active;

  Ball() {
    gravity ??= new Math.Vector3(0.0, -9.8, 0.0);
    ballShape ??= Shapes.sphere(radius: 1.0, widthDiv: 5, heightDiv: 5);
    this.shape = ballShape;
    this.ballMover = new Movers.Constant();
    this.mover = this.ballMover;
    this.position = Math.Point3.zero;
    this.velocity = Math.Vector3.zero;
    this.active = true;
  }
}

ThreeDart.Entity createFloor(ThreeDart.ThreeDart td) {
  Textures.Texture2D floorTxt =
    td.textureLoader.load2DFromFile("../resources/Grass.png", wrapEdges: true, mipMap: true);

  Movers.Mover floorMover =
    new Movers.Constant(
      new Math.Matrix4.translate(0.0, -3.0, 0.0)*
      new Math.Matrix4.scale(1000.0, 1.0, 1000.0)*
      new Math.Matrix4.rotateX(-Math.PI_2));

  Techniques.MaterialLight tech =
    new Techniques.MaterialLight()
      ..texture2DMatrix = new Math.Matrix3.scale(1000.0, 1000.0, 1.0)
      ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(1.0, -3.0, -1.0),
          color: new Math.Color3.white()))
      ..ambient.color = new Math.Color3(0.5, 0.5, 0.5)
      ..diffuse.color = new Math.Color3(0.5, 0.5, 0.5)
      ..ambient.texture2D = floorTxt
      ..diffuse.texture2D = floorTxt;

  return new ThreeDart.Entity()
    ..shape = Shapes.grid(widthDiv: 20, heightDiv: 20)
    ..mover = floorMover
    ..technique = tech;
}

class Collider extends Movers.Mover {
  Events.Event _changed;
  List<Ball> balls;
  Math.Plane plane;

  List<Collisions.SpherePlaneResult> _spColResults;
  List<Ball> _spColBalls;
  List<Collisions.TwoSphereResult> _ssColResults;
  List<Ball> _ssColBalls1;
  List<Ball> _ssColBalls2;
  List<int> _ballsHandled;

  Collider() {
    this.balls = new List<Ball>();
    this.plane = new Math.Plane(0.0, 1.0, 0.0, -3.0);

    this._spColResults = new List<Collisions.SpherePlaneResult>();
    this._spColBalls = new List<Ball>();
    this._ssColResults = new List<Collisions.TwoSphereResult>();
    this._ssColBalls1 = new List<Ball>();
    this._ssColBalls2 = new List<Ball>();
    this._ballsHandled = new List<int>();
  }

  void clearCollisions() {
    this._spColResults.clear();
    this._spColBalls.clear();
    this._ssColResults.clear();
    this._ssColBalls1.clear();
    this._ssColBalls2.clear();
    this._ballsHandled.clear();
  }
  
  double closestCollisions(double dt) {
    double minDT = dt;
    this.clearCollisions();
    final int length = this.balls.length;
    List<Math.Sphere> spheres = new List<Math.Sphere>();
    List<Math.Vector3> vecs = new List<Math.Vector3>();
    for (int i = 0; i < length; i++) {
      Ball ballA = this.balls[i];
      Math.Matrix4 mat = ballA.ballMover.matrix;
      Math.Sphere sphereA = new Math.Sphere(mat.m41, mat.m42, mat.m43, 1.0);
      Math.Vector3 vecA = ballA.velocity * dt;
      spheres.add(sphereA);
      vecs.add(vecA);

      if (ballA.active) {
        Collisions.SpherePlaneResult result1 = Collisions.spherePlane(sphereA, this.plane, vecA);
        if (result1.collided) {
          double newDT = result1.parametric * dt;
          if (Math.Comparer.lessThanEquals(newDT, minDT)) {
            if (Math.Comparer.notEquals(newDT, minDT)) {
              this.clearCollisions();
              minDT = newDT;
            }
            this._spColResults.add(result1);
            this._spColBalls.add(ballA);
            if (!this._ballsHandled.contains(i)) this._ballsHandled.add(i);
          }
        }
      }

      for (int j = i-1; j >= 0; j--) {
        Ball ballB = this.balls[j];
        if (ballA.active || ballB.active) {
          Math.Sphere sphereB = spheres[j];
          Math.Vector3 vecB = vecs[j];

          Collisions.TwoSphereResult result2 = Collisions.twoSphere(sphereA, sphereB, vecA, vecB);
          if (result2.collided) {
            print("Result: $result2"); // TODO: REMOVE
            double newDT = result2.parametric * dt;
            if (Math.Comparer.lessThanEquals(newDT, minDT)) {
              if (Math.Comparer.notEquals(newDT, minDT)) {
                this.clearCollisions();
                minDT = newDT;
              }
              this._ssColResults.add(result2);
              this._ssColBalls1.add(ballA);
              this._ssColBalls2.add(ballB);
              if (!this._ballsHandled.contains(i)) this._ballsHandled.add(i);
              if (!this._ballsHandled.contains(j)) this._ballsHandled.add(j);
            }
          }
        }
      }
    }
    return minDT;
  }

  void updateForCollision(double dt) {
    Math.Vector3 pNorm = this.plane.normal.normal();
    for (int i = this._spColResults.length-1; i >= 0; i--) {
      Collisions.SpherePlaneResult col = this._spColResults[i];
      Ball ball = this._spColBalls[i];
      ball.position = col.center;
      ball.velocity -= pNorm * (pNorm.dot(ball.velocity) * 2.0 * Ball.dampening);
      ball.active = !ball.velocity.isZero();
    }

    for (int i = this._ssColResults.length-1; i >= 0; i--) {
      Collisions.TwoSphereResult col = this._ssColResults[i];
      Ball ballA = this._ssColBalls1[i];
      Ball ballB = this._ssColBalls2[i];
      ballA.position = col.centerA;
      ballB.position = col.centerB;
      Math.Vector3 bNorm = ballA.position.vectorTo(ballB.position);
      ballA.velocity -= bNorm * (bNorm.dot(ballA.velocity) * 2.0 * Ball.dampening);
      ballB.velocity -= bNorm * (bNorm.dot(ballB.velocity) * 2.0 * Ball.dampening);
      ballA.active = !ballA.velocity.isZero();
      ballB.active = !ballB.velocity.isZero();
    }

    for (int i = this.balls.length-1; i >= 0; i--) {
      Ball ball = this.balls[i];
      if (!this._ballsHandled.contains(i))
        ball.position = ball.position.offset(ball.velocity * dt);
      if (ball.active)
        ball.velocity += Ball.gravity * dt;
      if (ball.velocity.length() > Ball.terminalVelocity)
        ball.velocity = ball.velocity.normal() * Ball.terminalVelocity;
      ball.ballMover.matrix = Math.Matrix4.translate(ball.position.x, ball.position.y, ball.position.z);
    }
  }

  Math.Matrix4 update(ThreeDart.RenderState state, Movers.Movable obj) {
    double dt = state.dt;
    int countDown = 20;
    while (Math.Comparer.greaterThan(dt, 0.0) && (countDown > 0)) {
      double minDT = this.closestCollisions(dt);
      this.updateForCollision(minDT);
      dt -= minDT;
      countDown--;
    }

    // The collider doesn't move so just return the identity.
    return Math.Matrix4.identity;
  }

  /// Emits when the mover has changed.
  Events.Event get changed {
    this._changed ??= new Events.Event();
    return this._changed;
  }
}

void main() {
  new common.ShellPage("Test 049")
    ..addLargeCanvas("testCanvas")
    ..addPar([""])
    ..addControlBoxes(["options"])
    ..addPar(["«[Back to Tests|../]"]);

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("testCanvas");

  ThreeDart.Entity group = new ThreeDart.Entity()
    ..children.add(createFloor(td));
  
  Textures.TextureCube color = td.textureLoader.loadCubeFromPath("../resources/earthColor");
  Techniques.MaterialLight ballTech = new Techniques.MaterialLight()
    ..lights.add(new Lights.Directional(
          mover: new Movers.Constant.vectorTowards(-1.0, -1.0, -1.0),
          color: new Math.Color3.white()))
    ..ambient.color = new Math.Color3(0.5, 0.5, 0.5)
    ..diffuse.color = new Math.Color3(0.5, 0.5, 0.5)
    ..ambient.textureCube = color
    ..diffuse.textureCube = color
    ..specular.shininess= 10.0;
  Collider collider = new Collider();
  ThreeDart.Entity balls = new ThreeDart.Entity()
    ..mover = collider
    ..technique = ballTech;

  // Setup the First person camera
  Movers.UserTranslator trans = new Movers.UserTranslator(input: td.userInput);
  Movers.UserRotator rot = new Movers.UserRotator.flat(input: td.userInput);
  rot.changed.add((Events.EventArgs args) {
    trans.velocityRotation = new Math.Matrix3.rotateY(-rot.yaw.location);
  });
  Movers.Group camera = new Movers.Group([trans, rot]);

  td.scene = new Scenes.EntityPass()
    ..children.add(group)
    ..children.add(balls)
    ..camera.mover = camera;
  
  td.userInput.key.down.add((Events.EventArgs args) {
    Input.KeyEventArgs kargs = args as Input.KeyEventArgs;
    if (kargs.key.code == Input.Key.spacebar) {
      Ball ball = new Ball();
      balls.children.add(ball);
      collider.balls.add(ball);
    }
  });

  new common.CheckGroup("options")
    ..add("Mouse Locking", (bool enable) { td.userInput.lockOnClick = enable; }, false);

  common.showFPS(td);
}
