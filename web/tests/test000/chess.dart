part of ThreeDart.test.test000;

void addChessTests(TestManager tests) {
  void _checkString(TestArgs args, String resultStr, String expStr) {
    if (expStr != resultStr) {
      args.info("Expected:\n$expStr\n");
      args.info("Result:\n$resultStr\n");
      args.error("Unexpected string of a chess game state.\n");
    } else {
      args.info("$resultStr\n\n");
    }
  }
  
  tests.add("Test of chess state parse and toString", (TestArgs args) {
    chess.State state = new chess.State.initial();
    _checkString(args, state.toString(true, true, true),
      "   1    2    3    4    5    6    7    8\n"+
      "1 | BR0| BH0| BB0| BK0| BQ0| BB1| BH1| BR1|\n"+
      "2 | BP0| BP1| BP2| BP3| BP4| BP5| BP6| BP7|\n"+
      "3 |    |    |    |    |    |    |    |    |\n"+
      "4 |    |    |    |    |    |    |    |    |\n"+
      "5 |    |    |    |    |    |    |    |    |\n"+
      "6 |    |    |    |    |    |    |    |    |\n"+
      "7 | WP0| WP1| WP2| WP3| WP4| WP5| WP6| WP7|\n"+
      "8 | WR0| WH0| WB0| WK0| WQ0| WB1| WH1| WR1|");
    _checkString(args, state.toString(true, true),
      "   1   2   3   4   5   6   7   8\n"+
      "1 |BR0|BH0|BB0|BK0|BQ0|BB1|BH1|BR1|\n"+
      "2 |BP0|BP1|BP2|BP3|BP4|BP5|BP6|BP7|\n"+
      "3 |   |   |   |   |   |   |   |   |\n"+
      "4 |   |   |   |   |   |   |   |   |\n"+
      "5 |   |   |   |   |   |   |   |   |\n"+
      "6 |   |   |   |   |   |   |   |   |\n"+
      "7 |WP0|WP1|WP2|WP3|WP4|WP5|WP6|WP7|\n"+
      "8 |WR0|WH0|WB0|WK0|WQ0|WB1|WH1|WR1|");
    _checkString(args, state.toString(),
      "   1  2  3  4  5  6  7  8\n"+
      "1 |BR|BH|BB|BK|BQ|BB|BH|BR|\n"+
      "2 |BP|BP|BP|BP|BP|BP|BP|BP|\n"+
      "3 |  |  |  |  |  |  |  |  |\n"+
      "4 |  |  |  |  |  |  |  |  |\n"+
      "5 |  |  |  |  |  |  |  |  |\n"+
      "6 |  |  |  |  |  |  |  |  |\n"+
      "7 |WP|WP|WP|WP|WP|WP|WP|WP|\n"+
      "8 |WR|WH|WB|WK|WQ|WB|WH|WR|");
    _checkString(args, state.toString(false),
      "BR|BH|BB|BK|BQ|BB|BH|BR\n"+
      "BP|BP|BP|BP|BP|BP|BP|BP\n"+
      "  |  |  |  |  |  |  |  \n"+
      "  |  |  |  |  |  |  |  \n"+
      "  |  |  |  |  |  |  |  \n"+
      "  |  |  |  |  |  |  |  \n"+
      "WP|WP|WP|WP|WP|WP|WP|WP\n"+
      "WR|WH|WB|WK|WQ|WB|WH|WR");
    _checkString(args, state.toString(false, false, true),
      " BR| BH| BB| BK| BQ| BB| BH| BR\n"+
      " BP| BP| BP| BP| BP| BP| BP| BP\n"+
      "   |   |   |   |   |   |   |   \n"+
      "   |   |   |   |   |   |   |   \n"+
      "   |   |   |   |   |   |   |   \n"+
      "   |   |   |   |   |   |   |   \n"+
      " WP| WP| WP| WP| WP| WP| WP| WP\n"+
      " WR| WH| WB| WK| WQ| WB| WH| WR");

    state = new chess.State.parse(
      "BR|BH|BB|BK|BQ|BB|BH|BR"+
      "BP|BP|BP|BP|BP|BP|BP|BP"+
      "  |  |  |  |  |  |  |  "+
      "  |  |  |  |  |  |  |  "+
      "  |  |  |  |  |  |  |  "+
      "  |  |  |  |  |  |  |  "+
      "WP|WP|WP|WP|WP|WP|WP|WP"+
      "WR|WH|WB|WK|WQ|WB|WH|WR");
    _checkString(args, state.toString(true, true, true),
      "   1    2    3    4    5    6    7    8\n"+
      "1 | BR0| BH0| BB0| BK0| BQ0| BB1| BH1| BR1|\n"+
      "2 | BP0| BP1| BP2| BP3| BP4| BP5| BP6| BP7|\n"+
      "3 |    |    |    |    |    |    |    |    |\n"+
      "4 |    |    |    |    |    |    |    |    |\n"+
      "5 |    |    |    |    |    |    |    |    |\n"+
      "6 |    |    |    |    |    |    |    |    |\n"+
      "7 | WP0| WP1| WP2| WP3| WP4| WP5| WP6| WP7|\n"+
      "8 | WR0| WH0| WB0| WK0| WQ0| WB1| WH1| WR1|");

    // Test complex state missing peices and having multiple queens
    state = new chess.State.parse(
      " BR|   | BB| BK|   | BB| BH|   "+
      " WP|   |   |+BQ|   | BP|+BQ|+BQ"+
      "   |+WP|   |   |+BP|   |   |   "+
      "   |   |+WP|+BP|   |   |   |   "+
      "   |   |+BP|+WP|   |   |   |   "+
      "   |+BP|   |   |+WP|   |   |   "+
      " BP|   |   |+WK|   |+WP|+WQ|+WQ"+
      "   | WH| WB|   |+WQ| WB|   | WR", hasMoved: true);
    _checkString(args, state.toString(true, true, true),
      "   1    2    3    4    5    6    7    8\n"+
      "1 | BR0|    | BB0| BK0|    | BB1| BH0|    |\n"+
      "2 | WP0|    |    |+BQ0|    | BP0|+BQ1|+BQ2|\n"+
      "3 |    |+WP1|    |    |+BP1|    |    |    |\n"+
      "4 |    |    |+WP2|+BP2|    |    |    |    |\n"+
      "5 |    |    |+BP3|+WP3|    |    |    |    |\n"+
      "6 |    |+BP4|    |    |+WP4|    |    |    |\n"+
      "7 | BP5|    |    |+WK0|    |+WP5|+WQ0|+WQ1|\n"+
      "8 |    | WH0| WB0|    |+WQ2| WB1|    | WR0|");
  });

  tests.add("Test of chess state movements", (TestArgs args) {
    chess.State state = new chess.State.initial();
    state.getMovementsForPiece(chess.TileValue.Black|chess.TileValue.Pawn|new chess.TileValue(3));

    
  });
}
