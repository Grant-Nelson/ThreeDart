part of ThreeDart.Techniques;

/// The material/light rendering technique.
class MaterialLight extends Technique {
  Shaders.Shader _shader;
  Lights.Light _light;
  Materials.Material _material;

  /// Creates a new material/light technique.
  MaterialLight({Lights.Light light: null, Materials.Material material: null}) {
    this._shader = null;
    this._light = light;
    this._material = material;
  }

  /// The light to render with.
  Lights.Light get light => this._light;
  set light(Lights.Light light) {
    this._light = light;
    this._shader = null;
  }

  /// The material to render with.
  Materials.Material get material => this._material;
  set material(Materials.Material material) {
    this._material = material;
    this._shader = null;
  }

  /// Renderes the given [obj] with the current light and material for the given [state].
  void render(Core.RenderState state, Core.Entity obj) {
    if ((this._light == null) || (this._material == null)) return;
    else if (this._light is Lights.Directional) {
      if (this._material is Materials.BumpySolid) this._bumpySolidDirectional(state, obj);
      else if (this._material is Materials.Solid) this._solidDirectional(state, obj);
      else if (this._material is Materials.BumpyTexture2D) this._bumpyTxt2DDirectional(state, obj);
      else if (this._material is Materials.Texture2D) this._txt2DDirectional(state, obj);
      else throw new Exception("Unsupported light and material combination. $_material, $_light");
    } else throw new Exception("Unsupported light and material combination. $_material, $_light");

    this._material.bind(state);
    if (obj.cache is Data.BufferStore) {
      (obj.cache as Data.BufferStore)
        ..bind(state)
        ..render(state)
        ..unbind(state);
    } else obj.clearCache();

    this._shader.unbind(state);
    this._material.unbind(state);
  }

  /// Renders and sets up the shaper for solid color directional light.
  void _solidDirectional(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.SolidDirectional.cached(state);
    Shaders.SolidDirectional shader = this._shader as Shaders.SolidDirectional;

    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc;
    }

    Math.Matrix4 viewObjMat = state.view.matrix*state.object.matrix;
    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(this._material as Materials.Solid)
      ..projectViewObjectMatrix = state.projection.matrix*viewObjMat
      ..viewMatrix = state.view.matrix
      ..viewObjectMatrix = viewObjMat;
  }

  /// Renders and sets up the shaper for texture 2D directional light.
  void _txt2DDirectional(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.Texture2DDirectional.cached(state);
    Shaders.Texture2DDirectional shader = this._shader as Shaders.Texture2DDirectional;

    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.Txt)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc
        ..findAttribute(Data.VertexType.Txt).attr = shader.txtAttr.loc;
    }

    Materials.Texture2D mat = this._material as Materials.Texture2D
      ..emissionTexture.index = 0
      ..ambientTexture.index = 1
      ..diffuseTexture.index = 2
      ..specularTexture.index = 3;

    Math.Matrix4 viewObjMat = state.view.matrix*state.object.matrix;
    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(mat)
      ..projectViewObjectMatrix = state.projection.matrix*viewObjMat
      ..viewMatrix = state.view.matrix
      ..viewObjectMatrix = viewObjMat;
  }

  /// Renders and sets up the shaper for bumpy solid color directional light.
  void _bumpySolidDirectional(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.BumpySolidDirectional.cached(state);
    Shaders.BumpySolidDirectional shader = this._shader as Shaders.BumpySolidDirectional;

    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.Binm|Data.VertexType.Txt)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc
        ..findAttribute(Data.VertexType.Binm).attr = shader.binmAttr.loc
        ..findAttribute(Data.VertexType.Txt).attr = shader.txtAttr.loc;
    }

    Materials.BumpySolid mat = this._material as Materials.BumpySolid
      ..bumpMap.index = 0;

    Math.Matrix4 viewObjMat = state.view.matrix*state.object.matrix;
    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(mat)
      ..projectViewObjectMatrix = state.projection.matrix*viewObjMat
      ..viewMatrix = state.view.matrix
      ..viewObjectMatrix = viewObjMat;
  }

  /// Renders and sets up the shaper for bumpy texture 2D directional light.
  void _bumpyTxt2DDirectional(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.BumpyTexture2DDirectional.cached(state);
    Shaders.BumpyTexture2DDirectional shader = this._shader as Shaders.BumpyTexture2DDirectional;

    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.Binm|Data.VertexType.Txt)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc
        ..findAttribute(Data.VertexType.Binm).attr = shader.binmAttr.loc
        ..findAttribute(Data.VertexType.Txt).attr = shader.txtAttr.loc;
    }

    Materials.BumpyTexture2D mat = this._material as Materials.BumpyTexture2D
      ..emissionTexture.index = 0
      ..ambientTexture.index = 1
      ..diffuseTexture.index = 2
      ..specularTexture.index = 3
      ..bumpMap.index = 4;

    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(mat)
      ..projectMatrix = state.projection.matrix
      ..viewMatrix = state.view.matrix
      ..objectMatrix = state.object.matrix;
  }
}
