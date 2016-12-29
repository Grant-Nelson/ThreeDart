part of ThreeDart.test.test000;

void addMatrix4Tests(TestManager tests) {

  tests.add("Matrix4 Point Transposition Test", (TestArgs args) {
    Math.Matrix4 mat = new Math.Matrix4( 1.0,  2.0,  3.0,  4.0,
                                         5.0,  6.0,  7.0,  8.0,
                                         9.0, 10.0, 11.0, 12.0,
                                        13.0, 14.0, 15.0, 16.0);
    _matrix4String(args, mat, "[ 1.000,  2.000,  3.000,  4.000,",
                              "  5.000,  6.000,  7.000,  8.000,",
                              "  9.000, 10.000, 11.000, 12.000,",
                              " 13.000, 14.000, 15.000, 16.000]");

    _transPnt4Matrix4(args, mat,   0.0,  0.0,  0.0,  0.0,    0.0,  0.0,  0.0,  0.0);
    _transPnt4Matrix4(args, mat,   1.0,  0.0,  0.0,  0.0,    1.0,  5.0,  9.0, 13.0);
    _transPnt4Matrix4(args, mat,   0.0,  1.0,  0.0,  0.0,    2.0,  6.0, 10.0, 14.0);
    _transPnt4Matrix4(args, mat,   1.0,  1.0,  0.0,  0.0,    3.0, 11.0, 19.0, 27.0);

    _transPnt4Matrix4(args, mat,   0.0,  0.0,  1.0,  0.0,    3.0,  7.0, 11.0, 15.0);
    _transPnt4Matrix4(args, mat,   1.0,  0.0,  1.0,  0.0,    4.0, 12.0, 20.0, 28.0);
    _transPnt4Matrix4(args, mat,   0.0,  1.0,  1.0,  0.0,    5.0, 13.0, 21.0, 29.0);
    _transPnt4Matrix4(args, mat,   1.0,  1.0,  1.0,  0.0,    6.0, 18.0, 30.0, 42.0);

    _transPnt4Matrix4(args, mat,   0.0,  0.0,  0.0,  1.0,    4.0,  8.0, 12.0, 16.0);
    _transPnt4Matrix4(args, mat,   1.0,  0.0,  0.0,  1.0,    5.0, 13.0, 21.0, 29.0);
    _transPnt4Matrix4(args, mat,   0.0,  1.0,  0.0,  1.0,    6.0, 14.0, 22.0, 30.0);
    _transPnt4Matrix4(args, mat,   1.0,  1.0,  0.0,  1.0,    7.0, 19.0, 31.0, 43.0);

    _transPnt4Matrix4(args, mat,   0.0,  0.0,  1.0,  1.0,    7.0, 15.0, 23.0, 31.0);
    _transPnt4Matrix4(args, mat,   1.0,  0.0,  1.0,  1.0,    8.0, 20.0, 32.0, 44.0);
    _transPnt4Matrix4(args, mat,   0.0,  1.0,  1.0,  1.0,    9.0, 21.0, 33.0, 45.0);
    _transPnt4Matrix4(args, mat,   1.0,  1.0,  1.0,  1.0,   10.0, 26.0, 42.0, 58.0);
  });

  tests.add("Matrix4 Vector Transposition Test", (TestArgs args) {
    Math.Matrix4 mat = new Math.Matrix4( 1.0,  2.0,  3.0,  4.0,
                                         5.0,  6.0,  7.0,  8.0,
                                         9.0, 10.0, 11.0, 12.0,
                                        13.0, 14.0, 15.0, 16.0);
    _matrix4String(args, mat, "[ 1.000,  2.000,  3.000,  4.000,",
                              "  5.000,  6.000,  7.000,  8.000,",
                              "  9.000, 10.000, 11.000, 12.000,",
                              " 13.000, 14.000, 15.000, 16.000]");

    _transVec4Matrix4(args, mat,   0.0,  0.0,  0.0,  0.0,    0.0,  0.0,  0.0,  0.0);
    _transVec4Matrix4(args, mat,   1.0,  0.0,  0.0,  0.0,    1.0,  5.0,  9.0, 13.0);
    _transVec4Matrix4(args, mat,   0.0,  1.0,  0.0,  0.0,    2.0,  6.0, 10.0, 14.0);
    _transVec4Matrix4(args, mat,   1.0,  1.0,  0.0,  0.0,    3.0, 11.0, 19.0, 27.0);

    _transVec4Matrix4(args, mat,   0.0,  0.0,  1.0,  0.0,    3.0,  7.0, 11.0, 15.0);
    _transVec4Matrix4(args, mat,   1.0,  0.0,  1.0,  0.0,    4.0, 12.0, 20.0, 28.0);
    _transVec4Matrix4(args, mat,   0.0,  1.0,  1.0,  0.0,    5.0, 13.0, 21.0, 29.0);
    _transVec4Matrix4(args, mat,   1.0,  1.0,  1.0,  0.0,    6.0, 18.0, 30.0, 42.0);

    _transVec4Matrix4(args, mat,   0.0,  0.0,  0.0,  1.0,    4.0,  8.0, 12.0, 16.0);
    _transVec4Matrix4(args, mat,   1.0,  0.0,  0.0,  1.0,    5.0, 13.0, 21.0, 29.0);
    _transVec4Matrix4(args, mat,   0.0,  1.0,  0.0,  1.0,    6.0, 14.0, 22.0, 30.0);
    _transVec4Matrix4(args, mat,   1.0,  1.0,  0.0,  1.0,    7.0, 19.0, 31.0, 43.0);

    _transVec4Matrix4(args, mat,   0.0,  0.0,  1.0,  1.0,    7.0, 15.0, 23.0, 31.0);
    _transVec4Matrix4(args, mat,   1.0,  0.0,  1.0,  1.0,    8.0, 20.0, 32.0, 44.0);
    _transVec4Matrix4(args, mat,   0.0,  1.0,  1.0,  1.0,    9.0, 21.0, 33.0, 45.0);
    _transVec4Matrix4(args, mat,   1.0,  1.0,  1.0,  1.0,   10.0, 26.0, 42.0, 58.0);
  });

  tests.add("Matrix4 Identity Test", (TestArgs args) {
    Math.Matrix4 mat = new Math.Matrix4.identity();
    _matrix4String(args, mat, "[1.000, 0.000, 0.000, 0.000,",
                              " 0.000, 1.000, 0.000, 0.000,",
                              " 0.000, 0.000, 1.000, 0.000,",
                              " 0.000, 0.000, 0.000, 1.000]");

    _transPnt4Matrix4(args, mat,   0.0,  0.0,  0.0,  0.0,    0.0,  0.0,  0.0,  0.0);
    _transPnt4Matrix4(args, mat,   1.0,  0.0,  0.0,  0.0,    1.0,  0.0,  0.0,  0.0);
    _transPnt4Matrix4(args, mat,   0.0,  1.0,  0.0,  0.0,    0.0,  1.0,  0.0,  0.0);
    _transPnt4Matrix4(args, mat,   0.0,  0.0,  1.0,  0.0,    0.0,  0.0,  1.0,  0.0);
    _transPnt4Matrix4(args, mat,   1.0,  0.0,  1.0,  0.0,    1.0,  0.0,  1.0,  0.0);
    _transPnt4Matrix4(args, mat,   0.0,  1.0,  0.0,  1.0,    0.0,  1.0,  0.0,  1.0);
    _transPnt4Matrix4(args, mat,   1.0,  1.0,  1.0,  1.0,    1.0,  1.0,  1.0,  1.0);
    _transPnt4Matrix4(args, mat,  -1.0,  0.0,  1.0,  0.0,   -1.0,  0.0,  1.0,  0.0);
    _transPnt4Matrix4(args, mat,   1.0,  1.0,  1.0,  0.0,    1.0,  1.0,  1.0,  0.0);
    _transPnt4Matrix4(args, mat,  -1.0, -1.0, -1.0, -1.0,   -1.0, -1.0, -1.0, -1.0);
    _transPnt4Matrix4(args, mat,   2.3, -4.2, -0.2,  3.3,    2.3, -4.2, -0.2,  3.3);
    _transPnt4Matrix4(args, mat,  -1.5,  7.3,  4.8, -9.1,   -1.5,  7.3,  4.8, -9.1);
  });

  tests.add("Matrix4 Scalar Test", (TestArgs args) {
    Math.Matrix4 mat = new Math.Matrix4.scale(2.0, 3.0, 4.0, 5.0);
    _matrix4String(args, mat, "[2.000, 0.000, 0.000, 0.000,",
                              " 0.000, 3.000, 0.000, 0.000,",
                              " 0.000, 0.000, 4.000, 0.000,",
                              " 0.000, 0.000, 0.000, 5.000]");
    _transPnt4Matrix4(args, mat,   0.0,  0.0,  0.0,  0.0,    0.0,   0.0,  0.0,   0.0);
    _transPnt4Matrix4(args, mat,   1.0,  1.0,  1.0,  1.0,    2.0,   3.0,  4.0,   5.0);
    _transPnt4Matrix4(args, mat,  -1.0, -1.0, -1.0, -1.0,   -2.0,  -3.0, -4.0,  -5.0);
    _transPnt4Matrix4(args, mat,   2.3, -4.2, -0.2,  3.3,    4.6, -12.6, -0.8,  16.5);
    _transPnt4Matrix4(args, mat,  -1.5,  7.3,  4.8, -9.1,   -3.0,  21.9, 19.2, -45.5);
  });

  tests.add("Matrix4 Basic Rotate X Test", (TestArgs args) {
    Math.Matrix4 mat = new Math.Matrix4.rotateX(math.PI/4.0);
    _matrix4String(args, mat, "[1.000, 0.000,  0.000, 0.000,",
                              " 0.000, 0.707, -0.707, 0.000,",
                              " 0.000, 0.707,  0.707, 0.000,",
                              " 0.000, 0.000,  0.000, 1.000]");
    double val = 0.70710678118; // sqrt(2)/2
    _transPnt4Matrix4(args, mat,   1.0,  0.0,  0.0,  9.0,    1.0,  0.0,  0.0,  9.0);
    _transPnt4Matrix4(args, mat,   2.0,  1.0,  0.0,  8.0,    2.0,  val,  val,  8.0);
    _transPnt4Matrix4(args, mat,   3.0,  val,  val,  7.0,    3.0,  0.0,  1.0,  7.0);
    _transPnt4Matrix4(args, mat,   4.0,  0.0,  1.0,  6.0,    4.0, -val,  val,  6.0);
    _transPnt4Matrix4(args, mat,   5.0, -val,  val,  5.0,    5.0, -1.0,  0.0,  5.0);
    _transPnt4Matrix4(args, mat,   6.0, -1.0,  0.0,  4.0,    6.0, -val, -val,  4.0);
    _transPnt4Matrix4(args, mat,   7.0, -val, -val,  3.0,    7.0,  0.0, -1.0,  3.0);
    _transPnt4Matrix4(args, mat,   8.0,  0.0, -1.0,  2.0,    8.0,  val, -val,  2.0);
    _transPnt4Matrix4(args, mat,   9.0,  val, -val,  1.0,    9.0,  1.0,  0.0,  1.0);
  });

  tests.add("Matrix4 Rotate X Test", (TestArgs args) {
    _matrix4String(args, new Math.Matrix4.rotateX(-math.PI/4.0),
      "[1.000,  0.000, 0.000, 0.000,",
      " 0.000,  0.707, 0.707, 0.000,",
      " 0.000, -0.707, 0.707, 0.000,",
      " 0.000,  0.000, 0.000, 1.000]");
    _matrix4String(args, new Math.Matrix4.rotateX(math.PI/2.0),
      "[1.000, 0.000,  0.000, 0.000,",
      " 0.000, 0.000, -1.000, 0.000,",
      " 0.000, 1.000,  0.000, 0.000,",
      " 0.000, 0.000,  0.000, 1.000]");
    _matrix4String(args, new Math.Matrix4.rotateX(-math.PI),
      "[1.000,  0.000,  0.000, 0.000,",
      " 0.000, -1.000,  0.000, 0.000,",
      " 0.000,  0.000, -1.000, 0.000,",
      " 0.000,  0.000,  0.000, 1.000]");
    _matrix4String(args, new Math.Matrix4.rotateX(math.PI),
      "[1.000,  0.000,  0.000, 0.000,",
      " 0.000, -1.000,  0.000, 0.000,",
      " 0.000,  0.000, -1.000, 0.000,",
      " 0.000,  0.000,  0.000, 1.000]");
    _matrix4String(args, new Math.Matrix4.rotateX(math.PI*3.0/8.0),
      "[1.000, 0.000,  0.000, 0.000,",
      " 0.000, 0.383, -0.924, 0.000,",
      " 0.000, 0.924,  0.383, 0.000,",
      " 0.000, 0.000,  0.000, 1.000]");
  });

  tests.add("Matrix4 Basic Rotate Y Test", (TestArgs args) {
    Math.Matrix4 mat = new Math.Matrix4.rotateY(math.PI/4.0);
    _matrix4String(args, mat, "[0.707, 0.000, -0.707, 0.000,",
                              " 0.000, 1.000,  0.000, 0.000,",
                              " 0.707, 0.000,  0.707, 0.000,",
                              " 0.000, 0.000,  0.000, 1.000]");
    double val = 0.70710678118; // sqrt(2)/2
    _transPnt4Matrix4(args, mat,   0.0,  1.0,  0.0,  9.0,    0.0,  1.0,  0.0,  9.0);
    _transPnt4Matrix4(args, mat,   1.0,  2.0,  0.0,  8.0,    val,  2.0,  val,  8.0);
    _transPnt4Matrix4(args, mat,   val,  3.0,  val,  7.0,    0.0,  3.0,  1.0,  7.0);
    _transPnt4Matrix4(args, mat,   0.0,  4.0,  1.0,  6.0,   -val,  4.0,  val,  6.0);
    _transPnt4Matrix4(args, mat,  -val,  5.0,  val,  5.0,   -1.0,  5.0,  0.0,  5.0);
    _transPnt4Matrix4(args, mat,  -1.0,  6.0,  0.0,  4.0,   -val,  6.0, -val,  4.0);
    _transPnt4Matrix4(args, mat,  -val,  7.0, -val,  3.0,    0.0,  7.0, -1.0,  3.0);
    _transPnt4Matrix4(args, mat,   0.0,  8.0, -1.0,  2.0,    val,  8.0, -val,  2.0);
    _transPnt4Matrix4(args, mat,   val,  9.0, -val,  1.0,    1.0,  9.0,  0.0,  1.0);
  });

  tests.add("Matrix4 Rotate Y Test", (TestArgs args) {
    _matrix4String(args, new Math.Matrix4.rotateY(-math.PI/4.0),
      "[ 0.707, 0.000, 0.707, 0.000,",
      "  0.000, 1.000, 0.000, 0.000,",
      " -0.707, 0.000, 0.707, 0.000,",
      "  0.000, 0.000, 0.000, 1.000]");
    _matrix4String(args, new Math.Matrix4.rotateY(math.PI/2.0),
      "[0.000, 0.000, -1.000, 0.000,",
      " 0.000, 1.000,  0.000, 0.000,",
      " 1.000, 0.000,  0.000, 0.000,",
      " 0.000, 0.000,  0.000, 1.000]");
    _matrix4String(args, new Math.Matrix4.rotateY(-math.PI),
      "[-1.000, 0.000,  0.000, 0.000,",
      "  0.000, 1.000,  0.000, 0.000,",
      "  0.000, 0.000, -1.000, 0.000,",
      "  0.000, 0.000,  0.000, 1.000]");
    _matrix4String(args, new Math.Matrix4.rotateY(math.PI),
      "[-1.000, 0.000,  0.000, 0.000,",
      "  0.000, 1.000,  0.000, 0.000,",
      "  0.000, 0.000, -1.000, 0.000,",
      "  0.000, 0.000,  0.000, 1.000]");
    _matrix4String(args, new Math.Matrix4.rotateY(math.PI*3.0/8.0),
      "[0.383, 0.000, -0.924, 0.000,",
      " 0.000, 1.000,  0.000, 0.000,",
      " 0.924, 0.000,  0.383, 0.000,",
      " 0.000, 0.000,  0.000, 1.000]");
  });

  tests.add("Matrix4 Basic Rotate Z Test", (TestArgs args) {
    Math.Matrix4 mat = new Math.Matrix4.rotateZ(math.PI/4.0);
    _matrix4String(args, mat, "[0.707, -0.707, 0.000, 0.000,",
                              " 0.707,  0.707, 0.000, 0.000,",
                              " 0.000,  0.000, 1.000, 0.000,",
                              " 0.000,  0.000, 0.000, 1.000]");
    double val = 0.70710678118; // sqrt(2)/2
    _transPnt4Matrix4(args, mat,   0.0,  0.0,  1.0,  9.0,    0.0,  0.0,  1.0,  9.0);
    _transPnt4Matrix4(args, mat,   1.0,  0.0,  2.0,  8.0,    val,  val,  2.0,  8.0);
    _transPnt4Matrix4(args, mat,   val,  val,  3.0,  7.0,    0.0,  1.0,  3.0,  7.0);
    _transPnt4Matrix4(args, mat,   0.0,  1.0,  4.0,  6.0,   -val,  val,  4.0,  6.0);
    _transPnt4Matrix4(args, mat,  -val,  val,  5.0,  5.0,   -1.0,  0.0,  5.0,  5.0);
    _transPnt4Matrix4(args, mat,  -1.0,  0.0,  6.0,  4.0,   -val, -val,  6.0,  4.0);
    _transPnt4Matrix4(args, mat,  -val, -val,  7.0,  3.0,    0.0, -1.0,  7.0,  3.0);
    _transPnt4Matrix4(args, mat,   0.0, -1.0,  8.0,  2.0,    val, -val,  8.0,  2.0);
    _transPnt4Matrix4(args, mat,   val, -val,  9.0,  1.0,    1.0,  0.0,  9.0,  1.0);
  });

  tests.add("Matrix4 Rotate Z Test", (TestArgs args) {
    _matrix4String(args, new Math.Matrix4.rotateZ(-math.PI/4.0),
      "[ 0.707, 0.707, 0.000, 0.000,",
      " -0.707, 0.707, 0.000, 0.000,",
      "  0.000, 0.000, 1.000, 0.000,",
      "  0.000, 0.000, 0.000, 1.000]");
    _matrix4String(args, new Math.Matrix4.rotateZ(math.PI/2.0),
      "[0.000, -1.000, 0.000, 0.000,",
      " 1.000,  0.000, 0.000, 0.000,",
      " 0.000,  0.000, 1.000, 0.000,",
      " 0.000,  0.000, 0.000, 1.000]");
    _matrix4String(args, new Math.Matrix4.rotateZ(-math.PI),
      "[-1.000,  0.000, 0.000, 0.000,",
      "  0.000, -1.000, 0.000, 0.000,",
      "  0.000,  0.000, 1.000, 0.000,",
      "  0.000,  0.000, 0.000, 1.000]");
    _matrix4String(args, new Math.Matrix4.rotateZ(math.PI),
      "[-1.000,  0.000, 0.000, 0.000,",
      "  0.000, -1.000, 0.000, 0.000,",
      "  0.000,  0.000, 1.000, 0.000,",
      "  0.000,  0.000, 0.000, 1.000]");
    _matrix4String(args, new Math.Matrix4.rotateZ(math.PI*3.0/8.0),
      "[0.383, -0.924, 0.000, 0.000,",
      " 0.924,  0.383, 0.000, 0.000,",
      " 0.000,  0.000, 1.000, 0.000,",
      " 0.000,  0.000, 0.000, 1.000]");
  });

  tests.add("Matrix4 Miscellaneous Test", (TestArgs args) {
    Math.Matrix4 mat = new Math.Matrix4( 1.0,  2.0,  3.0,  4.0,
                                         5.0,  6.0,  7.0,  8.0,
                                         9.0, 10.0, 11.0, 12.0,
                                        13.0, 14.0, 15.0, 16.0);
    _matrix4String(args, mat,
      "[ 1.000,  2.000,  3.000,  4.000,",
      "  5.000,  6.000,  7.000,  8.000,",
      "  9.000, 10.000, 11.000, 12.000,",
      " 13.000, 14.000, 15.000, 16.000]");
    _matrix4String(args, new Math.Matrix4.fromList(mat.toList()),
      "[ 1.000,  2.000,  3.000,  4.000,",
      "  5.000,  6.000,  7.000,  8.000,",
      "  9.000, 10.000, 11.000, 12.000,",
      " 13.000, 14.000, 15.000, 16.000]");
    _matrix4String(args, mat.transpose(),
      "[1.000, 5.000,  9.000, 13.000,",
      " 2.000, 6.000, 10.000, 14.000,",
      " 3.000, 7.000, 11.000, 15.000,",
      " 4.000, 8.000, 12.000, 16.000]");
    _doubleCheck(args, mat.m11, 1.0, "m11");
    _doubleCheck(args, mat.m21, 2.0, "m21");
    _doubleCheck(args, mat.m31, 3.0, "m31");
    _doubleCheck(args, mat.m41, 4.0, "m41");
    _doubleCheck(args, mat.m12, 5.0, "m12");
    _doubleCheck(args, mat.m22, 6.0, "m22");
    _doubleCheck(args, mat.m32, 7.0, "m32");
    _doubleCheck(args, mat.m42, 8.0, "m42");
    _doubleCheck(args, mat.m13, 9.0, "m13");
    _doubleCheck(args, mat.m23, 10.0, "m23");
    _doubleCheck(args, mat.m33, 11.0, "m33");
    _doubleCheck(args, mat.m43, 12.0, "m43");
    _doubleCheck(args, mat.m14, 13.0, "m14");
    _doubleCheck(args, mat.m24, 14.0, "m24");
    _doubleCheck(args, mat.m34, 15.0, "m34");
    _doubleCheck(args, mat.m44, 16.0, "m44");
    _matrix4String(args, new Math.Matrix4.translate(1.2, 3.4, 5.6),
      "[1.000, 0.000, 0.000, 1.200,",
      " 0.000, 1.000, 0.000, 3.400,",
      " 0.000, 0.000, 1.000, 5.600,",
      " 0.000, 0.000, 0.000, 1.000]");
    _matrix4String(args, new Math.Matrix4.fromMatrix2(
      new Math.Matrix2(1.0, 2.0,
                       3.0, 4.0)),
      "[1.000, 2.000, 0.000, 0.000,",
      " 3.000, 4.000, 0.000, 0.000,",
      " 0.000, 0.000, 1.000, 0.000,",
      " 0.000, 0.000, 0.000, 1.000]");
    _matrix4String(args, new Math.Matrix4.fromMatrix3(
      new Math.Matrix3( 1.0, 2.0, 3.0,
                        4.0, 5.0, 6.0,
                        7.0, 8.0, 9.0)),
      "[1.000, 2.000, 3.000, 0.000,",
      " 4.000, 5.000, 6.000, 0.000,",
      " 7.000, 8.000, 9.000, 0.000,",
      " 0.000, 0.000, 0.000, 1.000]");
  });

  tests.add("Matrix4 Inverse Test", (TestArgs args) {
    _invsMatrix4(args, new Math.Matrix4.identity(),
      "[1.000, 0.000, 0.000, 0.000,",
      " 0.000, 1.000, 0.000, 0.000,",
      " 0.000, 0.000, 1.000, 0.000,",
      " 0.000, 0.000, 0.000, 1.000]");
    _invsMatrix4(args, new Math.Matrix4.scale(2.0, 3.0, 4.0),
      "[0.500, 0.000, 0.000, 0.000,",
      " 0.000, 0.333, 0.000, 0.000,",
      " 0.000, 0.000, 0.250, 0.000,",
      " 0.000, 0.000, 0.000, 1.000]");
    _invsMatrix4(args, new Math.Matrix4.rotateX(math.PI/4.0),
      "[1.000,  0.000, 0.000, 0.000,",
      " 0.000,  0.707, 0.707, 0.000,",
      " 0.000, -0.707, 0.707, 0.000,",
      " 0.000,  0.000, 0.000, 1.000]");
    _invsMatrix4(args, new Math.Matrix4.rotateY(math.PI/4.0),
      "[ 0.707, 0.000, 0.707, 0.000,",
      "  0.000, 1.000, 0.000, 0.000,",
      " -0.707, 0.000, 0.707, 0.000,",
      "  0.000, 0.000, 0.000, 1.000]");
    _invsMatrix4(args, new Math.Matrix4.rotateZ(math.PI/4.0),
      "[ 0.707, 0.707, 0.000, 0.000,",
      " -0.707, 0.707, 0.000, 0.000,",
      "  0.000, 0.000, 1.000, 0.000,",
      "  0.000, 0.000, 0.000, 1.000]");
    _matrix4String(args, new Math.Matrix4(0.0, 0.0, 0.0, 0.0,
                                          0.0, 0.0, 0.0, 0.0,
                                          0.0, 0.0, 0.0, 0.0,
                                          0.0, 0.0, 0.0, 0.0).inverse(),
      "[1.000, 0.000, 0.000, 0.000,",
      " 0.000, 1.000, 0.000, 0.000,",
      " 0.000, 0.000, 1.000, 0.000,",
      " 0.000, 0.000, 0.000, 1.000]");
  });

  tests.add("Matrix4 Multiplication Test", (TestArgs args) {
    _matrix4String(args,
      new Math.Matrix4(0.1, 0.2, 0.3, 0.4,
                       0.5, 0.6, 0.7, 0.8,
                       0.9, 1.0, 1.1, 1.2,
                       1.3, 1.4, 1.5, 1.6)*
      new Math.Matrix4(1.1, 1.2, 1.3, 1.4,
                       1.5, 1.6, 1.7, 1.8,
                       1.9, 2.0, 2.1, 2.2,
                       2.3, 2.4, 2.5, 2.6),
      "[ 1.900,  2.000,  2.100,  2.200,",
      "  4.620,  4.880,  5.140,  5.400,",
      "  7.340,  7.760,  8.180,  8.600,",
      " 10.060, 10.640, 11.220, 11.800]");
    _matrix4String(args,
      new Math.Matrix4(1.1, 1.2, 1.3, 1.4,
                       1.5, 1.6, 1.7, 1.8,
                       1.9, 2.0, 2.1, 2.2,
                       2.3, 2.4, 2.5, 2.6)*
      new Math.Matrix4(0.1, 0.2, 0.3, 0.4,
                       0.5, 0.6, 0.7, 0.8,
                       0.9, 1.0, 1.1, 1.2,
                       1.3, 1.4, 1.5, 1.6),
      "[3.700, 4.200, 4.700,  5.200,",
      " 4.820, 5.480, 6.140,  6.800,",
      " 5.940, 6.760, 7.580,  8.400,",
      " 7.060, 8.040, 9.020, 10.000]");
  });

  tests.add("Matrix4 Point3 Transposition Test", (TestArgs args) {
    Math.Matrix4 mat = new Math.Matrix4( 1.0,  2.0,  3.0,  4.0,
                                         5.0,  6.0,  7.0,  8.0,
                                         9.0, 10.0, 11.0, 12.0,
                                        13.0, 14.0, 15.0, 16.0);
    _matrix4String(args, mat, "[ 1.000,  2.000,  3.000,  4.000,",
                              "  5.000,  6.000,  7.000,  8.000,",
                              "  9.000, 10.000, 11.000, 12.000,",
                              " 13.000, 14.000, 15.000, 16.000]");
    _transPnt3Matrix4(args, mat,   0.0,  0.0,  0.0,    4.0,  8.0, 12.0);
    _transPnt3Matrix4(args, mat,   1.0,  0.0,  0.0,    5.0, 13.0, 21.0);
    _transPnt3Matrix4(args, mat,   0.0,  1.0,  0.0,    6.0, 14.0, 22.0);
    _transPnt3Matrix4(args, mat,   1.0,  1.0,  0.0,    7.0, 19.0, 31.0);
    _transPnt3Matrix4(args, mat,   0.0,  0.0,  1.0,    7.0, 15.0, 23.0);
    _transPnt3Matrix4(args, mat,   1.0,  0.0,  1.0,    8.0, 20.0, 32.0);
    _transPnt3Matrix4(args, mat,   0.0,  1.0,  1.0,    9.0, 21.0, 33.0);
    _transPnt3Matrix4(args, mat,   1.0,  1.0,  1.0,   10.0, 26.0, 42.0);
  });

  tests.add("Matrix4 Vector3 Transposition Test", (TestArgs args) {
    Math.Matrix4 mat = new Math.Matrix4( 1.0,  2.0,  3.0,  4.0,
                                         5.0,  6.0,  7.0,  8.0,
                                         9.0, 10.0, 11.0, 12.0,
                                        13.0, 14.0, 15.0, 16.0);
    _matrix4String(args, mat, "[ 1.000,  2.000,  3.000,  4.000,",
                              "  5.000,  6.000,  7.000,  8.000,",
                              "  9.000, 10.000, 11.000, 12.000,",
                              " 13.000, 14.000, 15.000, 16.000]");
    _transVec3Matrix4(args, mat,   0.0,  0.0,  0.0,    0.0,  0.0,  0.0);
    _transVec3Matrix4(args, mat,   1.0,  0.0,  0.0,    1.0,  5.0,  9.0);
    _transVec3Matrix4(args, mat,   0.0,  1.0,  0.0,    2.0,  6.0, 10.0);
    _transVec3Matrix4(args, mat,   1.0,  1.0,  0.0,    3.0, 11.0, 19.0);
    _transVec3Matrix4(args, mat,   0.0,  0.0,  1.0,    3.0,  7.0, 11.0);
    _transVec3Matrix4(args, mat,   1.0,  0.0,  1.0,    4.0, 12.0, 20.0);
    _transVec3Matrix4(args, mat,   0.0,  1.0,  1.0,    5.0, 13.0, 21.0);
    _transVec3Matrix4(args, mat,   1.0,  1.0,  1.0,    6.0, 18.0, 30.0);
  });

  tests.add("Matrix4 Point2 Transposition Test", (TestArgs args) {
    Math.Matrix4 mat = new Math.Matrix4( 1.0,  2.0,  3.0,  4.0,
                                         5.0,  6.0,  7.0,  8.0,
                                         9.0, 10.0, 11.0, 12.0,
                                        13.0, 14.0, 15.0, 16.0);
    _matrix4String(args, mat, "[ 1.000,  2.000,  3.000,  4.000,",
                              "  5.000,  6.000,  7.000,  8.000,",
                              "  9.000, 10.000, 11.000, 12.000,",
                              " 13.000, 14.000, 15.000, 16.000]");
    _transPnt2Matrix4(args, mat,   0.0,  0.0,    4.0,  8.0);
    _transPnt2Matrix4(args, mat,   1.0,  0.0,    5.0, 13.0);
    _transPnt2Matrix4(args, mat,   0.0,  1.0,    6.0, 14.0);
    _transPnt2Matrix4(args, mat,   1.0,  1.0,    7.0, 19.0);
  });

  tests.add("Matrix4 Vector2 Transposition Test", (TestArgs args) {
    Math.Matrix4 mat = new Math.Matrix4( 1.0,  2.0,  3.0,  4.0,
                                         5.0,  6.0,  7.0,  8.0,
                                         9.0, 10.0, 11.0, 12.0,
                                        13.0, 14.0, 15.0, 16.0);
    _matrix4String(args, mat, "[ 1.000,  2.000,  3.000,  4.000,",
                              "  5.000,  6.000,  7.000,  8.000,",
                              "  9.000, 10.000, 11.000, 12.000,",
                              " 13.000, 14.000, 15.000, 16.000]");
    _transVec2Matrix4(args, mat,   0.0,  0.0,    0.0,  0.0);
    _transVec2Matrix4(args, mat,   1.0,  0.0,    1.0,  5.0);
    _transVec2Matrix4(args, mat,   0.0,  1.0,    2.0,  6.0);
    _transVec2Matrix4(args, mat,   1.0,  1.0,    3.0, 11.0);
  });

  // TODO: A unit-tests for Check custom rotation on vector.
  // TODO: A unit-tests for Perspective, ortho, lookTowards, and lookAtTarget.

}

