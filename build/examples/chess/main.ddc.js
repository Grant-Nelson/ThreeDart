define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/IO', 'packages/ThreeDart/src/Math/Color3'], function(dart_sdk, checkGroup, Bindable, IO, Color3) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Views__Views = Bindable.src__Views__Views;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Shapes__Shapes = Bindable.src__Shapes__Shapes;
  const src__Lights__Lights = Bindable.src__Lights__Lights;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Textures__Textures = Bindable.src__Textures__Textures;
  const src__IO__IO = IO.src__IO__IO;
  const src__Math__Math = Color3.src__Math__Math;
  const _root = Object.create(null);
  const examples__chess__main = Object.create(_root);
  const $toDouble = dartx.toDouble;
  const $modulo = dartx['%'];
  const $add = dartx.add;
  const $_get = dartx._get;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfMover = () => (JSArrayOfMover = dart.constFn(_interceptors.JSArray$(src__Movers__Movers.Mover)))();
  let JSArrayOfScene = () => (JSArrayOfScene = dart.constFn(_interceptors.JSArray$(src__Scenes__Scenes.Scene)))();
  let EntityToNull = () => (EntityToNull = dart.constFn(dart.fnType(core.Null, [src__Core__Core.Entity])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let JSArrayOfPiece = () => (JSArrayOfPiece = dart.constFn(_interceptors.JSArray$(examples__chess__main.Piece)))();
  let JSArrayOfTile = () => (JSArrayOfTile = dart.constFn(_interceptors.JSArray$(examples__chess__main.Tile)))();
  let ListOfPiece = () => (ListOfPiece = dart.constFn(core.List$(examples__chess__main.Piece)))();
  let ListOfTile = () => (ListOfTile = dart.constFn(core.List$(examples__chess__main.Tile)))();
  let JSArrayOfMaterialLight = () => (JSArrayOfMaterialLight = dart.constFn(_interceptors.JSArray$(src__Techniques__Techniques.MaterialLight)))();
  let ListOfMaterialLight = () => (ListOfMaterialLight = dart.constFn(core.List$(src__Techniques__Techniques.MaterialLight)))();
  examples__chess__main.main = function() {
    let _ = new common__common.ShellPage.new("3Dart Chess");
    _.addPar(JSArrayOfString().of(["This example is in development and may still have a few issues and glitches."]));
    _.addLargeCanvas("targetCanvas");
    _.addHeader(1, "About");
    _.addPar(JSArrayOfString().of(["Just started (WIP). Currently you can rotate the camera but game piece selection ", "and movement have not been implemented yet. Click and drag with mouse to see the board from ", "different angles."]));
    _.addPar(JSArrayOfString().of(["3Dart Chess is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ", "to create simple browser driven video games. ", "This example has no server backing it so currently there is no networked two player mode. ", "It would take very little to turn this into a simple online game."]));
    _.addPar(JSArrayOfString().of(["«[Back to Examples List|../../]"]));
    _.addHeader(1, "Help wanted");
    _.addPar(JSArrayOfString().of(["There is still much to be done, many cool new features, and several little bugs. ", "If you would like to contribute to this example, have an idea, find a bug, or just want ", "to learn more about it, check out the ", "[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/chess]."]));
    _.addPar(JSArrayOfString().of(["There are tons of ways to contribute. You could even start your own example. ", "See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."]));
    async.Timer.run(dart.fn(examples__chess__main.startChess, VoidTovoid()));
  };
  examples__chess__main.startChess = function() {
    let td = src__Core__Core.ThreeDart.fromId("targetCanvas");
    let camera = new src__Views__Views.Perspective.new({mover: new src__Movers__Movers.Group.new(JSArrayOfMover().of([(() => {
          let _ = new src__Movers__Movers.UserRotater.new({input: td.userInput});
          _.pitch.minimumLocation = -1.5707963267948966;
          _.pitch.maximumLocation = 0.0;
          _.pitch.wrap = false;
          return _;
        })(), src__Movers__Movers.Constant.scale(1.75, 1.75, 1.75), src__Movers__Movers.Constant.translate(0.0, 0.0, 15.0)]))});
    let target = new src__Views__Views.FrontTarget.new();
    target.clearColor = false;
    let board = new examples__chess__main.Board.new(td);
    let skybox = src__Scenes__Scenes.CoverPass.skybox(board.materials.environment);
    skybox.target = target;
    skybox.camera = camera;
    let mainScene = new src__Scenes__Scenes.EntityPass.new();
    mainScene.target = target;
    mainScene.camera = camera;
    mainScene.children.add(board);
    td.scene = new src__Scenes__Scenes.Compound.new({passes: JSArrayOfScene().of([skybox, mainScene])});
    common__common.showFPS(td);
  };
  const _white = Symbol('_white');
  const _column = Symbol('_column');
  const _board = Symbol('_board');
  const _row = Symbol('_row');
  const _angle = Symbol('_angle');
  const _scalar = Symbol('_scalar');
  const _mover = Symbol('_mover');
  const _hasMoved = Symbol('_hasMoved');
  const _dead = Symbol('_dead');
  const _selected = Symbol('_selected');
  const _updateLocation = Symbol('_updateLocation');
  const _updateTech = Symbol('_updateTech');
  examples__chess__main.Piece = class Piece extends src__Core__Core.Entity {
    [_updateLocation]() {
      this[_mover].matrix = src__Math__Math.Matrix4.translate(this[_row][$toDouble]() - 4.5, 0.0, this[_column][$toDouble]() - 4.5)['*'](src__Math__Math.Matrix4.rotateY(this[_angle]))['*'](src__Math__Math.Matrix4.scale(this[_scalar], this[_scalar], this[_scalar]));
    }
    [_updateTech]() {
      if (dart.test(this[_white])) {
        if (dart.test(this[_selected]))
          this.technique = this[_board].materials.selectedWhitePieceTech;
        else
          this.technique = this[_board].materials.whitePieceTech;
      } else {
        if (dart.test(this[_selected]))
          this.technique = this[_board].materials.selectedBlackPieceTech;
        else
          this.technique = this[_board].materials.blackPieceTech;
      }
    }
  };
  (examples__chess__main.Piece.__ = function(board, white, row, column, angle, scalar) {
    this[_mover] = null;
    this[_hasMoved] = null;
    this[_dead] = null;
    this[_selected] = null;
    this[_board] = board;
    this[_white] = white;
    this[_row] = row;
    this[_column] = column;
    this[_angle] = angle;
    this[_scalar] = scalar;
    examples__chess__main.Piece.__proto__.new.call(this);
    this[_mover] = new src__Movers__Movers.Constant.new();
    this.mover = this[_mover];
    this[_hasMoved] = false;
    this[_dead] = false;
    this[_selected] = false;
    this[_updateLocation]();
    this[_updateTech]();
  }).prototype = examples__chess__main.Piece.prototype;
  dart.addTypeTests(examples__chess__main.Piece);
  dart.setMethodSignature(examples__chess__main.Piece, () => ({
    __proto__: dart.getMethods(examples__chess__main.Piece.__proto__),
    [_updateLocation]: dart.fnType(dart.void, []),
    [_updateTech]: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(examples__chess__main.Piece, () => ({
    __proto__: dart.getFields(examples__chess__main.Piece.__proto__),
    [_row]: dart.fieldType(core.int),
    [_column]: dart.fieldType(core.int),
    [_angle]: dart.fieldType(core.double),
    [_scalar]: dart.fieldType(core.double),
    [_mover]: dart.fieldType(src__Movers__Movers.Constant),
    [_board]: dart.fieldType(examples__chess__main.Board),
    [_white]: dart.fieldType(core.bool),
    [_hasMoved]: dart.fieldType(core.bool),
    [_dead]: dart.fieldType(core.bool),
    [_selected]: dart.fieldType(core.bool)
  }));
  examples__chess__main.Bishop = class Bishop extends examples__chess__main.Piece {};
  (examples__chess__main.Bishop.new = function(td, board, white, row, column, angle, scalar) {
    examples__chess__main.Bishop.__proto__.__.call(this, board, white, row, column, angle, scalar);
    if (examples__chess__main.Bishop._shapeEntity == null) {
      examples__chess__main.Bishop._shapeEntity = new src__Core__Core.Entity.new({name: "bishop shape"});
      FutureOfNull()._check(src__IO__IO.ObjType.fromFile("./resources/bishop.obj", td.textureLoader).then(core.Null, dart.fn(loadedEntity => {
        examples__chess__main.Bishop._shapeEntity.shape = loadedEntity.shape;
      }, EntityToNull())));
    }
    this.name = (dart.test(this[_white]) ? "white" : "black") + (" bishop " + dart.str(this[_column]));
    this.children.add(examples__chess__main.Bishop._shapeEntity);
  }).prototype = examples__chess__main.Bishop.prototype;
  dart.addTypeTests(examples__chess__main.Bishop);
  dart.defineLazy(examples__chess__main.Bishop, {
    /*examples__chess__main.Bishop._shapeEntity*/get _shapeEntity() {
      return null;
    },
    set _shapeEntity(_) {}
  });
  const _pieces = Symbol('_pieces');
  const _tiles = Symbol('_tiles');
  const _mats = Symbol('_mats');
  const _add = Symbol('_add');
  const _tableTech = Symbol('_tableTech');
  examples__chess__main.Board = class Board extends src__Core__Core.Entity {
    get materials() {
      return this[_mats];
    }
    [_add](piece) {
      this[_pieces][$add](piece);
      this.children.add(piece);
    }
  };
  (examples__chess__main.Board.new = function(td) {
    this[_pieces] = null;
    this[_tiles] = null;
    this[_mats] = null;
    examples__chess__main.Board.__proto__.new.call(this);
    this[_pieces] = JSArrayOfPiece().of([]);
    this[_tiles] = JSArrayOfTile().of([]);
    this[_mats] = new examples__chess__main.Materials.new(td);
    this.name = "board";
    for (let i = 1; i <= 8; i++) {
      for (let j = 1; j <= 8; j++) {
        let tile = new examples__chess__main.Tile.new(td, this, (i + j)[$modulo](2) === 0, i, j);
        this[_tiles][$add](tile);
        this.children.add(tile);
      }
    }
    for (let i = 1; i <= 8; i++) {
      this[_add](new examples__chess__main.Pawn.new(td, this, true, 2, i, 0.0, 0.7));
      this[_add](new examples__chess__main.Pawn.new(td, this, false, 7, i, 0.0, 0.7));
    }
    this[_add](new examples__chess__main.Rook.new(td, this, true, 1, 1, 0.0, 0.7));
    this[_add](new examples__chess__main.Rook.new(td, this, true, 1, 8, 0.0, 0.7));
    this[_add](new examples__chess__main.Rook.new(td, this, false, 8, 1, 0.0, 0.7));
    this[_add](new examples__chess__main.Rook.new(td, this, false, 8, 8, 0.0, 0.7));
    this[_add](new examples__chess__main.Knight.new(td, this, true, 1, 2, 0.0, 0.7));
    this[_add](new examples__chess__main.Knight.new(td, this, true, 1, 7, 3.141592653589793, 0.7));
    this[_add](new examples__chess__main.Knight.new(td, this, false, 8, 2, 0.0, 0.7));
    this[_add](new examples__chess__main.Knight.new(td, this, false, 8, 7, 3.141592653589793, 0.7));
    this[_add](new examples__chess__main.Bishop.new(td, this, true, 1, 3, -1.5707963267948966, 0.8));
    this[_add](new examples__chess__main.Bishop.new(td, this, true, 1, 6, 1.5707963267948966, 0.8));
    this[_add](new examples__chess__main.Bishop.new(td, this, false, 8, 3, -1.5707963267948966, 0.8));
    this[_add](new examples__chess__main.Bishop.new(td, this, false, 8, 6, 1.5707963267948966, 0.8));
    this[_add](new examples__chess__main.Queen.new(td, this, true, 1, 4, 0.0, 1.0));
    this[_add](new examples__chess__main.King.new(td, this, true, 1, 5, 1.5707963267948966, 0.9));
    this[_add](new examples__chess__main.Queen.new(td, this, false, 8, 4, 0.0, 1.0));
    this[_add](new examples__chess__main.King.new(td, this, false, 8, 5, 1.5707963267948966, 0.9));
    this.children.add(new examples__chess__main.Edge.new(td, this, 0.0, 0.0, 0.0, 0));
    this.children.add(new examples__chess__main.Edge.new(td, this, 8.0, 0.0, 1.5707963267948966, 1));
    this.children.add(new examples__chess__main.Edge.new(td, this, 8.0, 8.0, 3.141592653589793, 2));
    this.children.add(new examples__chess__main.Edge.new(td, this, 0.0, 8.0, 4.71238898038469, 3));
    this.children.add(new src__Core__Core.Entity.new({shape: src__Shapes__Shapes.disk({sides: 30}), tech: this[_mats][_tableTech], mover: new src__Movers__Movers.Constant.new(src__Math__Math.Matrix4.translate(0.0, -0.5, 0.0)['*'](src__Math__Math.Matrix4.rotateX(-1.5707963267948966))['*'](src__Math__Math.Matrix4.scale(12.0, 12.0, 12.0)))}));
  }).prototype = examples__chess__main.Board.prototype;
  dart.addTypeTests(examples__chess__main.Board);
  dart.setMethodSignature(examples__chess__main.Board, () => ({
    __proto__: dart.getMethods(examples__chess__main.Board.__proto__),
    [_add]: dart.fnType(dart.void, [examples__chess__main.Piece])
  }));
  dart.setGetterSignature(examples__chess__main.Board, () => ({
    __proto__: dart.getGetters(examples__chess__main.Board.__proto__),
    materials: examples__chess__main.Materials
  }));
  dart.setFieldSignature(examples__chess__main.Board, () => ({
    __proto__: dart.getFields(examples__chess__main.Board.__proto__),
    [_pieces]: dart.fieldType(ListOfPiece()),
    [_tiles]: dart.fieldType(ListOfTile()),
    [_mats]: dart.fieldType(examples__chess__main.Materials)
  }));
  examples__chess__main.Edge = class Edge extends src__Core__Core.Entity {};
  (examples__chess__main.Edge.new = function(td, board, dx, dz, angle, textureIndex) {
    this[_board] = board;
    examples__chess__main.Edge.__proto__.new.call(this);
    if (examples__chess__main.Edge._shapeEntity == null) {
      examples__chess__main.Edge._shapeEntity = new src__Core__Core.Entity.new({name: "edge shape"});
      FutureOfNull()._check(src__IO__IO.ObjType.fromFile("./resources/edge.obj", td.textureLoader).then(core.Null, dart.fn(loadedEntity => {
        examples__chess__main.Edge._shapeEntity.shape = loadedEntity.shape;
      }, EntityToNull())));
    }
    this.mover = new src__Movers__Movers.Constant.new(src__Math__Math.Matrix4.translate(dart.notNull(dx) - 4.0, 0.0, dart.notNull(dz) - 4.0)['*'](src__Math__Math.Matrix4.rotateY(angle)));
    this.name = "edge";
    this.children.add(examples__chess__main.Edge._shapeEntity);
    this.technique = this[_board].materials.edgeTechs[$_get](textureIndex);
  }).prototype = examples__chess__main.Edge.prototype;
  dart.addTypeTests(examples__chess__main.Edge);
  dart.setFieldSignature(examples__chess__main.Edge, () => ({
    __proto__: dart.getFields(examples__chess__main.Edge.__proto__),
    [_board]: dart.fieldType(examples__chess__main.Board)
  }));
  dart.defineLazy(examples__chess__main.Edge, {
    /*examples__chess__main.Edge._shapeEntity*/get _shapeEntity() {
      return null;
    },
    set _shapeEntity(_) {}
  });
  examples__chess__main.King = class King extends examples__chess__main.Piece {};
  (examples__chess__main.King.new = function(td, board, white, row, column, angle, scalar) {
    examples__chess__main.King.__proto__.__.call(this, board, white, row, column, angle, scalar);
    if (examples__chess__main.King._shapeEntity == null) {
      examples__chess__main.King._shapeEntity = new src__Core__Core.Entity.new({name: "king shape"});
      FutureOfNull()._check(src__IO__IO.ObjType.fromFile("./resources/king.obj", td.textureLoader).then(core.Null, dart.fn(loadedEntity => {
        examples__chess__main.King._shapeEntity.shape = loadedEntity.shape;
      }, EntityToNull())));
    }
    this.name = (dart.test(this[_white]) ? "white" : "black") + (" king " + dart.str(this[_column]));
    this.children.add(examples__chess__main.King._shapeEntity);
  }).prototype = examples__chess__main.King.prototype;
  dart.addTypeTests(examples__chess__main.King);
  dart.defineLazy(examples__chess__main.King, {
    /*examples__chess__main.King._shapeEntity*/get _shapeEntity() {
      return null;
    },
    set _shapeEntity(_) {}
  });
  examples__chess__main.Knight = class Knight extends examples__chess__main.Piece {};
  (examples__chess__main.Knight.new = function(td, board, white, row, column, angle, scalar) {
    examples__chess__main.Knight.__proto__.__.call(this, board, white, row, column, angle, scalar);
    if (examples__chess__main.Knight._shapeEntity == null) {
      examples__chess__main.Knight._shapeEntity = new src__Core__Core.Entity.new({name: "knight shape"});
      FutureOfNull()._check(src__IO__IO.ObjType.fromFile("./resources/knight.obj", td.textureLoader).then(core.Null, dart.fn(loadedEntity => {
        examples__chess__main.Knight._shapeEntity.shape = loadedEntity.shape;
      }, EntityToNull())));
    }
    this.name = (dart.test(this[_white]) ? "white" : "black") + (" knight " + dart.str(this[_column]));
    this.children.add(examples__chess__main.Knight._shapeEntity);
  }).prototype = examples__chess__main.Knight.prototype;
  dart.addTypeTests(examples__chess__main.Knight);
  dart.defineLazy(examples__chess__main.Knight, {
    /*examples__chess__main.Knight._shapeEntity*/get _shapeEntity() {
      return null;
    },
    set _shapeEntity(_) {}
  });
  const _environment = Symbol('_environment');
  const _whitePieceTech = Symbol('_whitePieceTech');
  const _blackPieceTech = Symbol('_blackPieceTech');
  const _selectedWhitePieceTech = Symbol('_selectedWhitePieceTech');
  const _selectedBlackPieceTech = Symbol('_selectedBlackPieceTech');
  const _whiteTileTech = Symbol('_whiteTileTech');
  const _blackTileTech = Symbol('_blackTileTech');
  const _selectedWhiteTileTech = Symbol('_selectedWhiteTileTech');
  const _selectedBlackTileTech = Symbol('_selectedBlackTileTech');
  const _edgeTechs = Symbol('_edgeTechs');
  examples__chess__main.Materials = class Materials extends core.Object {
    get environment() {
      return this[_environment];
    }
    get whitePieceTech() {
      return this[_whitePieceTech];
    }
    get blackPieceTech() {
      return this[_blackPieceTech];
    }
    get selectedWhitePieceTech() {
      return this[_selectedWhitePieceTech];
    }
    get selectedBlackPieceTech() {
      return this[_selectedBlackPieceTech];
    }
    get whiteTileTech() {
      return this[_whiteTileTech];
    }
    get blackTileTech() {
      return this[_blackTileTech];
    }
    get selectedWhiteTileTech() {
      return this[_selectedWhiteTileTech];
    }
    get selectedBlackTileTech() {
      return this[_selectedBlackTileTech];
    }
    get edgeTechs() {
      return this[_edgeTechs];
    }
    get tableTech() {
      return this[_tableTech];
    }
  };
  (examples__chess__main.Materials.new = function(td) {
    this[_environment] = null;
    this[_whitePieceTech] = null;
    this[_blackPieceTech] = null;
    this[_selectedWhitePieceTech] = null;
    this[_selectedBlackPieceTech] = null;
    this[_whiteTileTech] = null;
    this[_blackTileTech] = null;
    this[_selectedWhiteTileTech] = null;
    this[_selectedBlackTileTech] = null;
    this[_edgeTechs] = null;
    this[_tableTech] = null;
    this[_environment] = td.textureLoader.loadCubeFromPath("resources");
    let topLight = new src__Lights__Lights.Directional.new();
    topLight.color = src__Math__Math.Color3.new(1.0, 0.9, 0.8);
    topLight.direction = new src__Math__Math.Vector3.new(0.0, -1.0, -0.25);
    let bollomLight = new src__Lights__Lights.Directional.new();
    bollomLight.color = src__Math__Math.Color3.new(0.0, 0.1, 0.3);
    bollomLight.direction = new src__Math__Math.Vector3.new(0.0, 1.0, 0.25);
    let pieceReflection = src__Math__Math.Color3.gray(0.15);
    let _ = new src__Techniques__Techniques.MaterialLight.new();
    _.diffuse.color = src__Math__Math.Color3.gray(0.6);
    _.ambient.color = src__Math__Math.Color3.gray(0.4);
    _.specular.color = src__Math__Math.Color3.white();
    _.specular.shininess = 60.0;
    _.environment = this[_environment];
    _.reflection.color = pieceReflection;
    _.lights.add(topLight);
    _.lights.add(bollomLight);
    this[_whitePieceTech] = _;
    let _$ = new src__Techniques__Techniques.MaterialLight.new();
    _$.diffuse.color = src__Math__Math.Color3.gray(0.2);
    _$.ambient.color = src__Math__Math.Color3.gray(0.1);
    _$.specular.color = src__Math__Math.Color3.white();
    _$.specular.shininess = 60.0;
    _$.environment = this[_environment];
    _$.reflection.color = pieceReflection;
    _$.lights.add(topLight);
    _$.lights.add(bollomLight);
    this[_blackPieceTech] = _$;
    let _$0 = new src__Techniques__Techniques.MaterialLight.new();
    _$0.diffuse.color = src__Math__Math.Color3.new(0.6, 0.0, 0.0);
    _$0.ambient.color = src__Math__Math.Color3.new(0.8, 0.0, 0.0);
    _$0.specular.color = src__Math__Math.Color3.white();
    _$0.specular.shininess = 100.0;
    _$0.environment = this[_environment];
    _$0.reflection.color = pieceReflection;
    _$0.lights.add(topLight);
    _$0.lights.add(bollomLight);
    this[_selectedWhitePieceTech] = _$0;
    let _$1 = new src__Techniques__Techniques.MaterialLight.new();
    _$1.diffuse.color = src__Math__Math.Color3.new(0.2, 0.0, 0.0);
    _$1.ambient.color = src__Math__Math.Color3.new(0.6, 0.0, 0.0);
    _$1.specular.color = src__Math__Math.Color3.white();
    _$1.specular.shininess = 100.0;
    _$1.environment = this[_environment];
    _$1.reflection.color = pieceReflection;
    _$1.lights.add(topLight);
    _$1.lights.add(bollomLight);
    this[_selectedBlackPieceTech] = _$1;
    let tileReflection = src__Math__Math.Color3.gray(0.075);
    let _$2 = new src__Techniques__Techniques.MaterialLight.new();
    _$2.diffuse.color = src__Math__Math.Color3.gray(0.6);
    _$2.ambient.color = src__Math__Math.Color3.gray(0.4);
    _$2.specular.color = src__Math__Math.Color3.white();
    _$2.specular.shininess = 60.0;
    _$2.environment = this[_environment];
    _$2.reflection.color = tileReflection;
    _$2.lights.add(topLight);
    _$2.lights.add(bollomLight);
    this[_whiteTileTech] = _$2;
    let _$3 = new src__Techniques__Techniques.MaterialLight.new();
    _$3.diffuse.color = src__Math__Math.Color3.gray(0.2);
    _$3.ambient.color = src__Math__Math.Color3.gray(0.1);
    _$3.specular.color = src__Math__Math.Color3.white();
    _$3.specular.shininess = 60.0;
    _$3.environment = this[_environment];
    _$3.reflection.color = tileReflection;
    _$3.lights.add(topLight);
    _$3.lights.add(bollomLight);
    this[_blackTileTech] = _$3;
    let _$4 = new src__Techniques__Techniques.MaterialLight.new();
    _$4.diffuse.color = src__Math__Math.Color3.new(0.6, 0.0, 0.0);
    _$4.ambient.color = src__Math__Math.Color3.new(0.8, 0.0, 0.0);
    _$4.specular.color = src__Math__Math.Color3.white();
    _$4.specular.shininess = 100.0;
    _$4.environment = this[_environment];
    _$4.reflection.color = tileReflection;
    _$4.lights.add(topLight);
    _$4.lights.add(bollomLight);
    this[_selectedWhiteTileTech] = _$4;
    let _$5 = new src__Techniques__Techniques.MaterialLight.new();
    _$5.diffuse.color = src__Math__Math.Color3.new(0.2, 0.0, 0.0);
    _$5.ambient.color = src__Math__Math.Color3.new(0.6, 0.0, 0.0);
    _$5.specular.color = src__Math__Math.Color3.white();
    _$5.specular.shininess = 100.0;
    _$5.environment = this[_environment];
    _$5.reflection.color = tileReflection;
    _$5.lights.add(topLight);
    _$5.lights.add(bollomLight);
    this[_selectedBlackTileTech] = _$5;
    this[_edgeTechs] = JSArrayOfMaterialLight().of([]);
    for (let i = 0; i < 4; ++i) {
      let edgeTxt = td.textureLoader.load2DFromFile("resources/edge" + dart.str(i) + ".png");
      this[_edgeTechs][$add]((() => {
        let _ = new src__Techniques__Techniques.MaterialLight.new();
        _.diffuse.color = src__Math__Math.Color3.gray(0.6);
        _.diffuse.texture2D = edgeTxt;
        _.ambient.color = src__Math__Math.Color3.gray(0.4);
        _.ambient.texture2D = edgeTxt;
        _.specular.color = src__Math__Math.Color3.white();
        _.specular.shininess = 80.0;
        _.environment = this[_environment];
        _.reflection.color = src__Math__Math.Color3.gray(0.1);
        _.lights.add(topLight);
        _.lights.add(bollomLight);
        return _;
      })());
    }
    let tableColor = td.textureLoader.load2DFromFile("resources/tableColor.png");
    let tableSpen = td.textureLoader.load2DFromFile("resources/tableSpec.png");
    let _$6 = new src__Techniques__Techniques.MaterialLight.new();
    _$6.diffuse.color = src__Math__Math.Color3.gray(0.6);
    _$6.diffuse.texture2D = tableColor;
    _$6.ambient.color = src__Math__Math.Color3.gray(0.4);
    _$6.ambient.texture2D = tableColor;
    _$6.specular.color = src__Math__Math.Color3.white();
    _$6.specular.shininess = 80.0;
    _$6.specular.texture2D = tableSpen;
    _$6.environment = this[_environment];
    _$6.reflection.texture2D = tableSpen;
    _$6.bump.texture2D = td.textureLoader.load2DFromFile("resources/tableNormal.png");
    _$6.lights.add(topLight);
    _$6.lights.add(bollomLight);
    this[_tableTech] = _$6;
  }).prototype = examples__chess__main.Materials.prototype;
  dart.addTypeTests(examples__chess__main.Materials);
  dart.setGetterSignature(examples__chess__main.Materials, () => ({
    __proto__: dart.getGetters(examples__chess__main.Materials.__proto__),
    environment: src__Textures__Textures.TextureCube,
    whitePieceTech: src__Techniques__Techniques.MaterialLight,
    blackPieceTech: src__Techniques__Techniques.MaterialLight,
    selectedWhitePieceTech: src__Techniques__Techniques.MaterialLight,
    selectedBlackPieceTech: src__Techniques__Techniques.MaterialLight,
    whiteTileTech: src__Techniques__Techniques.MaterialLight,
    blackTileTech: src__Techniques__Techniques.MaterialLight,
    selectedWhiteTileTech: src__Techniques__Techniques.MaterialLight,
    selectedBlackTileTech: src__Techniques__Techniques.MaterialLight,
    edgeTechs: core.List$(src__Techniques__Techniques.MaterialLight),
    tableTech: src__Techniques__Techniques.MaterialLight
  }));
  dart.setFieldSignature(examples__chess__main.Materials, () => ({
    __proto__: dart.getFields(examples__chess__main.Materials.__proto__),
    [_environment]: dart.fieldType(src__Textures__Textures.TextureCube),
    [_whitePieceTech]: dart.fieldType(src__Techniques__Techniques.MaterialLight),
    [_blackPieceTech]: dart.fieldType(src__Techniques__Techniques.MaterialLight),
    [_selectedWhitePieceTech]: dart.fieldType(src__Techniques__Techniques.MaterialLight),
    [_selectedBlackPieceTech]: dart.fieldType(src__Techniques__Techniques.MaterialLight),
    [_whiteTileTech]: dart.fieldType(src__Techniques__Techniques.MaterialLight),
    [_blackTileTech]: dart.fieldType(src__Techniques__Techniques.MaterialLight),
    [_selectedWhiteTileTech]: dart.fieldType(src__Techniques__Techniques.MaterialLight),
    [_selectedBlackTileTech]: dart.fieldType(src__Techniques__Techniques.MaterialLight),
    [_edgeTechs]: dart.fieldType(ListOfMaterialLight()),
    [_tableTech]: dart.fieldType(src__Techniques__Techniques.MaterialLight)
  }));
  examples__chess__main.Pawn = class Pawn extends examples__chess__main.Piece {};
  (examples__chess__main.Pawn.new = function(td, board, white, row, column, angle, scalar) {
    examples__chess__main.Pawn.__proto__.__.call(this, board, white, row, column, angle, scalar);
    if (examples__chess__main.Pawn._shapeEntity == null) {
      examples__chess__main.Pawn._shapeEntity = new src__Core__Core.Entity.new({name: "pawn shape"});
      FutureOfNull()._check(src__IO__IO.ObjType.fromFile("./resources/pawn.obj", td.textureLoader).then(core.Null, dart.fn(loadedEntity => {
        examples__chess__main.Pawn._shapeEntity.shape = loadedEntity.shape;
      }, EntityToNull())));
    }
    this.name = (dart.test(this[_white]) ? "white" : "black") + (" pawn " + dart.str(this[_column]));
    this.children.add(examples__chess__main.Pawn._shapeEntity);
  }).prototype = examples__chess__main.Pawn.prototype;
  dart.addTypeTests(examples__chess__main.Pawn);
  dart.defineLazy(examples__chess__main.Pawn, {
    /*examples__chess__main.Pawn._shapeEntity*/get _shapeEntity() {
      return null;
    },
    set _shapeEntity(_) {}
  });
  examples__chess__main.Queen = class Queen extends examples__chess__main.Piece {};
  (examples__chess__main.Queen.new = function(td, board, white, row, column, angle, scalar) {
    examples__chess__main.Queen.__proto__.__.call(this, board, white, row, column, angle, scalar);
    if (examples__chess__main.Queen._shapeEntity == null) {
      examples__chess__main.Queen._shapeEntity = new src__Core__Core.Entity.new({name: "queen shape"});
      FutureOfNull()._check(src__IO__IO.ObjType.fromFile("./resources/queen.obj", td.textureLoader).then(core.Null, dart.fn(loadedEntity => {
        examples__chess__main.Queen._shapeEntity.shape = loadedEntity.shape;
      }, EntityToNull())));
    }
    this.name = (dart.test(this[_white]) ? "white" : "black") + (" queen " + dart.str(this[_column]));
    this.children.add(examples__chess__main.Queen._shapeEntity);
  }).prototype = examples__chess__main.Queen.prototype;
  dart.addTypeTests(examples__chess__main.Queen);
  dart.defineLazy(examples__chess__main.Queen, {
    /*examples__chess__main.Queen._shapeEntity*/get _shapeEntity() {
      return null;
    },
    set _shapeEntity(_) {}
  });
  examples__chess__main.Rook = class Rook extends examples__chess__main.Piece {};
  (examples__chess__main.Rook.new = function(td, board, white, row, column, angle, scalar) {
    examples__chess__main.Rook.__proto__.__.call(this, board, white, row, column, angle, scalar);
    if (examples__chess__main.Rook._shapeEntity == null) {
      examples__chess__main.Rook._shapeEntity = new src__Core__Core.Entity.new({name: "rook shape"});
      FutureOfNull()._check(src__IO__IO.ObjType.fromFile("./resources/rook.obj", td.textureLoader).then(core.Null, dart.fn(loadedEntity => {
        examples__chess__main.Rook._shapeEntity.shape = loadedEntity.shape;
      }, EntityToNull())));
    }
    this.name = (dart.test(this[_white]) ? "white" : "black") + (" rook " + dart.str(this[_column]));
    this.children.add(examples__chess__main.Rook._shapeEntity);
  }).prototype = examples__chess__main.Rook.prototype;
  dart.addTypeTests(examples__chess__main.Rook);
  dart.defineLazy(examples__chess__main.Rook, {
    /*examples__chess__main.Rook._shapeEntity*/get _shapeEntity() {
      return null;
    },
    set _shapeEntity(_) {}
  });
  examples__chess__main.Tile = class Tile extends src__Core__Core.Entity {
    [_updateTech]() {
      if (dart.test(this[_white])) {
        if (dart.test(this[_selected]))
          this.technique = this[_board].materials.selectedWhiteTileTech;
        else
          this.technique = this[_board].materials.whiteTileTech;
      } else {
        if (dart.test(this[_selected]))
          this.technique = this[_board].materials.selectedBlackTileTech;
        else
          this.technique = this[_board].materials.blackTileTech;
      }
    }
  };
  (examples__chess__main.Tile.new = function(td, board, white, row, column) {
    this[_mover] = null;
    this[_selected] = null;
    this[_board] = board;
    this[_white] = white;
    this[_row] = row;
    this[_column] = column;
    examples__chess__main.Tile.__proto__.new.call(this);
    if (examples__chess__main.Tile._shapeEntity == null) {
      examples__chess__main.Tile._shapeEntity = new src__Core__Core.Entity.new({name: "tile shape"});
      FutureOfNull()._check(src__IO__IO.ObjType.fromFile("./resources/tile.obj", td.textureLoader).then(core.Null, dart.fn(loadedEntity => {
        examples__chess__main.Tile._shapeEntity.shape = loadedEntity.shape;
      }, EntityToNull())));
    }
    this.mover = src__Movers__Movers.Constant.translate(this[_row][$toDouble]() - 4.5, 0.0, this[_column][$toDouble]() - 4.5);
    this[_selected] = false;
    this.name = (dart.test(this[_white]) ? "white" : "black") + (" tile " + dart.str(this[_row]) + " " + dart.str(this[_column]));
    this.children.add(examples__chess__main.Tile._shapeEntity);
    this[_updateTech]();
  }).prototype = examples__chess__main.Tile.prototype;
  dart.addTypeTests(examples__chess__main.Tile);
  dart.setMethodSignature(examples__chess__main.Tile, () => ({
    __proto__: dart.getMethods(examples__chess__main.Tile.__proto__),
    [_updateTech]: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(examples__chess__main.Tile, () => ({
    __proto__: dart.getFields(examples__chess__main.Tile.__proto__),
    [_row]: dart.fieldType(core.int),
    [_column]: dart.fieldType(core.int),
    [_mover]: dart.fieldType(src__Movers__Movers.Constant),
    [_board]: dart.fieldType(examples__chess__main.Board),
    [_white]: dart.fieldType(core.bool),
    [_selected]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(examples__chess__main.Tile, {
    /*examples__chess__main.Tile._shapeEntity*/get _shapeEntity() {
      return null;
    },
    set _shapeEntity(_) {}
  });
  dart.trackLibraries("web/examples/chess/main.ddc", {
    "examples\\chess\\main.dart": examples__chess__main
  }, '{"version":3,"sourceRoot":"","sources":["main.dart","piece.dart","bishop.dart","board.dart","edge.dart","king.dart","knight.dart","materials.dart","pawn.dart","queen.dart","rook.dart","tile.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA+BE,gBAAI,4BAAgB,CAAC;aACV,sBAAC;qBACO;gBACL,GAAG;aACN,sBAAC,qFACR,gGACA;aACO,sBAAC,mGACR,iDACA,8FACA;aACO,sBAAC;gBACE,GAAG;aACN,sBAAC,qFACR,4FACA,0CACA;aACO,sBAAC,iFACR;AAEF,eAAK,IAAI,CAAC,uDAAU;EACxB;;AAKE,QAAoB,KAAK,AAAI,gCAA0B,CAAC;AAExD,QAAkB,SAAS,IAAI,iCAAiB,SACvC,IAAI,6BAAY,CAAC;kBACtB,IAAI,mCAAkB,SAAQ,EAAE,UAAU;oCACd,CAAM,kBAAI;oCACV;yBACX;;cACjB,AAAI,kCAAqB,CAAC,MAAM,MAAM,OACtC,AAAI,sCAAyB,CAAC,KAAK,KAAK;AAG5C,QAAkB,SAAS,IAAI,iCAAiB;IAA9B,oBACD;AAEjB,QAAM,QAAQ,IAAI,+BAAK,CAAC,EAAE;AAE1B,QAAiB,SAAS,AAAI,oCAAuB,CAAC,KAAK,UAAU,YAAY;IAAhE,gBACJ,MAAM;IADF,gBAEJ,MAAM;AAEnB,QAAkB,YAAY,IAAI,kCAAiB;IAAjC,mBACL,MAAM;IADD,mBAEL,MAAM;IAFD,uBAGD,KAAK;AAEtB,MAAE,MAAM,GAAG,IAAI,gCAAe,UAAS,qBAAC,MAAM,EAAE,SAAS;AAEzD,IAAO,sBAAO,CAAC,EAAE;EACnB;;;;;;;;;;;;;;;AC5DI,kBAAW,OAAO,GAChB,AAAI,AAAkF,AACjD,iCADX,CAAC,AAAoB,UAAX,WAAS,KAAG,KAAK,KAAK,AAAuB,aAAX,WAAS,KAAG,UAClF,AAAI,+BAAoB,CAAC,YAAW,QACpC,AAAI,6BAAkB,CAAC,aAAY,EAAE,aAAY,EAAE,aAAY;IACnE;;AAGE,oBAAI,YAAW,GAAE;AACf,sBAAI,eAAc;AAChB,wBAAc,GAAG,YAAW,UAAU,uBAAuB;;AAC1D,wBAAc,GAAG,YAAW,UAAU,eAAe;aACrD;AACL,sBAAI,eAAc;AAChB,wBAAc,GAAG,YAAW,UAAU,uBAAuB;;AAC1D,wBAAc,GAAG,YAAW,UAAU,eAAe;;IAE9D;;;IAnCgB,YAAM;IAGjB,eAAS;IACT,WAAK;IACL,eAAS;IAED,YAAM;IAAO,YAAM;IAAO,UAAI;IAAO,aAAO;IAAO,YAAM;IAAO,aAAO;;AAClF,gBAAW,GAAG,IAAI,gCAAe;AACjC,cAAU,GAAG,YAAW;AACxB,mBAAc,GAAG;AACjB,eAAU,GAAG;AACb,mBAAc,GAAG;AAEjB,yBAAoB;AACpB,qBAAgB;EAClB;;;;;;;;;;;;;;;;;;;;;+CClBO,EAAsB,EAAE,KAAW,EAAE,KAAU,EAAE,GAAO,EAAE,MAAU,EAAE,KAAY,EAAE,MAAa;AACtG,yDAAQ,KAAK,EAAE,KAAK,EAAE,GAAG,EAAE,MAAM,EAAE,KAAK,EAAE,MAAM;AAChD,QAAI,yCAAY,IAAI,MAAM;AACxB,+CAAY,GAAG,IAAI,0BAAgB,QAAO;AAC1C,+CAAU,SAAS,CAAC,0BAA0B,EAAE,cAAc,MACxD,YAAC,QAAC,YAA6B;AACjC,iDAAY,MAAM,GAAG,YAAY,MAAM;;;AAI7C,aAAS,GAAgC,WAA5B,YAAW,IAAC,UAAQ,YAAS,sBAAW,aAAY;AACjE,iBAAa,IAAI,CAAC,yCAAY;EAChC;;;MAdwB,yCAAY;;;;;;;;;;;;YCsET,YAAU;;WAE3B,KAAW;AACnB,mBAAY,MAAI,CAAC,KAAK;AACtB,mBAAa,IAAI,CAAC,KAAK;IACzB;;8CAtEM,EAAsB;IAJhB,aAAO;IACR,YAAM;IACP,WAAK;;AAGb,iBAAY,GAAG;AACf,gBAAW,GAAG;AACd,eAAU,GAAG,IAAI,mCAAS,CAAC,EAAE;AAC7B,aAAS,GAAG;AAYZ,aAAS,IAAI,GAAG,AAAE,CAAD,IAAI,GAAG,CAAC,IAAI;AAC3B,eAAS,IAAI,GAAG,AAAE,CAAD,IAAI,GAAG,CAAC,IAAI;AAC3B,YAAK,OAAO,IAAI,8BAAI,CAAC,EAAE,EAAE,MAAM,AAAM,CAAJ,AAAC,CAAA,GAAC,CAAC,WAAE,OAAM,GAAG,CAAC,EAAE,CAAC;AACnD,oBAAW,MAAI,CAAC,IAAI;AACpB,qBAAa,IAAI,CAAC,IAAI;;;AAI1B,aAAS,IAAI,GAAG,AAAE,CAAD,IAAI,GAAG,CAAC,IAAI;AAC3B,gBAAS,CAAC,IAAI,8BAAI,CAAC,EAAE,EAAE,MAAM,MAAM,GAAG,CAAC,EAAE,KAAK;AAC9C,gBAAS,CAAC,IAAI,8BAAI,CAAC,EAAE,EAAE,MAAM,OAAO,GAAG,CAAC,EAAE,KAAK;;AAGjD,cAAS,CAAC,IAAI,8BAAI,CAAC,EAAE,EAAE,MAAM,MAAM,GAAG,GAAG,KAAK;AAC9C,cAAS,CAAC,IAAI,8BAAI,CAAC,EAAE,EAAE,MAAM,MAAM,GAAG,GAAG,KAAK;AAC9C,cAAS,CAAC,IAAI,8BAAI,CAAC,EAAE,EAAE,MAAM,OAAO,GAAG,GAAG,KAAK;AAC/C,cAAS,CAAC,IAAI,8BAAI,CAAC,EAAE,EAAE,MAAM,OAAO,GAAG,GAAG,KAAK;AAE/C,cAAS,CAAC,IAAI,gCAAM,CAAC,EAAE,EAAE,MAAM,MAAM,GAAG,GAAG,KAAK;AAChD,cAAS,CAAC,IAAI,gCAAM,CAAC,EAAE,EAAE,MAAM,MAAM,GAAG,GAAQ,iBAAE,EAAE;AACpD,cAAS,CAAC,IAAI,gCAAM,CAAC,EAAE,EAAE,MAAM,OAAO,GAAG,GAAG,KAAK;AACjD,cAAS,CAAC,IAAI,gCAAM,CAAC,EAAE,EAAE,MAAM,OAAO,GAAG,GAAQ,iBAAE,EAAE;AAErD,cAAS,CAAC,IAAI,gCAAM,CAAC,EAAE,EAAE,MAAM,MAAM,GAAG,GAAG,CAAM,kBAAI,EAAE;AACvD,cAAS,CAAC,IAAI,gCAAM,CAAC,EAAE,EAAE,MAAM,MAAM,GAAG,GAAQ,kBAAI,EAAE;AACtD,cAAS,CAAC,IAAI,gCAAM,CAAC,EAAE,EAAE,MAAM,OAAO,GAAG,GAAG,CAAM,kBAAI,EAAE;AACxD,cAAS,CAAC,IAAI,gCAAM,CAAC,EAAE,EAAE,MAAM,OAAO,GAAG,GAAQ,kBAAI,EAAE;AAEvD,cAAS,CAAC,IAAI,+BAAK,CAAC,EAAE,EAAE,MAAM,MAAM,GAAG,GAAG,KAAK;AAC/C,cAAS,CAAC,IAAI,8BAAI,CAAC,EAAE,EAAE,MAAM,MAAM,GAAG,GAAQ,kBAAI,EAAE;AACpD,cAAS,CAAC,IAAI,+BAAK,CAAC,EAAE,EAAE,MAAM,OAAO,GAAG,GAAG,KAAK;AAChD,cAAS,CAAC,IAAI,8BAAI,CAAC,EAAE,EAAE,MAAM,OAAO,GAAG,GAAQ,kBAAI,EAAE;AAErD,iBAAa,IAAI,CAAC,IAAI,8BAAI,CAAC,EAAE,EAAE,MAAM,KAAK,KAAK,KAAK;AACpD,iBAAa,IAAI,CAAC,IAAI,8BAAI,CAAC,EAAE,EAAE,MAAM,KAAK,KAAU,kBAAI,EAAE;AAC1D,iBAAa,IAAI,CAAC,IAAI,8BAAI,CAAC,EAAE,EAAE,MAAM,KAAK,KAAU,iBAAE,EAAE;AACxD,iBAAa,IAAI,CAAC,IAAI,8BAAI,CAAC,EAAE,EAAE,MAAM,KAAK,KAAU,gBAAK,EAAE;AAE3D,iBAAa,IAAI,CAAC,IAAI,0BAAgB,SAC7B,AAAO,wBAAI,SAAQ,YACpB,WAAU,YAAW,SACpB,IAAI,gCAAe,CACxB,AAAI,AAAsC,AACN,iCADV,CAAC,KAAK,CAAC,KAAK,UACtC,AAAI,+BAAoB,CAAC,CAAM,kBAAI,QACnC,AAAI,6BAAkB,CAAC,MAAM,MAAM;EAGzC;;;;;;;;;;;;;;;;;6CChEK,EAAsB,SAAe,EAAS,EAAE,EAAS,EAAE,KAAY,EAAE,YAAgB;IAA5D,YAAM;;AACtC,QAAI,uCAAY,IAAI,MAAM;AACxB,6CAAY,GAAG,IAAI,0BAAgB,QAAO;AAC1C,+CAAU,SAAS,CAAC,wBAAwB,EAAE,cAAc,MACtD,YAAC,QAAC,YAA6B;AACjC,+CAAY,MAAM,GAAG,YAAY,MAAM;;;AAI7C,cAAU,GAAG,IAAI,gCAAe,CAC9B,AAAI,AAA2C,iCAArB,CAAG,aAAF,EAAE,IAAC,KAAK,KAAO,aAAF,EAAE,IAAC,UAC3C,AAAI,+BAAoB,CAAC,KAAK;AAChC,aAAS,GAAG;AACZ,iBAAa,IAAI,CAAC,uCAAY;AAC9B,kBAAc,GAAG,YAAW,UAAU,UAAU,QAAC,YAAY;EAC/D;;;;;;;MAnBwB,uCAAY;;;;;;6CCE/B,EAAsB,EAAE,KAAW,EAAE,KAAU,EAAE,GAAO,EAAE,MAAU,EAAE,KAAY,EAAE,MAAa;AACpG,uDAAQ,KAAK,EAAE,KAAK,EAAE,GAAG,EAAE,MAAM,EAAE,KAAK,EAAE,MAAM;AAChD,QAAI,uCAAY,IAAI,MAAM;AACxB,6CAAY,GAAG,IAAI,0BAAgB,QAAO;AAC1C,+CAAU,SAAS,CAAC,wBAAwB,EAAE,cAAc,MACtD,YAAC,QAAC,YAA6B;AACjC,+CAAY,MAAM,GAAG,YAAY,MAAM;;;AAI7C,aAAS,GAAgC,WAA5B,YAAW,IAAC,UAAQ,YAAS,oBAAS,aAAY;AAC/D,iBAAa,IAAI,CAAC,uCAAY;EAChC;;;MAdwB,uCAAY;;;;;;+CCE7B,EAAsB,EAAE,KAAW,EAAE,KAAU,EAAE,GAAO,EAAE,MAAU,EAAE,KAAY,EAAE,MAAa;AACtG,yDAAQ,KAAK,EAAE,KAAK,EAAE,GAAG,EAAE,MAAM,EAAE,KAAK,EAAE,MAAM;AAChD,QAAI,yCAAY,IAAI,MAAM;AACxB,+CAAY,GAAG,IAAI,0BAAgB,QAAO;AAC1C,+CAAU,SAAS,CAAC,0BAA0B,EAAE,cAAc,MACxD,YAAC,QAAC,YAA6B;AACjC,iDAAY,MAAM,GAAG,YAAY,MAAM;;;AAI7C,aAAS,GAAgC,WAA5B,YAAW,IAAC,UAAQ,YAAS,sBAAW,aAAY;AACjE,iBAAa,IAAI,CAAC,yCAAY;EAChC;;;MAdwB,yCAAY;;;;;;;;;;;;;;;;;YC6II,mBAAiB;;;YAEV,sBAAoB;;;YACpB,sBAAoB;;;YACZ,8BAA4B;;;YAC5B,8BAA4B;;;YAErC,qBAAmB;;;YACnB,qBAAmB;;;YACX,6BAA2B;;;YAC3B,6BAA2B;;;YAEjC,iBAAe;;;YACrB,iBAAe;;;kDA7I/C,EAAsB;IAZX,kBAAY;IACR,qBAAe;IACf,qBAAe;IACf,6BAAuB;IACvB,6BAAuB;IACvB,oBAAc;IACd,oBAAc;IACd,4BAAsB;IACtB,4BAAsB;IAChB,gBAAU;IAChB,gBAAU;AAGjC,sBAAiB,GAAG,EAAE,cAAc,iBAAiB,CAAC;AAEtD,QAAmB,WAAW,IAAI,mCAAkB;IAAjC,iBACP,0BAAW,CAAC,KAAK,KAAK;IADf,yBAEH,2BAAY,CAAC,KAAK,CAAC,KAAK,CAAC;AAEzC,QAAmB,cAAc,IAAI,mCAAkB;IAApC,oBACP,0BAAW,CAAC,KAAK,KAAK;IADf,4BAEH,2BAAY,CAAC,KAAK,KAAK;AAEvC,QAAY,kBAAkB,AAAI,2BAAgB,CAAC;AAEnD,gBAAuB,6CAAwB;sBAC3B,AAAI,2BAAgB,CAAC;sBACrB,AAAI,2BAAgB,CAAC;uBACpB,AAAI,4BAAiB;2BACjB;oBACP,kBAAiB;yBACZ,eAAe;iBACvB,QAAQ;iBACR,WAAW;IAR1B,qBAAoB;AAUpB,iBAAuB,6CAAwB;uBAC3B,AAAI,2BAAgB,CAAC;uBACrB,AAAI,2BAAgB,CAAC;wBACpB,AAAI,4BAAiB;4BACjB;qBACP,kBAAiB;0BACZ,eAAe;kBACvB,QAAQ;kBACR,WAAW;IAR1B,qBAAoB;AAUpB,kBAA+B,6CAAwB;wBACnC,AAAI,0BAAW,CAAC,KAAK,KAAK;wBAC1B,AAAI,0BAAW,CAAC,KAAK,KAAK;yBACzB,AAAI,4BAAiB;6BACjB;sBACP,kBAAiB;2BACZ,eAAe;mBACvB,QAAQ;mBACR,WAAW;IAR1B,6BAA4B;AAU5B,kBAA+B,6CAAwB;wBACnC,AAAI,0BAAW,CAAC,KAAK,KAAK;wBAC1B,AAAI,0BAAW,CAAC,KAAK,KAAK;yBACzB,AAAI,4BAAiB;6BACjB;sBACP,kBAAiB;2BACZ,eAAe;mBACvB,QAAQ;mBACR,WAAW;IAR1B,6BAA4B;AAU5B,QAAY,iBAAiB,AAAI,2BAAgB,CAAC;AAElD,kBAAsB,6CAAwB;wBAC1B,AAAI,2BAAgB,CAAC;wBACrB,AAAI,2BAAgB,CAAC;yBACpB,AAAI,4BAAiB;6BACjB;sBACP,kBAAiB;2BACZ,cAAc;mBACtB,QAAQ;mBACR,WAAW;IAR1B,oBAAmB;AAUnB,kBAAsB,6CAAwB;wBAC1B,AAAI,2BAAgB,CAAC;wBACrB,AAAI,2BAAgB,CAAC;yBACpB,AAAI,4BAAiB;6BACjB;sBACP,kBAAiB;2BACZ,cAAc;mBACtB,QAAQ;mBACR,WAAW;IAR1B,oBAAmB;AAUnB,kBAA8B,6CAAwB;wBAClC,AAAI,0BAAW,CAAC,KAAK,KAAK;wBAC1B,AAAI,0BAAW,CAAC,KAAK,KAAK;yBACzB,AAAI,4BAAiB;6BACjB;sBACP,kBAAiB;2BACZ,cAAc;mBACtB,QAAQ;mBACR,WAAW;IAR1B,4BAA2B;AAU3B,kBAA8B,6CAAwB;wBAClC,AAAI,0BAAW,CAAC,KAAK,KAAK;wBAC1B,AAAI,0BAAW,CAAC,KAAK,KAAK;yBACzB,AAAI,4BAAiB;6BACjB;sBACP,kBAAiB;2BACZ,cAAc;mBACtB,QAAQ;mBACR,WAAW;IAR1B,4BAA2B;AAU3B,oBAAe,GAAG;AAClB,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,GAAG,EAAE,CAAC,EAAE;AAC1B,UAAmB,UAAU,EAAE,cAAc,eAAe,CAAC,4BAAgB,CAAC;AAC9E,sBAAe,MAAI;oBAAC,6CAAwB;0BACxB,AAAI,2BAAgB,CAAC;8BACjB,OAAO;0BACX,AAAI,2BAAgB,CAAC;8BACjB,OAAO;2BACV,AAAI,4BAAiB;+BACjB;wBACP,kBAAiB;6BACZ,AAAI,2BAAgB,CAAC;qBAC7B,QAAQ;qBACR,WAAW;;;;AAG5B,QAAmB,aAAa,EAAE,cAAc,eAAe,CAAC;AAChE,QAAmB,YAAY,EAAE,cAAc,eAAe,CAAC;AAC/D,kBAAkB,6CAAwB;wBACtB,AAAI,2BAAgB,CAAC;4BACjB,UAAU;wBACd,AAAI,2BAAgB,CAAC;4BACjB,UAAU;yBACb,AAAI,4BAAiB;6BACjB;6BACA,SAAS;sBAChB,kBAAiB;+BACR,SAAS;yBACf,EAAE,cAAc,eAAe,CAAC;mBACtC,QAAQ;mBACR,WAAW;IAZ1B,gBAAe;EAajB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6CCzIK,EAAsB,EAAE,KAAW,EAAE,KAAU,EAAE,GAAO,EAAE,MAAU,EAAE,KAAY,EAAE,MAAa;AACpG,uDAAQ,KAAK,EAAE,KAAK,EAAE,GAAG,EAAE,MAAM,EAAE,KAAK,EAAE,MAAM;AAChD,QAAI,uCAAY,IAAI,MAAM;AACxB,6CAAY,GAAG,IAAI,0BAAgB,QAAO;AAC1C,+CAAU,SAAS,CAAC,wBAAwB,EAAE,cAAc,MACtD,YAAC,QAAC,YAA6B;AACjC,+CAAY,MAAM,GAAG,YAAY,MAAM;;;AAI7C,aAAS,GAAgC,WAA5B,YAAW,IAAC,UAAQ,YAAS,oBAAS,aAAY;AAC/D,iBAAa,IAAI,CAAC,uCAAY;EAChC;;;MAdwB,uCAAY;;;;;;8CCE9B,EAAsB,EAAE,KAAW,EAAE,KAAU,EAAE,GAAO,EAAE,MAAU,EAAE,KAAY,EAAE,MAAa;AACrG,wDAAQ,KAAK,EAAE,KAAK,EAAE,GAAG,EAAE,MAAM,EAAE,KAAK,EAAE,MAAM;AAChD,QAAI,wCAAY,IAAI,MAAM;AACxB,8CAAY,GAAG,IAAI,0BAAgB,QAAO;AAC1C,+CAAU,SAAS,CAAC,yBAAyB,EAAE,cAAc,MACvD,YAAC,QAAC,YAA6B;AACjC,gDAAY,MAAM,GAAG,YAAY,MAAM;;;AAI7C,aAAS,GAAgC,WAA5B,YAAW,IAAC,UAAQ,YAAS,qBAAU,aAAY;AAChE,iBAAa,IAAI,CAAC,wCAAY;EAChC;;;MAdwB,wCAAY;;;;;;6CCE/B,EAAsB,EAAE,KAAW,EAAE,KAAU,EAAE,GAAO,EAAE,MAAU,EAAE,KAAY,EAAE,MAAa;AACpG,uDAAQ,KAAK,EAAE,KAAK,EAAE,GAAG,EAAE,MAAM,EAAE,KAAK,EAAE,MAAM;AAChD,QAAI,uCAAY,IAAI,MAAM;AACxB,6CAAY,GAAG,IAAI,0BAAgB,QAAO;AAC1C,+CAAU,SAAS,CAAC,wBAAwB,EAAE,cAAc,MACtD,YAAC,QAAC,YAA6B;AACjC,+CAAY,MAAM,GAAG,YAAY,MAAM;;;AAI7C,aAAS,GAAgC,WAA5B,YAAW,IAAC,UAAQ,YAAS,oBAAS,aAAY;AAC/D,iBAAa,IAAI,CAAC,uCAAY;EAChC;;;MAdwB,uCAAY;;;;;;;AC2BlC,oBAAI,YAAW,GAAE;AACf,sBAAI,eAAc;AAChB,wBAAc,GAAG,YAAW,UAAU,sBAAsB;;AACzD,wBAAc,GAAG,YAAW,UAAU,cAAc;aACpD;AACL,sBAAI,eAAc;AAChB,wBAAc,GAAG,YAAW,UAAU,sBAAsB;;AACzD,wBAAc,GAAG,YAAW,UAAU,cAAc;;IAE7D;;6CA3BK,EAAsB;IALX,YAAM;IAGjB,eAAS;IAEoB,YAAM;IAAO,YAAM;IAAO,UAAI;IAAO,aAAO;;AAC5E,QAAI,uCAAY,IAAI,MAAM;AACxB,6CAAY,GAAG,IAAI,0BAAgB,QAAO;AAC1C,+CAAU,SAAS,CAAC,wBAAwB,EAAE,cAAc,MACtD,YAAC,QAAC,YAA6B;AACjC,+CAAY,MAAM,GAAG,YAAY,MAAM;;;AAI7C,cAAU,GAAG,AAAI,sCAAyB,CAAC,AAAoB,UAAX,WAAS,KAAG,KAAK,KAAK,AAAuB,aAAX,WAAS,KAAG;AAClG,mBAAc,GAAG;AACjB,aAAS,GAAgC,WAA5B,YAAW,IAAC,UAAQ,YAAS,oBAAS,UAAS,mBAAI,aAAY;AAC5E,iBAAa,IAAI,CAAC,uCAAY;AAE9B,qBAAgB;EAClB;;;;;;;;;;;;;;;;MAxBwB,uCAAY","file":"main.ddc.js"}');
  // Exports:
  return {
    examples__chess__main: examples__chess__main
  };
});

//# sourceMappingURL=main.ddc.js.map
