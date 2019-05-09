define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Math/Color3', 'packages/ThreeDart/src/Events/Changable'], function(dart_sdk, checkGroup, Bindable, Color3, Changable) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Shapes__Shapes = Bindable.src__Shapes__Shapes;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Lights__Lights = Bindable.src__Lights__Lights;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Math__Math = Color3.src__Math__Math;
  const src__Events__Events = Changable.src__Events__Events;
  const _root = Object.create(null);
  const tests__test009__test = Object.create(_root);
  const $split = dartx.split;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  tests__test009__test.main = function() {
    let page = new common__common.ShellPage.new("Test 009");
    page.addLargeCanvas("testCanvas");
    page.addPar(JSArrayOfString().of(["Another test of the Material Lighting shader with solid color and ", "a directional lighting. The light and object don't move but the camera can be ", "moved around the object."]));
    page.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let obj = new src__Core__Core.Entity.new();
    obj.shape = src__Shapes__Shapes.toroid();
    let tech = new src__Techniques__Techniques.MaterialLight.new();
    tech.lights.add(new src__Lights__Lights.Directional.new({mover: src__Movers__Movers.Constant.vectorTowards(-1.0, -1.0, -1.0), color: src__Math__Math.Color3.white()}));
    tech.emission.color = src__Math__Math.Color3.black();
    tech.ambient.color = src__Math__Math.Color3.new(0.0, 0.0, 1.0);
    tech.diffuse.color = src__Math__Math.Color3.new(0.0, 1.0, 0.0);
    tech.specular.color = src__Math__Math.Color3.new(1.0, 0.0, 0.0);
    tech.specular.shininess = 10.0;
    let camMover = new src__Movers__Movers.Group.new();
    camMover.add(new src__Movers__Movers.UserRotater.new({input: td.userInput, invertY: true}));
    camMover.add(new src__Movers__Movers.UserRoller.new({input: td.userInput, ctrl: true}));
    camMover.add(new src__Movers__Movers.UserZoom.new({input: td.userInput}));
    camMover.add(src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0));
    td.scene = (() => {
      let _ = new src__Scenes__Scenes.EntityPass.new();
      _.technique = tech;
      _.children.add(obj);
      _.camera.mover = camMover;
      return _;
    })();
    td.postrender.once(dart.fn(_ => {
      page.addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode[$split]("\n"));
      page.addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode[$split]("\n"));
    }, EventArgsToNull()));
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test009/test.ddc", {
    "tests\\test009\\test.dart": tests__test009__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;AAYE,QAAiB,OAAO,IAAI,4BAAgB,CAAC;IAA5B,oBACE;IADF,YAEN,sBAAC,sEACR,kFACA;IAJa,YAKN,sBAAC;AAEZ,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAiB,MAAM,IAAI,0BAAgB;IAA1B,YACL,AAAO,0BAAM;AAEzB,QAAyB,OAAO,IAAI,6CAAwB;IAAnC,gBACV,IAAI,mCAAkB,SACtB,AAAI,0CAA6B,CAAC,CAAC,KAAK,CAAC,KAAK,CAAC,aAC/C,AAAI,4BAAiB;IAHX,sBAIJ,AAAI,4BAAiB;IAJjB,qBAKL,AAAI,0BAAW,CAAC,KAAK,KAAK;IALrB,qBAML,AAAI,0BAAW,CAAC,KAAK,KAAK;IANrB,sBAOJ,AAAI,0BAAW,CAAC,KAAK,KAAK;IAPtB,0BAQA;AAEzB,QAAa,WAAW,IAAI,6BAAY;IAA3B,aACL,IAAI,mCAAkB,SAAQ,EAAE,UAAU,WAAW;IADhD,aAEL,IAAI,kCAAiB,SAAQ,EAAE,UAAU,QAAQ;IAF5C,aAGL,IAAI,gCAAe,SAAQ,EAAE,UAAU;IAHlC,aAIL,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAEhD,MAAE,MAAM;cAAG,IAAI,kCAAiB;oBAChB,IAAI;qBACH,GAAG;uBACD,QAAQ;;;AAE3B,MAAE,WAAW,KAAK,CAAC,QAAC,CAAC;AACnB,MACE,AAAE,YAAO,CAAC,iBAAiB,QAAQ,GAAG,IAAI,iBAAiB,QAAM,CAAC;MAClE,AAAE,YAAO,CAAC,mBAAmB,QAAQ,GAAG,IAAI,mBAAmB,QAAM,CAAC;;AAE1E,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test009__test: tests__test009__test
  };
});

//# sourceMappingURL=test.ddc.js.map
