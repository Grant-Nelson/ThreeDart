part of ThreeDart.web.common;

/// The handler called when the selection is changed.
typedef void checkSelectedHndl(bool selected);

/// A group of check boxes.
class CheckGroup {
  
  /// The name of the element for the check group.
  String _elemId;
  
  /// Indicates if the group should be kept in the URL.
  bool _keepInURL;

  /// The element to fill with check boxes.
  html.Element _elem;

  /// The list of checkbox elements;
  List<html.CheckboxInputElement> _checks;

  /// Creates a new check box group in the element with the given [elemId] name.
  CheckGroup(this._elemId, [this._keepInURL = true]) {
    this._elem = html.document.getElementById(this._elemId);
    if (this._elem == null) {
      throw "Failed to find $_elemId for CheckGroup";
    }
    this._checks = new List<html.CheckboxInputElement>();
  }

  /// Adds a new check box to this group and the method to call when the check box is changed.
  void add(String text, checkSelectedHndl hndl, [bool checkedByDefault = false]) {
    if (this._elem == null) return;

    bool urlNeedsUpdate = false;
    final int index = this._checks.length;
    String selectedItems = Uri.base.queryParameters[this._elemId];
    bool itemIsChecked;
    if ((selectedItems == null) || (selectedItems.length <= index)) {
      itemIsChecked = checkedByDefault;
      urlNeedsUpdate = true;
    } else {
      itemIsChecked = (selectedItems[index] == '1');
    }

    hndl(itemIsChecked);

    html.LabelElement label = new html.LabelElement()
      ..style.whiteSpace = "nowrap";
    this._elem.children.add(label);
    
    html.CheckboxInputElement checkBox = new html.CheckboxInputElement()
      ..checked = itemIsChecked;
    checkBox.onChange.listen((_) {
        hndl(checkBox.checked);
        this._updateUrl(index, checkBox.checked);
      });
    label.children.add(checkBox);
    
    html.SpanElement span = new html.SpanElement()
      ..text = text;
    label.children.add(span);

    this._elem.children.add(new html.BRElement());

    this._checks.add(checkBox);
    if (urlNeedsUpdate) this._updateUrl(index, itemIsChecked);
  }
  
  /// Updates the URL for changes in the check boxes.
  void _updateUrl(int index, bool checked) {
    if (!this._keepInURL) return;

    String selectedItems = Uri.base.queryParameters[this._elemId] ?? "";
    if (selectedItems.length < index)
      selectedItems = selectedItems.padRight(index - selectedItems.length + 1, "0");

    String result = "";
    if (index > 0) result += selectedItems.substring(0, index);
    result += (checked? "1": "0");
    if (index + 1 < selectedItems.length) result += selectedItems.substring(index+1);

    Uri current = Uri.base;
    Map<String, String> parameters = new Map<String, String>.from(current.queryParameters);
    parameters[this._elemId] = result;

    Uri newUrl = current.replace(queryParameters: parameters);
    html.window.history.replaceState('', '', newUrl.toString());
  }
}
