define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Math/Color3'], function(dart_sdk, checkGroup, Bindable, Color3) {
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
  const src__Lights__Lights = Bindable.src__Lights__Lights;
  const src__Math__Math = Color3.src__Math__Math;
  const _root = Object.create(null);
  const tests__test031__test = Object.create(_root);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfScene = () => (JSArrayOfScene = dart.constFn(_interceptors.JSArray$(src__Scenes__Scenes.Scene)))();
  tests__test031__test.main = function() {
    let _ = new common__common.ShellPage.new("Test 031");
    _.addLargeCanvas("testCanvas");
    _.addPar(JSArrayOfString().of(["A test of the Distortion cover with a dynamic normal map. ", "The distortion map is generated into one back buffer. ", "The scene is generated into another back buffer. ", "The two parts are combined with a Distortion cover. ", "Use mouse to rotate cube in normal map and Ctrl plus mouse ", "to rotate scene."]));
    _.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let normalObj = new src__Core__Core.Entity.new();
    normalObj.shape = src__Shapes__Shapes.cube();
    normalObj.mover = (() => {
      let _ = new src__Movers__Movers.Group.new();
      _.add(new src__Movers__Movers.UserRotater.new({input: td.userInput}));
      _.add(new src__Movers__Movers.UserZoom.new({input: td.userInput}));
      return _;
    })();
    let normalTech = new src__Techniques__Techniques.Normal.new();
    normalTech.bumpyTextureCube = td.textureLoader.loadCubeFromPath("../resources/diceBumpMap");
    let normalTarget = new src__Views__Views.BackTarget.new(800, 600, {autoResize: true});
    normalTarget.color = src__Math__Math.Color4.new(0.5, 0.5, 1.0, 1.0);
    let normalPass = new src__Scenes__Scenes.EntityPass.new();
    normalPass.technique = normalTech;
    normalPass.target = normalTarget;
    normalPass.children.add(normalObj);
    normalPass.camera.mover = src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0);
    let secondMover = new src__Movers__Movers.Group.new();
    secondMover.add(new src__Movers__Movers.UserRotater.new({ctrl: true, input: td.userInput}));
    secondMover.add(new src__Movers__Movers.UserZoom.new({ctrl: true, input: td.userInput}));
    secondMover.add(src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0));
    let userCamera = new src__Views__Views.Perspective.new({mover: secondMover});
    let colorTarget = new src__Views__Views.BackTarget.new(800, 600, {autoResize: true});
    colorTarget.clearColor = false;
    let colorObj = new src__Core__Core.Entity.new();
    colorObj.shape = src__Shapes__Shapes.toroid();
    let colorTech = new src__Techniques__Techniques.MaterialLight.new();
    colorTech.lights.add(new src__Lights__Lights.Directional.new({mover: src__Movers__Movers.Constant.vectorTowards(0.0, -1.0, -1.0), color: src__Math__Math.Color3.white()}));
    colorTech.ambient.color = src__Math__Math.Color3.new(0.0, 0.0, 1.0);
    colorTech.diffuse.color = src__Math__Math.Color3.new(0.0, 1.0, 0.0);
    colorTech.specular.color = src__Math__Math.Color3.new(1.0, 0.0, 0.0);
    colorTech.specular.shininess = 10.0;
    let skybox = src__Scenes__Scenes.CoverPass.skybox(td.textureLoader.loadCubeFromPath("../resources/maskonaive", {ext: ".jpg"}));
    skybox.target = colorTarget;
    skybox.camera = userCamera;
    let colorPass = new src__Scenes__Scenes.EntityPass.new();
    colorPass.camera = userCamera;
    colorPass.technique = colorTech;
    colorPass.target = colorTarget;
    colorPass.children.add(colorObj);
    let distortTech = new src__Techniques__Techniques.Distort.new();
    distortTech.colorTexture = colorTarget.colorTexture;
    distortTech.bumpTexture = normalTarget.colorTexture;
    distortTech.bumpMatrix = src__Math__Math.Matrix4.scale(0.05, 0.05, 0.05);
    let distortPass = new src__Scenes__Scenes.CoverPass.new();
    distortPass.technique = distortTech;
    let layoutTech = new src__Techniques__Techniques.TextureLayout.new();
    layoutTech.entries.add(new src__Techniques__Techniques.TextureLayoutEntry.new({texture: normalTarget.colorTexture, destination: src__Math__Math.Region2.new(0.0, 0.8, 0.2, 0.2), flip: true}));
    layoutTech.entries.add(new src__Techniques__Techniques.TextureLayoutEntry.new({texture: colorTarget.colorTexture, destination: src__Math__Math.Region2.new(0.0, 0.6, 0.2, 0.2)}));
    let layout = new src__Scenes__Scenes.CoverPass.new();
    layout.target = new src__Views__Views.FrontTarget.new({clearColor: false});
    layout.technique = layoutTech;
    td.scene = new src__Scenes__Scenes.Compound.new({passes: JSArrayOfScene().of([skybox, colorPass, normalPass, distortPass, layout])});
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test031/test.ddc", {
    "tests\\test031\\test.dart": tests__test031__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;AAaE,gBAAI,4BAAgB,CAAC;qBACF;aACR,sBAAC,8DACR,0DACA,qDACA,wDACA,+DACA;aACO,sBAAC;AAEZ,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAiB,YAAY,IAAI,0BAAgB;IAAhC,kBACL,AAAO,wBAAI;IADN;cAEJ,IAAI,6BAAY;YACnB,IAAI,mCAAkB,SAAQ,EAAE,UAAU;YAC1C,IAAI,gCAAe,SAAQ,EAAE,UAAU;;;AAEjD,QAAkB,aAAa,IAAI,sCAAiB;IAAlC,8BACK,EAAE,cAAc,iBAAiB,CAAC;AAEzD,QAAiB,eAAe,IAAI,gCAAgB,CAAC,KAAK,kBAAiB;IAA1D,qBACL,AAAI,0BAAW,CAAC,KAAK,KAAK,KAAK;AAE3C,QAAkB,aAAa,IAAI,kCAAiB;IAAlC,uBACF,UAAU;IADR,oBAEL,YAAY;IAFP,wBAGD,SAAS;IAHR,0BAIC,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAE3D,QAAa,cAAc,IAAI,6BAAY;IAA9B,gBACP,IAAI,mCAAkB,QAAO,aAAa,EAAE,UAAU;IAD/C,gBAEP,IAAI,gCAAe,QAAO,aAAa,EAAE,UAAU;IAF5C,gBAGP,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAC9C,QAAkB,aAAa,IAAI,iCAAiB,SAAQ,WAAW;AAEvE,QAAiB,cAAc,IAAI,gCAAgB,CAAC,KAAK,kBAAiB;IAAzD,yBACA;AAEjB,QAAiB,WAAW,IAAI,0BAAgB;IAA/B,iBACL,AAAO,0BAAM;AAEzB,QAAyB,YAAY,IAAI,6CAAwB;IAAxC,qBACV,IAAI,mCAAkB,SACtB,AAAI,0CAA6B,CAAC,KAAK,CAAC,KAAK,CAAC,aAC9C,AAAI,4BAAiB;IAHX,0BAIL,AAAI,0BAAW,CAAC,KAAK,KAAK;IAJrB,0BAKL,AAAI,0BAAW,CAAC,KAAK,KAAK;IALrB,2BAMJ,AAAI,0BAAW,CAAC,KAAK,KAAK;IANtB,+BAOA;AAEzB,QAAiB,SAAS,AAAI,oCAAuB,CACnD,EAAE,cAAc,iBAAiB,CAAC,iCAAgC;IADnD,gBAEJ,WAAW;IAFP,gBAGJ,UAAU;AAEvB,QAAkB,YAAY,IAAI,kCAAiB;IAAjC,mBACL,UAAU;IADL,sBAEF,SAAS;IAFP,mBAGL,WAAW;IAHN,uBAID,QAAQ;AAEzB,QAAmB,cAAc,IAAI,uCAAkB;IAApC,2BACA,WAAW,aAAa;IADxB,0BAED,YAAY,aAAa;IAFxB,yBAGF,AAAI,6BAAkB,CAAC,MAAM,MAAM;AACpD,QAAiB,cAAc,IAAI,iCAAgB;IAAlC,wBACD,WAAW;AAE3B,QAAyB,aAAa,IAAI,6CAAwB;IAAzC,uBACT,IAAI,kDAA6B,WACpC,YAAY,aAAa,eACrB,AAAI,2BAAY,CAAC,KAAK,KAAK,KAAK,YACvC;IAJe,uBAKT,IAAI,kDAA6B,WACpC,WAAW,aAAa,eACpB,AAAI,2BAAY,CAAC,KAAK,KAAK,KAAK;AACjD,QAAiB,SAAS,IAAI,iCAAgB;IAA7B,gBACJ,IAAI,iCAAiB,cAAa;IAD9B,mBAED,UAAU;AAE1B,MAAE,MAAM,GAAG,IAAI,gCAAe,UAAS,qBAAC,MAAM,EAAE,SAAS,EAAE,UAAU,EAAE,WAAW,EAAE,MAAM;AAE1F,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test031__test: tests__test031__test
  };
});

//# sourceMappingURL=test.ddc.js.map
