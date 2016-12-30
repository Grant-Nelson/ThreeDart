part of ThreeDart.test.test000;

void addMatrix2Tests(TestManager tests) {

  tests.add("Matrix2 Point Transposition Test", (TestArgs args) {
    Math.Matrix2 mat = new Math.Matrix2(2.0, 3.0,
                                        4.0, 5.0);
    _matrix2String(args, mat, "[2.000, 3.000,",
                              " 4.000, 5.000]");
    _transPnt2Matrix2(args, mat,   0.0,  0.0,    0.0,  0.0);
    _transPnt2Matrix2(args, mat,   1.0,  0.0,    2.0,  4.0);
    _transPnt2Matrix2(args, mat,   0.0,  1.0,    3.0,  5.0);
    _transPnt2Matrix2(args, mat,   1.0,  1.0,    5.0,  9.0);
  });

  tests.add("Matrix2 Vector Transposition Test", (TestArgs args) {
    Math.Matrix2 mat = new Math.Matrix2(2.0, 3.0,
                                        4.0, 5.0);
    _matrix2String(args, mat, "[2.000, 3.000,",
                              " 4.000, 5.000]");
    _transVec2Matrix2(args, mat,   0.0,  0.0,    0.0,  0.0);
    _transVec2Matrix2(args, mat,   1.0,  0.0,    2.0,  4.0);
    _transVec2Matrix2(args, mat,   0.0,  1.0,    3.0,  5.0);
    _transVec2Matrix2(args, mat,   1.0,  1.0,    5.0,  9.0);
  });

  tests.add("Matrix2 Identity Test", (TestArgs args) {
    Math.Matrix2 mat = new Math.Matrix2.identity();
    _matrix2String(args, mat, "[1.000, 0.000,",
                              " 0.000, 1.000]");
    _transPnt2Matrix2(args, mat,   0.0,  0.0,    0.0,  0.0);
    _transPnt2Matrix2(args, mat,   1.0,  0.0,    1.0,  0.0);
    _transPnt2Matrix2(args, mat,  -1.0,  0.0,   -1.0,  0.0);
    _transPnt2Matrix2(args, mat,   1.0,  1.0,    1.0,  1.0);
    _transPnt2Matrix2(args, mat,  -1.0, -1.0,   -1.0, -1.0);
    _transPnt2Matrix2(args, mat,   0.0,  1.0,    0.0,  1.0);
    _transPnt2Matrix2(args, mat,   0.0, -1.0,    0.0, -1.0);
    _transPnt2Matrix2(args, mat,   2.3, -4.2,    2.3, -4.2);
    _transPnt2Matrix2(args, mat,  -1.5,  7.3,   -1.5,  7.3);
  });

  tests.add("Matrix2 Scalar Test", (TestArgs args) {
    Math.Matrix2 mat = new Math.Matrix2.scale(2.0, 3.0);
    _matrix2String(args, mat, "[2.000, 0.000,",
                              " 0.000, 3.000]");
    _transPnt2Matrix2(args, mat,   0.0,  0.0,    0.0,   0.0);
    _transPnt2Matrix2(args, mat,   1.0,  0.0,    2.0,   0.0);
    _transPnt2Matrix2(args, mat,  -1.0,  0.0,   -2.0,   0.0);
    _transPnt2Matrix2(args, mat,   1.0,  1.0,    2.0,   3.0);
    _transPnt2Matrix2(args, mat,  -1.0, -1.0,   -2.0,  -3.0);
    _transPnt2Matrix2(args, mat,   0.0,  1.0,    0.0,   3.0);
    _transPnt2Matrix2(args, mat,   0.0, -1.0,    0.0,  -3.0);
    _transPnt2Matrix2(args, mat,   2.3, -4.2,    4.6, -12.6);
    _transPnt2Matrix2(args, mat,  -1.5,  7.3,   -3.0,  21.9);
  });

  tests.add("Matrix2 Basic Rotate Test", (TestArgs args) {
    Math.Matrix2 mat = new Math.Matrix2.rotate(math.PI/4.0);
    _matrix2String(args, mat, "[0.707, -0.707,",
                              " 0.707,  0.707]");
    double val = 0.70710678118; // sqrt(2)/2
    _transPnt2Matrix2(args, mat,   0.0,  0.0,    0.0,  0.0);
    _transPnt2Matrix2(args, mat,   1.0,  0.0,    val,  val);
    _transPnt2Matrix2(args, mat,   val,  val,    0.0,  1.0);
    _transPnt2Matrix2(args, mat,   0.0,  1.0,   -val,  val);
    _transPnt2Matrix2(args, mat,  -val,  val,   -1.0,  0.0);
    _transPnt2Matrix2(args, mat,  -1.0,  0.0,   -val, -val);
    _transPnt2Matrix2(args, mat,  -val, -val,    0.0, -1.0);
    _transPnt2Matrix2(args, mat,   0.0, -1.0,    val, -val);
    _transPnt2Matrix2(args, mat,   val, -val,    1.0,  0.0);
  });

  tests.add("Matrix2 Rotate Test", (TestArgs args) {
    _matrix2String(args, new Math.Matrix2.rotate(-math.PI/4.0),
      "[ 0.707, 0.707,",
      " -0.707, 0.707]");
    _matrix2String(args, new Math.Matrix2.rotate(math.PI/2.0),
      "[0.000, -1.000,",
      " 1.000,  0.000]");
    _matrix2String(args, new Math.Matrix2.rotate(-math.PI),
      "[-1.000,  0.000,",
      "  0.000, -1.000]");
    _matrix2String(args, new Math.Matrix2.rotate(math.PI),
      "[-1.000,  0.000,",
      "  0.000, -1.000]");
    _matrix2String(args, new Math.Matrix2.rotate(math.PI*3.0/8.0),
      "[0.383, -0.924,",
      " 0.924,  0.383]");
  });

  tests.add("Matrix2 Miscellaneous Test", (TestArgs args) {
    Math.Matrix2 mat = new Math.Matrix2(1.0, 2.0,
                                        3.0, 4.0);
    _matrix2String(args, mat,
      "[1.000, 2.000,",
      " 3.000, 4.000]");
    _matrix2String(args, new Math.Matrix2.fromList(mat.toList()),
      "[1.000, 2.000,",
      " 3.000, 4.000]");
    _matrix2String(args, mat.transpose(),
      "[1.000, 3.000,",
      " 2.000, 4.000]");
    _doubleCheck(args, mat.m11, 1.0, "m11");
    _doubleCheck(args, mat.m21, 2.0, "m21");
    _doubleCheck(args, mat.m12, 3.0, "m12");
    _doubleCheck(args, mat.m22, 4.0, "m22");
    _matrix2String(args, new Math.Matrix2.fromMatrix3(
      new Math.Matrix3(1.0, 2.0, 3.0,
                       4.0, 5.0, 6.0,
                       7.0, 8.0, 9.0)),
      "[1.000, 2.000,",
      " 4.000, 5.000]");
    _matrix2String(args, new Math.Matrix2.fromMatrix4(
      new Math.Matrix4( 1.0,  2.0,  3.0,  4.0,
                        5.0,  6.0,  7.0,  8.0,
                        9.0, 10.0, 11.0, 12.0,
                       13.0, 14.0, 15.0, 16.0)),
      "[1.000, 2.000,",
      " 5.000, 6.000]");
  });

  tests.add("Matrix2 Inverse Test", (TestArgs args) {
    _invsMatrix2(args, new Math.Matrix2.identity(),
      "[1.000, 0.000,",
      " 0.000, 1.000]");
    _invsMatrix2(args, new Math.Matrix2.scale(2.0, 3.0),
      "[0.500, 0.000,",
      " 0.000, 0.333]");
    _invsMatrix2(args, new Math.Matrix2.rotate(math.PI/4.0),
      "[ 0.707, 0.707,",
      " -0.707, 0.707]");
    _matrix2String(args, new Math.Matrix2(0.0, 0.0,
                                          0.0, 0.0).inverse(),
      "[1.000, 0.000,",
      " 0.000, 1.000]");
  });

  tests.add("Matrix2 Multiplication Test", (TestArgs args) {
    // [1, 2, * [5, 6, = [ 5+14,  6+16  = [19, 22,
    //  3, 4]    7, 8]    15+28, 18+32]    43, 50]
    _matrix2String(args,
      new Math.Matrix2(1.0, 2.0,
                       3.0, 4.0)*
      new Math.Matrix2(5.0, 6.0,
                       7.0, 8.0),
      "[19.000, 22.000,",
      " 43.000, 50.000]");
    // [5, 6, * [1, 2, = [ 5+18, 10+24  = [23, 34,
    //  7, 8]    3, 4]     7+24, 14+32]    31, 46]
    _matrix2String(args,
      new Math.Matrix2(5.0, 6.0,
                       7.0, 8.0)*
      new Math.Matrix2(1.0, 2.0,
                       3.0, 4.0),
      "[23.000, 34.000,",
      " 31.000, 46.000]");
  });
}

