part of ThreeDart.test.common;

typedef void texture2DSelectedHndl(String fileName);

class Texture2DGroup {

  html.Element _elem;
  texture2DSelectedHndl _hndl;

  Texture2DGroup(String elemId, texture2DSelectedHndl this._hndl) {
    this._elem = html.document.getElementById(elemId);
  }

  void add(String fileName, [bool checked = false]) {
    html.ImageElement imgElem = new html.ImageElement()
      ..src = fileName
      ..width = 64
      ..height = 64
      ..style.border = "solid 2px white";
    imgElem.onClick.listen((_) {
        this._elem.children.forEach((html.Element elem) {
          if (elem is html.ImageElement)
            elem.style.border = "solid 2px white";
        });
        imgElem.style.border = "solid 2px black";
        this._hndl(fileName);
      });
    this._elem.children.add(imgElem);
    this._elem.children.add(new html.BRElement());
    if (checked) imgElem.click();
  }
}
