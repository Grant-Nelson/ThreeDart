define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Events/Changable', 'packages/ThreeDart/src/Math/Color3'], function(dart_sdk, checkGroup, Bindable, Changable, Color3) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Shapes__Shapes = Bindable.src__Shapes__Shapes;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Shaders__Shaders = Bindable.src__Shaders__Shaders;
  const src__Textures__Textures = Bindable.src__Textures__Textures;
  const src__Data__Data = Bindable.src__Data__Data;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Events__Events = Changable.src__Events__Events;
  const src__Math__Math = Color3.src__Math__Math;
  const _root = Object.create(null);
  const tests__test008__test = Object.create(_root);
  const $split = dartx.split;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  let ValueChangedEventArgsOfTexture2D = () => (ValueChangedEventArgsOfTexture2D = dart.constFn(src__Events__Events.ValueChangedEventArgs$(src__Textures__Textures.Texture2D)))();
  let ValueChangedEventArgsOfdouble = () => (ValueChangedEventArgsOfdouble = dart.constFn(src__Events__Events.ValueChangedEventArgs$(core.double)))();
  tests__test008__test.main = function() {
    let page = new common__common.ShellPage.new("Test 008");
    page.addLargeCanvas("testCanvas");
    page.addPar(JSArrayOfString().of(["A custom shader for testing and fixing the normal distortion ", "equation used for bump maps. This displays the normal vectors ", "across a surface."]));
    page.addControlBoxes(JSArrayOfString().of(["bumpMaps", "scalars"]));
    page.addPar(JSArrayOfString().of(["«[Back to Tests|../]"]));
    let td = src__Core__Core.ThreeDart.fromId("testCanvas");
    let shape = src__Shapes__Shapes.grid({widthDiv: 50, heightDiv: 50});
    shape.calculateNormals();
    shape.calculateBinormals();
    shape.faces.removeAll();
    for (let i = dart.notNull(shape.vertices.length) - 1; i >= 0; i--) {
      let ver1 = shape.vertices._get(i);
      ver1.weight = 0.0;
      let ver2 = ver1.copy();
      ver2.weight = 1.0;
      shape.vertices.add(ver2);
      shape.lines.add(ver1, ver2);
    }
    let tech = new tests__test008__test.BumpyTechnique.new();
    tech.offsetScalar = 0.5;
    let objTech = new src__Core__Core.Entity.new();
    objTech.shape = shape;
    objTech.technique = tech;
    let group = new src__Core__Core.Entity.new();
    group.children.add(objTech);
    group.mover = (() => {
      let _ = new src__Movers__Movers.Group.new();
      _.add(new src__Movers__Movers.UserRotater.new({input: td.userInput, invertY: true}));
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
    let _ = new common__common.Texture2DGroup.new("bumpMaps", dart.fn(fileName => {
      tech.bumpyTexture = td.textureLoader.load2DFromFile(fileName);
    }, StringToNull()));
    _.add("../resources/BumpMap1.png", true);
    _.add("../resources/BumpMap2.png");
    _.add("../resources/BumpMap3.png");
    _.add("../resources/BumpMap4.png");
    _.add("../resources/BumpMap5.png");
    _.add("../resources/ScrewBumpMap.png");
    _.add("../resources/CtrlPnlBumpMap.png");
    let _$ = new common__common.RadioGroup.new("scalars");
    _$.add("0.1", dart.fn(() => {
      tech.offsetScalar = 0.1;
    }, VoidToNull()));
    _$.add("0.2", dart.fn(() => {
      tech.offsetScalar = 0.2;
    }, VoidToNull()));
    _$.add("0.3", dart.fn(() => {
      tech.offsetScalar = 0.3;
    }, VoidToNull()));
    _$.add("0.4", dart.fn(() => {
      tech.offsetScalar = 0.4;
    }, VoidToNull()));
    _$.add("0.5", dart.fn(() => {
      tech.offsetScalar = 0.5;
    }, VoidToNull()), true);
    _$.add("0.6", dart.fn(() => {
      tech.offsetScalar = 0.6;
    }, VoidToNull()));
    _$.add("0.7", dart.fn(() => {
      tech.offsetScalar = 0.7;
    }, VoidToNull()));
    _$.add("0.8", dart.fn(() => {
      tech.offsetScalar = 0.8;
    }, VoidToNull()));
    _$.add("0.9", dart.fn(() => {
      tech.offsetScalar = 0.9;
    }, VoidToNull()));
    _$.add("1.0", dart.fn(() => {
      tech.offsetScalar = 1.0;
    }, VoidToNull()));
    td.postrender.once(dart.fn(_ => {
      page.addCode("Vertex Shader", "glsl", 0, tech.vertexSourceCode[$split]("\n"));
      page.addCode("Fragment Shader", "glsl", 0, tech.fragmentSourceCode[$split]("\n"));
    }, EventArgsToNull()));
    common__common.showFPS(td);
  };
  const _posAttr = Symbol('_posAttr');
  const _normAttr = Symbol('_normAttr');
  const _binmAttr = Symbol('_binmAttr');
  const _txtAttr = Symbol('_txtAttr');
  const _weightAttr = Symbol('_weightAttr');
  const _bumpTxt = Symbol('_bumpTxt');
  const _objMat = Symbol('_objMat');
  const _viewMat = Symbol('_viewMat');
  const _projMat = Symbol('_projMat');
  const _offsetScalar = Symbol('_offsetScalar');
  tests__test008__test.BumpyShader = class BumpyShader extends src__Shaders__Shaders.Shader {
    static cached(state) {
      let shader = tests__test008__test.BumpyShader._check(state.shader("Bumpy Debugging Shader"));
      if (shader == null) {
        shader = new tests__test008__test.BumpyShader.new(state.gl);
        state.addShader(shader);
      }
      return shader;
    }
    get posAttr() {
      return this[_posAttr];
    }
    get normAttr() {
      return this[_normAttr];
    }
    get binmAttr() {
      return this[_binmAttr];
    }
    get txtAttr() {
      return this[_txtAttr];
    }
    get weightAttr() {
      return this[_weightAttr];
    }
    set bumpTexture(txt) {
      if (txt != null) this[_bumpTxt].setTexture2D(txt);
    }
    get objectMatrix() {
      return this[_objMat].getMatrix4();
    }
    set objectMatrix(mat) {
      return this[_objMat].setMatrix4(mat);
    }
    get viewMatrix() {
      return this[_viewMat].getMatrix4();
    }
    set viewMatrix(mat) {
      return this[_viewMat].setMatrix4(mat);
    }
    get projectMatrix() {
      return this[_projMat].getMatrix4();
    }
    set projectMatrix(mat) {
      return this[_projMat].setMatrix4(mat);
    }
    get offsetScalar() {
      return this[_offsetScalar].getValue();
    }
    set offsetScalar(offset) {
      return this[_offsetScalar].setValue(offset);
    }
  };
  (tests__test008__test.BumpyShader.new = function(gl) {
    this[_posAttr] = null;
    this[_normAttr] = null;
    this[_binmAttr] = null;
    this[_txtAttr] = null;
    this[_weightAttr] = null;
    this[_bumpTxt] = null;
    this[_objMat] = null;
    this[_viewMat] = null;
    this[_projMat] = null;
    this[_offsetScalar] = null;
    tests__test008__test.BumpyShader.__proto__.new.call(this, gl, "Bumpy Debugging Shader");
    this.initialize(tests__test008__test.BumpyShader._vertexSource, tests__test008__test.BumpyShader._fragmentSource);
    this[_posAttr] = this.attributes._get("posAttr");
    this[_normAttr] = this.attributes._get("normAttr");
    this[_binmAttr] = this.attributes._get("binmAttr");
    this[_txtAttr] = this.attributes._get("txtAttr");
    this[_weightAttr] = this.attributes._get("weightAttr");
    this[_bumpTxt] = src__Shaders__Shaders.UniformSampler2D.as(this.uniforms._get("bumpTxt"));
    this[_objMat] = src__Shaders__Shaders.UniformMat4.as(this.uniforms._get("objMat"));
    this[_viewMat] = src__Shaders__Shaders.UniformMat4.as(this.uniforms._get("viewMat"));
    this[_projMat] = src__Shaders__Shaders.UniformMat4.as(this.uniforms._get("projMat"));
    this[_offsetScalar] = src__Shaders__Shaders.Uniform1f.as(this.uniforms._get("offsetScalar"));
  }).prototype = tests__test008__test.BumpyShader.prototype;
  dart.addTypeTests(tests__test008__test.BumpyShader);
  dart.setGetterSignature(tests__test008__test.BumpyShader, () => ({
    __proto__: dart.getGetters(tests__test008__test.BumpyShader.__proto__),
    posAttr: src__Shaders__Shaders.Attribute,
    normAttr: src__Shaders__Shaders.Attribute,
    binmAttr: src__Shaders__Shaders.Attribute,
    txtAttr: src__Shaders__Shaders.Attribute,
    weightAttr: src__Shaders__Shaders.Attribute,
    objectMatrix: src__Math__Math.Matrix4,
    viewMatrix: src__Math__Math.Matrix4,
    projectMatrix: src__Math__Math.Matrix4,
    offsetScalar: core.double
  }));
  dart.setSetterSignature(tests__test008__test.BumpyShader, () => ({
    __proto__: dart.getSetters(tests__test008__test.BumpyShader.__proto__),
    bumpTexture: src__Textures__Textures.Texture2D,
    objectMatrix: src__Math__Math.Matrix4,
    viewMatrix: src__Math__Math.Matrix4,
    projectMatrix: src__Math__Math.Matrix4,
    offsetScalar: core.double
  }));
  dart.setFieldSignature(tests__test008__test.BumpyShader, () => ({
    __proto__: dart.getFields(tests__test008__test.BumpyShader.__proto__),
    [_posAttr]: dart.fieldType(src__Shaders__Shaders.Attribute),
    [_normAttr]: dart.fieldType(src__Shaders__Shaders.Attribute),
    [_binmAttr]: dart.fieldType(src__Shaders__Shaders.Attribute),
    [_txtAttr]: dart.fieldType(src__Shaders__Shaders.Attribute),
    [_weightAttr]: dart.fieldType(src__Shaders__Shaders.Attribute),
    [_bumpTxt]: dart.fieldType(src__Shaders__Shaders.UniformSampler2D),
    [_objMat]: dart.fieldType(src__Shaders__Shaders.UniformMat4),
    [_viewMat]: dart.fieldType(src__Shaders__Shaders.UniformMat4),
    [_projMat]: dart.fieldType(src__Shaders__Shaders.UniformMat4),
    [_offsetScalar]: dart.fieldType(src__Shaders__Shaders.Uniform1f)
  }));
  dart.defineLazy(tests__test008__test.BumpyShader, {
    /*tests__test008__test.BumpyShader.defaultName*/get defaultName() {
      return "Bumpy Debugging Shader";
    },
    /*tests__test008__test.BumpyShader._vertexSource*/get _vertexSource() {
      return "uniform mat4 objMat;                                     \n" + "uniform mat4 viewMat;                                    \n" + "uniform mat4 projMat;                                    \n" + "uniform sampler2D bumpTxt;                               \n" + "uniform float offsetScalar;                              \n" + "                                                         \n" + "attribute vec3 posAttr;                                  \n" + "attribute vec3 normAttr;                                 \n" + "attribute vec3 binmAttr;                                 \n" + "attribute vec2 txtAttr;                                  \n" + "attribute float weightAttr;                              \n" + "                                                         \n" + "varying vec3 color;                                      \n" + "                                                         \n" + "vec3 bumpyNormal(vec3 color)                             \n" + "{                                                        \n" + "   vec3 n = normalize(objMat*vec4(normAttr, 0.0)).xyz;   \n" + "   vec3 b = normalize(objMat*vec4(binmAttr, 0.0)).xyz;   \n" + "   vec3 c = cross(b, n);                                 \n" + "   b = cross(n, c);                                      \n" + "   mat3 mat = mat3( b.x,  b.y,  b.z,                     \n" + "                   -c.x, -c.y, -c.z,                     \n" + "                    n.x,  n.y,  n.z);                    \n" + "   return mat * normalize(2.0*color - 1.0);              \n" + "}                                                        \n" + "                                                         \n" + "void main()                                              \n" + "{                                                        \n" + "   color = texture2D(bumpTxt, txtAttr).rgb;              \n" + "   vec4 pnt = projMat*viewMat*objMat*vec4(posAttr, 1.0); \n" + "   if (weightAttr > 0.5)                                 \n" + "   {                                                     \n" + "     pnt += vec4(bumpyNormal(color)*offsetScalar, 0.0);  \n" + "   }                                                     \n" + "   gl_Position = pnt;                                    \n" + "}                                                        \n";
    },
    set _vertexSource(_) {},
    /*tests__test008__test.BumpyShader._fragmentSource*/get _fragmentSource() {
      return "precision mediump float;            \n" + "                                    \n" + "varying vec3 color;                 \n" + "                                    \n" + "void main()                         \n" + "{                                   \n" + "   gl_FragColor = vec4(color, 1.0); \n" + "}                                   \n";
    },
    set _fragmentSource(_) {}
  });
  const _shader = Symbol('_shader');
  const _txt = Symbol('_txt');
  const _changed = Symbol('_changed');
  const _onChanged = Symbol('_onChanged');
  tests__test008__test.BumpyTechnique = class BumpyTechnique extends src__Techniques__Techniques.Technique {
    get changed() {
      let t = this[_changed];
      t == null ? this[_changed] = new src__Events__Events.Event.new() : t;
      return this[_changed];
    }
    [_onChanged](args) {
      if (args === void 0) args = null;
      let t = this[_changed];
      t == null ? null : t.emit(args);
    }
    get bumpyTexture() {
      return this[_txt];
    }
    set bumpyTexture(txt) {
      if (!dart.equals(this[_txt], txt)) {
        if (this[_txt] != null) this[_txt].changed.remove(dart.bind(this, _onChanged));
        let prev = this[_txt];
        this[_txt] = txt;
        if (this[_txt] != null) this[_txt].changed.add(dart.bind(this, _onChanged));
        this[_onChanged](new (ValueChangedEventArgsOfTexture2D()).new(this, "bumpyTexture", prev, this[_txt]));
      }
    }
    get offsetScalar() {
      return this[_offsetScalar];
    }
    set offsetScalar(scalar) {
      if (!dart.test(src__Math__Math.Comparer.equals(this[_offsetScalar], scalar))) {
        let prev = this[_offsetScalar];
        this[_offsetScalar] = scalar;
        this[_onChanged](new (ValueChangedEventArgsOfdouble()).new(this, "offsetScalar", prev, this[_offsetScalar]));
      }
    }
    get vertexSourceCode() {
      let t = this[_shader];
      return t == null ? null : t.vertexSourceCode;
    }
    get fragmentSourceCode() {
      let t = this[_shader];
      return t == null ? null : t.fragmentSourceCode;
    }
    update(state) {}
    render(state, obj) {
      let t = this[_shader];
      t == null ? this[_shader] = tests__test008__test.BumpyShader.cached(state) : t;
      if (dart.test(obj.cacheNeedsUpdate)) {
        obj.cache = (() => {
          let _ = obj.shape.build(new src__Data__Data.WebGLBufferBuilder.new(state.gl), src__Data__Data.VertexType.Pos['|'](src__Data__Data.VertexType.Norm)['|'](src__Data__Data.VertexType.Binm)['|'](src__Data__Data.VertexType.Txt2D)['|'](src__Data__Data.VertexType.Weight));
          _.findAttribute(src__Data__Data.VertexType.Pos).attr = this[_shader].posAttr.loc;
          _.findAttribute(src__Data__Data.VertexType.Norm).attr = this[_shader].normAttr.loc;
          _.findAttribute(src__Data__Data.VertexType.Binm).attr = this[_shader].binmAttr.loc;
          _.findAttribute(src__Data__Data.VertexType.Txt2D).attr = this[_shader].txtAttr.loc;
          _.findAttribute(src__Data__Data.VertexType.Weight).attr = this[_shader].weightAttr.loc;
          return _;
        })();
      }
      if (this[_txt] != null) {
        this[_txt].index = 0;
        let _ = this[_shader];
        _.bind(state);
        _.bumpTexture = this[_txt];
        _.projectMatrix = state.projection.matrix;
        _.viewMatrix = state.view.matrix;
        _.objectMatrix = state.object.matrix;
        _.offsetScalar = this[_offsetScalar];
        this[_txt].bind(state);
        if (src__Data__Data.BufferStore.is(obj.cache)) {
          let _$ = src__Data__Data.BufferStore.as(obj.cache);
          _$.bind(state);
          _$.render(state);
          _$.unbind(state);
        } else
          obj.clearCache();
        this[_shader].unbind(state);
        this[_txt].unbind(state);
      }
    }
  };
  (tests__test008__test.BumpyTechnique.new = function() {
    this[_shader] = null;
    this[_txt] = null;
    this[_offsetScalar] = null;
    this[_changed] = null;
    this[_shader] = null;
    this[_txt] = null;
    this[_offsetScalar] = 1.0;
    this[_changed] = null;
  }).prototype = tests__test008__test.BumpyTechnique.prototype;
  dart.addTypeTests(tests__test008__test.BumpyTechnique);
  dart.setMethodSignature(tests__test008__test.BumpyTechnique, () => ({
    __proto__: dart.getMethods(tests__test008__test.BumpyTechnique.__proto__),
    [_onChanged]: dart.fnType(dart.void, [], [src__Events__Events.EventArgs]),
    update: dart.fnType(dart.void, [src__Core__Core.RenderState]),
    render: dart.fnType(dart.void, [src__Core__Core.RenderState, src__Core__Core.Entity])
  }));
  dart.setGetterSignature(tests__test008__test.BumpyTechnique, () => ({
    __proto__: dart.getGetters(tests__test008__test.BumpyTechnique.__proto__),
    changed: src__Events__Events.Event,
    bumpyTexture: src__Textures__Textures.Texture2D,
    offsetScalar: core.double,
    vertexSourceCode: core.String,
    fragmentSourceCode: core.String
  }));
  dart.setSetterSignature(tests__test008__test.BumpyTechnique, () => ({
    __proto__: dart.getSetters(tests__test008__test.BumpyTechnique.__proto__),
    bumpyTexture: src__Textures__Textures.Texture2D,
    offsetScalar: core.double
  }));
  dart.setFieldSignature(tests__test008__test.BumpyTechnique, () => ({
    __proto__: dart.getFields(tests__test008__test.BumpyTechnique.__proto__),
    [_shader]: dart.fieldType(tests__test008__test.BumpyShader),
    [_txt]: dart.fieldType(src__Textures__Textures.Texture2D),
    [_offsetScalar]: dart.fieldType(core.double),
    [_changed]: dart.fieldType(src__Events__Events.Event)
  }));
  dart.trackLibraries("web/tests/test008/test.ddc", {
    "tests\\test008\\test.dart": tests__test008__test
  }, '{"version":3,"sourceRoot":"","sources":["test.dart","BumpyShader.dart","BumpyTechnique.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;AAoBE,QAAiB,OAAO,IAAI,4BAAgB,CAAC;IAA5B,oBACE;IADF,YAEN,sBAAC,iEACR,kEACA;IAJa,qBAKG,sBAAC,YAAY;IALhB,YAMN,sBAAC;AAEZ,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAa,QAAQ,AAAO,wBAAI,YAAW,eAAe;AAC1D,SAAK,iBAAiB;AACtB,SAAK,mBAAmB;AACxB,SAAK,MAAM,UAAU;AACrB,aAAS,IAAyB,aAArB,KAAK,SAAS,OAAO,IAAC,GAAG,AAAE,CAAD,IAAI,GAAG,CAAC,IAAI;AACjD,UAAc,OAAO,KAAK,SAAS,MAAC,CAAC;MAAvB,cAAmC;AACjD,UAAc,OAAO,IAAI,KAAK;MAAhB,cAA6B;AAC3C,WAAK,SAAS,IAAI,CAAC,IAAI;AACvB,WAAK,MAAM,IAAI,CAAC,IAAI,EAAE,IAAI;;AAG5B,QAAe,OAAO,IAAI,uCAAc;IAAzB,oBACI;AAEnB,QAAiB,UAAU,IAAI,0BAAgB;IAA9B,gBACL,KAAK;IADA,oBAED,IAAI;AAEpB,QAAiB,QAAQ,IAAI,0BAAgB;IAA5B,mBACA,OAAO;IADP;cAEJ,IAAI,6BAAY;YACnB,IAAI,mCAAkB,SAAQ,EAAE,UAAU,WAAW;YACrD,IAAI,kCAAiB,SAAQ,EAAE,UAAU,QAAQ;YACjD,IAAI,gCAAe,SAAQ,EAAE,UAAU;;;AAEjD,MAAE,MAAM;cAAG,IAAI,kCAAiB;qBACf,KAAK;uBACH,AAAI,sCAAyB,CAAC,KAAK,KAAK;;;AAE3D,gBAAI,iCAAqB,CAAC,YAAY,QAAC,QAAe;AACpD,UAAI,aAAa,GAAG,EAAE,cAAc,eAAe,CAAC,QAAQ;;UAEtD,6BAA6B;UAC7B;UACA;UACA;UACA;UACA;UACA;AAER,iBAAI,6BAAiB,CAAC;WACd,OAAO;AAAK,UAAI,aAAa,GAAG;;WAChC,OAAO;AAAK,UAAI,aAAa,GAAG;;WAChC,OAAO;AAAK,UAAI,aAAa,GAAG;;WAChC,OAAO;AAAK,UAAI,aAAa,GAAG;;WAChC,OAAO;AAAK,UAAI,aAAa,GAAG;sBAAQ;WACxC,OAAO;AAAK,UAAI,aAAa,GAAG;;WAChC,OAAO;AAAK,UAAI,aAAa,GAAG;;WAChC,OAAO;AAAK,UAAI,aAAa,GAAG;;WAChC,OAAO;AAAK,UAAI,aAAa,GAAG;;WAChC,OAAO;AAAK,UAAI,aAAa,GAAG;;AAExC,MAAE,WAAW,KAAK,CAAC,QAAC,CAAC;AACnB,MACE,AAAE,YAAO,CAAC,iBAAiB,QAAQ,GAAG,IAAI,iBAAiB,QAAM,CAAC;MAClE,AAAE,YAAO,CAAC,mBAAmB,QAAQ,GAAG,IAAI,mBAAmB,QAAM,CAAC;;AAE1E,IAAO,sBAAO,CAAC,EAAE;EACnB;;;;;;;;;;;;kBCf6B,KAA2B;AAAE,AACtD,UAAY,iDAAS,KAAK,OAAO,CAAC,wBAAW;AAC7C,UAAI,MAAM,IAAI,MAAM;AAClB,cAAM,GAAG,IAAI,oCAAW,CAAC,KAAK,GAAG;AACjC,aAAK,UAAU,CAAC,MAAM;;AAExB,YAAO,OAAM;IACf;;YAkBiC,eAAa;;;YAGZ,gBAAc;;;YAGd,gBAAc;;;YAGf,eAAa;;;YAGV,kBAAgB;;oBAGpC,GAAsB;AACpC,UAAI,GAAG,IAAI,MAAM,cAAa,aAAa,CAAC,GAAG;IACjD;;YAGiC,cAAY,WAAW;IAAE;qBACzC,GAAgB;YAAK,cAAY,WAAW,CAAC,GAAG;IAAC;;YAGnC,eAAa,WAAW;IAAE;mBAC1C,GAAgB;YAAK,eAAa,WAAW,CAAC,GAAG;IAAC;;YAG/B,eAAa,WAAW;IAAE;sBAC1C,GAAgB;YAAK,eAAa,WAAW,CAAC,GAAG;IAAC;;YAGzC,oBAAkB,SAAS;IAAE;qBACvC,MAAa;YAAK,oBAAkB,SAAS,CAAC,MAAM;IAAC;;mDAhD1D,EAA0B;IAzBpB,cAAQ;IACR,eAAS;IACT,eAAS;IACT,cAAQ;IACR,iBAAW;IAEJ,cAAQ;IACb,aAAO;IACP,cAAQ;IACR,cAAQ;IACV,mBAAa;AAeU,8DAAM,EAAE,EAAE,wBAAW;AAC5D,mBAAe,CAAC,8CAAa,EAAE,gDAAe;AAC9C,kBAAa,GAAQ,eAAe,MAAC;AACrC,mBAAc,GAAO,eAAe,MAAC;AACrC,mBAAc,GAAO,eAAe,MAAC;AACrC,kBAAa,GAAQ,eAAe,MAAC;AACrC,qBAAgB,GAAK,eAAe,MAAC;AACrC,kBAAa,6CAAQ,aAAa,MAAC;AACnC,iBAAY,wCAAS,aAAa,MAAC;AACnC,kBAAa,wCAAQ,aAAa,MAAC;AACnC,kBAAa,wCAAQ,aAAa,MAAC;AACnC,uBAAkB,sCAAG,aAAa,MAAC;EACrC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAzFoB,4CAAW;YAAG;;MAGpB,8CAAa;YACvB,AAA6D,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,AACA,iEAjC7D,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA,gEACA;;;MAGU,gDAAe;YACzB,AAAwC,AACA,AACA,AACA,AACA,AACA,AACA,4CALxC,2CACA,2CACA,2CACA,2CACA,2CACA,2CACA;;;;;;;;;;ACrCF,4BAAa;kBAAb,cAAa,GAAK,IAAI,6BAAY;AAClC,YAAO,eAAa;IACtB;iBAGiB,IAA4B;2BAAX,OAAO;AACvC,4BAAa;gCAAO,IAAI;IAC1B;;YAGuC,WAAS;;qBAC1B,GAAsB;AAC1C,uBAAI,UAAS,EAAI,GAAG,GAAE;AACpB,YAAI,UAAS,IAAI,MAAM,UAAS,QAAQ,OAAO,WAAC;AAChD,YAAmB,OAAO,UAAS;AACnC,kBAAS,GAAG,GAAG;AACf,YAAI,UAAS,IAAI,MAAM,UAAS,QAAQ,IAAI,WAAC;AAC7C,wBAAe,CAAC,IAAI,wCAA4B,CAAC,MAAM,gBAAgB,IAAI,EAAE,UAAS;;IAE1F;;YAG2B,oBAAkB;;qBACvB,MAAa;AACjC,qBAAK,wBAAa,OAAO,CAAC,mBAAkB,EAAE,MAAM,IAAG;AACrD,YAAO,OAAO,mBAAkB;AAChC,2BAAkB,GAAG,MAAM;AAC3B,wBAAe,CAAC,IAAI,qCAA4B,CAAC,MAAM,gBAAgB,IAAI,EAAE,mBAAkB;;IAEnG;;cAG+B,aAAY;;IAAkB;;cAG5B,aAAY;;IAAoB;WAGrD,KAA2B,GAEvC;WAGY,KAA2B,EAAE,GAAoB;AAC3D,2BAAY;kBAAZ,aAAY,GAAK,AAAI,uCAAkB,CAAC,KAAK;AAE7C,oBAAI,GAAG,iBAAiB,GAAE;AACxB,WAAG,MAAM;kBAAG,GAAG,MAAM,MAAM,CAAC,IAAI,sCAAuB,CAAC,KAAK,GAAG,GAC9D,AAAmB,AAAqB,AAAqB,AACxC,0BADN,IAAI,MAAC,0BAAe,KAAK,OAAC,0BAAe,KAAK,OAC7D,0BAAe,MAAM,OAAC,0BAAe,OAAO;0BAC5B,0BAAe,IAAI,SAAS,aAAY,QAAQ,IAAI;0BACpD,0BAAe,KAAK,SAAS,aAAY,SAAS,IAAI;0BACtD,0BAAe,KAAK,SAAS,aAAY,SAAS,IAAI;0BACtD,0BAAe,MAAM,SAAS,aAAY,QAAQ,IAAI;0BACtD,0BAAe,OAAO,SAAS,aAAY,WAAW,IAAI;;;;AAG9E,UAAI,UAAS,IAAI,MAAM;AACrB,kBAAS,MAAM,GAAG;AAElB,6BAAY;eACH,KAAK;wBACI,UAAS;0BACP,KAAK,WAAW,OAAO;uBAC1B,KAAK,KAAK,OAAO;yBACf,KAAK,OAAO,OAAO;yBACnB,mBAAkB;AAErC,kBAAS,KAAK,CAAC,KAAK;AACpB,2CAAI,GAAG,MAAM,GAAsB;AACjC,kDAAC,GAAG,MAAM;kBACD,KAAK;oBACH,KAAK;oBACL,KAAK;;AACX,aAAG,WAAW;AAErB,qBAAY,OAAO,CAAC,KAAK;AACzB,kBAAS,OAAO,CAAC,KAAK;;IAE1B;;;IA9FY,aAAO;IACA,UAAI;IAChB,mBAAa;IACP,cAAQ;AAInB,iBAAY,GAAG;AACf,cAAS,GAAG;AACZ,uBAAkB,GAAG;AACrB,kBAAa,GAAG;EAClB","file":"test.ddc.js"}');
  // Exports:
  return {
    tests__test008__test: tests__test008__test
  };
});

//# sourceMappingURL=test.ddc.js.map
