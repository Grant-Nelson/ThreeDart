part of ThreeDart.Techniques;

class MaterialLight extends Technique {

  Shaders.Shader _shader;
  Light.Light _light;
  Material.Material _material;

  MaterialLight({Light.Light light: null, Material.Material material: null}) {
    this._shader = null;
    this._light = light;
    this._material = material;
  }

  Light.Light get light => this._light;
  set light(Light.Light light) {
    this._light = light;
    this._shader = null;
  }

  Material.Material get material => this._material;
  set material(Material.Material material) {
    this._material = material;
    this._shader = null;
  }

  void render(Core.RenderState state, Core.Object obj) {
    if (this._shader == null) {

      this._shader = new Shaders.Depth(state.gl);

    }
    if (obj.cacheNeedsUpdate) {
      obj.cache = obj.shape.build(state.gl, Data.VertexType.Pos);
    }

    this._shader.bind(state);
    this._shader.objectColor = this._objClr;
    this._shader.fogColor = this._fogClr;
    this._shader.fogStart = this._fogStart;
    this._shader.fogStop = this._fogStop;
    this._shader.projectMatrix = state.projection.matrix;
    this._shader.viewMatrix = state.view.matrix;
    this._shader.objectMatrix = state.object.matrix;

    if (obj.cache is Data.BufferStore) {
      Data.BufferStore store = obj.cache as Data.BufferStore;
      store.bind(state);
      store.render(state);
      store.unbind(state);
    } else obj.clearCache();

    this._shader.unbind(state);
  }
}