void _doubleCheck(TestArgs args, double value, double exp, String name) {
  if (value != exp) {
    args.error("Unexpected result from $name: "+
      "\n   Expected: $exp"+
      "\n   Gotten:   $value\n\n");
    args.fail();
  } else args.info("Checked $name is $value\n\n");
}

void _matrix2String(TestArgs args, Math.Matrix2 mat, String exp1, String exp2) {
  String exp = exp1+"\n             "+exp2;
  String result = mat.toString("             ");
  if (result != exp) {
    args.error("Unexpected result from Matrix2: "+
      "\n   Expected: $exp"+
      "\n   Gotten:   $result\n");
    args.fail();
  } else args.info("Checking: "+mat.toString("          ")+"\n\n");
}

void _invsMatrix2(TestArgs args, Math.Matrix2 mat, String exp1, String exp2) {
  Math.Matrix2 inv = mat.inverse();
  _matrix2String(args, inv, exp1, exp2);
  Math.Matrix2 result = inv.inverse();
  if (result != mat) {
    args.error("Unexpected result from Matrix2.inverse().inverse(): "+
      "\n   Expected: " + mat.toString("             ") +
      "\n   Gotten:   " + result.toString("             ") + "\n");
    args.fail();
  }
  Math.Matrix2 ident1 = mat*inv;
  if (ident1 != new Math.Matrix2.identity()) {
    args.error("Unexpected result from Matrix2*Matrix2.inverse(): "+
      "\n   Matrix:   " + mat.toString("             ") +
      "\n   Inverted: " + inv.toString("             ") +
      "\n   Expected: " + new Math.Matrix2.identity().toString("             ") +
      "\n   Gotten:   " + ident1.toString("             ") + "\n");
    args.fail();
  }
  Math.Matrix2 ident2 = mat*inv;
  if (ident2 != new Math.Matrix2.identity()) {
    args.error("Unexpected result from Matrix2*Matrix2.inverse(): "+
      "\n   Matrix:   " + mat.toString("             ") +
      "\n   Inverted: " + inv.toString("             ") +
      "\n   Expected: " + new Math.Matrix2.identity().toString("             ") +
      "\n   Gotten:   " + ident2.toString("             ") + "\n");
    args.fail();
  }
}

