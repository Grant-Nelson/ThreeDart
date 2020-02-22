part of graphics;

/// The collection of material techniques used for chess.
class Materials {
  Textures.TextureCube _environment;
  Techniques.MaterialLight _whitePieceTech;
  Techniques.MaterialLight _blackPieceTech;
  Techniques.MaterialLight _selectedWhitePieceTech;
  Techniques.MaterialLight _selectedBlackPieceTech;
  Techniques.MaterialLight _highlightedWhitePieceTech;
  Techniques.MaterialLight _highlightedBlackPieceTech;
  Techniques.MaterialLight _whiteTileTech;
  Techniques.MaterialLight _blackTileTech;
  Techniques.MaterialLight _selectedWhiteTileTech;
  Techniques.MaterialLight _selectedBlackTileTech;
  Techniques.MaterialLight _highlightedWhiteTileTech;
  Techniques.MaterialLight _highlightedBlackTileTech;
  List<Techniques.MaterialLight> _edgeTechs;
  Techniques.MaterialLight _tableTech;

  /// Creates a new collection of materials techniques.
  Materials(ThreeDart.ThreeDart td) {
    this._environment = td.textureLoader.loadCubeFromPath("resources");

    Lights.Directional topLight = new Lights.Directional()
      ..color = Math.Color3(1.0, 0.9, 0.8)
      ..direction = Math.Vector3(0.0, -1.0, -0.25);

    Lights.Directional bottomLight = new Lights.Directional()
      ..color = Math.Color3(0.0, 0.1, 0.3)
      ..direction = Math.Vector3(0.0, 1.0, 0.25);

    Math.Color3 pieceReflection = new Math.Color3.gray(0.15);

    this._whitePieceTech = Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3.gray(0.6)
      ..ambient.color = new Math.Color3.gray(0.4)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 60.0
      ..environment = this._environment
      ..reflection.color = pieceReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);

