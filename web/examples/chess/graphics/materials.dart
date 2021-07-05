part of graphics;

/// The collection of material techniques used for chess.
class Materials {
  ThreeDart.ThreeDart _td;

  /// Creates a new collection of materials techniques.
  Materials(this._td);

  /// Creates a new pick color technique using the given index.
  Techniques.SolidColor nextPickTech(int index) {
    const int max = 96;
    Math.Color4 color = Math.Color4.fromHVS(index/max, 1.0, 1.0);
    return Techniques.SolidColor(color: color.trim32());
  }

  /// Gets the enviroment texture cube used for background and reflections.
  Textures.TextureCube get environment =>
    this._environment ??= this._td.textureLoader.loadCubeFromPath('resources'); 
  Textures.TextureCube? _environment = null;

  Lights.Directional get topLight =>
    this._topLight ??= new Lights.Directional()
      ..color = Math.Color3(1.0, 0.9, 0.8)
      ..direction = Math.Vector3(0.0, -1.0, -0.25);
  Lights.Directional? _topLight = null;

  Lights.Directional get bottomLight =>
    this._bottomLight ??= new Lights.Directional()
      ..color = Math.Color3(0.0, 0.1, 0.3)
      ..direction = Math.Vector3(0.0, 1.0, 0.25);
  Lights.Directional? _bottomLight = null;

  Math.Color3 get pieceReflection =>
    this._pieceReflection ??= new Math.Color3.gray(0.15);
  Math.Color3? _pieceReflection = null;
  
  Math.Color3 get tileReflection =>
    this._tileReflection ??= new Math.Color3.gray(0.075);
  Math.Color3? _tileReflection = null;

