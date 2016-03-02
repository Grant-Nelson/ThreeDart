part of ThreeDart.test.test000;

void addMatrix3Tests(TestManager tests) {

  tests.add("Matrix3 Point Transposition Test", (TestArgs args) {
    Math.Matrix3 mat = new Math.Matrix3(1.0, 2.0, 3.0,
                                        4.0, 5.0, 6.0,
                                        7.0, 8.0, 9.0);
    _matrix3String(args, mat, "[ 1.000,  2.000,  3.000,",
                              "  4.000,  5.000,  6.000,",
                              "  7.000,  8.000,  9.000]");
    _transMatrix3(args, mat,   0.0,  0.0,  0.0,    0.0,  0.0,  0.0);
    _transMatrix3(args, mat,   1.0,  0.0,  0.0,    1.0,  4.0,  7.0);
    _transMatrix3(args, mat,   0.0,  1.0,  0.0,    2.0,  5.0,  8.0);
    _transMatrix3(args, mat,   0.0,  0.0,  1.0,    3.0,  6.0,  9.0);
    _transMatrix3(args, mat,   1.0,  1.0,  0.0,    3.0,  9.0, 15.0);
    _transMatrix3(args, mat,   1.0,  0.0,  1.0,    4.0, 10.0, 16.0);
    _transMatrix3(args, mat,   0.0,  1.0,  1.0,    5.0, 11.0, 17.0);
    _transMatrix3(args, mat,   1.0,  1.0,  1.0,    6.0, 15.0, 24.0);
  });

  tests.add("Matrix3 Vector Transposition Test", (TestArgs args) {
    Math.Matrix3 mat = new Math.Matrix3(1.0, 2.0, 3.0,
                                        4.0, 5.0, 6.0,
                                        7.0, 8.0, 9.0);
    _matrix3String(args, mat, "[ 1.000,  2.000,  3.000,",
                              "  4.000,  5.000,  6.000,",
                              "  7.000,  8.000,  9.000]");
    _transVecMatrix3(args, mat,   0.0,  0.0,  0.0,    0.0,  0.0,  0.0);
    _transVecMatrix3(args, mat,   1.0,  0.0,  0.0,    1.0,  4.0,  7.0);
    _transVecMatrix3(args, mat,   0.0,  1.0,  0.0,    2.0,  5.0,  8.0);
    _transVecMatrix3(args, mat,   0.0,  0.0,  1.0,    3.0,  6.0,  9.0);
    _transVecMatrix3(args, mat,   1.0,  1.0,  0.0,    3.0,  9.0, 15.0);
    _transVecMatrix3(args, mat,   1.0,  0.0,  1.0,    4.0, 10.0, 16.0);
    _transVecMatrix3(args, mat,   0.0,  1.0,  1.0,    5.0, 11.0, 17.0);
    _transVecMatrix3(args, mat,   1.0,  1.0,  1.0,    6.0, 15.0, 24.0);
  });

  tests.add("Matrix3 Identity Test", (TestArgs args) {
    Math.Matrix3 mat = new Math.Matrix3.identity();
    _matrix3String(args, mat, "[ 1.000,  0.000,  0.000,",
                              "  0.000,  1.000,  0.000,",
                              "  0.000,  0.000,  1.000]");
    _transMatrix3(args, mat,   0.0,  0.0,  0.0,    0.0,  0.0,  0.0);
    _transMatrix3(args, mat,   1.0,  0.0,  0.0,    1.0,  0.0,  0.0);
    _transMatrix3(args, mat,   0.0,  1.0,  0.0,    0.0,  1.0,  0.0);
    _transMatrix3(args, mat,   0.0,  0.0,  1.0,    0.0,  0.0,  1.0);
    _transMatrix3(args, mat,   1.0,  0.0,  1.0,    1.0,  0.0,  1.0);
    _transMatrix3(args, mat,  -1.0,  0.0,  1.0,   -1.0,  0.0,  1.0);
    _transMatrix3(args, mat,   1.0,  1.0,  1.0,    1.0,  1.0,  1.0);
    _transMatrix3(args, mat,  -1.0, -1.0, -1.0,   -1.0, -1.0, -1.0);
    _transMatrix3(args, mat,   0.0,  1.0,  1.0,    0.0,  1.0,  1.0);
    _transMatrix3(args, mat,   0.0, -1.0, -1.0,    0.0, -1.0, -1.0);
    _transMatrix3(args, mat,   2.3, -4.2, -0.2,    2.3, -4.2, -0.2);
    _transMatrix3(args, mat,  -1.5,  7.3,  4.8,   -1.5,  7.3,  4.8);
  });

  tests.add("Matrix3 Scalar Test", (TestArgs args) {
    Math.Matrix3 mat = new Math.Matrix3.scale(2.0, 3.0, 4.0);
    _matrix3String(args, mat, "[ 2.000,  0.000,  0.000,",
                              "  0.000,  3.000,  0.000,",
                              "  0.000,  0.000,  4.000]");
    _transMatrix3(args, mat,   0.0,  0.0,  0.0,    0.0,   0.0,  0.0);
    _transMatrix3(args, mat,   1.0,  1.0,  1.0,    2.0,   3.0,  4.0);
    _transMatrix3(args, mat,  -1.0, -1.0, -1.0,   -2.0,  -3.0, -4.0);
    _transMatrix3(args, mat,   2.3, -4.2, -0.2,    4.6, -12.6, -0.8);
    _transMatrix3(args, mat,  -1.5,  7.3,  4.8,   -3.0,  21.9, 19.2);
  });

  tests.add("Matrix3 Basic Rotate X Test", (TestArgs args) {
    Math.Matrix3 mat = new Math.Matrix3.rotateX(math.PI/4.0);
    _matrix3String(args, mat, "[ 1.000,  0.000,  0.000,",
                              "  0.000,  0.707, -0.707,",
                              "  0.000,  0.707,  0.707]");
    double val = 0.70710678118; // sqrt(2)/2
    _transMatrix3(args, mat,   1.0,  0.0,  0.0,    1.0,  0.0,  0.0);
    _transMatrix3(args, mat,   2.0,  1.0,  0.0,    2.0,  val,  val);
    _transMatrix3(args, mat,   3.0,  val,  val,    3.0,  0.0,  1.0);
    _transMatrix3(args, mat,   4.0,  0.0,  1.0,    4.0, -val,  val);
    _transMatrix3(args, mat,   5.0, -val,  val,    5.0, -1.0,  0.0);
    _transMatrix3(args, mat,   6.0, -1.0,  0.0,    6.0, -val, -val);
    _transMatrix3(args, mat,   7.0, -val, -val,    7.0,  0.0, -1.0);
    _transMatrix3(args, mat,   8.0,  0.0, -1.0,    8.0,  val, -val);
    _transMatrix3(args, mat,   9.0,  val, -val,    9.0,  1.0,  0.0);
  });

  tests.add("Matrix3 Rotate X Test", (TestArgs args) {
    _matrix3String(args, new Math.Matrix3.rotateX(-math.PI/4.0),
      "[ 1.000,  0.000,  0.000,",
      "  0.000,  0.707,  0.707,",
      "  0.000, -0.707,  0.707]");
    _matrix3String(args, new Math.Matrix3.rotateX(math.PI/2.0),
      "[ 1.000,  0.000,  0.000,",
      "  0.000,  0.000, -1.000,",
      "  0.000,  1.000,  0.000]");
    _matrix3String(args, new Math.Matrix3.rotateX(-math.PI),
      "[ 1.000,  0.000,  0.000,",
      "  0.000, -1.000,  0.000,",
      "  0.000,  0.000, -1.000]");
    _matrix3String(args, new Math.Matrix3.rotateX(math.PI),
      "[ 1.000,  0.000,  0.000,",
      "  0.000, -1.000,  0.000,",
      "  0.000,  0.000, -1.000]");
    _matrix3String(args, new Math.Matrix3.rotateX(math.PI*3.0/8.0),
      "[ 1.000,  0.000,  0.000,",
      "  0.000,  0.383, -0.924,",
      "  0.000,  0.924,  0.383]");
  });

  tests.add("Matrix3 Basic Rotate Y Test", (TestArgs args) {
    Math.Matrix3 mat = new Math.Matrix3.rotateY(math.PI/4.0);
    _matrix3String(args, mat, "[ 0.707,  0.000, -0.707,",
                              "  0.000,  1.000,  0.000,",
                              "  0.707,  0.000,  0.707]");
    double val = 0.70710678118; // sqrt(2)/2
    _transMatrix3(args, mat,   0.0,  1.0,  0.0,    0.0,  1.0,  0.0);
    _transMatrix3(args, mat,   1.0,  2.0,  0.0,    val,  2.0,  val);
    _transMatrix3(args, mat,   val,  3.0,  val,    0.0,  3.0,  1.0);
    _transMatrix3(args, mat,   0.0,  4.0,  1.0,   -val,  4.0,  val);
    _transMatrix3(args, mat,  -val,  5.0,  val,   -1.0,  5.0,  0.0);
    _transMatrix3(args, mat,  -1.0,  6.0,  0.0,   -val,  6.0, -val);
    _transMatrix3(args, mat,  -val,  7.0, -val,    0.0,  7.0, -1.0);
    _transMatrix3(args, mat,   0.0,  8.0, -1.0,    val,  8.0, -val);
    _transMatrix3(args, mat,   val,  9.0, -val,    1.0,  9.0,  0.0);
  });

  tests.add("Matrix3 Rotate Y Test", (TestArgs args) {
    _matrix3String(args, new Math.Matrix3.rotateY(-math.PI/4.0),
      "[ 0.707,  0.000,  0.707,",
      "  0.000,  1.000,  0.000,",
      " -0.707,  0.000,  0.707]");
    _matrix3String(args, new Math.Matrix3.rotateY(math.PI/2.0),
      "[ 0.000,  0.000, -1.000,",
      "  0.000,  1.000,  0.000,",
      "  1.000,  0.000,  0.000]");
    _matrix3String(args, new Math.Matrix3.rotateY(-math.PI),
      "[-1.000,  0.000,  0.000,",
      "  0.000,  1.000,  0.000,",
      "  0.000,  0.000, -1.000]");
    _matrix3String(args, new Math.Matrix3.rotateY(math.PI),
      "[-1.000,  0.000,  0.000,",
      "  0.000,  1.000,  0.000,",
      "  0.000,  0.000, -1.000]");
    _matrix3String(args, new Math.Matrix3.rotateY(math.PI*3.0/8.0),
      "[ 0.383,  0.000, -0.924,",
      "  0.000,  1.000,  0.000,",
      "  0.924,  0.000,  0.383]");
  });

  tests.add("Matrix3 Basic Rotate Z Test", (TestArgs args) {
    Math.Matrix3 mat = new Math.Matrix3.rotateZ(math.PI/4.0);
    _matrix3String(args, mat, "[ 0.707, -0.707,  0.000,",
                              "  0.707,  0.707,  0.000,",
                              "  0.000,  0.000,  1.000]");
    double val = 0.70710678118; // sqrt(2)/2
    _transMatrix3(args, mat,   0.0,  0.0,  1.0,    0.0,  0.0,  1.0);
    _transMatrix3(args, mat,   1.0,  0.0,  2.0,    val,  val,  2.0);
    _transMatrix3(args, mat,   val,  val,  3.0,    0.0,  1.0,  3.0);
    _transMatrix3(args, mat,   0.0,  1.0,  4.0,   -val,  val,  4.0);
    _transMatrix3(args, mat,  -val,  val,  5.0,   -1.0,  0.0,  5.0);
    _transMatrix3(args, mat,  -1.0,  0.0,  6.0,   -val, -val,  6.0);
    _transMatrix3(args, mat,  -val, -val,  7.0,    0.0, -1.0,  7.0);
    _transMatrix3(args, mat,   0.0, -1.0,  8.0,    val, -val,  8.0);
    _transMatrix3(args, mat,   val, -val,  9.0,    1.0,  0.0,  9.0);
  });

  tests.add("Matrix3 Rotate Z Test", (TestArgs args) {
    _matrix3String(args, new Math.Matrix3.rotateZ(-math.PI/4.0),
      "[ 0.707,  0.707,  0.000,",
      " -0.707,  0.707,  0.000,",
      "  0.000,  0.000,  1.000]");
    _matrix3String(args, new Math.Matrix3.rotateZ(math.PI/2.0),
      "[ 0.000, -1.000,  0.000,",
      "  1.000,  0.000,  0.000,",
      "  0.000,  0.000,  1.000]");
    _matrix3String(args, new Math.Matrix3.rotateZ(-math.PI),
      "[-1.000,  0.000,  0.000,",
      "  0.000, -1.000,  0.000,",
      "  0.000,  0.000,  1.000]");
    _matrix3String(args, new Math.Matrix3.rotateZ(math.PI),
      "[-1.000,  0.000,  0.000,",
      "  0.000, -1.000,  0.000,",
      "  0.000,  0.000,  1.000]");
    _matrix3String(args, new Math.Matrix3.rotateZ(math.PI*3.0/8.0),
      "[ 0.383, -0.924,  0.000,",
      "  0.924,  0.383,  0.000,",
      "  0.000,  0.000,  1.000]");
  });

  tests.add("Matrix3 Miscellaneous Test", (TestArgs args) {
    Math.Matrix3 mat = new Math.Matrix3(1.0, 2.0, 3.0,
                                        4.0, 5.0, 6.0,
                                        7.0, 8.0, 9.0);
    _matrix3String(args, mat,
      "[ 1.000,  2.000,  3.000,",
      "  4.000,  5.000,  6.000,",
      "  7.000,  8.000,  9.000]");
    _matrix3String(args, new Math.Matrix3.fromList(mat.toList()),
      "[ 1.000,  2.000,  3.000,",
      "  4.000,  5.000,  6.000,",
      "  7.000,  8.000,  9.000]");
    _matrix3String(args, mat.copy(),
      "[ 1.000,  2.000,  3.000,",
      "  4.000,  5.000,  6.000,",
      "  7.000,  8.000,  9.000]");
    _matrix3String(args, mat.transpose(),
      "[ 1.000,  4.000,  7.000,",
      "  2.000,  5.000,  8.000,",
      "  3.000,  6.000,  9.000]");
    mat.set(11.0, 12.0, 13.0,
            14.0, 15.0, 16.0,
            17.0, 18.0, 19.0);
    _matrix3String(args, mat,
      "[ 11.000,  12.000,  13.000,",
      "  14.000,  15.000,  16.000,",
      "  17.000,  18.000,  19.000]");
    mat.m11 = 21.0; mat.m21 = 22.0; mat.m31 = 23.0;
    mat.m12 = 24.0; mat.m22 = 25.0; mat.m32 = 26.0;
    mat.m13 = 27.0; mat.m23 = 28.0; mat.m33 = 29.0;
    _matrix3String(args, mat,
      "[ 21.000,  22.000,  23.000,",
      "  24.000,  25.000,  26.000,",
      "  27.000,  28.000,  29.000]");
  });

  tests.add("Matrix3 Inverse Test", (TestArgs args) {
    _invsMatrix3(args, new Math.Matrix3.identity(),
      "[ 1.000,  0.000,  0.000,",
      "  0.000,  1.000,  0.000,",
      "  0.000,  0.000,  1.000]");
    _invsMatrix3(args, new Math.Matrix3.scale(2.0, 3.0, 4.0),
      "[ 0.500,  0.000,  0.000,",
      "  0.000,  0.333,  0.000,",
      "  0.000,  0.000,  0.250]");
    _invsMatrix3(args, new Math.Matrix3.rotateX(math.PI/4.0),
      "[ 1.000,  0.000,  0.000,",
      "  0.000,  0.707, -0.707,",
      "  0.000,  0.707,  0.707]");
    _invsMatrix3(args, new Math.Matrix3.rotateY(math.PI/4.0),
      "[ 0.707,  0.000, -0.707,",
      "  0.000,  1.000,  0.000,",
      "  0.707,  0.000,  0.707]");
    _invsMatrix3(args, new Math.Matrix3.rotateZ(math.PI/4.0),
      "[ 0.707, -0.707,  0.000,",
      "  0.707,  0.707,  0.000,",
      "  0.000,  0.000,  1.000]");
    _matrix3String(args, new Math.Matrix3(0.0, 0.0, 0.0,
                                          0.0, 0.0, 0.0,
                                          0.0, 0.0, 0.0).inverse(),
      "[ 1.000,  0.000,  0.000,",
      "  0.000,  1.000,  0.000,",
      "  0.000,  0.000,  1.000]");
  });

  tests.add("Matrix3 Multiplication Test", (TestArgs args) {
    // [1.0, 2.0, 3.0, * [0.1, 0.2, 0.3, = [0.1+0.8+2.1, 0.2+1.0+2.4, 0.3+1.2+2.7, = [ 3.0,  3.6,  4.2,
    //  4.0, 5.0, 6.0,    0.4, 0.5, 0.6,    0.4+2.0+4.2, 0.8+2.5+4.8, 1.2+3.0+5.4,     6.6,  8.1,  9.6,
    //  7.0, 8.0, 9.0]    0.7, 0.8, 0.9]    0.7+3.2+6.3, 1.4+4.0+7.2, 2.1+4.8+8.1]    10.2, 12.6, 15.0]
    _matrix3String(args,
      new Math.Matrix3(1.0, 2.0, 3.0,
                       4.0, 5.0, 6.0,
                       7.0, 8.0, 9.0)*
      new Math.Matrix3(0.1, 0.2, 0.3,
                       0.4, 0.5, 0.6,
                       0.7, 0.8, 0.9),
      "[ 3.000,  3.600,  4.200,",
      "  6.600,  8.100,  9.600,",
      "  10.200,  12.600,  15.000]");
    _matrix3String(args,
      new Math.Matrix3(0.1, 0.2, 0.3,
                       0.4, 0.5, 0.6,
                       0.7, 0.8, 0.9)*
      new Math.Matrix3(1.0, 2.0, 3.0,
                       4.0, 5.0, 6.0,
                       7.0, 8.0, 9.0),
      "[ 3.000,  3.600,  4.200,",
      "  6.600,  8.100,  9.600,",
      "  10.200,  12.600,  15.000]");
  });

  // TODO: Add vec2 and pnt2 teans unit-tests.

}

