define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Math/Color3'], function(dart_sdk, checkGroup, Bindable, Color3) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Shapes__Shapes = Bindable.src__Shapes__Shapes;
  const src__Math__Math = Color3.src__Math__Math;
  const _root = Object.create(null);
  const tests__test002__test = Object.create(_root);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let ShapeTovoid = () => (ShapeTovoid = dart.constFn(dart.fnType(dart.void, [src__Shapes__Shapes.Shape])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VertexAnddoubleAnddoubleToNull = () => (VertexAnddoubleAnddoubleToNull = dart.constFn(dart.fnType(core.Null, [src__Shapes__Shapes.Vertex, core.double, core.double])))();
  let doubleAnddoubleTodouble = () => (doubleAnddoubleTodouble = dart.constFn(dart.fnType(core.double, [core.double, core.double])))();
  tests__test002__test.main = function() {
    let page = new common__common.ShellPage.new("Test 002");
    page.addLargeCanvas("testCanvas");
    page.addPar(JSArrayOfString().of(["The inspection test is used to check that shapes are built correctly ", "and for checking the data privided by the shapes. ", "Also it is useful for testing out new generated shape configurations. ", "For loaded shape testing see test032."]));
    page.addControlBoxes(JSArrayOfString().of(["controls", "shapes", "scalars"]));
    page.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let obj = new src__Core__Core.Entity.new();
    obj.mover = (() => {
      let _ = new src__Movers__Movers.Group.new();
      _.add(new src__Movers__Movers.UserRotater.new({input: td.userInput, invertY: true}));
      _.add(new src__Movers__Movers.UserRoller.new({input: td.userInput, ctrl: true}));
      _.add(new src__Movers__Movers.UserZoom.new({input: td.userInput}));
      return _;
    })();
    let tech = new src__Techniques__Techniques.Inspection.new();
    tech.vectorScale = 0.4;
    td.scene = (() => {
      let _ = new src__Scenes__Scenes.EntityPass.new();
      _.technique = tech;
      _.children.add(obj);
      _.camera.mover = src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0);
      return _;
    })();
    let _ = new common__common.CheckGroup.new("controls");
    _.add("Filled", dart.fn(show => {
      tech.showFilled = show;
    }, boolToNull()), true);
    _.add("Wire Frame", dart.fn(show => {
      tech.showWireFrame = show;
    }, boolToNull()), true);
    _.add("Vertices", dart.fn(show => {
      tech.showVertices = show;
    }, boolToNull()));
    _.add("Normals", dart.fn(show => {
      tech.showNormals = show;
    }, boolToNull()));
    _.add("Binormals", dart.fn(show => {
      tech.showBinormals = show;
    }, boolToNull()));
    _.add("Tangentals", dart.fn(show => {
      tech.showTangentals = show;
    }, boolToNull()));
    _.add("Face Centers", dart.fn(show => {
      tech.showFaceCenters = show;
    }, boolToNull()));
    _.add("Face Normals", dart.fn(show => {
      tech.showFaceNormals = show;
    }, boolToNull()));
    _.add("Face Binormals", dart.fn(show => {
      tech.showFaceBinormals = show;
    }, boolToNull()));
    _.add("Face Tangentals", dart.fn(show => {
      tech.showFaceTangentals = show;
    }, boolToNull()));
    _.add("Colors", dart.fn(show => {
      tech.showColorFill = show;
    }, boolToNull()));
    _.add("Textures2D", dart.fn(show => {
      tech.showTxt2DColor = show;
    }, boolToNull()));
    _.add("TexturesCube", dart.fn(show => {
      tech.showTxtCube = show;
    }, boolToNull()));
    _.add("Weight", dart.fn(show => {
      tech.showWeight = show;
    }, boolToNull()));
    _.add("Bend", dart.fn(show => {
      tech.showBend = show;
    }, boolToNull()));
    _.add("Axis", dart.fn(show => {
      tech.showAxis = show;
    }, boolToNull()), true);
    _.add("AABB", dart.fn(show => {
      tech.showAABB = show;
    }, boolToNull()));
    function setShape(shape) {
      shape.calculateWeights();
      obj.shape = shape;
    }
    dart.fn(setShape, ShapeTovoid());
    let _$ = new common__common.RadioGroup.new("shapes");
    _$.add("Square", dart.fn(() => {
      setShape(src__Shapes__Shapes.square());
    }, VoidToNull()), true);
    _$.add("Cube", dart.fn(() => {
      setShape(src__Shapes__Shapes.cube());
    }, VoidToNull()));
    _$.add("Cuboid", dart.fn(() => {
      setShape(src__Shapes__Shapes.cuboid());
    }, VoidToNull()));
    _$.add("Cuboid+", dart.fn(() => {
      setShape(src__Shapes__Shapes.cuboid({widthDiv: 15, heightDiv: 15, vertexHndl: dart.fn((ver, u, v) => {
          let height = math.cos(dart.notNull(v) * 4.0 * 3.141592653589793 + 3.141592653589793) * 0.1 + math.cos(dart.notNull(u) * 4.0 * 3.141592653589793 + 3.141592653589793) * 0.1;
          let vec = src__Math__Math.Vector3.fromPoint3(ver.location).normal();
          ver.location = ver.location['+'](src__Math__Math.Point3.fromVector3(vec['*'](height)));
        }, VertexAnddoubleAnddoubleToNull())}));
    }, VoidToNull()));
    _$.add("Disk", dart.fn(() => {
      setShape(src__Shapes__Shapes.disk());
    }, VoidToNull()));
    _$.add("Disk+", dart.fn(() => {
      setShape(src__Shapes__Shapes.disk({sides: 30}));
    }, VoidToNull()));
    _$.add("Cylinder", dart.fn(() => {
      setShape(src__Shapes__Shapes.cylinder());
    }, VoidToNull()));
    _$.add("Cylinder+", dart.fn(() => {
      setShape(src__Shapes__Shapes.cylinder({sides: 16, div: 8}));
    }, VoidToNull()));
    _$.add("Cone", dart.fn(() => {
      setShape(src__Shapes__Shapes.cylinder({topRadius: 0.0, sides: 12, capTop: false}));
    }, VoidToNull()));
    _$.add("Cylindrical", dart.fn(() => {
      setShape(src__Shapes__Shapes.cylindrical({sides: 50, div: 25, radiusHndl: dart.fn((u, v) => math.cos(dart.notNull(v) * 4.0 * 3.141592653589793 + 3.141592653589793) * 0.2 + math.cos(dart.notNull(u) * 6.0 * 3.141592653589793) * 0.3 + 0.8, doubleAnddoubleTodouble())}));
    }, VoidToNull()));
    _$.add("LatLonSphere", dart.fn(() => {
      setShape(src__Shapes__Shapes.latLonSphere(10, 20));
    }, VoidToNull()));
    _$.add("LatLonSphere+", dart.fn(() => {
      setShape(src__Shapes__Shapes.latLonSphere(20, 40));
    }, VoidToNull()));
    _$.add("IsoSphere", dart.fn(() => {
      setShape(src__Shapes__Shapes.isosphere(2));
    }, VoidToNull()));
    _$.add("IsoSphere+", dart.fn(() => {
      setShape(src__Shapes__Shapes.isosphere(3));
    }, VoidToNull()));
    _$.add("Sphere", dart.fn(() => {
      setShape(src__Shapes__Shapes.sphere({widthDiv: 6, heightDiv: 6}));
    }, VoidToNull()));
    _$.add("Sphere+", dart.fn(() => {
      setShape(src__Shapes__Shapes.sphere({widthDiv: 10, heightDiv: 10}));
    }, VoidToNull()));
    _$.add("Spherical", dart.fn(() => {
      setShape(src__Shapes__Shapes.sphere({widthDiv: 10, heightDiv: 10, heightHndl: dart.fn((u, v) => math.cos(math.sqrt((dart.notNull(u) - 0.5) * (dart.notNull(u) - 0.5) + (dart.notNull(v) - 0.5) * (dart.notNull(v) - 0.5)) * 3.141592653589793) * 0.3, doubleAnddoubleTodouble())}));
    }, VoidToNull()));
    _$.add("Toroid", dart.fn(() => {
      setShape(src__Shapes__Shapes.toroid());
    }, VoidToNull()));
    _$.add("Knot", dart.fn(() => {
      setShape(src__Shapes__Shapes.knot());
    }, VoidToNull()));
    _$.add("Grid", dart.fn(() => {
      setShape(src__Shapes__Shapes.grid());
    }, VoidToNull()));
    _$.add("Grid+", dart.fn(() => {
      setShape(src__Shapes__Shapes.grid({widthDiv: 16, heightDiv: 16, heightHndl: dart.fn((u, v) => math.sin(dart.notNull(u) * 8.0) * math.cos(dart.notNull(v) * 8.0) * 0.3, doubleAnddoubleTodouble())}));
    }, VoidToNull()));
    let _$0 = new common__common.RadioGroup.new("scalars");
    _$0.add("0.01", dart.fn(() => {
      tech.vectorScale = 0.01;
    }, VoidToNull()));
    _$0.add("0.02", dart.fn(() => {
      tech.vectorScale = 0.02;
    }, VoidToNull()));
    _$0.add("0.04", dart.fn(() => {
      tech.vectorScale = 0.04;
    }, VoidToNull()));
    _$0.add("0.06", dart.fn(() => {
      tech.vectorScale = 0.06;
    }, VoidToNull()));
    _$0.add("0.08", dart.fn(() => {
      tech.vectorScale = 0.08;
    }, VoidToNull()));
    _$0.add("0.1", dart.fn(() => {
      tech.vectorScale = 0.1;
    }, VoidToNull()));
    _$0.add("0.2", dart.fn(() => {
      tech.vectorScale = 0.2;
    }, VoidToNull()));
    _$0.add("0.4", dart.fn(() => {
      tech.vectorScale = 0.4;
    }, VoidToNull()), true);
    _$0.add("0.6", dart.fn(() => {
      tech.vectorScale = 0.6;
    }, VoidToNull()));
    _$0.add("0.8", dart.fn(() => {
      tech.vectorScale = 0.8;
    }, VoidToNull()));
    _$0.add("1.0", dart.fn(() => {
      tech.vectorScale = 1.0;
    }, VoidToNull()));
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test002/test.ddc", {
    "tests\\test002\\test.dart": tests__test002__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":"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","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test002__test: tests__test002__test
  };
});

//# sourceMappingURL=test.ddc.js.map
