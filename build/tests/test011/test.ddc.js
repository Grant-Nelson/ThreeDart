define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Math/Color3', 'packages/ThreeDart/src/Events/Changable'], function(dart_sdk, checkGroup, Bindable, Color3, Changable) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Shapes__Shapes = Bindable.src__Shapes__Shapes;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Lights__Lights = Bindable.src__Lights__Lights;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Math__Math = Color3.src__Math__Math;
  const src__Events__Events = Changable.src__Events__Events;
  const _root = Object.create(null);
  const tests__test011__test = Object.create(_root);
  const $split = dartx.split;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  tests__test011__test.main = function() {
    let page = new common__common.ShellPage.new("Test 011");
    page.addLargeCanvas("testCanvas");
    page.addPar(JSArrayOfString().of(["A test of the Material Lighting shader with cube textures and ", "a directional light. The cube textures are for ambient, diffuse, ", "and specular."]));
    page.addControlBoxes(JSArrayOfString().of(["shapes"]));
    page.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let obj = new src__Core__Core.Entity.new();
    obj.shape = src__Shapes__Shapes.sphere();
    obj.mover = (() => {
      let _ = new src__Movers__Movers.Group.new();
      _.add(new src__Movers__Movers.UserRotater.new({input: td.userInput, invertY: true}));
      _.add(new src__Movers__Movers.UserRoller.new({input: td.userInput, ctrl: true}));
      _.add(new src__Movers__Movers.UserZoom.new({input: td.userInput}));
      return _;
    })();
    let color = td.textureLoader.loadCubeFromPath("../resources/earthColor");
    let tech = new src__Techniques__Techniques.MaterialLight.new();
    tech.lights.add(new src__Lights__Lights.Directional.new({mover: src__Movers__Movers.Constant.vectorTowards(-1.0, -1.0, -1.0), color: src__Math__Math.Color3.white()}));
    tech.ambient.color = src__Math__Math.Color3.new(0.2, 0.2, 0.2);
    tech.diffuse.color = src__Math__Math.Color3.new(0.8, 0.8, 0.8);
    tech.ambient.textureCube = color;
    tech.diffuse.textureCube = color;
    tech.specular.textureCube = td.textureLoader.loadCubeFromPath("../resources/earthSpecular");
    tech.specular.shininess = 10.0;
    td.scene = (() => {
      let _ = new src__Scenes__Scenes.EntityPass.new();
      _.technique = tech;
      _.children.add(obj);
      _.camera.mover = src__Movers__Movers.Constant.translate(0.0, 0.0, 3.0);
      return _;
    })();
    let _ = new common__common.RadioGroup.new("shapes");
    _.add("Cube", dart.fn(() => {
      obj.shape = src__Shapes__Shapes.cube();
    }, VoidToNull()));
    _.add("Cuboid", dart.fn(() => {
      obj.shape = src__Shapes__Shapes.cuboid();
    }, VoidToNull()));
    _.add("Cylinder", dart.fn(() => {
      obj.shape = src__Shapes__Shapes.cylinder({sides: 40});
    }, VoidToNull()));
    _.add("Cone", dart.fn(() => {
      obj.shape = src__Shapes__Shapes.cylinder({topRadius: 0.0, sides: 40, capTop: false});
    }, VoidToNull()));
    _.add("LatLonSphere", dart.fn(() => {
      obj.shape = src__Shapes__Shapes.latLonSphere(10, 20);
    }, VoidToNull()));
    _.add("IsoSphere", dart.fn(() => {
      obj.shape = src__Shapes__Shapes.isosphere(2);
    }, VoidToNull()));
    _.add("Sphere", dart.fn(() => {
      obj.shape = src__Shapes__Shapes.sphere({widthDiv: 6, heightDiv: 6});
    }, VoidToNull()), true);
    _.add("Toroid", dart.fn(() => {
      obj.shape = src__Shapes__Shapes.toroid();
    }, VoidToNull()));
    _.add("Knot", dart.fn(() => {
      obj.shape = src__Shapes__Shapes.knot();
    }, VoidToNull()));
    td.postrender.once(dart.fn(_ => {
      page.addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode[$split]("\n"));
      page.addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode[$split]("\n"));
    }, EventArgsToNull()));
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test011/test.ddc", {
    "tests\\test011\\test.dart": tests__test011__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;AAaE,QAAiB,OAAO,IAAI,4BAAgB,CAAC;IAA5B,oBACE;IADF,YAEN,sBAAC,kEACR,qEACA;IAJa,qBAKG,sBAAC;IALJ,YAMN,sBAAC;AAEZ,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAiB,MAAM,IAAI,0BAAgB;IAA1B,YACL,AAAO,0BAAM;IADR;cAEJ,IAAI,6BAAY;YACnB,IAAI,mCAAkB,SAAQ,EAAE,UAAU,WAAW;YACrD,IAAI,kCAAiB,SAAQ,EAAE,UAAU,QAAQ;YACjD,IAAI,gCAAe,SAAQ,EAAE,UAAU;;;AAEjD,QAAqB,QAAQ,EAAE,cAAc,iBAAiB,CAAC;AAC/D,QAAyB,OAAO,IAAI,6CAAwB;IAAnC,gBACV,IAAI,mCAAkB,SACtB,AAAI,0CAA6B,CAAC,CAAC,KAAK,CAAC,KAAK,CAAC,aAC/C,AAAI,4BAAiB;IAHX,qBAIJ,AAAI,0BAAW,CAAC,KAAK,KAAK;IAJtB,qBAKL,AAAI,0BAAW,CAAC,KAAK,KAAK;IALrB,2BAMC,KAAK;IANN,2BAOC,KAAK;IAPN,4BAQE,EAAE,cAAc,iBAAiB,CAAC;IARpC,0BASA;AAEzB,MAAE,MAAM;cAAG,IAAI,kCAAiB;oBAChB,IAAI;qBACH,GAAG;uBACD,AAAI,sCAAyB,CAAC,KAAK,KAAK;;;AAE3D,gBAAI,6BAAiB,CAAC;UACd,QAAgB;AAAK,SAAG,MAAM,GAAG,AAAO,wBAAI;;UAC5C,UAAgB;AAAK,SAAG,MAAM,GAAG,AAAO,0BAAM;;UAC9C,YAAgB;AAAK,SAAG,MAAM,GAAG,AAAO,4BAAQ,SAAQ;;UACxD,QAAgB;AAAK,SAAG,MAAM,GAAG,AAAO,4BAAQ,aAAY,YAAY,YAAY;;UACpF,gBAAgB;AAAK,SAAG,MAAM,GAAG,AAAO,gCAAY,CAAC,IAAI;;UACzD,aAAgB;AAAK,SAAG,MAAM,GAAG,AAAO,6BAAS,CAAC;;UAClD,UAAgB;AAAK,SAAG,MAAM,GAAG,AAAO,0BAAM,YAAW,cAAc;sBAAO;UAC9E,UAAgB;AAAK,SAAG,MAAM,GAAG,AAAO,0BAAM;;UAC9C,QAAgB;AAAK,SAAG,MAAM,GAAG,AAAO,wBAAI;;AAEpD,MAAE,WAAW,KAAK,CAAC,QAAC,CAAC;AACnB,MACE,AAAE,YAAO,CAAC,iBAAiB,QAAQ,GAAG,IAAI,iBAAiB,QAAM,CAAC;MAClE,AAAE,YAAO,CAAC,mBAAmB,QAAQ,GAAG,IAAI,mBAAmB,QAAM,CAAC;;AAE1E,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test011__test: tests__test011__test
  };
});

//# sourceMappingURL=test.ddc.js.map
