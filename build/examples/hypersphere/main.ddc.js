define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Math/Color3', 'packages/ThreeDart/src/Events/Changable', 'packages/ThreeDart/src/Input/Button'], function(dart_sdk, checkGroup, Bindable, Color3, Changable, Button) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Shapes__Shapes = Bindable.src__Shapes__Shapes;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Views__Views = Bindable.src__Views__Views;
  const src__Math__Math = Color3.src__Math__Math;
  const src__Events__Events = Changable.src__Events__Events;
  const src__Input__Input = Button.src__Input__Input;
  const _root = Object.create(null);
  const examples__hypersphere__main = Object.create(_root);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  let JSArrayOfScene = () => (JSArrayOfScene = dart.constFn(_interceptors.JSArray$(src__Scenes__Scenes.Scene)))();
  let JSArrayOfVertex = () => (JSArrayOfVertex = dart.constFn(_interceptors.JSArray$(src__Shapes__Shapes.Vertex)))();
  examples__hypersphere__main.main = function() {
    let _ = new common__common.ShellPage.new("Hypersphere");
    _.addPar(JSArrayOfString().of(["This is a simple example to help demonstrate why a hypersphere takes up ", "so little space of the hypercube."]));
    _.addHeader(3, "2D: circle and square");
    _.addPar(JSArrayOfString().of(["Imagine taking slices out of a circle inscribed in a square. Each slice is ", "two lines, one from the circle and one from the square. When the slices ", "are near the top, the line caused by the circle is small compared to the square. ", "The corners of the square aren't covered by the circle."]));
    _.addLargeCanvas("target2D");
    _.addPar(JSArrayOfString().of(["_Click and drag to move the location of the slice._"]));
    _.addHeader(3, "3D: sphere and cube");
    _.addPar(JSArrayOfString().of(["Now imagine taking slices out of a sphere inscribed in a cube. Each slice is ", "a circle inside a square. When the slice is in the middle, the circle touches ", "the sides of the square. When the slice is near a side, the circle is almost a ", "point but the square is still the same size. That is a lot of extra space for ", "for the square not used by the circle."]));
    _.addLargeCanvas("target3D");
    _.addPar(JSArrayOfString().of(["_Click and drag to move the location of the slice._"]));
    _.addHeader(3, "4D: hypersphere and hypercube");
    _.addPar(JSArrayOfString().of(["Now imagine taking a slice out of a hypersphere inscribed in a hypercube. ", "Each slice is a sphere and a cube (as shown in the graphics below). ", "When the slice is near the edges, the sphere is a small point in the middle ", "of a cube. As the slice moves down the sphere gets bigger until it touches all ", "the sides of the cube, then it shrinks again. Once again, that's a lot of ", "space in the cube not filled by the sphere."]));
    _.addLargeCanvas("target4D");
    _.addPar(JSArrayOfString().of(["_The shape on the left is an artistic representation of a 4D hypercube._ ", "_Click and drag on the left to move the location of the slice._", "_Click and drag on the right to rotate the resulting 3D slice._"]));
    _.addPar(JSArrayOfString().of(["With each new dimension the hypersphere is small near the edges and only touching ", "the sides of the hypersphere in the very middle."]));
    _.addPar(JSArrayOfString().of(["«[Back to Examples|../]"]));
    examples__hypersphere__main.startup2D("target2D");
    examples__hypersphere__main.startup3D("target3D");
    examples__hypersphere__main.startup4D("target4D");
  };
  examples__hypersphere__main.startup2D = function(targetName) {
    let td = src__Core__Core.ThreeDart.fromId(targetName);
    let squareTech = new src__Techniques__Techniques.MaterialLight.new();
    squareTech.emission.color = src__Math__Math.Color3.new(0.4, 0.6, 0.8);
    let sliceTech = new src__Techniques__Techniques.MaterialLight.new();
    sliceTech.emission.color = src__Math__Math.Color3.new(0.8, 0.6, 0.4);
    sliceTech.alpha.value = 0.3;
    let projTech = new src__Techniques__Techniques.MaterialLight.new();
    projTech.emission.color = src__Math__Math.Color3.new(0.4, 0.6, 0.8);
    projTech.alpha.value = 0.3;
    let sliceMover = new src__Movers__Movers.Constant.new();
    let sphereScalar = new src__Movers__Movers.Constant.new();
    let squareCircle = new src__Core__Core.Entity.new();
    squareCircle.technique = squareTech;
    squareCircle.shape = (() => {
      let _ = new src__Shapes__Shapes.Shape.new();
      _.merge(src__Shapes__Shapes.square({frameOnly: true}));
      _.merge(src__Shapes__Shapes.disk({sides: 36, frameOnly: true}));
      return _;
    })();
    let slice = new src__Core__Core.Entity.new();
    slice.technique = sliceTech;
    slice.shape = src__Shapes__Shapes.line();
    slice.mover = (() => {
      let _ = new src__Movers__Movers.Group.new();
      _.add(src__Movers__Movers.Constant.scale(1.3, 1.3, 1.3));
      _.add(src__Movers__Movers.Constant.rotateX(-1.5707963267948966));
      _.add(sliceMover);
      return _;
    })();
    let squareLine = new src__Core__Core.Entity.new();
    squareLine.shape = src__Shapes__Shapes.line();
    squareLine.mover = (() => {
      let _ = new src__Movers__Movers.Group.new();
      _.add(src__Movers__Movers.Constant.translate(0.0, 0.0, 0.1));
      return _;
    })();
    let circleLine = new src__Core__Core.Entity.new();
    circleLine.shape = src__Shapes__Shapes.line();
    circleLine.mover = (() => {
      let _ = new src__Movers__Movers.Group.new();
      _.add(sphereScalar);
      return _;
    })();
    let slicePass = new src__Scenes__Scenes.EntityPass.new();
    slicePass.target = new src__Views__Views.FrontTarget.new({clearColor: false});
    slicePass.camera = (() => {
      let _ = new src__Views__Views.Perspective.new();
      _.premover = src__Movers__Movers.Constant.translate(-0.5, 0.0, 0.0);
      _.mover = src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0);
      return _;
    })();
    slicePass.children.add(slice);
    slicePass.children.add(squareCircle);
    let projPass = new src__Scenes__Scenes.EntityPass.new();
    projPass.camera = (() => {
      let _ = new src__Views__Views.Perspective.new();
      _.premover = src__Movers__Movers.Constant.translate(0.5, 0.0, 0.0);
      _.mover = src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0);
      return _;
    })();
    projPass.technique = projTech;
    projPass.children.add(circleLine);
    projPass.children.add(squareLine);
    let wOffset = 0.5;
    let startInside = false;
    td.userInput.mouse.down.add(dart.fn(_ => {
      startInside = true;
    }, EventArgsToNull()));
    td.userInput.mouse.up.add(dart.fn(_ => {
      startInside = false;
    }, EventArgsToNull()));
    td.userInput.mouse.move.add(dart.fn(e => {
      let ms = src__Input__Input.MouseEventArgs.as(e);
      if (!startInside) return;
      wOffset = dart.notNull(wOffset) + dart.notNull(ms.adjustedDelta.dy);
      wOffset = src__Math__Math.clampVal(wOffset, -0.1, 1.1);
      sliceMover.matrix = src__Math__Math.Matrix4.translate(0.0, 1.0 - 2.0 * dart.notNull(wOffset), 0.0);
      if (dart.notNull(wOffset) <= 0.0 || dart.notNull(wOffset) >= 1.0) {
        squareLine.enabled = false;
        circleLine.enabled = false;
      } else {
        let r = math.sin(dart.notNull(wOffset) * 3.141592653589793);
        sphereScalar.matrix = src__Math__Math.Matrix4.scale(r, r, r);
        squareLine.enabled = true;
        circleLine.enabled = true;
      }
    }, EventArgsToNull()));
    td.scene = new src__Scenes__Scenes.Compound.new({passes: JSArrayOfScene().of([projPass, slicePass])});
  };
  examples__hypersphere__main.startup3D = function(targetName) {
    let td = src__Core__Core.ThreeDart.fromId(targetName);
    let cubeTech = new src__Techniques__Techniques.Inspection.new();
    cubeTech.showWireFrame = true;
    cubeTech.showFilled = true;
    cubeTech.diffuse1 = src__Math__Math.Color4.new(0.2, 0.3, 0.4, 0.2);
    cubeTech.ambient1 = src__Math__Math.Color4.new(0.1, 0.2, 0.3, 0.2);
    let sliceTech = new src__Techniques__Techniques.MaterialLight.new();
    sliceTech.emission.color = src__Math__Math.Color3.new(0.8, 0.6, 0.4);
    sliceTech.alpha.value = 0.3;
    let projTech = new src__Techniques__Techniques.MaterialLight.new();
    projTech.emission.color = src__Math__Math.Color3.new(0.4, 0.6, 0.8);
    let sliceMover = new src__Movers__Movers.Constant.new();
    let sphereScalar = new src__Movers__Movers.Constant.new();
    let sliceRotation = new src__Movers__Movers.Group.new();
    sliceRotation.add(src__Movers__Movers.Constant.rotateX(0.4));
    sliceRotation.add(src__Movers__Movers.Constant.rotateY(0.4));
    let cubeSphere = new src__Core__Core.Entity.new();
    cubeSphere.technique = cubeTech;
    cubeSphere.shape = (() => {
      let _ = new src__Shapes__Shapes.Shape.new();
      _.merge(src__Shapes__Shapes.cube());
      _.merge(src__Shapes__Shapes.isosphere(2));
      return _;
    })();
    cubeSphere.mover = sliceRotation;
    let slice = new src__Core__Core.Entity.new();
    slice.technique = sliceTech;
    slice.shape = src__Shapes__Shapes.square();
    slice.mover = (() => {
      let _ = new src__Movers__Movers.Group.new();
      _.add(src__Movers__Movers.Constant.scale(1.3, 1.3, 1.3));
      _.add(src__Movers__Movers.Constant.rotateX(-1.5707963267948966));
      _.add(sliceMover);
      _.add(sliceRotation);
      return _;
    })();
    let square = new src__Core__Core.Entity.new();
    square.shape = src__Shapes__Shapes.square({frameOnly: true});
    let circle = new src__Core__Core.Entity.new();
    circle.shape = src__Shapes__Shapes.disk({sides: 36, frameOnly: true});
    circle.mover = (() => {
      let _ = new src__Movers__Movers.Group.new();
      _.add(sphereScalar);
      return _;
    })();
    let slicePass = new src__Scenes__Scenes.EntityPass.new();
    slicePass.target = new src__Views__Views.FrontTarget.new({clearColor: false});
    slicePass.camera = (() => {
      let _ = new src__Views__Views.Perspective.new();
      _.premover = src__Movers__Movers.Constant.translate(-0.5, 0.0, 0.0);
      _.mover = src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0);
      return _;
    })();
    slicePass.children.add(slice);
    slicePass.children.add(cubeSphere);
    let projPass = new src__Scenes__Scenes.EntityPass.new();
    projPass.camera = (() => {
      let _ = new src__Views__Views.Perspective.new();
      _.premover = src__Movers__Movers.Constant.translate(0.5, 0.0, 0.0);
      _.mover = src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0);
      return _;
    })();
    projPass.technique = projTech;
    projPass.children.add(circle);
    projPass.children.add(square);
    let wOffset = 0.5;
    let startInside = false;
    td.userInput.mouse.down.add(dart.fn(_ => {
      startInside = true;
    }, EventArgsToNull()));
    td.userInput.mouse.up.add(dart.fn(_ => {
      startInside = false;
    }, EventArgsToNull()));
    td.userInput.mouse.move.add(dart.fn(e => {
      let ms = src__Input__Input.MouseEventArgs.as(e);
      if (!startInside) return;
      wOffset = dart.notNull(wOffset) + dart.notNull(ms.adjustedDelta.dy);
      wOffset = src__Math__Math.clampVal(wOffset, -0.1, 1.1);
      sliceMover.matrix = src__Math__Math.Matrix4.translate(0.0, 1.0 - 2.0 * dart.notNull(wOffset), 0.0);
      if (dart.notNull(wOffset) <= 0.0 || dart.notNull(wOffset) >= 1.0) {
        square.enabled = false;
        circle.enabled = false;
      } else {
        let r = math.sin(dart.notNull(wOffset) * 3.141592653589793);
        sphereScalar.matrix = src__Math__Math.Matrix4.scale(r, r, r);
        square.enabled = true;
        circle.enabled = true;
      }
    }, EventArgsToNull()));
    td.scene = new src__Scenes__Scenes.Compound.new({passes: JSArrayOfScene().of([projPass, slicePass])});
  };
  examples__hypersphere__main.startup4D = function(targetName) {
    let td = src__Core__Core.ThreeDart.fromId(targetName);
    let hypercubeTech = new src__Techniques__Techniques.MaterialLight.new();
    hypercubeTech.emission.color = src__Math__Math.Color3.new(0.4, 0.6, 0.8);
    let sliceTech = new src__Techniques__Techniques.MaterialLight.new();
    sliceTech.emission.color = src__Math__Math.Color3.new(0.8, 0.6, 0.4);
    sliceTech.alpha.value = 0.3;
    let projTech = new src__Techniques__Techniques.Inspection.new();
    projTech.showWireFrame = true;
    projTech.showFilled = true;
    projTech.diffuse1 = src__Math__Math.Color4.new(0.2, 0.3, 0.4, 0.2);
    projTech.ambient1 = src__Math__Math.Color4.new(0.1, 0.2, 0.3, 0.2);
    let sliceMover = new src__Movers__Movers.Constant.new();
    let sphereScalar = new src__Movers__Movers.Constant.new();
    let sliceRotation = new src__Movers__Movers.Group.new();
    sliceRotation.add(src__Movers__Movers.Constant.rotateX(0.4));
    sliceRotation.add(src__Movers__Movers.Constant.rotateY(0.4));
    let projUserMover = new src__Movers__Movers.Group.new();
    let shape = new src__Shapes__Shapes.Shape.new();
    let v1 = shape.vertices.addNewLoc(1.0, -1.0, 1.0);
    let v2 = shape.vertices.addNewLoc(1.0, 1.0, 1.0);
    let v3 = shape.vertices.addNewLoc(1.0, 1.0, -1.0);
    let v4 = shape.vertices.addNewLoc(1.0, -1.0, -1.0);
    let v5 = shape.vertices.addNewLoc(-1.0, -1.0, 1.0);
    let v6 = shape.vertices.addNewLoc(-1.0, 1.0, 1.0);
    let v7 = shape.vertices.addNewLoc(-1.0, 1.0, -1.0);
    let v8 = shape.vertices.addNewLoc(-1.0, -1.0, -1.0);
    let v9 = shape.vertices.addNewLoc(0.5, -0.5, 0.5);
    let v10 = shape.vertices.addNewLoc(0.5, 0.5, 0.5);
    let v11 = shape.vertices.addNewLoc(0.5, 0.5, -0.5);
    let v12 = shape.vertices.addNewLoc(0.5, -0.5, -0.5);
    let v13 = shape.vertices.addNewLoc(-0.5, -0.5, 0.5);
    let v14 = shape.vertices.addNewLoc(-0.5, 0.5, 0.5);
    let v15 = shape.vertices.addNewLoc(-0.5, 0.5, -0.5);
    let v16 = shape.vertices.addNewLoc(-0.5, -0.5, -0.5);
    shape.lines.addLines(JSArrayOfVertex().of([v1, v2, v2, v3, v3, v4, v4, v1, v5, v6, v6, v7, v7, v8, v8, v5, v9, v10, v10, v11, v11, v12, v12, v9, v13, v14, v14, v15, v15, v16, v16, v13, v1, v5, v2, v6, v3, v7, v4, v8, v9, v13, v10, v14, v11, v15, v12, v16, v1, v9, v2, v10, v3, v11, v4, v12, v5, v13, v6, v14, v7, v15, v8, v16]));
    let hypercube = new src__Core__Core.Entity.new();
    hypercube.technique = hypercubeTech;
    hypercube.shape = shape;
    hypercube.mover = sliceRotation;
    let slice = new src__Core__Core.Entity.new();
    slice.technique = sliceTech;
    slice.shape = src__Shapes__Shapes.square();
    slice.mover = (() => {
      let _ = new src__Movers__Movers.Group.new();
      _.add(src__Movers__Movers.Constant.scale(1.1, 1.1, 1.1));
      _.add(src__Movers__Movers.Constant.rotateX(-1.5707963267948966));
      _.add(sliceMover);
      _.add(sliceRotation);
      return _;
    })();
    let cube = new src__Core__Core.Entity.new();
    cube.shape = src__Shapes__Shapes.cube();
    cube.mover = projUserMover;
    let sphere = new src__Core__Core.Entity.new();
    sphere.shape = src__Shapes__Shapes.isosphere(2);
    sphere.mover = (() => {
      let _ = new src__Movers__Movers.Group.new();
      _.add(sphereScalar);
      _.add(projUserMover);
      return _;
    })();
    let slicePass = new src__Scenes__Scenes.EntityPass.new();
    slicePass.target = new src__Views__Views.FrontTarget.new({clearColor: false});
    slicePass.camera = (() => {
      let _ = new src__Views__Views.Perspective.new();
      _.premover = src__Movers__Movers.Constant.translate(-0.5, 0.0, 0.0);
      _.mover = src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0);
      return _;
    })();
    slicePass.children.add(hypercube);
    slicePass.children.add(slice);
    let projPass = new src__Scenes__Scenes.EntityPass.new();
    projPass.camera = (() => {
      let _ = new src__Views__Views.Perspective.new();
      _.premover = src__Movers__Movers.Constant.translate(0.5, 0.0, 0.0);
      _.mover = src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0);
      return _;
    })();
    projPass.technique = projTech;
    projPass.children.add(sphere);
    projPass.children.add(cube);
    let wOffset = 0.5;
    let startInside = false;
    td.userInput.mouse.down.add(dart.fn(_ => {
      startInside = true;
    }, EventArgsToNull()));
    td.userInput.mouse.up.add(dart.fn(_ => {
      startInside = false;
    }, EventArgsToNull()));
    td.userInput.mouse.move.add(dart.fn(e => {
      let ms = src__Input__Input.MouseEventArgs.as(e);
      if (!startInside) return;
      if (dart.notNull(ms.adjustedPoint.x) > 0.0) return;
      wOffset = dart.notNull(wOffset) + dart.notNull(ms.adjustedDelta.dy);
      wOffset = src__Math__Math.clampVal(wOffset, -0.1, 1.1);
      sliceMover.matrix = src__Math__Math.Matrix4.translate(0.0, 1.0 - 2.0 * dart.notNull(wOffset), 0.0);
      if (dart.notNull(wOffset) <= 0.0 || dart.notNull(wOffset) >= 1.0) {
        cube.enabled = false;
        sphere.enabled = false;
      } else {
        let r = math.sin(dart.notNull(wOffset) * 3.141592653589793);
        sphereScalar.matrix = src__Math__Math.Matrix4.scale(r, r, r);
        cube.enabled = true;
        sphere.enabled = true;
      }
      ms.propagate = false;
    }, EventArgsToNull()));
    projUserMover.add(new src__Movers__Movers.UserRotater.new({input: td.userInput, invertY: true}));
    projUserMover.add(new src__Movers__Movers.UserRoller.new({input: td.userInput, ctrl: true}));
    projUserMover.add(new src__Movers__Movers.UserZoom.new({input: td.userInput}));
    td.scene = new src__Scenes__Scenes.Compound.new({passes: JSArrayOfScene().of([projPass, slicePass])});
  };
  dart.trackLibraries("web/examples/hypersphere/main.ddc", {
    "examples\\hypersphere\\main.dart": examples__hypersphere__main
  }, '{"version":3,"sourceRoot":"","sources":["main.dart","example2D.dart","example3D.dart","example4D.dart"],"names":[],"mappings":"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","file":"main.ddc.js"}');
  // Exports:
  return {
    examples__hypersphere__main: examples__hypersphere__main
  };
});

//# sourceMappingURL=main.ddc.js.map
