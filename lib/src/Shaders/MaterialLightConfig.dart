part of ThreeDart.Shaders;

class SpotLightConfig {
  final int configID;
  final bool colorTxt;
  final bool shadowTxt;
  final bool hasCutOff;
  final bool hasAttenuation;
  final int lightCount;

  SpotLightConfig._(int this.configID, bool this.colorTxt, bool this.shadowTxt,
    bool this.hasCutOff, bool this.hasAttenuation, int this.lightCount);

  factory SpotLightConfig(int configID, int lightCount) {
    bool colorTxt  = (configID & 0x01) != 0x00;
    bool shadowTxt = (configID & 0x02) != 0x00;
    bool hasAtten  = (configID & 0x04) != 0x00;
    bool hasCutOff = (configID & 0x08) != 0x00;
    return new SpotLightConfig._(configID, colorTxt, shadowTxt, hasCutOff, hasAtten, lightCount);
  }

  bool get hasTexture => this.colorTxt || this.shadowTxt;

  bool get hasDist => this.hasAttenuation || this.shadowTxt;
  
  String toString() => "spotLight${this.configID}";
}

/// The shader configuration for rendering material light.
class MaterialLightConfig {

  /// The emission color source type.
  final ColorSourceType emission;

  /// The ambient color source type.
  final ColorSourceType ambient;

  /// The diffuse color source type.
  final ColorSourceType diffuse;

  /// The inverse diffuse color source type.
  final ColorSourceType invDiffuse;

  /// The specular color source type.
  final ColorSourceType specular;

  /// The bumpy color source type.
  final ColorSourceType bumpy;

  /// The reflection color source type.
  final ColorSourceType reflection;

  /// The refraction color source type.
  final ColorSourceType refraction;

  /// The alpha color source type.
  final ColorSourceType alpha;

  /// The number of allowed directional lights.
  final int dirLight;

  /// The number of allowed point lights.
  final int pointLight;

  /// The number of allowed spot lights.
  final List<SpotLightConfig> spotLights;

  /// The number of allowed textured directional lights.
  final int txtDirLight;

  /// The number of allowed textured point lights.
  final int txtPointLight;

  /// The total number of any type of light.
  final int totalLights;

  /// Indicates there is either reflection or refration
  /// meaning that an enviromental map is needed for this shader.
  final bool enviromental;

  /// Indicates the inverse view matrix is needed for this shader.
  final bool invViewMat;

  /// Indicates the object matrix is needed for this shader.
  final bool objMat;

  /// Indicates the view object matrix is needed for this shader.
  final bool viewObjMat;

  /// Indicates the projection view object matrix is needed for this shader.
  final bool projViewObjMat;

  /// Indicates the view matrix is needed for this shader.
  final bool viewMat;

  /// Indicates the projection view matrix is needed for this shader.
  final bool projViewMat;

  /// Indicates the ambient, diffuse, inverse diffuse, or specular
  /// material compenent is used meaning lighting is needed for this shader.
  /// If lighting is needed but no lights are provided a default light is used.
  final bool lights;

  /// Indicates the object's position is needed by the fragment shader.
  final bool objPos;

  /// Indicates the camera's position is needed by the fragment shader.
  final bool viewPos;

  /// Indicates the normal vector is needed by the fragment shader.
  final bool norm;

  /// Indicates the binormal vector is needed by the fragment shader.
  final bool binm;

  /// Indicates the 2D texture coordinate is needed by the fragment shader.
  final bool txt2D;

  /// Indicates the cube texture coordinate is needed by the fragment shader.
  final bool txtCube;

  /// Indicates the bending is needed by the vertex shader.
  final bool bending;

  /// Indicates the 2D texture matrix is needed by the vertex shader.
  final bool txt2DMat;

  /// Indicates the cube texture matrix is needed by the vertex shader.
  final bool txtCubeMat;

  /// Indicates the color matrix is needed by the fragment shader.
  final bool colorMat;

  /// Indicates that fog is enabled.
  final bool fog;

  /// The total number of bend matrices allowed by this shader.
  final int bendMats;

  /// The name of this shader configuration.
  final String name;

  /// The vertex type required from shapes to be drawn using this shader.
  final Data.VertexType vertexType;

  /// Creates a new material light configuration with all final values
  /// calculated by the other MaterialLightConfig constructor.
  MaterialLightConfig._(
    ColorSourceType this.emission, ColorSourceType this.ambient,
    ColorSourceType this.diffuse, ColorSourceType this.invDiffuse,
    ColorSourceType this.specular, ColorSourceType this.bumpy,
    ColorSourceType this.reflection, ColorSourceType this.refraction,
    ColorSourceType this.alpha,
    
    int this.dirLight, int this.pointLight,
    List<SpotLightConfig> this.spotLights,
    
    int this.txtDirLight, int this.txtPointLight, int this.totalLights,

    bool this.enviromental, bool this.invViewMat,
    bool this.objMat, bool this.viewObjMat, bool this.projViewObjMat,
    bool this.viewMat, bool this.projViewMat,
    bool this.lights, bool this.objPos,
    bool this.viewPos, bool this.norm, bool this.binm,
    bool this.txt2D, bool this.txtCube, bool this.bending,
    bool this.txt2DMat, bool this.txtCubeMat,
    bool this.colorMat, bool this.fog, int this.bendMats,
    String this.name, Data.VertexType this.vertexType);

