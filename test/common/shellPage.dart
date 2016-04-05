part of ThreeDart.test.common;

void shellPage(String title, html.Element elem,  bool showTitle, String backImg) {
  html.BodyElement body = html.document.body;
  body.style
    ..backgroundColor = "#FFFFFF"
    ..margin  = "40px"
    ..padding = "0";

  html.DivElement scrollTop = new html.DivElement();
  scrollTop.style
    ..position = "fixed"
    ..width    = "100%"
    ..height   = "100%"
    ..left     = "0px"
    ..top      = "0px"
    ..zIndex   = "-1"
    ..backgroundImage  = "url('$backImg')"
    ..backgroundRepeat = "no-repeat";
  body.append(scrollTop);

  html.DivElement scrollPage = new html.DivElement();
  scrollPage.style
    ..position  = "relative"
    ..textAlign = "center";
  body.append(scrollPage);

  html.DivElement pageCenter = new html.DivElement();
  pageCenter.style
    ..textAlign    = "center"
    ..marginLeft   = "auto"
    ..marginRight  = "auto"
    ..marginTop    = "40px"
    ..marginBottom = "40px"
    ..padding      = "40px"
    ..background   = "rgba(255,255,255,0.8)"
    ..boxShadow    = "3px 3px 4px 2px rgba(0,0,0,0.5)";
  scrollPage.append(pageCenter);

  if (title.length > 0) {
    html.document.title = title;
    if (showTitle) {
      html.DivElement titleElem = new html.DivElement();
      titleElem.text = title;
      titleElem.style
        ..textAlign     = "center"
        ..paddingBottom = "40px"
        ..color         = "#222"
        ..textShadow    = "0px 2px 3px #555555"
        ..font          = "30px Tahoma, Helvetica, Arial, Sans-Serif";
      pageCenter.append(titleElem);
    }
  }

  if (elem != null) {
    html.DivElement elemContainer = new html.DivElement();
    pageCenter.append(elemContainer);

    elemContainer.append(elem);

    html.DivElement endPage = new html.DivElement();
    endPage.style
      ..display = "block"
      ..clear   = "both";
    elemContainer.append(endPage);
  }

  html.document.onScroll.listen((_) {
  	scrollTop.style.top = "${-0.05*body.scrollTop}px";
  });
}

void shellTest(String title, List<String> ctrlBoxes, String comment) {
  html.DivElement elem = new html.DivElement();
  elem.style
      ..textAlign   = "center"
      ..marginLeft  = "auto"
      ..marginRight = "auto";

  html.TableElement table = new html.TableElement();
  table.style
    ..padding = "0px"
    ..marginLeft  = "auto"
    ..marginRight = "auto";
  elem.append(table);

  html.TableRowElement tableRow = table.addRow();

  html.CanvasElement canvas = new html.CanvasElement()
    ..id = "threeDart"
    ..style.width = "600px"
    ..style.height = "600px";
  html.TableCellElement cell = tableRow.addCell();
  cell.style
      ..textAlign   = "center"
      ..marginLeft  = "auto"
      ..marginRight = "auto";
  cell.append(canvas);

  for (int i = 0; i < ctrlBoxes.length; i++) {
    html.DivElement ctrlBlock = new html.DivElement()
      ..id = ctrlBoxes[i]
      ..style.textAlign = "left"
      ..style.verticalAlign = "top";
    html.TableCellElement cell = tableRow.addCell();
    cell.style
        ..textAlign     = "center"
        ..verticalAlign = "top"
        ..marginLeft    = "auto"
        ..marginRight   = "auto";
    cell.append(ctrlBlock);
  }

  if (comment.length > 0) {
    html.DivElement cmt = new html.DivElement()
      ..text = comment;
    elem.append(cmt);
  }

  shellPage(title, elem, false, "../resources/SnowTop.png");
}
