part of ThreeDart.test.test000;

void addChessTests(TestManager tests) {
  void _checkString(TestArgs args, String resultStr, String expStr) {
    if (expStr != resultStr) {
      args.warning("Expected:\n$expStr\n");
      args.warning("Result:\n$resultStr\n");
      args.error("Unexpected string of a chess game state.\n\n");
    } else {
      args.info("$resultStr\n\n");
    }
  }
  
  tests.add("Test of chess state parse and toString", (TestArgs args) {
    chess.State state = new chess.State.initial();
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
    _checkString(args, state.toString(showCount: true),
      "    1   2   3   4   5   6   7   8\n"+
      "1 |BR1|BH1|BB1|BK1|BQ1|BB2|BH2|BR2|\n"+
      "2 |BP1|BP2|BP3|BP4|BP5|BP6|BP7|BP8|\n"+
      "3 |   |   |   |   |   |   |   |   |\n"+
      "4 |   |   |   |   |   |   |   |   |\n"+
      "5 |   |   |   |   |   |   |   |   |\n"+
      "6 |   |   |   |   |   |   |   |   |\n"+
      "7 |WP1|WP2|WP3|WP4|WP5|WP6|WP7|WP8|\n"+
      "8 |WR1|WH1|WB1|WK1|WQ1|WB2|WH2|WR2|");
    _checkString(args, state.toString(showLabels: false),
      "BR|BH|BB|BK|BQ|BB|BH|BR\n"+
      "BP|BP|BP|BP|BP|BP|BP|BP\n"+
      "  |  |  |  |  |  |  |  \n"+
      "  |  |  |  |  |  |  |  \n"+
      "  |  |  |  |  |  |  |  \n"+
      "  |  |  |  |  |  |  |  \n"+
      "WP|WP|WP|WP|WP|WP|WP|WP\n"+
      "WR|WH|WB|WK|WQ|WB|WH|WR");

    state = new chess.State.parse(
      "BR|BH|BB|BK|BQ|BB|BH|BR\n"+
      "BP|BP|BP|BP|BP|BP|BP|BP\n"+
      "  |  |  |  |  |  |  |  \n"+
      "  |  |  |  |  |  |  |  \n"+
      "  |  |  |  |  |  |  |  \n"+
      "  |  |  |  |  |  |  |  \n"+
      "WP|WP|WP|WP|WP|WP|WP|WP\n"+
      "WR|WH|WB|WK|WQ|WB|WH|WR");
    _checkString(args, state.toString(showCount: true),
      "    1   2   3   4   5   6   7   8\n"+
      "1 |BR1|BH1|BB1|BK1|BQ1|BB2|BH2|BR2|\n"+
      "2 |BP1|BP2|BP3|BP4|BP5|BP6|BP7|BP8|\n"+
      "3 |   |   |   |   |   |   |   |   |\n"+
      "4 |   |   |   |   |   |   |   |   |\n"+
      "5 |   |   |   |   |   |   |   |   |\n"+
      "6 |   |   |   |   |   |   |   |   |\n"+
      "7 |WP1|WP2|WP3|WP4|WP5|WP6|WP7|WP8|\n"+
      "8 |WR1|WH1|WB1|WK1|WQ1|WB2|WH2|WR2|");

    // Test complex state missing peices and having multiple queens
    state = new chess.State.parse(
      " BR|   | BB| BK|   | BB| BH|   \n"+
      " WP|   |   |+BQ|   | BP|+BQ|+BQ\n"+
      "   |+WP|   |   |+BP|   |   |   \n"+
      "   |   |+WP|+BP|   |   |   |   \n"+
      "   |   |+BP|+WP|   |   |   |   \n"+
      "   |+BP|   |   |+WP|   |   |   \n"+
      " BP|   |   |+WK|   |+WP|+WQ|+WQ\n"+
      "   | WH| WB|   |+WQ| WB|   | WR");
    _checkString(args, state.toString(showCount: true),
      "    1    2    3    4    5    6    7    8\n"+
      "1 | BR1|    | BB1| BK1|    | BB2| BH1|    |\n"+
      "2 | WP1|    |    |+BQ1|    | BP1|+BQ2|+BQ3|\n"+
      "3 |    |+WP2|    |    |+BP2|    |    |    |\n"+
      "4 |    |    |+WP3|+BP3|    |    |    |    |\n"+
      "5 |    |    |+BP4|+WP4|    |    |    |    |\n"+
      "6 |    |+BP5|    |    |+WP5|    |    |    |\n"+
      "7 | BP6|    |    |+WK1|    |+WP6|+WQ1|+WQ2|\n"+
      "8 |    | WH1| WB1|    |+WQ3| WB2|    | WR1|");
      
    state = new chess.State.parse(
      "BR2|BH2|BB2|BK1|BQ1|BB1|BH1|BR1\n"+
      "BP8|BP7|BP6|BP5|BP4|BP3|BP2|BP1\n"+
      "   |   |   |   |   |   |   |   \n"+
      "   |   |   |   |   |   |   |   \n"+
      "   |   |   |   |   |   |   |   \n"+
      "   |   |   |   |   |   |   |   \n"+
      "WP8|WP7|WP6|WP5|WP4|WP3|WP2|WP1\n"+
      "WR2|WH2|WB2|WK1|WQ1|WB1|WH1|WR1");
    _checkString(args, state.toString(showCount: true),
      "    1   2   3   4   5   6   7   8\n"+
      "1 |BR2|BH2|BB2|BK1|BQ1|BB1|BH1|BR1|\n"+
      "2 |BP8|BP7|BP6|BP5|BP4|BP3|BP2|BP1|\n"+
      "3 |   |   |   |   |   |   |   |   |\n"+
      "4 |   |   |   |   |   |   |   |   |\n"+
      "5 |   |   |   |   |   |   |   |   |\n"+
      "6 |   |   |   |   |   |   |   |   |\n"+
      "7 |WP8|WP7|WP6|WP5|WP4|WP3|WP2|WP1|\n"+
      "8 |WR2|WH2|WB2|WK1|WQ1|WB1|WH1|WR1|");
  });

  // void checkMovements(chess.State state, String item, String expMovements) {
  //   state.getMovementsForPiece(new chess.TileValue.pawn(true, 3));

  // }

  tests.add("Test of chess state movements", (TestArgs args) {
    //chess.State state = new chess.State.initial();

    
  });
}
