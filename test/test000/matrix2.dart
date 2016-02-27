part of ThreeDart.test.test000;

void addMatrix2Tests(TestManager tests) {

  tests.add("Matrix2 Point Transposition Test", (TestArgs args) {
    Math.Matrix2 mat = new Math.Matrix2(2.0, 3.0,
                                        4.0, 5.0);
    _matrix2String(args, mat, "[ 2.000,  3.000,",
                              "  4.000,  5.000]");
    _transMatrix2(args, mat,   0.0,  0.0,    0.0,  0.0);
    _transMatrix2(args, mat,   1.0,  0.0,    2.0,  4.0);
    _transMatrix2(args, mat,   0.0,  1.0,    3.0,  5.0);
    _transMatrix2(args, mat,   1.0,  1.0,    5.0,  9.0);
  });

  tests.add("Matrix2 Identity Test", (TestArgs args) {
    Math.Matrix2 mat = new Math.Matrix2.identity();
    _matrix2String(args, mat, "[ 1.000,  0.000,",
                              "  0.000,  1.000]");
    _transMatrix2(args, mat,   0.0,  0.0,    0.0,  0.0);
    _transMatrix2(args, mat,   1.0,  0.0,    1.0,  0.0);
    _transMatrix2(args, mat,  -1.0,  0.0,   -1.0,  0.0);
    _transMatrix2(args, mat,   1.0,  1.0,    1.0,  1.0);
    _transMatrix2(args, mat,  -1.0, -1.0,   -1.0, -1.0);
    _transMatrix2(args, mat,   0.0,  1.0,    0.0,  1.0);
    _transMatrix2(args, mat,   0.0, -1.0,    0.0, -1.0);
    _transMatrix2(args, mat,   2.3, -4.2,    2.3, -4.2);
    _transMatrix2(args, mat,  -1.5,  7.3,   -1.5,  7.3);
  });

  tests.add("Matrix2 Scalar Test", (TestArgs args) {
    Math.Matrix2 mat = new Math.Matrix2.scale(2.0, 3.0);
    _matrix2String(args, mat, "[ 2.000,  0.000,",
                              "  0.000,  3.000]");
    _transMatrix2(args, mat,   0.0,  0.0,    0.0,   0.0);
    _transMatrix2(args, mat,   1.0,  0.0,    2.0,   0.0);
    _transMatrix2(args, mat,  -1.0,  0.0,   -2.0,   0.0);
    _transMatrix2(args, mat,   1.0,  1.0,    2.0,   3.0);
    _transMatrix2(args, mat,  -1.0, -1.0,   -2.0,  -3.0);
    _transMatrix2(args, mat,   0.0,  1.0,    0.0,   3.0);
    _transMatrix2(args, mat,   0.0, -1.0,    0.0,  -3.0);
    _transMatrix2(args, mat,   2.3, -4.2,    4.6, -12.6);
    _transMatrix2(args, mat,  -1.5,  7.3,   -3.0,  21.9);
  });

  tests.add("Matrix2 Basic Rotate Test", (TestArgs args) {
    Math.Matrix2 mat = new Math.Matrix2.rotate(math.PI/4.0);
    _matrix2String(args, mat, "[ 0.707, -0.707,",
                              "  0.707,  0.707]");
    double val = 0.70710678118; // sqrt(2)/2
    _transMatrix2(args, mat,   0.0,  0.0,    0.0,  0.0);
    _transMatrix2(args, mat,   1.0,  0.0,    val,  val);
    _transMatrix2(args, mat,   val,  val,    0.0,  1.0);
    _transMatrix2(args, mat,   0.0,  1.0,   -val,  val);
    _transMatrix2(args, mat,  -val,  val,   -1.0,  0.0);
    _transMatrix2(args, mat,  -1.0,  0.0,   -val, -val);
    _transMatrix2(args, mat,  -val, -val,    0.0, -1.0);
    _transMatrix2(args, mat,   0.0, -1.0,    val, -val);
    _transMatrix2(args, mat,   val, -val,    1.0,  0.0);
  });

  tests.add("Matrix2 Rotate Test", (TestArgs args) {
    _matrix2String(args, new Math.Matrix2.rotate(-math.PI/4.0),
      "[ 0.707,  0.707,",
      " -0.707,  0.707]");
    _matrix2String(args, new Math.Matrix2.rotate(math.PI/2.0),
      "[ 0.000, -1.000,",
      "  1.000,  0.000]");
    _matrix2String(args, new Math.Matrix2.rotate(-math.PI),
      "[-1.000,  0.000,",
      "  0.000, -1.000]");
    _matrix2String(args, new Math.Matrix2.rotate(math.PI),
      "[-1.000,  0.000,",
      "  0.000, -1.000]");
    _matrix2String(args, new Math.Matrix2.rotate(math.PI*3.0/8.0),
      "[ 0.383, -0.924,",
      "  0.924,  0.383]");
  });

  tests.add("Matrix2 Miscellaneous Test", (TestArgs args) {
    Math.Matrix2 mat = new Math.Matrix2(1.0, 2.0, 3.0, 4.0);
    _matrix2String(args, mat,
      "[ 1.000,  2.000,",
      "  3.000,  4.000]");
    _matrix2String(args, new Math.Matrix2.fromList(mat.toList()),
      "[ 1.000,  2.000,",
      "  3.000,  4.000]");
    _matrix2String(args, mat.copy(),
      "[ 1.000,  2.000,",
      "  3.000,  4.000]");
    _matrix2String(args, mat.transpose(),
      "[ 1.000,  3.000,",
      "  2.000,  4.000]");
    mat.set(5.0, 6.0, 7.0, 8.0);
    _matrix2String(args, mat,
      "[ 5.000,  6.000,",
      "  7.000,  8.000]");
    mat.m11 = 11.0;
    mat.m12 = 12.0;
    mat.m21 = 21.0;
    mat.m22 = 22.0;
    _matrix2String(args, mat,
      "[ 11.000,  21.000,",
      "  12.000,  22.000]");
  });

  tests.add("Matrix2 Inverse Test", (TestArgs args) {
    _invsMatrix2(args, new Math.Matrix2.identity(),
      "[ 1.000,  0.000,",
      "  0.000,  1.000]");
    _invsMatrix2(args, new Math.Matrix2.scale(2.0, 3.0),
      "[ 0.500,  0.000,",
      "  0.000,  0.333]");
    _invsMatrix2(args, new Math.Matrix2.rotate(math.PI/4.0),
      "[ 0.707, -0.707,",
      "  0.707,  0.707]");
    _matrix2String(args, new Math.Matrix2(0.0, 0.0, 0.0, 0.0).inverse(),
      "[ 1.000,  0.000,",
      "  0.000,  1.000]");
  });

  tests.add("Matrix2 Multiplication Test", (TestArgs args) {
    // [1, 2, * [5, 6, = [ 5+14,  6+16  = [19, 22,
    //  3, 4]    7, 8]    15+28, 18+32]    43, 50]
    _matrix2String(args,
      new Math.Matrix2(1.0, 2.0, 3.0, 4.0)*
      new Math.Matrix2(5.0, 6.0, 7.0, 8.0),
      "[ 19.000,  22.000,",
      "  43.000,  50.000]");
    // [5, 6, * [1, 2, = [ 5+18, 10+24  = [23, 34,
    //  7, 8]    3, 4]     7+24, 14+32]    31, 46]
    _matrix2String(args,
      new Math.Matrix2(5.0, 6.0, 7.0, 8.0)*
      new Math.Matrix2(1.0, 2.0, 3.0, 4.0),
      "[ 23.000,  34.000,",
      "  31.000,  46.000]");
  });
}

