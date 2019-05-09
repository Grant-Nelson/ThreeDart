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
  const tests__test007__test = Object.create(_root);
  const $split = dartx.split;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  tests__test007__test.main = function() {
    let page = new common__common.ShellPage.new("Test 007");
    page.addLargeCanvas("testCanvas");
    page.addPar(JSArrayOfString().of(["A test of the Material Lighting shader with bumpy 2D textures and ", "a directional light. The lighting and bump is being applied to ", "ambient, diffuse, and specular 2D texturing."]));
    page.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let obj = new src__Core__Core.Entity.new();
    obj.shape = src__Shapes__Shapes.cube();
    obj.mover = (() => {
      let _ = new src__Movers__Movers.Group.new();
      _.add(new src__Movers__Movers.UserRotater.new({input: td.userInput, invertY: true}));
      _.add(new src__Movers__Movers.UserRoller.new({input: td.userInput, ctrl: true}));
      _.add(new src__Movers__Movers.UserZoom.new({input: td.userInput}));
      return _;
    })();
    let color = td.textureLoader.load2DFromFile("../resources/ScrewColor.png");
    let tech = new src__Techniques__Techniques.MaterialLight.new();
    tech.lights.add(new src__Lights__Lights.Directional.new({mover: src__Movers__Movers.Constant.vectorTowards(0.0, 0.0, -1.0), color: src__Math__Math.Color3.white()}));
    tech.ambient.color = src__Math__Math.Color3.new(0.2, 0.2, 0.2);
    tech.diffuse.color = src__Math__Math.Color3.new(0.8, 0.8, 0.8);
    tech.ambient.texture2D = color;
    tech.diffuse.texture2D = color;
    tech.bump.texture2D = td.textureLoader.load2DFromFile("../resources/ScrewBumpMap.png");
    tech.specular.color = src__Math__Math.Color3.white();
    tech.specular.texture2D = td.textureLoader.load2DFromFile("../resources/ScrewSpecular.png");
    tech.specular.shininess = 10.0;
    td.scene = (() => {
      let _ = new src__Scenes__Scenes.EntityPass.new();
      _.technique = tech;
      _.children.add(obj);
      _.camera.mover = src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0);
      return _;
    })();
    td.postrender.once(dart.fn(_ => {
      page.addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode[$split]("\n"));
      page.addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode[$split]("\n"));
    }, EventArgsToNull()));
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test007/test.ddc", {
    "tests\\test007\\test.dart": tests__test007__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;AAaE,QAAiB,OAAO,IAAI,4BAAgB,CAAC;IAA5B,oBACE;IADF,YAEN,sBAAC,sEACR,mEACA;IAJa,YAKN,sBAAC;AAEZ,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAiB,MAAM,IAAI,0BAAgB;IAA1B,YACL,AAAO,wBAAI;IADN;cAEJ,IAAI,6BAAY;YACnB,IAAI,mCAAkB,SAAQ,EAAE,UAAU,WAAW;YACrD,IAAI,kCAAiB,SAAQ,EAAE,UAAU,QAAQ;YACjD,IAAI,gCAAe,SAAQ,EAAE,UAAU;;;AAEjD,QAAmB,QAAQ,EAAE,cAAc,eAAe,CAAC;AAC3D,QAAyB,OAAO,IAAI,6CAAwB;IAAnC,gBACV,IAAI,mCAAkB,SACtB,AAAI,0CAA6B,CAAC,KAAK,KAAK,CAAC,aAC7C,AAAI,4BAAiB;IAHX,qBAIL,AAAI,0BAAW,CAAC,KAAK,KAAK;IAJrB,qBAKL,AAAI,0BAAW,CAAC,KAAK,KAAK;IALrB,yBAMD,KAAK;IANJ,yBAOD,KAAK;IAPJ,sBAQJ,EAAE,cAAc,eAAe,CAAC;IAR5B,sBASJ,AAAI,4BAAiB;IATjB,0BAUA,EAAE,cAAc,eAAe,CAAC;IAVhC,0BAWA;AAEzB,MAAE,MAAM;cAAG,IAAI,kCAAiB;oBAChB,IAAI;qBACH,GAAG;uBACD,AAAI,sCAAyB,CAAC,KAAK,KAAK;;;AAE3D,MAAE,WAAW,KAAK,CAAC,QAAC,CAAC;AACnB,MACE,AAAE,YAAO,CAAC,iBAAiB,QAAQ,GAAG,IAAI,iBAAiB,QAAM,CAAC;MAClE,AAAE,YAAO,CAAC,mBAAmB,QAAQ,GAAG,IAAI,mBAAmB,QAAM,CAAC;;AAE1E,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test007__test: tests__test007__test
  };
});

//# sourceMappingURL=test.ddc.js.map
