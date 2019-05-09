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
  const tests__test029__test = Object.create(_root);
  const $split = dartx.split;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfScene = () => (JSArrayOfScene = dart.constFn(_interceptors.JSArray$(src__Scenes__Scenes.Scene)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  tests__test029__test.main = function() {
    let page = new common__common.ShellPage.new("Test 029");
    page.addLargeCanvas("testCanvas");
    page.addPar(JSArrayOfString().of(["Test of bump distort pass. It renders the scene to a back buffer then ", "paints that back buffer texture to the front buffer with a distortion."]));
    page.addControlBoxes(JSArrayOfString().of(["bumpMaps"]));
    page.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let mover = new src__Movers__Movers.Group.new();
    mover.add(new src__Movers__Movers.UserRotater.new({input: td.userInput}));
    mover.add(new src__Movers__Movers.UserRoller.new({ctrl: true, input: td.userInput}));
    mover.add(new src__Movers__Movers.UserZoom.new({input: td.userInput}));
    mover.add(src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0));
    let userCamera = new src__Views__Views.Perspective.new({mover: mover});
    let colorTarget = new src__Views__Views.BackTarget.new(800, 600, {autoResize: true});
    colorTarget.clearColor = false;
    let obj = new src__Core__Core.Entity.new();
    obj.shape = src__Shapes__Shapes.toroid();
    let tech = new src__Techniques__Techniques.MaterialLight.new();
    tech.lights.add(new src__Lights__Lights.Directional.new({mover: src__Movers__Movers.Constant.vectorTowards(0.0, -1.0, -1.0), color: src__Math__Math.Color3.white()}));
    tech.ambient.color = src__Math__Math.Color3.new(0.0, 0.0, 1.0);
    tech.diffuse.color = src__Math__Math.Color3.new(0.0, 1.0, 0.0);
    tech.specular.color = src__Math__Math.Color3.new(1.0, 0.0, 0.0);
    tech.specular.shininess = 10.0;
    let skybox = src__Scenes__Scenes.CoverPass.skybox(td.textureLoader.loadCubeFromPath("../resources/maskonaive", {ext: ".jpg"}));
    skybox.target = colorTarget;
    skybox.camera = userCamera;
    let pass = new src__Scenes__Scenes.EntityPass.new();
    pass.camera = userCamera;
    pass.technique = tech;
    pass.target = colorTarget;
    pass.children.add(obj);
    let distortTech = new src__Techniques__Techniques.Distort.new();
    distortTech.colorTexture = colorTarget.colorTexture;
    distortTech.bumpMatrix = src__Math__Math.Matrix4.scale(0.05, 0.05, 0.05);
    let distortPass = new src__Scenes__Scenes.CoverPass.new();
    distortPass.technique = distortTech;
    td.scene = new src__Scenes__Scenes.Compound.new({passes: JSArrayOfScene().of([skybox, pass, distortPass])});
    let _ = new common__common.Texture2DGroup.new("bumpMaps", dart.fn(fileName => {
      distortTech.bumpTexture = td.textureLoader.load2DFromFile(fileName);
    }, StringToNull()));
    _.add("../resources/BumpMap1.png", true);
    _.add("../resources/BumpMap2.png");
    _.add("../resources/BumpMap3.png");
    _.add("../resources/BumpMap4.png");
    _.add("../resources/BumpMap5.png");
    _.add("../resources/ScrewBumpMap.png");
    _.add("../resources/CtrlPnlBumpMap.png");
    td.postrender.once(dart.fn(_ => {
      page.addCode("Vertex Shader for distort", "glsl", 0, distortTech.vertexSourceCode[$split]("\n"));
      page.addCode("Fragment Shader for distort", "glsl", 0, distortTech.fragmentSourceCode[$split]("\n"));
    }, EventArgsToNull()));
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test029/test.ddc", {
    "tests\\test029\\test.dart": tests__test029__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;AAaE,QAAiB,OAAO,IAAI,4BAAgB,CAAC;IAA5B,oBACE;IADF,YAEN,sBAAC,0EACR;IAHa,qBAIG,sBAAC;IAJJ,YAKN,sBAAC;AAEZ,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAa,QAAQ,IAAI,6BAAY;IAAxB,UACL,IAAI,mCAAkB,SAAQ,EAAE,UAAU;IADrC,UAEL,IAAI,kCAAiB,QAAO,aAAa,EAAE,UAAU;IAFhD,UAGL,IAAI,gCAAe,SAAQ,EAAE,UAAU;IAHlC,UAIL,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAChD,QAAkB,aAAa,IAAI,iCAAiB,SAAQ,KAAK;AAEjE,QAAiB,cAAc,IAAI,gCAAgB,CAAC,KAAK,kBAAiB;IAAzD,yBACA;AAEjB,QAAiB,MAAM,IAAI,0BAAgB;IAA1B,YACL,AAAO,0BAAM;AAEzB,QAAyB,OAAO,IAAI,6CAAwB;IAAnC,gBACV,IAAI,mCAAkB,SACtB,AAAI,0CAA6B,CAAC,KAAK,CAAC,KAAK,CAAC,aAC9C,AAAI,4BAAiB;IAHX,qBAIL,AAAI,0BAAW,CAAC,KAAK,KAAK;IAJrB,qBAKL,AAAI,0BAAW,CAAC,KAAK,KAAK;IALrB,sBAMJ,AAAI,0BAAW,CAAC,KAAK,KAAK;IANtB,0BAOA;AAEzB,QAAiB,SAAS,AAAI,oCAAuB,CACnD,EAAE,cAAc,iBAAiB,CAAC,iCAAgC;IADnD,gBAEJ,WAAW;IAFP,gBAGJ,UAAU;AAEvB,QAAkB,OAAO,IAAI,kCAAiB;IAA5B,cACL,UAAU;IADL,iBAEF,IAAI;IAFF,cAGL,WAAW;IAHN,kBAID,GAAG;AAEpB,QAAmB,cAAc,IAAI,uCAAkB;IAApC,2BACA,WAAW,aAAa;IADxB,yBAEF,AAAI,6BAAkB,CAAC,MAAM,MAAM;AACpD,QAAiB,cAAc,IAAI,iCAAgB;IAAlC,wBACD,WAAW;AAE3B,MAAE,MAAM,GAAG,IAAI,gCAAe,UAAS,qBAAC,MAAM,EAAE,IAAI,EAAE,WAAW;AAEjE,gBAAI,iCAAqB,CAAC,YAAY,QAAC,QAAe;AACpD,iBAAW,YAAY,GAAG,EAAE,cAAc,eAAe,CAAC,QAAQ;;UAE5D,6BAA6B;UAC7B;UACA;UACA;UACA;UACA;UACA;AAER,MAAE,WAAW,KAAK,CAAC,QAAC,CAAC;AACnB,MACE,AAAE,YAAO,CAAC,6BAA6B,QAAQ,GAAG,WAAW,iBAAiB,QAAM,CAAC;MACrF,AAAE,YAAO,CAAC,+BAA+B,QAAQ,GAAG,WAAW,mBAAmB,QAAM,CAAC;;AAE7F,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test029__test: tests__test029__test
  };
});

//# sourceMappingURL=test.ddc.js.map
