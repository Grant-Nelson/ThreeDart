define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Math/Color3', 'packages/ThreeDart/src/Events/Changable'], function(dart_sdk, checkGroup, Bindable, Color3, Changable) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Views__Views = Bindable.src__Views__Views;
  const src__Shapes__Shapes = Bindable.src__Shapes__Shapes;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Lights__Lights = Bindable.src__Lights__Lights;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Math__Math = Color3.src__Math__Math;
  const src__Events__Events = Changable.src__Events__Events;
  const _root = Object.create(null);
  const tests__test015__test = Object.create(_root);
  const $split = dartx.split;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfScene = () => (JSArrayOfScene = dart.constFn(_interceptors.JSArray$(src__Scenes__Scenes.Scene)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  tests__test015__test.main = function() {
    let page = new common__common.ShellPage.new("Test 015");
    page.addLargeCanvas("testCanvas");
    page.addPar(JSArrayOfString().of(["Test of Material Lighting shader with bump mapping, reflections, refractions."]));
    page.addControlBoxes(JSArrayOfString().of(["bumpMaps", "controls"]));
    page.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let target = new src__Views__Views.FrontTarget.new();
    target.clearColor = false;
    let obj = new src__Core__Core.Entity.new();
    obj.shape = src__Shapes__Shapes.cube();
    let environment = td.textureLoader.loadCubeFromPath("../resources/maskonaive", {ext: ".jpg"});
    let tech = new src__Techniques__Techniques.MaterialLight.new();
    tech.lights.add(new src__Lights__Lights.Directional.new({mover: src__Movers__Movers.Constant.vectorTowards(-1.0, -1.0, -1.0)}));
    tech.ambient.color = src__Math__Math.Color3.new(0.1, 0.1, 0.1);
    tech.diffuse.color = src__Math__Math.Color3.new(0.1, 0.1, 0.1);
    tech.specular.color = src__Math__Math.Color3.black();
    tech.specular.shininess = 10.0;
    tech.environment = environment;
    tech.refraction.deflection = 0.6;
    tech.refraction.color = src__Math__Math.Color3.new(0.2, 0.3, 1.0);
    tech.reflection.color = src__Math__Math.Color3.new(0.6, 0.6, 0.6);
    let mover = new src__Movers__Movers.Group.new();
    mover.add(new src__Movers__Movers.UserRotater.new({input: td.userInput}));
    mover.add(new src__Movers__Movers.UserRoller.new({input: td.userInput, ctrl: true}));
    mover.add(new src__Movers__Movers.UserZoom.new({input: td.userInput}));
    mover.add(src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0));
    let camera = new src__Views__Views.Perspective.new({mover: mover});
    let skybox = src__Scenes__Scenes.CoverPass.skybox(environment);
    skybox.target = target;
    skybox.camera = camera;
    let pass = new src__Scenes__Scenes.EntityPass.new();
    pass.camera = camera;
    pass.technique = tech;
    pass.target = target;
    pass.children.add(obj);
    src__Views__Views.FrontTarget.as(pass.target).clearColor = false;
    td.scene = new src__Scenes__Scenes.Compound.new({passes: JSArrayOfScene().of([skybox, pass])});
    let _ = new common__common.RadioGroup.new("controls");
    _.add("Silver", dart.fn(() => {
      tech.ambient.color = src__Math__Math.Color3.gray(0.1);
      tech.diffuse.color = src__Math__Math.Color3.gray(0.2);
      tech.refraction.color = src__Math__Math.Color3.black();
      tech.reflection.color = src__Math__Math.Color3.white();
    }, VoidToNull()), true);
    _.add("Gold", dart.fn(() => {
      tech.ambient.color = src__Math__Math.Color3.new(0.11, 0.11, 0.1);
      tech.diffuse.color = src__Math__Math.Color3.new(0.21, 0.21, 0.2);
      tech.refraction.color = src__Math__Math.Color3.black();
      tech.reflection.color = src__Math__Math.Color3.new(1.0, 0.9, 0.5);
    }, VoidToNull()));
    _.add("Glass", dart.fn(() => {
      tech.ambient.color = src__Math__Math.Color3.gray(0.1);
      tech.diffuse.color = src__Math__Math.Color3.gray(0.1);
      tech.refraction.deflection = 0.4;
      tech.refraction.color = src__Math__Math.Color3.gray(0.6);
      tech.reflection.color = src__Math__Math.Color3.gray(0.4);
    }, VoidToNull()));
    _.add("Blue Glass", dart.fn(() => {
      tech.ambient.color = src__Math__Math.Color3.gray(0.1);
      tech.diffuse.color = src__Math__Math.Color3.gray(0.1);
      tech.refraction.deflection = 0.4;
      tech.refraction.color = src__Math__Math.Color3.new(0.2, 0.3, 1.0);
      tech.reflection.color = src__Math__Math.Color3.gray(0.3);
    }, VoidToNull()));
    _.add("Water Bubble", dart.fn(() => {
      tech.ambient.color = src__Math__Math.Color3.gray(0.1);
      tech.diffuse.color = src__Math__Math.Color3.gray(0.1);
      tech.refraction.deflection = 0.6;
      tech.refraction.color = src__Math__Math.Color3.gray(0.8);
      tech.reflection.color = src__Math__Math.Color3.gray(0.2);
    }, VoidToNull()));
    _.add("No Reflection", dart.fn(() => {
      tech.ambient.color = src__Math__Math.Color3.gray(0.1);
      tech.diffuse.color = src__Math__Math.Color3.gray(0.1);
      tech.refraction.deflection = 0.6;
      tech.refraction.color = src__Math__Math.Color3.white();
      tech.reflection.color = src__Math__Math.Color3.black();
    }, VoidToNull()));
    _.add("Pink Distort", dart.fn(() => {
      tech.ambient.color = src__Math__Math.Color3.gray(0.1);
      tech.diffuse.color = src__Math__Math.Color3.gray(0.1);
      tech.refraction.deflection = 0.9;
      tech.refraction.color = src__Math__Math.Color3.new(1.0, 0.8, 0.8);
      tech.reflection.color = src__Math__Math.Color3.black();
    }, VoidToNull()));
    _.add("Cloak", dart.fn(() => {
      tech.ambient.color = src__Math__Math.Color3.black();
      tech.diffuse.color = src__Math__Math.Color3.gray(0.1);
      tech.refraction.deflection = 0.99;
      tech.refraction.color = src__Math__Math.Color3.gray(0.95);
      tech.reflection.color = src__Math__Math.Color3.black();
    }, VoidToNull()));
    _.add("White and Shiny", dart.fn(() => {
      tech.ambient.color = src__Math__Math.Color3.gray(0.3);
      tech.diffuse.color = src__Math__Math.Color3.gray(0.5);
      tech.refraction.color = src__Math__Math.Color3.black();
      tech.reflection.color = src__Math__Math.Color3.gray(0.3);
    }, VoidToNull()));
    let _$ = new common__common.Texture2DGroup.new("bumpMaps", dart.fn(fileName => {
      tech.bump.texture2D = td.textureLoader.load2DFromFile(fileName);
    }, StringToNull()));
    _$.add("../resources/BumpMap1.png", true);
    _$.add("../resources/BumpMap2.png");
    _$.add("../resources/BumpMap3.png");
    _$.add("../resources/BumpMap4.png");
    _$.add("../resources/BumpMap5.png");
    _$.add("../resources/ScrewBumpMap.png");
    _$.add("../resources/CtrlPnlBumpMap.png");
    td.postrender.once(dart.fn(_ => {
      page.addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode[$split]("\n"));
      page.addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode[$split]("\n"));
    }, EventArgsToNull()));
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test015/test.ddc", {
    "tests\\test015\\test.dart": tests__test015__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":"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","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test015__test: tests__test015__test
  };
});

//# sourceMappingURL=test.ddc.js.map
