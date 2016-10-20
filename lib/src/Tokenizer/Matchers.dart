part of ThreeDart.Tokenizer;

abstract class Matcher {
  bool match(int c);
}

class SetMatcher implements Matcher {
  Map<int, bool> _set;

  SetMatcher._(Map<int, bool> this._set);

  bool match(int c) {
    return this._set.containsKey(c);
  }

  String toString() {
    return new String.fromCharCodes(this._set.keys);
  }
}

class RangeMatcher implements Matcher {
  int _low;
  int _high;

  RangeMatcher._(int this._low, int this._high);

  bool match(int c) {
    return (this._low <= c) && (this._high >= c);
  }

  String toString() {
    String low = new String.fromCharCode(this._low);
    String high = new String.fromCharCode(this._high);
    return "$low..$high";
  }
}

class AllMatcher implements Matcher {

  AllMatcher._();

  bool match(int c) {
    return true;
  }

  String toString() {
    return "all";
  }
}

class NotMatcher implements Matcher {
  List<Matcher> _matchers;

  NotMatcher._() {
    this._matchers = new List<Matcher>();
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

  bool match(int c) {
    for (Matcher matcher in this._matchers) {
      if (matcher.match(c)) return false;
    }
    return true;
  }

  String toString() {
    String str = "";
    for (Matcher matcher in this._matchers) {
      if (str.isNotEmpty) str += ", ";
      str += matcher.toString();
    }
    return "![$str]";
  }
}
