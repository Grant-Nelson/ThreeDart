define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Math/Color3', 'packages/ThreeDart/src/Events/Changable'], function(dart_sdk, checkGroup, Bindable, Color3, Changable) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Shapes__Shapes = Bindable.src__Shapes__Shapes;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Lights__Lights = Bindable.src__Lights__Lights;
  const src__Data__Data = Bindable.src__Data__Data;
  const src__Views__Views = Bindable.src__Views__Views;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Math__Math = Color3.src__Math__Math;
  const src__Events__Events = Changable.src__Events__Events;
  const _root = Object.create(null);
  const tests__test040__test = Object.create(_root);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfMover = () => (JSArrayOfMover = dart.constFn(_interceptors.JSArray$(src__Movers__Movers.Mover)))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  let JSArrayOfEntity = () => (JSArrayOfEntity = dart.constFn(_interceptors.JSArray$(src__Core__Core.Entity)))();
  let JSArrayOfScene = () => (JSArrayOfScene = dart.constFn(_interceptors.JSArray$(src__Scenes__Scenes.Scene)))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  tests__test040__test.main = function() {
    let _ = new common__common.ShellPage.new("Test 040");
    _.addLargeCanvas("testCanvas");
    _.addPar(JSArrayOfString().of(["A combination of bump mapping with height map and specular map."]));
    _.addControlBoxes(JSArrayOfString().of(["controls"]));
    _.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let colorTxt = td.textureLoader.load2DFromFile("../resources/gravel/colorLarge.png");
    let bump = td.textureLoader.load2DFromFile("../resources/gravel/bumpLarge.png");
    let spec = td.textureLoader.load2DFromFile("../resources/gravel/specularSmall.png");
    let height = td.textureLoader.load2DFromFile("../resources/gravel/heightSmall.png");
    let mover = new src__Movers__Movers.Group.new(JSArrayOfMover().of([src__Movers__Movers.Constant.translate(0.0, 0.0, 2.0), new src__Movers__Movers.Rotater.new({deltaYaw: 0.6, deltaPitch: 0.1, deltaRoll: 0.0})]));
    let bulb = new src__Core__Core.Entity.new({shape: src__Shapes__Shapes.sphere({radius: 0.03})});
    bulb.mover = mover;
    bulb.technique = src__Techniques__Techniques.MaterialLight.glow();
    let light = new src__Lights__Lights.Point.new({color: src__Math__Math.Color3.white(), mover: mover, attenuation0: 0.5, attenuation1: 0.1, attenuation2: 0.0});
    let flatShape = src__Shapes__Shapes.square();
    let entity = new src__Core__Core.Entity.new({shape: flatShape});
    let heightShape = null;
    height.changed.add(dart.fn(_ => {
      let heightReader = td.textureLoader.readAll(height);
      heightShape = src__Shapes__Shapes.grid({widthDiv: 150, heightDiv: 150});
      heightShape.calculateNormals();
      heightShape.applyHeightMap(heightReader, 0.05);
      heightShape.trimVertices(src__Data__Data.VertexType.Norm['~']());
      heightShape.trimFaces({norm: false});
      heightShape.calculateNormals();
    }, EventArgsToNull()));
    let userCamera = new src__Views__Views.Perspective.new();
    userCamera.mover = new src__Movers__Movers.Group.new(JSArrayOfMover().of([new src__Movers__Movers.UserRotater.new({input: td.userInput}), new src__Movers__Movers.UserZoom.new({input: td.userInput}), src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0)]));
    let colorTech = new src__Techniques__Techniques.MaterialLight.new();
    colorTech.lights.add(light);
    colorTech.ambient.color = src__Math__Math.Color3.gray(0.3);
    colorTech.diffuse.color = src__Math__Math.Color3.white();
    colorTech.specular.shininess = 40.0;
    let colorTarget = new src__Views__Views.BackTarget.new(800, 600, {autoResize: true});
    let colorPass = new src__Scenes__Scenes.EntityPass.new({children: JSArrayOfEntity().of([entity, bulb])});
    colorPass.technique = colorTech;
    colorPass.camera = userCamera;
    colorPass.target = colorTarget;
    let depthTarget = new src__Views__Views.BackTarget.new(400, 300, {autoResize: true, autoResizeScalarX: 0.5, autoResizeScalarY: 0.5});
    let depthPass = new src__Scenes__Scenes.EntityPass.new({children: JSArrayOfEntity().of([entity, bulb])});
    depthPass.camera = userCamera;
    depthPass.target = depthTarget;
    depthPass.technique = new src__Techniques__Techniques.Depth.new({fogStart: 1.0, fogStop: 4.0});
    let blurTech = new src__Techniques__Techniques.GaussianBlur.new({colorTxt: colorTarget.colorTexture, depthTxt: depthTarget.colorTexture, highOffset: 0.0, lowOffset: 3.0, depthLimit: 0.001});
    let blurPass = new src__Scenes__Scenes.CoverPass.new();
    blurPass.technique = blurTech;
    let layoutTech = new src__Techniques__Techniques.TextureLayout.new();
    layoutTech.entries.add(new src__Techniques__Techniques.TextureLayoutEntry.new({texture: depthTarget.colorTexture, destination: src__Math__Math.Region2.new(0.0, 0.8, 0.2, 0.2)}));
    layoutTech.entries.add(new src__Techniques__Techniques.TextureLayoutEntry.new({texture: colorTarget.colorTexture, destination: src__Math__Math.Region2.new(0.0, 0.6, 0.2, 0.2)}));
    let layout = new src__Scenes__Scenes.CoverPass.new();
    layout.target = new src__Views__Views.FrontTarget.new({clearColor: false});
    layout.technique = layoutTech;
    td.scene = new src__Scenes__Scenes.Compound.new({passes: JSArrayOfScene().of([colorPass, depthPass, blurPass, layout])});
    let _$ = new common__common.CheckGroup.new("controls");
    _$.add("Color", dart.fn(show => {
      colorTech.ambient.texture2D = dart.test(show) ? colorTxt : null;
      colorTech.diffuse.texture2D = dart.test(show) ? colorTxt : null;
    }, boolToNull()), true);
    _$.add("Specular", dart.fn(show => {
      colorTech.specular.texture2D = dart.test(show) ? spec : null;
    }, boolToNull()), false);
    _$.add("Bump", dart.fn(show => {
      colorTech.bump.texture2D = dart.test(show) ? bump : null;
    }, boolToNull()), false);
    _$.add("Height", dart.fn(show => {
      entity.shape = dart.test(show) ? heightShape : flatShape;
    }, boolToNull()), false);
    _$.add("Blur", dart.fn(show => {
      blurTech.depthTexture = dart.test(show) ? depthTarget.colorTexture : null;
    }, boolToNull()), false);
    _$.add("Passes", dart.fn(show => {
      layout.technique = dart.test(show) ? layoutTech : null;
    }, boolToNull()), false);
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test040/test.ddc", {
    "tests\\test040\\test.dart": tests__test040__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":"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","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test040__test: tests__test040__test
  };
});

//# sourceMappingURL=test.ddc.js.map
