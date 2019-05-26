part of ThreeDart.web.common;

/// The handler called when a button is clicked.
typedef void buttonClickedHndl();

/// A group of buttons.
class ButtonGroup {

  /// The name of the element for the button group.
  String _elemId;

  /// The element to fill with buttons.
  html.Element _elem;

  /// The list of button elements;
  List<html.ButtonElement> _buttons;

  /// Creates a new button group in the element with the given [elemId] name.
  ButtonGroup(this._elemId) {
    this._elem = html.document.getElementById(this._elemId);
    if (this._elem == null) {
      throw "Failed to find $_elemId for ButtonGroup";
    }
    this._buttons = new List<html.ButtonElement>();
  }

  /// Adds a new button to this group and the method to call when the button is clicked.
  void add(String innerHtml, buttonClickedHndl hndl) {
    if (this._elem == null) return;

    html.ButtonElement button = new html.ButtonElement()
      ..style.whiteSpace = "nowrap"
      ..innerHtml = innerHtml
      ..onClick.listen((_) => hndl());

    this._elem.children.add(button);
    this._elem.children.add(new html.BRElement());

    this._buttons.add(button);
  }
}
