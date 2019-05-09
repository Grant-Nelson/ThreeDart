define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Math/Color3', 'packages/ThreeDart/src/Events/Changable'], function(dart_sdk, checkGroup, Bindable, Color3, Changable) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Lights__Lights = Bindable.src__Lights__Lights;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Shapes__Shapes = Bindable.src__Shapes__Shapes;
  const src__Math__Math = Color3.src__Math__Math;
  const src__Events__Events = Changable.src__Events__Events;
  const _root = Object.create(null);
  const tests__test035__test = Object.create(_root);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  let ShapeTovoid = () => (ShapeTovoid = dart.constFn(dart.fnType(dart.void, [src__Shapes__Shapes.Shape])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  tests__test035__test.main = function() {
    let _ = new common__common.ShellPage.new("Test 035");
    _.addLargeCanvas("testCanvas");
    _.addPar(JSArrayOfString().of(["A test of the bending a shape with the Material Light Shader. ", "Not all of the shapes have predefined bend values."]));
    _.addControlBoxes(JSArrayOfString().of(["shapes"]));
    _.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let obj = new src__Core__Core.Entity.new();
    obj.mover = new src__Movers__Movers.Constant.new();
    let tech = new src__Techniques__Techniques.MaterialLight.new();
    tech.lights.add(new src__Lights__Lights.Directional.new({mover: src__Movers__Movers.Constant.vectorTowards(1.0, 1.0, -3.0), color: src__Math__Math.Color3.white()}));
    tech.ambient.color = src__Math__Math.Color3.new(0.0, 0.0, 1.0);
    tech.diffuse.color = src__Math__Math.Color3.new(0.0, 1.0, 0.0);
    tech.specular.color = src__Math__Math.Color3.new(1.0, 0.0, 0.0);
    tech.specular.shininess = 10.0;
    tech.bendMatrices.add(src__Math__Math.Matrix4.identity);
    tech.bendMatrices.add(src__Math__Math.Matrix4.identity);
    tech.bendMatrices.add(src__Math__Math.Matrix4.identity);
    tech.bendMatrices.add(src__Math__Math.Matrix4.identity);
    tech.bendMatrices.add(src__Math__Math.Matrix4.identity);
    tech.bendMatrices.add(src__Math__Math.Matrix4.identity);
    tech.bendMatrices.add(src__Math__Math.Matrix4.identity);
    tech.bendMatrices.add(src__Math__Math.Matrix4.identity);
    let camMover = new src__Movers__Movers.Group.new();
    camMover.add(new src__Movers__Movers.UserRotater.new({input: td.userInput}));
    camMover.add(new src__Movers__Movers.UserRoller.new({input: td.userInput, ctrl: true}));
    camMover.add(new src__Movers__Movers.UserZoom.new({input: td.userInput}));
    camMover.add(src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0));
    let mover1 = new src__Movers__Movers.Group.new();
    mover1.add(src__Movers__Movers.Constant.translate(0.5, 0.0, 0.0));
    mover1.add(new src__Movers__Movers.Rotater.new({deltaYaw: 0.0, deltaPitch: 0.0, deltaRoll: 1.7}));
    mover1.add(new src__Movers__Movers.Rotater.new({deltaYaw: 0.0, deltaPitch: 0.5, deltaRoll: 0.0}));
    mover1.add(src__Movers__Movers.Constant.rotateX(0.35));
    mover1.add(new src__Movers__Movers.Rotater.new({deltaYaw: 0.0, deltaPitch: -0.5, deltaRoll: 0.0}));
    mover1.add(new src__Movers__Movers.Rotater.new({deltaYaw: 0.0, deltaPitch: 0.0, deltaRoll: -1.7}));
    mover1.add(src__Movers__Movers.Constant.translate(-0.5, 0.0, 0.0));
    let mover2 = new src__Movers__Movers.Group.new();
    mover2.add(new src__Movers__Movers.Rotater.new({deltaYaw: 0.0, deltaPitch: 0.0, deltaRoll: -1.4}));
    mover2.add(src__Movers__Movers.Constant.translate(0.5, 0.0, 0.0));
    mover2.add(new src__Movers__Movers.Rotater.new({deltaYaw: 0.0, deltaPitch: 0.0, deltaRoll: 1.4}));
    let pass = new src__Scenes__Scenes.EntityPass.new();
    pass.technique = tech;
    pass.children.add(obj);
    pass.camera.mover = camMover;
    pass.onPreUpdate.add(dart.fn(args => {
      let state = src__Core__Core.StateEventArgs.as(args).state;
      let mat1 = mover1.update(state, null);
      let mat2 = mover2.update(state, null);
      tech.bendMatrices._set(0, mat1);
      tech.bendMatrices._set(1, mat2);
      tech.bendMatrices._set(2, mat1);
      tech.bendMatrices._set(3, mat2);
      tech.bendMatrices._set(4, mat1);
      tech.bendMatrices._set(5, mat2);
      tech.bendMatrices._set(6, mat1);
      tech.bendMatrices._set(7, mat2);
    }, EventArgsToNull()));
    td.scene = pass;
    function setShape(shape) {
      shape.calculateNormals();
      obj.shape = shape;
    }
    dart.fn(setShape, ShapeTovoid());
    let _$ = new common__common.RadioGroup.new("shapes");
    _$.add("Cuboid", dart.fn(() => {
      setShape(src__Shapes__Shapes.cuboid({widthDiv: 30, heightDiv: 30}));
    }, VoidToNull()), true);
    _$.add("Cylinder", dart.fn(() => {
      setShape(src__Shapes__Shapes.cylinder({div: 100, sides: 20}));
    }, VoidToNull()));
    _$.add("Cone", dart.fn(() => {
      setShape(src__Shapes__Shapes.cylinder({topRadius: 0.0, sides: 12, capTop: false, div: 30}));
    }, VoidToNull()));
    _$.add("Sphere", dart.fn(() => {
      setShape(src__Shapes__Shapes.sphere({widthDiv: 20, heightDiv: 20}));
    }, VoidToNull()));
    _$.add("Toroid", dart.fn(() => {
      setShape(src__Shapes__Shapes.toroid({minorRadius: 0.25, majorRadius: 1.5}));
    }, VoidToNull()));
    _$.add("Knot", dart.fn(() => {
      setShape(src__Shapes__Shapes.knot({minorRadius: 0.1}));
    }, VoidToNull()));
    _$.add("Grid", dart.fn(() => {
      setShape(src__Shapes__Shapes.grid());
    }, VoidToNull()));
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test035/test.ddc", {
    "tests\\test035\\test.dart": tests__test035__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;AAaE,gBAAI,4BAAgB,CAAC;qBACF;aACR,sBAAC,kEACR;sBACgB,sBAAC;aACV,sBAAC;AAEZ,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAiB,MAAM,IAAI,0BAAgB;IAA1B,YACL,IAAI,gCAAe;AAE/B,QAAyB,OAAO,IAAI,6CAAwB;IAAnC,gBACV,IAAI,mCAAkB,SACtB,AAAI,0CAA6B,CAAC,KAAK,KAAK,CAAC,aAC7C,AAAI,4BAAiB;IAHX,qBAIL,AAAI,0BAAW,CAAC,KAAK,KAAK;IAJrB,qBAKL,AAAI,0BAAW,CAAC,KAAK,KAAK;IALrB,sBAMJ,AAAI,0BAAW,CAAC,KAAK,KAAK;IANtB,0BAOA;IAPA,sBAQJ,uBAAY,SAAS;IARjB,sBASJ,uBAAY,SAAS;IATjB,sBAUJ,uBAAY,SAAS;IAVjB,sBAWJ,uBAAY,SAAS;IAXjB,sBAYJ,uBAAY,SAAS;IAZjB,sBAaJ,uBAAY,SAAS;IAbjB,sBAcJ,uBAAY,SAAS;IAdjB,sBAeJ,uBAAY,SAAS;AAE1C,QAAa,WAAW,IAAI,6BAAY;IAA3B,aACL,IAAI,mCAAkB,SAAQ,EAAE,UAAU;IADrC,aAEL,IAAI,kCAAiB,SAAQ,EAAE,UAAU,QAAQ;IAF5C,aAGL,IAAI,gCAAe,SAAQ,EAAE,UAAU;IAHlC,aAIL,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAEhD,QAAa,SAAS,IAAI,6BAAY;IAAzB,WACL,AAAI,sCAAyB,CAAC,KAAK,KAAK;IADnC,WAEL,IAAI,+BAAc,YAAW,iBAAiB,gBAAgB;IAFzD,WAGL,IAAI,+BAAc,YAAW,iBAAiB,gBAAgB;IAHzD,WAIL,AAAI,oCAAuB,CAAC;IAJvB,WAKL,IAAI,+BAAc,YAAW,iBAAiB,CAAC,gBAAgB;IAL1D,WAML,IAAI,+BAAc,YAAW,iBAAiB,gBAAgB,CAAC;IAN1D,WAOL,AAAI,sCAAyB,CAAC,CAAC,KAAK,KAAK;AAEjD,QAAa,SAAS,IAAI,6BAAY;IAAzB,WACL,IAAI,+BAAc,YAAW,iBAAiB,gBAAgB,CAAC;IAD1D,WAEL,AAAI,sCAAyB,CAAC,KAAK,KAAK;IAFnC,WAGL,IAAI,+BAAc,YAAW,iBAAiB,gBAAgB;AAEtE,QAAkB,OAAO,IAAI,kCAAiB;IAA5B,iBACF,IAAI;IADF,kBAED,GAAG;IAFF,oBAGC,QAAQ;IAHT,qBAIE,QAAC,IAAqB;AACtC,UAAsB,0CAAS,IAAI,OAAmC;AACtE,UAAa,OAAO,MAAM,OAAO,CAAC,KAAK,EAAE;AACzC,UAAa,OAAO,MAAM,OAAO,CAAC,KAAK,EAAE;AACzC,UAAI,aAAa,MAAC,GAAK,IAAI;AAC3B,UAAI,aAAa,MAAC,GAAK,IAAI;AAC3B,UAAI,aAAa,MAAC,GAAK,IAAI;AAC3B,UAAI,aAAa,MAAC,GAAK,IAAI;AAC3B,UAAI,aAAa,MAAC,GAAK,IAAI;AAC3B,UAAI,aAAa,MAAC,GAAK,IAAI;AAC3B,UAAI,aAAa,MAAC,GAAK,IAAI;AAC3B,UAAI,aAAa,MAAC,GAAK,IAAI;;AAE/B,MAAE,MAAM,GAAG,IAAI;AAEf,aAAK,SAAS,KAAkB;AAC9B,WAAK,iBAAiB;AACtB,SAAG,MAAM,GAAG,KAAK;;YAFd;AAKL,iBAAI,6BAAiB,CAAC;WACd,UAAY;AAAK,cAAQ,CAAC,AAAO,0BAAM,YAAW,eAAe;sBAAS;WAC1E,YAAY;AAAK,cAAQ,CAAC,AAAO,4BAAQ,OAAM,YAAY;;WAC3D,QAAY;AAAK,cAAQ,CAAC,AAAO,4BAAQ,aAAY,YAAY,YAAY,YAAY;;WACzF,UAAY;AAAK,cAAQ,CAAC,AAAO,0BAAM,YAAW,eAAe;;WACjE,UAAY;AAAK,cAAQ,CAAC,AAAO,0BAAM,eAAc,mBAAmB;;WACxE,QAAY;AAAK,cAAQ,CAAC,AAAO,wBAAI,eAAc;;WACnD,QAAY;AAAK,cAAQ,CAAC,AAAO,wBAAI;;AAE7C,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test035__test: tests__test035__test
  };
});

//# sourceMappingURL=test.ddc.js.map
