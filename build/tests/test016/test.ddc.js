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
  const tests__test016__test = Object.create(_root);
  const $split = dartx.split;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfScene = () => (JSArrayOfScene = dart.constFn(_interceptors.JSArray$(src__Scenes__Scenes.Scene)))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  tests__test016__test.main = function() {
    let page = new common__common.ShellPage.new("Test 016");
    page.addLargeCanvas("testCanvas");
    page.addPar(JSArrayOfString().of(["A test of the Material Lighting shader with cube texturing, ", "bump mapping, and a color directional light."]));
    page.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let target = new src__Views__Views.FrontTarget.new();
    target.clearColor = false;
    let obj = new src__Core__Core.Entity.new();
    obj.shape = src__Shapes__Shapes.cube();
    let environment = td.textureLoader.loadCubeFromPath("../resources/maskonaive", {ext: ".jpg"});
    let color = td.textureLoader.loadCubeFromPath("../resources/diceColor");
    let tech = new src__Techniques__Techniques.MaterialLight.new();
    tech.lights.add(new src__Lights__Lights.Directional.new({mover: src__Movers__Movers.Constant.vectorTowards(1.0, -1.0, -3.0), color: src__Math__Math.Color3.white()}));
    tech.ambient.color = src__Math__Math.Color3.new(0.2, 0.2, 0.2);
    tech.diffuse.color = src__Math__Math.Color3.new(0.7, 0.7, 0.7);
    tech.specular.color = src__Math__Math.Color3.new(0.7, 0.7, 0.7);
    tech.ambient.textureCube = color;
    tech.diffuse.textureCube = color;
    tech.specular.textureCube = td.textureLoader.loadCubeFromPath("../resources/diceSpecular");
    tech.specular.shininess = 10.0;
    tech.bump.textureCube = td.textureLoader.loadCubeFromPath("../resources/diceBumpMap");
    tech.environment = environment;
    tech.reflection.color = src__Math__Math.Color3.new(0.3, 0.3, 0.3);
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
    td.postrender.once(dart.fn(_ => {
      page.addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode[$split]("\n"));
      page.addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode[$split]("\n"));
    }, EventArgsToNull()));
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test016/test.ddc", {
    "tests\\test016\\test.dart": tests__test016__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;AAcE,QAAiB,OAAO,IAAI,4BAAgB,CAAC;IAA5B,oBACE;IADF,YAEN,sBAAC,gEACR;IAHa,YAIN,sBAAC;AAEZ,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAkB,SAAS,IAAI,iCAAiB;IAA9B,oBACD;AAEjB,QAAiB,MAAM,IAAI,0BAAgB;IAA1B,YACL,AAAO,wBAAI;AAEvB,QAAqB,cACnB,EAAE,cAAc,iBAAiB,CAAC,iCAAgC;AACpE,QAAqB,QAAQ,EAAE,cAAc,iBAAiB,CAAC;AAC/D,QAAyB,OAAO,IAAI,6CAAwB;IAAnC,gBACV,IAAI,mCAAkB,SACtB,AAAI,0CAA6B,CAAC,KAAK,CAAC,KAAK,CAAC,aAC9C,AAAI,4BAAiB;IAHX,qBAIL,AAAI,0BAAW,CAAC,KAAK,KAAK;IAJrB,qBAKL,AAAI,0BAAW,CAAC,KAAK,KAAK;IALrB,sBAMJ,AAAI,0BAAW,CAAC,KAAK,KAAK;IANtB,2BAOC,KAAK;IAPN,2BAQC,KAAK;IARN,4BASE,EAAE,cAAc,iBAAiB,CAAC;IATpC,0BAUA;IAVA,wBAWF,EAAE,cAAc,iBAAiB,CAAC;IAXhC,mBAYP,WAAW;IAZJ,wBAaF,AAAI,0BAAW,CAAC,KAAK,KAAK;AAEjD,QAAa,QAAQ,IAAI,6BAAY;IAAxB,UACL,IAAI,mCAAkB,SAAQ,EAAE,UAAU;IADrC,UAEL,IAAI,kCAAiB,SAAQ,EAAE,UAAU,QAAQ;IAF5C,UAGL,IAAI,gCAAe,SAAQ,EAAE,UAAU;IAHlC,UAIL,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAEhD,QAAkB,SAAS,IAAI,iCAAiB,SAAQ,KAAK;AAE7D,QAAiB,SAAS,AAAI,oCAAuB,CAAC,WAAW;IAAhD,gBACJ,MAAM;IADF,gBAEJ,MAAM;AAEnB,QAAkB,OAAO,IAAI,kCAAiB;IAA5B,cACL,MAAM;IADD,iBAEF,IAAI;IAFF,cAGL,MAAM;IAHD,kBAID,GAAG;AACpB,qCAAC,IAAI,OAAO,YAAiC,GAAG;AAEhD,MAAE,MAAM,GAAG,IAAI,gCAAe,UAAS,qBAAC,MAAM,EAAE,IAAI;AAEpD,MAAE,WAAW,KAAK,CAAC,QAAC,CAAC;AACnB,MACE,AAAE,YAAO,CAAC,iBAAiB,QAAQ,GAAG,IAAI,iBAAiB,QAAM,CAAC;MAClE,AAAE,YAAO,CAAC,mBAAmB,QAAQ,GAAG,IAAI,mBAAmB,QAAM,CAAC;;AAE1E,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test016__test: tests__test016__test
  };
});

//# sourceMappingURL=test.ddc.js.map
