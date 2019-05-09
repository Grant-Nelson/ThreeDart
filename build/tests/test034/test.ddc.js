define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Math/Color3'], function(dart_sdk, checkGroup, Bindable, Color3) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Views__Views = Bindable.src__Views__Views;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Shapes__Shapes = Bindable.src__Shapes__Shapes;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Math__Math = Color3.src__Math__Math;
  const _root = Object.create(null);
  const tests__test034__test = Object.create(_root);
  const $width = dartx.width;
  const $height = dartx.height;
  const $margin = dartx.margin;
  const $border = dartx.border;
  const $padding = dartx.padding;
  const $resize = dartx.resize;
  const $overflow = dartx.overflow;
  const $replaceWith = dartx.replaceWith;
  const $add = dartx.add;
  const $children = dartx.children;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfScene = () => (JSArrayOfScene = dart.constFn(_interceptors.JSArray$(src__Scenes__Scenes.Scene)))();
  tests__test034__test.main = function() {
    let _ = new common__common.ShellPage.new("Test 034");
    _.addLargeCanvas("testCanvas");
    _.addPar(JSArrayOfString().of(["Test of resizing the render target. ", "Resizing the canvas works better in Chrome."]));
    _.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let canvas = html.document.getElementById("testCanvas");
    canvas.style[$width] = "100%";
    canvas.style[$height] = "100%";
    canvas.style[$margin] = "-4px";
    let div = html.DivElement.new();
    div.style[$border] = "2px solid";
    div.style[$padding] = "10px";
    div.style[$resize] = "both";
    div.style[$overflow] = "auto";
    canvas[$replaceWith](div);
    div[$children][$add](canvas);
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let mover = new src__Movers__Movers.Group.new();
    mover.add(new src__Movers__Movers.UserRotater.new({input: td.userInput}));
    mover.add(new src__Movers__Movers.UserRoller.new({ctrl: true, input: td.userInput}));
    mover.add(new src__Movers__Movers.UserZoom.new({input: td.userInput}));
    mover.add(src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0));
    let userCamera = new src__Views__Views.Perspective.new({mover: mover});
    let tech = new src__Techniques__Techniques.MaterialLight.new();
    tech.ambient.color = src__Math__Math.Color3.gray(0.3);
    tech.diffuse.color = src__Math__Math.Color3.gray(0.8);
    tech.diffuse.texture2D = td.textureLoader.load2DFromFile("../resources/Test.png");
    let target = new src__Views__Views.FrontTarget.new();
    target.clearColor = false;
    let obj = new src__Core__Core.Entity.new();
    obj.shape = src__Shapes__Shapes.cube();
    let pass = new src__Scenes__Scenes.EntityPass.new();
    pass.children.add(obj);
    pass.technique = tech;
    pass.target = target;
    pass.camera = userCamera;
    let skybox = src__Scenes__Scenes.CoverPass.skybox(td.textureLoader.loadCubeFromPath("../resources/maskonaive", {ext: ".jpg"}));
    skybox.target = target;
    skybox.camera = userCamera;
    td.scene = new src__Scenes__Scenes.Compound.new({passes: JSArrayOfScene().of([skybox, pass])});
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test034/test.ddc", {
    "tests\\test034\\test.dart": tests__test034__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAcE,gBAAI,4BAAgB,CAAC;qBACF;aACR,sBAAC,wCACR;aACO,sBAAC;AAEZ,QAAQ,SAAS,aAAQ,eAAe,CAAC;AACzC,IAAA,AACE,AAAE,MADE,MAAM,QACH,GAAG;IADZ,AAEE,AAAE,MAFE,MAAM,SAEF,GAAG;IAFb,AAGE,AAAE,MAHE,MAAM,SAGF,GAAG;AACb,QAAQ,MAAM,AAAI,mBAAU;AAC5B,IAAA,AACE,AAAE,GADD,MAAM,SACC,GAAG;IADb,AAEE,AAAE,GAFD,MAAM,UAEE,GAAG;IAFd,AAGE,AAAE,GAHD,MAAM,SAGC,GAAG;IAHb,AAIE,AAAE,GAJD,MAAM,WAIG,GAAG;AACf,UAAM,cAAY,CAAC,GAAG;AACtB,OAAG,WAAS,MAAI,CAAC,MAAM;AAEvB,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAa,QAAQ,IAAI,6BAAY;IAAxB,UACL,IAAI,mCAAkB,SAAQ,EAAE,UAAU;IADrC,UAEL,IAAI,kCAAiB,QAAO,aAAa,EAAE,UAAU;IAFhD,UAGL,IAAI,gCAAe,SAAQ,EAAE,UAAU;IAHlC,UAIL,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAChD,QAAkB,aAAa,IAAI,iCAAiB,SAAQ,KAAK;AAEjE,QAAyB,OAAO,IAAI,6CAAwB;IAAnC,qBACL,AAAI,2BAAgB,CAAC;IADhB,qBAEL,AAAI,2BAAgB,CAAC;IAFhB,yBAGD,EAAE,cAAc,eAAe,CAAC;AAExD,QAAkB,SAAS,IAAI,iCAAiB;IAA9B,oBACD;AAEjB,QAAiB,MAAM,IAAI,0BAAgB;IAA1B,YACL,AAAO,wBAAI;AAEvB,QAAkB,OAAO,IAAI,kCAAiB;IAA5B,kBACD,GAAG;IADF,iBAEF,IAAI;IAFF,cAGL,MAAM;IAHD,cAIL,UAAU;AAEvB,QAAiB,SAAS,AAAI,oCAAuB,CACnD,EAAE,cAAc,iBAAiB,CAAC,iCAAgC;IADnD,gBAEN,MAAM;IAFA,gBAGN,UAAU;AAErB,MAAE,MAAM,GAAG,IAAI,gCAAe,UAAS,qBAAC,MAAM,EAAE,IAAI;AAEpD,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test034__test: tests__test034__test
  };
});

//# sourceMappingURL=test.ddc.js.map
