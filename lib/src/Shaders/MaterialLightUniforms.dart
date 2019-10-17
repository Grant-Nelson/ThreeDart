part of ThreeDart.Shaders;

/// Bar light uniform.
class UniformBarLight {

  /// Creates the bar light uniform.
  UniformBarLight._(int this._index, Uniform3f this._startPnt, Uniform3f this._endPnt,
    Uniform3f this._viewStartPnt, Uniform3f this._viewEndPnt, Uniform3f this._color, 
    Uniform1f this._att0, Uniform1f this._att1, Uniform1f this._att2);

  /// The index of this light in the list of point lights.
  int get index => this._index;
  int _index;

  /// The point of the bars light's start location transformed by the object matrix.
  Math.Point3 get startPoint => this._startPnt.getPoint3();
  set startPoint(Math.Point3 pnt) => this._startPnt.setPoint3(pnt);
  Uniform3f _startPnt;
  
  /// The point of the bars light's end location transformed by the object matrix.
  Math.Point3 get endPoint => this._endPnt.getPoint3();
  set endPoint(Math.Point3 pnt) => this._endPnt.setPoint3(pnt);
  Uniform3f _endPnt;

  /// The bar light's start location transformed by the view matrix.
  Math.Point3 get viewStartPoint => this._viewStartPnt.getPoint3();
  set viewStartPoint(Math.Point3 pnt) => this._viewStartPnt.setPoint3(pnt);
  Uniform3f _viewStartPnt;
  
  /// The bar light's end location transformed by the view matrix.
  Math.Point3 get viewEndPoint => this._viewEndPnt.getPoint3();
  set viewEndPoint(Math.Point3 pnt) => this._viewEndPnt.setPoint3(pnt);
  Uniform3f _viewEndPnt;

  /// The bar light color.
  Math.Color3 get color => this._color.getColor3();
  set color(Math.Color3 clr) => this._color.setColor3(clr);
  Uniform3f _color;

  /// The bar light constant attenuation.
  double get attenuation0 => this._att0.getValue();
  set attenuation0(double att) => this._att0.setValue(att);
  Uniform1f _att0;

  /// The bar light linear attenuation.
  double get attenuation1 => this._att1.getValue();
  set attenuation1(double att) => this._att1.setValue(att);
  Uniform1f _att1;

  /// The bar light quatradic attenuation.
  double get attenuation2 => this._att2.getValue();
  set attenuation2(double att) => this._att2.setValue(att);
  Uniform1f _att2;
}

/// Directional light uniform.
class UniformDirectionalLight {

  /// Creates the directional light uniform.
  UniformDirectionalLight._(int this._index, Uniform3f this._objUp,
    Uniform3f this._objRight, Uniform3f this._objDir, Uniform3f this._viewDir,
    Uniform3f this._color, UniformSampler2D this._txt);

  /// The index of this light in the list of directional lights.
  int get index => this._index;
  int _index;

  /// The directional light's up.
  Math.Vector3 get objectUp => this._objUp.getVector3();
  set objectUp(Math.Vector3 vec) => this._objUp.setVector3(vec);
  Uniform3f _objUp;

  /// The directional light's right.
  Math.Vector3 get objectRight => this._objRight.getVector3();
  set objectRight(Math.Vector3 vec) => this._objRight.setVector3(vec);
  Uniform3f _objRight;

  /// The directional light's direction.
  Math.Vector3 get objectDir => this._objDir.getVector3();
  set objectDir(Math.Vector3 vec) => this._objDir.setVector3(vec);
  Uniform3f _objDir;

  /// The directional light's direction transformed by the view matrix.
  Math.Vector3 get viewDir => this._viewDir.getVector3();
  set viewDir(Math.Vector3 vec) => this._viewDir.setVector3(vec);
  Uniform3f _viewDir;

  /// The directional light color.
  Math.Color3 get color => this._color.getColor3();
  set color(Math.Color3 clr) => this._color.setColor3(clr);
  Uniform3f _color;

  /// The directional light texture.
  set texture(Textures.Texture2D txt) {
    if ((txt != null) && txt.loaded) this._txt.setTexture2D(txt);
  }
  UniformSampler2D _txt;
}

/// Point light uniform.
class UniformPointLight {

  /// Creates the point light uniform.
  UniformPointLight._(int this._index, Uniform3f this._point, Uniform3f this._viewPnt,
    UniformMat3 this._invViewRotMat, Uniform3f this._color,
    UniformSamplerCube this._txt, UniformSamplerCube this._shadow, Uniform4f this._shadowAdj,
    Uniform1f this._att0, Uniform1f this._att1, Uniform1f this._att2);

  /// The index of this light in the list of point lights.
  int get index => this._index;
  int _index;

  /// The point light's location transformed by the object matrix.
  Math.Point3 get point => this._point.getPoint3();
  set point(Math.Point3 pnt) => this._point.setPoint3(pnt);
  Uniform3f _point;

  /// The point light's location transformed by the view matrix.
  Math.Point3 get viewPoint => this._viewPnt.getPoint3();
  set viewPoint(Math.Point3 pnt) => this._viewPnt.setPoint3(pnt);
  Uniform3f _viewPnt;

  /// The texture point light's rotation transformed by the inverse view matrix.
  Math.Matrix3 get inverseViewRotationMatrix => this._invViewRotMat.getMatrix3();
  set inverseViewRotationMatrix(Math.Matrix3 mat) => this._invViewRotMat.setMatrix3(mat);
  UniformMat3 _invViewRotMat;