    this._blackPieceTech = Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3.gray(0.2)
      ..ambient.color = new Math.Color3.gray(0.1)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 60.0
      ..environment = this._environment
      ..reflection.color = pieceReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);

    this._selectedWhitePieceTech = Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3(0.6, 0.0, 0.0)
      ..ambient.color = new Math.Color3(0.8, 0.0, 0.0)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 100.0
      ..environment = this._environment
      ..reflection.color = pieceReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);

    this._selectedBlackPieceTech = Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3(0.2, 0.0, 0.0)
      ..ambient.color = new Math.Color3(0.6, 0.0, 0.0)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 100.0
      ..environment = this._environment
      ..reflection.color = pieceReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);

    this._highlightedWhitePieceTech = Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3(0.5, 0.5, 0.0)
      ..ambient.color = new Math.Color3(0.7, 0.7, 0.0)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 100.0
      ..environment = this._environment
      ..reflection.color = pieceReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);

    this._highlightedBlackPieceTech = Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3(0.1, 0.1, 0.0)
      ..ambient.color = new Math.Color3(0.5, 0.5, 0.0)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 100.0
      ..environment = this._environment
      ..reflection.color = pieceReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);

    Math.Color3 tileReflection = new Math.Color3.gray(0.075);

    this._whiteTileTech = Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3.gray(0.6)
      ..ambient.color = new Math.Color3.gray(0.4)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 60.0
      ..environment = this._environment
      ..reflection.color = tileReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);

    this._blackTileTech = Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3.gray(0.2)
      ..ambient.color = new Math.Color3.gray(0.1)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 60.0
      ..environment = this._environment
      ..reflection.color = tileReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);

    this._selectedWhiteTileTech = Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3(0.6, 0.0, 0.0)
      ..ambient.color = new Math.Color3(0.8, 0.0, 0.0)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 100.0
      ..environment = this._environment
      ..reflection.color = tileReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);

    this._selectedBlackTileTech = Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3(0.2, 0.0, 0.0)
      ..ambient.color = new Math.Color3(0.6, 0.0, 0.0)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 100.0
      ..environment = this._environment
      ..reflection.color = tileReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);

    this._highlightedWhiteTileTech = Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3(0.5, 0.5, 0.0)
      ..ambient.color = new Math.Color3(0.7, 0.7, 0.0)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 100.0
      ..environment = this._environment
      ..reflection.color = tileReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);

    this._highlightedBlackTileTech = Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3(0.1, 0.1, 0.0)
      ..ambient.color = new Math.Color3(0.5, 0.5, 0.0)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 100.0
      ..environment = this._environment
      ..reflection.color = tileReflection
      ..lights.add(topLight)
      ..lights.add(bottomLight);

    this._edgeTechs = new List<Techniques.MaterialLight>();
    for (int i = 0; i < 4; ++i) {
      Textures.Texture2D edgeTxt = td.textureLoader.load2DFromFile("resources/edge$i.png");
      this._edgeTechs.add(Techniques.MaterialLight()
        ..diffuse.color = new Math.Color3.gray(0.6)
        ..diffuse.texture2D = edgeTxt
        ..ambient.color = new Math.Color3.gray(0.4)
        ..ambient.texture2D = edgeTxt
        ..specular.color = new Math.Color3.white()
        ..specular.shininess = 80.0
        ..environment = this._environment
        ..reflection.color = new Math.Color3.gray(0.1)
        ..lights.add(topLight)
        ..lights.add(bottomLight));
    }

    Textures.Texture2D tableColor = td.textureLoader.load2DFromFile("resources/tableColor.png");
    Textures.Texture2D tableSpec = td.textureLoader.load2DFromFile("resources/tableSpec.png");
    this._tableTech = Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3.gray(0.6)
      ..diffuse.texture2D = tableColor
      ..ambient.color = new Math.Color3.gray(0.4)
      ..ambient.texture2D = tableColor
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 80.0
      ..specular.texture2D = tableSpec
      ..environment = this._environment
      ..reflection.texture2D = tableSpec
      ..bump.texture2D = td.textureLoader.load2DFromFile("resources/tableNormal.png")
      ..lights.add(topLight)
      ..lights.add(bottomLight);
  }

  /// Creates a new pick color technique using the given index.
  Techniques.SolidColor nextPickTech(int index) {
    const int max = 96;
    Math.Color4 color = Math.Color4.fromHVS(index/max, 1.0, 1.0);
    return Techniques.SolidColor(color: color.trim32());
  }

  /// Gets the enviroment texture cube used for background and reflections.
  Textures.TextureCube get environment => this._environment;

  Techniques.MaterialLight get whitePieceTech => this._whitePieceTech;
  Techniques.MaterialLight get blackPieceTech => this._blackPieceTech;
  Techniques.MaterialLight get selectedWhitePieceTech => this._selectedWhitePieceTech;
  Techniques.MaterialLight get selectedBlackPieceTech => this._selectedBlackPieceTech;
  Techniques.MaterialLight get highlightedWhitePieceTech => this._highlightedWhitePieceTech;
  Techniques.MaterialLight get highlightedBlackPieceTech => this._highlightedBlackPieceTech;

  Techniques.MaterialLight get whiteTileTech => this._whiteTileTech;
  Techniques.MaterialLight get blackTileTech => this._blackTileTech;
  Techniques.MaterialLight get selectedWhiteTileTech => this._selectedWhiteTileTech;
  Techniques.MaterialLight get selectedBlackTileTech => this._selectedBlackTileTech;
  Techniques.MaterialLight get highlightedWhiteTileTech => this._highlightedWhiteTileTech;
  Techniques.MaterialLight get highlightedBlackTileTech => this._highlightedBlackTileTech;

  List<Techniques.MaterialLight> get edgeTechs => this._edgeTechs;
  Techniques.MaterialLight get tableTech => this._tableTech;
}