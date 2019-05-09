define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Math/Color3'], function(dart_sdk, checkGroup, Bindable, Color3) {
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
  const _root = Object.create(null);
  const tests__test036__test = Object.create(_root);
  const $toDouble = dartx.toDouble;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfScene = () => (JSArrayOfScene = dart.constFn(_interceptors.JSArray$(src__Scenes__Scenes.Scene)))();
  tests__test036__test.main = function() {
    let _ = new common__common.ShellPage.new("Test 036");
    _.addLargeCanvas("testCanvas");
    _.addPar(JSArrayOfString().of(["Test of the texture layout cover technique."]));
    _.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let secondMover = new src__Movers__Movers.Group.new();
    secondMover.add(new src__Movers__Movers.UserRotater.new({input: td.userInput}));
    secondMover.add(new src__Movers__Movers.UserRoller.new({ctrl: true, input: td.userInput}));
    secondMover.add(new src__Movers__Movers.UserZoom.new({input: td.userInput}));
    secondMover.add(src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0));
    let userCamera = new src__Views__Views.Perspective.new({mover: secondMover});
    let back = new src__Views__Views.BackTarget.new(800, 600, {autoResize: true});
    back.color = src__Math__Math.Color4.transparent();
    let obj = new src__Core__Core.Entity.new();
    obj.shape = src__Shapes__Shapes.toroid();
    let tech = new src__Techniques__Techniques.MaterialLight.new();
    tech.lights.add(new src__Lights__Lights.Directional.new({mover: src__Movers__Movers.Constant.vectorTowards(0.0, -1.0, -1.0), color: src__Math__Math.Color3.white()}));
    tech.ambient.color = src__Math__Math.Color3.new(0.0, 0.0, 1.0);
    tech.diffuse.color = src__Math__Math.Color3.new(0.0, 1.0, 0.0);
    tech.specular.color = src__Math__Math.Color3.new(1.0, 0.0, 0.0);
    tech.specular.shininess = 10.0;
    let pass = new src__Scenes__Scenes.EntityPass.new();
    pass.camera = userCamera;
    pass.technique = tech;
    pass.target = back;
    pass.children.add(obj);
    let layout = new src__Techniques__Techniques.TextureLayout.new({backColor: src__Math__Math.Color4.black()});
    let count = 3;
    let scale = 1.0 / count[$toDouble]();
    for (let i = 0; i < count; ++i) {
      let xOffset = i[$toDouble]() * scale;
      for (let j = 0; j < count; ++j) {
        let yOffset = j[$toDouble]() * scale;
        layout.entries.add(new src__Techniques__Techniques.TextureLayoutEntry.new({texture: back.colorTexture, destination: src__Math__Math.Region2.new(xOffset, yOffset, scale, scale)}));
      }
    }
    layout.entries.add((() => {
      let _ = new src__Techniques__Techniques.TextureLayoutEntry.new();
      _.texture = back.colorTexture;
      return _;
    })());
    let front = new src__Views__Views.FrontTarget.new({color: src__Math__Math.Color4.black()});
    let layoutCover = new src__Scenes__Scenes.CoverPass.new();
    layoutCover.technique = layout;
    layoutCover.target = front;
    td.scene = new src__Scenes__Scenes.Compound.new({passes: JSArrayOfScene().of([pass, layoutCover])});
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test036/test.ddc", {
    "tests\\test036\\test.dart": tests__test036__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;AAaE,gBAAI,4BAAgB,CAAC;qBACF;aACR,sBAAC;aACD,sBAAC;AAEZ,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAa,cAAc,IAAI,6BAAY;IAA9B,gBACL,IAAI,mCAAkB,SAAQ,EAAE,UAAU;IADrC,gBAEL,IAAI,kCAAiB,QAAO,aAAa,EAAE,UAAU;IAFhD,gBAGL,IAAI,gCAAe,SAAQ,EAAE,UAAU;IAHlC,gBAIL,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAChD,QAAkB,aAAa,IAAI,iCAAiB,SAAQ,WAAW;AAEvE,QAAiB,OAAO,IAAI,gCAAgB,CAAC,KAAK,kBAAiB;IAAlD,aACL,AAAI,kCAAuB;AAEvC,QAAiB,MAAM,IAAI,0BAAgB;IAA1B,YACL,AAAO,0BAAM;AAEzB,QAAyB,OAAO,IAAI,6CAAwB;IAAnC,gBACV,IAAI,mCAAkB,SACtB,AAAI,0CAA6B,CAAC,KAAK,CAAC,KAAK,CAAC,aAC9C,AAAI,4BAAiB;IAHX,qBAIL,AAAI,0BAAW,CAAC,KAAK,KAAK;IAJrB,qBAKL,AAAI,0BAAW,CAAC,KAAK,KAAK;IALrB,sBAMJ,AAAI,0BAAW,CAAC,KAAK,KAAK;IANtB,0BAOA;AAEzB,QAAkB,OAAO,IAAI,kCAAiB;IAA5B,cACL,UAAU;IADL,iBAEF,IAAI;IAFF,cAGL,IAAI;IAHC,kBAID,GAAG;AAEpB,QAAyB,SAAS,IAAI,6CAAwB,aACjD,AAAI,4BAAiB;AAClC,QAAU,QAAQ;AAClB,QAAO,QAAQ,AAAG,MAAC,KAAK,WAAS;AACjC,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,KAAK,EAAE,EAAE,CAAC,EAAE;AAC9B,UAAO,UAAU,AAAY,CAAX,WAAS,KAAG,KAAK;AACnC,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,KAAK,EAAE,EAAE,CAAC,EAAE;AAC9B,YAAO,UAAU,AAAY,CAAX,WAAS,KAAG,KAAK;AACnC,cAAM,QAAQ,IAAI,CAAC,IAAI,kDAA6B,WACzC,IAAI,aAAa,eACb,AAAI,2BAAY,CAAC,OAAO,EAAE,OAAO,EAAE,KAAK,EAAE,KAAK;;;AAGlE,UAAM,QAAQ,IAAI;cAAC,IAAI,kDAA6B;kBACtC,IAAI,aAAa;;;AAE/B,QAAkB,QAAQ,IAAI,iCAAiB,SAAQ,AAAI,4BAAiB;AAC5E,QAAiB,cAAc,IAAI,iCAAgB;IAAlC,wBACD,MAAM;IADL,qBAEJ,KAAK;AAElB,MAAE,MAAM,GAAG,IAAI,gCAAe,UAAS,qBAAC,IAAI,EAAE,WAAW;AAEzD,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test036__test: tests__test036__test
  };
});

//# sourceMappingURL=test.ddc.js.map
