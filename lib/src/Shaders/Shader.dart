part of ThreeDart.Shaders;

/// The base shader object.
abstract class Shader extends Core.Bindable {
  WebGL.RenderingContext2 _gl;
  String _name;

  String _vertexSourceCode = '';
  String _fragmentSourceCode = '';

  WebGL.Program? _program = null;
  AttributeContainer? _attrs = null;
  UniformContainer? _uniforms = null;

  /// Creates a shader with the given rendering context and name.
  Shader(this._gl, this._name);

  /// initializes and compiles the shader with the given vertex and fragment sources.
  void initialize(String vertexSourceCode, String fragmentSourceCode) {
    this._vertexSourceCode = vertexSourceCode;
    this._fragmentSourceCode = fragmentSourceCode;
    this._createProgram();
    this._setupAttributes();
    this._setupUniform();
  }

  /// The name of the shader.
  String get name => this._name;

  /// Gets the vertex source code used for this shader.
  String get vertexSourceCode => this._vertexSourceCode;

  /// Gets the fragment source code used for this shader.
  String get fragmentSourceCode => this._fragmentSourceCode;

  /// The list of attributes for this shader.
  AttributeContainer get attributes {
    AttributeContainer? attrs = this._attrs;
    if (attrs == null)
      throw new Exception('Must initialize the shader prior to getting the attributes.');
    return attrs;
  }

  /// The list of uniforms for this shader.
  UniformContainer get uniforms {
    UniformContainer? uniforms = this._uniforms;
    if (uniforms == null)
      throw new Exception('Must initialize the shader prior to getting the uniforms.');
    return uniforms;
  }
  
  /// Gets a non-null instance of the program.
  WebGL.Program get _glProgram {
    WebGL.Program? prog = this._program;
    if (prog == null)
      throw new Exception('Must initialize the shader prior to getting the program.');
    return prog;
  }

  /// Binds this shader to the render state.
  void bind(Core.RenderState state) {
    state.gl.useProgram(this._program);
    this.attributes.enableAll();
  }

  /// Unbinds this shader from the render state.
  void unbind(Core.RenderState state) {
    state.gl.useProgram(null);
    this.attributes.disableAll();
  }

  /// Compiles a shader component from the given [shaderSource] for
  /// either the shader type fragment shader or vertex shader.
  WebGL.Shader _createShader(String shaderSource, int shaderType) {
    // print(numberLines(shaderSource));
    WebGL.Shader shader = this._gl.createShader(shaderType);
    this._gl.shaderSource(shader, shaderSource);
    this._gl.compileShader(shader);
    if (!(this._gl.getShaderParameter(shader, WebGL.WebGL.COMPILE_STATUS) as bool)) {
      String errorInfo = this._gl.getShaderInfoLog(shader) ?? 'undefined log error';
      this._gl.deleteShader(shader);
      throw new Exception('Error compiling shader "$shader": $errorInfo');
    }
    return shader;
  }

  /// Creates the shader program by linking the shader components.
  void _createProgram() {
    WebGL.Shader vertexShader = this._createShader(this._vertexSourceCode, WebGL.WebGL.VERTEX_SHADER);
    WebGL.Shader fragmentShader = this._createShader(this._fragmentSourceCode, WebGL.WebGL.FRAGMENT_SHADER);

    this._program = this._gl.createProgram();
    this._gl.attachShader(this._glProgram, vertexShader);
    this._gl.attachShader(this._glProgram, fragmentShader);
    this._gl.linkProgram(this._glProgram);

    bool linkStatus = this._gl.getProgramParameter(this._glProgram, WebGL.WebGL.LINK_STATUS) as bool;
    if(!linkStatus) {
      String errorInfo = this._gl.getProgramInfoLog(this._glProgram) ?? 'undefined log error';
      this._gl.deleteProgram(this._program);
      throw new Exception('Failed to link shader: $errorInfo');
    }
  }

