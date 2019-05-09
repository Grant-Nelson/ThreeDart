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
  const tests__test020__test = Object.create(_root);
  const $split = dartx.split;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  tests__test020__test.main = function() {
    let page = new common__common.ShellPage.new("Test 020");
    page.addLargeCanvas("testCanvas");
    page.addPar(JSArrayOfString().of(["Test of the Matrial Lighting shader with multiple moving directional lights."]));
    page.addControlBoxes(JSArrayOfString().of(["shapes"]));
    page.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let redDir = new src__Lights__Lights.Directional.new({mover: new src__Movers__Movers.Rotater.new({deltaYaw: 0.3, deltaPitch: 0.0, deltaRoll: 0.0}), color: src__Math__Math.Color3.new(1.0, 0.0, 0.0)});
    let greenDir = new src__Lights__Lights.Directional.new({mover: new src__Movers__Movers.Rotater.new({deltaYaw: 0.0, deltaPitch: 0.4, deltaRoll: 0.0}), color: src__Math__Math.Color3.new(0.0, 1.0, 0.0)});
    let blueDir = new src__Lights__Lights.Directional.new({mover: new src__Movers__Movers.Rotater.new({deltaYaw: 0.5, deltaPitch: 0.5, deltaRoll: 0.0}), color: src__Math__Math.Color3.new(0.0, 0.0, 1.0)});
    let tech = new src__Techniques__Techniques.MaterialLight.new();
    tech.lights.add(redDir);
    tech.lights.add(greenDir);
    tech.lights.add(blueDir);
    tech.emission.color = src__Math__Math.Color3.black();
    tech.ambient.color = src__Math__Math.Color3.gray(0.1);
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
    camMover.add(new src__Movers__Movers.UserRoller.new({input: td.userInput, ctrl: true}));
    camMover.add(new src__Movers__Movers.UserZoom.new({input: td.userInput}));
    camMover.add(src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0));
    td.scene = (() => {
      let _ = new src__Scenes__Scenes.EntityPass.new();
      _.technique = tech;
      _.children.add(centerObj);
      _.children.add(room);
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
  dart.trackLibraries("web/tests/test020/test.ddc", {
    "tests\\test020\\test.dart": tests__test020__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;AAYE,QAAiB,OAAO,IAAI,4BAAgB,CAAC;IAA5B,oBACE;IADF,YAEN,sBAAC;IAFK,qBAGG,sBAAC;IAHJ,YAIN,sBAAC;AAEZ,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAmB,SAAS,IAAI,mCAAkB,SACzC,IAAI,+BAAc,YAAW,iBAAiB,gBAAgB,cAC9D,AAAI,0BAAW,CAAC,KAAK,KAAK;AAEnC,QAAmB,WAAW,IAAI,mCAAkB,SAC3C,IAAI,+BAAc,YAAW,iBAAiB,gBAAgB,cAC9D,AAAI,0BAAW,CAAC,KAAK,KAAK;AAEnC,QAAmB,UAAU,IAAI,mCAAkB,SAC1C,IAAI,+BAAc,YAAW,iBAAiB,gBAAgB,cAC9D,AAAI,0BAAW,CAAC,KAAK,KAAK;AAEnC,QAAyB,OAAO,IAAI,6CAAwB;IAAnC,gBACV,MAAM;IADI,gBAEV,QAAQ;IAFE,gBAGV,OAAO;IAHG,sBAIJ,AAAI,4BAAiB;IAJjB,qBAKL,AAAI,2BAAgB,CAAC;IALhB,qBAML,AAAI,2BAAgB,CAAC;IANhB,sBAOJ,AAAI,2BAAgB,CAAC;IAPjB,0BAQA;AAEzB,QAAiB,YAAY,IAAI,0BAAgB;IAAhC,kBACL,AAAO,0BAAM;AAEzB,QAAiB,OAAO,IAAI,0BAAgB;IAA3B,aACL,AAAI,kCAAqB,CAAC,KAAK,KAAK;IAD/B;cAEJ,AAAO,wBAAI;;;;AAExB,QAAa,WAAW,IAAI,6BAAY;IAA3B,aACP,IAAI,mCAAkB,SAAQ,EAAE,UAAU;IADnC,aAEP,IAAI,kCAAiB,SAAQ,EAAE,UAAU,QAAQ;IAF1C,aAGP,IAAI,gCAAe,SAAQ,EAAE,UAAU;IAHhC,aAIP,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAE9C,MAAE,MAAM;cAAG,IAAI,kCAAiB;oBAChB,IAAI;qBACH,SAAS;qBACT,IAAI;uBACF,QAAQ;;;AAE3B,gBAAI,6BAAiB,CAAC;UACd,QAAY;AAAK,eAAS,MAAM,GAAG,AAAO,wBAAI;;UAC9C,YAAY;AAAK,eAAS,MAAM,GAAG,AAAO,4BAAQ,SAAQ;;UAC1D,QAAY;AAAK,eAAS,MAAM,GAAG,AAAO,4BAAQ,aAAY,YAAY,YAAY;;UACtF,UAAY;AAAK,eAAS,MAAM,GAAG,AAAO,0BAAM,YAAW,cAAc;;UACzE,UAAY;AAAK,eAAS,MAAM,GAAG,AAAO,0BAAM;sBAAO;UACvD,QAAY;AAAK,eAAS,MAAM,GAAG,AAAO,wBAAI;;AAEtD,MAAE,WAAW,KAAK,CAAC,QAAC,CAAC;AACnB,MACE,AAAE,YAAO,CAAC,iBAAiB,QAAQ,GAAG,IAAI,iBAAiB,QAAM,CAAC;MAClE,AAAE,YAAO,CAAC,mBAAmB,QAAQ,GAAG,IAAI,mBAAmB,QAAM,CAAC;;AAE1E,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test020__test: tests__test020__test
  };
});

//# sourceMappingURL=test.ddc.js.map
