define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Math/Color3', 'packages/ThreeDart/src/Events/Changable'], function(dart_sdk, checkGroup, Bindable, Color3, Changable) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
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
  const tests__test014__test = Object.create(_root);
  const $split = dartx.split;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfScene = () => (JSArrayOfScene = dart.constFn(_interceptors.JSArray$(src__Scenes__Scenes.Scene)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VertexAnddoubleAnddoubleToNull = () => (VertexAnddoubleAnddoubleToNull = dart.constFn(dart.fnType(core.Null, [src__Shapes__Shapes.Vertex, core.double, core.double])))();
  let doubleAnddoubleTodouble = () => (doubleAnddoubleTodouble = dart.constFn(dart.fnType(core.double, [core.double, core.double])))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  tests__test014__test.main = function() {
    let page = new common__common.ShellPage.new("Test 014");
    page.addLargeCanvas("testCanvas");
    page.addPar(JSArrayOfString().of(["Test of Material Lighting shader with different reflections and refractions. " + "No alpha is being used. The background cube maps is being painted onto the object."]));
    page.addControlBoxes(JSArrayOfString().of(["controls", "shapes"]));
    page.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let target = new src__Views__Views.FrontTarget.new();
    target.clearColor = false;
    let obj = new src__Core__Core.Entity.new();
    obj.shape = src__Shapes__Shapes.toroid();
    let environment = td.textureLoader.loadCubeFromPath("../resources/maskonaive", {ext: ".jpg"});
    let tech = new src__Techniques__Techniques.MaterialLight.new();
    tech.lights.add(new src__Lights__Lights.Directional.new({mover: src__Movers__Movers.Constant.vectorTowards(-1.0, -1.0, -1.0), color: src__Math__Math.Color3.white()}));
    tech.ambient.color = src__Math__Math.Color3.new(0.1, 0.1, 0.1);
    tech.diffuse.color = src__Math__Math.Color3.new(0.1, 0.1, 0.1);
    tech.specular.color = src__Math__Math.Color3.new(1.0, 1.0, 1.0);
    tech.specular.shininess = 10.0;
    tech.environment = environment;
    tech.refraction.deflection = 0.6;
    tech.refraction.color = src__Math__Math.Color3.new(0.2, 0.3, 1.0);
    tech.reflection.color = src__Math__Math.Color3.new(0.6, 0.6, 0.6);
    let mover = new src__Movers__Movers.Group.new();
    mover.add(new src__Movers__Movers.UserRotater.new({input: td.userInput}));
    mover.add(new src__Movers__Movers.UserRoller.new({ctrl: true, input: td.userInput}));
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
      tech.ambient.color = src__Math__Math.Color3.new(0.1, 0.1, 0.1);
      tech.diffuse.color = src__Math__Math.Color3.new(0.2, 0.2, 0.2);
      tech.specular.color = src__Math__Math.Color3.new(1.0, 1.0, 1.0);
      tech.refraction.color = src__Math__Math.Color3.black();
      tech.reflection.color = src__Math__Math.Color3.new(1.0, 1.0, 1.0);
    }, VoidToNull()), true);
    _.add("Gold", dart.fn(() => {
      tech.ambient.color = src__Math__Math.Color3.new(0.11, 0.11, 0.1);
      tech.diffuse.color = src__Math__Math.Color3.new(0.21, 0.21, 0.2);
      tech.specular.color = src__Math__Math.Color3.new(1.0, 1.0, 1.0);
      tech.refraction.color = src__Math__Math.Color3.black();
      tech.reflection.color = src__Math__Math.Color3.new(1.0, 0.9, 0.5);
    }, VoidToNull()));
    _.add("Glass", dart.fn(() => {
      tech.ambient.color = src__Math__Math.Color3.new(0.1, 0.1, 0.1);
      tech.diffuse.color = src__Math__Math.Color3.new(0.1, 0.1, 0.1);
      tech.specular.color = src__Math__Math.Color3.new(1.0, 1.0, 1.0);
      tech.refraction.deflection = 0.4;
      tech.refraction.color = src__Math__Math.Color3.new(0.6, 0.6, 0.6);
      tech.reflection.color = src__Math__Math.Color3.new(0.4, 0.4, 0.4);
    }, VoidToNull()));
    _.add("Blue Glass", dart.fn(() => {
      tech.ambient.color = src__Math__Math.Color3.new(0.1, 0.1, 0.1);
      tech.diffuse.color = src__Math__Math.Color3.new(0.1, 0.1, 0.1);
      tech.specular.color = src__Math__Math.Color3.new(1.0, 1.0, 1.0);
      tech.refraction.deflection = 0.4;
      tech.refraction.color = src__Math__Math.Color3.new(0.2, 0.3, 1.0);
      tech.reflection.color = src__Math__Math.Color3.new(0.3, 0.3, 0.3);
    }, VoidToNull()));
    _.add("Water Bubble", dart.fn(() => {
      tech.ambient.color = src__Math__Math.Color3.new(0.1, 0.1, 0.1);
      tech.diffuse.color = src__Math__Math.Color3.new(0.1, 0.1, 0.1);
      tech.specular.color = src__Math__Math.Color3.new(1.0, 1.0, 1.0);
      tech.refraction.deflection = 0.6;
      tech.refraction.color = src__Math__Math.Color3.new(0.8, 0.8, 0.8);
      tech.reflection.color = src__Math__Math.Color3.new(0.2, 0.2, 0.2);
    }, VoidToNull()));
    _.add("No Reflection", dart.fn(() => {
      tech.ambient.color = src__Math__Math.Color3.new(0.1, 0.1, 0.1);
      tech.diffuse.color = src__Math__Math.Color3.new(0.1, 0.1, 0.1);
      tech.specular.color = src__Math__Math.Color3.new(1.0, 1.0, 1.0);
      tech.refraction.deflection = 0.6;
      tech.refraction.color = src__Math__Math.Color3.new(1.0, 1.0, 1.0);
      tech.reflection.color = src__Math__Math.Color3.black();
    }, VoidToNull()));
    _.add("Pink Distort", dart.fn(() => {
      tech.ambient.color = src__Math__Math.Color3.new(0.1, 0.1, 0.1);
      tech.diffuse.color = src__Math__Math.Color3.new(0.1, 0.1, 0.1);
      tech.specular.color = src__Math__Math.Color3.new(1.0, 1.0, 1.0);
      tech.refraction.deflection = 0.9;
      tech.refraction.color = src__Math__Math.Color3.new(1.0, 0.8, 0.8);
      tech.reflection.color = src__Math__Math.Color3.black();
    }, VoidToNull()));
    _.add("Cloak", dart.fn(() => {
      tech.ambient.color = src__Math__Math.Color3.new(0.0, 0.0, 0.0);
      tech.diffuse.color = src__Math__Math.Color3.new(0.1, 0.1, 0.1);
      tech.specular.color = src__Math__Math.Color3.new(0.1, 0.1, 0.1);
      tech.refraction.deflection = 0.99;
      tech.refraction.color = src__Math__Math.Color3.new(0.95, 0.95, 0.95);
      tech.reflection.color = src__Math__Math.Color3.black();
    }, VoidToNull()));
    _.add("White and Shiny", dart.fn(() => {
      tech.ambient.color = src__Math__Math.Color3.new(0.3, 0.3, 0.3);
      tech.diffuse.color = src__Math__Math.Color3.new(0.5, 0.5, 0.5);
      tech.specular.color = src__Math__Math.Color3.new(1.0, 1.0, 1.0);
      tech.refraction.color = src__Math__Math.Color3.black();
      tech.reflection.color = src__Math__Math.Color3.new(0.3, 0.3, 0.3);
    }, VoidToNull()));
    let _$ = new common__common.RadioGroup.new("shapes");
    _$.add("Cube", dart.fn(() => {
      obj.shape = src__Shapes__Shapes.cube();
    }, VoidToNull()));
    _$.add("Cuboid", dart.fn(() => {
      obj.shape = src__Shapes__Shapes.cuboid({widthDiv: 15, heightDiv: 15, vertexHndl: dart.fn((ver, u, v) => {
          let height = math.cos(dart.notNull(v) * 4.0 * 3.141592653589793 + 3.141592653589793) * 0.1 + math.cos(dart.notNull(u) * 4.0 * 3.141592653589793 + 3.141592653589793) * 0.1;
          let vec = src__Math__Math.Vector3.fromPoint3(ver.location).normal();
          ver.location = ver.location['+'](src__Math__Math.Point3.fromVector3(vec['*'](height)));
        }, VertexAnddoubleAnddoubleToNull())});
    }, VoidToNull()));
    _$.add("Cylinder", dart.fn(() => {
      obj.shape = src__Shapes__Shapes.cylinder({sides: 30});
    }, VoidToNull()));
    _$.add("Cone", dart.fn(() => {
      obj.shape = src__Shapes__Shapes.cylinder({topRadius: 0.0, sides: 30, capTop: false});
    }, VoidToNull()));
    _$.add("Cylindrical", dart.fn(() => {
      obj.shape = src__Shapes__Shapes.cylindrical({sides: 50, div: 25, radiusHndl: dart.fn((u, v) => math.cos(dart.notNull(v) * 4.0 * 3.141592653589793 + 3.141592653589793) * 0.2 + math.cos(dart.notNull(u) * 6.0 * 3.141592653589793) * 0.3 + 0.8, doubleAnddoubleTodouble())});
    }, VoidToNull()));
    _$.add("Sphere", dart.fn(() => {
      obj.shape = src__Shapes__Shapes.sphere({widthDiv: 6, heightDiv: 6});
    }, VoidToNull()));
    _$.add("Spherical", dart.fn(() => {
      obj.shape = src__Shapes__Shapes.sphere({widthDiv: 10, heightDiv: 10, heightHndl: dart.fn((u, v) => math.cos(math.sqrt((dart.notNull(u) - 0.5) * (dart.notNull(u) - 0.5) + (dart.notNull(v) - 0.5) * (dart.notNull(v) - 0.5)) * 3.141592653589793) * 0.3, doubleAnddoubleTodouble())});
    }, VoidToNull()));
    _$.add("Toroid", dart.fn(() => {
      obj.shape = src__Shapes__Shapes.toroid();
    }, VoidToNull()), true);
    _$.add("Knot", dart.fn(() => {
      obj.shape = src__Shapes__Shapes.knot();
    }, VoidToNull()));
    td.postrender.once(dart.fn(_ => {
      page.addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode[$split]("\n"));
      page.addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode[$split]("\n"));
    }, EventArgsToNull()));
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test014/test.ddc", {
    "tests\\test014\\test.dart": tests__test014__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":"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","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test014__test: tests__test014__test
  };
});

//# sourceMappingURL=test.ddc.js.map
