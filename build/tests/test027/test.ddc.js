define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Math/Color3', 'packages/ThreeDart/src/Events/Changable'], function(dart_sdk, checkGroup, Bindable, Color3, Changable) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Views__Views = Bindable.src__Views__Views;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Shapes__Shapes = Bindable.src__Shapes__Shapes;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Lights__Lights = Bindable.src__Lights__Lights;
  const src__Math__Math = Color3.src__Math__Math;
  const src__Events__Events = Changable.src__Events__Events;
  const _root = Object.create(null);
  const tests__test027__test = Object.create(_root);
  const $split = dartx.split;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfScene = () => (JSArrayOfScene = dart.constFn(_interceptors.JSArray$(src__Scenes__Scenes.Scene)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VertexAnddoubleAnddoubleToNull = () => (VertexAnddoubleAnddoubleToNull = dart.constFn(dart.fnType(core.Null, [src__Shapes__Shapes.Vertex, core.double, core.double])))();
  let doubleAnddoubleTodouble = () => (doubleAnddoubleTodouble = dart.constFn(dart.fnType(core.double, [core.double, core.double])))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  tests__test027__test.main = function() {
    let page = new common__common.ShellPage.new("Test 027");
    page.addLargeCanvas("testCanvas");
    page.addPar(JSArrayOfString().of(["Test of a back buffer target for rendering to a texture. ", "That back buffer texture is applied to a box."]));
    page.addControlBoxes(JSArrayOfString().of(["shapes"]));
    page.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let firstMover = new src__Movers__Movers.Group.new();
    firstMover.add(new src__Movers__Movers.Rotater.new());
    firstMover.add(src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0));
    let rotaterCamera = new src__Views__Views.Perspective.new({mover: firstMover});
    let backTarget = new src__Views__Views.BackTarget.new(512, 512);
    backTarget.clearColor = false;
    let skybox = src__Scenes__Scenes.CoverPass.skybox(td.textureLoader.loadCubeFromPath("../resources/maskonaive", {ext: ".jpg"}));
    skybox.target = backTarget;
    skybox.camera = rotaterCamera;
    let firstObj = new src__Core__Core.Entity.new();
    firstObj.shape = src__Shapes__Shapes.toroid();
    let firstTech = new src__Techniques__Techniques.MaterialLight.new();
    firstTech.lights.add(new src__Lights__Lights.Directional.new({mover: src__Movers__Movers.Constant.vectorTowards(0.0, -1.0, -1.0), color: src__Math__Math.Color3.white()}));
    firstTech.ambient.color = src__Math__Math.Color3.new(0.0, 0.0, 1.0);
    firstTech.diffuse.color = src__Math__Math.Color3.new(0.0, 1.0, 0.0);
    firstTech.specular.color = src__Math__Math.Color3.new(1.0, 0.0, 0.0);
    firstTech.specular.shininess = 10.0;
    let firstPass = new src__Scenes__Scenes.EntityPass.new();
    firstPass.camera = rotaterCamera;
    firstPass.technique = firstTech;
    firstPass.target = backTarget;
    firstPass.children.add(firstObj);
    let secondMover = new src__Movers__Movers.Group.new();
    secondMover.add(new src__Movers__Movers.UserRotater.new({input: td.userInput}));
    secondMover.add(new src__Movers__Movers.UserRoller.new({ctrl: true, input: td.userInput}));
    secondMover.add(new src__Movers__Movers.UserZoom.new({input: td.userInput}));
    secondMover.add(src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0));
    let userCamera = new src__Views__Views.Perspective.new({mover: secondMover});
    let secondObj = new src__Core__Core.Entity.new();
    secondObj.shape = src__Shapes__Shapes.cube();
    let secondTech = new src__Techniques__Techniques.MaterialLight.new();
    secondTech.emission.texture2D = backTarget.colorTexture;
    let secondPass = new src__Scenes__Scenes.EntityPass.new();
    secondPass.camera = userCamera;
    secondPass.technique = secondTech;
    secondPass.children.add(secondObj);
    td.scene = new src__Scenes__Scenes.Compound.new({passes: JSArrayOfScene().of([skybox, firstPass, secondPass])});
    let _ = new common__common.RadioGroup.new("shapes");
    _.add("Cube", dart.fn(() => {
      secondObj.shape = src__Shapes__Shapes.cube();
    }, VoidToNull()), true);
    _.add("Cuboid", dart.fn(() => {
      secondObj.shape = src__Shapes__Shapes.cuboid({widthDiv: 15, heightDiv: 15, vertexHndl: dart.fn((ver, u, v) => {
          let height = math.cos(dart.notNull(v) * 4.0 * 3.141592653589793 + 3.141592653589793) * 0.1 + math.cos(dart.notNull(u) * 4.0 * 3.141592653589793 + 3.141592653589793) * 0.1;
          let vec = src__Math__Math.Vector3.fromPoint3(ver.location).normal();
          ver.location = ver.location['+'](src__Math__Math.Point3.fromVector3(vec['*'](height)));
        }, VertexAnddoubleAnddoubleToNull())});
    }, VoidToNull()));
    _.add("Cylinder", dart.fn(() => {
      secondObj.shape = src__Shapes__Shapes.cylinder({sides: 30});
    }, VoidToNull()));
    _.add("Cone", dart.fn(() => {
      secondObj.shape = src__Shapes__Shapes.cylinder({topRadius: 0.0, sides: 30, capTop: false});
    }, VoidToNull()));
    _.add("Cylindrical", dart.fn(() => {
      secondObj.shape = src__Shapes__Shapes.cylindrical({sides: 50, div: 25, radiusHndl: dart.fn((u, v) => math.cos(dart.notNull(v) * 4.0 * 3.141592653589793 + 3.141592653589793) * 0.2 + math.cos(dart.notNull(u) * 6.0 * 3.141592653589793) * 0.3 + 0.8, doubleAnddoubleTodouble())});
    }, VoidToNull()));
    _.add("Sphere", dart.fn(() => {
      secondObj.shape = src__Shapes__Shapes.sphere({widthDiv: 6, heightDiv: 6});
    }, VoidToNull()));
    _.add("Spherical", dart.fn(() => {
      secondObj.shape = src__Shapes__Shapes.sphere({widthDiv: 10, heightDiv: 10, heightHndl: dart.fn((u, v) => math.cos(math.sqrt((dart.notNull(u) - 0.5) * (dart.notNull(u) - 0.5) + (dart.notNull(v) - 0.5) * (dart.notNull(v) - 0.5)) * 3.141592653589793) * 0.3, doubleAnddoubleTodouble())});
    }, VoidToNull()));
    _.add("Toroid", dart.fn(() => {
      secondObj.shape = src__Shapes__Shapes.toroid();
    }, VoidToNull()));
    _.add("Knot", dart.fn(() => {
      secondObj.shape = src__Shapes__Shapes.knot();
    }, VoidToNull()));
    td.postrender.once(dart.fn(_ => {
      page.addCode("Vertex Shader", "glsl", 0, secondTech.vertexSourceCode[$split]("\n"));
      page.addCode("Fragment Shader", "glsl", 0, secondTech.fragmentSourceCode[$split]("\n"));
    }, EventArgsToNull()));
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test027/test.ddc", {
    "tests\\test027\\test.dart": tests__test027__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;AAeE,QAAiB,OAAO,IAAI,4BAAgB,CAAC;IAA5B,oBACE;IADF,YAEN,sBAAC,6DACR;IAHa,qBAIG,sBAAC;IAJJ,YAKN,sBAAC;AAEZ,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAa,aAAY,IAAI,6BAAY;IAA5B,eACL,IAAI,+BAAc;IADb,eAEL,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAChD,QAAkB,gBAAgB,IAAI,iCAAiB,SAAQ,UAAU;AAEzE,QAAiB,aAAa,IAAI,gCAAgB,CAAC,KAAK;IAAvC,wBACA;AAEjB,QAAiB,SAAS,AAAI,oCAAuB,CACnD,EAAE,cAAc,iBAAiB,CAAC,iCAAgC;IADnD,gBAEJ,UAAU;IAFN,gBAGJ,aAAa;AAE1B,QAAiB,WAAW,IAAI,0BAAgB;IAA/B,iBACL,AAAO,0BAAM;AAEzB,QAAyB,YAAY,IAAI,6CAAwB;IAAxC,qBACV,IAAI,mCAAkB,SACtB,AAAI,0CAA6B,CAAC,KAAK,CAAC,KAAK,CAAC,aAC9C,AAAI,4BAAiB;IAHX,0BAIL,AAAI,0BAAW,CAAC,KAAK,KAAK;IAJrB,0BAKL,AAAI,0BAAW,CAAC,KAAK,KAAK;IALrB,2BAMJ,AAAI,0BAAW,CAAC,KAAK,KAAK;IANtB,+BAOA;AAEzB,QAAkB,YAAY,IAAI,kCAAiB;IAAjC,mBACL,aAAa;IADR,sBAEF,SAAS;IAFP,mBAGL,UAAU;IAHL,uBAID,QAAQ;AAEzB,QAAa,cAAc,IAAI,6BAAY;IAA9B,gBACL,IAAI,mCAAkB,SAAQ,EAAE,UAAU;IADrC,gBAEL,IAAI,kCAAiB,QAAO,aAAa,EAAE,UAAU;IAFhD,gBAGL,IAAI,gCAAe,SAAQ,EAAE,UAAU;IAHlC,gBAIL,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAChD,QAAkB,aAAa,IAAI,iCAAiB,SAAQ,WAAW;AAEvE,QAAiB,YAAY,IAAI,0BAAgB;IAAhC,kBACL,AAAO,wBAAI;AAEvB,QAAyB,aAAa,IAAI,6CAAwB;IAAzC,gCACA,UAAU,aAAa;AAEhD,QAAkB,aAAa,IAAI,kCAAiB;IAAlC,oBACL,UAAU;IADL,uBAEF,UAAU;IAFR,wBAGD,SAAS;AAE1B,MAAE,MAAM,GAAG,IAAI,gCAAe,UAAS,qBAAC,MAAM,EAAE,SAAS,EAAE,UAAU;AAErE,gBAAI,6BAAiB,CAAC;UACd,QAAiB;AAAK,eAAS,MAAM,GAAG,AAAO,wBAAI;sBAAO;UAC1D,UAAiB;AAAK,eAAS,MAAM,GAAG,AAAO,0BAAM,YAAW,eAAe,gBAC7C,SAAC,GAAiB,EAAE,CAAQ,EAAE,CAAQ;AAChD,cAAO,SAAS,AAA0B,AAAK,QAA5B,CAAE,AAAI,AAAQ,aAAb,CAAC,IAAC,MAAS,iBAAE,GAAM,iBAAE,IAAE,MAAM,AAA0B,QAAvB,CAAE,AAAI,AAAQ,aAAb,CAAC,IAAC,MAAS,iBAAE,GAAM,iBAAE,IAAE;AAC5E,cAAa,MAAM,AAAI,kCAAuB,CAAC,GAAG,SAAS,QAAQ;AACnE,aAAG,SAAS,GAjF9C,AAiFkC,GAAG,SAAS,MAAI,AAAI,kCAAuB,CAAC,AAAG,GAAA,MAAC,MAAM;;;UAG9E,YAAiB;AAAK,eAAS,MAAM,GAAG,AAAO,4BAAQ,SAAQ;;UAC/D,QAAiB;AAAK,eAAS,MAAM,GAAG,AAAO,4BAAQ,aAAY,YAAY,YAAY;;UAC3F,eAAiB;AAAK,eAAS,MAAM,GAAG,AAAO,+BAAW,SAAQ,SAAS,gBACzC,SAAC,CAAQ,EAAE,CAAQ,KAAK,AAA4B,AAAK,AAAyB,QAAvD,CAAE,AAAI,AAAS,aAAd,CAAC,IAAC,MAAS,iBAAE,GAAQ,iBAAE,IAAE,MAAM,AAAkB,QAAf,CAAE,AAAI,aAAL,CAAC,IAAC,MAAS,iBAAE,IAAE,MAAM;;UACtH,UAAiB;AAAK,eAAS,MAAM,GAAG,AAAO,0BAAM,YAAW,cAAc;;UAC9E,aAAiB;AAAK,eAAS,MAAM,GAAG,AAAO,0BAAM,YAAW,eAAe,gBAC7C,SAAC,CAAQ,EAAE,CAAQ,KAAK,AAAoD,QAAjD,CAAC,AAAuC,SAAnC,CAAQ,AAAS,CAAd,aAAD,CAAC,IAAC,QAAO,aAAD,CAAC,IAAC,OAAc,CAAL,aAAD,CAAC,IAAC,QAAO,aAAD,CAAC,IAAC,QAAW,iBAAE,IAAE;;UAC/G,UAAiB;AAAK,eAAS,MAAM,GAAG,AAAO,0BAAM;;UACrD,QAAiB;AAAK,eAAS,MAAM,GAAG,AAAO,wBAAI;;AAE3D,MAAE,WAAW,KAAK,CAAC,QAAC,CAAC;AACnB,MACE,AAAE,YAAO,CAAC,iBAAiB,QAAQ,GAAG,UAAU,iBAAiB,QAAM,CAAC;MACxE,AAAE,YAAO,CAAC,mBAAmB,QAAQ,GAAG,UAAU,mBAAmB,QAAM,CAAC;;AAEhF,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test027__test: tests__test027__test
  };
});

//# sourceMappingURL=test.ddc.js.map
