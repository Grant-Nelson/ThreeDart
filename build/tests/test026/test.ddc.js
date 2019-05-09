define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Math/Color3', 'packages/ThreeDart/src/Events/Changable'], function(dart_sdk, checkGroup, Bindable, Color3, Changable) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Lights__Lights = Bindable.src__Lights__Lights;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Shapes__Shapes = Bindable.src__Shapes__Shapes;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Math__Math = Color3.src__Math__Math;
  const src__Events__Events = Changable.src__Events__Events;
  const _root = Object.create(null);
  const tests__test026__test = Object.create(_root);
  const $split = dartx.split;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  tests__test026__test.main = function() {
    let page = new common__common.ShellPage.new("Test 026");
    page.addLargeCanvas("testCanvas");
    page.addPar(JSArrayOfString().of(["Test of the Material Lighting shader with a textured directional light. ", "The texturing of the directional light is being modified with a matrix. ", "The texture metrix is updated using the pre-update mathods. ", "Use Ctrl plus the mouse to move the center object."]));
    page.addControlBoxes(JSArrayOfString().of(["shapes"]));
    page.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let dir1 = new src__Lights__Lights.Directional.new();
    dir1.mover = src__Movers__Movers.Constant.vectorTowards(0.3, 0.4, 1.0);
    let dir2 = new src__Lights__Lights.Directional.new();
    dir2.mover = src__Movers__Movers.Constant.vectorTowards(-0.3, -0.4, -1.0);
    dir2.color = src__Math__Math.Color3.new(0.125, 0.125, 0.125);
    let tech = new src__Techniques__Techniques.MaterialLight.new();
    tech.lights.add(dir1);
    tech.lights.add(dir2);
    tech.emission.color = src__Math__Math.Color3.black();
    tech.ambient.color = src__Math__Math.Color3.gray(0.1);
    tech.diffuse.color = src__Math__Math.Color3.gray(0.8);
    tech.specular.color = src__Math__Math.Color3.gray(0.2);
    tech.specular.shininess = 100.0;
    tech.diffuse.texture2D = td.textureLoader.load2DFromFile("../resources/Test.png", {wrapEdges: true});
    let centerObj = new src__Core__Core.Entity.new();
    centerObj.mover = new src__Movers__Movers.UserRotater.new({input: td.userInput, ctrl: true});
    centerObj.shape = src__Shapes__Shapes.toroid();
    let room = new src__Core__Core.Entity.new();
    room.mover = src__Movers__Movers.Constant.scale(3.0, 3.0, 3.0);
    room.shape = (() => {
      let _ = src__Shapes__Shapes.cube();
      _.flip();
      return _;
    })();
    let camMover = new src__Movers__Movers.Group.new();
    camMover.add(new src__Movers__Movers.UserRotater.new({input: td.userInput}));
    camMover.add(src__Movers__Movers.Constant.rotateX(3.141592653589793));
    camMover.add(src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0));
    let colorMover = new src__Movers__Movers.Rotater.new({deltaYaw: 0.3, deltaPitch: 0.5, deltaRoll: 0.7});
    let txtMover = new src__Movers__Movers.Rotater.new({deltaYaw: 0.0, deltaPitch: 0.0, deltaRoll: 0.1});
    td.scene = (() => {
      let _ = new src__Scenes__Scenes.EntityPass.new();
      _.technique = tech;
      _.children.add(centerObj);
      _.children.add(room);
      _.camera.mover = camMover;
      _.onPreUpdate.add(dart.fn(args => {
        let state = src__Core__Core.StateEventArgs.as(args).state;
        tech.colorMatrix = colorMover.update(state, null);
        tech.texture2DMatrix = src__Math__Math.Matrix3.fromMatrix4(txtMover.update(state, null));
      }, EventArgsToNull()));
      return _;
    })();
    let _ = new common__common.RadioGroup.new("shapes");
    _.add("Cube", dart.fn(() => {
      centerObj.shape = src__Shapes__Shapes.cube();
    }, VoidToNull()));
    _.add("Cylinder", dart.fn(() => {
      centerObj.shape = src__Shapes__Shapes.cylinder({sides: 40});
    }, VoidToNull()));
    _.add("Cone", dart.fn(() => {
      centerObj.shape = src__Shapes__Shapes.cylinder({topRadius: 0.0, sides: 40, capTop: false});
    }, VoidToNull()));
    _.add("Sphere", dart.fn(() => {
      centerObj.shape = src__Shapes__Shapes.sphere({widthDiv: 6, heightDiv: 6});
    }, VoidToNull()));
    _.add("Toroid", dart.fn(() => {
      centerObj.shape = src__Shapes__Shapes.toroid();
    }, VoidToNull()), true);
    _.add("Knot", dart.fn(() => {
      centerObj.shape = src__Shapes__Shapes.knot();
    }, VoidToNull()));
    td.postrender.once(dart.fn(_ => {
      page.addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode[$split]("\n"));
      page.addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode[$split]("\n"));
    }, EventArgsToNull()));
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test026/test.ddc", {
    "tests\\test026\\test.dart": tests__test026__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;AAaE,QAAiB,OAAO,IAAI,4BAAgB,CAAC;IAA5B,oBACE;IADF,YAEN,sBACP,4EACA,4EACA,gEACA;IANa,qBAOG,sBAAC;IAPJ,YAQN,sBAAC;AAEZ,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAmB,OAAO,IAAI,mCAAkB;IAA7B,aACP,AAAI,0CAA6B,CAAC,KAAK,KAAK;AAExD,QAAmB,OAAO,IAAI,mCAAkB;IAA7B,aACP,AAAI,0CAA6B,CAAC,CAAC,KAAK,CAAC,KAAK,CAAC;IADxC,aAEP,AAAI,0BAAW,CAAC,OAAO,OAAO;AAE1C,QAAyB,OAAO,IAAI,6CAAwB;IAAnC,gBACV,IAAI;IADM,gBAEV,IAAI;IAFM,sBAGJ,AAAI,4BAAiB;IAHjB,qBAIL,AAAI,2BAAgB,CAAC;IAJhB,qBAKL,AAAI,2BAAgB,CAAC;IALhB,sBAMJ,AAAI,2BAAgB,CAAC;IANjB,0BAOA;IAPA,yBAQD,EAAE,cAAc,eAAe,CAAC,qCAAoC;AAE5F,QAAiB,YAAY,IAAI,0BAAgB;IAAhC,kBACL,IAAI,mCAAkB,SAAQ,EAAE,UAAU,QAAQ;IAD7C,kBAEL,AAAO,0BAAM;AAEzB,QAAiB,OAAO,IAAI,0BAAgB;IAA3B,aACL,AAAI,kCAAqB,CAAC,KAAK,KAAK;IAD/B;cAEJ,AAAO,wBAAI;;;;AAExB,QAAa,WAAW,IAAI,6BAAY;IAA3B,aACP,IAAI,mCAAkB,SAAQ,EAAE,UAAU;IADnC,aAEP,AAAI,oCAAuB,CAAM,iBAAE;IAF5B,aAGP,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAE9C,QAAe,aAAa,IAAI,+BAAc,YAAW,iBAAiB,gBAAgB;AAC1F,QAAe,WAAa,IAAI,+BAAc,YAAW,iBAAiB,gBAAgB;AAC1F,MAAE,MAAM;cAAG,IAAI,kCAAiB;oBAChB,IAAI;qBACH,SAAS;qBACT,IAAI;uBACF,QAAQ;wBACP,QAAC,IAAqB;AACtC,YAAsB,0CAAS,IAAI,OAAmC;AACtE,YAAI,YAAY,GAAG,UAAU,OAAO,CAAC,KAAK,EAAE;AAC5C,YAAI,gBAAgB,GAAG,AAAI,mCAAwB,CAAC,QAAQ,OAAO,CAAC,KAAK,EAAE;;;;AAG/E,gBAAI,6BAAiB,CAAC;UACd,QAAY;AAAK,eAAS,MAAM,GAAG,AAAO,wBAAI;;UAC9C,YAAY;AAAK,eAAS,MAAM,GAAG,AAAO,4BAAQ,SAAQ;;UAC1D,QAAY;AAAK,eAAS,MAAM,GAAG,AAAO,4BAAQ,aAAY,YAAY,YAAY;;UACtF,UAAY;AAAK,eAAS,MAAM,GAAG,AAAO,0BAAM,YAAW,cAAc;;UACzE,UAAY;AAAK,eAAS,MAAM,GAAG,AAAO,0BAAM;sBAAO;UACvD,QAAY;AAAK,eAAS,MAAM,GAAG,AAAO,wBAAI;;AAEtD,MAAE,WAAW,KAAK,CAAC,QAAC,CAAC;AACnB,MACE,AAAE,YAAO,CAAC,iBAAiB,QAAQ,GAAG,IAAI,iBAAiB,QAAM,CAAC;MAClE,AAAE,YAAO,CAAC,mBAAmB,QAAQ,GAAG,IAAI,mBAAmB,QAAM,CAAC;;AAE1E,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test026__test: tests__test026__test
  };
});

//# sourceMappingURL=test.ddc.js.map