  /// Creates a new material light configuration.
  /// The configuration for the material light shader.
  factory MaterialLightConfig(
    bool txt2DMat, bool txtCubeMat, bool colorMat,
    bool fog, int bendMats, ColorSourceType emission,
    ColorSourceType ambient, ColorSourceType diffuse,
    ColorSourceType invDiffuse, ColorSourceType specular,
    ColorSourceType bumpy, ColorSourceType reflection,
    ColorSourceType refraction, ColorSourceType alpha,
    int dirLight, int pointLight,
    List<SpotLightConfig> spotLights,
    int txtDirLight, int txtPointLight) {

    StringBuffer buf = new StringBuffer();
    buf.write("MaterialLight_");
    buf.write(emission.toString());
    buf.write(ambient.toString());
    buf.write(diffuse.toString());
    buf.write(invDiffuse.toString());
    buf.write(specular.toString());
    buf.write(bumpy.toString());
    buf.write(reflection.toString());
    buf.write(refraction.toString());
    buf.write(alpha.toString());
    buf.write("_");
    buf.write(txt2DMat?   "1": "0");
    buf.write(txtCubeMat? "1": "0");
    buf.write(colorMat?   "1": "0");
    buf.write(fog?        "1": "0");
    buf.write("_");
    buf.write(bendMats);
    buf.write("_");
    buf.write(dirLight);
    buf.write("_");
    buf.write(pointLight);
    buf.write("_");

    for (SpotLightConfig light in spotLights)
      buf.write("Spot${light}_");

    buf.write(txtDirLight);
    buf.write("_");
    buf.write(txtPointLight);
    String name = buf.toString();

    int totalLights = 0;
    bool objPos = fog;
    
    totalLights += dirLight + pointLight + txtDirLight + txtPointLight;
    objPos = objPos || (pointLight + txtDirLight + txtPointLight) > 0;

    for (SpotLightConfig light in spotLights) {
      totalLights += light.lightCount;
      objPos = true;
    }

    bool enviromental = reflection.hasAny || refraction.hasAny;
    bool invViewMat = enviromental;
    bool lights = ambient.hasAny || diffuse.hasAny ||
                  invDiffuse.hasAny || specular.hasAny;
    bool viewPos = (specular.hasAny) ||
                   ((pointLight + txtPointLight) > 0) ||
                    enviromental;
    bool norm = diffuse.hasAny || invDiffuse.hasAny || specular.hasAny ||
                bumpy.hasAny || enviromental;
    bool binm = bumpy.hasAny;
    bool txt2D = emission.hasTxt2D || ambient.hasTxt2D || diffuse.hasTxt2D ||
                 invDiffuse.hasTxt2D || specular.hasTxt2D || bumpy.hasTxt2D ||
                 reflection.hasTxt2D || refraction.hasTxt2D || alpha.hasTxt2D;
    bool txtCube = emission.hasTxtCube || ambient.hasTxtCube ||
                   diffuse.hasTxtCube || invDiffuse.hasTxtCube ||
                   specular.hasTxtCube || bumpy.hasTxtCube ||
                   reflection.hasTxtCube || refraction.hasTxtCube ||
                   alpha.hasTxtCube;
    bool bending = bendMats > 0;
    bool objMat  = objPos;
    bool viewObjMat = norm || binm || viewPos || fog;
    bool viewMat        = false;
    bool projViewObjMat = true;
    bool projViewMat    = false;
    txt2DMat   = txt2DMat   && txt2D;
    txtCubeMat = txtCubeMat && txtCube;

    Data.VertexType vertexType = Data.VertexType.Pos;
    if (norm)    vertexType |= Data.VertexType.Norm;
    if (binm)    vertexType |= Data.VertexType.Binm;
    if (txt2D)   vertexType |= Data.VertexType.Txt2D;
    if (txtCube) vertexType |= Data.VertexType.TxtCube;
    if (bending) vertexType |= Data.VertexType.Bending;

    return new MaterialLightConfig._(emission, ambient,
      diffuse, invDiffuse, specular, bumpy, reflection, refraction,
      alpha, dirLight, pointLight, spotLights, txtDirLight,
      txtPointLight, totalLights, enviromental,
      invViewMat, objMat, viewObjMat, projViewObjMat,
      viewMat, projViewMat, lights, objPos, viewPos,
      norm, binm, txt2D, txtCube, bending, txt2DMat, txtCubeMat,
      colorMat, fog, bendMats, name, vertexType);
  }

  /// Creates the vertex source code for the material light shader for the given configurations.
  String createVertexSource() =>
    _materialLightVS.createVertexSource(this);

  /// Creates the fragmant source code for the material light shader for the given configurations.
  String createFragmentSource() =>
    _materialLightFS.createFragmentSource(this);

  /// Gets the name for the configuration.
  String toString() => this.name;
}
