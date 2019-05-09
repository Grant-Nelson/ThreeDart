define(['dart_sdk', 'packages/ThreeDart/src/Math/Color3', 'packages/ThreeDart/src/Core/Bindable', 'web/common/checkGroup', 'packages/ThreeDart/src/Events/Changable'], function(dart_sdk, Color3, Bindable, checkGroup, Changable) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__Math__Math = Color3.src__Math__Math;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Shapes__Shapes = Bindable.src__Shapes__Shapes;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Lights__Lights = Bindable.src__Lights__Lights;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const common__common = checkGroup.common__common;
  const src__Events__Events = Changable.src__Events__Events;
  const _root = Object.create(null);
  const tests__test021__test = Object.create(_root);
  const $split = dartx.split;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  tests__test021__test.addLightBall = function(tech, pass, r, g, b, yaw, pitch, roll) {
    let clr = src__Math__Math.Color3.new(r, g, b);
    let mover = new src__Movers__Movers.Group.new();
    mover.add(src__Movers__Movers.Constant.translate(0.0, 0.0, 2.0));
    mover.add(new src__Movers__Movers.Rotater.new({deltaYaw: yaw, deltaPitch: pitch, deltaRoll: roll}));
    let obj = new src__Core__Core.Entity.new();
    obj.mover = (() => {
      let _ = new src__Movers__Movers.Group.new();
      _.add(src__Movers__Movers.Constant.scale(0.1, 0.1, 0.1));
      _.add(mover);
      return _;
    })();
    obj.shape = src__Shapes__Shapes.sphere();
    obj.technique = (() => {
      let _ = new src__Techniques__Techniques.MaterialLight.new();
      _.emission.color = clr;
      return _;
    })();
    let point = new src__Lights__Lights.Point.new({mover: mover, color: clr, attenuation0: 1.0, attenuation1: 0.5, attenuation2: 0.15});
    tech.lights.add(point);
    pass.children.add(obj);
  };
  tests__test021__test.main = function() {
    let page = new common__common.ShellPage.new("Test 021");
    page.addLargeCanvas("testCanvas");
    page.addPar(JSArrayOfString().of(["Test of the Material Lighting shader with multiple moving point lights. ", "Emissive spheres are added at the lights sources."]));
    page.addControlBoxes(JSArrayOfString().of(["shapes"]));
    page.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let centerObj = new src__Core__Core.Entity.new();
    centerObj.mover = src__Movers__Movers.Constant.identity();
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
    let tech = new src__Techniques__Techniques.MaterialLight.new();
    tech.ambient.color = src__Math__Math.Color3.gray(0.4);
    tech.diffuse.color = src__Math__Math.Color3.gray(0.4);
    tech.specular.color = src__Math__Math.Color3.gray(0.3);
    tech.specular.shininess = 100.0;
    let pass = new src__Scenes__Scenes.EntityPass.new();
    pass.technique = tech;
    pass.children.add(room);
    pass.children.add(centerObj);
    pass.camera.mover = camMover;
    td.scene = pass;
    tests__test021__test.addLightBall(tech, pass, 1.0, 0.0, 0.0, 0.3, 0.0, 0.0);
    tests__test021__test.addLightBall(tech, pass, 0.0, 1.0, 0.0, 0.0, 0.4, 0.0);
    tests__test021__test.addLightBall(tech, pass, 0.0, 0.0, 1.0, 0.5, 0.5, 0.0);
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
  dart.trackLibraries("web/tests/test021/test.ddc", {
    "tests\\test021\\test.dart": tests__test021__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;+CAWkB,IAA6B,EAAE,IAAsB,EACnE,CAAQ,EAAE,CAAQ,EAAE,CAAQ,EAAE,GAAU,EAAE,KAAY,EAAE,IAAW;AACrE,QAAY,MAAM,AAAI,0BAAW,CAAC,CAAC,EAAE,CAAC,EAAE,CAAC;AAEzC,QAAa,QAAQ,IAAI,6BAAY;IAAxB,UACL,AAAI,sCAAyB,CAAC,KAAK,KAAK;IADnC,UAEL,IAAI,+BAAc,YAAW,GAAG,cAAc,KAAK,aAAa,IAAI;AAE5E,QAAiB,MAAM,IAAI,0BAAgB;IAA1B;cACJ,IAAI,6BAAY;YACT,AAAI,kCAAqB,CAAC,KAAK,KAAK;YACpC,KAAK;;;IAHR,YAIL,AAAO,0BAAM;IAJR;cAKA,IAAI,6CAAwB;yBACZ,GAAG;;;AAEpC,QAAa,QAAQ,IAAI,6BAAY,SAC5B,KAAK,SACL,GAAG,gBACI,mBACA,mBACA;AAEhB,QAAI,OAAO,IAAI,CAAC,KAAK;AACrB,QAAI,SAAS,IAAI,CAAC,GAAG;EACvB;;AAGE,QAAiB,OAAO,IAAI,4BAAgB,CAAC;IAA5B,oBACE;IADF,YAEN,sBAAC,4EACR;IAHa,qBAIG,sBAAC;IAJJ,YAKN,sBAAC;AAEZ,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAiB,YAAY,IAAI,0BAAgB;IAAhC,kBACL,AAAI,qCAAwB;IADvB,kBAEL,AAAO,0BAAM;AAEzB,QAAiB,OAAO,IAAI,0BAAgB;IAA3B,aACL,AAAI,kCAAqB,CAAC,KAAK,KAAK;IAD/B;cAEJ,AAAO,wBAAI;;;;AAExB,QAAa,WAAW,IAAI,6BAAY;IAA3B,aACL,IAAI,mCAAkB,SAAQ,EAAE,UAAU;IADrC,aAEL,IAAI,kCAAiB,SAAQ,EAAE,UAAU,QAAQ;IAF5C,aAGL,IAAI,gCAAe,SAAQ,EAAE,UAAU;IAHlC,aAIL,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAEhD,QAAyB,OAAO,IAAI,6CAAwB;IAAnC,qBACL,AAAI,2BAAgB,CAAC;IADhB,qBAEL,AAAI,2BAAgB,CAAC;IAFhB,sBAGJ,AAAI,2BAAgB,CAAC;IAHjB,0BAIA;AAEzB,QAAkB,OAAO,IAAI,kCAAiB;IAA5B,iBACF,IAAI;IADF,kBAED,IAAI;IAFH,kBAGD,SAAS;IAHR,oBAIC,QAAQ;AAC3B,MAAE,MAAM,GAAG,IAAI;AACf,qCAAY,CAAC,IAAI,EAAE,IAAI,EAAE,KAAK,KAAK,KAAK,KAAK,KAAK;AAClD,qCAAY,CAAC,IAAI,EAAE,IAAI,EAAE,KAAK,KAAK,KAAK,KAAK,KAAK;AAClD,qCAAY,CAAC,IAAI,EAAE,IAAI,EAAE,KAAK,KAAK,KAAK,KAAK,KAAK;AAElD,gBAAI,6BAAiB,CAAC;UACd,QAAY;AAAK,eAAS,MAAM,GAAG,AAAO,wBAAI;;UAC9C,YAAY;AAAK,eAAS,MAAM,GAAG,AAAO,4BAAQ,SAAQ;;UAC1D,QAAY;AAAK,eAAS,MAAM,GAAG,AAAO,4BAAQ,aAAY,YAAY,YAAY;;UACtF,UAAY;AAAK,eAAS,MAAM,GAAG,AAAO,0BAAM,YAAW,cAAc;;UACzE,UAAY;AAAK,eAAS,MAAM,GAAG,AAAO,0BAAM;sBAAO;UACvD,QAAY;AAAK,eAAS,MAAM,GAAG,AAAO,wBAAI;;AAEtD,MAAE,WAAW,KAAK,CAAC,QAAC,CAAC;AACnB,MACE,AAAE,YAAO,CAAC,iBAAiB,QAAQ,GAAG,IAAI,iBAAiB,QAAM,CAAC;MAClE,AAAE,YAAO,CAAC,mBAAmB,QAAQ,GAAG,IAAI,mBAAmB,QAAM,CAAC;;AAE1E,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test021__test: tests__test021__test
  };
});

//# sourceMappingURL=test.ddc.js.map
