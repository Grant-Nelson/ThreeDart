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
      if (this._material is Materials.BumpySolid) this._bumpySolid(state, obj);
      else if (this._material is Materials.ReflSolid) this._reflSolid(state, obj);
      else if (this._material is Materials.BumpyCubeSolid) this._bumpyCubeSolid(state, obj);
      else if (this._material is Materials.Solid) this._solid(state, obj);
      else if (this._material is Materials.BumpyTexture2D) this._bumpyTxt2D(state, obj);
      else if (this._material is Materials.Texture2D) this._txt2D(state, obj);
      else if (this._material is Materials.BumpyTextureCube) this._bumpyTxtCube(state, obj);
      else if (this._material is Materials.TextureCube) this._txtCube(state, obj);
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

  /// Renders and sets up the shaper for solid color light.
  void _solid(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.Solid.cached(state);
    Shaders.Solid shader = this._shader as Shaders.Solid;

    if (obj.cacheNeedsUpdate) {
      obj.shape.calculateNormals();
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc;
    }

    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(this._material as Materials.Solid)
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix
      ..viewMatrix = state.view.matrix
      ..viewObjectMatrix = state.viewObjectMatrix;
  }

  /// Renders and sets up the shaper for bumpy solid color light.
  void _bumpySolid(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.BumpySolid.cached(state);
    Shaders.BumpySolid shader = this._shader as Shaders.BumpySolid;

    if (obj.cacheNeedsUpdate) {
      obj.shape
        ..calculateNormals()
        ..calculateBinormals();
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.Binm|Data.VertexType.Txt2D)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc
        ..findAttribute(Data.VertexType.Binm).attr = shader.binmAttr.loc
        ..findAttribute(Data.VertexType.Txt2D).attr = shader.txtAttr.loc;
    }

    Materials.BumpySolid mat = this._material as Materials.BumpySolid;
    if (mat.bumpMap != null) mat.bumpMap.index = 0;

    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(mat)
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix
      ..viewMatrix = state.view.matrix
      ..viewObjectMatrix = state.viewObjectMatrix;
  }

  /// Renders and sets up the shaper for reflective solid color light.
  void _reflSolid(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.ReflSolid.cached(state);
    Shaders.ReflSolid shader = this._shader as Shaders.ReflSolid;

    if (obj.cacheNeedsUpdate) {
      obj.shape
        ..calculateNormals()
        ..calculateBinormals();
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc;
    }

    Materials.ReflSolid mat = this._material as Materials.ReflSolid;
    if (mat.environment != null) mat.environment.index = 0;

    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(mat)
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix
      ..viewMatrix = state.view.matrix
      ..inverseViewMatrix = state.inverseViewMatrix
      ..viewObjectMatrix = state.viewObjectMatrix;
  }

  /// Renders and sets up the shaper for bumpy cube solid color light.
  void _bumpyCubeSolid(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.BumpyCubeSolid.cached(state);
    Shaders.BumpyCubeSolid shader = this._shader as Shaders.BumpyCubeSolid;

    if (obj.cacheNeedsUpdate) {
      obj.shape
        ..calculateNormals()
        ..calculateBinormals();
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.Binm|Data.VertexType.TxtCube)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc
        ..findAttribute(Data.VertexType.Binm).attr = shader.binmAttr.loc
        ..findAttribute(Data.VertexType.TxtCube).attr = shader.txtCubeAttr.loc;
    }

    Materials.BumpyCubeSolid mat = this._material as Materials.BumpyCubeSolid;
    if (mat.bumpMap != null) mat.bumpMap.index = 0;

    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(mat)
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix
      ..viewMatrix = state.view.matrix
      ..viewObjectMatrix = state.viewObjectMatrix;
  }

  /// Renders and sets up the shaper for texture 2D light.
  void _txt2D(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.Texture2D.cached(state);
    Shaders.Texture2D shader = this._shader as Shaders.Texture2D;

    if (obj.cacheNeedsUpdate) {
      obj.shape.calculateNormals();
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.Txt2D)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc
        ..findAttribute(Data.VertexType.Txt2D).attr = shader.txtAttr.loc;
    }

    Materials.Texture2D mat = this._material as Materials.Texture2D;
    if (mat.emissionTexture != null) mat.emissionTexture.index = 0;
    if (mat.ambientTexture != null) mat.ambientTexture.index = 1;
    if (mat.diffuseTexture != null) mat.diffuseTexture.index = 2;
    if (mat.specularTexture != null) mat.specularTexture.index = 3;

    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(mat)
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix
      ..viewMatrix = state.view.matrix
      ..viewObjectMatrix = state.viewObjectMatrix;
  }

  /// Renders and sets up the shaper for bumpy texture 2D light.
  void _bumpyTxt2D(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.BumpyTexture2D.cached(state);
    Shaders.BumpyTexture2D shader = this._shader as Shaders.BumpyTexture2D;

    if (obj.cacheNeedsUpdate) {
      obj.shape
        ..calculateNormals()
        ..calculateBinormals();
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.Binm|Data.VertexType.Txt2D)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc
        ..findAttribute(Data.VertexType.Binm).attr = shader.binmAttr.loc
        ..findAttribute(Data.VertexType.Txt2D).attr = shader.txtAttr.loc;
    }

    Materials.BumpyTexture2D mat = this._material as Materials.BumpyTexture2D;
    if (mat.emissionTexture != null) mat.emissionTexture.index = 0;
    if (mat.ambientTexture != null) mat.ambientTexture.index = 1;
    if (mat.diffuseTexture != null) mat.diffuseTexture.index = 2;
    if (mat.specularTexture != null) mat.specularTexture.index = 3;
    if (mat.bumpMap != null) mat.bumpMap.index = 4;

    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(mat)
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix
      ..viewMatrix = state.view.matrix
      ..viewObjectMatrix = state.viewObjectMatrix;
  }

  /// Renders and sets up the shaper for texture cube light.
  void _txtCube(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.TextureCube.cached(state);
    Shaders.TextureCube shader = this._shader as Shaders.TextureCube;

    if (obj.cacheNeedsUpdate) {
      obj.shape.calculateNormals();
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.TxtCube)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc
        ..findAttribute(Data.VertexType.TxtCube).attr = shader.txtCubeAttr.loc;
    }

    Materials.TextureCube mat = this._material as Materials.TextureCube;
    if (mat.emissionTexture != null) mat.emissionTexture.index = 0;
    if (mat.ambientTexture != null) mat.ambientTexture.index = 1;
    if (mat.diffuseTexture != null) mat.diffuseTexture.index = 2;
    if (mat.specularTexture != null) mat.specularTexture.index = 3;

    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(mat)
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix
      ..viewMatrix = state.view.matrix
      ..viewObjectMatrix = state.viewObjectMatrix;
  }

  /// Renders and sets up the shaper for bumpy texture cube light.
  void _bumpyTxtCube(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.BumpyTextureCube.cached(state);
    Shaders.BumpyTextureCube shader = this._shader as Shaders.BumpyTextureCube;

    if (obj.cacheNeedsUpdate) {
      obj.shape
        ..calculateNormals()
        ..calculateBinormals();
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl),
        Data.VertexType.Pos|Data.VertexType.Norm|Data.VertexType.Binm|Data.VertexType.TxtCube)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc
        ..findAttribute(Data.VertexType.Binm).attr = shader.binmAttr.loc
        ..findAttribute(Data.VertexType.TxtCube).attr = shader.txtCubeAttr.loc;
    }

    Materials.BumpyTextureCube mat = this._material as Materials.BumpyTextureCube;
    if (mat.emissionTexture != null) mat.emissionTexture.index = 0;
    if (mat.ambientTexture != null) mat.ambientTexture.index = 1;
    if (mat.diffuseTexture != null) mat.diffuseTexture.index = 2;
    if (mat.specularTexture != null) mat.specularTexture.index = 3;
    if (mat.bumpMap != null) mat.bumpMap.index = 4;

    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(mat)
      ..projectViewObjectMatrix = state.projectionViewObjectMatrix
      ..viewMatrix = state.view.matrix
      ..viewObjectMatrix = state.viewObjectMatrix;
  }
}
