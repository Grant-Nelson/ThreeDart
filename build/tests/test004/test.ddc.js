define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Events/Changable'], function(dart_sdk, checkGroup, Bindable, Changable) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Shapes__Shapes = Bindable.src__Shapes__Shapes;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Events__Events = Changable.src__Events__Events;
  const _root = Object.create(null);
  const tests__test004__test = Object.create(_root);
  const $split = dartx.split;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  tests__test004__test.main = function() {
    let page = new common__common.ShellPage.new("Test 004");
    page.addLargeCanvas("testCanvas");
    page.addPar(JSArrayOfString().of(["Test of repeat use of a single mover and shape. There are 9 rings ", "moving at the same speed, however the second one is attached to ", "the first, the third to the second, and so on."]));
    page.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let rotater = new src__Movers__Movers.Rotater.new();
    rotater.deltaYaw = 0.51;
    rotater.deltaPitch = 0.71;
    rotater.deltaRoll = 0.92;
    let mover = new src__Movers__Movers.Group.new();
    mover.add(src__Movers__Movers.Constant.scale(0.8, 0.8, 0.8));
    mover.add(rotater);
    let shape = src__Shapes__Shapes.toroid({minorRadius: 0.2, majorRadius: 2.0});
    let obj0 = new src__Core__Core.Entity.new({shape: shape, mover: mover});
    let obj1 = new src__Core__Core.Entity.new({shape: shape, mover: mover});
    obj1.children.add(obj0);
    let obj2 = new src__Core__Core.Entity.new({shape: shape, mover: mover});
    obj2.children.add(obj1);
    let obj3 = new src__Core__Core.Entity.new({shape: shape, mover: mover});
    obj3.children.add(obj2);
    let obj4 = new src__Core__Core.Entity.new({shape: shape, mover: mover});
    obj4.children.add(obj3);
    let obj5 = new src__Core__Core.Entity.new({shape: shape, mover: mover});
    obj5.children.add(obj4);
    let obj6 = new src__Core__Core.Entity.new({shape: shape, mover: mover});
    obj6.children.add(obj5);
    let obj7 = new src__Core__Core.Entity.new({shape: shape, mover: mover});
    obj7.children.add(obj6);
    let obj8 = new src__Core__Core.Entity.new({shape: shape, mover: mover});
    obj8.children.add(obj7);
    let tech = new src__Techniques__Techniques.Depth.new({fogStart: 3.0, fogStop: 6.0});
    let pass = new src__Scenes__Scenes.EntityPass.new();
    pass.technique = tech;
    pass.children.add(obj8);
    pass.camera.mover = src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0);
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    td.scene = pass;
    td.postrender.once(dart.fn(_ => {
      page.addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode[$split]("\n"));
      page.addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode[$split]("\n"));
    }, EventArgsToNull()));
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test004/test.ddc", {
    "tests\\test004\\test.dart": tests__test004__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;AAUE,QAAiB,OAAO,IAAI,4BAAgB,CAAC;IAA5B,oBACE;IADF,YAEN,sBAAC,sEACR,oEACA;IAJa,YAKN,sBAAC;AAEZ,QAAe,UAAU,IAAI,+BAAc;IAA5B,mBACA;IADA,qBAEE;IAFF,oBAGC;AAEhB,QAAa,QAAQ,IAAI,6BAAY;IAAxB,UACL,AAAI,kCAAqB,CAAC,KAAK,KAAK;IAD/B,UAEL,OAAO;AAEf,QAAa,QAAQ,AAAO,0BAAM,eAAc,kBAAkB;AAElE,QAAiB,OAAO,IAAI,0BAAgB,SAAQ,KAAK,SAAS,KAAK;AACvE,QAAiB,OAAO,IAAI,0BAAgB,SAAQ,KAAK,SAAS,KAAK;IAAtD,kBAAsE,IAAI;AAC3F,QAAiB,OAAO,IAAI,0BAAgB,SAAQ,KAAK,SAAS,KAAK;IAAtD,kBAAsE,IAAI;AAC3F,QAAiB,OAAO,IAAI,0BAAgB,SAAQ,KAAK,SAAS,KAAK;IAAtD,kBAAsE,IAAI;AAC3F,QAAiB,OAAO,IAAI,0BAAgB,SAAQ,KAAK,SAAS,KAAK;IAAtD,kBAAsE,IAAI;AAC3F,QAAiB,OAAO,IAAI,0BAAgB,SAAQ,KAAK,SAAS,KAAK;IAAtD,kBAAsE,IAAI;AAC3F,QAAiB,OAAO,IAAI,0BAAgB,SAAQ,KAAK,SAAS,KAAK;IAAtD,kBAAsE,IAAI;AAC3F,QAAiB,OAAO,IAAI,0BAAgB,SAAQ,KAAK,SAAS,KAAK;IAAtD,kBAAsE,IAAI;AAC3F,QAAiB,OAAO,IAAI,0BAAgB,SAAQ,KAAK,SAAS,KAAK;IAAtD,kBAAsE,IAAI;AAE3F,QAAiB,OAAO,IAAI,qCAAgB,YAAW,cAAc;AACrE,QAAkB,OAAO,IAAI,kCAAiB;IAA5B,iBACF,IAAI;IADF,kBAED,IAAI;IAFH,oBAGC,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAE3D,QAAoB,KAAK,AAAI,gCAA0B,CAAC;IAApC,WACR,IAAI;AAEhB,MAAE,WAAW,KAAK,CAAC,QAAC,CAAC;AACnB,MACE,AAAE,YAAO,CAAC,iBAAiB,QAAQ,GAAG,IAAI,iBAAiB,QAAM,CAAC;MAClE,AAAE,YAAO,CAAC,mBAAmB,QAAQ,GAAG,IAAI,mBAAmB,QAAM,CAAC;;AAE1E,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test004__test: tests__test004__test
  };
});

//# sourceMappingURL=test.ddc.js.map
