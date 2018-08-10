part of ThreeDart.test.common;

typedef void radioSelectedHndl();

class RadioGroup {
  String _elemId;
  html.Element _elem;

  RadioGroup(String this._elemId) {
    this._elem = html.document.getElementById(this._elemId);
  }

  String get selectedItem => Uri.base.queryParameters['$_elemId'];

  void add(String text, radioSelectedHndl hndl, [bool selectedByDefault = false]) {
    // When adding buttons, check the URL to see if the button added should be the selected one.
    bool itemIsChecked = false;
    if (selectedItem == null) {
      if (selectedByDefault) {
        itemIsChecked = true;
        hndl();
        updateUrlWithRadioButtonInfo(text);
      }
    } else if (selectedItem == text) {
      itemIsChecked = true;
      hndl();
    }

    html.LabelElement label = new html.LabelElement()..style.whiteSpace = "nowrap";
    this._elem.children.add(label);
    html.RadioButtonInputElement checkBox = new html.RadioButtonInputElement()
      ..checked = itemIsChecked
      ..name = this._elemId;
    checkBox.onChange.listen((_) {
      if (checkBox.checked) {
        updateUrlWithRadioButtonInfo(text);
        hndl();
      }
    });
    label.children.add(checkBox);
    html.SpanElement span = new html.SpanElement()..text = text;
    label.children.add(span);
    this._elem.children.add(new html.BRElement());
  }

  updateUrlWithRadioButtonInfo(text) {
    Uri current = Uri.base;
    Map<String, String> parameters = new Map<String, String>.from(current.queryParameters);
    parameters['$_elemId'] = text;

    Uri newUrl = current.replace(queryParameters: parameters);
    html.window.history.replaceState('', '', newUrl.toString());
  }
}