void _matrix3String(TestArgs args, Math.Matrix3 mat, String exp1, String exp2, String exp3) {
  String exp = exp1+"\n             "+exp2+"\n             "+exp3;
  String result = mat.toString("             ");
  if (result != exp) {
    args.error("Unexpected result from Matrix3: "+
      "\n   Expected: $exp"+
      "\n   Gotten:   $result\n");
    args.fail();
  } else args.info("$mat\n\n");
}

void _invsMatrix3(TestArgs args, Math.Matrix3 mat, String exp1, String exp2, String exp3) {
  Math.Matrix3 inv = mat.inverse();
  _matrix3String(args, inv, exp1, exp2, exp3);
  Math.Matrix3 result = inv.inverse();
  if (result != mat) {
    args.error("Unexpected result from Matrix3.inverse().inverse(): "+
      "\n   Expected: " + mat.toString("             ") +
      "\n   Gotten:   " + result.toString("             ") + "\n");
    args.fail();
  }
}

void _transMatrix3(TestArgs args, Math.Matrix3 mat, double pntX, double pntY, double pntZ, double expX, double expY, double expZ) {
  Math.Point3 pnt = new Math.Point3(pntX, pntY, pntZ);
  Math.Point3 exp = new Math.Point3(expX, expY, expZ);
  Math.Point3 result = mat.transPnt3(pnt);
  if (result != exp) {
    args.error("Unexpected result from Matrix3.transPnt3: "+
      "\n   Expected: $exp"+
      "\n   Gotten:   $result\n");
    args.fail();
  } else args.info("$pnt => $exp\n");
}

void _transVecMatrix3(TestArgs args, Math.Matrix3 mat, double pntX, double pntY, double pntZ, double expX, double expY, double expZ) {
  Math.Vector3 pnt = new Math.Vector3(pntX, pntY, pntZ);
  Math.Vector3 exp = new Math.Vector3(expX, expY, expZ);
  Math.Vector3 result = mat.transVec3(pnt);
  if (result != exp) {
    args.error("Unexpected result from Matrix3.transVec3: "+
      "\n   Expected: $exp"+
      "\n   Gotten:   $result\n");
    args.fail();
  } else args.info("$pnt => $exp\n");
}
