part of ThreeDart.Tokenizer;

class Transition {
  State _start;
  State _end;
  List<Matcher> _matchers;

  Transition._(State this._start, State this._end) {
    this._matchers = new List<Matcher>();
  }

  State get start => this._start;
  State get end => this._end;

  bool match(int c) {
    for (Matcher matcher in this._matchers) {
      if (matcher.match(c)) return true;
    }
    return false;
  }

  void addSet(String setChar) {
    Map<int, bool> map = new Map<int, bool>();
    for (int char in setChar.codeUnits) map[char] = true;
    this._matchers.add(new SetMatcher._(map));
  }

  void addRange(String lowChar, String highChar) {
    int low  = lowChar.codeUnitAt(0);
    int high = highChar.codeUnitAt(0);
    if (low > high) {
      int temp = low;
      low = high;
      high = temp;
    }
    this._matchers.add(new RangeMatcher._(low, high));
  }

  void addAll() {
    this._matchers.add(new AllMatcher._());
  }

  NotMatcher addNot() {
    NotMatcher matcher = new NotMatcher._();
    this._matchers.add(matcher);
    return matcher;
  }

  String toString() {
    String str = "";
    for (Matcher matcher in this._matchers) {
      if (str.isNotEmpty) str += ", ";
      str += matcher.toString();
    }
    return "${this._start.name} -> ${this._end.name}: $str";
  }
}