void _matrix4String(TestArgs args, Math.Matrix4 mat, String exp1, String exp2, String exp3, String exp4) {
  String exp = exp1+"\n             "+exp2+"\n             "+exp3+"\n             "+exp4;
  String result = mat.toString("             ");
  if (result != exp) {
    args.error("Unexpected result from Matrix4: "+
      "\n   Expected: $exp"+
      "\n   Gotten:   $result\n");
    args.fail();
  } else args.info("Checking: "+mat.toString("          ")+"\n\n");
}

void _invsMatrix4(TestArgs args, Math.Matrix4 mat, String exp1, String exp2, String exp3, String exp4) {
  Math.Matrix4 inv = mat.inverse();
  _matrix4String(args, inv, exp1, exp2, exp3, exp4);
  Math.Matrix4 result = inv.inverse();
  if (result != mat) {
    args.error("Unexpected result from Matrix4.inverse().inverse(): "+
      "\n   Expected: " + mat.toString("             ") +
      "\n   Gotten:   " + result.toString("             ") + "\n");
    args.fail();
  }
  Math.Matrix4 ident1 = mat*inv;
  if (ident1 != new Math.Matrix4.identity()) {
    args.error("Unexpected result from Matrix4*Matrix4.inverse(): "+
      "\n   Matrix:   " + mat.toString("             ") +
      "\n   Inverted: " + inv.toString("             ") +
      "\n   Expected: " + new Math.Matrix4.identity().toString("             ") +
      "\n   Gotten:   " + ident1.toString("             ") + "\n");
    args.fail();
  }
  Math.Matrix4 ident2 = mat*inv;
  if (ident2 != new Math.Matrix4.identity()) {
    args.error("Unexpected result from Matrix4*Matrix4.inverse(): "+
      "\n   Matrix:   " + mat.toString("             ") +
      "\n   Inverted: " + inv.toString("             ") +
      "\n   Expected: " + new Math.Matrix4.identity().toString("             ") +
      "\n   Gotten:   " + ident2.toString("             ") + "\n");
    args.fail();
  }
}

