part of ThreeDart.test.common;

typedef void radioSelectedHndl();

class RadioGroup {

  String _elemId;
  html.Element _elem;

  RadioGroup(String this._elemId) {
    this._elem = html.document.getElementById(this._elemId);
  }

  void add(String text, radioSelectedHndl hndl, [bool selected = false]) {
    if (selected) hndl();
    html.LabelElement label = new html.LabelElement()
      ..style.whiteSpace = "nowrap";
    this._elem.children.add(label);
    html.RadioButtonInputElement checkBox = new html.RadioButtonInputElement()
      ..checked = selected
      ..name = this._elemId;
    checkBox.onChange.listen((_) {
        if (checkBox.checked) hndl();
      });
    label.children.add(checkBox);
    html.SpanElement span = new html.SpanElement()
      ..text = text;
    label.children.add(span);
    this._elem.children.add(new html.BRElement());
  }
}
