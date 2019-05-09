define(['dart_sdk', 'web/common/checkGroup'], function(dart_sdk, checkGroup) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const _root = Object.create(null);
  const tests__test = Object.create(_root);
  const $padLeft = dartx.padLeft;
  const $add = dartx.add;
  const $children = dartx.children;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  tests__test.main = function() {
    let elem = html.DivElement.new();
    for (let i = 0; i <= 40; i++)
      tests__test.addTest(elem, "test" + dart.str(i)[$padLeft](3, "0"));
    let _ = new common__common.ShellPage.new("3Dart Tests");
    _.addElem(elem);
    _.addPar(JSArrayOfString().of(["«[Back to Home|../]"]));
  };
  tests__test.addTest = function(elem, testName) {
    let img = html.ImageElement.new();
    img.alt = dart.str(testName);
    img.src = "./" + dart.str(testName) + "/test.png";
    let a = html.AnchorElement.new();
    a.href = "./" + dart.str(testName) + "/";
    a[$children][$add](img);
    let innerBox = html.DivElement.new();
    innerBox.className = "test-link";
    innerBox[$children][$add](a);
    let outterBox = html.DivElement.new();
    outterBox.className = "test-box";
    outterBox[$children][$add](innerBox);
    elem[$children][$add](outterBox);
  };
  dart.trackLibraries("web/tests/test.ddc", {
    "tests\\test.dart": tests__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;AAOE,QAAgB,OAAO,AAAI,mBAAe;AAG1C,aAAS,IAAI,GAAG,AAAE,CAAD,IAAI,IAAI,CAAC;AACxB,yBAAO,CAAC,IAAI,EAAE,AAAM,SAAC,SAAE,CAAC,WAAS,CAAC,GAAG;AAEvC,gBAAI,4BAAgB,CAAC;cACT,IAAI;aACL,sBAAC;EACd;iCAEa,IAAiB,EAAE,QAAe;AAC7C,QAAkB,MAAM,AAAI,qBAAiB;IAA3B,UACR,SAAE,QAAQ;IADF,UAER,gBAAI,QAAQ;AAEtB,QAAmB,IAAI,AAAI,sBAAkB;IAA1B,SACR,gBAAI,QAAQ;IADJ,mBAEF,GAAG;AAEpB,QAAgB,WAAW,AAAI,mBAAe;IAA9B,qBACA;IADA,0BAEC,CAAC;AAElB,QAAgB,YAAY,AAAI,mBAAe;IAA/B,sBACA;IADA,2BAEC,QAAQ;AAEzB,QAAI,WAAS,MAAI,CAAC,SAAS;EAC7B","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test: tests__test
  };
});

//# sourceMappingURL=test.ddc.js.map