void _transPnt4Matrix4(TestArgs args, Math.Matrix4 mat,
  double pntX, double pntY, double pntZ, double pntW,
  double expX, double expY, double expZ, double expW) {
  Math.Point4 pnt = new Math.Point4(pntX, pntY, pntZ, pntW);
  Math.Point4 exp = new Math.Point4(expX, expY, expZ, expW);
  Math.Point4 result = mat.transPnt4(pnt);
  args.info("Checking Matrix4.transPnt4: "+
    "\n   Matrix:   "+mat.toString("             ")+
    "\n   Point:    $pnt\n");
  if (result != exp) {
    args.error("Unexpected result from Matrix4.transPnt4: "+
      "\n   Expected: $exp"+
      "\n   Gotten:   $result\n\n");
    args.fail();
  } else args.info("   Result:   $result\n\n");
}

void _transVec4Matrix4(TestArgs args, Math.Matrix4 mat,
  double vecX, double vecY, double vecZ, double vecW,
  double expX, double expY, double expZ, double expW) {
  Math.Vector4 vec = new Math.Vector4(vecX, vecY, vecZ, vecW);
  Math.Vector4 exp = new Math.Vector4(expX, expY, expZ, expW);
  Math.Vector4 result = mat.transVec4(vec);
  args.info("Checking Matrix4.transVec4: "+
    "\n   Matrix:   "+mat.toString("             ")+
    "\n   Vector:   $vec\n");
  if (result != exp) {
    args.error("Unexpected result from Matrix4.transVec4: "+
      "\n   Expected: $exp"+
      "\n   Gotten:   $result\n\n");
    args.fail();
  } else args.info("   Result:   $result\n\n");
}

