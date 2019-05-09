define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Math/Color3', 'packages/ThreeDart/src/Events/Changable'], function(dart_sdk, checkGroup, Bindable, Color3, Changable) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Lights__Lights = Bindable.src__Lights__Lights;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Shapes__Shapes = Bindable.src__Shapes__Shapes;
  const src__Data__Data = Bindable.src__Data__Data;
  const src__Math__Math = Color3.src__Math__Math;
  const src__Events__Events = Changable.src__Events__Events;
  const _root = Object.create(null);
  const tests__test037__test = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let ShapeToNull = () => (ShapeToNull = dart.constFn(dart.fnType(core.Null, [src__Shapes__Shapes.Shape])))();
  let doubleToNull = () => (doubleToNull = dart.constFn(dart.fnType(core.Null, [core.double])))();
  tests__test037__test.main = function() {
    let _ = new common__common.ShellPage.new("Test 037");
    _.addLargeCanvas("testCanvas");
    _.addPar(JSArrayOfString().of(["A test of applying a height map to an image. ", "Some shapes will take a bit to calculate depending on quality of mapping."]));
    _.addControlBoxes(JSArrayOfString().of(["heightMaps", "shapes", "scalars"]));
    _.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let tech = new src__Techniques__Techniques.MaterialLight.new();
    tech.lights.add(new src__Lights__Lights.Directional.new({mover: src__Movers__Movers.Constant.vectorTowards(1.0, 1.0, -3.0), color: src__Math__Math.Color3.white()}));
    tech.ambient.color = src__Math__Math.Color3.new(0.0, 0.0, 1.0);
    tech.diffuse.color = src__Math__Math.Color3.new(0.0, 1.0, 0.0);
    tech.specular.color = src__Math__Math.Color3.new(1.0, 0.0, 0.0);
    tech.specular.shininess = 10.0;
    let objTech = new src__Core__Core.Entity.new();
    objTech.technique = tech;
    let group = new src__Core__Core.Entity.new();
    group.children.add(objTech);
    group.mover = (() => {
      let _ = new src__Movers__Movers.Group.new();
      _.add(new src__Movers__Movers.UserRotater.new({input: td.userInput}));
      _.add(new src__Movers__Movers.UserRoller.new({input: td.userInput, ctrl: true}));
      _.add(new src__Movers__Movers.UserZoom.new({input: td.userInput}));
      return _;
    })();
    td.scene = (() => {
      let _ = new src__Scenes__Scenes.EntityPass.new();
      _.children.add(group);
      _.camera.mover = src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0);
      return _;
    })();
    let baseShape = null;
    let textureFile = "";
    let scalar = 1.0;
    let updateShape = () => {
      if (baseShape != null && textureFile[$isNotEmpty]) {
        let heightMap = td.textureLoader.load2DFromFile(textureFile);
        heightMap.changed.add(dart.fn(_ => {
          let heightReader = td.textureLoader.readAll(heightMap);
          let shape = src__Shapes__Shapes.Shape.copy(baseShape);
          shape.calculateNormals();
          shape.applyHeightMap(heightReader, scalar);
          shape.trimVertices(src__Data__Data.VertexType.Norm['~']());
          shape.trimFaces({norm: false});
          shape.calculateNormals();
          objTech.shape = shape;
        }, EventArgsToNull()));
      }
    };
    dart.fn(updateShape, VoidToNull());
    let setTextureFile = fileName => {
      textureFile = fileName;
      updateShape();
    };
    dart.fn(setTextureFile, StringToNull());
    let _$ = new common__common.Texture2DGroup.new("heightMaps", setTextureFile);
    _$.add("../resources/HeightMap1.png", true);
    _$.add("../resources/HeightMap2.png");
    _$.add("../resources/HeightMap3.png");
    _$.add("../resources/ScrewHeightMap.png");
    let setShape = shape => {
      baseShape = shape;
      updateShape();
    };
    dart.fn(setShape, ShapeToNull());
    let _$0 = new common__common.RadioGroup.new("shapes");
    _$0.add("Cuboid", dart.fn(() => {
      setShape(src__Shapes__Shapes.cuboid({widthDiv: 50, heightDiv: 50}));
    }, VoidToNull()));
    _$0.add("Cylinder", dart.fn(() => {
      setShape(src__Shapes__Shapes.cylinder({sides: 80, div: 80, capTop: false, capBottom: false}));
    }, VoidToNull()));
    _$0.add("LatLonSphere", dart.fn(() => {
      setShape(src__Shapes__Shapes.latLonSphere(80, 80));
    }, VoidToNull()));
    _$0.add("Sphere", dart.fn(() => {
      setShape(src__Shapes__Shapes.sphere({widthDiv: 50, heightDiv: 50}));
    }, VoidToNull()));
    _$0.add("Toroid", dart.fn(() => {
      setShape(src__Shapes__Shapes.toroid({minorCount: 50, majorCount: 50}));
    }, VoidToNull()));
    _$0.add("Grid Small", dart.fn(() => {
      setShape(src__Shapes__Shapes.grid({widthDiv: 50, heightDiv: 50}));
    }, VoidToNull()));
    _$0.add("Grid Medium", dart.fn(() => {
      setShape(src__Shapes__Shapes.grid({widthDiv: 100, heightDiv: 100}));
    }, VoidToNull()), true);
    _$0.add("Grid Large", dart.fn(() => {
      setShape(src__Shapes__Shapes.grid({widthDiv: 150, heightDiv: 150}));
    }, VoidToNull()));
    let setScalar = s => {
      scalar = s;
      updateShape();
    };
    dart.fn(setScalar, doubleToNull());
    let _$1 = new common__common.RadioGroup.new("scalars");
    _$1.add("0.1", dart.fn(() => {
      setScalar(0.1);
    }, VoidToNull()));
    _$1.add("0.2", dart.fn(() => {
      setScalar(0.2);
    }, VoidToNull()));
    _$1.add("0.4", dart.fn(() => {
      setScalar(0.4);
    }, VoidToNull()));
    _$1.add("0.6", dart.fn(() => {
      setScalar(0.6);
    }, VoidToNull()), true);
    _$1.add("0.8", dart.fn(() => {
      setScalar(0.8);
    }, VoidToNull()));
    _$1.add("1.0", dart.fn(() => {
      setScalar(1.0);
    }, VoidToNull()));
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test037/test.ddc", {
    "tests\\test037\\test.dart": tests__test037__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;AAcE,gBAAI,4BAAgB,CAAC;qBACF;aACR,sBAAC,iDACR;sBACgB,sBAAC,cAAc,UAAU;aAClC,sBAAC;AAEZ,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAyB,OAAO,IAAI,6CAAwB;IAAnC,gBACV,IAAI,mCAAkB,SACtB,AAAI,0CAA6B,CAAC,KAAK,KAAK,CAAC,aAC7C,AAAI,4BAAiB;IAHX,qBAIL,AAAI,0BAAW,CAAC,KAAK,KAAK;IAJrB,qBAKL,AAAI,0BAAW,CAAC,KAAK,KAAK;IALrB,sBAMJ,AAAI,0BAAW,CAAC,KAAK,KAAK;IANtB,0BAOA;AAEzB,QAAiB,UAAU,IAAI,0BAAgB;IAA9B,oBACD,IAAI;AAEpB,QAAiB,QAAQ,IAAI,0BAAgB;IAA5B,mBACA,OAAO;IADP;cAEJ,IAAI,6BAAY;YACnB,IAAI,mCAAkB,SAAQ,EAAE,UAAU;YAC1C,IAAI,kCAAiB,SAAQ,EAAE,UAAU,QAAQ;YACjD,IAAI,gCAAe,SAAQ,EAAE,UAAU;;;AAEjD,MAAE,MAAM;cAAG,IAAI,kCAAiB;qBACf,KAAK;uBACH,AAAI,sCAAyB,CAAC,KAAK,KAAK;;;AAE3D,QAAa,YAAY;AACzB,QAAO,cAAc;AACrB,QAAO,SAAS;AAChB,QAAI;AACF,UAAK,SAAS,IAAI,QAAU,WAAW,aAAW,EAAG;AACnD,YAAmB,YAAY,EAAE,cAAc,eAAe,CAAC,WAAW;AAC1E,iBAAS,QAAQ,IAAI,CAAC,QAAC,CAAC;AACtB,cAAuB,eAAe,EAAE,cAAc,QAAQ,CAAC,SAAS;AACxE,cAAa,QAAQ,AAAI,8BAAiB,CAAC,SAAS;AACpD,eAAK,iBAAiB;AACtB,eAAK,eAAe,CAAC,YAAY,EAAE,MAAM;AACzC,eAAK,aAAa,CAAC,AAAC,0BAAe,KAAK;AACxC,eAAK,UAAU,QAAO;AACtB,eAAK,iBAAiB;AACtB,iBAAO,MAAM,GAAG,KAAK;;;;YAXvB;AAgBJ,QAAI,iBAAkB,QAAe;AACnC,iBAAW,GAAG,QAAQ;AACtB,iBAAW;;YAFT;AAIJ,iBAAI,iCAAqB,CAAC,cAAc,cAAc;WAC9C,+BAA+B;WAC/B;WACA;WACA;AAER,QAAI,WAAY,KAAkB;AAChC,eAAS,GAAG,KAAK;AACjB,iBAAW;;YAFT;AAIJ,kBAAI,6BAAiB,CAAC;YACd,UAAgB;AAAK,cAAQ,CAAC,AAAO,0BAAM,YAAW,eAAe;;YACrE,YAAgB;AAAK,cAAQ,CAAC,AAAO,4BAAQ,SAAQ,SAAS,YAAY,kBAAkB;;YAC5F,gBAAgB;AAAK,cAAQ,CAAC,AAAO,gCAAY,CAAC,IAAI;;YACtD,UAAgB;AAAK,cAAQ,CAAC,AAAO,0BAAM,YAAW,eAAe;;YACrE,UAAgB;AAAK,cAAQ,CAAC,AAAO,0BAAM,cAAa,gBAAgB;;YACxE,cAAgB;AAAK,cAAQ,CAAC,AAAO,wBAAI,YAAW,eAAe;;YACnE,eAAgB;AAAK,cAAQ,CAAC,AAAO,wBAAI,YAAW,gBAAgB;sBAAU;YAC9E,cAAgB;AAAK,cAAQ,CAAC,AAAO,wBAAI,YAAW,gBAAgB;;AAE5E,QAAI,YAAa,CAAQ;AACvB,YAAM,GAAG,CAAC;AACV,iBAAW;;YAFT;AAIJ,kBAAI,6BAAiB,CAAC;YACd,OAAO;AAAK,eAAS,CAAC;;YACtB,OAAO;AAAK,eAAS,CAAC;;YACtB,OAAO;AAAK,eAAS,CAAC;;YACtB,OAAO;AAAK,eAAS,CAAC;sBAAS;YAC/B,OAAO;AAAK,eAAS,CAAC;;YACtB,OAAO;AAAK,eAAS,CAAC;;AAE9B,IAAO,sBAAO,CAAC,EAAE;EACnB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test037__test: tests__test037__test
  };
});

//# sourceMappingURL=test.ddc.js.map
