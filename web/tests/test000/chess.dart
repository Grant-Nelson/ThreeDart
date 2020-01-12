part of ThreeDart.test.test000;

void addChessTests(TestManager tests) {
  void _checkLines(TestArgs args, String resultStr, List<String> expLines) {
    String expStr = expLines.join("\n");
    if (expStr != resultStr) {
      args.warning("Expected:\n  ${expStr.replaceAll("\n", "\n  ")}\n");
      args.warning("Result:\n  ${resultStr.replaceAll("\n", "\n  ")}\n");
      args.error("Unexpected string of a chess game state.\n\n");
    } else {
      args.info("$resultStr\n\n");
    }
  }

  void checkIsChecked(TestArgs args, bool expIsCheckedWhite, bool expIsCheckedBlack, List<String> data) {
    chess.State state = new chess.State.parse(data);
    args.info("State:\n$state\n");
    if (state.isChecked(true) != expIsCheckedWhite)
      args.error("Expected IsChecked(white) to return $expIsCheckedWhite but it wasn't.\n");
    if (state.isChecked(false) != expIsCheckedBlack)
      args.error("Expected IsChecked(black) to return $expIsCheckedBlack but it wasn't\n");
  }

  void checkMovements(TestArgs args, chess.State state, String itemStr, List<String> expMovements) {
    args.info("moving $itemStr\n");

    chess.TileValue item = new chess.TileValue.parse(itemStr);
    chess.Location loc = state.findItem(item);
    List<chess.Movement> moves = state.getMovements(loc);

    List<String> parts = new List(moves.length);
    chess.StringGrid grid = new chess.StringGrid();
    grid.setCell(loc.row-1, loc.column-1, "O");
    for (int i = moves.length - 1; i >= 0; --i) {
      chess.Movement move = moves[i];
      parts[i] = move.toString();
      grid.setCell(move.destination.row-1, move.destination.column-1, "X");
    }
    args.info("Movements:\n$grid\n");

    _checkLines(args, parts.join("\n"), expMovements);
  }

  void checkLoc(TestArgs args, int row, int column, bool expOnBoard, int expIndex, String expNotation) {
    chess.Location loc = new chess.Location(row, column);
    if (loc.row != row) args.error("Unexpected row: ${loc.row} != $row\n");
    if (loc.column != column) args.error("Unexpected column: ${loc.column} != $column\n");
    if (loc.onBoard != expOnBoard) args.error("Unexpected onBoard: ${loc.onBoard} != $expOnBoard\n");
    if (loc.index != expIndex) args.error("Unexpected index: ${loc.index} != $expIndex\n");
    if (loc.toNotation() != expNotation) args.error("Unexpected notation: ${loc.toNotation()} != $expNotation\n");

    int row2 = row, column2 = column;
    if (!loc.onBoard) row2 = column2 = 0;
    chess.Location loc2 = new chess.Location.fromIndex(expIndex);
    if (loc2.row != row2) args.error("Unexpected row from index: ${loc2.row} != $row2\n");
    if (loc2.column != column2) args.error("Unexpected column from index: ${loc2.column} != $column2\n");
  }

  tests.add("Test of chess location", (TestArgs args) {
    checkLoc(args, 0, 0, false, -1, "xx");
    checkLoc(args, 1, 1, true, 0, "a8");
    checkLoc(args, 2, 2, true, 9, "b7");
    checkLoc(args, 3, 3, true, 18, "c6");
    checkLoc(args, 4, 4, true, 27, "d5");
    checkLoc(args, 5, 5, true, 36, "e4");
    checkLoc(args, 6, 6, true, 45, "f3");
    checkLoc(args, 7, 7, true, 54, "g2");
    checkLoc(args, 8, 8, true, 63, "h1");
    checkLoc(args, 4, 7, true, 30, "g5");
    checkLoc(args, 9, 1, false, -1, "xx");
    checkLoc(args, 1, 9, false, -1, "xx");
  });

  tests.add("Test of chess state parse and toString", (TestArgs args) {
    chess.State state = new chess.State.initial();
    _checkLines(args, state.toString(),
      ["   1  2  3  4  5  6  7  8",
       "1 |BR|BH|BB|BK|BQ|BB|BH|BR|",
       "2 |BP|BP|BP|BP|BP|BP|BP|BP|",
       "3 |  |  |  |  |  |  |  |  |",
       "4 |  |  |  |  |  |  |  |  |",
       "5 |  |  |  |  |  |  |  |  |",
       "6 |  |  |  |  |  |  |  |  |",
       "7 |WP|WP|WP|WP|WP|WP|WP|WP|",
       "8 |WR|WH|WB|WK|WQ|WB|WH|WR|"]);
    _checkLines(args, state.toString(showCount: true),
      ["    1   2   3   4   5   6   7   8",
       "1 |BR1|BH1|BB1|BK1|BQ1|BB2|BH2|BR2|",
       "2 |BP1|BP2|BP3|BP4|BP5|BP6|BP7|BP8|",
       "3 |   |   |   |   |   |   |   |   |",
       "4 |   |   |   |   |   |   |   |   |",
       "5 |   |   |   |   |   |   |   |   |",
       "6 |   |   |   |   |   |   |   |   |",
       "7 |WP1|WP2|WP3|WP4|WP5|WP6|WP7|WP8|",
       "8 |WR1|WH1|WB1|WK1|WQ1|WB2|WH2|WR2|"]);
    _checkLines(args, state.toString(showLabels: false),
      ["BR|BH|BB|BK|BQ|BB|BH|BR",
       "BP|BP|BP|BP|BP|BP|BP|BP",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "WP|WP|WP|WP|WP|WP|WP|WP",
       "WR|WH|WB|WK|WQ|WB|WH|WR"]);

    state = new chess.State.parse(
      ["BR|BH|BB|BK|BQ|BB|BH|BR",
       "BP|BP|BP|BP|BP|BP|BP|BP",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "WP|WP|WP|WP|WP|WP|WP|WP",
       "WR|WH|WB|WK|WQ|WB|WH|WR"]);
    _checkLines(args, state.toString(showCount: true),
      ["    1   2   3   4   5   6   7   8",
       "1 |BR1|BH1|BB1|BK1|BQ1|BB2|BH2|BR2|",
       "2 |BP1|BP2|BP3|BP4|BP5|BP6|BP7|BP8|",
       "3 |   |   |   |   |   |   |   |   |",
       "4 |   |   |   |   |   |   |   |   |",
       "5 |   |   |   |   |   |   |   |   |",
       "6 |   |   |   |   |   |   |   |   |",
       "7 |WP1|WP2|WP3|WP4|WP5|WP6|WP7|WP8|",
       "8 |WR1|WH1|WB1|WK1|WQ1|WB2|WH2|WR2|"]);

    // Test complex state missing peices and having multiple queens
    state = new chess.State.parse(
      [" BR|   | BB| BK|   | BB| BH|   ",
       " WP|   |   |+BQ|   | BP|+BQ|+BQ",
       "   |+WP|   |   |+BP|   |   |   ",
       "   |   |+WP|+BP|   |   |   |   ",
       "   |   |+BP|+WP|   |   |   |   ",
       "   |+BP|   |   |+WP|   |   |   ",
       " BP|   |   |+WK|   |+WP|+WQ|+WQ",
       "   | WH| WB|   |+WQ| WB|   | WR"]);
    _checkLines(args, state.toString(showCount: true),
      ["    1    2    3    4    5    6    7    8",
       "1 | BR1|    | BB1| BK1|    | BB2| BH1|    |",
       "2 | WP1|    |    |+BQ1|    | BP1|+BQ2|+BQ3|",
       "3 |    |+WP2|    |    |+BP2|    |    |    |",
       "4 |    |    |+WP3|+BP3|    |    |    |    |",
       "5 |    |    |+BP4|+WP4|    |    |    |    |",
       "6 |    |+BP5|    |    |+WP5|    |    |    |",
       "7 | BP6|    |    |+WK1|    |+WP6|+WQ1|+WQ2|",
       "8 |    | WH1| WB1|    |+WQ3| WB2|    | WR1|"]);

    state = new chess.State.parse(
      ["BR2|BH2|BB2|BK1|BQ1|BB1|BH1|BR1",
       "BP8|BP7|BP6|BP5|BP4|BP3|BP2|BP1",
       "   |   |   |   |   |   |   |   ",
       "   |   |   |   |   |   |   |   ",
       "   |   |   |   |   |   |   |   ",
       "   |   |   |   |   |   |   |   ",
       "WP8|WP7|WP6|WP5|WP4|WP3|WP2|WP1",
       "WR2|WH2|WB2|WK1|WQ1|WB1|WH1|WR1"]);
    _checkLines(args, state.toString(showCount: true),
      ["    1   2   3   4   5   6   7   8",
       "1 |BR2|BH2|BB2|BK1|BQ1|BB1|BH1|BR1|",
       "2 |BP8|BP7|BP6|BP5|BP4|BP3|BP2|BP1|",
       "3 |   |   |   |   |   |   |   |   |",
       "4 |   |   |   |   |   |   |   |   |",
       "5 |   |   |   |   |   |   |   |   |",
       "6 |   |   |   |   |   |   |   |   |",
       "7 |WP8|WP7|WP6|WP5|WP4|WP3|WP2|WP1|",
       "8 |WR2|WH2|WB2|WK1|WQ1|WB1|WH1|WR1|"]);
  });

  tests.add("Test of chess checked condition determination", (TestArgs args) {
    checkIsChecked(args, false, false,
      ["  |  |  |BK|  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |WK|  |  |  |  "]);
    checkIsChecked(args, true, true,
      ["  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |BK|  |  |  |  ",
       "  |  |  |WK|  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  "]);
    checkIsChecked(args, false, true,
      ["  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |BK|  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |WQ|  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |WK|  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  "]);
    checkIsChecked(args, false, true,
      ["  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |BK|  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |BR|  |  |  |  |  ",
       "  |WK|  |  |  |  |WR|  ",
       "  |  |  |  |  |  |  |  "]);
    checkIsChecked(args, false, true,
      ["  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |BK|  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |WB|  |  |  |  |  ",
       "  |WK|  |  |  |  |BB|  ",
       "  |  |  |  |  |  |  |  "]);
    checkIsChecked(args, true, true,
      ["  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |BK|  ",
       "  |  |  |  |  |WP|  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |BP|  |  |  |  |  ",
       "  |WK|  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  "]);
    checkIsChecked(args, false, false,
      ["  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |WK|  ",
       "  |  |  |  |  |BP|  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |WP|  |  |  |  |  ",
       "  |BK|  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  "]);
    checkIsChecked(args, true, true,
      ["  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |BK|  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |WH|  |  ",
       "  |  |  |  |BH|  |  |  ",
       "  |  |WK|  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  "]);
  });

  tests.add("Test of chess state movements of pawns", (TestArgs args) {
    chess.State state = new chess.State.initial();

    checkMovements(args, state, "WP1",
      ["Pawn move to 6 1, 7 1 => 6 1",
       "Pawn move to 5 1, 7 1 => 5 1"]);
    checkMovements(args, state, "WP4",
      ["Pawn move to 6 4, 7 4 => 6 4",
       "Pawn move to 5 4, 7 4 => 5 4"]);
    checkMovements(args, state, "WP8",
      ["Pawn move to 6 8, 7 8 => 6 8",
       "Pawn move to 5 8, 7 8 => 5 8"]);

    checkMovements(args, state, "BP1",
      ["Pawn move to 3 1, 2 1 => 3 1",
       "Pawn move to 4 1, 2 1 => 4 1"]);
    checkMovements(args, state, "BP4",
      ["Pawn move to 3 4, 2 4 => 3 4",
       "Pawn move to 4 4, 2 4 => 4 4"]);
    checkMovements(args, state, "BP8",
      ["Pawn move to 3 8, 2 8 => 3 8",
       "Pawn move to 4 8, 2 8 => 4 8"]);

    chess.State state2 = new chess.State.parse(
      [" BR1| BH1| BB1| BK1| BQ1| BB2| BH2| BR2",
       "    | BP2| BP3|    | BP5| BP6| BP7|    ",
       "    |    |    |    |    |    |    |    ",
       "    |    |    |    |    |    |    |    ",
       "+BP1|+WP2|+WP3|+BP4|+WP5|    |+WP7|+BP8",
       "    |    |    |    |    |    |    |    ",
       " WP1|    |    | WP4|    | WP6|    | WP8",
       " WR1| WH1| WB1| WK1| WQ1| WB2| WH2| WR2"]);
    state2.prev = state;

    checkMovements(args, state2, "BP1",
      ["Pawn move to 6 1, 5 1 => 6 1",
       "Pawn en passent Pawn at 6 2, 5 1 => 6 2, 5 2 => null"]);
    checkMovements(args, state2, "BP4",
      ["Pawn move to 6 4, 5 4 => 6 4",
       "Pawn en passent Pawn at 6 3, 5 4 => 6 3, 5 3 => null",
       "Pawn en passent Pawn at 6 5, 5 4 => 6 5, 5 5 => null"]);
    checkMovements(args, state2, "BP8",
      ["Pawn move to 6 8, 5 8 => 6 8",
       "Pawn en passent Pawn at 6 7, 5 8 => 6 7, 5 7 => null"]);

    state2 = new chess.State.parse(
      [" BR1| BH1| BB1| BK1| BQ1| BB2| BH2| BR2",
       " BP1|    |    | BP4|    | BP6|    | BP8",
       "    |    |    |    |    |    |    |    ",
       "+WP1|+BP2|+BP3|+WP4|+BP5|    |+BP7|+WP8",
       "    |    |    |    |    |    |    |    ",
       "    |    |    |    |    |    |    |    ",
       "    | WP2| WP3|    | WP5| WP6| WP7|    ",
       " WR1| WH1| WB1| WK1| WQ1| WB2| WH2| WR2"]);
    state2.prev = state;

    checkMovements(args, state2, "WP1",
      ["Pawn move to 3 1, 4 1 => 3 1",
       "Pawn en passent Pawn at 3 2, 4 1 => 3 2, 4 2 => null"]);
    checkMovements(args, state2, "WP4",
      ["Pawn move to 3 4, 4 4 => 3 4",
       "Pawn en passent Pawn at 3 3, 4 4 => 3 3, 4 3 => null",
       "Pawn en passent Pawn at 3 5, 4 4 => 3 5, 4 5 => null"]);
    checkMovements(args, state2, "WP8",
      ["Pawn move to 3 8, 4 8 => 3 8",
       "Pawn en passent Pawn at 3 7, 4 8 => 3 7, 4 7 => null"]);

    state = new chess.State.parse(
      ["  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "BQ|  |  |  |WK|  |  |  ",
       "  |  |  |WP|  |  |  |  ",
       "  |  |  |  |  |  |  |  "]);
    checkMovements(args, state, "WP1",
      ["Pawn move to 6 4, 7 4 => 6 4"]);
  });

  tests.add("Test of chess state movements of knights", (TestArgs args) {
    chess.State state = new chess.State.parse(
      ["   |   |    |   |   |   |   |   ",
       "   |   |    |   |   |   |   |   ",
       "   |   |    |   |   |   |   |   ",
       "   |   |+BH1|   |   |   |   |   ",
       "   |   |    |   |   |   |   |   ",
       "   |   |    |   |   |   |   |   ",
       "   |   |    |   |   |   |   |   ",
       "   |   |    |   |   |   |   |   "]);
    args.info("State:\n$state\n");
    checkMovements(args, state, "BH1",
      ["Knight move to 6 4, 4 3 => 6 4",
       "Knight move to 6 2, 4 3 => 6 2",
       "Knight move to 5 5, 4 3 => 5 5",
       "Knight move to 3 5, 4 3 => 3 5",
       "Knight move to 2 4, 4 3 => 2 4",
       "Knight move to 2 2, 4 3 => 2 2",
       "Knight move to 5 1, 4 3 => 5 1",
       "Knight move to 3 1, 4 3 => 3 1"]);

    state = new chess.State.parse(
      ["   |    |    |    |   |   |   |   ",
       "   |+BH1|    |    |   |   |   |   ",
       "   |    |    |+BP1|   |   |   |   ",
       "   |    |+WP1|    |   |   |   |   ",
       "   |    |    |    |   |   |   |   ",
       "   |    |    |    |   |   |   |   ",
       "   |    |    |    |   |   |   |   ",
       "   |    |    |    |   |   |   |   "]);
    args.info("State:\n$state\n");
    checkMovements(args, state, "BH1",
      ["Knight take Pawn at 4 3, 2 2 => 4 3, 4 3 => null",
       "Knight move to 4 1, 2 2 => 4 1",
       "Knight move to 1 4, 2 2 => 1 4"]);

    state = new chess.State.parse(
      ["  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "BQ|  |  |  |  |  |WK|  ",
       "  |  |  |WH|  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  "]);
    checkMovements(args, state, "WH1",
      ["Knight move to 3 6, 4 4 => 3 6",
       "Knight move to 3 2, 4 4 => 3 2"]);
  });

  tests.add("Test of chess state movements of bishops", (TestArgs args) {
    chess.State state = new chess.State.parse(
      ["   |   |    |   |   |   |   |   ",
       "   |   |    |   |   |   |   |   ",
       "   |   |    |   |   |   |   |   ",
       "   |   |+BB1|   |   |   |   |   ",
       "   |   |    |   |   |   |   |   ",
       "   |   |    |   |   |   |   |   ",
       "   |   |    |   |   |   |   |   ",
       "   |   |    |   |   |   |   |   "]);
    args.info("State:\n$state\n");
    checkMovements(args, state, "WB1", []); // Check off board isn't moved
    checkMovements(args, state, "BB1",
      ["Bishop move to 5 4, 4 3 => 5 4",
       "Bishop move to 6 5, 4 3 => 6 5",
       "Bishop move to 7 6, 4 3 => 7 6",
       "Bishop move to 8 7, 4 3 => 8 7",
       "Bishop move to 5 2, 4 3 => 5 2",
       "Bishop move to 6 1, 4 3 => 6 1",
       "Bishop move to 3 2, 4 3 => 3 2",
       "Bishop move to 2 1, 4 3 => 2 1",
       "Bishop move to 3 4, 4 3 => 3 4",
       "Bishop move to 2 5, 4 3 => 2 5",
       "Bishop move to 1 6, 4 3 => 1 6"]);

    state = new chess.State.parse(
      ["    |    |    |   |    |   |   |   ",
       "+WP1|    |    |   |+BP1|   |   |   ",
       "    |    |    |   |    |   |   |   ",
       "    |    |+WB1|   |    |   |   |   ",
       "    |+BP2|    |   |    |   |   |   ",
       "    |    |    |   |+WP2|   |   |   ",
       "    |    |    |   |    |   |   |   ",
       "    |    |    |   |    |   |   |   "]);
    args.info("State:\n$state\n");
    checkMovements(args, state, "WB1",
      ["Bishop move to 5 4, 4 3 => 5 4",
       "Bishop take Pawn at 5 2, 4 3 => 5 2, 5 2 => null",
       "Bishop move to 3 2, 4 3 => 3 2",
       "Bishop move to 3 4, 4 3 => 3 4",
       "Bishop take Pawn at 2 5, 4 3 => 2 5, 2 5 => null"]);
  });

  tests.add("Test of chess state movements of rooks", (TestArgs args) {
    chess.State state = new chess.State.parse(
      ["   |   |    |   |   |   |   |   ",
       "   |   |    |   |   |   |   |   ",
       "   |   |    |   |   |   |   |   ",
       "   |   |+BR1|   |   |   |   |   ",
       "   |   |    |   |   |   |   |   ",
       "   |   |    |   |   |   |   |   ",
       "   |   |    |   |   |   |   |   ",
       "   |   |    |   |   |   |   |   "]);
    args.info("State:\n$state\n");
    checkMovements(args, state, "BR1",
      ["Rook move to 4 4, 4 3 => 4 4",
       "Rook move to 4 5, 4 3 => 4 5",
       "Rook move to 4 6, 4 3 => 4 6",
       "Rook move to 4 7, 4 3 => 4 7",
       "Rook move to 4 8, 4 3 => 4 8",
       "Rook move to 4 2, 4 3 => 4 2",
       "Rook move to 4 1, 4 3 => 4 1",
       "Rook move to 5 3, 4 3 => 5 3",
       "Rook move to 6 3, 4 3 => 6 3",
       "Rook move to 7 3, 4 3 => 7 3",
       "Rook move to 8 3, 4 3 => 8 3",
       "Rook move to 3 3, 4 3 => 3 3",
       "Rook move to 2 3, 4 3 => 2 3",
       "Rook move to 1 3, 4 3 => 1 3"]);

    state = new chess.State.parse(
      ["    |   |    |   |    |   |   |   ",
       "    |   |+BP1|   |    |   |   |   ",
       "    |   |    |   |    |   |   |   ",
       "+WP1|   |+WR1|   |+WP2|   |   |   ",
       "    |   |    |   |    |   |   |   ",
       "    |   |+BP2|   |    |   |   |   ",
       "    |   |    |   |    |   |   |   ",
       "    |   |    |   |    |   |   |   "]);
    args.info("State:\n$state\n");
    checkMovements(args, state, "WR1",
      ["Rook move to 4 4, 4 3 => 4 4",
       "Rook move to 4 2, 4 3 => 4 2",
       "Rook move to 5 3, 4 3 => 5 3",
       "Rook take Pawn at 6 3, 4 3 => 6 3, 6 3 => null",
       "Rook move to 3 3, 4 3 => 3 3",
       "Rook take Pawn at 2 3, 4 3 => 2 3, 2 3 => null"]);

    state = new chess.State.parse(
      ["BR1|   |   |BK1|   |   |   |BR2",
       "BP1|   |   |   |   |   |   |BP2",
       "   |   |   |   |   |   |   |   ",
       "   |   |   |   |   |   |   |   ",
       "   |   |   |   |   |   |   |   ",
       "   |   |   |   |   |   |   |   ",
       "WP1|   |   |   |   |   |   |WP2",
       "WR1|   |   |WK1|   |   |   |WR2"]);
    args.info("State:\n$state\n");
    checkMovements(args, state, "BR1",
      ["Rook move to 1 2, 1 1 => 1 2",
       "Rook move to 1 3, 1 1 => 1 3",
       "Rook castles with King, 1 1 => 1 3, 1 4 => 1 2"]);
    checkMovements(args, state, "BR2",
      ["Rook move to 1 7, 1 8 => 1 7",
       "Rook move to 1 6, 1 8 => 1 6",
       "Rook move to 1 5, 1 8 => 1 5",
       "Rook castles with King, 1 8 => 1 5, 1 4 => 1 6"]);
    checkMovements(args, state, "WR1",
      ["Rook move to 8 2, 8 1 => 8 2",
       "Rook move to 8 3, 8 1 => 8 3",
       "Rook castles with King, 8 1 => 8 3, 8 4 => 8 2"]);
    checkMovements(args, state, "WR2",
      ["Rook move to 8 7, 8 8 => 8 7",
       "Rook move to 8 6, 8 8 => 8 6",
       "Rook move to 8 5, 8 8 => 8 5",
       "Rook castles with King, 8 8 => 8 5, 8 4 => 8 6"]);

    state = new chess.State.parse(
      [" BR1|   |   |+BK1|   |   |   | BR2",
       " BP1|   |   |    |   |   |   | BP2",
       "    |   |   |    |   |   |   |    ",
       "    |   |   |    |   |   |   |    ",
       "    |   |   |    |   |   |   |    ",
       "    |   |   |    |   |   |   |    ",
       " WP1|   |   |    |   |   |   | WP2",
       "+WR1|   |   | WK1|   |   |   |+WR2"]);
    args.info("State:\n$state\n");
    checkMovements(args, state, "BR1",
      ["Rook move to 1 2, 1 1 => 1 2",
       "Rook move to 1 3, 1 1 => 1 3"]);
    checkMovements(args, state, "BR2",
      ["Rook move to 1 7, 1 8 => 1 7",
       "Rook move to 1 6, 1 8 => 1 6",
       "Rook move to 1 5, 1 8 => 1 5"]);
    checkMovements(args, state, "WR1",
      ["Rook move to 8 2, 8 1 => 8 2",
       "Rook move to 8 3, 8 1 => 8 3"]);
    checkMovements(args, state, "WR2",
      ["Rook move to 8 7, 8 8 => 8 7",
       "Rook move to 8 6, 8 8 => 8 6",
       "Rook move to 8 5, 8 8 => 8 5"]);
  });

  tests.add("Test of chess state movements of kings", (TestArgs args) {
    chess.State state = new chess.State.parse(
      ["BR1|   |   |BK1|   |   |   |BR2",
       "BP1|   |   |   |   |   |   |BP2",
       "   |   |   |   |   |   |   |   ",
       "   |   |   |   |   |   |   |   ",
       "   |   |   |   |   |   |   |   ",
       "   |   |   |   |   |   |   |   ",
       "WP1|   |   |   |   |   |   |WP2",
       "WR1|   |   |WK1|   |   |   |WR2"]);
    args.info("State:\n$state\n");
    checkMovements(args, state, "BK1",
      ["King move to 2 5, 1 4 => 2 5",
       "King move to 2 4, 1 4 => 2 4",
       "King move to 2 3, 1 4 => 2 3",
       "King move to 1 3, 1 4 => 1 3",
       "King move to 1 5, 1 4 => 1 5",
       "King castles with Rook, 1 4 => 1 2, 1 1 => 1 3",
       "King castles with Rook, 1 4 => 1 6, 1 8 => 1 5"]);
    checkMovements(args, state, "WK1",
      ["King move to 8 3, 8 4 => 8 3",
       "King move to 7 3, 8 4 => 7 3",
       "King move to 7 4, 8 4 => 7 4",
       "King move to 7 5, 8 4 => 7 5",
       "King move to 8 5, 8 4 => 8 5",
       "King castles with Rook, 8 4 => 8 2, 8 1 => 8 3",
       "King castles with Rook, 8 4 => 8 6, 8 8 => 8 5"]);

    state = new chess.State.parse(
      [" BR1|   |   |+BK1|   |   |   | BR2",
       " BP1|   |   |    |   |   |   | BP2",
       "    |   |   |    |   |   |   |    ",
       "    |   |   |    |   |   |   |    ",
       "    |   |   |    |   |   |   |    ",
       "    |   |   |    |   |   |   |    ",
       " WP1|   |   |    |   |   |   | WP2",
       "+WR1|   |   | WK1|   |   |   |+WR2"]);
    args.info("State:\n$state\n");
    checkMovements(args, state, "BK1",
      ["King move to 2 5, 1 4 => 2 5",
       "King move to 2 4, 1 4 => 2 4",
       "King move to 2 3, 1 4 => 2 3",
       "King move to 1 3, 1 4 => 1 3",
       "King move to 1 5, 1 4 => 1 5"]);
    checkMovements(args, state, "WK1",
      ["King move to 8 3, 8 4 => 8 3",
       "King move to 7 3, 8 4 => 7 3",
       "King move to 7 4, 8 4 => 7 4",
       "King move to 7 5, 8 4 => 7 5",
       "King move to 8 5, 8 4 => 8 5"]);

    state = new chess.State.parse(
      ["   |   |    |    |    |   |   |   ",
       "   |   |    |    |    |   |   |   ",
       "   |   |    |    |    |   |   |   ",
       "   |   |    |+WP2|+WP1|   |   |   ",
       "   |   |+BP3|+WK1|+WP3|   |   |   ",
       "   |   |    |+BP2|+BP1|   |   |   ",
       "   |   |    |    |    |   |   |   ",
       "   |   |    |    |    |   |   |   "]);
    args.info("State:\n$state\n");
    checkMovements(args, state, "WK1",
      ["King take Pawn at 6 5, 5 4 => 6 5, 6 5 => null",
       "King move to 6 3, 5 4 => 6 3",
       "King take Pawn at 5 3, 5 4 => 5 3, 5 3 => null",
       "King move to 4 3, 5 4 => 4 3"]);

    state = new chess.State.parse(
      ["BR1|BB1|   |BK1|   |   |   |BR2",
       "BP1|   |BP3|BP4|BP5|   |   |BP8",
       "   |   |   |   |   |   |   |   ",
       "   |   |   |   |   |   |   |   ",
       "   |   |   |   |   |   |   |   ",
       "   |   |   |   |   |   |   |   ",
       "WP1|   |WP3|WP4|WP5|   |   |WP8",
       "WR1|WB1|   |WK1|   |   |   |WR2"]);
    args.info("State:\n$state\n");
    checkMovements(args, state, "BK1",
      ["King move to 1 3, 1 4 => 1 3",
       "King move to 1 5, 1 4 => 1 5",
       "King castles with Rook, 1 4 => 1 6, 1 8 => 1 5"]);
    checkMovements(args, state, "WK1",
      ["King move to 8 3, 8 4 => 8 3",
       "King move to 8 5, 8 4 => 8 5",
       "King castles with Rook, 8 4 => 8 6, 8 8 => 8 5"]);

    state = new chess.State.parse(
      ["BR1|   |   |BK1|   |   |BB2|BR2",
       "BP1|   |BP3|BP4|BP5|   |   |BP8",
       "   |   |   |   |   |   |   |   ",
       "   |   |   |   |   |   |   |   ",
       "   |   |   |   |   |   |   |   ",
       "   |   |   |   |   |   |   |   ",
       "WP1|   |WP3|WP4|WP5|   |   |WP8",
       "WR1|   |   |WK1|   |   |WB2|WR2"]);
    args.info("State:\n$state\n");
    checkMovements(args, state, "BK1",
      ["King move to 1 3, 1 4 => 1 3",
       "King move to 1 5, 1 4 => 1 5",
       "King castles with Rook, 1 4 => 1 2, 1 1 => 1 3"]);
    checkMovements(args, state, "WK1",
      ["King move to 8 3, 8 4 => 8 3",
       "King move to 8 5, 8 4 => 8 5",
       "King castles with Rook, 8 4 => 8 2, 8 1 => 8 3"]);
  });

  tests.add("Test of chess state movements of queens", (TestArgs args) {
    chess.State state = new chess.State.parse(
      ["+WQ1|   |   |   |   |   |   |    ",
       "    |   |   |   |   |   |   |    ",
       "    |   |   |   |   |   |   |    ",
       "    |   |   |   |   |   |   |    ",
       "    |   |   |   |   |   |   |    ",
       "    |   |   |   |   |   |   |    ",
       "    |   |   |   |   |   |   |    ",
       "    |   |   |   |   |   |   |+BQ1"]);
    args.info("State:\n$state\n");
    checkMovements(args, state, "BQ1",
      ["Queen move to 8 7, 8 8 => 8 7",
       "Queen move to 8 6, 8 8 => 8 6",
       "Queen move to 8 5, 8 8 => 8 5",
       "Queen move to 8 4, 8 8 => 8 4",
       "Queen move to 8 3, 8 8 => 8 3",
       "Queen move to 8 2, 8 8 => 8 2",
       "Queen move to 8 1, 8 8 => 8 1",
       "Queen move to 7 7, 8 8 => 7 7",
       "Queen move to 6 6, 8 8 => 6 6",
       "Queen move to 5 5, 8 8 => 5 5",
       "Queen move to 4 4, 8 8 => 4 4",
       "Queen move to 3 3, 8 8 => 3 3",
       "Queen move to 2 2, 8 8 => 2 2",
       "Queen take Queen at 1 1, 8 8 => 1 1, 1 1 => null",
       "Queen move to 7 8, 8 8 => 7 8",
       "Queen move to 6 8, 8 8 => 6 8",
       "Queen move to 5 8, 8 8 => 5 8",
       "Queen move to 4 8, 8 8 => 4 8",
       "Queen move to 3 8, 8 8 => 3 8",
       "Queen move to 2 8, 8 8 => 2 8",
       "Queen move to 1 8, 8 8 => 1 8"]);
    checkMovements(args, state, "WQ1",
      ["Queen move to 2 2, 1 1 => 2 2",
       "Queen move to 3 3, 1 1 => 3 3",
       "Queen move to 4 4, 1 1 => 4 4",
       "Queen move to 5 5, 1 1 => 5 5",
       "Queen move to 6 6, 1 1 => 6 6",
       "Queen move to 7 7, 1 1 => 7 7",
       "Queen take Queen at 8 8, 1 1 => 8 8, 8 8 => null",
       "Queen move to 2 1, 1 1 => 2 1",
       "Queen move to 3 1, 1 1 => 3 1",
       "Queen move to 4 1, 1 1 => 4 1",
       "Queen move to 5 1, 1 1 => 5 1",
       "Queen move to 6 1, 1 1 => 6 1",
       "Queen move to 7 1, 1 1 => 7 1",
       "Queen move to 8 1, 1 1 => 8 1",
       "Queen move to 1 2, 1 1 => 1 2",
       "Queen move to 1 3, 1 1 => 1 3",
       "Queen move to 1 4, 1 1 => 1 4",
       "Queen move to 1 5, 1 1 => 1 5",
       "Queen move to 1 6, 1 1 => 1 6",
       "Queen move to 1 7, 1 1 => 1 7",
       "Queen move to 1 8, 1 1 => 1 8"]);

    state = new chess.State.parse(
      ["   |   |    |    |    |   |   |   ",
       "   |   |    |    |    |   |   |   ",
       "   |BP2|    |    |    |   |   |   ",
       "   |   |    |+WP4|+WP1|   |   |   ",
       "   |   |+BP3|+WQ1|+WP3|   |   |   ",
       "   |   |    |+BP4|+BP1|   |   |   ",
       "   |WP2|    |    |    |   |   |   ",
       "   |   |    |    |    |   |   |   "]);
    args.info("State:\n$state\n");
    checkMovements(args, state, "WQ1",
      ["Queen take Pawn at 6 5, 5 4 => 6 5, 6 5 => null",
       "Queen take Pawn at 6 4, 5 4 => 6 4, 6 4 => null",
       "Queen move to 6 3, 5 4 => 6 3",
       "Queen take Pawn at 5 3, 5 4 => 5 3, 5 3 => null",
       "Queen move to 4 3, 5 4 => 4 3",
       "Queen take Pawn at 3 2, 5 4 => 3 2, 3 2 => null"]);

    state = new chess.State.parse(
      ["BQ|  |  |  |  |  |WK|  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |WQ|  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  ",
       "  |  |  |  |  |  |  |  "]);
    checkMovements(args, state, "WQ1",
      ["Queen move to 1 2, 3 4 => 1 2",
       "Queen move to 1 4, 3 4 => 1 4",
       "Queen move to 1 6, 3 4 => 1 6"]);
  });
}
