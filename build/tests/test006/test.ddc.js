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
  const tests__test006__test = Object.create(_root);
  const $split = dartx.split;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  tests__test006__test.main = function() {
    let page = new common__common.ShellPage.new("Test 006");
    page.addLargeCanvas("testCanvas");
    page.addPar(JSArrayOfString().of(["A test of the Material Lighting shader with a bumpy 2D texture and ", "a directional light. Select different bump maps for the test. ", "The additional lines are part of shape inspection."]));
    page.addControlBoxes(JSArrayOfString().of(["bumpMaps"]));
    page.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let shape = src__Shapes__Shapes.cube();
    let tech = new src__Techniques__Techniques.MaterialLight.new();
    tech.lights.add(new src__Lights__Lights.Directional.new({mover: src__Movers__Movers.Constant.vectorTowards(0.0, 0.0, -1.0), color: src__Math__Math.Color3.white()}));
    tech.ambient.color = src__Math__Math.Color3.new(0.0, 0.0, 1.0);
    tech.diffuse.color = src__Math__Math.Color3.new(0.0, 1.0, 0.0);
    tech.specular.color = src__Math__Math.Color3.new(1.0, 0.0, 0.0);
    tech.specular.shininess = 10.0;
    let objTech = new src__Core__Core.Entity.new();
    objTech.shape = shape;
    objTech.technique = tech;
    let objInspecTech = new src__Core__Core.Entity.new();
    objInspecTech.shape = shape;
    objInspecTech.technique = (() => {
      let _ = new src__Techniques__Techniques.Inspection.new();
      _.vectorScale = 0.4;
      _.showWireFrame = true;
      _.showAxis = true;
      _.showNormals = true;
      _.showBinormals = true;
      return _;
    })();
    let group = new src__Core__Core.Entity.new();
    group.children.add(objInspecTech);
    group.children.add(objTech);
    group.mover = (() => {
      let _ = new src__Movers__Movers.Group.new();
      _.add(new src__Movers__Movers.UserRotater.new({input: td.userInput, invertY: true}));
      _.add(new src__Movers__Movers.UserRoller.new({input: td.userInput, ctrl: true}));
      _.add(new src__Movers__Movers.UserZoom.new({input: td.userInput}));
      return _;
    })();
    td.scene = (() => {
      let _ = new src__Scenes__Scenes.EntityPass.new();
      _.children.add(group);
      _.camera.mover = src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0);
      return _;
    })();
    let _ = new common__common.Texture2DGroup.new("bumpMaps", dart.fn(fileName => {
      tech.bump.texture2D = td.textureLoader.load2DFromFile(fileName);
    }, StringToNull()));
    _.add("../resources/BumpMap1.png", true);
    _.add("../resources/BumpMap2.png");
    _.add("../resources/BumpMap3.png");
    _.add("../resources/BumpMap4.png");
    _.add("../resources/BumpMap5.png");
    _.add("../resources/ScrewBumpMap.png");
    _.add("../resources/CtrlPnlBumpMap.png");
    td.postrender.once(dart.fn(_ => {
      page.addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode[$split]("\n"));
      page.addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode[$split]("\n"));
    }, EventArgsToNull()));
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test006/test.ddc", {
    "tests\\test006\\test.dart": tests__test006__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;AAYE,QAAiB,OAAO,IAAI,4BAAgB,CAAC;IAA5B,oBACE;IADF,YAEN,sBAAC,uEACR,kEACA;IAJa,qBAKG,sBAAC;IALJ,YAMN,sBAAC;AAEZ,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAa,QAAQ,AAAO,wBAAI;AAEhC,QAAyB,OAAO,IAAI,6CAAwB;IAAnC,gBACV,IAAI,mCAAkB,SACxB,AAAI,0CAA6B,CAAC,KAAK,KAAK,CAAC,aAC7C,AAAI,4BAAiB;IAHT,qBAIL,AAAI,0BAAW,CAAC,KAAK,KAAK;IAJrB,qBAKL,AAAI,0BAAW,CAAC,KAAK,KAAK;IALrB,sBAMJ,AAAI,0BAAW,CAAC,KAAK,KAAK;IANtB,0BAOA;AAEzB,QAAiB,UAAU,IAAI,0BAAgB;IAA9B,gBACL,KAAK;IADA,oBAED,IAAI;AAEpB,QAAiB,gBAAgB,IAAI,0BAAgB;IAApC,sBACL,KAAK;IADA;cAEA,IAAI,0CAAqB;sBACpB;wBACE;mBACL;sBACG;wBACE;;;AAExB,QAAiB,QAAQ,IAAI,0BAAgB;IAA5B,mBACA,aAAa;IADb,mBAEA,OAAO;IAFP;cAGJ,IAAI,6BAAY;YACnB,IAAI,mCAAkB,SAAQ,EAAE,UAAU,WAAW;YACrD,IAAI,kCAAiB,SAAQ,EAAE,UAAU,QAAQ;YACjD,IAAI,gCAAe,SAAQ,EAAE,UAAU;;;AAEjD,MAAE,MAAM;cAAG,IAAI,kCAAiB;qBACf,KAAK;uBACH,AAAI,sCAAyB,CAAC,KAAK,KAAK;;;AAE3D,gBAAI,iCAAqB,CAAC,YAAY,QAAC,QAAe;AACpD,UAAI,KAAK,UAAU,GAAG,EAAE,cAAc,eAAe,CAAC,QAAQ;;UAExD,6BAA6B;UAC7B;UACA;UACA;UACA;UACA;UACA;AAER,MAAE,WAAW,KAAK,CAAC,QAAC,CAAC;AACnB,MACE,AAAE,YAAO,CAAC,iBAAiB,QAAQ,GAAG,IAAI,iBAAiB,QAAM,CAAC;MAClE,AAAE,YAAO,CAAC,mBAAmB,QAAQ,GAAG,IAAI,mBAAmB,QAAM,CAAC;;AAE1E,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test006__test: tests__test006__test
  };
});

//# sourceMappingURL=test.ddc.js.map