void _transPnt2Matrix2(TestArgs args, Math.Matrix2 mat, double pntX, double pntY, double expX, double expY) {
  Math.Point2 pnt = new Math.Point2(pntX, pntY);
  Math.Point2 exp = new Math.Point2(expX, expY);
  Math.Point2 result = mat.transPnt2(pnt);
  args.info("Checking Matrix2.transPnt2: "+
    "\n   Matrix:   "+mat.toString("             ")+
    "\n   Point:    $pnt\n");
  if (result != exp) {
    args.error("Unexpected result from Matrix2.transPnt2: "+
      "\n   Expected: $exp"+
      "\n   Gotten:   $result\n\n");
    args.fail();
  } else args.info("   Result:   $result\n\n");
}

void _transVec2Matrix2(TestArgs args, Math.Matrix2 mat, double vecX, double vecY, double expX, double expY) {
  Math.Vector2 vec = new Math.Vector2(vecX, vecY);
  Math.Vector2 exp = new Math.Vector2(expX, expY);
  Math.Vector2 result = mat.transVec2(vec);
  args.info("Checking Matrix2.transVec2: "+
    "\n   Matrix:   "+mat.toString("             ")+
    "\n   Vector:   $vec\n");
  if (result != exp) {
    args.error("Unexpected result from Matrix2.transVec2: "+
      "\n   Expected: $exp"+
      "\n   Gotten:   $result\n\n");
    args.fail();
  } else args.info("   Result:   $result\n\n");
}
