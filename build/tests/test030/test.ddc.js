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
  const src__Views__Views = Bindable.src__Views__Views;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Math__Math = Color3.src__Math__Math;
  const src__Events__Events = Changable.src__Events__Events;
  const _root = Object.create(null);
  const tests__test030__test = Object.create(_root);
  const $split = dartx.split;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  tests__test030__test.main = function() {
    let page = new common__common.ShellPage.new("Test 030");
    page.addLargeCanvas("testCanvas");
    page.addPar(JSArrayOfString().of(["A test of the Normal shader for dynamically rendering normal maps."]));
    page.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let obj = new src__Core__Core.Entity.new();
    obj.shape = src__Shapes__Shapes.cube();
    obj.mover = (() => {
      let _ = new src__Movers__Movers.Group.new();
      _.add(new src__Movers__Movers.UserRotater.new({input: td.userInput}));
      _.add(new src__Movers__Movers.UserRoller.new({input: td.userInput, ctrl: true}));
      _.add(new src__Movers__Movers.UserZoom.new({input: td.userInput}));
      return _;
    })();
    let tech = new src__Techniques__Techniques.Normal.new();
    tech.bumpyTextureCube = td.textureLoader.loadCubeFromPath("../resources/diceBumpMap");
    let target = new src__Views__Views.FrontTarget.new();
    target.color = src__Math__Math.Color4.new(0.5, 0.5, 1.0, 1.0);
    let pass = new src__Scenes__Scenes.EntityPass.new();
    pass.technique = tech;
    pass.target = target;
    pass.children.add(obj);
    pass.camera.mover = src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0);
    td.scene = pass;
    td.postrender.once(dart.fn(_ => {
      page.addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode[$split]("\n"));
      page.addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode[$split]("\n"));
    }, EventArgsToNull()));
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test030/test.ddc", {
    "tests\\test030\\test.dart": tests__test030__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;AAYE,QAAiB,OAAO,IAAI,4BAAgB,CAAC;IAA5B,oBACE;IADF,YAEN,sBAAC;IAFK,YAGN,sBAAC;AAEZ,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAiB,MAAM,IAAI,0BAAgB;IAA1B,YACL,AAAO,wBAAI;IADN;cAEJ,IAAI,6BAAY;YACnB,IAAI,mCAAkB,SAAQ,EAAE,UAAU;YAC1C,IAAI,kCAAiB,SAAQ,EAAE,UAAU,QAAQ;YACjD,IAAI,gCAAe,SAAQ,EAAE,UAAU;;;AAEjD,QAAkB,OAAO,IAAI,sCAAiB;IAA5B,wBACK,EAAE,cAAc,iBAAiB,CAAC;AAEzD,QAAkB,SAAS,IAAI,iCAAiB;IAA9B,eACN,AAAI,0BAAW,CAAC,KAAK,KAAK,KAAK;AAE3C,QAAkB,OAAO,IAAI,kCAAiB;IAA5B,iBACF,IAAI;IADF,cAEL,MAAM;IAFD,kBAGD,GAAG;IAHF,oBAIC,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAC3D,MAAE,MAAM,GAAG,IAAI;AAEf,MAAE,WAAW,KAAK,CAAC,QAAC,CAAC;AACnB,MACE,AAAE,YAAO,CAAC,iBAAiB,QAAQ,GAAG,IAAI,iBAAiB,QAAM,CAAC;MAClE,AAAE,YAAO,CAAC,mBAAmB,QAAQ,GAAG,IAAI,mBAAmB,QAAM,CAAC;;AAE1E,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test030__test: tests__test030__test
  };
});

//# sourceMappingURL=test.ddc.js.map
