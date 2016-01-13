part of ThreeDart.Techniques;

class MaterialLight extends Technique {

  Shaders.Shader _shader;
  Lights.Light _light;
  Materials.Material _material;

  MaterialLight({
      Lights.Light light: null,
      Materials.Material material: null}) {
    this._shader = null;
    this._light = light;
    this._material = material;
  }

  Lights.Light get light => this._light;
  set light(Lights.Light light) {
    this._light = light;
    this._shader = null;
  }

  Materials.Material get material => this._material;
  set material(Materials.Material material) {
    this._material = material;
    this._shader = null;
  }

  void render(Core.RenderState state, Core.Entity obj) {
    if (this._light is Lights.Directional) {
      if (this._material is Materials.Solid) {
        this._solidDirectional(state, obj);
      } else throw new Exception("Unsupported light and material combination.");
    } else throw new Exception("Unsupported light and material combination.");

    if (obj.cache is Data.BufferStore) {
      (obj.cache as Data.BufferStore)
        ..bind(state)
        ..render(state)
        ..unbind(state);
    } else obj.clearCache();

    this._shader.unbind(state);
  }

  void _solidDirectional(Core.RenderState state, Core.Entity obj) {
    if (this._shader == null)
      this._shader = new Shaders.SolidDirectional.cached(state);
    Shaders.SolidDirectional shader = this._shader as Shaders.SolidDirectional;

    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shape.build(new Data.WebGLBufferBuilder(state.gl), Data.VertexType.Pos|Data.VertexType.Norm)
        ..findAttribute(Data.VertexType.Pos).attr = shader.posAttr.loc
        ..findAttribute(Data.VertexType.Norm).attr = shader.normAttr.loc;
    }

    shader
      ..bind(state)
      ..setLight(this._light as Lights.Directional)
      ..setMaterial(this._material as Materials.Solid)
      ..projectMatrix = state.projection.matrix
      ..viewMatrix = state.view.matrix
      ..objectMatrix = state.object.matrix;
  }
}
