define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Math/Color3', 'packages/ThreeDart/src/Events/Changable'], function(dart_sdk, checkGroup, Bindable, Color3, Changable) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Views__Views = Bindable.src__Views__Views;
  const src__Shapes__Shapes = Bindable.src__Shapes__Shapes;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Lights__Lights = Bindable.src__Lights__Lights;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Math__Math = Color3.src__Math__Math;
  const src__Events__Events = Changable.src__Events__Events;
  const _root = Object.create(null);
  const tests__test013__test = Object.create(_root);
  const $split = dartx.split;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfScene = () => (JSArrayOfScene = dart.constFn(_interceptors.JSArray$(src__Scenes__Scenes.Scene)))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  tests__test013__test.main = function() {
    let page = new common__common.ShellPage.new("Test 013");
    page.addLargeCanvas("testCanvas");
    page.addPar(JSArrayOfString().of(["Test of sky box and cover pass."]));
    page.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let secondMover = new src__Movers__Movers.Group.new();
    secondMover.add(new src__Movers__Movers.UserRotater.new({input: td.userInput}));
    secondMover.add(new src__Movers__Movers.UserRoller.new({ctrl: true, input: td.userInput}));
    secondMover.add(new src__Movers__Movers.UserZoom.new({input: td.userInput}));
    secondMover.add(src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0));
    let userCamera = new src__Views__Views.Perspective.new({mover: secondMover});
    let target = new src__Views__Views.FrontTarget.new();
    target.clearColor = false;
    let obj = new src__Core__Core.Entity.new();
    obj.shape = src__Shapes__Shapes.toroid();
    let tech = new src__Techniques__Techniques.MaterialLight.new();
    tech.lights.add(new src__Lights__Lights.Directional.new({mover: src__Movers__Movers.Constant.vectorTowards(0.0, -1.0, -1.0), color: src__Math__Math.Color3.white()}));
    tech.ambient.color = src__Math__Math.Color3.new(0.0, 0.0, 1.0);
    tech.diffuse.color = src__Math__Math.Color3.new(0.0, 1.0, 0.0);
    tech.specular.color = src__Math__Math.Color3.new(1.0, 0.0, 0.0);
    tech.specular.shininess = 10.0;
    let skybox = src__Scenes__Scenes.CoverPass.skybox(td.textureLoader.loadCubeFromPath("../resources/maskonaive", {ext: ".jpg"}));
    skybox.target = target;
    skybox.camera = userCamera;
    let pass = new src__Scenes__Scenes.EntityPass.new();
    pass.camera = userCamera;
    pass.technique = tech;
    pass.target = target;
    pass.children.add(obj);
    td.scene = new src__Scenes__Scenes.Compound.new({passes: JSArrayOfScene().of([skybox, pass])});
    td.postrender.once(dart.fn(_ => {
      let skyTech = src__Techniques__Techniques.Skybox.as(skybox.technique);
      page.addCode("Vertex Shader for Skybox", "glsl", 0, skyTech.vertexSourceCode[$split]("\n"));
      page.addCode("Fragment Shader for Skybox", "glsl", 0, skyTech.fragmentSourceCode[$split]("\n"));
    }, EventArgsToNull()));
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test013/test.ddc", {
    "tests\\test013\\test.dart": tests__test013__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;AAcE,QAAiB,OAAO,IAAI,4BAAgB,CAAC;IAA5B,oBACE;IADF,YAEN,sBAAC;IAFK,YAGN,sBAAC;AAEZ,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAa,cAAc,IAAI,6BAAY;IAA9B,gBACL,IAAI,mCAAkB,SAAQ,EAAE,UAAU;IADrC,gBAEL,IAAI,kCAAiB,QAAO,aAAa,EAAE,UAAU;IAFhD,gBAGL,IAAI,gCAAe,SAAQ,EAAE,UAAU;IAHlC,gBAIL,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAChD,QAAkB,aAAa,IAAI,iCAAiB,SAAQ,WAAW;AAEvE,QAAkB,SAAS,IAAI,iCAAiB;IAA9B,oBACD;AAEjB,QAAiB,MAAM,IAAI,0BAAgB;IAA1B,YACL,AAAO,0BAAM;AAEzB,QAAyB,OAAO,IAAI,6CAAwB;IAAnC,gBACV,IAAI,mCAAkB,SACtB,AAAI,0CAA6B,CAAC,KAAK,CAAC,KAAK,CAAC,aAC9C,AAAI,4BAAiB;IAHX,qBAIJ,AAAI,0BAAW,CAAC,KAAK,KAAK;IAJtB,qBAKJ,AAAI,0BAAW,CAAC,KAAK,KAAK;IALtB,sBAMJ,AAAI,0BAAW,CAAC,KAAK,KAAK;IANtB,0BAOA;AAEzB,QAAiB,SAAS,AAAI,oCAAuB,CACnD,EAAE,cAAc,iBAAiB,CAAC,iCAAgC;IADnD,gBAEJ,MAAM;IAFF,gBAGJ,UAAU;AAEvB,QAAkB,OAAO,IAAI,kCAAiB;IAA5B,cACF,UAAU;IADR,iBAEF,IAAI;IAFF,cAGF,MAAM;IAHJ,kBAID,GAAG;AAEpB,MAAE,MAAM,GAAG,IAAI,gCAAe,UAAS,qBAAC,MAAM,EAAE,IAAI;AAEpD,MAAE,WAAW,KAAK,CAAC,QAAC,CAAC;AACnB,UAAkB,gDAAU,MAAM,UAAU;AAC5C,MACE,AAAE,YAAO,CAAC,4BAA4B,QAAQ,GAAG,OAAO,iBAAiB,QAAM,CAAC;MAChF,AAAE,YAAO,CAAC,8BAA8B,QAAQ,GAAG,OAAO,mBAAmB,QAAM,CAAC;;AAExF,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test013__test: tests__test013__test
  };
});

//# sourceMappingURL=test.ddc.js.map
