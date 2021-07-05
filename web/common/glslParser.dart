part of ThreeDart.web.common;

/// A parser for coloring GLSL code.
class GLSLParser extends CodeParser {

  /// Creates a new GLSL parser.
  GLSLParser(): super._("glsl");

  /// Parses GLSL code.
  void processToken(Tokenizer.Token token) {
    switch(token.name) {
      case "Builtin":    this.addLineParts(token.text, "#411"); break;
      case "Comment":    this.addLineParts(token.text, "#777"); break;
      case "Id":         this.addLineParts(token.text, "#111"); break;
      case "Num":        this.addLineParts(token.text, "#191"); break;
      case "Preprocess": this.addLineParts(token.text, "#737"); break;
      case "Reserved":   this.addLineParts(token.text, "#119"); break;
      case "Symbol":     this.addLineParts(token.text, "#611"); break;
      case "Type":       this.addLineParts(token.text, "#171"); break;
      case "Whitespace": this.addLineParts(token.text, "#111"); break;
    }
  }

  /// Constructs the HTML code tokenizer.
  /// The HTML code tokenizer breaks up code to
  /// label tokens to color the code appropriately.
  Tokenizer.Tokenizer? createTokenizer() {
    Tokenizer.Tokenizer tok = new Tokenizer.Tokenizer();
    tok.start("Start");
    tok.join("Start", "Id")
      ..addSet("_")
      ..addRange("a", "z")
      ..addRange("A", "Z");
    tok.join("Id", "Id")
      ..addSet("_")
      ..addRange("0", "9")
      ..addRange("a", "z")
      ..addRange("A", "Z");
    tok.join("Start", "Int")
      ..addRange("0", "9");
    tok.join("Int", "Int")
      ..addRange("0", "9");
    tok.join("Int", "FloatDot")
      ..addSet(".");
    tok.join("FloatDot", "Float")
      ..addRange("0", "9");
    tok.join("Float", "Float")
      ..addRange("0", "9");
    tok.join("Start", "Sym")
      ..addSet("<>{}()[]\\-+*%!&|=.,?:;");
    tok.join("Sym", "Sym")
      ..addSet("<>{}()[]\\-+*%!&|=.,?:;");
    tok.join("Start", "Slash")
      ..addSet("/");
    tok.join("Slash", "Comment")
      ..addSet("/");
    tok.join("Slash", "Sym")
      ..addAll();
    tok.join("Comment", "EndComment")
      ..addSet("\n");
    tok.join("Comment", "Comment")
      ..addNot().addSet("\n");
    tok.join("Start", "Preprocess")
      ..addSet("#");
    tok.join("Preprocess", "Preprocess")
      ..addNot().addSet("\n");
    tok.join("Preprocess", "EndPreprocess")
      ..addSet("\n");
    tok.join("Start", "Whitespace")
      ..addSet(" \n\t");
    tok.join("Whitespace", "Whitespace")
      ..addSet(" \n\t");
    tok.setToken("Int", "Num");
    tok.setToken("Float", "Num");
    tok.setToken("Sym", "Symbol");
    tok.setToken("EndComment", "Comment");
    tok.setToken("EndPreprocess", "Preprocess");
    tok.setToken("Whitespace", "Whitespace");
    tok.setToken("Id", "Id")
      ..replace("Type", [
        "float", "double", "int", "void", "bool", "true", "false",
        "mat2", "mat3", "mat4", "dmat2", "dmat3", "dmat4",
        "mat2x2", "mat2x3", "mat2x4", "dmat2x2", "dmat2x3", "dmat2x4",
        "mat3x2", "mat3x3", "mat3x4", "dmat3x2", "dmat3x3", "dmat3x4",
        "mat4x2", "mat4x3", "mat4x4", "dmat4x2", "dmat4x3", "dmat4x4",
        "vec2", "vec3", "vec4", "ivec2", "ivec3", "ivec4", "bvec2", "bvec3",
        "bvec4", "dvec2", "dvec3", "dvec4", "uint", "uvec2", "uvec3", "uvec4",
        "sampler1D", "sampler2D", "sampler3D", "samplerCube",
        "sampler1DShadow", "sampler2DShadow", "samplerCubeShadow",
        "sampler1DArray", "sampler2DArray",
        "sampler1DArrayShadow", "sampler2DArrayShadow",
        "isampler1D", "isampler2D", "isampler3D", "isamplerCube",
        "isampler1DArray", "isampler2DArray",
        "usampler1D", "usampler2D", "usampler3D", "usamplerCube",
        "usampler1DArray", "usampler2DArray",
        "sampler2DRect", "sampler2DRectShadow",
        "isampler2DRect", "usampler2DRect",
        "samplerBuffer", "isamplerBuffer", "usamplerBuffer",
        "sampler2DMS", "isampler2DMS", "usampler2DMS",
        "sampler2DMSArray", "isampler2DMSArray", "usampler2DMSArray",
        "samplerCubeArray", "samplerCubeArrayShadow",
        "isamplerCubeArray", "usamplerCubeArray"])
      ..replace("Reserved", [
        "attribute", "break", "case", "centroid", "const",
        "continue", "default", "discard", "do", "else", "flat", "for",
        "highp", "if", "in", "inout", "invariant", "layout", "lowp",
        "mediump", "noperspective", "out", "patch", "precision", "return",
        "sample", "smooth", "struct", "subroutine", "switch", "uniform",
        "varying", "while"])
      ..replace("Builtin", ["gl_FragColor", "gl_Position"]);
    return tok;
  }
}
