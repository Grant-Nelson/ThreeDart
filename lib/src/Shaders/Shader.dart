part of ThreeDart.Shaders;

abstract class Shader extends Core.Bindable {
  WebGL.RenderingContext _gl;
  String _name;

  WebGL.Shader _vertexShader;
  WebGL.Shader _fragmentShader;
  WebGL.Program _program;

  AttributeContainer _attrs;
  UniformContainer _uniforms;

  Shader(this._gl, this._name) {
    this._vertexShader = null;
    this._fragmentShader = null;
    this._program = null;
    this._attrs = null;
    this._uniforms = null;
  }

  void initialize(String vertexSource, String fragmentSource) {
    this._vertexShader = this._createShader(vertexSource, WebGL.RenderingContext.VERTEX_SHADER);
    this._fragmentShader = this._createShader(fragmentSource, WebGL.RenderingContext.FRAGMENT_SHADER);
    this._createProgram();
    this._setupAttributes();
    this._setupUniform();
  }

  String get name => this._name;
  AttributeContainer get attributes => this._attrs;
  UniformContainer get uniforms => this._uniforms;

  void bind(Core.RenderState state) {
    state.gl.useProgram(this._program);
    this._attrs.enableAll();
  }

  void unbind(Core.RenderState state) {
    state.gl.useProgram(null);
    this._attrs.disableAll();
  }

  WebGL.Shader _createShader(String shaderSource, int shaderType) {
    WebGL.Shader shader = this._gl.createShader(shaderType);
    this._gl.shaderSource(shader, shaderSource);
    this._gl.compileShader(shader);
    if(!this._gl.getShaderParameter(shader, WebGL.RenderingContext.COMPILE_STATUS)) {
      String errorInfo = this._gl.getShaderInfoLog(shader);
      this._gl.deleteShader(shader);
      throw new Exception("Error compiling shader '" + shader.toString() + "': " + errorInfo);
    }
    return shader;
  }

  void _createProgram() {
    this._program = this._gl.createProgram();
    this._gl.attachShader(this._program, this._vertexShader);
    this._gl.attachShader(this._program, this._fragmentShader);
    this._gl.linkProgram(this._program);

    bool linkStatus = this._gl.getProgramParameter(this._program, WebGL.RenderingContext.LINK_STATUS);
    if(!linkStatus)
        throw new Exception("Failed to link shader.");
  }

  void _setupAttributes() {
    List<Attribute> attrs = new List<Attribute>();
    int count = this._gl.getProgramParameter(this._program, WebGL.RenderingContext.ACTIVE_ATTRIBUTES);
    for (int i = 0; i < count; ++i) {
      WebGL.ActiveInfo info = this._gl.getActiveAttrib(this._program, i);
      int loc = this._gl.getAttribLocation(this._program, info.name);
      attrs.add(new Attribute(this._gl, info.name, loc));
    }
    this._attrs = new AttributeContainer(attrs);
  }

  void _setupUniform() {
    List<Uniform> uniforms = new List<Uniform>();
    int count = this._gl.getProgramParameter(this._program, WebGL.RenderingContext.ACTIVE_UNIFORMS);
    for (int i = 0; i < count; ++i) {
      WebGL.ActiveInfo info = this._gl.getActiveUniform(this._program, i);
      WebGL.UniformLocation loc = this._gl.getUniformLocation(this._program, info.name);
      uniforms.add(this.createUniform(info.type, info.name, loc));
    }
    this._uniforms = new UniformContainer(uniforms);
  }

  Uniform createUniform(int type, String name, WebGL.UniformLocation loc) {
    switch(type) {
      case WebGL.RenderingContext.BYTE:           return new Uniform1i(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.UNSIGNED_BYTE:  return new Uniform1i(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.SHORT:          return new Uniform1i(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.UNSIGNED_SHORT: return new Uniform1i(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.INT:            return new Uniform1i(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.UNSIGNED_INT:   return new Uniform1i(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.FLOAT:          return new Uniform1f(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.FLOAT_VEC2:     return new Uniform2f(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.FLOAT_VEC3:     return new Uniform3f(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.FLOAT_VEC4:     return new Uniform4f(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.INT_VEC2:       return new Uniform2i(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.INT_VEC3:       return new Uniform3i(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.INT_VEC4:       return new Uniform4i(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.FLOAT_MAT2:     return new UniformMat2(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.FLOAT_MAT3:     return new UniformMat3(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.FLOAT_MAT4:     return new UniformMat4(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.SAMPLER_2D:     return new UniformSampler2D(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.SAMPLER_CUBE:   return new UniformSamplerCube(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.BOOL:
          throw new Exception("BOOL uniform variables are unsupported by all browsers.\n"+
            "Please change the type of "+name+".");
      case WebGL.RenderingContext.BOOL_VEC2:
          throw new Exception("BOOL_VEC2 uniform variables are unsupported by all browsers.\n"+
            "Please change the type of "+name+".");
      case WebGL.RenderingContext.BOOL_VEC3:
          throw new Exception("BOOL_VEC3 uniform variables are unsupported by all browsers.\n"+
            "Please change the type of "+name+".");
      case WebGL.RenderingContext.BOOL_VEC4:
          throw new Exception("BOOL_VEC4 uniform variables are unsupported by all browsers.\n"+
            "Please change the type of "+name+".");
      default:
          throw new Exception("Unknown uniform variable type "+type.toString()+" for "+name+".");
    }
  }
}