  Techniques.MaterialLight get whitePieceTech =>
    this._whitePieceTech ??= Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3.gray(0.6)
      ..ambient.color = new Math.Color3.gray(0.4)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 60.0
      ..environment = this.environment
      ..reflection.color = pieceReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);
  Techniques.MaterialLight? _whitePieceTech = null;

  Techniques.MaterialLight get blackPieceTech =>
    this._blackPieceTech ??= Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3.gray(0.2)
      ..ambient.color = new Math.Color3.gray(0.1)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 60.0
      ..environment = this.environment
      ..reflection.color = pieceReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);
  Techniques.MaterialLight? _blackPieceTech = null;
  
  Techniques.MaterialLight get selectedWhitePieceTech =>
    this._selectedWhitePieceTech ??= Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3(0.6, 0.0, 0.0)
      ..ambient.color = new Math.Color3(0.8, 0.0, 0.0)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 100.0
      ..environment = this.environment
      ..reflection.color = pieceReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);
  Techniques.MaterialLight? _selectedWhitePieceTech = null;

  Techniques.MaterialLight get selectedBlackPieceTech =>
    this._selectedBlackPieceTech ??= Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3(0.2, 0.0, 0.0)
      ..ambient.color = new Math.Color3(0.6, 0.0, 0.0)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 100.0
      ..environment = this.environment
      ..reflection.color = pieceReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);
  Techniques.MaterialLight? _selectedBlackPieceTech = null;

  Techniques.MaterialLight get highlightedWhitePieceTech =>
    this._highlightedWhitePieceTech ??= Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3(0.5, 0.5, 0.0)
      ..ambient.color = new Math.Color3(0.7, 0.7, 0.0)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 100.0
      ..environment = this.environment
      ..reflection.color = pieceReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);
  Techniques.MaterialLight? _highlightedWhitePieceTech = null;

  Techniques.MaterialLight get highlightedBlackPieceTech =>
    this._highlightedBlackPieceTech ??= Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3(0.1, 0.1, 0.0)
      ..ambient.color = new Math.Color3(0.5, 0.5, 0.0)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 100.0
      ..environment = this.environment
      ..reflection.color = pieceReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);
  Techniques.MaterialLight? _highlightedBlackPieceTech = null;

  Techniques.MaterialLight get whiteTileTech =>
    this._whiteTileTech ??= Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3.gray(0.6)
      ..ambient.color = new Math.Color3.gray(0.4)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 60.0
      ..environment = this.environment
      ..reflection.color = tileReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);
  Techniques.MaterialLight? _whiteTileTech = null;

  Techniques.MaterialLight get blackTileTech =>
    this._blackTileTech ??= Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3.gray(0.2)
      ..ambient.color = new Math.Color3.gray(0.1)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 60.0
      ..environment = this.environment
      ..reflection.color = tileReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);
  Techniques.MaterialLight? _blackTileTech = null;

  Techniques.MaterialLight get selectedWhiteTileTech =>
    this._selectedWhiteTileTech ??= Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3(0.6, 0.0, 0.0)
      ..ambient.color = new Math.Color3(0.8, 0.0, 0.0)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 100.0
      ..environment = this.environment
      ..reflection.color = tileReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);
  Techniques.MaterialLight? _selectedWhiteTileTech = null;

  Techniques.MaterialLight get selectedBlackTileTech =>
    this._selectedBlackTileTech ??= Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3(0.2, 0.0, 0.0)
      ..ambient.color = new Math.Color3(0.6, 0.0, 0.0)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 100.0
      ..environment = this.environment
      ..reflection.color = tileReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);
  Techniques.MaterialLight? _selectedBlackTileTech = null;

  Techniques.MaterialLight get highlightedWhiteTileTech =>
    this._highlightedWhiteTileTech ??= Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3(0.5, 0.5, 0.0)
      ..ambient.color = new Math.Color3(0.7, 0.7, 0.0)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 100.0
      ..environment = this.environment
      ..reflection.color = tileReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);
  Techniques.MaterialLight? _highlightedWhiteTileTech = null;

  Techniques.MaterialLight get highlightedBlackTileTech =>
    this._highlightedBlackTileTech ??= Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3(0.1, 0.1, 0.0)
      ..ambient.color = new Math.Color3(0.5, 0.5, 0.0)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 100.0
      ..environment = this.environment
      ..reflection.color = tileReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);
  Techniques.MaterialLight? _highlightedBlackTileTech = null;

  List<Techniques.MaterialLight> get edgeTechs =>
    this._edgeTechs ?? new List.generate(4, (int i) {
      var edgeTxt  = this._td.textureLoader.load2DFromFile('resources/edge$i.png');
      var edgeNorm = this._td.textureLoader.load2DFromFile('resources/edge${i}Normal.png');
      return new Techniques.MaterialLight()
        ..bump.texture2D = edgeNorm
        ..diffuse.color = new Math.Color3.gray(0.6)
        ..diffuse.texture2D = edgeTxt
        ..ambient.color = new Math.Color3.gray(0.4)
        ..ambient.texture2D = edgeTxt
        ..specular.color = new Math.Color3.white()
        ..specular.shininess = 80.0
        ..environment = this.environment
        ..reflection.color = new Math.Color3.gray(0.1)
        ..lights.add(topLight)
        ..lights.add(bottomLight);
    });
  List<Techniques.MaterialLight>? _edgeTechs = null;

  Techniques.MaterialLight get tableTech =>
    this._tableTech ??= () {
      var tableColor = this._td.textureLoader.load2DFromFile('resources/tableColor.png');
      var tableSpec  = this._td.textureLoader.load2DFromFile('resources/tableSpec.png');
      return new Techniques.MaterialLight()
        ..diffuse.color = new Math.Color3.gray(0.6)
        ..diffuse.texture2D = tableColor
        ..ambient.color = new Math.Color3.gray(0.4)
        ..ambient.texture2D = tableColor
        ..specular.color = new Math.Color3.white()
        ..specular.shininess = 80.0
        ..specular.texture2D = tableSpec
        ..environment = this.environment
        ..reflection.texture2D = tableSpec
        ..bump.texture2D = this._td.textureLoader.load2DFromFile('resources/tableNormal.png')
        ..lights.add(topLight)
        ..lights.add(bottomLight);
    }();
  Techniques.MaterialLight? _tableTech = null;
}