  /// Sets up all the attribute list.
  void _setupAttributes() {
    List<Attribute> attrs = [];
    int count = this._gl.getProgramParameter(this._glProgram, WebGL.WebGL.ACTIVE_ATTRIBUTES) as int;
    for (int i = 0; i < count; ++i) {
      WebGL.ActiveInfo info = this._gl.getActiveAttrib(this._glProgram, i);
      int loc = this._gl.getAttribLocation(this._glProgram, info.name);
      attrs.add(new Attribute._(this._gl, info.name, loc));
    }
    this._attrs = new AttributeContainer._(attrs);
  }

  /// Sets up all the uniform list.
  void _setupUniform() {
    List<Uniform> uniforms = [];
    int count = this._gl.getProgramParameter(this._glProgram, WebGL.WebGL.ACTIVE_UNIFORMS) as int;
    for (int i = 0; i < count; ++i) {
      WebGL.ActiveInfo info = this._gl.getActiveUniform(this._glProgram, i);
      WebGL.UniformLocation loc = this._gl.getUniformLocation(this._glProgram, info.name);
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

  /// Creates an exception for unsupported types.
  Exception _unsupportedException(String type, String name) {
    return new Exception('$type uniform variables are unsupported by all browsers.\n'+
      'Please change the type of $name.');
  }

  /// Creates a new uniform for the given [type] information, [size], [name], and uniform location.
  Uniform createUniform(int type, int size, String name, WebGL.UniformLocation loc) {
    switch(type) {
      case WebGL.WebGL.BYTE:           return this._createUniform1i(size, name, loc);
      case WebGL.WebGL.UNSIGNED_BYTE:  return this._createUniform1i(size, name, loc);
      case WebGL.WebGL.SHORT:          return this._createUniform1i(size, name, loc);
      case WebGL.WebGL.UNSIGNED_SHORT: return this._createUniform1i(size, name, loc);
      case WebGL.WebGL.INT:            return this._createUniform1i(size, name, loc);
      case WebGL.WebGL.UNSIGNED_INT:   return this._createUniform1i(size, name, loc);
      case WebGL.WebGL.FLOAT:          return new Uniform1f._(this._gl, this._program, name, loc);
      case WebGL.WebGL.FLOAT_VEC2:     return new Uniform2f._(this._gl, this._program, name, loc);
      case WebGL.WebGL.FLOAT_VEC3:     return new Uniform3f._(this._gl, this._program, name, loc);
      case WebGL.WebGL.FLOAT_VEC4:     return new Uniform4f._(this._gl, this._program, name, loc);
      case WebGL.WebGL.INT_VEC2:       return new Uniform2i._(this._gl, this._program, name, loc);
      case WebGL.WebGL.INT_VEC3:       return new Uniform3i._(this._gl, this._program, name, loc);
      case WebGL.WebGL.INT_VEC4:       return new Uniform4i._(this._gl, this._program, name, loc);
      case WebGL.WebGL.FLOAT_MAT2:     return new UniformMat2._(this._gl, this._program, name, loc);
      case WebGL.WebGL.FLOAT_MAT3:     return new UniformMat3._(this._gl, this._program, name, loc);
      case WebGL.WebGL.FLOAT_MAT4:     return new UniformMat4._(this._gl, this._program, name, loc);
      case WebGL.WebGL.SAMPLER_2D:     return this._createUniformSampler2D(size, name, loc);
      case WebGL.WebGL.SAMPLER_CUBE:   return this._createUniformSamplerCube(size, name, loc);
      case WebGL.WebGL.BOOL:           throw this._unsupportedException('BOOL', name);
      case WebGL.WebGL.BOOL_VEC2:      throw this._unsupportedException('BOOL_VEC2', name);
      case WebGL.WebGL.BOOL_VEC3:      throw this._unsupportedException('BOOL_VEC3', name);
      case WebGL.WebGL.BOOL_VEC4:      throw this._unsupportedException('BOOL_VEC4', name);
      default: throw new Exception('Unknown uniform variable type $type for $name.');
    }
  }
}
