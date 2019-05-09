define(['dart_sdk', 'packages/ThreeDart/Tokenizer', 'packages/ThreeDart/src/Core/Bindable'], function(dart_sdk, Tokenizer, Bindable) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__Tokenizer__Tokenizer = Tokenizer.src__Tokenizer__Tokenizer;
  const src__Core__Core = Bindable.src__Core__Core;
  const _root = Object.create(null);
  const common__common = Object.create(_root);
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $whiteSpace = dartx.whiteSpace;
  const $add = dartx.add;
  const $children = dartx.children;
  const $checked = dartx.checked;
  const $onChange = dartx.onChange;
  const $text = dartx.text;
  const $padRight = dartx.padRight;
  const $substring = dartx.substring;
  const $_set = dartx._set;
  const $replaceState = dartx.replaceState;
  const $replaceAll = dartx.replaceAll;
  const $isEmpty = dartx.isEmpty;
  const $split = dartx.split;
  const $innerHtml = dartx.innerHtml;
  const $color = dartx.color;
  const $last = dartx.last;
  const $join = dartx.join;
  const $name = dartx.name;
  const $append = dartx.append;
  const $isNotEmpty = dartx.isNotEmpty;
  const $title = dartx.title;
  const $scrollTop = dartx.scrollTop;
  const $top = dartx.top;
  const $onScroll = dartx.onScroll;
  const $clamp = dartx.clamp;
  const $fontSize = dartx.fontSize;
  const $contains = dartx.contains;
  const $firstWhere = dartx.firstWhere;
  const $startsWith = dartx.startsWith;
  const $display = dartx.display;
  const $clear = dartx.clear;
  const $width = dartx.width;
  const $padding = dartx.padding;
  const $marginLeft = dartx.marginLeft;
  const $marginRight = dartx.marginRight;
  const $addRow = dartx.addRow;
  const $addCell = dartx.addCell;
  const $textAlign = dartx.textAlign;
  const $verticalAlign = dartx.verticalAlign;
  const $border = dartx.border;
  const $forEach = dartx.forEach;
  const $onClick = dartx.onClick;
  let TimerToNull = () => (TimerToNull = dart.constFn(dart.fnType(core.Null, [async.Timer])))();
  let JSArrayOfCheckboxInputElement = () => (JSArrayOfCheckboxInputElement = dart.constFn(_interceptors.JSArray$(html.CheckboxInputElement)))();
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let ListOfCheckboxInputElement = () => (ListOfCheckboxInputElement = dart.constFn(core.List$(html.CheckboxInputElement)))();
  let ListOfDivElement = () => (ListOfDivElement = dart.constFn(core.List$(html.DivElement)))();
  let JSArrayOfListOfDivElement = () => (JSArrayOfListOfDivElement = dart.constFn(_interceptors.JSArray$(ListOfDivElement())))();
  let JSArrayOfDivElement = () => (JSArrayOfDivElement = dart.constFn(_interceptors.JSArray$(html.DivElement)))();
  let ListOfListOfDivElement = () => (ListOfListOfDivElement = dart.constFn(core.List$(ListOfDivElement())))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfCodeParser = () => (JSArrayOfCodeParser = dart.constFn(_interceptors.JSArray$(common__common.CodeParser)))();
  let CodeParserTobool = () => (CodeParserTobool = dart.constFn(dart.fnType(core.bool, [common__common.CodeParser])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let ElementToNull = () => (ElementToNull = dart.constFn(dart.fnType(core.Null, [html.Element])))();
  let MouseEventToNull = () => (MouseEventToNull = dart.constFn(dart.fnType(core.Null, [html.MouseEvent])))();
  let StringTovoid = () => (StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))();
  let const$;
  common__common.showFPS = function(td) {
    async.Timer.periodic(const$ || (const$ = dart.const(new core.Duration.new({milliseconds: 5000}))), dart.fn(time => {
      let fps = td.fps[$toStringAsFixed](2);
      core.print(fps + " fps");
    }, TimerToNull()));
  };
  const _elemId = Symbol('_elemId');
  const _keepInURL = Symbol('_keepInURL');
  const _elem = Symbol('_elem');
  const _checks = Symbol('_checks');
  const _updateUrl = Symbol('_updateUrl');
  common__common.CheckGroup = class CheckGroup extends core.Object {
    add(text, hndl, checkedByDefault) {
      if (checkedByDefault === void 0) checkedByDefault = false;
      if (this[_elem] == null) return;
      let urlNeedsUpdate = false;
      let index = this[_checks][$length];
      let selectedItems = core.Uri.base.queryParameters[$_get](this[_elemId]);
      let itemIsChecked = null;
      if (selectedItems == null || selectedItems.length <= dart.notNull(index)) {
        itemIsChecked = checkedByDefault;
        urlNeedsUpdate = true;
      } else {
        itemIsChecked = selectedItems[$_get](index) === "1";
      }
      hndl(itemIsChecked);
      let label = html.LabelElement.new();
      label.style[$whiteSpace] = "nowrap";
      this[_elem][$children][$add](label);
      let checkBox = html.CheckboxInputElement.new();
      checkBox[$checked] = itemIsChecked;
      checkBox[$onChange].listen(dart.fn(_ => {
        hndl(checkBox[$checked]);
        this[_updateUrl](index, checkBox[$checked]);
      }, EventToNull()));
      label[$children][$add](checkBox);
      let span = html.SpanElement.new();
      span[$text] = text;
      label[$children][$add](span);
      this[_elem][$children][$add](html.BRElement.new());
      this[_checks][$add](checkBox);
      if (urlNeedsUpdate) this[_updateUrl](index, itemIsChecked);
    }
    [_updateUrl](index, checked) {
      if (!dart.test(this[_keepInURL])) return;
      let l = core.Uri.base.queryParameters[$_get](this[_elemId]);
      let selectedItems = l != null ? l : "";
      if (selectedItems.length < dart.notNull(index)) selectedItems = selectedItems[$padRight](dart.notNull(index) - selectedItems.length + 1, "0");
      let result = "";
      if (dart.notNull(index) > 0) {
        result = result + selectedItems[$substring](0, index);
      }
      result = result + (dart.test(checked) ? "1" : "0");
      if (dart.notNull(index) + 1 < selectedItems.length) {
        result = result + selectedItems[$substring](dart.notNull(index) + 1);
      }
      let current = core.Uri.base;
      let parameters = MapOfString$String().from(current.queryParameters);
      parameters[$_set](this[_elemId], result);
      let newUrl = current.replace({queryParameters: parameters});
      html.window.history[$replaceState]("", "", dart.toString(newUrl));
    }
  };
  (common__common.CheckGroup.new = function(elemId, keepInURL) {
    if (keepInURL === void 0) keepInURL = true;
    this[_elem] = null;
    this[_checks] = null;
    this[_elemId] = elemId;
    this[_keepInURL] = keepInURL;
    this[_elem] = html.document.getElementById(this[_elemId]);
    if (this[_elem] == null) {
      dart.throw("Failed to find " + dart.str(this[_elemId]) + " for CheckGroup");
    }
    this[_checks] = JSArrayOfCheckboxInputElement().of([]);
  }).prototype = common__common.CheckGroup.prototype;
  dart.addTypeTests(common__common.CheckGroup);
  dart.setMethodSignature(common__common.CheckGroup, () => ({
    __proto__: dart.getMethods(common__common.CheckGroup.__proto__),
    add: dart.fnType(dart.void, [core.String, dart.fnType(dart.void, [core.bool])], [core.bool]),
    [_updateUrl]: dart.fnType(dart.void, [core.int, core.bool])
  }));
  dart.setFieldSignature(common__common.CheckGroup, () => ({
    __proto__: dart.getFields(common__common.CheckGroup.__proto__),
    [_elemId]: dart.fieldType(core.String),
    [_keepInURL]: dart.fieldType(core.bool),
    [_elem]: dart.fieldType(html.Element),
    [_checks]: dart.fieldType(ListOfCheckboxInputElement())
  }));
  const _name = Symbol('_name');
  const _escape = Symbol('_escape');
  const _tokenizer = Symbol('_tokenizer');
  const _lineList = Symbol('_lineList');
  const _escapeText = Symbol('_escapeText');
  common__common.CodeParser = class CodeParser extends core.Object {
    get name() {
      return this[_name];
    }
    get lineList() {
      return this[_lineList];
    }
    [_escapeText](text) {
      return this[_escape].convert(text)[$replaceAll](" ", "&nbsp;");
    }
    addLineParts(code, color) {
      if (dart.test(this[_lineList][$isEmpty])) this[_lineList][$add](JSArrayOfDivElement().of([]));
      let lines = code[$split]("\n");
      let first = true;
      for (let line of lines) {
        if (first)
          first = false;
        else
          this[_lineList][$add](JSArrayOfDivElement().of([]));
        let partElem = html.DivElement.new();
        partElem.className = "codePart";
        partElem[$innerHtml] = this[_escapeText](line);
        partElem.style[$color] = color;
        this[_lineList][$last][$add](partElem);
      }
    }
    parse(lines) {
      this[_lineList] = JSArrayOfListOfDivElement().of([]);
      let code = lines[$join]("\n");
      let t = this[_tokenizer];
      t == null ? this[_tokenizer] = this.createTokenizer() : t;
      for (let token of this[_tokenizer].tokenize(code)) {
        this.processToken(token);
      }
    }
  };
  (common__common.CodeParser.__ = function(name) {
    this[_escape] = null;
    this[_tokenizer] = null;
    this[_lineList] = null;
    this[_name] = name;
    this[_escape] = new convert.HtmlEscape.new(convert.HtmlEscapeMode.element);
    this[_tokenizer] = null;
    this[_lineList] = JSArrayOfListOfDivElement().of([]);
  }).prototype = common__common.CodeParser.prototype;
  dart.addTypeTests(common__common.CodeParser);
  dart.setMethodSignature(common__common.CodeParser, () => ({
    __proto__: dart.getMethods(common__common.CodeParser.__proto__),
    [_escapeText]: dart.fnType(core.String, [core.String]),
    addLineParts: dart.fnType(dart.void, [core.String, core.String]),
    parse: dart.fnType(dart.void, [core.List$(core.String)])
  }));
  dart.setGetterSignature(common__common.CodeParser, () => ({
    __proto__: dart.getGetters(common__common.CodeParser.__proto__),
    name: core.String,
    lineList: core.List$(core.List$(html.DivElement))
  }));
  dart.setFieldSignature(common__common.CodeParser, () => ({
    __proto__: dart.getFields(common__common.CodeParser.__proto__),
    [_name]: dart.fieldType(core.String),
    [_escape]: dart.fieldType(convert.HtmlEscape),
    [_tokenizer]: dart.fieldType(src__Tokenizer__Tokenizer.Tokenizer),
    [_lineList]: dart.fieldType(ListOfListOfDivElement())
  }));
  common__common.DartParser = class DartParser extends common__common.CodeParser {
    processToken(token) {
      switch (token.name) {
        case "Class":
        {
          this.addLineParts(token.text, "#551");
          break;
        }
        case "Comment":
        {
          this.addLineParts(token.text, "#777");
          break;
        }
        case "Id":
        {
          this.addLineParts(token.text, "#111");
          break;
        }
        case "Num":
        {
          this.addLineParts(token.text, "#191");
          break;
        }
        case "Reserved":
        {
          this.addLineParts(token.text, "#119");
          break;
        }
        case "String":
        {
          this.addLineParts(token.text, "#171");
          break;
        }
        case "Symbol":
        {
          this.addLineParts(token.text, "#616");
          break;
        }
        case "Type":
        {
          this.addLineParts(token.text, "#B11");
          break;
        }
        case "Whitespace":
        {
          this.addLineParts(token.text, "#111");
          break;
        }
      }
    }
    createTokenizer() {
      let tok = new src__Tokenizer__Tokenizer.Tokenizer.new();
      tok.start("Start");
      let _ = tok.join("Start", "Id");
      _.addSet("_");
      _.addRange("a", "z");
      _.addRange("A", "Z");
      let _$ = tok.join("Id", "Id");
      _$.addSet("_");
      _$.addRange("0", "9");
      _$.addRange("a", "z");
      _$.addRange("A", "Z");
      tok.join("Start", "Int").addRange("0", "9");
      tok.join("Int", "Int").addRange("0", "9");
      tok.join("Int", "FloatDot").addSet(".");
      tok.join("FloatDot", "Float").addRange("0", "9");
      tok.join("Float", "Float").addRange("0", "9");
      tok.join("Start", "Sym").addSet("<>{}()\\-+*%!&|=.,?:;");
      tok.join("Sym", "Sym").addSet("<>{}()\\-+*%!&|=.,?:;");
      tok.join("Start", "OpenDoubleStr").addSet("\"");
      tok.join("OpenDoubleStr", "CloseDoubleStr").addSet("\"");
      tok.join("OpenDoubleStr", "EscDoubleStr").addSet("\\");
      tok.join("EscDoubleStr", "OpenDoubleStr").addSet("\"");
      tok.join("OpenDoubleStr", "OpenDoubleStr").addAll();
      tok.join("Start", "OpenSingleStr").addSet("'");
      tok.join("OpenSingleStr", "CloseSingleStr").addSet("'");
      tok.join("OpenSingleStr", "EscSingleStr").addSet("\\");
      tok.join("EscSingleStr", "OpenSingleStr").addSet("'");
      tok.join("OpenSingleStr", "OpenSingleStr").addAll();
      tok.join("Start", "Slash").addSet("/");
      tok.join("Slash", "Comment").addSet("/");
      tok.join("Comment", "EndComment").addSet("\n");
      tok.join("Comment", "Comment").addNot().addSet("\n");
      tok.join("Slash", "MLComment").addSet("*");
      tok.join("MLComment", "MLCStar").addSet("*");
      tok.join("MLCStar", "MLComment").addNot().addSet("*");
      tok.join("MLCStar", "EndComment").addSet("/");
      tok.join("Start", "Whitespace").addSet(" \n\t");
      tok.join("Whitespace", "Whitespace").addSet(" \n\t");
      tok.setToken("Int", "Num");
      tok.setToken("Float", "Num");
      tok.setToken("Sym", "Symbol");
      tok.setToken("CloseDoubleStr", "String");
      tok.setToken("CloseSingleStr", "String");
      tok.setToken("EndComment", "Comment");
      tok.setToken("Whitespace", "Whitespace");
      let _$0 = tok.setToken("Id", "Id");
      _$0.replace("Class", JSArrayOfString().of(["Constant", "Depth", "Entity", "EntityPass", "Math", "Matrix4", "Movers", "Rotater", "Scenes", "Shapes", "Techniques", "ThreeDart"]));
      _$0.replace("Type", JSArrayOfString().of(["bool", "double", "dynamic", "false", "int", "List", "Map", "null", "num", "Object", "String", "this", "true", "var", "void"]));
      _$0.replace("Reserved", JSArrayOfString().of(["abstract", "as", "assert", "async", "await", "break", "case", "catch", "class", "continue", "const", "default", "deferred", "do", "else", "enum", "export", "extends", "external", "factory", "final", "finally", "for", "get", "if", "implements", "import", "in", "is", "library", "new", "operator", "part", "rethrow", "return", "set", "static", "super", "switch", "sync", "throw", "try", "typedef", "with", "while", "yield"]));
      return tok;
    }
  };
  (common__common.DartParser.new = function() {
    common__common.DartParser.__proto__.__.call(this, "dart");
  }).prototype = common__common.DartParser.prototype;
  dart.addTypeTests(common__common.DartParser);
  dart.setMethodSignature(common__common.DartParser, () => ({
    __proto__: dart.getMethods(common__common.DartParser.__proto__),
    processToken: dart.fnType(dart.void, [src__Tokenizer__Tokenizer.Token]),
    createTokenizer: dart.fnType(src__Tokenizer__Tokenizer.Tokenizer, [])
  }));
  common__common.GLSLParser = class GLSLParser extends common__common.CodeParser {
    processToken(token) {
      switch (token.name) {
        case "Builtin":
        {
          this.addLineParts(token.text, "#411");
          break;
        }
        case "Comment":
        {
          this.addLineParts(token.text, "#777");
          break;
        }
        case "Id":
        {
          this.addLineParts(token.text, "#111");
          break;
        }
        case "Num":
        {
          this.addLineParts(token.text, "#191");
          break;
        }
        case "Preprocess":
        {
          this.addLineParts(token.text, "#737");
          break;
        }
        case "Reserved":
        {
          this.addLineParts(token.text, "#119");
          break;
        }
        case "Symbol":
        {
          this.addLineParts(token.text, "#611");
          break;
        }
        case "Type":
        {
          this.addLineParts(token.text, "#171");
          break;
        }
        case "Whitespace":
        {
          this.addLineParts(token.text, "#111");
          break;
        }
      }
    }
    createTokenizer() {
      let tok = new src__Tokenizer__Tokenizer.Tokenizer.new();
      tok.start("Start");
      let _ = tok.join("Start", "Id");
      _.addSet("_");
      _.addRange("a", "z");
      _.addRange("A", "Z");
      let _$ = tok.join("Id", "Id");
      _$.addSet("_");
      _$.addRange("0", "9");
      _$.addRange("a", "z");
      _$.addRange("A", "Z");
      tok.join("Start", "Int").addRange("0", "9");
      tok.join("Int", "Int").addRange("0", "9");
      tok.join("Int", "FloatDot").addSet(".");
      tok.join("FloatDot", "Float").addRange("0", "9");
      tok.join("Float", "Float").addRange("0", "9");
      tok.join("Start", "Sym").addSet("<>{}()[]\\-+*%!&|=.,?:;");
      tok.join("Sym", "Sym").addSet("<>{}()[]\\-+*%!&|=.,?:;");
      tok.join("Start", "Slash").addSet("/");
      tok.join("Slash", "Comment").addSet("/");
      tok.join("Slash", "Sym").addAll();
      tok.join("Comment", "EndComment").addSet("\n");
      tok.join("Comment", "Comment").addNot().addSet("\n");
      tok.join("Start", "Preprocess").addSet("#");
      tok.join("Preprocess", "Preprocess").addNot().addSet("\n");
      tok.join("Preprocess", "EndPreprocess").addSet("\n");
      tok.join("Start", "Whitespace").addSet(" \n\t");
      tok.join("Whitespace", "Whitespace").addSet(" \n\t");
      tok.setToken("Int", "Num");
      tok.setToken("Float", "Num");
      tok.setToken("Sym", "Symbol");
      tok.setToken("EndComment", "Comment");
      tok.setToken("EndPreprocess", "Preprocess");
      tok.setToken("Whitespace", "Whitespace");
      let _$0 = tok.setToken("Id", "Id");
      _$0.replace("Type", JSArrayOfString().of(["float", "double", "int", "void", "bool", "true", "false", "mat2", "mat3", "mat4", "dmat2", "dmat3", "dmat4", "mat2x2", "mat2x3", "mat2x4", "dmat2x2", "dmat2x3", "dmat2x4", "mat3x2", "mat3x3", "mat3x4", "dmat3x2", "dmat3x3", "dmat3x4", "mat4x2", "mat4x3", "mat4x4", "dmat4x2", "dmat4x3", "dmat4x4", "vec2", "vec3", "vec4", "ivec2", "ivec3", "ivec4", "bvec2", "bvec3", "bvec4", "dvec2", "dvec3", "dvec4", "uint", "uvec2", "uvec3", "uvec4", "sampler1D", "sampler2D", "sampler3D", "samplerCube", "sampler1DShadow", "sampler2DShadow", "samplerCubeShadow", "sampler1DArray", "sampler2DArray", "sampler1DArrayShadow", "sampler2DArrayShadow", "isampler1D", "isampler2D", "isampler3D", "isamplerCube", "isampler1DArray", "isampler2DArray", "usampler1D", "usampler2D", "usampler3D", "usamplerCube", "usampler1DArray", "usampler2DArray", "sampler2DRect", "sampler2DRectShadow", "isampler2DRect", "usampler2DRect", "samplerBuffer", "isamplerBuffer", "usamplerBuffer", "sampler2DMS", "isampler2DMS", "usampler2DMS", "sampler2DMSArray", "isampler2DMSArray", "usampler2DMSArray", "samplerCubeArray", "samplerCubeArrayShadow", "isamplerCubeArray", "usamplerCubeArray"]));
      _$0.replace("Reserved", JSArrayOfString().of(["attribute", "break", "case", "centroid", "const", "continue", "default", "discard", "do", "else", "flat", "for", "highp", "if", "in", "inout", "invariant", "layout", "lowp", "mediump", "noperspective", "out", "patch", "precision", "return", "sample", "smooth", "struct", "subroutine", "switch", "uniform", "varying", "while"]));
      _$0.replace("Builtin", JSArrayOfString().of(["gl_FragColor", "gl_Position"]));
      return tok;
    }
  };
  (common__common.GLSLParser.new = function() {
    common__common.GLSLParser.__proto__.__.call(this, "glsl");
  }).prototype = common__common.GLSLParser.prototype;
  dart.addTypeTests(common__common.GLSLParser);
  dart.setMethodSignature(common__common.GLSLParser, () => ({
    __proto__: dart.getMethods(common__common.GLSLParser.__proto__),
    processToken: dart.fnType(dart.void, [src__Tokenizer__Tokenizer.Token]),
    createTokenizer: dart.fnType(src__Tokenizer__Tokenizer.Tokenizer, [])
  }));
  common__common.HTMLParser = class HTMLParser extends common__common.CodeParser {
    processToken(token) {
      switch (token.name) {
        case "Attr":
        {
          this.addLineParts(token.text, "#911");
          this.addLineParts("=", "#111");
          break;
        }
        case "Id":
        {
          this.addLineParts(token.text, "#111");
          break;
        }
        case "Other":
        {
          this.addLineParts(token.text, "#111");
          break;
        }
        case "Reserved":
        {
          this.addLineParts(token.text, "#119");
          break;
        }
        case "String":
        {
          this.addLineParts(token.text, "#171");
          break;
        }
        case "Symbol":
        {
          this.addLineParts(token.text, "#616");
          break;
        }
      }
    }
    createTokenizer() {
      let tok = new src__Tokenizer__Tokenizer.Tokenizer.new();
      tok.start("Start");
      let _ = tok.join("Start", "Id");
      _.addSet("_");
      _.addRange("a", "z");
      _.addRange("A", "Z");
      let _$ = tok.join("Id", "Id");
      _$.addSet("_");
      _$.addRange("0", "9");
      _$.addRange("a", "z");
      _$.addRange("A", "Z");
      let _$0 = tok.join("Id", "Attr");
      _$0.addSet("=");
      _$0.consume = true;
      tok.join("Start", "Sym").addSet("</\\-!>=");
      tok.join("Sym", "Sym").addSet("</\\-!>=");
      tok.join("Start", "OpenStr").addSet("\"");
      tok.join("OpenStr", "CloseStr").addSet("\"");
      tok.join("OpenStr", "EscStr").addSet("\\");
      tok.join("EscStr", "OpenStr").addSet("\"");
      tok.join("OpenStr", "OpenStr").addAll();
      tok.join("Start", "Other").addAll();
      let _$1 = tok.join("Other", "Other").addNot();
      _$1.addSet("</\\-!>=_\"");
      _$1.addRange("a", "z");
      _$1.addRange("A", "Z");
      tok.setToken("Sym", "Symbol");
      tok.setToken("CloseStr", "String");
      tok.setToken("Id", "Id").replace("Reserved", JSArrayOfString().of(["DOCTYPE", "html", "head", "meta", "link", "title", "body", "script"]));
      tok.setToken("Attr", "Attr");
      tok.setToken("Other", "Other");
      return tok;
    }
  };
  (common__common.HTMLParser.new = function() {
    common__common.HTMLParser.__proto__.__.call(this, "html");
  }).prototype = common__common.HTMLParser.prototype;
  dart.addTypeTests(common__common.HTMLParser);
  dart.setMethodSignature(common__common.HTMLParser, () => ({
    __proto__: dart.getMethods(common__common.HTMLParser.__proto__),
    processToken: dart.fnType(dart.void, [src__Tokenizer__Tokenizer.Token]),
    createTokenizer: dart.fnType(src__Tokenizer__Tokenizer.Tokenizer, [])
  }));
  common__common.PlainParser = class PlainParser extends common__common.CodeParser {
    parse(lines) {
      this[_lineList] = JSArrayOfListOfDivElement().of([]);
      let code = lines[$join]("\n");
      this.addLineParts(code, "#111");
    }
    processToken(token) {}
    createTokenizer() {
      return null;
    }
  };
  (common__common.PlainParser.new = function() {
    common__common.PlainParser.__proto__.__.call(this, "plain");
  }).prototype = common__common.PlainParser.prototype;
  dart.addTypeTests(common__common.PlainParser);
  dart.setMethodSignature(common__common.PlainParser, () => ({
    __proto__: dart.getMethods(common__common.PlainParser.__proto__),
    processToken: dart.fnType(dart.void, [src__Tokenizer__Tokenizer.Token]),
    createTokenizer: dart.fnType(src__Tokenizer__Tokenizer.Tokenizer, [])
  }));
  common__common.RadioGroup = class RadioGroup extends core.Object {
    add(text, hndl, selectedByDefault) {
      if (selectedByDefault === void 0) selectedByDefault = false;
      if (this[_elem] == null) return;
      let itemIsChecked = false;
      let selectedItem = core.Uri.base.queryParameters[$_get](dart.str(this[_elemId]));
      if (selectedItem == null) {
        if (dart.test(selectedByDefault)) {
          itemIsChecked = true;
          hndl();
          this[_updateUrl](text);
        }
      } else if (selectedItem == text) {
        itemIsChecked = true;
        hndl();
      }
      let label = html.LabelElement.new();
      label.style[$whiteSpace] = "nowrap";
      this[_elem][$children][$add](label);
      let checkBox = html.RadioButtonInputElement.new();
      checkBox[$checked] = itemIsChecked;
      checkBox[$name] = this[_elemId];
      checkBox[$onChange].listen(dart.fn(_ => {
        if (dart.test(checkBox[$checked])) {
          hndl();
          this[_updateUrl](text);
        }
      }, EventToNull()));
      label[$children][$add](checkBox);
      let span = html.SpanElement.new();
      span[$text] = text;
      label[$children][$add](span);
      this[_elem][$children][$add](html.BRElement.new());
    }
    [_updateUrl](text) {
      if (!dart.test(this[_keepInURL])) return;
      let current = core.Uri.base;
      let parameters = MapOfString$String().from(current.queryParameters);
      parameters[$_set](this[_elemId], text);
      let newUrl = current.replace({queryParameters: parameters});
      html.window.history[$replaceState]("", "", dart.toString(newUrl));
    }
  };
  (common__common.RadioGroup.new = function(elemId, keepInURL) {
    if (keepInURL === void 0) keepInURL = true;
    this[_elem] = null;
    this[_elemId] = elemId;
    this[_keepInURL] = keepInURL;
    this[_elem] = html.document.getElementById(this[_elemId]);
    if (this[_elem] == null) {
      dart.throw("Failed to find " + dart.str(this[_elemId]) + " for RadioGroup");
    }
  }).prototype = common__common.RadioGroup.prototype;
  dart.addTypeTests(common__common.RadioGroup);
  dart.setMethodSignature(common__common.RadioGroup, () => ({
    __proto__: dart.getMethods(common__common.RadioGroup.__proto__),
    add: dart.fnType(dart.void, [core.String, dart.fnType(dart.void, [])], [core.bool]),
    [_updateUrl]: dart.fnType(dart.void, [core.String])
  }));
  dart.setFieldSignature(common__common.RadioGroup, () => ({
    __proto__: dart.getFields(common__common.RadioGroup.__proto__),
    [_elemId]: dart.fieldType(core.String),
    [_keepInURL]: dart.fieldType(core.bool),
    [_elem]: dart.fieldType(html.Element)
  }));
  const _page = Symbol('_page');
  const _parTokenizer = Symbol('_parTokenizer');
  const _setupParTokenizer = Symbol('_setupParTokenizer');
  let const$0;
  common__common.ShellPage = class ShellPage extends core.Object {
    get page() {
      return this[_page];
    }
    addHeader(level, text, id) {
      if (id === void 0) id = "";
      level = dart.asInt(level[$clamp](0, 4));
      if (id[$isEmpty]) id = core.Uri.encodeFull(text);
      let textHeaderElem = html.DivElement.new();
      textHeaderElem.className = "textHeader";
      textHeaderElem.id = id;
      textHeaderElem.style[$fontSize] = dart.str(28 - dart.notNull(level) * 3) + "px";
      let anchor = html.AnchorElement.new();
      anchor.href = "#" + dart.str(id);
      anchor[$text] = text;
      textHeaderElem[$append](anchor);
      this[_page][$append](textHeaderElem);
    }
    addDiv(id, className) {
      if (className === void 0) className = "codePar";
      let div = html.DivElement.new();
      div.className = className;
      div.id = id;
      this[_page][$append](div);
    }
    addPar(text) {
      this[_setupParTokenizer]();
      let parElem = html.DivElement.new();
      parElem.className = "textPar";
      for (let token of this[_parTokenizer].tokenize(text[$join]())) {
        switch (token.name) {
          case "Bold":
          {
            let textElem = html.DivElement.new();
            textElem.className = "boldPar";
            textElem[$text] = token.text;
            parElem[$append](textElem);
            break;
          }
          case "Italic":
          {
            let textElem = html.DivElement.new();
            textElem.className = "italicPar";
            textElem[$text] = token.text;
            parElem[$append](textElem);
            break;
          }
          case "Code":
          {
            let textElem = html.DivElement.new();
            textElem.className = "codePar";
            textElem[$text] = token.text;
            parElem[$append](textElem);
            break;
          }
          case "Link":
          {
            if (token.text[$contains]("|")) {
              let parts = token.text[$split]("|");
              let anchor = html.AnchorElement.new();
              anchor.className = "linkPar";
              anchor.href = parts[$_get](1);
              anchor[$text] = parts[$_get](0);
              parElem[$append](anchor);
            } else {
              let id = core.Uri.encodeFull(token.text);
              let anchor = html.AnchorElement.new();
              anchor.className = "linkPar";
              anchor.href = "#" + dart.str(id);
              anchor[$text] = token.text;
              parElem[$append](anchor);
            }
            break;
          }
          case "Other":
          {
            let textElem = html.DivElement.new();
            textElem.className = "normalPar";
            textElem[$text] = token.text;
            parElem[$append](textElem);
            break;
          }
        }
      }
      this[_page][$append](parElem);
    }
    getCodeParser(lang) {
      let parsers = JSArrayOfCodeParser().of([new common__common.DartParser.new(), new common__common.GLSLParser.new(), new common__common.HTMLParser.new()]);
      let parser = parsers[$firstWhere](dart.fn(parser => parser.name == lang, CodeParserTobool()));
      if (parser != null) return parser;
      return new common__common.PlainParser.new();
    }
    addCode(title, lang, firstLineNo, lines) {
      let diff = JSArrayOfint().of([]);
      let showDiff = false;
      for (let i = 0; i < dart.notNull(lines[$length]); ++i) {
        let line = lines[$_get](i);
        if (line[$startsWith]("+")) {
          lines[$_set](i, line[$substring](1));
          diff[$add](1);
          showDiff = true;
        } else if (line[$startsWith]("-")) {
          lines[$_set](i, line[$substring](1));
          diff[$add](-1);
          showDiff = true;
        } else
          diff[$add](0);
      }
      let colorCode = this.getCodeParser(lang);
      colorCode.parse(lines);
      let codeTableScroll = html.DivElement.new();
      codeTableScroll.className = "codeTableScroll";
      let codeTable = html.TableElement.new();
      codeTable.className = "codeTable";
      codeTableScroll[$append](codeTable);
      this[_page][$append](codeTableScroll);
      let id = core.Uri.encodeFull(title);
      let headerElem = html.TableRowElement.new();
      headerElem.className = "headerRow";
      let headerCellElem = html.TableCellElement.new();
      headerCellElem.className = "headerCell";
      headerCellElem.colSpan = showDiff ? 3 : 2;
      let tableHeaderElem = html.DivElement.new();
      tableHeaderElem.className = "tableHeader";
      tableHeaderElem.id = id;
      let anchor = html.AnchorElement.new();
      anchor.href = "#" + dart.str(id);
      anchor[$text] = title;
      tableHeaderElem[$append](anchor);
      headerCellElem[$append](tableHeaderElem);
      headerElem[$append](headerCellElem);
      codeTable[$append](headerElem);
      if (showDiff) {
        let lineNoSub = firstLineNo, lineNoAdd = firstLineNo;
        for (let i = 0; i < dart.notNull(colorCode.lineList[$length]); ++i) {
          let line = colorCode.lineList[$_get](i);
          let rowElem = html.TableRowElement.new();
          rowElem.className = "codeTableRow";
          let cell1Elem = html.TableCellElement.new();
          cell1Elem.className = "codeLineNums codeLineLight";
          let cell2Elem = html.TableCellElement.new();
          cell2Elem.className = "codeLineNums";
          let value = diff[$_get](i);
          if (value === 0) {
            lineNoSub = dart.notNull(lineNoSub) + 1;
            lineNoAdd = dart.notNull(lineNoAdd) + 1;
            cell1Elem[$text] = dart.str(lineNoSub);
            cell2Elem[$text] = dart.str(lineNoAdd);
          } else if (dart.notNull(value) > 0) {
            rowElem.className = "codeTableRow codeLineLightGreen";
            cell1Elem.className = "codeLineNums codeLineGreen codeLineCenter";
            cell2Elem.className = "codeLineNums codeLineGreen";
            lineNoAdd = dart.notNull(lineNoAdd) + 1;
            cell1Elem[$text] = "+";
            cell2Elem[$text] = dart.str(lineNoAdd);
          } else if (dart.notNull(value) < 0) {
            rowElem.className = "codeTableRow codeLineLightRed";
            cell1Elem.className = "codeLineNums codeLineRed";
            cell2Elem.className = "codeLineNums codeLineRed codeLineCenter";
            lineNoSub = dart.notNull(lineNoSub) + 1;
            cell1Elem[$text] = dart.str(lineNoSub);
            cell2Elem[$text] = "-";
          }
          let cell3Elem = html.TableCellElement.new();
          cell3Elem.className = "codeLineText";
          for (let partElem of line) {
            cell3Elem[$append](partElem);
          }
          rowElem[$append](cell1Elem);
          rowElem[$append](cell2Elem);
          rowElem[$append](cell3Elem);
          codeTable[$append](rowElem);
        }
      } else {
        let lineNo = firstLineNo;
        for (let line of colorCode.lineList) {
          let rowElem = html.TableRowElement.new();
          rowElem.className = "codeTableRow";
          let cell1Elem = html.TableCellElement.new();
          cell1Elem.className = "codeLineNums";
          cell1Elem[$text] = dart.str(dart.notNull(lineNo) + 1);
          let cell2Elem = html.TableCellElement.new();
          cell2Elem.className = "codeLineText";
          for (let partElem of line) {
            cell2Elem[$append](partElem);
          }
          rowElem[$append](cell1Elem);
          rowElem[$append](cell2Elem);
          codeTable[$append](rowElem);
          lineNo = dart.notNull(lineNo) + 1;
        }
      }
    }
    addImage(id, path) {
      let pageImageElem = html.DivElement.new();
      pageImageElem.className = "pageImage";
      pageImageElem.id = id;
      let anchor = html.AnchorElement.new();
      anchor.href = "#" + dart.str(id);
      let image = html.ImageElement.new();
      image.src = path;
      anchor[$append](image);
      pageImageElem[$append](anchor);
      this[_page][$append](pageImageElem);
    }
    addCanvas(id) {
      let canvas = html.CanvasElement.new();
      canvas.className = "pageCanvas";
      canvas.id = id;
      this[_page][$append](canvas);
    }
    addLargeCanvas(id) {
      let canvas = html.CanvasElement.new();
      canvas.className = "pageLargeCanvas";
      canvas.id = id;
      this[_page][$append](canvas);
    }
    addFPS(td) {
      let textElem = html.DivElement.new();
      textElem[$text] = "0.00 fps";
      textElem.className = "fps";
      this[_page][$append](textElem);
      async.Timer.periodic(const$0 || (const$0 = dart.const(new core.Duration.new({milliseconds: 5000}))), dart.fn(time => {
        let fps = td.fps[$toStringAsFixed](2);
        textElem[$text] = fps + " fps";
      }, TimerToNull()));
    }
    addElem(elem) {
      let elemContainer = html.DivElement.new();
      elemContainer[$append](elem);
      let endPage = html.DivElement.new();
      endPage.style[$display] = "block";
      endPage.style[$clear] = "both";
      elemContainer[$append](endPage);
      this[_page][$append](elemContainer);
    }
    addControlBoxes(ids) {
      let table = html.TableElement.new();
      table.id = "shellTable";
      table.style[$width] = "100%";
      table.style[$padding] = "0px";
      table.style[$marginLeft] = "auto";
      table.style[$marginRight] = "auto";
      this[_page][$append](table);
      let bottomRow = table[$addRow]();
      let _ = bottomRow[$addCell]().style;
      _[$textAlign] = "center";
      _[$verticalAlign] = "top";
      _[$marginLeft] = "auto";
      _[$marginRight] = "auto";
      for (let i = 0; i < dart.notNull(ids[$length]); i++) {
        let ctrlBlock = html.DivElement.new();
        ctrlBlock.id = ids[$_get](i);
        ctrlBlock.style[$textAlign] = "left";
        ctrlBlock.style[$verticalAlign] = "top";
        let cell = bottomRow[$addCell]();
        cell.style[$textAlign] = "center";
        cell.style[$verticalAlign] = "top";
        cell.style[$marginLeft] = "auto";
        cell.style[$marginRight] = "auto";
        cell[$append](ctrlBlock);
      }
    }
    [_setupParTokenizer]() {
      if (this[_parTokenizer] != null) return;
      let tok = new src__Tokenizer__Tokenizer.Tokenizer.new();
      tok.start("Start");
      let _ = tok.join("Start", "Bold");
      _.addSet("*");
      _.consume = true;
      tok.join("Bold", "Bold").addNot().addSet("*");
      let _$ = tok.join("Bold", "BoldEnd");
      _$.addSet("*");
      _$.consume = true;
      let _$0 = tok.join("Start", "Italic");
      _$0.addSet("_");
      _$0.consume = true;
      tok.join("Italic", "Italic").addNot().addSet("_");
      let _$1 = tok.join("Italic", "ItalicEnd");
      _$1.addSet("_");
      _$1.consume = true;
      let _$2 = tok.join("Start", "Code");
      _$2.addSet("`");
      _$2.consume = true;
      tok.join("Code", "Code").addNot().addSet("`");
      let _$3 = tok.join("Code", "CodeEnd");
      _$3.addSet("`");
      _$3.consume = true;
      let _$4 = tok.join("Start", "LinkHead");
      _$4.addSet("[");
      _$4.consume = true;
      tok.join("LinkHead", "LinkTail").addSet("|");
      let _$5 = tok.join("LinkHead", "LinkEnd");
      _$5.addSet("]");
      _$5.consume = true;
      tok.join("LinkHead", "LinkHead").addNot().addSet("|]");
      let _$6 = tok.join("LinkTail", "LinkEnd");
      _$6.addSet("]");
      _$6.consume = true;
      tok.join("LinkTail", "LinkTail").addNot().addSet("|]");
      tok.join("Start", "Other").addAll();
      tok.join("Other", "Other").addNot().addSet("*_`[");
      tok.setToken("BoldEnd", "Bold");
      tok.setToken("ItalicEnd", "Italic");
      tok.setToken("CodeEnd", "Code");
      tok.setToken("LinkEnd", "Link");
      tok.setToken("Other", "Other");
      this[_parTokenizer] = tok;
    }
  };
  (common__common.ShellPage.new = function(title, showTopTitle) {
    if (title === void 0) title = "";
    if (showTopTitle === void 0) showTopTitle = true;
    this[_page] = null;
    this[_parTokenizer] = null;
    let body = html.document.body;
    let scrollTop = html.DivElement.new();
    scrollTop.className = "scrollTop";
    body[$append](scrollTop);
    let scrollPage = html.DivElement.new();
    scrollPage.className = "scrollPage";
    body[$append](scrollPage);
    let pageCenter = html.DivElement.new();
    pageCenter.className = "pageCenter";
    scrollPage[$append](pageCenter);
    if (title[$isNotEmpty]) {
      html.document[$title] = title;
      if (dart.test(showTopTitle)) {
        let titleElem = html.DivElement.new();
        titleElem.className = "pageTitle";
        titleElem[$text] = title;
        pageCenter[$append](titleElem);
      }
    }
    this[_page] = html.DivElement.new();
    pageCenter[$append](this[_page]);
    this[_parTokenizer] = null;
    html.document[$onScroll].listen(dart.fn(e => {
      async.Timer.run(dart.fn(() => {
        let offset = html.document.documentElement[$scrollTop];
        scrollTop.style[$top] = dart.str(-0.01 * dart.notNull(offset)) + "px";
      }, VoidToNull()));
    }, EventToNull()));
  }).prototype = common__common.ShellPage.prototype;
  dart.addTypeTests(common__common.ShellPage);
  dart.setMethodSignature(common__common.ShellPage, () => ({
    __proto__: dart.getMethods(common__common.ShellPage.__proto__),
    addHeader: dart.fnType(dart.void, [core.int, core.String], [core.String]),
    addDiv: dart.fnType(dart.void, [core.String], [core.String]),
    addPar: dart.fnType(dart.void, [core.List$(core.String)]),
    getCodeParser: dart.fnType(common__common.CodeParser, [core.String]),
    addCode: dart.fnType(dart.void, [core.String, core.String, core.int, core.List$(core.String)]),
    addImage: dart.fnType(dart.void, [core.String, core.String]),
    addCanvas: dart.fnType(dart.void, [core.String]),
    addLargeCanvas: dart.fnType(dart.void, [core.String]),
    addFPS: dart.fnType(dart.void, [src__Core__Core.ThreeDart]),
    addElem: dart.fnType(dart.void, [html.Element]),
    addControlBoxes: dart.fnType(dart.void, [core.List$(core.String)]),
    [_setupParTokenizer]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(common__common.ShellPage, () => ({
    __proto__: dart.getGetters(common__common.ShellPage.__proto__),
    page: html.DivElement
  }));
  dart.setFieldSignature(common__common.ShellPage, () => ({
    __proto__: dart.getFields(common__common.ShellPage.__proto__),
    [_page]: dart.fieldType(html.DivElement),
    [_parTokenizer]: dart.fieldType(src__Tokenizer__Tokenizer.Tokenizer)
  }));
  const _hndl = Symbol('_hndl');
  common__common.Texture2DGroup = class Texture2DGroup extends core.Object {
    add(fileName, checkedByDefault) {
      if (checkedByDefault === void 0) checkedByDefault = false;
      let imgElem = html.ImageElement.new();
      imgElem.src = fileName;
      imgElem.width = 64;
      imgElem.height = 64;
      imgElem.style[$border] = "solid 2px white";
      let index = this[_elem][$children][$length];
      imgElem[$onClick].listen(dart.fn(_ => {
        this[_elem][$children][$forEach](dart.fn(elem => {
          if (html.ImageElement.is(elem)) elem.style[$border] = "solid 2px white";
        }, ElementToNull()));
        imgElem.style[$border] = "solid 2px black";
        this[_hndl](fileName);
        this[_updateUrl](index);
      }, MouseEventToNull()));
      this[_elem][$children][$add](imgElem);
      this[_elem][$children][$add](html.BRElement.new());
      let itemIsChecked = false;
      let urlText = core.Uri.base.queryParameters[$_get](dart.str(this[_elemId]));
      if (urlText == null) {
        itemIsChecked = checkedByDefault;
        this[_updateUrl](index);
      } else {
        let selectedIndex = core.int.parse(urlText);
        itemIsChecked = selectedIndex == index;
      }
      if (dart.test(itemIsChecked)) imgElem.click();
    }
    [_updateUrl](index) {
      if (!dart.test(this[_keepInURL])) return;
      let current = core.Uri.base;
      let parameters = MapOfString$String().from(current.queryParameters);
      parameters[$_set](this[_elemId], dart.str(index));
      let newUrl = current.replace({queryParameters: parameters});
      html.window.history[$replaceState]("", "", dart.toString(newUrl));
    }
  };
  (common__common.Texture2DGroup.new = function(elemId, hndl, keepInURL) {
    if (keepInURL === void 0) keepInURL = true;
    this[_elem] = null;
    this[_elemId] = elemId;
    this[_hndl] = hndl;
    this[_keepInURL] = keepInURL;
    this[_elem] = html.document.getElementById(this[_elemId]);
    if (this[_elem] == null) {
      dart.throw("Failed to find " + dart.str(this[_elemId]) + " for Texture2DGroup");
    }
  }).prototype = common__common.Texture2DGroup.prototype;
  dart.addTypeTests(common__common.Texture2DGroup);
  dart.setMethodSignature(common__common.Texture2DGroup, () => ({
    __proto__: dart.getMethods(common__common.Texture2DGroup.__proto__),
    add: dart.fnType(dart.void, [core.String], [core.bool]),
    [_updateUrl]: dart.fnType(dart.void, [core.int])
  }));
  dart.setFieldSignature(common__common.Texture2DGroup, () => ({
    __proto__: dart.getFields(common__common.Texture2DGroup.__proto__),
    [_elemId]: dart.fieldType(core.String),
    [_keepInURL]: dart.fieldType(core.bool),
    [_elem]: dart.fieldType(html.Element),
    [_hndl]: dart.fieldType(StringTovoid())
  }));
  dart.trackLibraries("web/common/checkGroup.ddc", {
    "common\\common.dart": common__common
  }, '{"version":3,"sourceRoot":"","sources":["common.dart","checkGroup.dart","codeParser.dart","dartParser.dart","glslParser.dart","htmlParser.dart","plainParser.dart","radioGroup.dart","shellPage.dart","texture2DGroup.dart"],"names":[],"mappings":"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","file":"checkGroup.ddc.js"}');
  // Exports:
  return {
    common__common: common__common
  };
});

//# sourceMappingURL=checkGroup.ddc.js.map