void _matrix2String(TestArgs args, Math.Matrix2 mat, String exp1, String exp2) {
  String exp = exp1+"\n"+exp2;
  String result = mat.toString();
  if (result != exp) {
    args.error("Unexpected result from Matrix2.transPnt2: "+
      "\n   Expected: $exp"+
      "\n   Gotten:   $result\n");
    args.fail();
  } else args.info("$mat\n\n");
}

void _invsMatrix2(TestArgs args, Math.Matrix2 mat, String exp1, String exp2) {
  Math.Matrix2 inv = mat.inverse();
  _matrix2String(args, inv, exp1, exp2);
  Math.Matrix2 result = inv.inverse();
  if (result != mat) {
    args.error("Unexpected result from Matrix2.inverse().inverse(): "+
      "\n   Expected: $mat"+
      "\n   Gotten:   $result\n");
    args.fail();
  }
}

void _transMatrix2(TestArgs args, Math.Matrix2 mat, double pntX, double pntY, double expX, double expY) {
  Math.Point2 pnt = new Math.Point2(pntX, pntY);
  Math.Point2 exp = new Math.Point2(expX, expY);
  Math.Point2 result = mat.transPnt2(pnt);
  if (result != exp) {
    args.error("Unexpected result from Matrix2.transPnt2: "+
      "\n   Expected: $exp"+
      "\n   Gotten:   $result\n");
    args.fail();
  } else args.info("$pnt => $exp\n");
}
