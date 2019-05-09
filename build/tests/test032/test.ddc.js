define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/IO'], function(dart_sdk, checkGroup, Bindable, IO) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__IO__IO = IO.src__IO__IO;
  const _root = Object.create(null);
  const tests__test032__test = Object.create(_root);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let EntityToNull = () => (EntityToNull = dart.constFn(dart.fnType(core.Null, [src__Core__Core.Entity])))();
  let EntityToEntity = () => (EntityToEntity = dart.constFn(dart.fnType(src__Core__Core.Entity, [src__Core__Core.Entity])))();
  let StringToFuture = () => (StringToFuture = dart.constFn(dart.fnType(async.Future, [core.String])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  tests__test032__test.main = function() {
    let _ = new common__common.ShellPage.new("Test 032");
    _.addLargeCanvas("testCanvas");
    _.addPar(JSArrayOfString().of(["The inspection test for shapes loaders. ", "For generated shapes see test002. ", "Note: Some shapes will take time to load."]));
    _.addControlBoxes(JSArrayOfString().of(["controls", "shapes", "scalars"]));
    _.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let showMtrl = true;
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
    let _$ = new common__common.CheckGroup.new("controls");
    _$.add("Material", dart.fn(show => {
      showMtrl = show;
      if (dart.notNull(obj.children.length) > 1) obj.children._get(0).enabled = showMtrl;
    }, boolToNull()), true);
    _$.add("Filled", dart.fn(show => {
      tech.showFilled = show;
    }, boolToNull()));
    _$.add("Wire Frame", dart.fn(show => {
      tech.showWireFrame = show;
    }, boolToNull()), true);
    _$.add("Vertices", dart.fn(show => {
      tech.showVertices = show;
    }, boolToNull()));
    _$.add("Normals", dart.fn(show => {
      tech.showNormals = show;
    }, boolToNull()));
    _$.add("Binormals", dart.fn(show => {
      tech.showBinormals = show;
    }, boolToNull()));
    _$.add("Tangentals", dart.fn(show => {
      tech.showTangentals = show;
    }, boolToNull()));
    _$.add("Face Centers", dart.fn(show => {
      tech.showFaceCenters = show;
    }, boolToNull()));
    _$.add("Face Normals", dart.fn(show => {
      tech.showFaceNormals = show;
    }, boolToNull()));
    _$.add("Face Binormals", dart.fn(show => {
      tech.showFaceBinormals = show;
    }, boolToNull()));
    _$.add("Face Tangentals", dart.fn(show => {
      tech.showFaceTangentals = show;
    }, boolToNull()));
    _$.add("Colors", dart.fn(show => {
      tech.showColorFill = show;
    }, boolToNull()));
    _$.add("Textures2D", dart.fn(show => {
      tech.showTxt2DColor = show;
    }, boolToNull()));
    _$.add("TexturesCube", dart.fn(show => {
      tech.showTxtCube = show;
    }, boolToNull()));
    _$.add("Weight", dart.fn(show => {
      tech.showWeight = show;
    }, boolToNull()));
    _$.add("Axis", dart.fn(show => {
      tech.showAxis = show;
    }, boolToNull()), true);
    _$.add("AABB", dart.fn(show => {
      tech.showAABB = show;
    }, boolToNull()));
    function copyEntity(entity) {
      let copy = new src__Core__Core.Entity.new();
      copy.shape = entity.shape;
      entity.children.forEach(dart.fn(child => {
        copy.children.add(copyEntity(child));
      }, EntityToNull()));
      return copy;
    }
    dart.fn(copyEntity, EntityToEntity());
    function setEntity(objFile) {
      return async.async(dart.dynamic, function* setEntity() {
        let entity = (yield src__IO__IO.ObjType.fromFile(objFile, td.textureLoader));
        entity.resizeCenter(3.5);
        obj.children.clear();
        obj.children.add(entity);
        entity.enabled = showMtrl;
        let other = copyEntity(entity);
        other.technique = tech;
        obj.children.add(other);
      });
    }
    dart.fn(setEntity, StringToFuture());
    let _$0 = new common__common.RadioGroup.new("shapes");
    _$0.add("Cube", dart.fn(() => async.async(core.Null, function*() {
      setEntity("../resources/Cube.obj");
    }), VoidToFutureOfNull()), true);
    _$0.add("Low Poly Tree", dart.fn(() => async.async(core.Null, function*() {
      setEntity("../resources/tree/tree.obj");
    }), VoidToFutureOfNull()));
    _$0.add("Low Poly Wolf", dart.fn(() => async.async(core.Null, function*() {
      setEntity("../resources/Wolf.obj");
    }), VoidToFutureOfNull()));
    _$0.add("Plant", dart.fn(() => async.async(core.Null, function*() {
      setEntity("../resources/plant/plant.obj");
    }), VoidToFutureOfNull()));
    let _$1 = new common__common.RadioGroup.new("scalars");
    _$1.add("0.01", dart.fn(() => {
      tech.vectorScale = 0.01;
    }, VoidToNull()));
    _$1.add("0.02", dart.fn(() => {
      tech.vectorScale = 0.02;
    }, VoidToNull()));
    _$1.add("0.04", dart.fn(() => {
      tech.vectorScale = 0.04;
    }, VoidToNull()));
    _$1.add("0.06", dart.fn(() => {
      tech.vectorScale = 0.06;
    }, VoidToNull()));
    _$1.add("0.08", dart.fn(() => {
      tech.vectorScale = 0.08;
    }, VoidToNull()));
    _$1.add("0.1", dart.fn(() => {
      tech.vectorScale = 0.1;
    }, VoidToNull()));
    _$1.add("0.2", dart.fn(() => {
      tech.vectorScale = 0.2;
    }, VoidToNull()));
    _$1.add("0.4", dart.fn(() => {
      tech.vectorScale = 0.4;
    }, VoidToNull()), true);
    _$1.add("0.6", dart.fn(() => {
      tech.vectorScale = 0.6;
    }, VoidToNull()));
    _$1.add("0.8", dart.fn(() => {
      tech.vectorScale = 0.8;
    }, VoidToNull()));
    _$1.add("1.0", dart.fn(() => {
      tech.vectorScale = 1.0;
    }, VoidToNull()));
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test032/test.ddc", {
    "tests\\test032\\test.dart": tests__test032__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":"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","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test032__test: tests__test032__test
  };
});

//# sourceMappingURL=test.ddc.js.map
