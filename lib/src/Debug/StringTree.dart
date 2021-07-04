part of ThreeDart.Debug;

/// String tree is a collection of hieratical string information.
class StringTree {
  static const String _singleStr = "--";
  static const String _startStr  = ".-";
  static const String _branchStr = "+-";
  static const String _endStr    = "'-";
  static const String _breakStr  = "\n";
  static const String _spaceStr  = "  ";
  static const String _pipeStr   = "| ";

  /// This is the string to show on this part of the tree.
  String text;

  /// These are the children to this part of the tree.
  List<StringTree> children;

  /// Creates a new string tree.
  StringTree([this.text = '']):
    this.children = [];

  /// Adds a child to this string tree.
  void append(StringTree child) => this.children.add(child);

  /// Creates a new child to this string tree and returns it.
  StringTree add(String text) {
    StringTree child = new StringTree(text);
    this.children.add(child);
    return child;
  }

  /// Outputs the string tree.
  String toString([String indent = '']) {
    StringBuffer buf = new StringBuffer();
    this._subString(buf, indent, true, true);
    return buf.toString();
  }

  /// Outputs a part of the tree and its children.
  void _subString(StringBuffer buf, String indent, bool first, bool last) {
    buf.write(indent);
    if (first) buf.write(last? _singleStr: _startStr);
    else       buf.write(last? _endStr: _branchStr);
    final String follow = indent+(last?_spaceStr:_pipeStr);
    buf.write(this.text.replaceAll(_breakStr, _breakStr+follow));
    final int count = this.children.length;
    for (int i = 0; i < count; ++i) {
      buf.write(_breakStr);
      this.children[i]._subString(buf, follow, false, i == count-1);
    }
  }
}