  /// The point light color.
  Math.Color3 get color => this._color.getColor3();
  set color(Math.Color3 clr) => this._color.setColor3(clr);
  Uniform3f _color;

  /// The point light color texture.
  set texture(Textures.TextureCube txt) {
    if ((txt != null) && txt.loaded) this._txt.setTextureCube(txt);
  }
  UniformSamplerCube _txt;

  /// The point light shadow depth texture.
  set shadow(Textures.TextureCube txt) {
    if ((txt != null) && txt.loaded) this._shadow.setTextureCube(txt);
  }
  UniformSamplerCube _shadow;

  /// The spot light shadow depths adjustment vector.
  Math.Vector4 get shadowAdjust => this._shadowAdj.getVector4();
  set shadowAdjust(Math.Vector4 adj) => this._shadowAdj.setVector4(adj);
  Uniform4f _shadowAdj;

  /// The point light constant attenuation.
  double get attenuation0 => this._att0.getValue();
  set attenuation0(double att) => this._att0.setValue(att);
  Uniform1f _att0;

  /// The point light linear attenuation.
  double get attenuation1 => this._att1.getValue();
  set attenuation1(double att) => this._att1.setValue(att);
  Uniform1f _att1;

  /// The point light quatradic attenuation.
  double get attenuation2 => this._att2.getValue();
  set attenuation2(double att) => this._att2.setValue(att);
  Uniform1f _att2;
}

/// Spot light uniform.
class UniformSpotLight {

  /// Creates the spot light uniform.
  UniformSpotLight._(int this._index,
    Uniform3f this._objPnt, Uniform3f this._objDir, Uniform3f this._viewPnt,
    Uniform3f this._color, Uniform3f this._objUp, Uniform3f this._objRight,
    Uniform1f this._tuScalar, Uniform1f this._tvScalar, Uniform4f this._shadowAdj,
    Uniform1f this._cutoff, Uniform1f this._coneAngle,
    Uniform1f this._att0, Uniform1f this._att1, Uniform1f this._att2,
    UniformSampler2D this._txt, UniformSampler2D this._shadow);

  /// The index of this light in the list of spot lights.
  int get index => this._index;
  int _index;

  /// The spot light's location transformed by the object matrix.
  Math.Point3 get objectPoint => this._objPnt.getPoint3();
  set objectPoint(Math.Point3 pnt) => this._objPnt.setPoint3(pnt);
  Uniform3f _objPnt;

  /// The directional light's direction.
  Math.Vector3 get objectDirection => this._objDir.getVector3();
  set objectDirection(Math.Vector3 vec) => this._objDir.setVector3(vec);
  Uniform3f _objDir;

  /// The spot light's location transformed by the view matrix.
  Math.Point3 get viewPoint => this._viewPnt.getPoint3();
  set viewPoint(Math.Point3 pnt) => this._viewPnt.setPoint3(pnt);
  Uniform3f _viewPnt;

  /// The spot light color.
  Math.Color3 get color => this._color.getColor3();
  set color(Math.Color3 clr) => this._color.setColor3(clr);
  Uniform3f _color;

  /// The spot light's up.
  Math.Vector3 get objectUp => this._objUp.getVector3();
  set objectUp(Math.Vector3 vec) => this._objUp.setVector3(vec);
  Uniform3f _objUp;

  /// The spot light's right.
  Math.Vector3 get objectRight => this._objRight.getVector3();
  set objectRight(Math.Vector3 vec) => this._objRight.setVector3(vec);
  Uniform3f _objRight;
  
  /// The spot light's horizontal scalar.
  double get tuScalar => this._tuScalar.getValue();
  set tuScalar(double tuScalar) => this._tuScalar.setValue(tuScalar);
  Uniform1f _tuScalar;

  /// The spot light's vertical scalar.
  double get tvScalar => this._tvScalar.getValue();
  set tvScalar(double tvScalar) => this._tvScalar.setValue(tvScalar);
  Uniform1f _tvScalar;

  /// The spot light shadow depths adjustment vector.
  Math.Vector4 get shadowAdjust => this._shadowAdj.getVector4();
  set shadowAdjust(Math.Vector4 adj) => this._shadowAdj.setVector4(adj);
  Uniform4f _shadowAdj;

  /// The spot light cut-off, in radians.
  double get cutoff => this._cutoff.getValue();
  set cutoff(double cutoff) => this._cutoff.setValue(cutoff);
  Uniform1f _cutoff;

  /// The spot light cone angle, in radians.
  double get coneAngle => this._coneAngle.getValue();
  set coneAngle(double coneAngle) => this._coneAngle.setValue(coneAngle);
  Uniform1f _coneAngle;

  /// The spot light constant attenuation.
  double get attenuation0 => this._att0.getValue();
  set attenuation0(double att) => this._att0.setValue(att);
  Uniform1f _att0;

  /// The spot light linear attenuation.
  double get attenuation1 => this._att1.getValue();
  set attenuation1(double att) => this._att1.setValue(att);
  Uniform1f _att1;

  /// The spot light quatradic attenuation.
  double get attenuation2 => this._att2.getValue();
  set attenuation2(double att) => this._att2.setValue(att);
  Uniform1f _att2;

  /// The spot light texture.
  set texture(Textures.Texture2D txt) {
    if ((txt != null) && txt.loaded) this._txt.setTexture2D(txt);
  }
  UniformSampler2D _txt;

  /// The spot light shadow depth texture.
  set shadow(Textures.Texture2D txt) {
    if ((txt != null) && txt.loaded) this._shadow.setTexture2D(txt);
  }
  UniformSampler2D _shadow;
}
