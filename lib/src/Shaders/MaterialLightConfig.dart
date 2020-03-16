part of ThreeDart.Shaders;

/// The configuration for a specific type of bar lights
/// that can be added to the material light shader.
class BarLightConfig {

  /// The identifier for the type of bar light this configuration is for.
  final int configID;

  /// Indicates the number of bar lights of this type.
  final int lightCount;

  /// Constructs a new bar light configuration.
  BarLightConfig(int this.configID, int this.lightCount);

  /// Indicates if this type of bar light has light attenuation.
  bool get hasAttenuation => (this.configID & 0x04) != 0x00;

  /// Indicates if this type of bar light has either attenuation or shadow
  /// meaning that it will require calculating distance from light.
  bool get hasDist => (this.configID & 0x06) != 0x00;

  /// Gets the string for this bar light configuration.
  String toString() => "barLight${this.configID}";
}

/// The configuration for a specific type of directional lights
/// that can be added to the material light shader.
class DirectionalLightConfig {

  /// The identifier for the type of directional light this configuration is for.
  final int configID;

  /// Indicates the number of directional lights of this type.
  final int lightCount;

  /// Constructs a new directional light configuration.
  DirectionalLightConfig(int this.configID, int this.lightCount);

  /// Indicates if this type of directional light has a color texture.
  bool get colorTexture => (this.configID & 0x01) != 0x00;

  /// Indicates if this type of directional light has either a color or shadow texture.
  bool get hasTexture => (this.configID & 0x01) != 0x00;

  /// Gets the string for this directional light configuration.
  String toString() => "dirLight${this.configID}";
}

/// The configuration for a specific type of point lights
/// that can be added to the material light shader.
class PointLightConfig {

  /// The identifier for the type of point light this configuration is for.
  final int configID;

  /// Indicates the number of point lights of this type.
  final int lightCount;

  /// Constructs a new point light configuration.
  PointLightConfig(int this.configID, int this.lightCount);

  /// Indicates if this type of point light has a color texture.
  bool get colorTexture => (this.configID & 0x01) != 0x00;

  /// Indicates if this type of point light has a shadow texture.
  bool get shadowTexture => (this.configID & 0x02) != 0x00;

  /// Indicates if this type of point light has light attenuation.
  bool get hasAttenuation => (this.configID & 0x04) != 0x00;

  /// Indicates if this type of point light has either a color or shadow texture.
  bool get hasTexture => (this.configID & 0x03) != 0x00;

  /// Indicates if this type of point light has either attenuation or shadow
  /// meaning that it will require calculating distance from light.
  bool get hasDist => (this.configID & 0x06) != 0x00;

  /// Gets the string for this point light configuration.
  String toString() => "pointLight${this.configID}";
}

/// The configuration for a specific type of spot lights
/// that can be added to the material light shader.
class SpotLightConfig {

  /// The identifier for the type of spot light this configuration is for.
  final int configID;

  /// Indicates the number of spot lights of this type.
  final int lightCount;

  /// Constructs a new spot light configuration.
  SpotLightConfig(int this.configID, int this.lightCount);

  /// Indicates if this type of spot light has a color texture.
  bool get colorTexture => (this.configID & 0x01) != 0x00;

  /// Indicates if this type of spot light has a shadow texture.
  bool get shadowTexture => (this.configID & 0x02) != 0x00;

  /// Indicates if this type of spot light has light attenuation.
  bool get hasAttenuation => (this.configID & 0x04) != 0x00;

  /// Indicates if this type of spot light has a light cone cut off.
  bool get hasCutOff => (this.configID & 0x08) != 0x00;

  /// Indicates if this type of spot light has either a color or shadow texture.
  bool get hasTexture => (this.configID & 0x03) != 0x00;

  /// Indicates if this type of spot light has either attenuation or shadow
  /// meaning that it will require calculating distance from light.
  bool get hasDist => (this.configID & 0x06) != 0x00;

  /// Gets the string for this spot light configuration.
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

  /// The bar light configurations.
  final List<BarLightConfig> barLights;

  /// The directional light configurations.
  final List<DirectionalLightConfig> dirLights;

