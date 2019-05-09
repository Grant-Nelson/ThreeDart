define(['dart_sdk', 'web/common/checkGroup'], function(dart_sdk, checkGroup) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const _root = Object.create(null);
  const main = Object.create(_root);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  main.main = function() {
    let _ = new common__common.ShellPage.new("3Dart", false);
    _.addImage("3Dart", "resources/ThreeDart.png");
    _.addPar(JSArrayOfString().of(["Currently 3Dart is still in beta."]));
    _.addPar(JSArrayOfString().of(["Please visit the [3Dart GitHub repository|https://github.com/Grant-Nelson/ThreeDart] ", "were you can download and play with 3Dart right now. Please feel free to help ", "develop and contribute to the 3Dart code and community."]));
    _.addHeader(2, "Examples");
    _.addPar(JSArrayOfString().of(["[3Dart Craft|./examples/craft/]"]));
    _.addPar(JSArrayOfString().of(["[3Dart Chess|./examples/chess/]"]));
    _.addPar(JSArrayOfString().of(["[Hypersphere|./examples/hypersphere/]"]));
    _.addHeader(2, "Tutorials");
    _.addPar(JSArrayOfString().of(["[Getting Started|./tutorials/tutorial1/]"]));
    _.addHeader(6, "Tutorials still need to be written", "");
    _.addPar(JSArrayOfString().of(["Material Lighting"]));
    _.addPar(JSArrayOfString().of(["Advanced Movers"]));
    _.addPar(JSArrayOfString().of(["Advanced Shapes"]));
    _.addPar(JSArrayOfString().of(["Advanced Techniques"]));
    _.addPar(JSArrayOfString().of(["Scene Compositing"]));
    _.addHeader(2, "Tests");
    _.addPar(JSArrayOfString().of(["[Tests|./tests/]"]));
  };
  dart.trackLibraries("web/main.ddc", {
    "main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;AAKE,gBAAI,4BAAgB,CAAC,SAAS;eACjB,SAAS;aACX,sBAAC;aACD,sBAAC,yFACR,kFACA;gBACU,GAAG;aACN,sBAAC;aACD,sBAAC;aACD,sBAAC;gBACE,GAAG;aACN,sBAAC;gBACE,GAAG,sCAAsC;aAC5C,sBAAC;aACD,sBAAC;aACD,sBAAC;aACD,sBAAC;aACD,sBAAC;gBACE,GAAG;aACN,sBAAC;EACd","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
