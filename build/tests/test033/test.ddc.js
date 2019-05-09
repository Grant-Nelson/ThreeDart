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
  const src__Lights__Lights = Bindable.src__Lights__Lights;
  const src__Views__Views = Bindable.src__Views__Views;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Math__Math = Color3.src__Math__Math;
  const _root = Object.create(null);
  const tests__test033__test = Object.create(_root);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfRenderPass = () => (JSArrayOfRenderPass = dart.constFn(_interceptors.JSArray$(src__Scenes__Scenes.RenderPass)))();
  tests__test033__test.main = function() {
    let _ = new common__common.ShellPage.new("Test 033");
    _.addLargeCanvas("testCanvas");
    _.addPar(JSArrayOfString().of(["Test of a sterioscopic scene."]));
    _.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let cubeEntity = new src__Core__Core.Entity.new({shape: src__Shapes__Shapes.cube()});
    let shapeEntity = new src__Core__Core.Entity.new();
    for (let x = -1.6; x <= 1.7; x = x + 0.8) {
      for (let y = -1.6; y <= 1.7; y = y + 0.8) {
        for (let z = -1.6; z <= 1.7; z = z + 0.8) {
          let mat = src__Math__Math.Matrix4.translate(x, y, z)['*'](src__Math__Math.Matrix4.scale(0.2, 0.2, 0.2));
          let entity = new src__Core__Core.Entity.new();
          entity.mover = new src__Movers__Movers.Constant.new(mat);
          entity.children.add(cubeEntity);
          shapeEntity.children.add(entity);
        }
      }
    }
    let color = td.textureLoader.loadCubeFromPath("../resources/diceColor");
    let colorTech = new src__Techniques__Techniques.MaterialLight.new();
    colorTech.lights.add(new src__Lights__Lights.Directional.new({mover: src__Movers__Movers.Constant.vectorTowards(-1.0, -1.0, -1.0), color: src__Math__Math.Color3.new(1.0, 0.9, 0.9)}));
    colorTech.lights.add(new src__Lights__Lights.Directional.new({mover: src__Movers__Movers.Constant.vectorTowards(1.0, 1.0, 2.0), color: src__Math__Math.Color3.new(0.2, 0.2, 0.35)}));
    colorTech.ambient.color = src__Math__Math.Color3.new(0.2, 0.2, 0.2);
    colorTech.ambient.textureCube = color;
    colorTech.diffuse.color = src__Math__Math.Color3.new(0.8, 0.8, 0.8);
    colorTech.diffuse.textureCube = color;
    colorTech.specular.color = src__Math__Math.Color3.new(0.7, 0.7, 0.7);
    colorTech.specular.shininess = 10.0;
    colorTech.bump.textureCube = td.textureLoader.loadCubeFromPath("../resources/diceBumpMap");
    let mover = new src__Movers__Movers.Group.new();
    mover.add(new src__Movers__Movers.UserRotater.new({input: td.userInput}));
    mover.add(new src__Movers__Movers.UserRoller.new({ctrl: true, input: td.userInput}));
    mover.add(new src__Movers__Movers.UserZoom.new({input: td.userInput}));
    mover.add(src__Movers__Movers.Constant.translate(0.0, 0.0, 6.0));
    let target = new src__Views__Views.FrontTarget.new();
    target.clearColor = false;
    let skybox = src__Scenes__Scenes.CoverPass.skybox(td.textureLoader.loadCubeFromPath("../resources/maskonaive", {ext: ".jpg"}));
    let pass = new src__Scenes__Scenes.EntityPass.new();
    pass.technique = colorTech;
    pass.children.add(shapeEntity);
    td.scene = new src__Scenes__Scenes.Sterioscopic.new({mover: mover, passes: JSArrayOfRenderPass().of([skybox, pass]), target: target});
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test033/test.ddc", {
    "tests\\test033\\test.dart": tests__test033__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;AAcE,gBAAI,4BAAgB,CAAC;qBACF;aACR,sBAAC;aACD,sBAAC;AAEZ,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAiB,aAAa,IAAI,0BAAgB,SAAQ,AAAO,wBAAI;AACrE,QAAiB,cAAc,IAAI,0BAAgB;AACnD,aAAY,IAAI,CAAC,KAAK,AAAE,CAAD,IAAI,KAAK,CAAC,GAvBnC,AAuBkC,CAAC,GAAI,KAAK;AACxC,eAAY,IAAI,CAAC,KAAK,AAAE,CAAD,IAAI,KAAK,CAAC,GAxBrC,AAwBoC,CAAC,GAAI,KAAK;AACxC,iBAAY,IAAI,CAAC,KAAK,AAAE,CAAD,IAAI,KAAK,CAAC,GAzBvC,AAyBsC,CAAC,GAAI,KAAK;AACxC,cAAa,MAAM,AAAI,AAA+B,iCAAT,CAAC,CAAC,EAAE,CAAC,EAAE,CAAC,OAClC,AAAI,6BAAkB,CAAC,KAAK,KAAK;AACpD,cAAiB,SAAS,IAAI,0BAAgB;UAA7B,eACL,IAAI,gCAAe,CAAC,GAAG;UADlB,oBAEA,UAAU;AAC3B,qBAAW,SAAS,IAAI,CAAC,MAAM;;;;AAKrC,QAAqB,QAAQ,EAAE,cAAc,iBAAiB,CAAC;AAC/D,QAAyB,YAAY,IAAI,6CAAwB;IAAxC,qBACV,IAAI,mCAAkB,SACtB,AAAI,0CAA6B,CAAC,CAAC,KAAK,CAAC,KAAK,CAAC,aAC/C,AAAI,0BAAW,CAAC,KAAK,KAAK;IAHhB,qBAIV,IAAI,mCAAkB,SACtB,AAAI,0CAA6B,CAAC,KAAK,KAAK,aAC5C,AAAI,0BAAW,CAAC,KAAK,KAAK;IANhB,0BAOL,AAAI,0BAAW,CAAC,KAAK,KAAK;IAPrB,gCAQC,KAAK;IARN,0BASL,AAAI,0BAAW,CAAC,KAAK,KAAK;IATrB,gCAUC,KAAK;IAVN,2BAWJ,AAAI,0BAAW,CAAC,KAAK,KAAK;IAXtB,+BAYA;IAZA,6BAaF,EAAE,cAAc,iBAAiB,CAAC;AAEzD,QAAa,QAAQ,IAAI,6BAAY;IAAxB,UACL,IAAI,mCAAkB,SAAQ,EAAE,UAAU;IADrC,UAEL,IAAI,kCAAiB,QAAO,aAAa,EAAE,UAAU;IAFhD,UAGL,IAAI,gCAAe,SAAQ,EAAE,UAAU;IAHlC,UAIL,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAEhD,QAAkB,SAAS,IAAI,iCAAiB;IAA9B,oBACD;AAEjB,QAAiB,SAAS,AAAI,oCAAuB,CACnD,EAAE,cAAc,iBAAiB,CAAC,iCAAgC;AAEpE,QAAkB,OAAO,IAAI,kCAAiB;IAA5B,iBACF,SAAS;IADP,kBAED,WAAW;AAE5B,MAAE,MAAM,GAAG,IAAI,oCAAmB,SAAQ,KAAK,UAAU,0BAAC,MAAM,EAAE,IAAI,YAAW,MAAM;AAEvF,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test033__test: tests__test033__test
  };
});

//# sourceMappingURL=test.ddc.js.map
