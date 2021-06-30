part of ThreeDart.Shaders;

/// A shader for very basic depth rendering.
class Depth extends Shader {

  /// The vertex shader source code in glsl.
  static String _vertexSource() {
    StringBuffer buf = new StringBuffer();
    buf.writeln('uniform mat4 viewObjMat;');
    buf.writeln('uniform mat4 projMat;');
    buf.writeln('');
    buf.writeln('attribute vec3 posAttr;');
    buf.writeln('');
    buf.writeln('varying vec3 loc;');
    buf.writeln('');
    buf.writeln('void main()');
    buf.writeln('{');
    buf.writeln('  vec4 pos = viewObjMat*vec4(posAttr, 1.0);');
    buf.writeln('  loc = pos.xyz;');
    buf.writeln('  gl_Position = projMat*pos;');
    buf.writeln('}');
    return buf.toString();
  }
      
  /// The fragment shader source code in glsl.
  static String _fragmentSource(bool grey, bool focus) {
    StringBuffer buf = new StringBuffer();
    buf.writeln('precision mediump float;');
    buf.writeln('');
    buf.writeln('uniform float width;');
    buf.writeln('uniform float stop;');
    buf.writeln('');
    buf.writeln('varying vec3 loc;');
    buf.writeln('');
    buf.writeln('void main()');
    buf.writeln('{');
    if (focus) buf.writeln('  float dist = length(loc.xyz);');
    else       buf.writeln('  float dist = loc.z;');
    buf.writeln('  float depth = (dist - stop) / width;');
    buf.writeln('  float f = clamp(depth, 0.0, 1.0);');
    if (grey) buf.writeln('   vec3 clr = vec3(f, f, f);');
    else {  
      buf.writeln('  f = f * 256.0;');
      buf.writeln('  float r = floor(f);');
      buf.writeln('  f = (f - r) * 256.0;');
      buf.writeln('  float g = floor(f);');
      buf.writeln('  f = (f - g) * 256.0;');
      buf.writeln('  float b = floor(f);');
      buf.writeln('  vec3 clr = vec3(r, g, b) / 256.0;');
    }
    buf.writeln('  gl_FragColor = vec4(clr, 1.0);');
    buf.writeln('}');
    return buf.toString();
  }

  Attribute? _posAttr = null;
  Uniform1f? _width   = null;
  Uniform1f? _stop    = null;
  UniformMat4? _viewObjMat = null;
  UniformMat4? _projMat    = null;

  /// Gets the name for the depth shader.
  static String _getName(bool grey, bool point) =>
    (grey? 'High': 'Grey') + (point? 'Point': 'View') + 'Depth';

  /// Checks for the shader in the shader cache in the given [state],
  /// if it is not found then this shader is compiled and added
  /// to the shader cache before being returned.
  factory Depth.cached(bool grey, bool focus, Core.RenderState state) {
    String name = _getName(grey, focus);
    Depth? shader = state.shader(name) as Depth?;
    if (shader == null) {
      shader = new Depth(grey, focus, state.gl);
      state.addShader(shader);
    }
    return shader;
  }

  /// Compiles this shader for the given rendering context.
  Depth(bool grey, bool focus, WebGL.RenderingContext2 gl): super(gl, _getName(grey, focus)) {
    this.initialize(_vertexSource(), _fragmentSource(grey, focus));
    this._posAttr    = this.attributes['posAttr'];
    this._width      = this.uniforms['width'] as Uniform1f;
    this._stop       = this.uniforms['stop'] as Uniform1f;
    this._viewObjMat = this.uniforms['viewObjMat'] as UniformMat4;
    this._projMat    = this.uniforms['projMat'] as UniformMat4;
  }

  /// The position vertex shader attribute.
  Attribute? get posAttr => this._posAttr;

  /// The width of the depth values which map between 0 and 1.
  double get width => this._width?.getValue() ?? 0.0;
  set width(double value) => this._width?.setValue(value);

  /// The value when the depth stops.
  double get stop => this._stop?.getValue() ?? 0.0;
  set stop(double value) => this._stop?.setValue(value);

  /// The view matrix times the object matrix.
  Math.Matrix4 get viewObjectMatrix => this._viewObjMat?.getMatrix4() ?? Math.Matrix4.identity;
  set viewObjectMatrix(Math.Matrix4 mat) => this._viewObjMat?.setMatrix4(mat);

  /// The projection matrix.
  Math.Matrix4 get projectMatrix => this._projMat?.getMatrix4() ?? Math.Matrix4.identity;
  set projectMatrix(Math.Matrix4 mat) => this._projMat?.setMatrix4(mat);
}