void _transPnt3Matrix4(TestArgs args, Math.Matrix4 mat,
  double pntX, double pntY, double pntZ, double expX, double expY, double expZ) {
  Math.Point3 pnt = new Math.Point3(pntX, pntY, pntZ);
  Math.Point3 exp = new Math.Point3(expX, expY, expZ);
  Math.Point3 result = mat.transPnt3(pnt);
  args.info("Checking Matrix4.transPnt3: "+
    "\n   Matrix:   "+mat.toString("             ")+
    "\n   Point:    $pnt\n");
  if (result != exp) {
    args.error("Unexpected result from Matrix4.transPnt3: "+
      "\n   Expected: $exp"+
      "\n   Gotten:   $result\n\n");
    args.fail();
  } else args.info("   Result:   $result\n\n");
}

void _transVec3Matrix4(TestArgs args, Math.Matrix4 mat,
  double vecX, double vecY, double vecZ, double expX, double expY, double expZ) {
  Math.Vector3 vec = new Math.Vector3(vecX, vecY, vecZ);
  Math.Vector3 exp = new Math.Vector3(expX, expY, expZ);
  Math.Vector3 result = mat.transVec3(vec);
  args.info("Checking Matrix4.transVec3: "+
    "\n   Matrix:   "+mat.toString("             ")+
    "\n   Vector:   $vec\n");
  if (result != exp) {
    args.error("Unexpected result from Matrix4.transVec3: "+
      "\n   Expected: $exp"+
      "\n   Gotten:   $result\n\n");
    args.fail();
  } else args.info("   Result:   $result\n\n");
}

