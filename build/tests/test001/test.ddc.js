define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Events/Changable'], function(dart_sdk, checkGroup, Bindable, Changable) {
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
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Events__Events = Changable.src__Events__Events;
  const _root = Object.create(null);
  const tests__test001__test = Object.create(_root);
  const $split = dartx.split;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  tests__test001__test.main = function() {
    let page = new common__common.ShellPage.new("Test 001");
    page.addLargeCanvas("testCanvas");
    page.addPar(JSArrayOfString().of(["Test of the Depth shader, a basic fog shader with a single auto-rotating shape."]));
    page.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let obj = new src__Core__Core.Entity.new();
    obj.shape = src__Shapes__Shapes.toroid();
    obj.mover = new src__Movers__Movers.Rotater.new();
    let tech = new src__Techniques__Techniques.Depth.new({fogStart: 3.0, fogStop: 6.0});
    let pass = new src__Scenes__Scenes.EntityPass.new();
    pass.children.add(obj);
    pass.technique = tech;
    pass.camera.mover = src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0);
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    td.scene = pass;
    td.postrender.once(dart.fn(_ => {
      page.addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode[$split]("\n"));
      page.addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode[$split]("\n"));
    }, EventArgsToNull()));
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test001/test.ddc", {
    "tests\\test001\\test.dart": tests__test001__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;AAUE,QAAiB,OAAO,IAAI,4BAAgB,CAAC;IAA5B,oBACE;IADF,YAEN,sBAAC;IAFK,YAGN,sBAAC;AAEZ,QAAiB,MAAM,IAAI,0BAAgB;IAA1B,YACL,AAAO,0BAAM;IADR,YAEL,IAAI,+BAAc;AAE9B,QAAiB,OAAO,IAAI,qCAAgB,YAAW,cAAc;AACrE,QAAkB,OAAO,IAAI,kCAAiB;IAA5B,kBACD,GAAG;IADF,iBAEF,IAAI;IAFF,oBAGC,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAE3D,QAAoB,KAAK,AAAI,gCAA0B,CAAC;IAApC,WACR,IAAI;AAEhB,MAAE,WAAW,KAAK,CAAC,QAAC,CAAC;AACnB,MACE,AAAE,YAAO,CAAC,iBAAiB,QAAQ,GAAG,IAAI,iBAAiB,QAAM,CAAC;MAClE,AAAE,YAAO,CAAC,mBAAmB,QAAQ,GAAG,IAAI,mBAAmB,QAAM,CAAC;;AAE1E,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test001__test: tests__test001__test
  };
});

//# sourceMappingURL=test.ddc.js.map
