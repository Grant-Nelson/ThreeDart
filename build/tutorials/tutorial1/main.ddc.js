define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable'], function(dart_sdk, checkGroup, Bindable) {
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
  const _root = Object.create(null);
  const tutorials__tutorial1__main = Object.create(_root);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  tutorials__tutorial1__main.main = function() {
    let _ = new common__common.ShellPage.new("Tutorial 1");
    _.addPar(JSArrayOfString().of(["This tutorial will walk you through creating the \"Hello World\" ", "of 3D graphics, a rotating cube. After this tutorial you should know how ", "to create a [3Dart|https://github.com/Grant-Nelson/ThreeDart] project. ", "However, it is recommended you have a basic understanding of [Dart|https://www.dartlang.org] ", "and [3D Matrices|http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/] ", "before starting. You will not need to know [WebGL|https://en.wikipedia.org/wiki/WebGL] ", "nor [OpenGL|https://en.wikipedia.org/wiki/OpenGL] until the more advanced ", "tutorials."]));
    _.addCanvas("tutorial1");
    _.addHeader(0, "Getting Started");
    _.addPar(JSArrayOfString().of(["The following is the [HTML|#index.html] and the [Dart|#main.dart] files ", "that we will explore in this tutorial. For this first tutorial I will just ", "provide the code and then we'll go over code describing how it works."]));
    _.addCode("index.html", "html", 0, JSArrayOfString().of(["<!DOCTYPE html>", "<html>", "  <head>", "  \t<meta charset=\"utf-8\">", "  \t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">", "   <title>Tutorial 1</title>", "  </head>", "  <body>", "    <canvas id=\"tutorial1\" width=\"800\" height=\"600\"></canvas>", "    <script defer src=\"main.dart.js\"></script>", "  </body>", "</html>"]));
    _.addCode("main.dart", "dart", 0, JSArrayOfString().of(["library threeDartTutorial1;", "", "import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;", "import 'package:ThreeDart/Shapes.dart' as Shapes;", "import 'package:ThreeDart/Movers.dart' as Movers;", "import 'package:ThreeDart/Techniques.dart' as Techniques;", "import 'package:ThreeDart/Scenes.dart' as Scenes;", "", "void main() {", "  ThreeDart.Entity obj = new ThreeDart.Entity()", "    ..shape = Shapes.cube()", "    ..mover = new Movers.Rotater()", "    ..technique = new Techniques.Depth(fogStart: 3.0, fogStop: 6.0);", "", "  Scenes.EntityPass pass = new Scenes.EntityPass()", "    ..children.add(obj)", "    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);", "", "  new ThreeDart.ThreeDart.fromId(\"tutorial1\")", "    ..scene = pass;", "}"]));
    _.addHeader(4, "ThreeDart");
    _.addPar(JSArrayOfString().of(["ThreeDart must have a ", "[HTML canvas element|http://www.w3schools.com/graphics/canvas_intro.asp] to ", "render graphics to. In this example the canvas is provided by [index.html|#index.html] ", "and labelled `tutorial1`. On line 21 of [main.dart|#main.dart] the main ThreeDart class ", "is created an attached to that canvas using its identifier."]));
    _.addHeader(4, "Scene");
    _.addPar(JSArrayOfString().of(["To make the image, the rendering has to have something to render. ", "A scene is set to ThreeDart to provide the content to render. A scene ", "can be a single rendering pass or a composite of several scenes. In this ", "tutorial the scene is only a single pass for rendering entities, the `EntityPass`. "]));
    _.addPar(JSArrayOfString().of(["The EntityPass has a default render target, a `Front Target`, which renders ", "directly to the canvas. On render the target will first clear its depth buffer ", "and color buffer which is why the background is black."]));
    _.addPar(JSArrayOfString().of(["The EntityPass also has a default camera, a `Perspective Camera`. ", "For this example we moved the camera, using a `Constant Mover`, back so that the ", "camera is off the center of the scene and looking at the center of the scene."]));
    _.addHeader(4, "Entity");
    _.addPar(JSArrayOfString().of(["One or more Entities can be added to the EntityPass. An `Entity` can have ", "one or more other Entities added to it too. An Entity describes a shape or group ", "of shapes that should be rendered in the scene."]));
    _.addPar(JSArrayOfString().of(["In this tutorial we only add one which is what draws the cube to the scene. ", "To make it draw a cube we set the shape of the Entity to a cube. The shape ", "can be set to many other built-in shapes, such as sphere, torois, and knot. ", "The shape can be loaded from a file or created mathmatically or procedually."]));
    _.addPar(JSArrayOfString().of(["To make the Entity rotate a `Mover` is attached to it. For this tutorial ", "we used the default `Rotater` to cause it to rotate. Movers can be grouped ", "to multiply matrices togrether thus compounding the movements."]));
    _.addPar(JSArrayOfString().of(["The `Technique` attached to the Entity defines how the shape should be ", "drawn. In this tutorial we used a very simple technique, `Depth`. Depth ", "simply draws the shape with two different colors based on distance from the ", "camera. If the background, front target clear color, it the same as the ", "far color, it can give the appearence of fog or merky water."]));
    _.addHeader(4, "Summary");
    _.addPar(JSArrayOfString().of(["Play around with the Rotater, Shape, and Depth to get a feel for " + "how the parts works. The main take away from this tutorial should be ", "how to structure a basic render. A render is one or more pass which draws ", "entities. The pass has a camera and target. Entities can contain several ", "entities and can draw a shape. An entity can be moved with a Mover and ", "rendered with a given technique."]));
    _.addPar(JSArrayOfString().of(["In the next tutorial we will setup a material light technique ", "and dive into creating more interesting scenes."]));
    let obj = new src__Core__Core.Entity.new();
    obj.shape = src__Shapes__Shapes.cube();
    obj.mover = new src__Movers__Movers.Rotater.new();
    obj.technique = new src__Techniques__Techniques.Depth.new({fogStart: 3.0, fogStop: 6.0});
    let pass = new src__Scenes__Scenes.EntityPass.new();
    pass.children.add(obj);
    pass.camera.mover = src__Movers__Movers.Constant.translate(0.0, 0.0, 5.0);
    src__Core__Core.ThreeDart.fromId("tutorial1").scene = pass;
  };
  dart.trackLibraries("web/tutorials/tutorial1/main.ddc", {
    "tutorials\\tutorial1\\main.dart": tutorials__tutorial1__main
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;AAQE,gBAAI,4BAAgB,CAAC;aACV,sBAAC,qEACR,6EACA,2EACA,iGACA,8FACA,2FACA,8EACA;gBACU;gBACA,GAAG;aACN,sBAAC,4EACR,+EACA;cACQ,cAAc,QAAQ,GAAG,sBACjC,mBACA,UACA,YACA,gCACA,kFACA,gCACA,aACA,YACA,uEACA,oDACA,aACA;cACQ,aAAa,QAAQ,GAAG,sBAChC,+BACA,IACA,2DACA,qDACA,qDACA,6DACA,qDACA,IACA,iBACA,mDACA,+BACA,sCACA,wEACA,IACA,sDACA,2BACA,sEACA,IACA,mDACA,uBACA;gBACU,GAAG;aACN,sBAAC,0BACR,gFACA,2FACA,4FACA;gBACU,GAAG;aACN,sBAAC,sEACR,0EACA,6EACA;aACO,sBAAC,gFACR,mFACA;aACO,sBAAC,sEACR,qFACA;gBACU,GAAG;aACN,sBAAC,8EACR,qFACA;aACO,sBAAC,gFACR,+EACA,gFACA;aACO,sBAAC,6EACR,+EACA;aACO,sBAAC,2EACR,4EACA,gFACA,4EACA;gBACU,GAAG;aACN,sBAAC,sEACR,yEACA,8EACA,6EACA,2EACA;aACO,sBAAC,kEACR;AAEJ,QAAiB,MAAM,IAAI,0BAAgB;IAA1B,YACL,AAAO,wBAAI;IADN,YAEL,IAAI,+BAAc;IAFb,gBAGD,IAAI,qCAAgB,YAAW,cAAc;AAE7D,QAAkB,OAAO,IAAI,kCAAiB;IAA5B,kBACD,GAAG;IADF,oBAEC,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAE3D,IAAI,gCAA0B,CAAC,qBACnB,IAAI;EAClB","file":"main.ddc.js"}');
  // Exports:
  return {
    tutorials__tutorial1__main: tutorials__tutorial1__main
  };
});

//# sourceMappingURL=main.ddc.js.map