void _transPnt2Matrix4(TestArgs args, Math.Matrix4 mat, double pntX, double pntY, double expX, double expY) {
  Math.Point2 pnt = new Math.Point2(pntX, pntY);
  Math.Point2 exp = new Math.Point2(expX, expY);
  Math.Point2 result = mat.transPnt2(pnt);
  args.info("Checking Matrix4.transPnt2: "+
    "\n   Matrix:   "+mat.toString("             ")+
    "\n   Point:    $pnt\n");
  if (result != exp) {
    args.error("Unexpected result from Matrix4.transPnt2: "+
      "\n   Expected: $exp"+
      "\n   Gotten:   $result\n\n");
    args.fail();
  } else args.info("   Result:   $result\n\n");
}

void _transVec2Matrix4(TestArgs args, Math.Matrix4 mat, double vecX, double vecY, double expX, double expY) {
  Math.Vector2 vec = new Math.Vector2(vecX, vecY);
  Math.Vector2 exp = new Math.Vector2(expX, expY);
  Math.Vector2 result = mat.transVec2(vec);
  args.info("Checking Matrix4.transVec2: "+
    "\n   Matrix:   "+mat.toString("             ")+
    "\n   Point:    $vec\n");
  if (result != exp) {
    args.error("Unexpected result from Matrix4.transVec2: "+
      "\n   Expected: $exp"+
      "\n   Gotten:   $result\n\n");
    args.fail();
  } else args.info("   Result:   $result\n\n");
}
