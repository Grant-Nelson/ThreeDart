part of ThreeDart.web.common;

/// The handler called when a button is clicked.
typedef void buttonClickedHndl();

/// A group of buttons.
class ButtonGroup {

  /// The element to fill with buttons.
  html.Element _elem;

  /// The list of button elements;
  List<html.ButtonElement> _buttons = [];

  ButtonGroup._(this._elem);

  /// Creates a new button group in the element with the given [elemId] name.
  factory ButtonGroup(String elemId) {
    html.Element? elem = html.document.getElementById(elemId);
    if (elem == null)
      throw 'Failed to find $elemId for ButtonGroup';
    return new ButtonGroup._(elem);
  }

  /// Adds a new button to this group and the method to call when the button is clicked.
  void add(String innerHtml, buttonClickedHndl hndl) {
    html.ButtonElement button = new html.ButtonElement()
      ..style.whiteSpace = 'nowrap'
      ..innerHtml = innerHtml
      ..onClick.listen((_) => hndl());

    this._elem.children.add(button);
    this._elem.children.add(new html.BRElement());

    this._buttons.add(button);
  }
}
