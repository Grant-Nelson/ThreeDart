define(['dart_sdk', 'packages/ThreeDart/src/Math/Color3', 'packages/ThreeDart/src/Core/Bindable', 'web/common/checkGroup', 'packages/ThreeDart/src/Events/Changable'], function(dart_sdk, Color3, Bindable, checkGroup, Changable) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__Math__Math = Color3.src__Math__Math;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Lights__Lights = Bindable.src__Lights__Lights;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Shapes__Shapes = Bindable.src__Shapes__Shapes;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const common__common = checkGroup.common__common;
  const src__Events__Events = Changable.src__Events__Events;
  const _root = Object.create(null);
  const tests__test038__test = Object.create(_root);
  let JSArrayOfMover = () => (JSArrayOfMover = dart.constFn(_interceptors.JSArray$(src__Movers__Movers.Mover)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  tests__test038__test.createFloor = function(td) {
    let floorTxt = td.textureLoader.load2DFromFile("../resources/Grass.png", {wrapEdges: true, mipMap: true});
    let floorMover = new src__Movers__Movers.Constant.new(src__Math__Math.Matrix4.translate(0.0, -3.0, 0.0)['*'](src__Math__Math.Matrix4.scale(1000.0, 1.0, 1000.0))['*'](src__Math__Math.Matrix4.rotateX(-1.5707963267948966)));
    let tech = new src__Techniques__Techniques.MaterialLight.new();
    tech.texture2DMatrix = src__Math__Math.Matrix3.scale(1000.0, 1000.0, 1.0);
    tech.lights.add(new src__Lights__Lights.Directional.new({mover: src__Movers__Movers.Constant.vectorTowards(1.0, -3.0, -1.0), color: src__Math__Math.Color3.white()}));
    tech.ambient.color = src__Math__Math.Color3.new(0.5, 0.5, 0.5);
    tech.diffuse.color = src__Math__Math.Color3.new(0.5, 0.5, 0.5);
    tech.ambient.texture2D = floorTxt;
    tech.diffuse.texture2D = floorTxt;
    let _ = new src__Core__Core.Entity.new();
    _.shape = src__Shapes__Shapes.grid({widthDiv: 20, heightDiv: 20});
    _.mover = floorMover;
    _.technique = tech;
    return _;
  };
  tests__test038__test.createObjects = function(td) {
    let tech = new src__Techniques__Techniques.MaterialLight.new();
    tech.lights.add(new src__Lights__Lights.Directional.new({mover: src__Movers__Movers.Constant.vectorTowards(1.0, -3.0, -1.0), color: src__Math__Math.Color3.new(0.4, 0.4, 1.0)}));
    tech.lights.add(new src__Lights__Lights.Directional.new({mover: src__Movers__Movers.Constant.vectorTowards(0.0, 1.0, 0.0), color: src__Math__Math.Color3.new(0.0, 0.2, 0.1)}));
    tech.ambient.color = src__Math__Math.Color3.gray(0.2);
    tech.diffuse.color = src__Math__Math.Color3.gray(0.7);
    tech.specular.color = src__Math__Math.Color3.white();
    tech.specular.shininess = 10.0;
    let group = new src__Core__Core.Entity.new();
    group.technique = tech;
    let shape = src__Shapes__Shapes.cube();
    let range = 60.0;
    let spacing = 12.0;
    for (let x = -range; x <= range; x = x + spacing) {
      for (let z = -range; z <= range; z = z + spacing) {
        let obj = new src__Core__Core.Entity.new();
        obj.shape = shape;
        obj.mover = new src__Movers__Movers.Group.new(JSArrayOfMover().of([new src__Movers__Movers.Rotater.new({yaw: x / 10.0, pitch: z / 10.0, deltaYaw: x / 10.0, deltaPitch: z / 10.0}), src__Movers__Movers.Constant.translate(x, 0.0, z)]));
        group.children.add(obj);
      }
    }
    return group;
  };
  tests__test038__test.main = function() {
    let _ = new common__common.ShellPage.new("Test 038");
    _.addLargeCanvas("testCanvas");
    _.addPar(JSArrayOfString().of(["A test of basic 3D movement around a room similar to a first person view. ", "A and D (left and right arrow keys) strifes left and right. ", "W and S (up and down arrow keys) moves forward and backward. ", "Q and E moves up and down. Mouse looks around with left mouse button pressed."]));
    _.addControlBoxes(JSArrayOfString().of(["options"]));
    _.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let group = new src__Core__Core.Entity.new();
    group.children.add(tests__test038__test.createFloor(td));
    group.children.add(tests__test038__test.createObjects(td));
    let trans = new src__Movers__Movers.UserTranslator.new({input: td.userInput});
    let rot = src__Movers__Movers.UserRotater.flat({input: td.userInput});
    rot.changed.add(dart.fn(args => {
      trans.velocityRotation = src__Math__Math.Matrix3.rotateY(-dart.notNull(rot.yaw.location));
    }, EventArgsToNull()));
    let camera = new src__Movers__Movers.Group.new(JSArrayOfMover().of([trans, rot]));
    td.scene = (() => {
      let _ = new src__Scenes__Scenes.EntityPass.new();
      _.children.add(group);
      _.camera.mover = camera;
      return _;
    })();
    new common__common.CheckGroup.new("options").add("Mouse Locking", dart.fn(enable => {
      td.userInput.lockOnClick = enable;
    }, boolToNull()), false);
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test038/test.ddc", {
    "tests\\test038\\test.dart": tests__test038__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":"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","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test038__test: tests__test038__test
  };
});

//# sourceMappingURL=test.ddc.js.map
