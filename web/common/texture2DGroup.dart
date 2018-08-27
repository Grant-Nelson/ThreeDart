part of ThreeDart.web.common;

typedef void texture2DSelectedHndl(String fileName);

/// A radio button group for selecting a texture.
class Texture2DGroup {

  /// The name of the element for the radio button group.
  String _elemId;

  /// Indicates if the group should be kept in the URL.
  bool _keepInURL;

  /// The element to fill with radio buttons.
  html.Element _elem;

  /// The handler to change the selected texture.
  texture2DSelectedHndl _hndl;

  /// Creates a new radio button group for selecting a texture.
  Texture2DGroup(this._elemId, texture2DSelectedHndl this._hndl, [this._keepInURL = true]) {
    this._elem = html.document.getElementById(this._elemId);
    if (this._elem == null) {
      throw "Failed to find $_elemId for Texture2DGroup";
    }
  }

  /// Adds a new texture radio button.
  void add(String fileName, [bool checkedByDefault = false]) {
    html.ImageElement imgElem = new html.ImageElement()
      ..src = fileName
      ..width = 64
      ..height = 64
      ..style.border = "solid 2px white";

    final int index = this._elem.children.length;
    imgElem.onClick.listen((_) {
        this._elem.children.forEach((html.Element elem) {
          if (elem is html.ImageElement)
            elem.style.border = "solid 2px white";
        });
        imgElem.style.border = "solid 2px black";

        this._hndl(fileName);
        this._updateUrl(index);
      });

    this._elem.children.add(imgElem);
    this._elem.children.add(new html.BRElement());

    bool itemIsChecked = false;
    String urlText = Uri.base.queryParameters['$_elemId'];
    if (urlText == null) {
      itemIsChecked = checkedByDefault;
      this._updateUrl(index);
    } else {
      int selectedIndex = int.parse(urlText);
      itemIsChecked = (selectedIndex == index);
    }

    if (itemIsChecked) imgElem.click();
  }
  
  /// Updates the URL for changes in the radio group.
  void _updateUrl(int index) {
    if (!this._keepInURL) return;

    Uri current = Uri.base;
    Map<String, String> parameters = new Map<String, String>.from(current.queryParameters);
    parameters[this._elemId] = '$index';

    Uri newUrl = current.replace(queryParameters: parameters);
    html.window.history.replaceState('', '', newUrl.toString());
  }
}
