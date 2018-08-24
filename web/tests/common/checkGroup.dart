part of ThreeDart.test.common;

typedef void checkSelecutedHndl(bool selected);

class CheckGroup {

  html.Element _elem;

  CheckGroup(String elemId) {
    this._elem = html.document.getElementById(elemId);
    if (this._elem == null) {
      throw "Failed to find $elemId for CheckGroup";
    }
  }

  void add(String text, checkSelecutedHndl hndl, [bool checked = false]) {
    if (this._elem == null) return;
    hndl(checked);
    html.LabelElement label = new html.LabelElement()
      ..style.whiteSpace = "nowrap";
    this._elem.children.add(label);
    html.CheckboxInputElement checkBox = new html.CheckboxInputElement()
      ..checked = checked;
    checkBox.onChange.listen((_) {
        hndl(checkBox.checked);
      });
    label.children.add(checkBox);
    html.SpanElement span = new html.SpanElement()
      ..text = text;
    label.children.add(span);
    this._elem.children.add(new html.BRElement());
  }
}
