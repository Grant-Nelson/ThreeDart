define(['dart_sdk', 'web/common/checkGroup', 'packages/ThreeDart/src/Core/Bindable', 'packages/ThreeDart/src/Math/Color3', 'packages/ThreeDart/src/Input/Button', 'packages/ThreeDart/src/Events/Changable', 'packages/OpenSimplexNoiseDart/OpenSimplexNoise'], function(dart_sdk, checkGroup, Bindable, Color3, Button, Changable, OpenSimplexNoise) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const common__common = checkGroup.common__common;
  const src__Core__Core = Bindable.src__Core__Core;
  const src__Scenes__Scenes = Bindable.src__Scenes__Scenes;
  const src__Techniques__Techniques = Bindable.src__Techniques__Techniques;
  const src__Movers__Movers = Bindable.src__Movers__Movers;
  const src__Lights__Lights = Bindable.src__Lights__Lights;
  const src__Textures__Textures = Bindable.src__Textures__Textures;
  const src__Data__Data = Bindable.src__Data__Data;
  const src__Shapes__Shapes = Bindable.src__Shapes__Shapes;
  const src__Math__Math = Color3.src__Math__Math;
  const src__Input__Input = Button.src__Input__Input;
  const src__Events__Events = Changable.src__Events__Events;
  const src__OpenSimplexNoise = OpenSimplexNoise.src__OpenSimplexNoise;
  const _root = Object.create(null);
  const examples__craft__main = Object.create(_root);
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $_get = dartx._get;
  const $pushState = dartx.pushState;
  const $toDouble = dartx.toDouble;
  const $modulo = dartx['%'];
  const $add = dartx.add;
  const $_set = dartx._set;
  const $clear = dartx.clear;
  const $length = dartx.length;
  const $toInt = dartx.toInt;
  const $fillRange = dartx.fillRange;
  const $isEmpty = dartx.isEmpty;
  const $abs = dartx.abs;
  const $floor = dartx.floor;
  const $truncate = dartx.truncate;
  const $removeLast = dartx.removeLast;
  const $remove = dartx.remove;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let TimerToNull = () => (TimerToNull = dart.constFn(dart.fnType(core.Null, [async.Timer])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let JSArrayOfEntity = () => (JSArrayOfEntity = dart.constFn(_interceptors.JSArray$(src__Core__Core.Entity)))();
  let ListOfEntity = () => (ListOfEntity = dart.constFn(core.List$(src__Core__Core.Entity)))();
  let JSArrayOfRegion3 = () => (JSArrayOfRegion3 = dart.constFn(_interceptors.JSArray$(src__Math__Math.Region3)))();
  let JSArrayOfHitRegion = () => (JSArrayOfHitRegion = dart.constFn(_interceptors.JSArray$(src__Math__Math.HitRegion)))();
  let JSArrayOfbool = () => (JSArrayOfbool = dart.constFn(_interceptors.JSArray$(core.bool)))();
  let ListOfRegion3 = () => (ListOfRegion3 = dart.constFn(core.List$(src__Math__Math.Region3)))();
  let ListOfHitRegion = () => (ListOfHitRegion = dart.constFn(core.List$(src__Math__Math.HitRegion)))();
  let ListOfbool = () => (ListOfbool = dart.constFn(core.List$(core.bool)))();
  let IdentityMapOfint$CubeData = () => (IdentityMapOfint$CubeData = dart.constFn(_js_helper.IdentityMap$(core.int, examples__craft__main.CubeData)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let IdentityMapOfint$ListOfint = () => (IdentityMapOfint$ListOfint = dart.constFn(_js_helper.IdentityMap$(core.int, ListOfint())))();
  let JSArrayOfMaterialLight = () => (JSArrayOfMaterialLight = dart.constFn(_interceptors.JSArray$(src__Techniques__Techniques.MaterialLight)))();
  let ListOfTexture2D = () => (ListOfTexture2D = dart.constFn(core.List$(src__Textures__Textures.Texture2D)))();
  let MapOfint$CubeData = () => (MapOfint$CubeData = dart.constFn(core.Map$(core.int, examples__craft__main.CubeData)))();
  let MapOfint$ListOfint = () => (MapOfint$ListOfint = dart.constFn(core.Map$(core.int, ListOfint())))();
  let ListOfMaterialLight = () => (ListOfMaterialLight = dart.constFn(core.List$(src__Techniques__Techniques.MaterialLight)))();
  let EventArgsToNull = () => (EventArgsToNull = dart.constFn(dart.fnType(core.Null, [src__Events__Events.EventArgs])))();
  let JSArrayOfMover = () => (JSArrayOfMover = dart.constFn(_interceptors.JSArray$(src__Movers__Movers.Mover)))();
  let intAndintAndint__ToNull = () => (intAndintAndint__ToNull = dart.constFn(dart.fnType(core.Null, [core.int, core.int, core.int, core.int])))();
  let intAndintAndint__ToNull$ = () => (intAndintAndint__ToNull$ = dart.constFn(dart.fnType(core.Null, [core.int, core.int, core.int, ListOfint(), ListOfint()])))();
  let ListOfReducedShape = () => (ListOfReducedShape = dart.constFn(core.List$(src__Shapes__Shapes.ReducedShape)))();
  let JSArrayOfVertex = () => (JSArrayOfVertex = dart.constFn(_interceptors.JSArray$(src__Shapes__Shapes.Vertex)))();
  let intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  let intAndintAndintTovoid = () => (intAndintAndintTovoid = dart.constFn(dart.fnType(dart.void, [core.int, core.int, core.int])))();
  let JSArrayOfChunk = () => (JSArrayOfChunk = dart.constFn(_interceptors.JSArray$(examples__craft__main.Chunk)))();
  let ListOfChunk = () => (ListOfChunk = dart.constFn(core.List$(examples__craft__main.Chunk)))();
  examples__craft__main.main = function() {
    let _ = new common__common.ShellPage.new("3Dart Craft");
    _.addPar(JSArrayOfString().of(["This example is in development and may still have a few issues and glitches."]));
    _.addLargeCanvas("targetCanvas");
    _.addHeader(1, "About");
    _.addPar(JSArrayOfString().of(["3Dart Craft is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ", "to create a [voxel|https://en.wikipedia.org/wiki/Voxel] environment for browser driven video games. ", "This example has no server backing it so none of the changes are persisted. It would take very little ", "to turn this into a simple online game."]));
    _.addPar(JSArrayOfString().of(["«[Back to Examples List|../../]"]));
    _.addHeader(1, "Controls");
    _.addPar(JSArrayOfString().of(["• _Currently there are no controls for mobile browsers_"]));
    _.addPar(JSArrayOfString().of(["• *Esc* to release the mouse capture"]));
    _.addPar(JSArrayOfString().of(["• *W* or *Up arrow* to move forward"]));
    _.addPar(JSArrayOfString().of(["• *S* or *Down arrow* to move backward"]));
    _.addPar(JSArrayOfString().of(["• *A* or *Left arrow* to strife left"]));
    _.addPar(JSArrayOfString().of(["• *D* or *Right arror* to strife right"]));
    _.addPar(JSArrayOfString().of(["• *Space bar* to jump"]));
    _.addPar(JSArrayOfString().of(["• *Tab* cycles the block selected which can be placed"]));
    _.addPar(JSArrayOfString().of(["• *Shift-Tab* cycles the selection in the reverse direction"]));
    _.addPar(JSArrayOfString().of(["• *Left click* or *Q* removes the currently highlighted block"]));
    _.addPar(JSArrayOfString().of(["• *Right click* or *E* places the selected block on the highlighted block"]));
    _.addPar(JSArrayOfString().of(["• *O* to return the starting location"]));
    _.addHeader(1, "Help wanted");
    _.addPar(JSArrayOfString().of(["There is still much to be done, many cool new features, and several little bugs. ", "If you would like to contribute to this example, have an idea, find a bug, or just want to learn more about it, ", "check out the [project page|https://github.com/Grant-Nelson/ThreeDart/projects/1] or ", "[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/craft]."]));
    _.addPar(JSArrayOfString().of(["There are tons of ways to contribute. You could even start your own example. ", "See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."]));
    async.Timer.run(dart.fn(examples__craft__main.startCraft, VoidTovoid()));
  };
  let const$;
  let const$0;
  let const$1;
  let const$2;
  examples__craft__main.startCraft = function() {
    let td = src__Core__Core.ThreeDart.fromId("targetCanvas");
    let mats = new examples__craft__main.Materials.new(td);
    let gen = examples__craft__main._getGenerator();
    let world = new examples__craft__main.World.new(mats, gen);
    let player = new examples__craft__main.Player.new(td.userInput, world);
    let scene = new src__Scenes__Scenes.EntityPass.new({clearColor: src__Math__Math.Color4.new(0.576, 0.784, 0.929)});
    scene.onPreUpdate.add(dart.bind(world, 'update'));
    scene.camera.mover = player.camera;
    for (let entity of world.entities)
      scene.children.add(entity);
    scene.children.add(player.entity);
    world.player = player;
    td.scene = scene;
    player.goHome();
    async.Timer.periodic(const$ || (const$ = dart.const(new core.Duration.new({milliseconds: examples__craft__main.Constants.worldTickMs}))), dart.bind(world, 'worldTick'));
    async.Timer.periodic(const$0 || (const$0 = dart.const(new core.Duration.new({milliseconds: examples__craft__main.Constants.generateTickMs}))), dart.bind(world, 'generateTick'));
    async.Timer.periodic(const$1 || (const$1 = dart.const(new core.Duration.new({milliseconds: examples__craft__main.Constants.animationTickMs}))), dart.bind(world, 'animationTick'));
    async.Timer.periodic(const$2 || (const$2 = dart.const(new core.Duration.new({milliseconds: examples__craft__main.Constants.debugPrintTickMs}))), dart.fn(time => {
      let fps = td.fps[$toStringAsFixed](2);
      core.print(fps + " fps, " + dart.notNull(world.debugString()));
    }, TimerToNull()));
  };
  examples__craft__main._getGenerator = function() {
    let seed = -1;
    let seedQueryParam = core.Uri.base.queryParameters[$_get]("seed");
    if (seedQueryParam != null) {
      if (seedQueryParam === "test") return new examples__craft__main.TestGenerator.new();
      if (seedQueryParam === "checkers") return new examples__craft__main.CheckersGenerator.new();
      let l = core.int.tryParse(seedQueryParam);
      seed = l != null ? l : -1;
    }
    if (dart.notNull(seed) <= 0) {
      seed = math.Random.new().nextInt(examples__craft__main.Constants.maxSeed);
      let newUri = core.Uri.base.replace({queryParameters: new (IdentityMapOfString$dynamic()).from(["seed", dart.str(seed)])});
      html.window.history[$pushState](null, null, dart.toString(newUri));
    }
    return new examples__craft__main.RandomGenerator.new(seed);
  };
  examples__craft__main.BlockInfo = class BlockInfo extends core.Object {
    get x() {
      return this[x$];
    }
    set x(value) {
      super.x = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      super.y = value;
    }
    get z() {
      return this[z$];
    }
    set z(value) {
      super.z = value;
    }
    get chunkX() {
      return this[chunkX$];
    }
    set chunkX(value) {
      super.chunkX = value;
    }
    get chunkZ() {
      return this[chunkZ$];
    }
    set chunkZ(value) {
      super.chunkZ = value;
    }
    get chunk() {
      return this[chunk$];
    }
    set chunk(value) {
      super.chunk = value;
    }
    get worldX() {
      return dart.notNull(this.x) + dart.notNull(this.chunkX);
    }
    get worldZ() {
      return dart.notNull(this.z) + dart.notNull(this.chunkZ);
    }
    get above() {
      return new examples__craft__main.BlockInfo.new(this.x, dart.notNull(this.y) + 1, this.z, this.chunkX, this.chunkZ, this.chunk);
    }
    get below() {
      return new examples__craft__main.BlockInfo.new(this.x, dart.notNull(this.y) - 1, this.z, this.chunkX, this.chunkZ, this.chunk);
    }
    get right() {
      let x = dart.notNull(this.x) + 1;
      let chunkX = this.chunkX;
      let chunk = this.chunk;
      if (x >= examples__craft__main.Constants.chunkSideSize) {
        x = 0;
        chunkX = dart.notNull(chunkX) + examples__craft__main.Constants.chunkSideSize;
        chunk = chunk == null ? null : chunk.right;
      }
      return new examples__craft__main.BlockInfo.new(x, this.y, this.z, chunkX, this.chunkZ, chunk);
    }
    get left() {
      let x = dart.notNull(this.x) - 1;
      let chunkX = this.chunkX;
      let chunk = this.chunk;
      if (x < 0) {
        x = examples__craft__main.Constants.chunkSideSize - 1;
        chunkX = dart.notNull(chunkX) - examples__craft__main.Constants.chunkSideSize;
        chunk = chunk == null ? null : chunk.left;
      }
      return new examples__craft__main.BlockInfo.new(x, this.y, this.z, chunkX, this.chunkZ, chunk);
    }
    get front() {
      let z = dart.notNull(this.z) + 1;
      let chunkZ = this.chunkZ;
      let chunk = this.chunk;
      if (z >= examples__craft__main.Constants.chunkSideSize) {
        z = 0;
        chunkZ = dart.notNull(chunkZ) + examples__craft__main.Constants.chunkSideSize;
        chunk = chunk == null ? null : chunk.front;
      }
      return new examples__craft__main.BlockInfo.new(this.x, this.y, z, this.chunkX, chunkZ, chunk);
    }
    get back() {
      let z = dart.notNull(this.z) - 1;
      let chunkZ = this.chunkZ;
      let chunk = this.chunk;
      if (z < 0) {
        z = examples__craft__main.Constants.chunkSideSize - 1;
        chunkZ = dart.notNull(chunkZ) - examples__craft__main.Constants.chunkSideSize;
        chunk = chunk == null ? null : chunk.back;
      }
      return new examples__craft__main.BlockInfo.new(this.x, this.y, z, this.chunkX, chunkZ, chunk);
    }
    neighbor(region) {
      if (dart.equals(region, src__Math__Math.HitRegion.XNeg))
        return this.left;
      else if (dart.equals(region, src__Math__Math.HitRegion.XPos))
        return this.right;
      else if (dart.equals(region, src__Math__Math.HitRegion.YNeg))
        return this.below;
      else if (dart.equals(region, src__Math__Math.HitRegion.YPos))
        return this.above;
      else if (dart.equals(region, src__Math__Math.HitRegion.ZNeg))
        return this.back;
      else if (dart.equals(region, src__Math__Math.HitRegion.ZPos))
        return this.front;
      else
        return null;
    }
    get blockRegion() {
      return src__Math__Math.Region3.new(this.x[$toDouble]() + this.chunkX[$toDouble](), this.y[$toDouble](), this.z[$toDouble]() + this.chunkZ[$toDouble](), 1.0, 1.0, 1.0);
    }
    solidNeighbors() {
      let neighbors = src__Math__Math.HitRegion.None;
      let info = this.left;
      if (info != null && dart.test(examples__craft__main.BlockType.solid(info.value))) {
        neighbors = neighbors['|'](src__Math__Math.HitRegion.XNeg);
      }
      info = this.right;
      if (info != null && dart.test(examples__craft__main.BlockType.solid(info.value))) {
        neighbors = neighbors['|'](src__Math__Math.HitRegion.XPos);
      }
      info = this.below;
      if (info != null && dart.test(examples__craft__main.BlockType.solid(info.value))) {
        neighbors = neighbors['|'](src__Math__Math.HitRegion.YNeg);
      }
      info = this.above;
      if (info != null && dart.test(examples__craft__main.BlockType.solid(info.value))) {
        neighbors = neighbors['|'](src__Math__Math.HitRegion.YPos);
      }
      info = this.back;
      if (info != null && dart.test(examples__craft__main.BlockType.solid(info.value))) {
        neighbors = neighbors['|'](src__Math__Math.HitRegion.ZNeg);
      }
      info = this.front;
      if (info != null && dart.test(examples__craft__main.BlockType.solid(info.value))) {
        neighbors = neighbors['|'](src__Math__Math.HitRegion.ZPos);
      }
      return neighbors;
    }
    toString() {
      return dart.str(this.chunk) + ".block(" + dart.str(this.x) + ", " + dart.str(this.y) + ", " + dart.str(this.z) + ", (" + dart.str(this.chunkX) + ", " + dart.str(this.chunkZ) + "), " + dart.str(examples__craft__main.BlockType.string(this.value)) + ")";
    }
    get value() {
      let t = this.chunk;
      let l = t == null ? null : t.getBlock(this.x, this.y, this.z);
      return l != null ? l : dart.notNull(this.y) < 0 ? examples__craft__main.BlockType.Boundary : examples__craft__main.BlockType.Air;
    }
    set value(value) {
      let t = this.chunk;
      t == null ? null : t.setBlock(this.x, this.y, this.z, value);
    }
  };
  (examples__craft__main.BlockInfo.new = function(x, y, z, chunkX, chunkZ, chunk) {
    this[x$] = x;
    this[y$] = y;
    this[z$] = z;
    this[chunkX$] = chunkX;
    this[chunkZ$] = chunkZ;
    this[chunk$] = chunk;
  }).prototype = examples__craft__main.BlockInfo.prototype;
  dart.addTypeTests(examples__craft__main.BlockInfo);
  const x$ = Symbol("BlockInfo.x");
  const y$ = Symbol("BlockInfo.y");
  const z$ = Symbol("BlockInfo.z");
  const chunkX$ = Symbol("BlockInfo.chunkX");
  const chunkZ$ = Symbol("BlockInfo.chunkZ");
  const chunk$ = Symbol("BlockInfo.chunk");
  dart.setMethodSignature(examples__craft__main.BlockInfo, () => ({
    __proto__: dart.getMethods(examples__craft__main.BlockInfo.__proto__),
    neighbor: dart.fnType(examples__craft__main.BlockInfo, [src__Math__Math.HitRegion]),
    solidNeighbors: dart.fnType(src__Math__Math.HitRegion, [])
  }));
  dart.setGetterSignature(examples__craft__main.BlockInfo, () => ({
    __proto__: dart.getGetters(examples__craft__main.BlockInfo.__proto__),
    worldX: core.int,
    worldZ: core.int,
    above: examples__craft__main.BlockInfo,
    below: examples__craft__main.BlockInfo,
    right: examples__craft__main.BlockInfo,
    left: examples__craft__main.BlockInfo,
    front: examples__craft__main.BlockInfo,
    back: examples__craft__main.BlockInfo,
    blockRegion: src__Math__Math.Region3,
    value: core.int
  }));
  dart.setSetterSignature(examples__craft__main.BlockInfo, () => ({
    __proto__: dart.getSetters(examples__craft__main.BlockInfo.__proto__),
    value: core.int
  }));
  dart.setFieldSignature(examples__craft__main.BlockInfo, () => ({
    __proto__: dart.getFields(examples__craft__main.BlockInfo.__proto__),
    x: dart.finalFieldType(core.int),
    y: dart.finalFieldType(core.int),
    z: dart.finalFieldType(core.int),
    chunkX: dart.finalFieldType(core.int),
    chunkZ: dart.finalFieldType(core.int),
    chunk: dart.finalFieldType(examples__craft__main.Chunk)
  }));
  dart.defineExtensionMethods(examples__craft__main.BlockInfo, ['toString']);
  examples__craft__main.BlockType = class BlockType extends core.Object {
    static string(value) {
      switch (value) {
        case 0:
        {
          return "air";
        }
        case 1:
        {
          return "water";
        }
        case 100:
        {
          return "boundary";
        }
        case 101:
        {
          return "dirt";
        }
        case 102:
        {
          return "turf";
        }
        case 103:
        {
          return "rock";
        }
        case 104:
        {
          return "sand";
        }
        case 105:
        {
          return "dryLeaves";
        }
        case 106:
        {
          return "trunk-ud";
        }
        case 107:
        {
          return "trunk-ns";
        }
        case 108:
        {
          return "trunk-ew";
        }
        case 109:
        {
          return "brick";
        }
        case 110:
        {
          return "redShine";
        }
        case 111:
        {
          return "whiteShine";
        }
        case 112:
        {
          return "yellowShine";
        }
        case 113:
        {
          return "blackShine";
        }
        case 114:
        {
          return "leaves";
        }
        case 115:
        {
          return "wood-ud";
        }
        case 116:
        {
          return "wood-ns";
        }
        case 117:
        {
          return "wood-ew";
        }
        case 200:
        {
          return "grass";
        }
        case 201:
        {
          return "fern";
        }
        case 202:
        {
          return "whiteFlower";
        }
        case 203:
        {
          return "blueFlower";
        }
        case 204:
        {
          return "redFlower";
        }
        case 205:
        {
          return "mushroom";
        }
      }
      return "undefined";
    }
    static hard(value) {
      return dart.notNull(value) >= 100 && dart.notNull(value) <= 117;
    }
    static solid(value) {
      return dart.notNull(value) >= 100 && dart.notNull(value) <= 117;
    }
    static plant(value) {
      return dart.notNull(value) >= 200 && dart.notNull(value) <= 205;
    }
    static open(value) {
      return dart.notNull(value) >= 200 && dart.notNull(value) <= 205;
    }
    static drawSide(value, neighbor) {
      if (value == neighbor) return false;
      if (neighbor === 0) return true;
      if (value === 1) return examples__craft__main.BlockType.open(neighbor);
      if (neighbor === 1) return !dart.test(examples__craft__main.BlockType.open(value));
      return !dart.test(examples__craft__main.BlockType.open(value)) && dart.test(examples__craft__main.BlockType.open(neighbor));
    }
  };
  (examples__craft__main.BlockType.__ = function() {
  }).prototype = examples__craft__main.BlockType.prototype;
  dart.addTypeTests(examples__craft__main.BlockType);
  dart.defineLazy(examples__craft__main.BlockType, {
    /*examples__craft__main.BlockType.Air*/get Air() {
      return 0;
    },
    /*examples__craft__main.BlockType.Water*/get Water() {
      return 1;
    },
    /*examples__craft__main.BlockType.Boundary*/get Boundary() {
      return 100;
    },
    /*examples__craft__main.BlockType.Dirt*/get Dirt() {
      return 101;
    },
    /*examples__craft__main.BlockType.Turf*/get Turf() {
      return 102;
    },
    /*examples__craft__main.BlockType.Rock*/get Rock() {
      return 103;
    },
    /*examples__craft__main.BlockType.Sand*/get Sand() {
      return 104;
    },
    /*examples__craft__main.BlockType.DryLeaves*/get DryLeaves() {
      return 105;
    },
    /*examples__craft__main.BlockType.TrunkUD*/get TrunkUD() {
      return 106;
    },
    /*examples__craft__main.BlockType.TrunkNS*/get TrunkNS() {
      return 107;
    },
    /*examples__craft__main.BlockType.TrunkEW*/get TrunkEW() {
      return 108;
    },
    /*examples__craft__main.BlockType.Brick*/get Brick() {
      return 109;
    },
    /*examples__craft__main.BlockType.RedShine*/get RedShine() {
      return 110;
    },
    /*examples__craft__main.BlockType.WhiteShine*/get WhiteShine() {
      return 111;
    },
    /*examples__craft__main.BlockType.YellowShine*/get YellowShine() {
      return 112;
    },
    /*examples__craft__main.BlockType.BlackShine*/get BlackShine() {
      return 113;
    },
    /*examples__craft__main.BlockType.Leaves*/get Leaves() {
      return 114;
    },
    /*examples__craft__main.BlockType.WoodUD*/get WoodUD() {
      return 115;
    },
    /*examples__craft__main.BlockType.WoodNS*/get WoodNS() {
      return 116;
    },
    /*examples__craft__main.BlockType.WoodEW*/get WoodEW() {
      return 117;
    },
    /*examples__craft__main.BlockType.Grass*/get Grass() {
      return 200;
    },
    /*examples__craft__main.BlockType.Fern*/get Fern() {
      return 201;
    },
    /*examples__craft__main.BlockType.WhiteFlower*/get WhiteFlower() {
      return 202;
    },
    /*examples__craft__main.BlockType.BlueFlower*/get BlueFlower() {
      return 203;
    },
    /*examples__craft__main.BlockType.RedFlower*/get RedFlower() {
      return 204;
    },
    /*examples__craft__main.BlockType.Mushroom*/get Mushroom() {
      return 205;
    },
    /*examples__craft__main.BlockType.PlaceableBlocks*/get PlaceableBlocks() {
      return JSArrayOfint().of([101, 102, 103, 104, 105, 106, 115, 109, 110, 111, 112, 113, 1, 114, 200, 201, 202, 203, 204, 205]);
    }
  });
  const _highlightChunkEdges = Symbol('_highlightChunkEdges');
  const _height = Symbol('_height');
  const _getValue = Symbol('_getValue');
  examples__craft__main.CheckersGenerator = class CheckersGenerator extends core.Object {
    fillChunk(chunk) {
      if (chunk == null) return;
      for (let x = 0; x < examples__craft__main.Constants.chunkSideSize; x++) {
        for (let z = 0; z < examples__craft__main.Constants.chunkSideSize; z++) {
          for (let y = 0; y < dart.notNull(this[_height]); y++) {
            chunk.setBlock(x, y, z, this[_getValue](x, y, z));
          }
        }
      }
      chunk.finishGenerate();
    }
    [_getValue](x, y, z) {
      if (dart.test(this[_highlightChunkEdges])) {
        if (x === 0 || z === 0) return x === 0 && z === 0 ? examples__craft__main.BlockType.YellowShine : examples__craft__main.BlockType.RedShine;
        if (x === 1 && z === 1) return examples__craft__main.BlockType.RedShine;
      }
      return (dart.notNull(x) + dart.notNull(y) + dart.notNull(z))[$modulo](2) === 0 ? examples__craft__main.BlockType.BlackShine : examples__craft__main.BlockType.WhiteShine;
    }
  };
  (examples__craft__main.CheckersGenerator.new = function(opts) {
    let highlightChunkEdges = opts && 'highlightChunkEdges' in opts ? opts.highlightChunkEdges : true;
    let height = opts && 'height' in opts ? opts.height : 10;
    this[_highlightChunkEdges] = null;
    this[_height] = null;
    this[_highlightChunkEdges] = highlightChunkEdges != null ? highlightChunkEdges : true;
    this[_height] = height != null ? height : 10;
  }).prototype = examples__craft__main.CheckersGenerator.prototype;
  dart.addTypeTests(examples__craft__main.CheckersGenerator);
  examples__craft__main.CheckersGenerator[dart.implements] = () => [examples__craft__main.Generator];
  dart.setMethodSignature(examples__craft__main.CheckersGenerator, () => ({
    __proto__: dart.getMethods(examples__craft__main.CheckersGenerator.__proto__),
    fillChunk: dart.fnType(dart.void, [examples__craft__main.Chunk]),
    [_getValue]: dart.fnType(core.int, [core.int, core.int, core.int])
  }));
  dart.setFieldSignature(examples__craft__main.CheckersGenerator, () => ({
    __proto__: dart.getFields(examples__craft__main.CheckersGenerator.__proto__),
    [_highlightChunkEdges]: dart.fieldType(core.bool),
    [_height]: dart.fieldType(core.int)
  }));
  const _world = Symbol('_world');
  const _x = Symbol('_x');
  const _z = Symbol('_z');
  const _data = Symbol('_data');
  const _entities = Symbol('_entities');
  const _dirty = Symbol('_dirty');
  const _needUpdate = Symbol('_needUpdate');
  const _needGen = Symbol('_needGen');
  const _enabled = Symbol('_enabled');
  const _index = Symbol('_index');
  const _neighborBlock = Symbol('_neighborBlock');
  examples__craft__main.Chunk = class Chunk extends core.Object {
    prepare(x, z) {
      this[_x] = x;
      this[_z] = z;
      this[_dirty] = true;
      this[_needGen] = true;
      this[_enabled] = false;
    }
    freeup() {
      this[_dirty] = false;
      this[_enabled] = false;
      this[_needGen] = true;
      this[_needUpdate] = false;
    }
    get x() {
      return this[_x];
    }
    get z() {
      return this[_z];
    }
    toString() {
      return "chunk(" + dart.str(this[_x]) + ", " + dart.str(this[_z]) + ")";
    }
    get entities() {
      return this[_entities];
    }
    get dirty() {
      return dart.test(this[_dirty]) && !dart.test(this[_needGen]);
    }
    set dirty(dirty) {
      return this[_dirty] = dirty;
    }
    get needUpdate() {
      return this[_needUpdate];
    }
    set needUpdate(update) {
      return this[_needUpdate] = update;
    }
    get needToGenerate() {
      return this[_needGen];
    }
    finishGenerate() {
      this[_needGen] = false;
      this[_dirty] = true;
      this[_enabled] = false;
      let l = this.left;
      l == null ? null : l.dirty = true;
      let l$ = this.right;
      l$ == null ? null : l$.dirty = true;
      let l$0 = this.front;
      l$0 == null ? null : l$0.dirty = true;
      let l$1 = this.back;
      l$1 == null ? null : l$1.dirty = true;
    }
    [_index](x, y, z) {
      return (dart.notNull(x) * examples__craft__main.Constants.chunkYSize + dart.notNull(y)) * examples__craft__main.Constants.chunkSideSize + dart.notNull(z);
    }
    getBlock(x, y, z) {
      if (dart.notNull(y) < 0) return examples__craft__main.BlockType.Boundary;
      if (dart.notNull(y) >= examples__craft__main.Constants.chunkYSize) return examples__craft__main.BlockType.Air;
      if (dart.notNull(x) < 0) return examples__craft__main.BlockType.Air;
      if (dart.notNull(x) >= examples__craft__main.Constants.chunkSideSize) return examples__craft__main.BlockType.Air;
      if (dart.notNull(z) < 0) return examples__craft__main.BlockType.Air;
      if (dart.notNull(z) >= examples__craft__main.Constants.chunkSideSize) return examples__craft__main.BlockType.Air;
      return this[_data][$_get](this[_index](x, y, z));
    }
    [_neighborBlock](neighbor, x, y, z) {
      let l = neighbor == null ? null : neighbor.getWorldBlock(x, y, z);
      return l != null ? l : examples__craft__main.BlockType.Air;
    }
    getWorldBlock(x, y, z) {
      if (dart.notNull(y) < 0) return examples__craft__main.BlockType.Boundary;
      if (dart.notNull(y) >= examples__craft__main.Constants.chunkYSize) return examples__craft__main.BlockType.Air;
      if (dart.notNull(x) < 0) return this[_neighborBlock](this.left, dart.notNull(x) + examples__craft__main.Constants.chunkSideSize, y, z);
      if (dart.notNull(x) >= examples__craft__main.Constants.chunkSideSize) return this[_neighborBlock](this.right, dart.notNull(x) - examples__craft__main.Constants.chunkSideSize, y, z);
      if (dart.notNull(z) < 0) return this[_neighborBlock](this.back, x, y, dart.notNull(z) + examples__craft__main.Constants.chunkSideSize);
      if (dart.notNull(z) >= examples__craft__main.Constants.chunkSideSize) return this[_neighborBlock](this.front, x, y, dart.notNull(z) - examples__craft__main.Constants.chunkSideSize);
      return this[_data][$_get](this[_index](x, y, z));
    }
    setBlock(x, y, z, value) {
      if (dart.notNull(y) < 0) return false;
      if (dart.notNull(y) >= examples__craft__main.Constants.chunkYSize) return false;
      if (dart.notNull(x) < 0) return false;
      if (dart.notNull(x) >= examples__craft__main.Constants.chunkSideSize) return false;
      if (dart.notNull(z) < 0) return false;
      if (dart.notNull(z) >= examples__craft__main.Constants.chunkSideSize) return false;
      this[_data][$_set](this[_index](x, y, z), value);
      return true;
    }
    get left() {
      return this[_world].findChunk(dart.notNull(this.x) - examples__craft__main.Constants.chunkSideSize, this.z);
    }
    get front() {
      return this[_world].findChunk(this.x, dart.notNull(this.z) + examples__craft__main.Constants.chunkSideSize);
    }
    get right() {
      return this[_world].findChunk(dart.notNull(this.x) + examples__craft__main.Constants.chunkSideSize, this.z);
    }
    get back() {
      return this[_world].findChunk(this.x, dart.notNull(this.z) - examples__craft__main.Constants.chunkSideSize);
    }
    topHit(x, z, defaultY) {
      if (defaultY === void 0) defaultY = examples__craft__main.Constants.chunkYSize;
      for (let y = examples__craft__main.Constants.chunkYSize - 1; y >= 0; y--) {
        if (dart.test(examples__craft__main.BlockType.solid(this.getBlock(x, y, z)))) return y;
      }
      return defaultY;
    }
    updateShape() {
      if (dart.test(this[_needGen]) || !dart.test(this[_needUpdate])) return;
      this[_needUpdate] = false;
      this[_dirty] = false;
      let shape = new examples__craft__main.Shaper.new(this[_world].materials);
      shape.buildChunkShapes(this);
      shape.finish(this.entities);
    }
    set [_enabled](enabled) {
      for (let entity of this[_entities])
        entity.enabled = enabled;
    }
    updateVisiblity(loc, front) {
      if (dart.test(this[_needGen]) || dart.test(this[_needUpdate])) {
        this[_enabled] = false;
        return;
      }
      let aabb = src__Math__Math.Region2.new(this.x[$toDouble](), this.z[$toDouble](), examples__craft__main.Constants.chunkSideSize[$toDouble](), examples__craft__main.Constants.chunkSideSize[$toDouble]());
      let nearLoc = aabb.nearestPoint(loc);
      if (dart.notNull(nearLoc.distance2(loc)) < examples__craft__main.Constants.minDrawDist2) {
        this[_enabled] = true;
        return;
      }
      let nearFront = aabb.nearestPoint(front);
      let forward = new src__Math__Math.Vector2.new(dart.notNull(front.x) - dart.notNull(loc.x), dart.notNull(front.y) - dart.notNull(loc.y)).normal();
      let toNear = new src__Math__Math.Vector2.new(dart.notNull(nearFront.x) - dart.notNull(loc.x), dart.notNull(nearFront.y) - dart.notNull(loc.y));
      let length = toNear.length2();
      if (dart.notNull(length) > examples__craft__main.Constants.maxDrawDist2) {
        this[_enabled] = false;
        return;
      }
      toNear = toNear['/'](length);
      let dot = forward.dot(toNear);
      let enabled = dart.notNull(dot) > 0.0;
      this[_enabled] = enabled;
    }
  };
  (examples__craft__main.Chunk.new = function(world) {
    this[_x] = null;
    this[_z] = null;
    this[_data] = null;
    this[_entities] = null;
    this[_dirty] = null;
    this[_needUpdate] = null;
    this[_needGen] = null;
    this[_world] = world;
    this[_data] = typed_data.Uint8List.new(examples__craft__main.Constants.chunkDataLength);
    this[_entities] = JSArrayOfEntity().of([]);
    for (let parent of this[_world].entities) {
      let entity = new src__Core__Core.Entity.new();
      parent.children.add(entity);
      this[_entities][$add](entity);
    }
    this[_x] = 0;
    this[_z] = 0;
    this[_dirty] = false;
    this[_needUpdate] = true;
    this[_needGen] = true;
  }).prototype = examples__craft__main.Chunk.prototype;
  dart.addTypeTests(examples__craft__main.Chunk);
  dart.setMethodSignature(examples__craft__main.Chunk, () => ({
    __proto__: dart.getMethods(examples__craft__main.Chunk.__proto__),
    prepare: dart.fnType(dart.void, [core.int, core.int]),
    freeup: dart.fnType(dart.void, []),
    finishGenerate: dart.fnType(dart.void, []),
    [_index]: dart.fnType(core.int, [core.int, core.int, core.int]),
    getBlock: dart.fnType(core.int, [core.int, core.int, core.int]),
    [_neighborBlock]: dart.fnType(core.int, [examples__craft__main.Chunk, core.int, core.int, core.int]),
    getWorldBlock: dart.fnType(core.int, [core.int, core.int, core.int]),
    setBlock: dart.fnType(core.bool, [core.int, core.int, core.int, core.int]),
    topHit: dart.fnType(core.int, [core.int, core.int], [core.int]),
    updateShape: dart.fnType(dart.void, []),
    updateVisiblity: dart.fnType(dart.void, [src__Math__Math.Point2, src__Math__Math.Point2])
  }));
  dart.setGetterSignature(examples__craft__main.Chunk, () => ({
    __proto__: dart.getGetters(examples__craft__main.Chunk.__proto__),
    x: core.int,
    z: core.int,
    entities: core.List$(src__Core__Core.Entity),
    dirty: core.bool,
    needUpdate: core.bool,
    needToGenerate: core.bool,
    left: examples__craft__main.Chunk,
    front: examples__craft__main.Chunk,
    right: examples__craft__main.Chunk,
    back: examples__craft__main.Chunk
  }));
  dart.setSetterSignature(examples__craft__main.Chunk, () => ({
    __proto__: dart.getSetters(examples__craft__main.Chunk.__proto__),
    dirty: core.bool,
    needUpdate: core.bool,
    [_enabled]: core.bool
  }));
  dart.setFieldSignature(examples__craft__main.Chunk, () => ({
    __proto__: dart.getFields(examples__craft__main.Chunk.__proto__),
    [_x]: dart.fieldType(core.int),
    [_z]: dart.fieldType(core.int),
    [_world]: dart.fieldType(examples__craft__main.World),
    [_data]: dart.fieldType(typed_data.Uint8List),
    [_entities]: dart.fieldType(ListOfEntity()),
    [_dirty]: dart.fieldType(core.bool),
    [_needUpdate]: dart.fieldType(core.bool),
    [_needGen]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(examples__craft__main.Chunk, ['toString']);
  const _loc = Symbol('_loc');
  const _region = Symbol('_region');
  const _vector = Symbol('_vector');
  const _touching = Symbol('_touching');
  const _blocks = Symbol('_blocks');
  const _blockSides = Symbol('_blockSides');
  const _hasHit = Symbol('_hasHit');
  const _collectBlocks = Symbol('_collectBlocks');
  const _singleCollide = Symbol('_singleCollide');
  examples__craft__main.Collider = class Collider extends core.Object {
    collide(region, loc, vector) {
      this[_loc] = loc;
      this[_region] = region;
      this[_vector] = vector;
      this[_touching] = src__Math__Math.HitRegion.None;
      this[_collectBlocks]();
      while (dart.test(this[_singleCollide]()))
        ;
      this[_loc] = this[_loc]['+'](src__Math__Math.Point3.fromVector3(this[_vector]));
      return true;
    }
    get location() {
      return this[_loc];
    }
    get touching() {
      return this[_touching];
    }
    [_collectBlocks]() {
      let region = this[_region].translate(src__Math__Math.Vector3.fromPoint3(this[_loc]));
      let aabb = region.expandWithRegion(region.translate(this[_vector]));
      let minXYZ = this[_world].getBlock(aabb.x, aabb.y, aabb.z);
      let maxXYZ = this[_world].getBlock(dart.notNull(aabb.x) + dart.notNull(aabb.dx), dart.notNull(aabb.y) + dart.notNull(aabb.dy), dart.notNull(aabb.z) + dart.notNull(aabb.dz));
      let maxWorldX = maxXYZ.worldX, maxWorldZ = maxXYZ.worldZ;
      this[_blocks][$clear]();
      this[_blockSides][$clear]();
      this[_hasHit][$clear]();
      for (let x = minXYZ; x != null && dart.notNull(x.worldX) <= dart.notNull(maxWorldX); x = x.right) {
        for (let y = x; y != null && dart.notNull(y.y) <= dart.notNull(maxXYZ.y); y = y.above) {
          for (let z = y; z != null && dart.notNull(z.worldZ) <= dart.notNull(maxWorldZ); z = z.front) {
            if (dart.test(examples__craft__main.BlockType.hard(z.value))) {
              let sides = z.solidNeighbors();
              if (!dart.equals(sides, src__Math__Math.HitRegion.Cardinals)) {
                this[_blocks][$add](z.blockRegion);
                this[_blockSides][$add](src__Math__Math.HitRegion.Cardinals['&'](sides['~']()));
                this[_hasHit][$add](false);
              }
            }
          }
        }
      }
    }
    [_singleCollide]() {
      if (dart.test(this[_vector].isZero())) return false;
      let region = this[_region].translate(src__Math__Math.Vector3.fromPoint3(this[_loc]));
      let parametric = 0.0;
      let hitRegion = src__Math__Math.HitRegion.None;
      let hitIndex = -1;
      for (let i = 0; i < dart.notNull(this[_blocks][$length]); i++) {
        if (!dart.test(this[_hasHit][$_get](i))) {
          let block = this[_blocks][$_get](i);
          let sides = this[_blockSides][$_get](i);
          let cur = region.collision(block, this[_vector], sides);
          if (cur != null) {
            if (dart.equals(hitRegion, src__Math__Math.HitRegion.None) || dart.notNull(parametric) > dart.notNull(cur.parametric)) {
              hitRegion = cur.region;
              parametric = cur.parametric;
              hitIndex = i;
            }
          }
        }
      }
      if (dart.equals(hitRegion, src__Math__Math.HitRegion.None)) return false;
      this[_hasHit][$_set](hitIndex, true);
      let shift = this[_vector]['*'](parametric);
      let remainder = this[_vector]['*'](1.0 - dart.notNull(parametric));
      if (dart.equals(hitRegion, src__Math__Math.HitRegion.XPos) || dart.equals(hitRegion, src__Math__Math.HitRegion.XNeg)) {
        let x = dart.notNull(this[_loc].x) + dart.notNull(shift.dx);
        this[_loc] = new src__Math__Math.Point3.new(x, dart.notNull(this[_loc].y) + dart.notNull(shift.dy), dart.notNull(this[_loc].z) + dart.notNull(shift.dz));
        this[_vector] = new src__Math__Math.Vector3.new(0.0, remainder.dy, remainder.dz);
      } else if (dart.equals(hitRegion, src__Math__Math.HitRegion.YPos) || dart.equals(hitRegion, src__Math__Math.HitRegion.YNeg)) {
        let y = dart.notNull(this[_loc].y) + dart.notNull(shift.dy);
        this[_loc] = new src__Math__Math.Point3.new(dart.notNull(this[_loc].x) + dart.notNull(shift.dx), y, dart.notNull(this[_loc].z) + dart.notNull(shift.dz));
        this[_vector] = new src__Math__Math.Vector3.new(remainder.dx, 0.0, remainder.dz);
      } else if (dart.equals(hitRegion, src__Math__Math.HitRegion.ZPos) || dart.equals(hitRegion, src__Math__Math.HitRegion.ZNeg)) {
        let z = dart.notNull(this[_loc].z) + dart.notNull(shift.dz);
        this[_loc] = new src__Math__Math.Point3.new(dart.notNull(this[_loc].x) + dart.notNull(shift.dx), dart.notNull(this[_loc].y) + dart.notNull(shift.dy), z);
        this[_vector] = new src__Math__Math.Vector3.new(remainder.dx, remainder.dy, 0.0);
      }
      this[_touching] = this[_touching]['|'](hitRegion);
      return true;
    }
    toString() {
      return "Collider(" + dart.str(this[_loc]) + ", " + dart.str(this[_touching]) + ")";
    }
  };
  (examples__craft__main.Collider.new = function(world) {
    this[_loc] = null;
    this[_region] = null;
    this[_vector] = null;
    this[_touching] = null;
    this[_blocks] = null;
    this[_blockSides] = null;
    this[_hasHit] = null;
    this[_world] = world;
    this[_loc] = null;
    this[_region] = null;
    this[_vector] = null;
    this[_touching] = src__Math__Math.HitRegion.None;
    this[_blocks] = JSArrayOfRegion3().of([]);
    this[_blockSides] = JSArrayOfHitRegion().of([]);
    this[_hasHit] = JSArrayOfbool().of([]);
  }).prototype = examples__craft__main.Collider.prototype;
  dart.addTypeTests(examples__craft__main.Collider);
  dart.setMethodSignature(examples__craft__main.Collider, () => ({
    __proto__: dart.getMethods(examples__craft__main.Collider.__proto__),
    collide: dart.fnType(core.bool, [src__Math__Math.Region3, src__Math__Math.Point3, src__Math__Math.Vector3]),
    [_collectBlocks]: dart.fnType(dart.void, []),
    [_singleCollide]: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(examples__craft__main.Collider, () => ({
    __proto__: dart.getGetters(examples__craft__main.Collider.__proto__),
    location: src__Math__Math.Point3,
    touching: src__Math__Math.HitRegion
  }));
  dart.setFieldSignature(examples__craft__main.Collider, () => ({
    __proto__: dart.getFields(examples__craft__main.Collider.__proto__),
    [_world]: dart.fieldType(examples__craft__main.World),
    [_loc]: dart.fieldType(src__Math__Math.Point3),
    [_region]: dart.fieldType(src__Math__Math.Region3),
    [_vector]: dart.fieldType(src__Math__Math.Vector3),
    [_touching]: dart.fieldType(src__Math__Math.HitRegion),
    [_blocks]: dart.fieldType(ListOfRegion3()),
    [_blockSides]: dart.fieldType(ListOfHitRegion()),
    [_hasHit]: dart.fieldType(ListOfbool())
  }));
  dart.defineExtensionMethods(examples__craft__main.Collider, ['toString']);
  examples__craft__main.Constants = class Constants extends core.Object {};
  (examples__craft__main.Constants.__ = function() {
  }).prototype = examples__craft__main.Constants.prototype;
  dart.addTypeTests(examples__craft__main.Constants);
  dart.defineLazy(examples__craft__main.Constants, {
    /*examples__craft__main.Constants.maxSeed*/get maxSeed() {
      return 4294967296;
    },
    /*examples__craft__main.Constants.worldTickMs*/get worldTickMs() {
      return 750;
    },
    /*examples__craft__main.Constants.generateTickMs*/get generateTickMs() {
      return 70;
    },
    /*examples__craft__main.Constants.animationTickMs*/get animationTickMs() {
      return 250;
    },
    /*examples__craft__main.Constants.debugPrintTickMs*/get debugPrintTickMs() {
      return 5000;
    },
    /*examples__craft__main.Constants.imgFolder*/get imgFolder() {
      return "./textures/";
    },
    /*examples__craft__main.Constants.fileExt*/get fileExt() {
      return ".png";
    },
    /*examples__craft__main.Constants.initialGraveyardSize*/get initialGraveyardSize() {
      return 140;
    },
    /*examples__craft__main.Constants.chunkSideSize*/get chunkSideSize() {
      return 16;
    },
    /*examples__craft__main.Constants.chunkYSize*/get chunkYSize() {
      return 48;
    },
    /*examples__craft__main.Constants.chunkDataLength*/get chunkDataLength() {
      return 16 * 48 * 16;
    },
    /*examples__craft__main.Constants.waterDepth*/get waterDepth() {
      return 8;
    },
    /*examples__craft__main.Constants.maxEdgeSand*/get maxEdgeSand() {
      return 8 + 2;
    },
    /*examples__craft__main.Constants.minEdgeSand*/get minEdgeSand() {
      return 8 - 2;
    },
    /*examples__craft__main.Constants.dirtDepth*/get dirtDepth() {
      return 2;
    },
    /*examples__craft__main.Constants.sandDepth*/get sandDepth() {
      return 2;
    },
    /*examples__craft__main.Constants.pyramidSize*/get pyramidSize() {
      return 30;
    },
    /*examples__craft__main.Constants.treeMin*/get treeMin() {
      return 10;
    },
    /*examples__craft__main.Constants.treeHeight*/get treeHeight() {
      return 8;
    },
    /*examples__craft__main.Constants.leavesRadius*/get leavesRadius() {
      return 3;
    },
    /*examples__craft__main.Constants.leavesRadius2*/get leavesRadius2() {
      return 12;
    },
    /*examples__craft__main.Constants.deadLeavesRadius*/get deadLeavesRadius() {
      return 3;
    },
    /*examples__craft__main.Constants.deadLeavesRadius2*/get deadLeavesRadius2() {
      return 10;
    },
    /*examples__craft__main.Constants.borderSize*/get borderSize() {
      return 3;
    },
    /*examples__craft__main.Constants.paddedMin*/get paddedMin() {
      return -3;
    },
    /*examples__craft__main.Constants.paddedMax*/get paddedMax() {
      return 16 + 3;
    },
    /*examples__craft__main.Constants.paddedSize*/get paddedSize() {
      return 19 - -3;
    },
    /*examples__craft__main.Constants.heightCacheLength*/get heightCacheLength() {
      return 22 * 22;
    },
    /*examples__craft__main.Constants.minDrawDist2*/get minDrawDist2() {
      return 10.0 * 10.0;
    },
    /*examples__craft__main.Constants.maxDrawDist2*/get maxDrawDist2() {
      return 80.0 * 80.0;
    },
    /*examples__craft__main.Constants.maxChunkDist*/get maxChunkDist() {
      return 16 * 8;
    },
    /*examples__craft__main.Constants.minChunkDist*/get minChunkDist() {
      return 16 * 4;
    },
    /*examples__craft__main.Constants.initChunkDist*/get initChunkDist() {
      return 16 * 2;
    },
    /*examples__craft__main.Constants.playerStartX*/get playerStartX() {
      return 0.5;
    },
    /*examples__craft__main.Constants.playerStartYOffset*/get playerStartYOffset() {
      return 10.0;
    },
    /*examples__craft__main.Constants.playerStartZ*/get playerStartZ() {
      return 0.5;
    },
    /*examples__craft__main.Constants.gravity*/get gravity() {
      return -100.0;
    },
    /*examples__craft__main.Constants.walkSpeed*/get walkSpeed() {
      return 6.0;
    },
    /*examples__craft__main.Constants.maxFallSpeed*/get maxFallSpeed() {
      return 60.0;
    },
    /*examples__craft__main.Constants.jumpSpeed*/get jumpSpeed() {
      return 30.0;
    },
    /*examples__craft__main.Constants.highlightDistance*/get highlightDistance() {
      return 6.0;
    },
    /*examples__craft__main.Constants.mouseSensitivity*/get mouseSensitivity() {
      return 0.4;
    },
    /*examples__craft__main.Constants.playerRegion*/get playerRegion() {
      return src__Math__Math.Region3.new(-0.25, -1.5, -0.25, 0.5, 1.9, 0.5);
    },
    /*examples__craft__main.Constants.maxCollisionSpeedSquared*/get maxCollisionSpeedSquared() {
      return 100.0;
    },
    /*examples__craft__main.Constants.topNorm*/get topNorm() {
      return src__Math__Math.Vector3.posY;
    },
    /*examples__craft__main.Constants.bottomNorm*/get bottomNorm() {
      return src__Math__Math.Vector3.negY;
    },
    /*examples__craft__main.Constants.leftNorm*/get leftNorm() {
      return src__Math__Math.Vector3.posX;
    },
    /*examples__craft__main.Constants.rightNorm*/get rightNorm() {
      return src__Math__Math.Vector3.negX;
    },
    /*examples__craft__main.Constants.frontNorm*/get frontNorm() {
      return src__Math__Math.Vector3.posZ;
    },
    /*examples__craft__main.Constants.backNorm*/get backNorm() {
      return src__Math__Math.Vector3.negZ;
    },
    /*examples__craft__main.Constants.frontTopLeft*/get frontTopLeft() {
      return new src__Math__Math.Point3.new(-0.5, 0.5, 0.5);
    },
    /*examples__craft__main.Constants.frontTopRight*/get frontTopRight() {
      return new src__Math__Math.Point3.new(0.5, 0.5, 0.5);
    },
    /*examples__craft__main.Constants.frontBottomLeft*/get frontBottomLeft() {
      return new src__Math__Math.Point3.new(-0.5, -0.5, 0.5);
    },
    /*examples__craft__main.Constants.frontBottomRight*/get frontBottomRight() {
      return new src__Math__Math.Point3.new(0.5, -0.5, 0.5);
    },
    /*examples__craft__main.Constants.backTopLeft*/get backTopLeft() {
      return new src__Math__Math.Point3.new(-0.5, 0.5, -0.5);
    },
    /*examples__craft__main.Constants.backTopRight*/get backTopRight() {
      return new src__Math__Math.Point3.new(0.5, 0.5, -0.5);
    },
    /*examples__craft__main.Constants.backBottomLeft*/get backBottomLeft() {
      return new src__Math__Math.Point3.new(-0.5, -0.5, -0.5);
    },
    /*examples__craft__main.Constants.backBottomRight*/get backBottomRight() {
      return new src__Math__Math.Point3.new(0.5, -0.5, -0.5);
    }
  });
  const _rockHeight = Symbol('_rockHeight');
  const _dirtHeight = Symbol('_dirtHeight');
  examples__craft__main.FlatGenerator = class FlatGenerator extends core.Object {
    fillChunk(chunk) {
      if (chunk == null) return;
      let turfY = math.max(core.int, this[_rockHeight], this[_dirtHeight]);
      for (let x = 0; x < examples__craft__main.Constants.chunkSideSize; x++) {
        for (let z = 0; z < examples__craft__main.Constants.chunkSideSize; z++) {
          for (let y = 0; y < dart.notNull(this[_rockHeight]); y++)
            chunk.setBlock(x, y, z, examples__craft__main.BlockType.Rock);
          for (let y = this[_rockHeight]; dart.notNull(y) < dart.notNull(this[_dirtHeight]); y = dart.notNull(y) + 1)
            chunk.setBlock(x, y, z, examples__craft__main.BlockType.Dirt);
          chunk.setBlock(x, turfY, z, examples__craft__main.BlockType.Turf);
        }
      }
      chunk.finishGenerate();
    }
  };
  (examples__craft__main.FlatGenerator.new = function(rockHeight, dirtHeight) {
    if (rockHeight === void 0) rockHeight = null;
    if (dirtHeight === void 0) dirtHeight = null;
    this[_rockHeight] = null;
    this[_dirtHeight] = null;
    this[_rockHeight] = rockHeight != null ? rockHeight : 8;
    this[_dirtHeight] = dirtHeight != null ? dirtHeight : 9;
  }).prototype = examples__craft__main.FlatGenerator.prototype;
  dart.addTypeTests(examples__craft__main.FlatGenerator);
  examples__craft__main.FlatGenerator[dart.implements] = () => [examples__craft__main.Generator];
  dart.setMethodSignature(examples__craft__main.FlatGenerator, () => ({
    __proto__: dart.getMethods(examples__craft__main.FlatGenerator.__proto__),
    fillChunk: dart.fnType(dart.void, [examples__craft__main.Chunk])
  }));
  dart.setFieldSignature(examples__craft__main.FlatGenerator, () => ({
    __proto__: dart.getFields(examples__craft__main.FlatGenerator.__proto__),
    [_rockHeight]: dart.fieldType(core.int),
    [_dirtHeight]: dart.fieldType(core.int)
  }));
  examples__craft__main.Generator = class Generator extends core.Object {};
  (examples__craft__main.Generator.new = function() {
  }).prototype = examples__craft__main.Generator.prototype;
  dart.addTypeTests(examples__craft__main.Generator);
  examples__craft__main.CubeData = class CubeData extends core.Object {
    get topIndex() {
      return this[topIndex$];
    }
    set topIndex(value) {
      super.topIndex = value;
    }
    get bottomIndex() {
      return this[bottomIndex$];
    }
    set bottomIndex(value) {
      super.bottomIndex = value;
    }
    get leftIndex() {
      return this[leftIndex$];
    }
    set leftIndex(value) {
      super.leftIndex = value;
    }
    get rightIndex() {
      return this[rightIndex$];
    }
    set rightIndex(value) {
      super.rightIndex = value;
    }
    get frontIndex() {
      return this[frontIndex$];
    }
    set frontIndex(value) {
      super.frontIndex = value;
    }
    get backIndex() {
      return this[backIndex$];
    }
    set backIndex(value) {
      super.backIndex = value;
    }
  };
  (examples__craft__main.CubeData.new = function(topIndex, bottomIndex, leftIndex, rightIndex, frontIndex, backIndex) {
    this[topIndex$] = topIndex;
    this[bottomIndex$] = bottomIndex;
    this[leftIndex$] = leftIndex;
    this[rightIndex$] = rightIndex;
    this[frontIndex$] = frontIndex;
    this[backIndex$] = backIndex;
  }).prototype = examples__craft__main.CubeData.prototype;
  dart.addTypeTests(examples__craft__main.CubeData);
  const topIndex$ = Symbol("CubeData.topIndex");
  const bottomIndex$ = Symbol("CubeData.bottomIndex");
  const leftIndex$ = Symbol("CubeData.leftIndex");
  const rightIndex$ = Symbol("CubeData.rightIndex");
  const frontIndex$ = Symbol("CubeData.frontIndex");
  const backIndex$ = Symbol("CubeData.backIndex");
  dart.setFieldSignature(examples__craft__main.CubeData, () => ({
    __proto__: dart.getFields(examples__craft__main.CubeData.__proto__),
    topIndex: dart.finalFieldType(core.int),
    bottomIndex: dart.finalFieldType(core.int),
    leftIndex: dart.finalFieldType(core.int),
    rightIndex: dart.finalFieldType(core.int),
    frontIndex: dart.finalFieldType(core.int),
    backIndex: dart.finalFieldType(core.int)
  }));
  const _td = Symbol('_td');
  const _cubeData = Symbol('_cubeData');
  const _matData = Symbol('_matData');
  const _mats = Symbol('_mats');
  const _light = Symbol('_light');
  const _selection = Symbol('_selection');
  const _crosshair = Symbol('_crosshair');
  const _waterChanger = Symbol('_waterChanger');
  const _addMat = Symbol('_addMat');
  const _loadText = Symbol('_loadText');
  const _addMatTxt = Symbol('_addMatTxt');
  const _addCubeData = Symbol('_addCubeData');
  const _addMatData = Symbol('_addMatData');
  const _addEmissionMat = Symbol('_addEmissionMat');
  examples__craft__main.Materials = class Materials extends core.Object {
    cubeData(value) {
      return this[_cubeData][$_get](value);
    }
    matData(value) {
      return this[_matData][$_get](value);
    }
    get materials() {
      return this[_mats];
    }
    get waterChanger() {
      return this[_waterChanger];
    }
    get selection() {
      return this[_selection];
    }
    get crosshair() {
      return this[_crosshair];
    }
    [_loadText](fileName) {
      let path = examples__craft__main.Constants.imgFolder + dart.notNull(fileName) + examples__craft__main.Constants.fileExt;
      return this[_td].textureLoader.load2DFromFile(path, {wrapEdges: false, nearest: false, mipMap: true});
    }
    [_addMat](fileName, shiny) {
      if (shiny === void 0) shiny = false;
      return this[_addMatTxt](this[_loadText](fileName), shiny);
    }
    [_addMatTxt](blockTxt, shiny) {
      if (shiny === void 0) shiny = false;
      let tech = new src__Techniques__Techniques.MaterialLight.new();
      tech.lights.add(this[_light]);
      tech.ambient.color = src__Math__Math.Color3.gray(0.8);
      tech.diffuse.color = src__Math__Math.Color3.gray(0.4);
      tech.ambient.texture2D = blockTxt;
      tech.diffuse.texture2D = blockTxt;
      tech.alpha.texture2D = blockTxt;
      if (dart.test(shiny)) {
        let _ = tech.specular;
        _.color = src__Math__Math.Color3.gray(0.5);
        _.shininess = 3.0;
      }
      this[_mats][$add](tech);
      return dart.notNull(this[_mats][$length]) - 1;
    }
    [_addEmissionMat](fileName) {
      let blockTxt = this[_loadText](fileName);
      let tech = new src__Techniques__Techniques.MaterialLight.new();
      tech.emission.texture2D = blockTxt;
      tech.alpha.texture2D = blockTxt;
      return tech;
    }
    [_addCubeData](value, topIndex, bottomIndex, leftIndex, rightIndex, frontIndex, backIndex) {
      this[_cubeData][$_set](value, new examples__craft__main.CubeData.new(topIndex, bottomIndex, leftIndex, rightIndex, frontIndex, backIndex));
    }
    [_addMatData](value, indices) {
      this[_matData][$_set](value, indices);
    }
  };
  (examples__craft__main.Materials.new = function(td) {
    this[_cubeData] = null;
    this[_matData] = null;
    this[_mats] = null;
    this[_light] = null;
    this[_selection] = null;
    this[_crosshair] = null;
    this[_waterChanger] = null;
    this[_td] = td;
    this[_cubeData] = new (IdentityMapOfint$CubeData()).new();
    this[_matData] = new (IdentityMapOfint$ListOfint()).new();
    this[_mats] = JSArrayOfMaterialLight().of([]);
    this[_light] = new src__Lights__Lights.Directional.new({color: src__Math__Math.Color3.white(), mover: src__Movers__Movers.Constant.lookAtTarget(src__Math__Math.Point3.zero, src__Math__Math.Vector3.posZ, new src__Math__Math.Point3.new(0.5, -1.0, 0.2))});
    let boundary = this[_addMat]("boundary");
    let brick = this[_addMat]("brick");
    let dirt = this[_addMat]("dirt");
    let dryLeavesSide = this[_addMat]("dryLeavesSide");
    let dryLeavesTop = this[_addMat]("dryLeavesTop");
    let leaves = this[_addMat]("leaves");
    let rock = this[_addMat]("rock");
    let sand = this[_addMat]("sand");
    let trunkEnd = this[_addMat]("trunkEnd");
    let trunkSide = this[_addMat]("trunkSide");
    let trunkTilted = this[_addMat]("trunkTilted");
    let turfSide = this[_addMat]("turfSide");
    let turfTop = this[_addMat]("turfTop");
    let woodEnd = this[_addMat]("woodEnd");
    let woodSide = this[_addMat]("woodSide");
    let woodTilted = this[_addMat]("woodTilted");
    let blackShine = this[_addMat]("blackShine", true);
    let redShine = this[_addMat]("redShine", true);
    let yellowShine = this[_addMat]("yellowShine", true);
    let whiteShine = this[_addMat]("whiteShine", true);
    let mushroomBottom = this[_addMat]("mushroomBottom");
    let mushroomSide = this[_addMat]("mushroomSide");
    let mushroomTop = this[_addMat]("mushroomTop");
    let grass = this[_addMat]("grass");
    let fern = this[_addMat]("fern");
    let blueFlowers = this[_addMat]("blueFlowers");
    let redFlowers = this[_addMat]("redFlowers");
    let whiteFlowers = this[_addMat]("whiteFlowers");
    this[_waterChanger] = new src__Textures__Textures.Texture2DChanger.new({textures: ListOfTexture2D().from([this[_loadText]("water1"), this[_loadText]("water2"), this[_loadText]("water3")])});
    let water = this[_addMatTxt](this[_waterChanger], true);
    this[_addCubeData](examples__craft__main.BlockType.Boundary, boundary, boundary, boundary, boundary, boundary, boundary);
    this[_addCubeData](examples__craft__main.BlockType.Dirt, dirt, dirt, dirt, dirt, dirt, dirt);
    this[_addCubeData](examples__craft__main.BlockType.Turf, turfTop, dirt, turfSide, turfSide, turfSide, turfSide);
    this[_addCubeData](examples__craft__main.BlockType.Rock, rock, rock, rock, rock, rock, rock);
    this[_addCubeData](examples__craft__main.BlockType.Sand, sand, sand, sand, sand, sand, sand);
    this[_addCubeData](examples__craft__main.BlockType.DryLeaves, dryLeavesTop, dirt, dryLeavesSide, dryLeavesSide, dryLeavesSide, dryLeavesSide);
    this[_addCubeData](examples__craft__main.BlockType.TrunkUD, trunkEnd, trunkEnd, trunkSide, trunkSide, trunkSide, trunkSide);
    this[_addCubeData](examples__craft__main.BlockType.TrunkNS, trunkSide, trunkSide, trunkTilted, trunkTilted, trunkEnd, trunkEnd);
    this[_addCubeData](examples__craft__main.BlockType.TrunkEW, trunkTilted, trunkTilted, trunkEnd, trunkEnd, trunkTilted, trunkTilted);
    this[_addCubeData](examples__craft__main.BlockType.Brick, brick, brick, brick, brick, brick, brick);
    this[_addCubeData](examples__craft__main.BlockType.RedShine, redShine, redShine, redShine, redShine, redShine, redShine);
    this[_addCubeData](examples__craft__main.BlockType.WhiteShine, whiteShine, whiteShine, whiteShine, whiteShine, whiteShine, whiteShine);
    this[_addCubeData](examples__craft__main.BlockType.YellowShine, yellowShine, yellowShine, yellowShine, yellowShine, yellowShine, yellowShine);
    this[_addCubeData](examples__craft__main.BlockType.BlackShine, blackShine, blackShine, blackShine, blackShine, blackShine, blackShine);
    this[_addCubeData](examples__craft__main.BlockType.Leaves, leaves, leaves, leaves, leaves, leaves, leaves);
    this[_addCubeData](examples__craft__main.BlockType.WoodUD, woodEnd, woodEnd, woodSide, woodSide, woodSide, woodSide);
    this[_addCubeData](examples__craft__main.BlockType.WoodNS, woodSide, woodSide, woodTilted, woodTilted, woodEnd, woodEnd);
    this[_addCubeData](examples__craft__main.BlockType.WoodEW, woodTilted, woodTilted, woodEnd, woodEnd, woodTilted, woodTilted);
    this[_addCubeData](examples__craft__main.BlockType.Water, water, water, water, water, water, water);
    this[_addMatData](examples__craft__main.BlockType.Grass, JSArrayOfint().of([grass]));
    this[_addMatData](examples__craft__main.BlockType.Fern, JSArrayOfint().of([fern]));
    this[_addMatData](examples__craft__main.BlockType.WhiteFlower, JSArrayOfint().of([whiteFlowers]));
    this[_addMatData](examples__craft__main.BlockType.BlueFlower, JSArrayOfint().of([blueFlowers]));
    this[_addMatData](examples__craft__main.BlockType.RedFlower, JSArrayOfint().of([redFlowers]));
    this[_addMatData](examples__craft__main.BlockType.Mushroom, JSArrayOfint().of([mushroomTop, mushroomBottom, mushroomSide]));
    this[_selection] = this[_addEmissionMat]("selection");
    this[_crosshair] = this[_addEmissionMat]("crosshair");
  }).prototype = examples__craft__main.Materials.prototype;
  dart.addTypeTests(examples__craft__main.Materials);
  dart.setMethodSignature(examples__craft__main.Materials, () => ({
    __proto__: dart.getMethods(examples__craft__main.Materials.__proto__),
    cubeData: dart.fnType(examples__craft__main.CubeData, [core.int]),
    matData: dart.fnType(core.List$(core.int), [core.int]),
    [_loadText]: dart.fnType(src__Textures__Textures.Texture2D, [core.String]),
    [_addMat]: dart.fnType(core.int, [core.String], [core.bool]),
    [_addMatTxt]: dart.fnType(core.int, [src__Textures__Textures.Texture2D], [core.bool]),
    [_addEmissionMat]: dart.fnType(src__Techniques__Techniques.MaterialLight, [core.String]),
    [_addCubeData]: dart.fnType(dart.void, [core.int, core.int, core.int, core.int, core.int, core.int, core.int]),
    [_addMatData]: dart.fnType(dart.void, [core.int, core.List$(core.int)])
  }));
  dart.setGetterSignature(examples__craft__main.Materials, () => ({
    __proto__: dart.getGetters(examples__craft__main.Materials.__proto__),
    materials: core.List$(src__Techniques__Techniques.MaterialLight),
    waterChanger: src__Textures__Textures.Texture2DChanger,
    selection: src__Techniques__Techniques.MaterialLight,
    crosshair: src__Techniques__Techniques.MaterialLight
  }));
  dart.setFieldSignature(examples__craft__main.Materials, () => ({
    __proto__: dart.getFields(examples__craft__main.Materials.__proto__),
    [_td]: dart.fieldType(src__Core__Core.ThreeDart),
    [_cubeData]: dart.fieldType(MapOfint$CubeData()),
    [_matData]: dart.fieldType(MapOfint$ListOfint()),
    [_mats]: dart.fieldType(ListOfMaterialLight()),
    [_light]: dart.fieldType(src__Lights__Lights.Directional),
    [_selection]: dart.fieldType(src__Techniques__Techniques.MaterialLight),
    [_crosshair]: dart.fieldType(src__Techniques__Techniques.MaterialLight),
    [_waterChanger]: dart.fieldType(src__Textures__Textures.Texture2DChanger)
  }));
  examples__craft__main.NeighborBlockInfo = class NeighborBlockInfo extends core.Object {
    get info() {
      return this[info$];
    }
    set info(value) {
      super.info = value;
    }
    get region() {
      return this[region$];
    }
    set region(value) {
      super.region = value;
    }
    get ray() {
      return this[ray$];
    }
    set ray(value) {
      super.ray = value;
    }
    get depth() {
      return this[depth$];
    }
    set depth(value) {
      super.depth = value;
    }
    toString() {
      return "NeighborBlockInfo(" + dart.str(this.info) + ", " + dart.str(this.region) + ", " + dart.str(this.ray) + ", " + dart.str(this.depth) + ")";
    }
  };
  (examples__craft__main.NeighborBlockInfo.new = function(info, region, ray, depth) {
    this[info$] = info;
    this[region$] = region;
    this[ray$] = ray;
    this[depth$] = depth;
  }).prototype = examples__craft__main.NeighborBlockInfo.prototype;
  dart.addTypeTests(examples__craft__main.NeighborBlockInfo);
  const info$ = Symbol("NeighborBlockInfo.info");
  const region$ = Symbol("NeighborBlockInfo.region");
  const ray$ = Symbol("NeighborBlockInfo.ray");
  const depth$ = Symbol("NeighborBlockInfo.depth");
  dart.setFieldSignature(examples__craft__main.NeighborBlockInfo, () => ({
    __proto__: dart.getFields(examples__craft__main.NeighborBlockInfo.__proto__),
    info: dart.finalFieldType(examples__craft__main.BlockInfo),
    region: dart.finalFieldType(src__Math__Math.HitRegion),
    ray: dart.finalFieldType(src__Math__Math.Ray3),
    depth: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(examples__craft__main.NeighborBlockInfo, ['toString']);
  const _trans = Symbol('_trans');
  const _rot = Symbol('_rot');
  const _touchingGround = Symbol('_touchingGround');
  const _selectedBlockIndex = Symbol('_selectedBlockIndex');
  const _highlight = Symbol('_highlight');
  const _collider = Symbol('_collider');
  const _camera = Symbol('_camera');
  const _playerLoc = Symbol('_playerLoc');
  const _handLoc = Symbol('_handLoc');
  const _crossHairLoc = Symbol('_crossHairLoc');
  const _crossHairs = Symbol('_crossHairs');
  const _blockHand = Symbol('_blockHand');
  const _blockHighlight = Symbol('_blockHighlight');
  const _entity = Symbol('_entity');
  const _blockHandEntities = Symbol('_blockHandEntities');
  const _onJump = Symbol('_onJump');
  const _onBlockCycle = Symbol('_onBlockCycle');
  const _onBlockChange = Symbol('_onBlockChange');
  const _onClickBlockChange = Symbol('_onClickBlockChange');
  const _onReturnToOrigin = Symbol('_onReturnToOrigin');
  const _handleCollide = Symbol('_handleCollide');
  const _updateHighlight = Symbol('_updateHighlight');
  const _updateHand = Symbol('_updateHand');
  const _changeBlock = Symbol('_changeBlock');
  const _updateHighlightHandler = Symbol('_updateHighlightHandler');
  examples__craft__main.Player = class Player extends core.Object {
    get camera() {
      return this[_camera];
    }
    get location() {
      return this[_playerLoc];
    }
    get point() {
      return this[_playerLoc].matrix.transPnt3(src__Math__Math.Point3.zero);
    }
    get entity() {
      return this[_entity];
    }
    goHome() {
      let chunk = this[_world].findChunk(examples__craft__main.Constants.playerStartX[$toInt](), examples__craft__main.Constants.playerStartZ[$toInt]());
      let l = chunk == null ? null : chunk.topHit(examples__craft__main.Constants.playerStartX[$toInt](), examples__craft__main.Constants.playerStartZ[$toInt]());
      let y = l != null ? l : 0;
      this[_trans].location = new src__Math__Math.Point3.new(examples__craft__main.Constants.playerStartX, y[$toDouble]() + examples__craft__main.Constants.playerStartYOffset, examples__craft__main.Constants.playerStartZ);
      this[_trans].velocity = src__Math__Math.Vector3.zero;
    }
    [_onReturnToOrigin](args) {
      this.goHome();
    }
    [_onJump](args) {
      if (dart.test(this[_touchingGround])) this[_trans].offsetY.velocity = examples__craft__main.Constants.jumpSpeed;
    }
    [_onBlockCycle](args) {
      let keyArgs = src__Input__Input.KeyEventArgs.as(args);
      let length = examples__craft__main.BlockType.PlaceableBlocks[$length];
      if (dart.test(keyArgs.key.shift)) {
        this[_selectedBlockIndex] = dart.notNull(this[_selectedBlockIndex]) - 1;
        if (dart.notNull(this[_selectedBlockIndex]) < 0) this[_selectedBlockIndex] = dart.notNull(length) - 1;
      } else {
        this[_selectedBlockIndex] = dart.notNull(this[_selectedBlockIndex]) + 1;
        if (dart.notNull(this[_selectedBlockIndex]) >= dart.notNull(length)) this[_selectedBlockIndex] = 0;
      }
      this[_updateHand]();
    }
    [_onBlockChange](args) {
      let key = src__Input__Input.KeyEventArgs.as(args).key;
      this[_changeBlock](key.code === src__Input__Input.Key.keyE);
    }
    [_onClickBlockChange](args) {
      let button = src__Input__Input.MouseEventArgs.as(args).button;
      this[_changeBlock](button.code === src__Input__Input.Button.right);
    }
    [_changeBlock](setBlock) {
      if ((() => {
        let t = this[_highlight];
        return t == null ? null : t.info;
      })() == null) return;
      let info = this[_highlight].info;
      let blockType = examples__craft__main.BlockType.Air;
      if (dart.test(setBlock)) {
        blockType = examples__craft__main.BlockType.PlaceableBlocks[$_get](this[_selectedBlockIndex]);
        let oldValue = this[_highlight].info.value;
        let region = this[_highlight].region;
        if (dart.test(region.overlaps(src__Math__Math.HitRegion.YPos))) {
          if (dart.test(examples__craft__main.BlockType.plant(oldValue))) return;
        }
        if (dart.test(examples__craft__main.BlockType.plant(blockType))) {
          if (!dart.test(examples__craft__main.BlockType.solid(info.below.value))) return;
        }
        if (blockType === examples__craft__main.BlockType.TrunkUD) {
          if (dart.test(region.overlaps(src__Math__Math.HitRegion.XPos['|'](src__Math__Math.HitRegion.XNeg)))) {
            blockType = examples__craft__main.BlockType.TrunkEW;
          } else if (dart.test(region.overlaps(src__Math__Math.HitRegion.ZPos['|'](src__Math__Math.HitRegion.ZNeg)))) {
            blockType = examples__craft__main.BlockType.TrunkNS;
          }
        } else if (blockType === examples__craft__main.BlockType.WoodUD) {
          if (dart.test(region.overlaps(src__Math__Math.HitRegion.XPos['|'](src__Math__Math.HitRegion.XNeg)))) {
            blockType = examples__craft__main.BlockType.WoodEW;
          } else if (dart.test(region.overlaps(src__Math__Math.HitRegion.ZPos['|'](src__Math__Math.HitRegion.ZNeg)))) {
            blockType = examples__craft__main.BlockType.WoodNS;
          }
        }
        info = info.neighbor(region.inverse());
        let playerLoc = src__Math__Math.Vector3.fromPoint3(this[_trans].location);
        let playerRect = examples__craft__main.Constants.playerRegion.translate(playerLoc);
        if (dart.test(info.blockRegion.overlaps(playerRect))) return;
      }
      let chunk = info.chunk;
      if (chunk != null) {
        info.value = blockType;
        if (blockType === examples__craft__main.BlockType.Air) {
          let aboveInfo = info.above;
          if (dart.test(examples__craft__main.BlockType.plant(aboveInfo.value))) aboveInfo.value = examples__craft__main.BlockType.Air;
        }
        chunk.needUpdate = true;
        if (dart.notNull(info.x) <= 0) {
          let l = chunk.left;
          l == null ? null : l.needUpdate = true;
        }
        if (dart.notNull(info.z) <= 0) {
          let l$ = chunk.back;
          l$ == null ? null : l$.needUpdate = true;
        }
        if (dart.notNull(info.x) >= examples__craft__main.Constants.chunkSideSize - 1) {
          let l$0 = chunk.right;
          l$0 == null ? null : l$0.needUpdate = true;
        }
        if (dart.notNull(info.z) >= examples__craft__main.Constants.chunkSideSize - 1) {
          let l$1 = chunk.front;
          l$1 == null ? null : l$1.needUpdate = true;
        }
      }
    }
    [_handleCollide](prev, loc) {
      let vector = src__Math__Math.Vector3.fromPoint3(loc['-'](prev));
      if (dart.notNull(vector.length2()) < examples__craft__main.Constants.maxCollisionSpeedSquared) {
        this[_collider].collide(examples__craft__main.Constants.playerRegion, prev, vector);
        this[_touchingGround] = this[_collider].touching.has(src__Math__Math.HitRegion.YPos);
        if (dart.test(this[_touchingGround])) this[_trans].offsetY.velocity = 0.0;
      }
      let l = this[_collider].location;
      return l != null ? l : loc;
    }
    [_updateHighlightHandler](neighbor) {
      if ((neighbor == null ? null : neighbor.info) != null && neighbor.info.value === examples__craft__main.BlockType.Air) return false;
      let info = neighbor == null ? null : neighbor.info;
      if (info != null && (dart.notNull(neighbor.depth) < 0 || info.value === examples__craft__main.BlockType.Air || info.value === examples__craft__main.BlockType.Boundary)) neighbor = null;
      this[_highlight] = neighbor;
      if (this[_highlight] == null) {
        this[_blockHighlight].enabled = false;
      } else {
        let shaper = new examples__craft__main.Shaper.new(null, src__Data__Data.VertexType.Pos['|'](src__Data__Data.VertexType.Txt2D));
        shaper.addCubeToOneShape(dart.notNull(info.chunkX) + dart.notNull(info.x), info.y, dart.notNull(info.chunkZ) + dart.notNull(info.z), true, 1.1);
        shaper.finish(JSArrayOfEntity().of([this[_blockHighlight]]));
        this[_blockHighlight].enabled = true;
      }
      return true;
    }
    [_updateHighlight](_) {
      let mat = this[_playerLoc].matrix;
      let playerViewTarget = src__Math__Math.Ray3.fromVector(mat.transPnt3(src__Math__Math.Point3.zero), mat.transVec3(new src__Math__Math.Vector3.new(0.0, 0.0, -examples__craft__main.Constants.highlightDistance)));
      let back = playerViewTarget.reverse;
      let info = this[_world].getBlock(playerViewTarget.x, playerViewTarget.y, playerViewTarget.z);
      let neighbor = new examples__craft__main.NeighborBlockInfo.new(info, src__Math__Math.HitRegion.Inside, playerViewTarget, 0);
      let depth = 0;
      while (!dart.test(this[_updateHighlightHandler](neighbor))) {
        neighbor = this[_world].getNeighborBlock(neighbor.info, playerViewTarget, back, depth);
        depth++;
      }
    }
    [_updateHand]() {
      let shaper = new examples__craft__main.Shaper.new(this[_world].materials);
      shaper.buildSingleBlock(examples__craft__main.BlockType.PlaceableBlocks[$_get](this[_selectedBlockIndex]));
      shaper.finish(this[_blockHandEntities]);
    }
  };
  (examples__craft__main.Player.new = function(userInput, world) {
    this[_trans] = null;
    this[_rot] = null;
    this[_touchingGround] = null;
    this[_selectedBlockIndex] = null;
    this[_highlight] = null;
    this[_collider] = null;
    this[_camera] = null;
    this[_playerLoc] = null;
    this[_handLoc] = null;
    this[_crossHairLoc] = null;
    this[_crossHairs] = null;
    this[_blockHand] = null;
    this[_blockHighlight] = null;
    this[_entity] = null;
    this[_blockHandEntities] = null;
    this[_world] = world;
    userInput.lockOnClick = true;
    let _ = userInput.locked;
    _.horizontalSensitivity = examples__craft__main.Constants.mouseSensitivity;
    _.verticalSensitivity = examples__craft__main.Constants.mouseSensitivity;
    let _$ = new src__Input__Input.KeyGroup.new();
    _$.addKey(src__Input__Input.Key.spacebar);
    _$.attach(userInput);
    _$.keyDown.add(dart.bind(this, _onJump));
    this[_touchingGround] = true;
    let _$0 = new src__Input__Input.KeyGroup.new();
    _$0.addKey(src__Input__Input.Key.tab);
    _$0.addKey(src__Input__Input.Key.tab, {shift: true});
    _$0.attach(userInput);
    _$0.keyDown.add(dart.bind(this, _onBlockCycle));
    let _$1 = new src__Input__Input.KeyGroup.new();
    _$1.addKey(src__Input__Input.Key.keyE);
    _$1.addKey(src__Input__Input.Key.keyQ);
    _$1.attach(userInput);
    _$1.keyDown.add(dart.bind(this, _onBlockChange));
    userInput.locked.down.add(dart.bind(this, _onClickBlockChange));
    let _$2 = new src__Input__Input.KeyGroup.new();
    _$2.addKey(src__Input__Input.Key.keyO);
    _$2.attach(userInput);
    _$2.keyDown.add(dart.bind(this, _onReturnToOrigin));
    let _$3 = new src__Movers__Movers.UserTranslator.new({input: userInput});
    _$3.offsetX.maximumVelocity = examples__craft__main.Constants.walkSpeed;
    _$3.offsetY.maximumVelocity = examples__craft__main.Constants.maxFallSpeed;
    _$3.offsetY.acceleration = examples__craft__main.Constants.gravity;
    _$3.offsetZ.maximumVelocity = examples__craft__main.Constants.walkSpeed;
    _$3.collisionHandle = dart.bind(this, _handleCollide);
    this[_trans] = _$3;
    this[_rot] = src__Movers__Movers.UserRotater.flat({input: userInput, locking: true});
    this[_rot].changed.add(dart.fn(args => {
      this[_trans].velocityRotation = src__Math__Math.Matrix3.rotateY(-dart.notNull(this[_rot].yaw.location));
    }, EventArgsToNull()));
    let _$4 = new src__Movers__Movers.Group.new(JSArrayOfMover().of([this[_trans], this[_rot]]));
    _$4.changed.add(dart.bind(this, _updateHighlight));
    this[_camera] = _$4;
    this[_playerLoc] = new src__Movers__Movers.Group.new(JSArrayOfMover().of([new src__Movers__Movers.Invert.new(this[_rot]), this[_trans], src__Movers__Movers.Constant.scale(1.0, -1.0, 1.0)]));
    this[_handLoc] = new src__Movers__Movers.Group.new(JSArrayOfMover().of([src__Movers__Movers.Constant.translate(-0.5, -0.5, -0.5), new src__Movers__Movers.Rotater.new({yaw: -0.1, deltaYaw: 0.0, deltaPitch: 0.1, deltaRoll: 0.0}), src__Movers__Movers.Constant.translate(0.5, 0.5, 0.5), src__Movers__Movers.Constant.scale(0.04, -0.04, 0.04), src__Movers__Movers.Constant.translate(-0.15, 0.06, -0.2), this[_playerLoc]]));
    this[_crossHairLoc] = new src__Movers__Movers.Group.new(JSArrayOfMover().of([src__Movers__Movers.Constant.scale(0.005, -0.005, 0.005), src__Movers__Movers.Constant.translate(0.0, 0.0, -0.2), this[_playerLoc]]));
    this[_crossHairs] = new src__Core__Core.Entity.new({mover: this[_crossHairLoc], shape: src__Shapes__Shapes.square({type: src__Data__Data.VertexType.Pos['|'](src__Data__Data.VertexType.Txt2D)}), tech: this[_world].materials.crosshair});
    this[_blockHand] = new src__Core__Core.Entity.new({mover: this[_handLoc]});
    this[_blockHandEntities] = JSArrayOfEntity().of([]);
    for (let mat of this[_world].materials.materials) {
      let entity = new src__Core__Core.Entity.new({tech: mat});
      this[_blockHand].children.add(entity);
      this[_blockHandEntities][$add](entity);
    }
    this[_selectedBlockIndex] = 0;
    this[_collider] = new examples__craft__main.Collider.new(this[_world]);
    this[_blockHighlight] = new src__Core__Core.Entity.new({tech: this[_world].materials.selection});
    this[_highlight] = null;
    this[_entity] = new src__Core__Core.Entity.new({children: JSArrayOfEntity().of([this[_crossHairs], this[_blockHand], this[_blockHighlight]])});
    this[_updateHand]();
  }).prototype = examples__craft__main.Player.prototype;
  dart.addTypeTests(examples__craft__main.Player);
  dart.setMethodSignature(examples__craft__main.Player, () => ({
    __proto__: dart.getMethods(examples__craft__main.Player.__proto__),
    goHome: dart.fnType(dart.void, []),
    [_onReturnToOrigin]: dart.fnType(dart.void, [src__Events__Events.EventArgs]),
    [_onJump]: dart.fnType(dart.void, [src__Events__Events.EventArgs]),
    [_onBlockCycle]: dart.fnType(dart.void, [src__Events__Events.EventArgs]),
    [_onBlockChange]: dart.fnType(dart.void, [src__Events__Events.EventArgs]),
    [_onClickBlockChange]: dart.fnType(dart.void, [src__Events__Events.EventArgs]),
    [_changeBlock]: dart.fnType(dart.void, [core.bool]),
    [_handleCollide]: dart.fnType(src__Math__Math.Point3, [src__Math__Math.Point3, src__Math__Math.Point3]),
    [_updateHighlightHandler]: dart.fnType(core.bool, [examples__craft__main.NeighborBlockInfo]),
    [_updateHighlight]: dart.fnType(dart.void, [src__Events__Events.EventArgs]),
    [_updateHand]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(examples__craft__main.Player, () => ({
    __proto__: dart.getGetters(examples__craft__main.Player.__proto__),
    camera: src__Movers__Movers.Group,
    location: src__Movers__Movers.Group,
    point: src__Math__Math.Point3,
    entity: src__Core__Core.Entity
  }));
  dart.setFieldSignature(examples__craft__main.Player, () => ({
    __proto__: dart.getFields(examples__craft__main.Player.__proto__),
    [_trans]: dart.fieldType(src__Movers__Movers.UserTranslator),
    [_rot]: dart.fieldType(src__Movers__Movers.UserRotater),
    [_world]: dart.fieldType(examples__craft__main.World),
    [_touchingGround]: dart.fieldType(core.bool),
    [_selectedBlockIndex]: dart.fieldType(core.int),
    [_highlight]: dart.fieldType(examples__craft__main.NeighborBlockInfo),
    [_collider]: dart.fieldType(examples__craft__main.Collider),
    [_camera]: dart.fieldType(src__Movers__Movers.Group),
    [_playerLoc]: dart.fieldType(src__Movers__Movers.Group),
    [_handLoc]: dart.fieldType(src__Movers__Movers.Group),
    [_crossHairLoc]: dart.fieldType(src__Movers__Movers.Group),
    [_crossHairs]: dart.fieldType(src__Core__Core.Entity),
    [_blockHand]: dart.fieldType(src__Core__Core.Entity),
    [_blockHighlight]: dart.fieldType(src__Core__Core.Entity),
    [_entity]: dart.fieldType(src__Core__Core.Entity),
    [_blockHandEntities]: dart.fieldType(ListOfEntity())
  }));
  const _simplex = Symbol('_simplex');
  const _tempCache = Symbol('_tempCache');
  const _curChunk = Symbol('_curChunk');
  const _prepareHeightCache = Symbol('_prepareHeightCache');
  const _clearChunk = Symbol('_clearChunk');
  const _turrain = Symbol('_turrain');
  const _applyWater = Symbol('_applyWater');
  const _applySand = Symbol('_applySand');
  const _trees = Symbol('_trees');
  const _addPyramid = Symbol('_addPyramid');
  const _plants = Symbol('_plants');
  const _add3Dart = Symbol('_add3Dart');
  const _towerOfPimps = Symbol('_towerOfPimps');
  const _noise = Symbol('_noise');
  const _turrainHeight = Symbol('_turrainHeight');
  const _turrainBlock = Symbol('_turrainBlock');
  const _applyWaterBlock = Symbol('_applyWaterBlock');
  const _applySandBlock = Symbol('_applySandBlock');
  const _addTree = Symbol('_addTree');
  const _addTreeBase = Symbol('_addTreeBase');
  const _addTreeLeaves = Symbol('_addTreeLeaves');
  const _addPlant = Symbol('_addPlant');
  examples__craft__main.RandomGenerator = class RandomGenerator extends core.Object {
    fillChunk(chunk) {
      if (chunk == null) return;
      this[_curChunk] = chunk;
      this[_prepareHeightCache]();
      this[_clearChunk]();
      this[_turrain]();
      this[_applyWater]();
      this[_applySand]();
      this[_trees]();
      this[_addPyramid]();
      this[_plants]();
      this[_add3Dart]();
      this[_towerOfPimps]();
      chunk.finishGenerate();
    }
    [_noise](x, z, scale) {
      return dart.notNull(this[_simplex].eval2D((dart.notNull(x) + dart.notNull(this[_curChunk].x)) * dart.notNull(scale), (dart.notNull(z) + dart.notNull(this[_curChunk].z)) * dart.notNull(scale))) * 0.5 + 0.5;
    }
    [_turrainHeight](x, z) {
      return this[_tempCache][$_get]((dart.notNull(x) + examples__craft__main.Constants.borderSize) * examples__craft__main.Constants.paddedSize + (dart.notNull(z) + examples__craft__main.Constants.borderSize));
    }
    [_prepareHeightCache]() {
      let offset = 0;
      for (let x = examples__craft__main.Constants.paddedMin; x < examples__craft__main.Constants.paddedMax; x++) {
        for (let z = examples__craft__main.Constants.paddedMin; z < examples__craft__main.Constants.paddedMax; z++) {
          let terrain = 0.6 * dart.notNull(this[_noise](x, z, 0.001)) + 0.3 * dart.notNull(this[_noise](x, z, 0.01)) + 0.1 * dart.notNull(this[_noise](x, z, 0.1));
          let maxy = (math.pow(terrain, 2.0) * examples__craft__main.Constants.chunkYSize)[$toInt]();
          maxy = maxy >= examples__craft__main.Constants.chunkYSize ? examples__craft__main.Constants.chunkYSize - 1 : maxy;
          this[_tempCache][$_set](offset, maxy);
          offset++;
        }
      }
    }
    [_clearChunk]() {
      this[_curChunk][_data][$fillRange](0, examples__craft__main.Constants.chunkDataLength, examples__craft__main.BlockType.Air);
    }
    [_turrain]() {
      for (let x = 0; x < examples__craft__main.Constants.chunkSideSize; x++) {
        for (let z = 0; z < examples__craft__main.Constants.chunkSideSize; z++) {
          this[_turrainBlock](x, z);
        }
      }
    }
    [_turrainBlock](x, z) {
      let maxy = this[_turrainHeight](x, z);
      for (let y = 0; y <= dart.notNull(maxy); y++) {
        let block = examples__craft__main.BlockType.Rock;
        if (dart.notNull(maxy) < examples__craft__main.Constants.waterDepth) {
          if (dart.notNull(maxy) - examples__craft__main.Constants.sandDepth <= y) {
            block = examples__craft__main.BlockType.Sand;
          }
        } else {
          if (maxy === y) {
            block = examples__craft__main.BlockType.Turf;
          } else if (dart.notNull(maxy) - examples__craft__main.Constants.dirtDepth <= y) {
            block = examples__craft__main.BlockType.Dirt;
          }
        }
        this[_curChunk].setBlock(x, y, z, block);
      }
    }
    [_applyWater]() {
      for (let x = 0; x < examples__craft__main.Constants.chunkSideSize; x++) {
        for (let z = 0; z < examples__craft__main.Constants.chunkSideSize; z++) {
          this[_applyWaterBlock](x, z);
        }
      }
    }
    [_applyWaterBlock](x, z) {
      let maxy = this[_curChunk].topHit(x, z, 0);
      if (dart.notNull(maxy) < examples__craft__main.Constants.waterDepth) {
        for (let y = examples__craft__main.Constants.waterDepth; y > dart.notNull(maxy); y--) {
          this[_curChunk].setBlock(x, y, z, examples__craft__main.BlockType.Water);
        }
      }
    }
    [_applySand]() {
      for (let x = -1; x <= examples__craft__main.Constants.chunkSideSize; x++) {
        for (let z = -1; z <= examples__craft__main.Constants.chunkSideSize; z++) {
          this[_applySandBlock](x, z);
        }
      }
    }
    [_applySandBlock](x, z) {
      let maxy = this[_turrainHeight](x, z);
      if (dart.notNull(maxy) < examples__craft__main.Constants.waterDepth) {
        for (let y = examples__craft__main.Constants.maxEdgeSand; y > examples__craft__main.Constants.minEdgeSand; y--) {
          for (let dx = -1; dx <= 1; dx++) {
            for (let dz = -1; dz <= 1; dz++) {
              let value = this[_curChunk].getBlock(dart.notNull(x) + dx, y, dart.notNull(z) + dz);
              if (value === examples__craft__main.BlockType.Turf || value === examples__craft__main.BlockType.DryLeaves) {
                this[_curChunk].setBlock(dart.notNull(x) + dx, y, dart.notNull(z) + dz, examples__craft__main.BlockType.Sand);
              }
            }
          }
        }
      }
    }
    [_trees]() {
      for (let x = examples__craft__main.Constants.paddedMin; x < examples__craft__main.Constants.paddedMax; x++) {
        for (let z = examples__craft__main.Constants.paddedMin; z < examples__craft__main.Constants.paddedMax; z++) {
          if (dart.notNull(this[_noise](x, z, 1.5)) < 0.1) this[_addTree](x, z);
        }
      }
    }
    [_addTree](x, z) {
      if (dart.notNull(x) + dart.notNull(this[_curChunk].x) >= -examples__craft__main.Constants.pyramidSize && dart.notNull(x) + dart.notNull(this[_curChunk].x) < examples__craft__main.Constants.pyramidSize && dart.notNull(z) + dart.notNull(this[_curChunk].z) >= -examples__craft__main.Constants.pyramidSize && dart.notNull(z) + dart.notNull(this[_curChunk].z) < examples__craft__main.Constants.pyramidSize) return;
      let maxy = this[_turrainHeight](x, z);
      if (dart.notNull(maxy) < examples__craft__main.Constants.treeMin) return;
      for (let y = 1; y < examples__craft__main.Constants.treeHeight; y++) {
        this[_curChunk].setBlock(x, dart.notNull(maxy) + y, z, examples__craft__main.BlockType.TrunkUD);
      }
      this[_addTreeBase](x, z);
      this[_addTreeLeaves](x, dart.notNull(maxy) + examples__craft__main.Constants.treeHeight, z);
    }
    [_addTreeBase](x, z) {
      for (let px = -examples__craft__main.Constants.deadLeavesRadius; px <= examples__craft__main.Constants.deadLeavesRadius; px++) {
        for (let pz = -examples__craft__main.Constants.deadLeavesRadius; pz <= examples__craft__main.Constants.deadLeavesRadius; pz++) {
          if (px * px + pz * pz <= examples__craft__main.Constants.deadLeavesRadius2) {
            for (let y = examples__craft__main.Constants.chunkYSize - 1; y >= 0; y--) {
              if (this[_curChunk].getBlock(dart.notNull(x) + px, y, dart.notNull(z) + pz) === examples__craft__main.BlockType.Turf) {
                this[_curChunk].setBlock(dart.notNull(x) + px, y, dart.notNull(z) + pz, examples__craft__main.BlockType.DryLeaves);
                break;
              }
            }
          }
        }
      }
    }
    [_addTreeLeaves](x, y, z) {
      for (let px = -examples__craft__main.Constants.leavesRadius; px <= examples__craft__main.Constants.leavesRadius; px++) {
        for (let py = -examples__craft__main.Constants.leavesRadius; py <= examples__craft__main.Constants.leavesRadius; py++) {
          for (let pz = -examples__craft__main.Constants.leavesRadius; pz <= examples__craft__main.Constants.leavesRadius; pz++) {
            if (px * px + py * py + pz * pz <= examples__craft__main.Constants.leavesRadius2) {
              if (this[_curChunk].getBlock(dart.notNull(x) + px, dart.notNull(y) + py, dart.notNull(z) + pz) === examples__craft__main.BlockType.Air) {
                this[_curChunk].setBlock(dart.notNull(x) + px, dart.notNull(y) + py, dart.notNull(z) + pz, examples__craft__main.BlockType.Leaves);
              }
            }
          }
        }
      }
    }
    [_plants]() {
      for (let x = 0; x < examples__craft__main.Constants.chunkSideSize; x++) {
        for (let z = 0; z < examples__craft__main.Constants.chunkSideSize; z++) {
          if (dart.notNull(this[_noise](x, z, 12.5)) < 0.1)
            this[_addPlant](x, z, examples__craft__main.BlockType.RedFlower);
          else if (dart.notNull(this[_noise](x + 400, z, 12.5)) < 0.1)
            this[_addPlant](x, z, examples__craft__main.BlockType.BlueFlower);
          else if (dart.notNull(this[_noise](x, z + 400, 12.5)) < 0.1)
            this[_addPlant](x, z, examples__craft__main.BlockType.WhiteFlower);
          else if (dart.notNull(this[_noise](x + 400, z + 400, 12.5)) < 0.15)
            this[_addPlant](x, z, examples__craft__main.BlockType.Grass);
          else if (dart.notNull(this[_noise](x - 400, z, 12.5)) < 0.1)
            this[_addPlant](x, z, examples__craft__main.BlockType.Fern);
          else if (dart.notNull(this[_noise](x, z - 400, 12.5)) < 0.08) this[_addPlant](x, z, examples__craft__main.BlockType.Mushroom);
        }
      }
    }
    [_addPlant](x, z, value) {
      let maxy = this[_curChunk].topHit(x, z, 0);
      let oldValue = this[_curChunk].getBlock(x, maxy, z);
      if (oldValue !== examples__craft__main.BlockType.Turf && oldValue !== examples__craft__main.BlockType.DryLeaves) return;
      this[_curChunk].setBlock(x, dart.notNull(maxy) + 1, z, value);
    }
    [_addPyramid]() {
      if (dart.notNull(this[_curChunk].x) + examples__craft__main.Constants.chunkSideSize < -examples__craft__main.Constants.pyramidSize || dart.notNull(this[_curChunk].x) > examples__craft__main.Constants.pyramidSize || dart.notNull(this[_curChunk].z) + examples__craft__main.Constants.chunkSideSize < -examples__craft__main.Constants.pyramidSize || dart.notNull(this[_curChunk].z) > examples__craft__main.Constants.pyramidSize) return;
      let put = (dx, dy, dz, value) => {
        this[_curChunk].setBlock(dart.notNull(dx) - dart.notNull(this[_curChunk].x), dy, dart.notNull(dz) - dart.notNull(this[_curChunk].z), value);
      };
      dart.fn(put, intAndintAndint__ToNull());
      for (let py = examples__craft__main.Constants.pyramidSize; py >= 0; py = py - 2) {
        let width = examples__craft__main.Constants.pyramidSize - py + 3;
        for (let px = -width; px <= width; px++) {
          for (let pz = -width; pz <= width; pz++) {
            put(px, py, pz, examples__craft__main.BlockType.WhiteShine);
            put(px, py - 1, pz, examples__craft__main.BlockType.WhiteShine);
          }
        }
        for (let pw = -2; pw <= 2; pw++) {
          put(-width - 1, py, pw, examples__craft__main.BlockType.Brick);
          put(-width - 1, py - 1, pw, examples__craft__main.BlockType.Brick);
          put(-width - 2, py - 1, pw, examples__craft__main.BlockType.Brick);
          put(width + 1, py, pw, examples__craft__main.BlockType.Brick);
          put(width + 1, py - 1, pw, examples__craft__main.BlockType.Brick);
          put(width + 2, py - 1, pw, examples__craft__main.BlockType.Brick);
          put(pw, py, -width - 1, examples__craft__main.BlockType.Brick);
          put(pw, py - 1, -width - 1, examples__craft__main.BlockType.Brick);
          put(pw, py - 1, -width - 2, examples__craft__main.BlockType.Brick);
          put(pw, py, width + 1, examples__craft__main.BlockType.Brick);
          put(pw, py - 1, width + 1, examples__craft__main.BlockType.Brick);
          put(pw, py - 1, width + 2, examples__craft__main.BlockType.Brick);
        }
        put(-width - 1, py + 1, 2, examples__craft__main.BlockType.Brick);
        put(-width - 2, py, 2, examples__craft__main.BlockType.Brick);
        put(-width - 1, py + 1, -2, examples__craft__main.BlockType.Brick);
        put(-width - 2, py, -2, examples__craft__main.BlockType.Brick);
        put(width + 1, py + 1, 2, examples__craft__main.BlockType.Brick);
        put(width + 2, py, 2, examples__craft__main.BlockType.Brick);
        put(width + 1, py + 1, -2, examples__craft__main.BlockType.Brick);
        put(width + 2, py, -2, examples__craft__main.BlockType.Brick);
        put(2, py + 1, -width - 1, examples__craft__main.BlockType.Brick);
        put(2, py, -width - 2, examples__craft__main.BlockType.Brick);
        put(-2, py + 1, -width - 1, examples__craft__main.BlockType.Brick);
        put(-2, py, -width - 2, examples__craft__main.BlockType.Brick);
        put(2, py + 1, width + 1, examples__craft__main.BlockType.Brick);
        put(2, py, width + 2, examples__craft__main.BlockType.Brick);
        put(-2, py + 1, width + 1, examples__craft__main.BlockType.Brick);
        put(-2, py, width + 2, examples__craft__main.BlockType.Brick);
      }
    }
    [_add3Dart]() {
      let x = -12, y = 40, z = -25;
      let xWidth = 24, zWidth = 3;
      if (dart.notNull(this[_curChunk].x) + examples__craft__main.Constants.chunkSideSize < x - xWidth || dart.notNull(this[_curChunk].x) > x + xWidth || dart.notNull(this[_curChunk].z) + examples__craft__main.Constants.chunkSideSize < z - zWidth || dart.notNull(this[_curChunk].z) > z + zWidth) return;
      let put = (value, dx, dy, px, py) => {
        for (let i = dart.notNull(px[$length]) - 1; i >= 0; i--) {
          this[_curChunk].setBlock(x + dart.notNull(dx) + dart.notNull(px[$_get](i)) - dart.notNull(this[_curChunk].x), y + dart.notNull(dy) - dart.notNull(py[$_get](i)), z - dart.notNull(this[_curChunk].z), value);
        }
      };
      dart.fn(put, intAndintAndint__ToNull$());
      put(examples__craft__main.BlockType.RedShine, 0, 0, JSArrayOfint().of([0, 1, 2, 3, 4, 4, 3, 2, 4, 4, 3, 2, 1, 0]), JSArrayOfint().of([1, 0, 0, 0, 1, 2, 3, 3, 4, 5, 6, 6, 6, 5]));
      put(examples__craft__main.BlockType.RedShine, 6, 0, JSArrayOfint().of([0, 1, 2, 3, 4, 4, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0]), JSArrayOfint().of([0, 0, 0, 1, 2, 3, 4, 5, 6, 6, 6, 5, 4, 3, 2, 1]));
      put(examples__craft__main.BlockType.BlackShine, 12, 0, JSArrayOfint().of([0, 0, 0, 0, 0, 1, 2, 1, 2, 3, 3, 3, 3, 3]), JSArrayOfint().of([2, 3, 4, 5, 6, 1, 1, 4, 4, 2, 3, 4, 5, 6]));
      put(examples__craft__main.BlockType.BlackShine, 17, 0, JSArrayOfint().of([0, 0, 0, 0, 0, 0, 1, 2, 1, 2, 3, 3, 3, 3]), JSArrayOfint().of([1, 2, 3, 4, 5, 6, 1, 1, 4, 4, 2, 3, 5, 6]));
      put(examples__craft__main.BlockType.BlackShine, 22, 0, JSArrayOfint().of([0, 2, 1, 1, 1, 1, 1, 1]), JSArrayOfint().of([1, 1, 1, 2, 3, 4, 5, 6]));
    }
    [_towerOfPimps]() {
      let x = 0, y = 2, z = 0;
      let xWidth = 3, zWidth = 3, height = 7;
      if (dart.notNull(this[_curChunk].x) + examples__craft__main.Constants.chunkSideSize < x - xWidth || dart.notNull(this[_curChunk].x) > x + xWidth || dart.notNull(this[_curChunk].z) + examples__craft__main.Constants.chunkSideSize < z - zWidth || dart.notNull(this[_curChunk].z) > z + zWidth) return;
      let put = (dx, dy, dz, value) => {
        this[_curChunk].setBlock(dart.notNull(dx) - dart.notNull(this[_curChunk].x), dy, dart.notNull(dz) - dart.notNull(this[_curChunk].z), value);
      };
      dart.fn(put, intAndintAndint__ToNull());
      for (let px = -xWidth; px <= xWidth; px++) {
        for (let py = 0; py <= height; py++) {
          for (let pz = -zWidth; pz <= zWidth; pz++) {
            put(x + px, y + py, z + pz, examples__craft__main.BlockType.Air);
          }
        }
      }
      put(x, y, z, examples__craft__main.BlockType.BlackShine);
      put(x, y + 1, z, examples__craft__main.BlockType.YellowShine);
      put(x, y + 2, z, examples__craft__main.BlockType.YellowShine);
      put(x, y + 3, z, examples__craft__main.BlockType.YellowShine);
      put(x, y + 4, z, examples__craft__main.BlockType.YellowShine);
    }
  };
  (examples__craft__main.RandomGenerator.new = function(seed) {
    if (seed === void 0) seed = 0;
    this[_simplex] = null;
    this[_tempCache] = null;
    this[_curChunk] = null;
    this[_simplex] = src__OpenSimplexNoise.OpenSimplexNoise.new(seed);
    this[_tempCache] = typed_data.Uint8List.new(examples__craft__main.Constants.heightCacheLength);
    this[_curChunk] = null;
  }).prototype = examples__craft__main.RandomGenerator.prototype;
  dart.addTypeTests(examples__craft__main.RandomGenerator);
  examples__craft__main.RandomGenerator[dart.implements] = () => [examples__craft__main.Generator];
  dart.setMethodSignature(examples__craft__main.RandomGenerator, () => ({
    __proto__: dart.getMethods(examples__craft__main.RandomGenerator.__proto__),
    fillChunk: dart.fnType(dart.void, [examples__craft__main.Chunk]),
    [_noise]: dart.fnType(core.double, [core.int, core.int, core.double]),
    [_turrainHeight]: dart.fnType(core.int, [core.int, core.int]),
    [_prepareHeightCache]: dart.fnType(dart.void, []),
    [_clearChunk]: dart.fnType(dart.void, []),
    [_turrain]: dart.fnType(dart.void, []),
    [_turrainBlock]: dart.fnType(dart.void, [core.int, core.int]),
    [_applyWater]: dart.fnType(dart.void, []),
    [_applyWaterBlock]: dart.fnType(dart.void, [core.int, core.int]),
    [_applySand]: dart.fnType(dart.void, []),
    [_applySandBlock]: dart.fnType(dart.void, [core.int, core.int]),
    [_trees]: dart.fnType(dart.void, []),
    [_addTree]: dart.fnType(dart.void, [core.int, core.int]),
    [_addTreeBase]: dart.fnType(dart.void, [core.int, core.int]),
    [_addTreeLeaves]: dart.fnType(dart.void, [core.int, core.int, core.int]),
    [_plants]: dart.fnType(dart.void, []),
    [_addPlant]: dart.fnType(dart.void, [core.int, core.int, core.int]),
    [_addPyramid]: dart.fnType(dart.void, []),
    [_add3Dart]: dart.fnType(dart.void, []),
    [_towerOfPimps]: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(examples__craft__main.RandomGenerator, () => ({
    __proto__: dart.getFields(examples__craft__main.RandomGenerator.__proto__),
    [_simplex]: dart.fieldType(src__OpenSimplexNoise.OpenSimplexNoise),
    [_tempCache]: dart.fieldType(typed_data.Uint8List),
    [_curChunk]: dart.fieldType(examples__craft__main.Chunk)
  }));
  dart.defineLazy(examples__craft__main, {
    /*examples__craft__main._showWireFrame*/get _showWireFrame() {
      return false;
    }
  });
  const _vertexType = Symbol('_vertexType');
  const _shapes = Symbol('_shapes');
  const _addBlockToShapes = Symbol('_addBlockToShapes');
  const _getShape = Symbol('_getShape');
  const _addTopToShape = Symbol('_addTopToShape');
  const _addBottomToShape = Symbol('_addBottomToShape');
  const _addLeftToShape = Symbol('_addLeftToShape');
  const _addRightToShape = Symbol('_addRightToShape');
  const _addFrontToShape = Symbol('_addFrontToShape');
  const _addBackToShape = Symbol('_addBackToShape');
  const _addCubeToShapes = Symbol('_addCubeToShapes');
  const _addFernToShapes = Symbol('_addFernToShapes');
  const _addMushroomToShapes = Symbol('_addMushroomToShapes');
  const _addPlantToShapes = Symbol('_addPlantToShapes');
  const _getVertex = Symbol('_getVertex');
  const _addQuad = Symbol('_addQuad');
  const _addFace = Symbol('_addFace');
  const _addQuadRotToShape = Symbol('_addQuadRotToShape');
  const _addFernLeaf = Symbol('_addFernLeaf');
  examples__craft__main.Shaper = class Shaper extends core.Object {
    buildChunkShapes(chunk) {
      for (let x = examples__craft__main.Constants.chunkSideSize - 1; x >= 0; x--) {
        for (let y = examples__craft__main.Constants.chunkYSize - 1; y >= -1; y--) {
          for (let z = examples__craft__main.Constants.chunkSideSize - 1; z >= 0; z--) {
            let value = chunk.getWorldBlock(x, y, z);
            this[_addBlockToShapes](chunk, x, y, z, value, false, 1.0);
          }
        }
      }
    }
    buildSingleBlock(value) {
      this[_addBlockToShapes](null, 0, 0, 0, value, false, 1.0);
    }
    addCubeToOneShape(x, y, z, twoSided, scalar) {
      let loc = new src__Math__Math.Point3.new(x[$toDouble]() + 0.5, y[$toDouble]() + 0.5, z[$toDouble]() + 0.5);
      let shape = this[_getShape](0);
      this[_addTopToShape](shape, loc, twoSided, scalar);
      this[_addBottomToShape](shape, loc, twoSided, scalar);
      this[_addLeftToShape](shape, loc, twoSided, scalar);
      this[_addRightToShape](shape, loc, twoSided, scalar);
      this[_addFrontToShape](shape, loc, twoSided, scalar);
      this[_addBackToShape](shape, loc, twoSided, scalar);
    }
    finish(entities) {
      for (let i = dart.notNull(entities[$length]) - 1; i >= 0; i--) {
        let entity = entities[$_get](i);
        let shape = this[_shapes][$_get](i);
        if (shape != null) {
          entity.shapeBuilder = shape;
          entity.enabled = !dart.test(shape.vertices[$isEmpty]);
        } else {
          entity.shapeBuilder = null;
          entity.enabled = false;
        }
      }
      this[_shapes] = null;
    }
    [_getShape](index) {
      let shape = this[_shapes][$_get](index);
      if (shape == null) {
        shape = new src__Shapes__Shapes.ReducedShape.new(this[_vertexType]);
        this[_shapes][$_set](index, shape);
      }
      return shape;
    }
    [_addBlockToShapes](chunk, x, y, z, value, twoSided, scalar) {
      let chunkLoc = new src__Math__Math.Point3.new(x[$toDouble](), y[$toDouble](), z[$toDouble]());
      if (chunk != null) {
        x = dart.notNull(x) + dart.notNull(chunk.x);
        z = dart.notNull(z) + dart.notNull(chunk.z);
      }
      let loc = new src__Math__Math.Point3.new(x[$toDouble]() + 0.5, y[$toDouble]() + 0.5, z[$toDouble]() + 0.5);
      if (value === examples__craft__main.BlockType.Air)
        return;
      else if (value === examples__craft__main.BlockType.Water)
        this[_addCubeToShapes](chunk, loc, chunkLoc, value, twoSided, scalar);
      else if (dart.test(examples__craft__main.BlockType.open(value))) {
        if (value === examples__craft__main.BlockType.Fern)
          this[_addFernToShapes](loc);
        else if (value === examples__craft__main.BlockType.Mushroom)
          this[_addMushroomToShapes](loc);
        else
          this[_addPlantToShapes](loc, value);
      } else if (dart.test(examples__craft__main.BlockType.solid(value))) this[_addCubeToShapes](chunk, loc, chunkLoc, value, twoSided, scalar);
    }
    [_getVertex](loc, norm, tu, tv) {
      return new src__Shapes__Shapes.Vertex.new({type: src__Data__Data.VertexType.Pos['|'](src__Data__Data.VertexType.Txt2D)['|'](src__Data__Data.VertexType.Norm), loc: loc, norm: norm, txt2D: new src__Math__Math.Point2.new(tu, tv)});
    }
    [_addQuad](shape, loc, off1, off2, off3, off4, norm, twoSided, scalar) {
      let ver1 = this[_getVertex](loc['+'](off1['*'](scalar)), norm, 0.0, 0.0);
      let ver2 = this[_getVertex](loc['+'](off2['*'](scalar)), norm, 0.0, 1.0);
      let ver3 = this[_getVertex](loc['+'](off3['*'](scalar)), norm, 1.0, 1.0);
      let ver4 = this[_getVertex](loc['+'](off4['*'](scalar)), norm, 1.0, 0.0);
      let i = shape.addVertices(JSArrayOfVertex().of([ver1, ver2, ver3, ver4]));
      if (false) {
        shape.addLines(JSArrayOfint().of([i, dart.notNull(i) + 1, dart.notNull(i) + 1, dart.notNull(i) + 2, dart.notNull(i) + 2, dart.notNull(i) + 3, dart.notNull(i) + 3, i, i, dart.notNull(i) + 2]));
      } else {
        shape.addTriangleFan(JSArrayOfint().of([i, dart.notNull(i) + 1, dart.notNull(i) + 2, dart.notNull(i) + 3]));
        if (dart.test(twoSided)) shape.addTriangleFan(JSArrayOfint().of([dart.notNull(i) + 2, dart.notNull(i) + 1, i, dart.notNull(i) + 3]));
      }
    }
    [_addTopToShape](shape, loc, twoSided, scalar) {
      return this[_addQuad](shape, loc, examples__craft__main.Constants.backTopLeft, examples__craft__main.Constants.frontTopLeft, examples__craft__main.Constants.frontTopRight, examples__craft__main.Constants.backTopRight, examples__craft__main.Constants.topNorm, twoSided, scalar);
    }
    [_addBottomToShape](shape, loc, twoSided, scalar) {
      return this[_addQuad](shape, loc, examples__craft__main.Constants.frontBottomLeft, examples__craft__main.Constants.backBottomLeft, examples__craft__main.Constants.backBottomRight, examples__craft__main.Constants.frontBottomRight, examples__craft__main.Constants.bottomNorm, twoSided, scalar);
    }
    [_addLeftToShape](shape, loc, twoSided, scalar) {
      return this[_addQuad](shape, loc, examples__craft__main.Constants.backTopLeft, examples__craft__main.Constants.backBottomLeft, examples__craft__main.Constants.frontBottomLeft, examples__craft__main.Constants.frontTopLeft, examples__craft__main.Constants.leftNorm, twoSided, scalar);
    }
    [_addRightToShape](shape, loc, twoSided, scalar) {
      return this[_addQuad](shape, loc, examples__craft__main.Constants.frontTopRight, examples__craft__main.Constants.frontBottomRight, examples__craft__main.Constants.backBottomRight, examples__craft__main.Constants.backTopRight, examples__craft__main.Constants.rightNorm, twoSided, scalar);
    }
    [_addFrontToShape](shape, loc, twoSided, scalar) {
      return this[_addQuad](shape, loc, examples__craft__main.Constants.frontTopLeft, examples__craft__main.Constants.frontBottomLeft, examples__craft__main.Constants.frontBottomRight, examples__craft__main.Constants.frontTopRight, examples__craft__main.Constants.frontNorm, twoSided, scalar);
    }
    [_addBackToShape](shape, loc, twoSided, scalar) {
      return this[_addQuad](shape, loc, examples__craft__main.Constants.backTopRight, examples__craft__main.Constants.backBottomRight, examples__craft__main.Constants.backBottomLeft, examples__craft__main.Constants.backTopLeft, examples__craft__main.Constants.backNorm, twoSided, scalar);
    }
    [_addCubeToShapes](chunk, loc, chunkLoc, value, twoSided, scalar) {
      let data = this[_mats].cubeData(value);
      if (dart.test(this[_addFace](chunk, value, chunkLoc, 0, 1, 0))) this[_addTopToShape](this[_getShape](data.topIndex), loc, twoSided, scalar);
      if (dart.test(this[_addFace](chunk, value, chunkLoc, 0, -1, 0))) this[_addBottomToShape](this[_getShape](data.bottomIndex), loc, twoSided, scalar);
      if (dart.test(this[_addFace](chunk, value, chunkLoc, -1, 0, 0))) this[_addLeftToShape](this[_getShape](data.leftIndex), loc, twoSided, scalar);
      if (dart.test(this[_addFace](chunk, value, chunkLoc, 1, 0, 0))) this[_addRightToShape](this[_getShape](data.rightIndex), loc, twoSided, scalar);
      if (dart.test(this[_addFace](chunk, value, chunkLoc, 0, 0, 1))) this[_addFrontToShape](this[_getShape](data.frontIndex), loc, twoSided, scalar);
      if (dart.test(this[_addFace](chunk, value, chunkLoc, 0, 0, -1))) this[_addBackToShape](this[_getShape](data.backIndex), loc, twoSided, scalar);
    }
    [_addFace](chunk, value, chunkLoc, x, y, z) {
      if (chunk == null) return true;
      y = dart.notNull(y) + chunkLoc.y[$toInt]();
      if (dart.notNull(y) < 0) return false;
      if (dart.notNull(y) >= examples__craft__main.Constants.chunkYSize) return true;
      x = dart.notNull(x) + chunkLoc.x[$toInt]();
      z = dart.notNull(z) + chunkLoc.z[$toInt]();
      let neighbor = chunk.getWorldBlock(x, y, z);
      return examples__craft__main.BlockType.drawSide(value, neighbor);
    }
    [_addQuadRotToShape](shape, loc, angle, twoSided) {
      if (twoSided === void 0) twoSided = false;
      let c = math.cos(angle) * 0.5, s = math.sin(angle) * 0.5;
      this[_addQuad](shape, loc, new src__Math__Math.Point3.new(c, 0.0, -s), new src__Math__Math.Point3.new(c, -0.5, -s), new src__Math__Math.Point3.new(-c, -0.5, s), new src__Math__Math.Point3.new(-c, 0.0, s), new src__Math__Math.Vector3.new(s, 0.0, c), twoSided, 1.0);
    }
    [_addPlantToShapes](loc, value) {
      let offset = this[_mats].matData(value);
      this[_addQuadRotToShape](this[_getShape](offset[$_get](0)), loc, 3.141592653589793 * 0.5 / 4.0, true);
      this[_addQuadRotToShape](this[_getShape](offset[$_get](0)), loc, 3.141592653589793 * 2.5 / 4.0, true);
    }
    [_addFernLeaf](shape, loc, angle) {
      let mat = src__Math__Math.Matrix3.rotateY(angle);
      this[_addQuad](shape, loc, mat.transPnt3(new src__Math__Math.Point3.new(0.4, -0.1, -0.4)), mat.transPnt3(new src__Math__Math.Point3.new(0.0, -0.5, 0.0)), mat.transPnt3(new src__Math__Math.Point3.new(0.4, -0.1, 0.4)), mat.transPnt3(new src__Math__Math.Point3.new(0.8, 0.0, 0.0)), examples__craft__main.Constants.topNorm, true, 1.0);
    }
    [_addFernToShapes](loc) {
      let offset = this[_mats].matData(examples__craft__main.BlockType.Fern);
      this[_addFernLeaf](this[_getShape](offset[$_get](0)), loc, 3.141592653589793 * 0.2 / 2.0);
      this[_addFernLeaf](this[_getShape](offset[$_get](0)), loc, 3.141592653589793 * 1.1 / 2.0);
      this[_addFernLeaf](this[_getShape](offset[$_get](0)), loc, 3.141592653589793 * 2.3 / 2.0);
      this[_addFernLeaf](this[_getShape](offset[$_get](0)), loc, 3.141592653589793 * 3.2 / 2.0);
    }
    [_addMushroomToShapes](loc) {
      let offset = this[_mats].matData(examples__craft__main.BlockType.Mushroom);
      let topShape = this[_getShape](offset[$_get](0));
      let bottomShape = this[_getShape](offset[$_get](1));
      let sideShape = this[_getShape](offset[$_get](2));
      let side = JSArrayOfVertex().of([]);
      let botcap = JSArrayOfVertex().of([]);
      for (let d = 0.0; d <= 2.0; d = d + 0.25) {
        let mat = src__Math__Math.Matrix3.rotateY(3.141592653589793 * d);
        side[$add](this[_getVertex](loc['+'](mat.transPnt3(new src__Math__Math.Point3.new(0.07, -0.1, 0.0))), mat.transVec3(examples__craft__main.Constants.frontNorm), (d - 1.0)[$abs](), 0.0));
        side[$add](this[_getVertex](loc['+'](mat.transPnt3(new src__Math__Math.Point3.new(0.1, -0.5, 0.0))), mat.transVec3(examples__craft__main.Constants.frontNorm), (d - 1.0)[$abs](), 1.0));
        let topLoc = mat.transPnt3(new src__Math__Math.Point3.new(0.1, -0.5, 0.0));
        let topTxt = mat.transPnt3(new src__Math__Math.Point3.new(0.1, 0.0, 0.0));
        botcap[$add](this[_getVertex](loc['+'](topLoc), examples__craft__main.Constants.bottomNorm, dart.notNull(topTxt.x) + 0.5, dart.notNull(topTxt.z) + 0.5));
      }
      let side1Index = sideShape.addVertices(side);
      let botcapIndex = bottomShape.addVertices(botcap);
      sideShape.addTriangleStrip(ListOfint().generate(side[$length], dart.fn(i => dart.notNull(side1Index) + dart.notNull(i), intToint())));
      bottomShape.addTriangleFan(ListOfint().generate(botcap[$length], dart.fn(i => dart.notNull(botcapIndex) + dart.notNull(i), intToint())));
      let top = JSArrayOfVertex().of([]);
      let bottom = JSArrayOfVertex().of([]);
      top[$add](this[_getVertex](loc['+'](new src__Math__Math.Point3.new(0.0, 0.05, 0.0)), examples__craft__main.Constants.topNorm, 0.5, 0.5));
      bottom[$add](this[_getVertex](loc['+'](new src__Math__Math.Point3.new(0.0, -0.1, 0.0)), examples__craft__main.Constants.bottomNorm, 0.5, 0.5));
      for (let d = 0.0; d <= 1.0; d = d + 0.1) {
        let topMat = src__Math__Math.Matrix3.rotateY(-3.141592653589793 * 2.0 * d);
        let topLoc = topMat.transPnt3(new src__Math__Math.Point3.new(0.4, -0.15, 0.0));
        let topTxt = topMat.transPnt3(new src__Math__Math.Point3.new(0.5, 0.0, 0.0));
        top[$add](this[_getVertex](loc['+'](topLoc), null, dart.notNull(topTxt.x) + 0.5, dart.notNull(topTxt.z) + 0.5));
        let botMat = src__Math__Math.Matrix3.rotateY(3.141592653589793 * 2.0 * d);
        let botLoc = botMat.transPnt3(new src__Math__Math.Point3.new(0.4, -0.15, 0.0));
        let botTxt = botMat.transPnt3(new src__Math__Math.Point3.new(0.5, 0.0, 0.0));
        bottom[$add](this[_getVertex](loc['+'](botLoc), null, dart.notNull(botTxt.x) + 0.5, dart.notNull(botTxt.z) + 0.5));
      }
      let topIndex = topShape.addVertices(top);
      let bottomIndex = bottomShape.addVertices(bottom);
      topShape.addTriangleFan(ListOfint().generate(top[$length], dart.fn(i => dart.notNull(topIndex) + dart.notNull(i), intToint())));
      bottomShape.addTriangleFan(ListOfint().generate(bottom[$length], dart.fn(i => dart.notNull(bottomIndex) + dart.notNull(i), intToint())));
    }
  };
  (examples__craft__main.Shaper.new = function(mats, vertexType) {
    if (vertexType === void 0) vertexType = null;
    this[_shapes] = null;
    this[_mats] = mats;
    this[_vertexType] = vertexType;
    let t = this[_vertexType];
    t == null ? this[_vertexType] = src__Data__Data.VertexType.Pos['|'](src__Data__Data.VertexType.Txt2D)['|'](src__Data__Data.VertexType.Norm) : t;
    this[_shapes] = ListOfReducedShape().new((() => {
      let t = this[_mats];
      let t$ = t == null ? null : t.materials;
      let l = t$ == null ? null : t$[$length];
      return l != null ? l : 1;
    })());
  }).prototype = examples__craft__main.Shaper.prototype;
  dart.addTypeTests(examples__craft__main.Shaper);
  dart.setMethodSignature(examples__craft__main.Shaper, () => ({
    __proto__: dart.getMethods(examples__craft__main.Shaper.__proto__),
    buildChunkShapes: dart.fnType(dart.void, [examples__craft__main.Chunk]),
    buildSingleBlock: dart.fnType(dart.void, [core.int]),
    addCubeToOneShape: dart.fnType(dart.void, [core.int, core.int, core.int, core.bool, core.double]),
    finish: dart.fnType(dart.void, [core.List$(src__Core__Core.Entity)]),
    [_getShape]: dart.fnType(src__Shapes__Shapes.ReducedShape, [core.int]),
    [_addBlockToShapes]: dart.fnType(dart.void, [examples__craft__main.Chunk, core.int, core.int, core.int, core.int, core.bool, core.double]),
    [_getVertex]: dart.fnType(src__Shapes__Shapes.Vertex, [src__Math__Math.Point3, src__Math__Math.Vector3, core.double, core.double]),
    [_addQuad]: dart.fnType(dart.void, [src__Shapes__Shapes.ReducedShape, src__Math__Math.Point3, src__Math__Math.Point3, src__Math__Math.Point3, src__Math__Math.Point3, src__Math__Math.Point3, src__Math__Math.Vector3, core.bool, core.double]),
    [_addTopToShape]: dart.fnType(dart.void, [src__Shapes__Shapes.ReducedShape, src__Math__Math.Point3, core.bool, core.double]),
    [_addBottomToShape]: dart.fnType(dart.void, [src__Shapes__Shapes.ReducedShape, src__Math__Math.Point3, core.bool, core.double]),
    [_addLeftToShape]: dart.fnType(dart.void, [src__Shapes__Shapes.ReducedShape, src__Math__Math.Point3, core.bool, core.double]),
    [_addRightToShape]: dart.fnType(dart.void, [src__Shapes__Shapes.ReducedShape, src__Math__Math.Point3, core.bool, core.double]),
    [_addFrontToShape]: dart.fnType(dart.void, [src__Shapes__Shapes.ReducedShape, src__Math__Math.Point3, core.bool, core.double]),
    [_addBackToShape]: dart.fnType(dart.void, [src__Shapes__Shapes.ReducedShape, src__Math__Math.Point3, core.bool, core.double]),
    [_addCubeToShapes]: dart.fnType(dart.void, [examples__craft__main.Chunk, src__Math__Math.Point3, src__Math__Math.Point3, core.int, core.bool, core.double]),
    [_addFace]: dart.fnType(core.bool, [examples__craft__main.Chunk, core.int, src__Math__Math.Point3, core.int, core.int, core.int]),
    [_addQuadRotToShape]: dart.fnType(dart.void, [src__Shapes__Shapes.ReducedShape, src__Math__Math.Point3, core.double], [core.bool]),
    [_addPlantToShapes]: dart.fnType(dart.void, [src__Math__Math.Point3, core.int]),
    [_addFernLeaf]: dart.fnType(dart.void, [src__Shapes__Shapes.ReducedShape, src__Math__Math.Point3, core.double]),
    [_addFernToShapes]: dart.fnType(dart.void, [src__Math__Math.Point3]),
    [_addMushroomToShapes]: dart.fnType(dart.void, [src__Math__Math.Point3])
  }));
  dart.setFieldSignature(examples__craft__main.Shaper, () => ({
    __proto__: dart.getFields(examples__craft__main.Shaper.__proto__),
    [_mats]: dart.fieldType(examples__craft__main.Materials),
    [_vertexType]: dart.fieldType(src__Data__Data.VertexType),
    [_shapes]: dart.fieldType(ListOfReducedShape())
  }));
  const _default = Symbol('_default');
  const _isChunk = Symbol('_isChunk');
  const _sphere = Symbol('_sphere');
  const _pool = Symbol('_pool');
  const _walls = Symbol('_walls');
  const _platforms = Symbol('_platforms');
  const _posts = Symbol('_posts');
  const _pillars = Symbol('_pillars');
  const _tunnels = Symbol('_tunnels');
  const _narrows = Symbol('_narrows');
  const _pyramid = Symbol('_pyramid');
  const _block = Symbol('_block');
  examples__craft__main.TestGenerator = class TestGenerator extends core.Object {
    fillChunk(chunk) {
      if (chunk == null) return;
      this[_curChunk] = chunk;
      this[_default]();
      if (dart.test(this[_isChunk](-2, 1))) this[_sphere]();
      if (dart.test(this[_isChunk](-1, 1))) this[_pool]();
      if (dart.test(this[_isChunk](0, 1))) this[_walls]();
      if (dart.test(this[_isChunk](1, 1))) this[_platforms]();
      if (dart.test(this[_isChunk](1, 0))) this[_posts]();
      if (dart.test(this[_isChunk](1, -1))) this[_pillars]();
      if (dart.test(this[_isChunk](-2, 0))) this[_tunnels]();
      if (dart.test(this[_isChunk](-2, -1))) this[_narrows]();
      if (dart.test(this[_isChunk](-2, -2))) this[_pyramid]();
      chunk.finishGenerate();
    }
    [_default]() {
      let rockHeight = 8;
      let dirtHeight = 9;
      let turfY = 9;
      for (let x = 0; x < examples__craft__main.Constants.chunkSideSize; x++) {
        for (let z = 0; z < examples__craft__main.Constants.chunkSideSize; z++) {
          for (let y = 0; y < rockHeight; y++)
            this[_curChunk].setBlock(x, y, z, examples__craft__main.BlockType.Rock);
          for (let y = rockHeight; y < dirtHeight; y++)
            this[_curChunk].setBlock(x, y, z, examples__craft__main.BlockType.Dirt);
          if (x === 0 || z === 0) {
            this[_curChunk].setBlock(x, turfY, z, examples__craft__main.BlockType.BlackShine);
          } else if (x === 1 && z === 1) {
            this[_curChunk].setBlock(x, turfY, z, examples__craft__main.BlockType.RedShine);
          } else {
            this[_curChunk].setBlock(x, turfY, z, examples__craft__main.BlockType.Turf);
          }
        }
      }
    }
    [_sphere]() {
      let center = 8, size = 6, height = 17, size2 = size * size + 1;
      for (let x = -size; x <= size; x++) {
        for (let y = -size; y <= size; y++) {
          for (let z = -size; z <= size; z++) {
            if (x * x + y * y + z * z <= size2) this[_curChunk].setBlock(center + x, height + y, center + z, examples__craft__main.BlockType.Sand);
          }
        }
      }
    }
    [_pool]() {
      let lowest = 9;
      this[_block](5, lowest, 3, 7, 2, 11);
      this[_block](6, lowest + 1, 4, 5, 1, 9, examples__craft__main.BlockType.Water);
    }
    [_walls]() {
      let offset = 2, length = 12, seperation = 4, height = 10, lowest = 10;
      this[_block](offset, lowest, offset + seperation, length, height, 1);
      this[_block](offset + seperation, lowest, offset, 1, height, length);
      this[_block](offset, lowest, offset + seperation * 2, length, height, 1);
      this[_block](offset + seperation * 2, lowest, offset, 1, height, length);
    }
    [_platforms]() {
      let offset = 2, size = 4, lowest = 10;
      const platform = (function(xScale, zScale, height) {
        return this[_block](offset + size * dart.notNull(xScale), lowest + dart.notNull(height), offset + size * dart.notNull(zScale), size, 1, size);
      }).bind(this);
      dart.fn(platform, intAndintAndintTovoid());
      platform(0, 0, 0);
      platform(0, 1, 1);
      platform(0, 2, 2);
      platform(1, 2, 3);
      platform(1, 1, 4);
      platform(1, 0, 5);
      platform(2, 0, 0);
      platform(2, 0, 2);
      platform(2, 1, 1);
      platform(2, 1, 3);
      platform(2, 2, 2);
      platform(2, 2, 4);
    }
    [_posts]() {
      let offset = 2, size = 4, lowest = 10;
      const pillar = (function(xScale, zScale, height) {
        return this[_block](offset + size * dart.notNull(xScale), lowest, offset + size * dart.notNull(zScale), 1, height, 1);
      }).bind(this);
      dart.fn(pillar, intAndintAndintTovoid());
      pillar(0, 0, 1);
      pillar(0, 1, 2);
      pillar(0, 2, 3);
      pillar(0, 3, 4);
      pillar(1, 0, 2);
      pillar(1, 1, 3);
      pillar(1, 2, 4);
      pillar(1, 3, 5);
      pillar(2, 0, 5);
      pillar(2, 1, 4);
      pillar(2, 2, 3);
      pillar(2, 3, 2);
      pillar(3, 0, 4);
      pillar(3, 1, 3);
      pillar(3, 2, 2);
      pillar(3, 3, 1);
    }
    [_pillars]() {
      let offset = 2, lowest = 10, width = 20, height = 8;
      for (let i = 0; i < width; i = i + 2) {
        for (let j = 0; j < width; j = j + 2) {
          this[_block](offset + i, lowest, offset + j, 1, height, 1);
        }
      }
    }
    [_pyramid]() {
      let offset = 2, lowest = 10, height = 6;
      for (let i = 0; i < height; i++) {
        let size = examples__craft__main.Constants.chunkSideSize - (offset + i) * 2 + 1;
        this[_block](offset + i, lowest + i, offset + i, size, 1, size);
      }
    }
    [_tunnels]() {
      let offset = 2, height = 10, length = 12;
      for (let i = 0; i < 4; i++) {
        this[_block](offset + 1, height, offset + i * 3, length, i + 2, 1);
        this[_block](offset + 1, height + i + 1, offset + i * 3 + 1, length, 1, 2);
        this[_block](offset + 1, height, offset + i * 3 + 3, length, i + 2, 1);
      }
    }
    [_narrows]() {
      let offset = 2, height = 10, length = 12;
      for (let i = 0; i < 6; i++) {
        this[_block](offset + 1, height, offset + i * 2, length, i + 2, 1);
        this[_block](offset + 1, height + i + 1, offset + i * 2 + 1, length, 1, 1);
        this[_block](offset + 1, height, offset + i * 2 + 2, length, i + 2, 1);
      }
    }
    [_isChunk](x, z) {
      return this[_curChunk].x === dart.notNull(x) * examples__craft__main.Constants.chunkSideSize && this[_curChunk].z === dart.notNull(z) * examples__craft__main.Constants.chunkSideSize;
    }
    [_block](offsetX, offsetY, offsetZ, xSize, ySize, zSize, type) {
      if (type === void 0) type = examples__craft__main.BlockType.Brick;
      for (let x = 0; x < dart.notNull(xSize); x++) {
        for (let y = 0; y < dart.notNull(ySize); y++) {
          for (let z = 0; z < dart.notNull(zSize); z++) {
            this[_curChunk].setBlock(dart.notNull(offsetX) + x, dart.notNull(offsetY) + y, dart.notNull(offsetZ) + z, type);
          }
        }
      }
    }
  };
  (examples__craft__main.TestGenerator.new = function() {
    this[_curChunk] = null;
    this[_curChunk] = null;
  }).prototype = examples__craft__main.TestGenerator.prototype;
  dart.addTypeTests(examples__craft__main.TestGenerator);
  examples__craft__main.TestGenerator[dart.implements] = () => [examples__craft__main.Generator];
  dart.setMethodSignature(examples__craft__main.TestGenerator, () => ({
    __proto__: dart.getMethods(examples__craft__main.TestGenerator.__proto__),
    fillChunk: dart.fnType(dart.void, [examples__craft__main.Chunk]),
    [_default]: dart.fnType(dart.void, []),
    [_sphere]: dart.fnType(dart.void, []),
    [_pool]: dart.fnType(dart.void, []),
    [_walls]: dart.fnType(dart.void, []),
    [_platforms]: dart.fnType(dart.void, []),
    [_posts]: dart.fnType(dart.void, []),
    [_pillars]: dart.fnType(dart.void, []),
    [_pyramid]: dart.fnType(dart.void, []),
    [_tunnels]: dart.fnType(dart.void, []),
    [_narrows]: dart.fnType(dart.void, []),
    [_isChunk]: dart.fnType(core.bool, [core.int, core.int]),
    [_block]: dart.fnType(dart.void, [core.int, core.int, core.int, core.int, core.int, core.int], [core.int])
  }));
  dart.setFieldSignature(examples__craft__main.TestGenerator, () => ({
    __proto__: dart.getFields(examples__craft__main.TestGenerator.__proto__),
    [_curChunk]: dart.fieldType(examples__craft__main.Chunk)
  }));
  const _gen = Symbol('_gen');
  const _graveyard = Symbol('_graveyard');
  const _chunks = Symbol('_chunks');
  const _player = Symbol('_player');
  const _lastChunk = Symbol('_lastChunk');
  const _playerPoint = Symbol('_playerPoint');
  const _updateLoadedChunks = Symbol('_updateLoadedChunks');
  const _generateChunk = Symbol('_generateChunk');
  const _refreshDirty = Symbol('_refreshDirty');
  examples__craft__main.World = class World extends core.Object {
    get generator() {
      return this[_gen];
    }
    get materials() {
      return this[_mats];
    }
    get entities() {
      return this[_entities];
    }
    get player() {
      return this[_player];
    }
    set player(player) {
      return this[_player] = player;
    }
    findChunk(x, z) {
      for (let chunk of this[_chunks]) {
        if (chunk.x == x && chunk.z == z) return chunk;
      }
      return null;
    }
    getBlock(x, y, z) {
      let tx = x[$floor]();
      let ty = y[$floor]();
      let tz = z[$floor]();
      let cx = tx < 0 ? tx - examples__craft__main.Constants.chunkSideSize + 1 : tx;
      let cz = tz < 0 ? tz - examples__craft__main.Constants.chunkSideSize + 1 : tz;
      cx = (cx / examples__craft__main.Constants.chunkSideSize)[$truncate]() * examples__craft__main.Constants.chunkSideSize;
      cz = (cz / examples__craft__main.Constants.chunkSideSize)[$truncate]() * examples__craft__main.Constants.chunkSideSize;
      let chunk = this.findChunk(cx, cz);
      let bx = tx - cx;
      let by = ty;
      let bz = tz - cz;
      if (bx < 0) {
        bx = bx + examples__craft__main.Constants.chunkSideSize;
      }
      if (bz < 0) {
        bz = bz + examples__craft__main.Constants.chunkSideSize;
      }
      return new examples__craft__main.BlockInfo.new(bx, by, bz, cx, cz, chunk);
    }
    get [_playerPoint]() {
      let l = this[_player].point;
      return l != null ? l : src__Math__Math.Point3.zero;
    }
    worldTick(_) {
      let player = this[_playerPoint];
      this[_updateLoadedChunks](player);
    }
    generateTick(_) {
      let player = this[_playerPoint];
      this[_generateChunk](player);
      this[_refreshDirty](player);
    }
    animationTick(_) {
      this[_mats].waterChanger.nextTexture();
    }
    prepareChunk(x, z) {
      let l = this[_graveyard][$removeLast]();
      let chunk = l != null ? l : new examples__craft__main.Chunk.new(this);
      chunk.prepare(x, z);
      this[_chunks][$add](chunk);
      return chunk;
    }
    disposeChunk(chunk) {
      if (chunk != null && dart.test(this[_chunks][$remove](chunk))) {
        chunk.freeup();
        this[_graveyard][$add](chunk);
        return true;
      }
      return false;
    }
    [_updateLoadedChunks](player) {
      let pBlock = this.getBlock(player.x, player.y, player.z);
      if (!dart.equals(this[_lastChunk], pBlock.chunk)) {
        this[_lastChunk] = pBlock.chunk;
        let minXOut = dart.notNull(pBlock.chunkX) - examples__craft__main.Constants.maxChunkDist, maxXOut = dart.notNull(pBlock.chunkX) + examples__craft__main.Constants.maxChunkDist;
        let minZOut = dart.notNull(pBlock.chunkZ) - examples__craft__main.Constants.maxChunkDist, maxZOut = dart.notNull(pBlock.chunkZ) + examples__craft__main.Constants.maxChunkDist;
        for (let i = dart.notNull(this[_chunks][$length]) - 1; i >= 0; i--) {
          let chunk = this[_chunks][$_get](i);
          if (minXOut > dart.notNull(chunk.x) || maxXOut <= dart.notNull(chunk.x) || minZOut > dart.notNull(chunk.z) || maxZOut <= dart.notNull(chunk.z)) this.disposeChunk(this[_chunks][$_get](i));
        }
        let minXIn = dart.notNull(pBlock.chunkX) - examples__craft__main.Constants.minChunkDist, maxXIn = dart.notNull(pBlock.chunkX) + examples__craft__main.Constants.minChunkDist;
        let minZIn = dart.notNull(pBlock.chunkZ) - examples__craft__main.Constants.minChunkDist, maxZIn = dart.notNull(pBlock.chunkZ) + examples__craft__main.Constants.minChunkDist;
        for (let x = minXIn; x < maxXIn; x = x + examples__craft__main.Constants.chunkSideSize) {
          for (let z = minZIn; z < maxZIn; z = z + examples__craft__main.Constants.chunkSideSize) {
            let oldChunk = this.findChunk(x, z);
            if (oldChunk == null) this.prepareChunk(x, z);
          }
        }
      }
    }
    [_generateChunk](player) {
      let edgeX = dart.notNull(player.x) - examples__craft__main.Constants.chunkSideSize * 0.5;
      let edgeZ = dart.notNull(player.z) - examples__craft__main.Constants.chunkSideSize * 0.5;
      let nearest = null;
      let minDist2 = 1e-9;
      for (let chunk of this[_chunks]) {
        if (dart.test(chunk.needToGenerate)) {
          let dx = dart.notNull(chunk.x) - edgeX;
          let dz = dart.notNull(chunk.z) - edgeZ;
          let dist2 = dx * dx + dz * dz;
          if (nearest == null || minDist2 > dist2) {
            nearest = chunk;
            minDist2 = dist2;
          }
        }
      }
      if (nearest != null) {
        this[_gen].fillChunk(nearest);
      }
    }
    [_refreshDirty](player) {
      let edgeX = dart.notNull(player.x) - examples__craft__main.Constants.chunkSideSize * 0.5;
      let edgeZ = dart.notNull(player.z) - examples__craft__main.Constants.chunkSideSize * 0.5;
      let nearest = null;
      let minDist2 = 1e-9;
      for (let chunk of this[_chunks]) {
        if (dart.test(chunk.dirty)) {
          let dx = dart.notNull(chunk.x) - edgeX;
          let dz = dart.notNull(chunk.z) - edgeZ;
          let dist2 = dx * dx + dz * dz;
          if (nearest == null || minDist2 > dist2) {
            nearest = chunk;
            minDist2 = dist2;
          }
        }
      }
      if (nearest != null) {
        nearest.dirty = false;
        nearest.needUpdate = true;
      }
    }
    getNeighborBlock(info, ray, back, depth) {
      let region = info.blockRegion;
      let inter = region.rayIntersection(back);
      if (inter == null)
        return null;
      else
        info = info.neighbor(inter.region);
      if (info == null) return null;
      return new examples__craft__main.NeighborBlockInfo.new(info, inter.region, ray, depth);
    }
    debugString() {
      return "chunks: " + dart.str(this[_chunks][$length]) + ", graveyard: " + dart.str(this[_graveyard][$length]) + ", player: " + dart.str(this[_playerPoint]);
    }
    update(args) {
      let mat = this.player.location.matrix;
      let loc3 = mat.transPnt3(src__Math__Math.Point3.zero);
      let front3 = mat.transPnt3(new src__Math__Math.Point3.new(0.0, 0.0, -examples__craft__main.Constants.chunkSideSize[$toDouble]()));
      let loc = new src__Math__Math.Point2.new(loc3.x, loc3.z);
      let front = new src__Math__Math.Point2.new(front3.x, front3.z);
      for (let chunk of this[_chunks]) {
        chunk.updateShape();
        chunk.updateVisiblity(loc, front);
      }
    }
  };
  (examples__craft__main.World.new = function(mats, gen) {
    this[_graveyard] = null;
    this[_chunks] = null;
    this[_entities] = null;
    this[_player] = null;
    this[_lastChunk] = null;
    this[_mats] = mats;
    this[_gen] = gen;
    this[_graveyard] = JSArrayOfChunk().of([]);
    this[_chunks] = JSArrayOfChunk().of([]);
    this[_entities] = JSArrayOfEntity().of([]);
    this[_lastChunk] = null;
    if (this[_mats] != null) {
      for (let tech of this[_mats].materials)
        this.entities[$add](new src__Core__Core.Entity.new({tech: tech}));
    }
    for (let i = 0; i < examples__craft__main.Constants.initialGraveyardSize; i++)
      this[_graveyard][$add](new examples__craft__main.Chunk.new(this));
    for (let x = -examples__craft__main.Constants.initChunkDist; x < examples__craft__main.Constants.initChunkDist; x = x + examples__craft__main.Constants.chunkSideSize) {
      for (let z = -examples__craft__main.Constants.initChunkDist; z < examples__craft__main.Constants.initChunkDist; z = z + examples__craft__main.Constants.chunkSideSize) {
        this[_gen].fillChunk(this.prepareChunk(x, z));
      }
    }
  }).prototype = examples__craft__main.World.prototype;
  dart.addTypeTests(examples__craft__main.World);
  dart.setMethodSignature(examples__craft__main.World, () => ({
    __proto__: dart.getMethods(examples__craft__main.World.__proto__),
    findChunk: dart.fnType(examples__craft__main.Chunk, [core.int, core.int]),
    getBlock: dart.fnType(examples__craft__main.BlockInfo, [core.double, core.double, core.double]),
    worldTick: dart.fnType(dart.void, [dart.dynamic]),
    generateTick: dart.fnType(dart.void, [dart.dynamic]),
    animationTick: dart.fnType(dart.void, [dart.dynamic]),
    prepareChunk: dart.fnType(examples__craft__main.Chunk, [core.int, core.int]),
    disposeChunk: dart.fnType(core.bool, [examples__craft__main.Chunk]),
    [_updateLoadedChunks]: dart.fnType(dart.void, [src__Math__Math.Point3]),
    [_generateChunk]: dart.fnType(dart.void, [src__Math__Math.Point3]),
    [_refreshDirty]: dart.fnType(dart.void, [src__Math__Math.Point3]),
    getNeighborBlock: dart.fnType(examples__craft__main.NeighborBlockInfo, [examples__craft__main.BlockInfo, src__Math__Math.Ray3, src__Math__Math.Ray3, core.int]),
    debugString: dart.fnType(core.String, []),
    update: dart.fnType(dart.void, [src__Events__Events.EventArgs])
  }));
  dart.setGetterSignature(examples__craft__main.World, () => ({
    __proto__: dart.getGetters(examples__craft__main.World.__proto__),
    generator: examples__craft__main.Generator,
    materials: examples__craft__main.Materials,
    entities: core.List$(src__Core__Core.Entity),
    player: examples__craft__main.Player,
    [_playerPoint]: src__Math__Math.Point3
  }));
  dart.setSetterSignature(examples__craft__main.World, () => ({
    __proto__: dart.getSetters(examples__craft__main.World.__proto__),
    player: examples__craft__main.Player
  }));
  dart.setFieldSignature(examples__craft__main.World, () => ({
    __proto__: dart.getFields(examples__craft__main.World.__proto__),
    [_mats]: dart.fieldType(examples__craft__main.Materials),
    [_gen]: dart.fieldType(examples__craft__main.Generator),
    [_graveyard]: dart.fieldType(ListOfChunk()),
    [_chunks]: dart.fieldType(ListOfChunk()),
    [_entities]: dart.fieldType(ListOfEntity()),
    [_player]: dart.fieldType(examples__craft__main.Player),
    [_lastChunk]: dart.fieldType(examples__craft__main.Chunk)
  }));
  dart.trackLibraries("web/examples/craft/main.ddc", {
    "examples\\craft\\main.dart": examples__craft__main
  }, '{"version":3,"sourceRoot":"","sources":["main.dart","blockInfo.dart","blockType.dart","checkersGenerator.dart","chunk.dart","collider.dart","constants.dart","flatGenerator.dart","generator.dart","materials.dart","neighborBlockInfo.dart","player.dart","randomGenerator.dart","shaper.dart","testGenerator.dart","world.dart"],"names":[],"mappings":"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","file":"main.ddc.js"}');
  // Exports:
  return {
    examples__craft__main: examples__craft__main
  };
});

//# sourceMappingURL=main.ddc.js.map
