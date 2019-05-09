define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Math/Color3', 'packages/ThreeDart/src/Events/Changable'], function(dart_sdk, checkGroup, Bindable, Color3, Changable) {
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
  const src__Events__Events = Changable.src__Events__Events;
  const _root = Object.create(null);
  const tests__test028__test = Object.create(_root);
  const $split = dartx.split;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfScene = () => (JSArrayOfScene = dart.constFn(_interceptors.JSArray$(src__Scenes__Scenes.Scene)))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  tests__test028__test.main = function() {
    let page = new common__common.ShellPage.new("Test 028");
    page.addLargeCanvas("testCanvas");
    page.addPar(JSArrayOfString().of(["Test of a Gaussian blur cover pass. ", "Notice the depth of field causing things further away to be blurry."]));
    page.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let secondMover = new src__Movers__Movers.Group.new();
    secondMover.add(new src__Movers__Movers.UserRotater.new({input: td.userInput}));
    secondMover.add(new src__Movers__Movers.UserRoller.new({ctrl: true, input: td.userInput}));
    secondMover.add(new src__Movers__Movers.UserZoom.new({input: td.userInput}));
    secondMover.add(src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0));
    let userCamera = new src__Views__Views.Perspective.new({mover: secondMover});
    let cubeEntity = new src__Core__Core.Entity.new({shape: src__Shapes__Shapes.cube()});
    let group = new src__Core__Core.Entity.new();
    for (let x = -1.6; x <= 1.7; x = x + 0.8) {
      for (let y = -1.6; y <= 1.7; y = y + 0.8) {
        for (let z = -1.6; z <= 1.7; z = z + 0.8) {
          let mat = src__Math__Math.Matrix4.translate(x, y, z)['*'](src__Math__Math.Matrix4.scale(0.2, 0.2, 0.2));
          let entity = new src__Core__Core.Entity.new();
          entity.mover = new src__Movers__Movers.Constant.new(mat);
          entity.children.add(cubeEntity);
          group.children.add(entity);
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
    let colorTarget = new src__Views__Views.BackTarget.new(800, 600, {autoResize: true});
    colorTarget.clearColor = false;
    let skybox = src__Scenes__Scenes.CoverPass.skybox(td.textureLoader.loadCubeFromPath("../resources/maskonaive", {ext: ".jpg"}));
    skybox.camera = userCamera;
    skybox.target = colorTarget;
    let colorPass = new src__Scenes__Scenes.EntityPass.new();
    colorPass.camera = userCamera;
    colorPass.target = colorTarget;
    colorPass.technique = colorTech;
    colorPass.children.add(group);
    let depthTarget = new src__Views__Views.BackTarget.new(400, 300, {autoResize: true, autoResizeScalarX: 0.5, autoResizeScalarY: 0.5});
    let depthPass = new src__Scenes__Scenes.EntityPass.new();
    depthPass.camera = userCamera;
    depthPass.target = depthTarget;
    depthPass.technique = new src__Techniques__Techniques.Depth.new({fogStart: 3.5, fogStop: 5.5});
    depthPass.children.add(group);
    let blurTech = new src__Techniques__Techniques.GaussianBlur.new({colorTxt: colorTarget.colorTexture, depthTxt: depthTarget.colorTexture, highOffset: 0.0, lowOffset: 3.0, depthLimit: 0.001});
    let blurPass = new src__Scenes__Scenes.CoverPass.new();
    blurPass.technique = blurTech;
    let layoutTech = new src__Techniques__Techniques.TextureLayout.new();
    layoutTech.entries.add(new src__Techniques__Techniques.TextureLayoutEntry.new({texture: depthTarget.colorTexture, destination: src__Math__Math.Region2.new(0.0, 0.8, 0.2, 0.2)}));
    layoutTech.entries.add(new src__Techniques__Techniques.TextureLayoutEntry.new({texture: colorTarget.colorTexture, destination: src__Math__Math.Region2.new(0.0, 0.6, 0.2, 0.2)}));
    let layout = new src__Scenes__Scenes.CoverPass.new();
    layout.target = new src__Views__Views.FrontTarget.new({clearColor: false});
    layout.technique = layoutTech;
    td.scene = new src__Scenes__Scenes.Compound.new({passes: JSArrayOfScene().of([skybox, colorPass, depthPass, blurPass, layout])});
    td.postrender.once(dart.fn(_ => {
      page.addCode("Vertex Shader for blur", "glsl", 0, blurTech.vertexSourceCode[$split]("\n"));
      page.addCode("Fragment Shader for blur", "glsl", 0, blurTech.fragmentSourceCode[$split]("\n"));
    }, EventArgsToNull()));
    common__common.showFPS(td);
  };
  dart.trackLibraries("web/tests/test028/test.ddc", {
    "tests\\test028\\test.dart": tests__test028__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":"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","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test028__test: tests__test028__test
  };
});

//# sourceMappingURL=test.ddc.js.map
