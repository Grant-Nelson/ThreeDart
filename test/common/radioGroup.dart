part of ThreeDart.test.common;

typedef void radioSelectedHndl();

class RadioGroup {

  html.Element _elem;

  RadioGroup(String elemId) {
    this._elem = html.document.getElementById(elemId);
  }

  void add(String text, radioSelectedHndl hndl, [bool selected = false]) {
    if (selected) hndl();
    html.LabelElement label = new html.LabelElement()
      ..style.whiteSpace = "nowrap";
    this._elem.children.add(label);
    html.RadioButtonInputElement checkBox = new html.RadioButtonInputElement()
      ..checked = selected
      ..name = "shape";
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
