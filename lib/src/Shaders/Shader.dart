part of ThreeDart.Shaders;

/// The base shader object.
abstract class Shader extends Core.Bindable {
  WebGL.RenderingContext _gl;
  String _name;

  WebGL.Shader _vertexShader;
  WebGL.Shader _fragmentShader;
  WebGL.Program _program;

  AttributeContainer _attrs;
  UniformContainer _uniforms;

  /// Creates a shader with the given rendering context and name.
  Shader(this._gl, this._name) {
    this._vertexShader = null;
    this._fragmentShader = null;
    this._program = null;
    this._attrs = null;
    this._uniforms = null;
  }

  /// initializes and compiles the shader with the given vertex and fragment sources.
  void initialize(String vertexSource, String fragmentSource) {
    this._vertexShader = this._createShader(vertexSource, WebGL.RenderingContext.VERTEX_SHADER);
    this._fragmentShader = this._createShader(fragmentSource, WebGL.RenderingContext.FRAGMENT_SHADER);
    this._createProgram();
    this._setupAttributes();
    this._setupUniform();
  }

  /// The name of the shader.
  String get name => this._name;

  /// The list of attributes for this shader.
  AttributeContainer get attributes => this._attrs;

  /// The list of uniforms for this shader.
  UniformContainer get uniforms => this._uniforms;

  /// Binds this shader to the render state.
  void bind(Core.RenderState state) {
    state.gl.useProgram(this._program);
    this._attrs.enableAll();
  }

  /// Unbinds this shader from the render state.
  void unbind(Core.RenderState state) {
    state.gl.useProgram(null);
    this._attrs.disableAll();
  }

  /// Compiles a shader component from the given [shaderSource] for
  /// either the shader type fragment shader or vertex shader.
  WebGL.Shader _createShader(String shaderSource, int shaderType) {
    WebGL.Shader shader = this._gl.createShader(shaderType);
    this._gl.shaderSource(shader, shaderSource);
    this._gl.compileShader(shader);
    if(!this._gl.getShaderParameter(shader, WebGL.RenderingContext.COMPILE_STATUS)) {
      String errorInfo = this._gl.getShaderInfoLog(shader);
      this._gl.deleteShader(shader);
      throw new Exception("Error compiling shader '$shader': $errorInfo");
    }
    return shader;
  }

  /// Creates the shader program by linkind the shader components.
  void _createProgram() {
    this._program = this._gl.createProgram();
    this._gl.attachShader(this._program, this._vertexShader);
    this._gl.attachShader(this._program, this._fragmentShader);
    this._gl.linkProgram(this._program);

    bool linkStatus = this._gl.getProgramParameter(this._program, WebGL.RenderingContext.LINK_STATUS);
    if(!linkStatus) {
      String errorInfo = this._gl.getProgramInfoLog(this._program);
      this._gl.deleteProgram(this._program);
      throw new Exception("Failed to link shader: $errorInfo");
    }
  }

  /// Sets up all the attribute list.
  void _setupAttributes() {
    List<Attribute> attrs = new List<Attribute>();
    int count = this._gl.getProgramParameter(this._program, WebGL.RenderingContext.ACTIVE_ATTRIBUTES);
    for (int i = 0; i < count; ++i) {
      WebGL.ActiveInfo info = this._gl.getActiveAttrib(this._program, i);
      int loc = this._gl.getAttribLocation(this._program, info.name);
      attrs.add(new Attribute._(this._gl, info.name, loc));
    }
    this._attrs = new AttributeContainer._(attrs);
  }

  /// Sets up all the uniform list.
  void _setupUniform() {
    List<Uniform> uniforms = new List<Uniform>();
    int count = this._gl.getProgramParameter(this._program, WebGL.RenderingContext.ACTIVE_UNIFORMS);
    for (int i = 0; i < count; ++i) {
      WebGL.ActiveInfo info = this._gl.getActiveUniform(this._program, i);
      WebGL.UniformLocation loc = this._gl.getUniformLocation(this._program, info.name);
      uniforms.add(this.createUniform(info.type, info.size, info.name, loc));
    }
    this._uniforms = new UniformContainer._(uniforms);
  }

  /// Creates a new Uniform1i or Uniform1iv for the given [size], [name], and uniform location.
  Uniform _createUniform1i(int size, String name, WebGL.UniformLocation loc) {
    if (size == 1) return new Uniform1i._(this._gl, this._program, name, loc);
    else return new Uniform1iv._(this._gl, this._program, name, size, loc);
  }

  /// Creates a new UniformSampler2D or Uniform1iv for the given [size], [name], and uniform location.
  Uniform _createUniformSampler2D(int size, String name, WebGL.UniformLocation loc) {
    if (size == 1) return new UniformSampler2D._(this._gl, this._program, name, loc);
    else return new Uniform1iv._(this._gl, this._program, name, size, loc);
  }

  /// Creates a new UniformSamplerCube or Uniform1iv for the given [size], [name], and uniform location.
  Uniform _createUniformSamplerCube(int size, String name, WebGL.UniformLocation loc) {
    if (size == 1) return new UniformSamplerCube._(this._gl, this._program, name, loc);
    else return new Uniform1iv._(this._gl, this._program, name, size, loc);
  }

  /// Creats an exception for unsupported types.
  Exception _unsupportedException(String type, String name) {
    return new Exception("$type uniform variables are unsupported by all browsers.\n"+
      "Please change the type of $name.");
  }

  /// Creates a new uniform for the given [type] information, [size], [name], and uniform location.
  Uniform createUniform(int type, int size, String name, WebGL.UniformLocation loc) {
    switch(type) {
      case WebGL.RenderingContext.BYTE:           return this._createUniform1i(size, name, loc);
      case WebGL.RenderingContext.UNSIGNED_BYTE:  return this._createUniform1i(size, name, loc);
      case WebGL.RenderingContext.SHORT:          return this._createUniform1i(size, name, loc);
      case WebGL.RenderingContext.UNSIGNED_SHORT: return this._createUniform1i(size, name, loc);
      case WebGL.RenderingContext.INT:            return this._createUniform1i(size, name, loc);
      case WebGL.RenderingContext.UNSIGNED_INT:   return this._createUniform1i(size, name, loc);
      case WebGL.RenderingContext.FLOAT:          return new Uniform1f._(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.FLOAT_VEC2:     return new Uniform2f._(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.FLOAT_VEC3:     return new Uniform3f._(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.FLOAT_VEC4:     return new Uniform4f._(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.INT_VEC2:       return new Uniform2i._(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.INT_VEC3:       return new Uniform3i._(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.INT_VEC4:       return new Uniform4i._(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.FLOAT_MAT2:     return new UniformMat2._(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.FLOAT_MAT3:     return new UniformMat3._(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.FLOAT_MAT4:     return new UniformMat4._(this._gl, this._program, name, loc);
      case WebGL.RenderingContext.SAMPLER_2D:     return this._createUniformSampler2D(size, name, loc);
      case WebGL.RenderingContext.SAMPLER_CUBE:   return this._createUniformSamplerCube(size, name, loc);
      case WebGL.RenderingContext.BOOL:           throw this._unsupportedException("BOOL", name);
      case WebGL.RenderingContext.BOOL_VEC2:      throw this._unsupportedException("BOOL_VEC2", name);
      case WebGL.RenderingContext.BOOL_VEC3:      throw this._unsupportedException("BOOL_VEC3", name);
      case WebGL.RenderingContext.BOOL_VEC4:      throw this._unsupportedException("BOOL_VEC4", name);
      default: throw new Exception("Unknown uniform variable type $type for $name.");
    }
  }
}
