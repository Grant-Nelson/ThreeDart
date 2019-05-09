define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Math/Color3', 'packages/ThreeDart/src/Events/Changable'], function(dart_sdk, checkGroup, Bindable, Color3, Changable) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Lights__Lights = Bindable.src__Lights__Lights;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Shapes__Shapes = Bindable.src__Shapes__Shapes;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Math__Math = Color3.src__Math__Math;
  const src__Events__Events = Changable.src__Events__Events;
  const _root = Object.create(null);
  const tests__test025__test = Object.create(_root);
  const $split = dartx.split;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  tests__test025__test.main = function() {
    let page = new common__common.ShellPage.new("Test 025");
    page.addLargeCanvas("testCanvas");
    page.addPar(JSArrayOfString().of(["Test of the Material Lighting shader with a textured spot light. ", "Use Ctrl plus the mouse to move the light."]));
    page.addControlBoxes(JSArrayOfString().of(["shapes"]));
    page.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let lightMover = new src__Movers__Movers.Group.new();
    lightMover.add(src__Movers__Movers.Constant.translate(0.0, 0.0, -2.5));
    lightMover.add(new src__Movers__Movers.UserRotater.new({input: td.userInput, ctrl: true}));
    let spot = new src__Lights__Lights.TexturedSpot.new({mover: lightMover, color: src__Math__Math.Color3.white(), fov: 0.5, ratio: 1.0, attenuation0: 0.5, attenuation1: 0.05, attenuation2: 0.05, texture: td.textureLoader.load2DFromFile("../resources/Test.png")});
    let tech = new src__Techniques__Techniques.MaterialLight.new();
    tech.lights.add(spot);
    tech.ambient.color = src__Math__Math.Color3.gray(0.05);
    tech.diffuse.color = src__Math__Math.Color3.gray(0.7);
    tech.specular.color = src__Math__Math.Color3.gray(0.3);
    tech.specular.shininess = 100.0;
    let centerObj = new src__Core__Core.Entity.new();
    centerObj.shape = src__Shapes__Shapes.toroid();
    let room = new src__Core__Core.Entity.new();
    room.mover = src__Movers__Movers.Constant.scale(3.0, 3.0, 3.0);
    room.shape = (() => {
      let _ = src__Shapes__Shapes.cube();
      _.flip();
      return _;
    })();
    let camMover = new src__Movers__Movers.Group.new();
    camMover.add(new src__Movers__Movers.UserRotater.new({input: td.userInput}));
    camMover.add(src__Movers__Movers.Constant.rotateX(3.141592653589793));
    camMover.add(src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0));
    let obj = new src__Core__Core.Entity.new();
    obj.mover = (() => {
      let _ = new src__Movers__Movers.Group.new();
      _.add(src__Movers__Movers.Constant.scale(0.1, 0.1, 0.1));
      _.add(lightMover);
      return _;
    })();
    obj.shape = src__Shapes__Shapes.cylinder({bottomRadius: 0.0, sides: 40, capBottom: false});
    obj.technique = (() => {
      let _ = new src__Techniques__Techniques.MaterialLight.new();
      _.emission.color = src__Math__Math.Color3.white();
      return _;
    })();
    td.scene = (() => {
      let _ = new src__Scenes__Scenes.EntityPass.new();
      _.technique = tech;
      _.children.add(centerObj);
      _.children.add(room);
      _.children.add(obj);
      _.camera.mover = camMover;
      return _;
    })();
    let _ = new common__common.RadioGroup.new("shapes");
    _.add("Cube", dart.fn(() => {
      centerObj.shape = src__Shapes__Shapes.cube();
    }, VoidToNull()));
    _.add("Cylinder", dart.fn(() => {
      centerObj.shape = src__Shapes__Shapes.cylinder({sides: 40});
    }, VoidToNull()));
    _.add("Cone", dart.fn(() => {
      centerObj.shape = src__Shapes__Shapes.cylinder({topRadius: 0.0, sides: 40, capTop: false});
    }, VoidToNull()));
    _.add("Sphere", dart.fn(() => {
      centerObj.shape = src__Shapes__Shapes.sphere({widthDiv: 6, heightDiv: 6});
    }, VoidToNull()));
    _.add("Toroid", dart.fn(() => {
      centerObj.shape = src__Shapes__Shapes.toroid();
    }, VoidToNull()), true);
    _.add("Knot", dart.fn(() => {
      centerObj.shape = src__Shapes__Shapes.knot();
    }, VoidToNull()));
    td.postrender.once(dart.fn(_ => {
      page.addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode[$split]("\n"));
      page.addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode[$split]("\n"));
    }, EventArgsToNull()));
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test025/test.ddc", {
    "tests\\test025\\test.dart": tests__test025__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;AAYE,QAAiB,OAAO,IAAI,4BAAgB,CAAC;IAA5B,oBACE;IADF,YAEN,sBAAC,qEACR;IAHa,qBAIG,sBAAC;IAJJ,YAKN,sBAAC;AAEZ,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAa,aAAa,IAAI,6BAAY;IAA7B,eACL,AAAI,sCAAyB,CAAC,KAAK,KAAK,CAAC;IADpC,eAEL,IAAI,mCAAkB,SAAQ,EAAE,UAAU,QAAQ;AAE1D,QAAoB,OAAO,IAAI,oCAAmB,SAClC,UAAU,SACV,AAAI,4BAAiB,SACrB,YACA,mBACA,mBACA,oBACA,eACA,EAAE,cAAc,eAAe,CAAC;AAEhD,QAAyB,OAAO,IAAI,6CAAwB;IAAnC,gBACV,IAAI;IADM,qBAEL,AAAI,2BAAgB,CAAC;IAFhB,qBAGL,AAAI,2BAAgB,CAAC;IAHhB,sBAIJ,AAAI,2BAAgB,CAAC;IAJjB,0BAKA;AAEzB,QAAiB,YAAY,IAAI,0BAAgB;IAAhC,kBACL,AAAO,0BAAM;AAEzB,QAAiB,OAAO,IAAI,0BAAgB;IAA3B,aACL,AAAI,kCAAqB,CAAC,KAAK,KAAK;IAD/B;cAEJ,AAAO,wBAAI;;;;AAExB,QAAa,WAAW,IAAI,6BAAY;IAA3B,aACP,IAAI,mCAAkB,SAAQ,EAAE,UAAU;IADnC,aAEP,AAAI,oCAAuB,CAAM,iBAAE;IAF5B,aAGP,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAE9C,QAAiB,MAAM,IAAI,0BAAgB;IAA1B;cACJ,IAAI,6BAAY;YACT,AAAI,kCAAqB,CAAC,KAAK,KAAK;YACpC,UAAU;;;IAHb,YAIL,AAAO,4BAAQ,gBAAe,YAAY,eAAe;IAJpD;cAKA,IAAI,6CAAwB;yBACZ,AAAI,4BAAiB;;;AAEtD,MAAE,MAAM;cAAG,IAAI,kCAAiB;oBAChB,IAAI;qBACH,SAAS;qBACT,IAAI;qBACJ,GAAG;uBACD,QAAQ;;;AAE3B,gBAAI,6BAAiB,CAAC;UACd,QAAY;AAAK,eAAS,MAAM,GAAG,AAAO,wBAAI;;UAC9C,YAAY;AAAK,eAAS,MAAM,GAAG,AAAO,4BAAQ,SAAQ;;UAC1D,QAAY;AAAK,eAAS,MAAM,GAAG,AAAO,4BAAQ,aAAY,YAAY,YAAY;;UACtF,UAAY;AAAK,eAAS,MAAM,GAAG,AAAO,0BAAM,YAAW,cAAc;;UACzE,UAAY;AAAK,eAAS,MAAM,GAAG,AAAO,0BAAM;sBAAO;UACvD,QAAY;AAAK,eAAS,MAAM,GAAG,AAAO,wBAAI;;AAEtD,MAAE,WAAW,KAAK,CAAC,QAAC,CAAC;AACnB,MACE,AAAE,YAAO,CAAC,iBAAiB,QAAQ,GAAG,IAAI,iBAAiB,QAAM,CAAC;MAClE,AAAE,YAAO,CAAC,mBAAmB,QAAQ,GAAG,IAAI,mBAAmB,QAAM,CAAC;;AAE1E,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test025__test: tests__test025__test
  };
});

//# sourceMappingURL=test.ddc.js.map
