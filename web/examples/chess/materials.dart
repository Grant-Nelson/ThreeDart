part of chess;

///
class Materials {
  Techniques.MaterialLight _whitePieceTech;
  Techniques.MaterialLight _blackPieceTech;
  Techniques.MaterialLight _selectedWhitePieceTech;
  Techniques.MaterialLight _selectedBlackPieceTech;
  List<Techniques.MaterialLight> _edgeTechs;

  Materials(ThreeDart.ThreeDart td) {
    Lights.Directional topLight = new Lights.Directional()
      ..color = Math.Color3(1.0, 0.9, 0.8)
      ..direction = Math.Vector3(0.0, -1.0, -0.25);
      
    Lights.Directional bollomLight = new Lights.Directional()
      ..color = Math.Color3(0.0, 0.1, 0.3)
      ..direction = Math.Vector3(0.0, 1.0, 0.25);
    
    this._whitePieceTech = Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3.gray(0.6)
      ..ambient.color = new Math.Color3.gray(0.4)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 60.0
      ..lights.add(topLight)
      ..lights.add(bollomLight);
      
    this._blackPieceTech = Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3.gray(0.2)
      ..ambient.color = new Math.Color3.gray(0.1)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 60.0
      ..lights.add(topLight)
      ..lights.add(bollomLight);
      
    this._selectedWhitePieceTech = Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3(0.6, 0.0, 0.0)
      ..ambient.color = new Math.Color3(0.8, 0.0, 0.0)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 100.0
      ..lights.add(topLight)
      ..lights.add(bollomLight);
      
    this._selectedBlackPieceTech = Techniques.MaterialLight()
      ..diffuse.color = new Math.Color3(0.2, 0.0, 0.0)
      ..ambient.color = new Math.Color3(0.6, 0.0, 0.0)
      ..specular.color = new Math.Color3.white()
      ..specular.shininess = 100.0
      ..lights.add(topLight)
      ..lights.add(bollomLight);

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
        ..lights.add(topLight)
        ..lights.add(bollomLight));
    }
  }
  
  Techniques.MaterialLight get whitePieceTech => this._whitePieceTech;
  Techniques.MaterialLight get blackPieceTech => this._blackPieceTech;
  Techniques.MaterialLight get selectedWhitePieceTech => this._selectedWhitePieceTech;
  Techniques.MaterialLight get selectedBlackPieceTech => this._selectedBlackPieceTech;
  List<Techniques.MaterialLight> get edgeTechs => this._edgeTechs;
}