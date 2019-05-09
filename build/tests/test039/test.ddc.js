define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Math/Color3'], function(dart_sdk, checkGroup, Bindable, Color3) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Shapes__Shapes = Bindable.src__Shapes__Shapes;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Textures__Textures = Bindable.src__Textures__Textures;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Lights__Lights = Bindable.src__Lights__Lights;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Math__Math = Color3.src__Math__Math;
  const _root = Object.create(null);
  const tests__test039__test = Object.create(_root);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfTexture2D = () => (ListOfTexture2D = dart.constFn(core.List$(src__Textures__Textures.Texture2D)))();
  let TimerTovoid = () => (TimerTovoid = dart.constFn(dart.fnType(dart.void, [async.Timer])))();
  tests__test039__test.main = function() {
    let _ = new common__common.ShellPage.new("Test 039");
    _.addLargeCanvas("testCanvas");
    _.addPar(JSArrayOfString().of(["Test of an animated texture on a square."]));
    _.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let obj = new src__Core__Core.Entity.new();
    obj.shape = (() => {
      let _ = src__Shapes__Shapes.cube();
      _.adjustNormals();
      return _;
    })();
    obj.mover = new src__Movers__Movers.Rotater.new();
    let color = new src__Textures__Textures.Texture2DChanger.new({textures: ListOfTexture2D().from([td.textureLoader.load2DFromFile("../resources/diceColor/posx.png"), td.textureLoader.load2DFromFile("../resources/diceColor/posz.png"), td.textureLoader.load2DFromFile("../resources/diceColor/negx.png"), td.textureLoader.load2DFromFile("../resources/diceColor/negy.png"), td.textureLoader.load2DFromFile("../resources/diceColor/posy.png"), td.textureLoader.load2DFromFile("../resources/diceColor/negz.png")])});
    async.Timer.periodic(new core.Duration.new({milliseconds: 500}), dart.fn(_ => color.nextTexture(), TimerTovoid()));
    let tech = new src__Techniques__Techniques.MaterialLight.new();
    tech.lights.add(new src__Lights__Lights.Directional.new({mover: src__Movers__Movers.Constant.vectorTowards(1.0, -1.0, -3.0), color: src__Math__Math.Color3.white()}));
    tech.ambient.color = src__Math__Math.Color3.new(0.2, 0.2, 0.2);
    tech.diffuse.color = src__Math__Math.Color3.new(0.8, 0.8, 0.8);
    tech.ambient.texture2D = color;
    tech.diffuse.texture2D = color;
    td.scene = (() => {
      let _ = new src__Scenes__Scenes.EntityPass.new();
      _.technique = tech;
      _.children.add(obj);
      _.camera.mover = src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0);
      return _;
    })();
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test039/test.ddc", {
    "tests\\test039\\test.dart": tests__test039__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;AAeE,gBAAI,4BAAgB,CAAC;qBACF;aACR,sBAAC;aACD,sBAAC;AAEZ,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAiB,MAAM,IAAI,0BAAgB;IAA1B;cACJ,AAAO,wBAAI;;;;IADP,YAEL,IAAI,+BAAc;AAE9B,QAA0B,QAAQ,IAAI,4CAAyB,YACpD,sBAA6B,CAAC,CACrC,EAAE,cAAc,eAAe,CAAC,oCAChC,EAAE,cAAc,eAAe,CAAC,oCAChC,EAAE,cAAc,eAAe,CAAC,oCAChC,EAAE,cAAc,eAAe,CAAC,oCAChC,EAAE,cAAc,eAAe,CAAC,oCAChC,EAAE,cAAc,eAAe,CAAC;AAGpC,wBAAc,CAAC,IAAI,iBAAQ,gBAAe,OAAM,QAAC,CAAC,IAAK,KAAK,YAAY;AAExE,QAAyB,OAAO,IAAI,6CAAwB;IAAnC,gBACV,IAAI,mCAAkB,SACtB,AAAI,0CAA6B,CAAC,KAAK,CAAC,KAAK,CAAC,aAC9C,AAAI,4BAAiB;IAHX,qBAIL,AAAI,0BAAW,CAAC,KAAK,KAAK;IAJrB,qBAKL,AAAI,0BAAW,CAAC,KAAK,KAAK;IALrB,yBAMD,KAAK;IANJ,yBAOD,KAAK;AAE7B,MAAE,MAAM;cAAG,IAAI,kCAAiB;oBAChB,IAAI;qBACH,GAAG;uBACD,AAAI,sCAAyB,CAAC,KAAK,KAAK;;;AAE3D,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test039__test: tests__test039__test
  };
});

//# sourceMappingURL=test.ddc.js.map
