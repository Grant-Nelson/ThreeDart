part of ThreeDart.test.test000;

void addVertexTypeTests(TestManager tests) {

  tests.add("VertexTypes and Groups", (TestArgs args) {
    _checkVertexType(args, Data.VertexType.None,    "None",    0x0000, 0, 0);
    _checkVertexType(args, Data.VertexType.Pos,     "Pos",     0x0001, 1, 3);
    _checkVertexType(args, Data.VertexType.Norm,    "Norm",    0x0002, 1, 3);
    _checkVertexType(args, Data.VertexType.Binm,    "Binm",    0x0004, 1, 3);
    _checkVertexType(args, Data.VertexType.Txt2D,   "Txt2D",   0x0008, 1, 2);
    _checkVertexType(args, Data.VertexType.TxtCube, "TxtCube", 0x0010, 1, 3);
    _checkVertexType(args, Data.VertexType.Clr3,    "Clr3",    0x0020, 1, 3);
    _checkVertexType(args, Data.VertexType.Clr4,    "Clr4",    0x0040, 1, 4);
    _checkVertexType(args, Data.VertexType.Weight,  "Weight",  0x0080, 1, 1);
    _checkVertexType(args, Data.VertexType.Bending, "Bending", 0x0100, 1, 4);
    _checkVertexType(args, Data.VertexType.Pos|Data.VertexType.Norm,  "Pos|Norm",  0x0003, 2, 6);
    _checkVertexType(args, Data.VertexType.Pos|Data.VertexType.Txt2D, "Pos|Txt2D", 0x0009, 2, 5);
    _checkVertexType(args, Data.VertexType.Pos|Data.VertexType.Norm|
      Data.VertexType.Binm|Data.VertexType.Txt2D|Data.VertexType.Clr3, "Pos|Norm|Binm|Txt2D|Clr3", 0x002F, 5, 14);
    _checkVertexType(args, Data.VertexType.Txt2D|Data.VertexType.Weight, "Txt2D|Weight", 0x0088, 2, 3);
    _checkVertexType(args, Data.VertexType.TxtCube|Data.VertexType.Bending, "TxtCube|Bending", 0x0110, 2, 7);
  });

  tests.add("VertexTypes from Type Groups 1", (TestArgs args) {
    Data.VertexType group = Data.VertexType.Pos|Data.VertexType.Norm|
      Data.VertexType.Binm|Data.VertexType.Txt2D|Data.VertexType.TxtCube|Data.VertexType.Clr3;
    _checkSubVertexType(args, group, Data.VertexType.Pos,     true,   0,  0);
    _checkSubVertexType(args, group, Data.VertexType.Norm,    true,   1,  3);
    _checkSubVertexType(args, group, Data.VertexType.Binm,    true,   2,  6);
    _checkSubVertexType(args, group, Data.VertexType.Txt2D,   true,   3,  9);
    _checkSubVertexType(args, group, Data.VertexType.TxtCube, true,   4, 11);
    _checkSubVertexType(args, group, Data.VertexType.Clr3,    true,   5, 14);
    _checkSubVertexType(args, group, Data.VertexType.Clr4,    false, -1, -1);
    _checkSubVertexType(args, group, Data.VertexType.Weight,  false, -1, -1);
    _checkSubVertexType(args, group, Data.VertexType.Bending, false, -1, -1);
  });

  // Another test of getting vertex types from vertex type groups.
  tests.add("VertexType from Type Groups 2", (TestArgs args) {
    Data.VertexType group = Data.VertexType.Pos|Data.VertexType.Binm|
      Data.VertexType.Clr4|Data.VertexType.Weight|Data.VertexType.Bending;
    _checkSubVertexType(args, group, Data.VertexType.Pos,     true,   0,  0);
    _checkSubVertexType(args, group, Data.VertexType.Norm,    false, -1, -1);
    _checkSubVertexType(args, group, Data.VertexType.Binm,    true,   1,  3);
    _checkSubVertexType(args, group, Data.VertexType.Txt2D,   false, -1, -1);
    _checkSubVertexType(args, group, Data.VertexType.Clr3,    false, -1, -1);
    _checkSubVertexType(args, group, Data.VertexType.Clr4,    true,   2,  6);
    _checkSubVertexType(args, group, Data.VertexType.Weight,  true,   3, 10);
    _checkSubVertexType(args, group, Data.VertexType.Bending, true,   4, 11);
  });
}

// Checks a vertex types and group for expected values.
void _checkVertexType(TestArgs args, Data.VertexType type, String expName, int expValue, int expCount, int expSize) {
  args.info("Checking vertex type ${type.toString()}:\n");

  String resultName = type.toString();
  if (resultName != expName) {
    args.error("Error: Got the wrong name for a vertex type:\n");
    args.error("   Gotten:   $resultName\n");
    args.error("   Expected: $expName\n");
  }

  int resultValue = type.value;
  if (resultValue != expValue) {
    args.error("Error: Got the wrong value for a vertex type:\n");
    args.error("   Gotten:   $resultValue\n");
    args.error("   Expected: $expValue\n");
  }

  int resultCount = type.count;
  if (resultCount != expCount) {
    args.error("Error: Got the wrong count for a vertex type:\n");
    args.error("   Gotten:   $resultCount\n");
    args.error("   Expected: $expCount\n");
  }

  int resultSize = type.size;
  if (resultSize != expSize) {
    args.error("Error: Got the wrong size for a vertex type:\n");
    args.error("   Gotten:   $resultSize\n");
    args.error("   Expected: $expSize\n");
  }
}

// Checks a vertex group for expected values regarding a vertex type.
void _checkSubVertexType(TestArgs args, Data.VertexType group, Data.VertexType type, bool expHas, int expIndex, int expOffset) {
  args.info("Checking vertex type ${type.toString()} in ${group.toString()}:\n");

  bool resultHas = group.has(type);
  if (resultHas != expHas) {
    args.error("Error: Got the wrong result from has for a vertex type in a group:\n");
    args.error("   Gotten:   $resultHas\n");
    args.error("   Expected: $expHas\n");
  }

  int resultIndex = group.indexOf(type);
  if (resultIndex != expIndex) {
    args.error("Error: Got the wrong index for a vertex type in a group:\n");
    args.error("   Gotten:   $resultIndex\n");
    args.error("   Expected: $expIndex\n");
  }

  Data.VertexType expType = expHas? type: Data.VertexType.None;
  Data.VertexType resultType = group.at(expIndex);
  if (resultType != expType) {
    args.error("Error: Got the wrong index for a vertex type in a group:\n");
    args.error("   Gotten:   ${resultType.toString()}\n");
    args.error("   Expected: ${expType.toString()}\n");
  }

  int resultOffset = group.offset(type);
  if (resultOffset != expOffset) {
    args.error("Error: Got the wrong offset for a vertex type in a group:\n");
    args.error("   Gotten:   $resultOffset\n");
    args.error("   Expected: $expOffset\n");
  }
}