  /// The point light configurations.
  final List<PointLightConfig> pointLights;

  /// The spot light configurations.
  final List<SpotLightConfig> spotLights;

  /// The total number of any type of light.
  final int totalLights;

  /// Indicates there is either reflection or refraction
  /// meaning that an environmental map is needed for this shader.
  final bool environmental;

  /// Indicates that there is intense light illumination via
  /// diffuse, inverse diffuse, and specular.
  final bool intense;

  /// Indicates the inverse view matrix is needed for this shader.
  final bool invViewMat;

  /// Indicates the object matrix is needed for this shader.
  final bool objMat;

  /// Indicates the view object matrix is needed for this shader.
  final bool viewObjMat;

  /// Indicates the projection view object matrix is needed for this shader.
  final bool projViewObjMat;

  /// Indicates the view matrix is needed by the fragment shader.
  final bool viewMat;

  /// Indicates the projection view matrix is needed for this shader.
  final bool projViewMat;

  /// Indicates the ambient, diffuse, inverse diffuse, or specular
  /// material component is used meaning lighting is needed for this shader.
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

    List<BarLightConfig> this.barLights,
    List<DirectionalLightConfig> this.dirLights,
    List<PointLightConfig> this.pointLights,
    List<SpotLightConfig> this.spotLights,

    int this.totalLights,
    bool this.environmental, bool this.intense, bool this.invViewMat,
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
    List<BarLightConfig> barLights,
    List<DirectionalLightConfig> dirLights,
    List<PointLightConfig> pointLights,
    List<SpotLightConfig> spotLights) {

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

    if (barLights.length > 0) {
      buf.write("_Bar");
      for (BarLightConfig light in barLights)
        buf.write("_${light.configID}");
    }

    if (dirLights.length > 0) {
      buf.write("_Dir");
      for (DirectionalLightConfig light in dirLights)
        buf.write("_${light.configID}");
    }

    if (pointLights.length > 0) {
      buf.write("_Point");
      for (PointLightConfig light in pointLights)
        buf.write("_${light.configID}");
    }

    if (spotLights.length > 0) {
      buf.write("_Spot");
      for (SpotLightConfig light in spotLights)
        buf.write("_${light.configID}");
    }
    String name = buf.toString();

    int totalLights = 0;
    bool objPos = fog;
    for (BarLightConfig light in barLights) {
      totalLights += light.lightCount;
      objPos = true;
    }
    for (DirectionalLightConfig light in dirLights) {
      totalLights += light.lightCount;
      objPos = true;
    }
    for (PointLightConfig light in pointLights) {
      totalLights += light.lightCount;
      objPos = true;
    }
    for (SpotLightConfig light in spotLights) {
      totalLights += light.lightCount;
      objPos = true;
    }

    bool environmental = reflection.hasAny || refraction.hasAny;
    bool invViewMat = environmental;
    bool hasBar = barLights.length > 0;
    bool lights = ambient.hasAny || diffuse.hasAny ||
                  invDiffuse.hasAny || specular.hasAny;
    bool viewPos = (specular.hasAny) || hasBar ||
                   (pointLights.length > 0) || environmental;
    bool intense = diffuse.hasAny || invDiffuse.hasAny || specular.hasAny;;
    bool norm = intense || bumpy.hasAny || environmental;
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
    bool viewMat        = hasBar && intense;
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
      alpha, barLights, dirLights, pointLights, spotLights,
      totalLights, environmental, intense,
      invViewMat, objMat, viewObjMat, projViewObjMat,
      viewMat, projViewMat, lights, objPos, viewPos,
      norm, binm, txt2D, txtCube, bending, txt2DMat, txtCubeMat,
      colorMat, fog, bendMats, name, vertexType);
  }

  /// Creates the vertex source code for the material light shader for the given configurations.
  String createVertexSource() =>
    _materialLightVS.createVertexSource(this);

  /// Creates the fragment source code for the material light shader for the given configurations.
  String createFragmentSource() =>
    _materialLightFS.createFragmentSource(this);

  /// Gets the name for the configuration.
  String toString() => this.name;
}
