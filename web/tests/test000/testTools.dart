part of ThreeDart.test.test000;

/// The method handler for unit-tests.
/// [args] are provided to call-back the status of the test.
typedef void TestHandler(TestArgs args);

/// The interface for the unit-test to callback with.
abstract class TestArgs extends Debug.Logger{

  /// The title of the unit-test.
  String get title;
  set title(String title);

  /// Marks this test as failed.
  void fail();
}

/// The block for the unit-test output and the test arguments.
class TestBlock implements TestArgs {
  TestManager _man;
  html.DivElement _body;
  html.DivElement _title;
  DateTime _start;
  DateTime _end;
  TestHandler _test;
  String _testName;
  bool _skip;
  bool _started;
  bool _failed;
  bool _finished;

  /// Creates a new test block for the given test.
  TestBlock(this._man, this._skip, this._test, this._testName) {
      this._body = new html.DivElement()
        ..className = "test_body body_hidden";
      this._title = new html.DivElement()
        ..className = "running top_header"
        ..onClick.listen(this._titleClicked);
      this._man._elem.children
        ..add(this._title)
        ..add(this._body);
      this._start = null;
      this._end = null;
      this._started = false;
      this._failed = false;
      this._finished = false;
      this._update();
  }

  /// Handles the test title clicked to show and hide the test output.
  void _titleClicked(_) {
    if (this._body.className != "test_body body_hidden")
      this._body.className = "test_body body_hidden";
    else this._body.className = "test_body body_shown";
  }

  /// Updates the test header.
  void _update() {
    String time = "";
    if (this._start != null) {
      DateTime end = this._end;
      end ??= new DateTime.now();
      time = ((end.difference(this._start).inMilliseconds)*0.001).toStringAsFixed(2);
      time ="(${time}s)";
    }
    if (this._skip) {
      this._title
        ..className = "test_header skipped"
        ..text = "Skipped: ${this._testName}";
    } else if (!this._started) {
      this._title
        ..className = "test_header queued"
        ..text = "Queued: ${this._testName} ${time}";
    } else if (this._failed) {
      this._title
        ..className = "test_header failed"
        ..text = "Failed: ${this._testName} ${time}";
    } else if (this._finished) {
      this._title
        ..className = "test_header passed"
        ..text = "Passed: ${this._testName} ${time}";
    } else {
      this._title
        ..className = "test_header running"
        ..text = "Running: ${this._testName} ${time}";
    }
    this._man._update();
  }

  /// Runs this test asynchronously in the event loop.
  void run() {
    new asy.Future(() {
      this._started = true;
      this._update();
    }).then((_){
      this._start = new DateTime.now();
      if (!this._skip) this._test(this);
      this._end = new DateTime.now();
    }).catchError((exception, stackTrace) {
      this._end = new DateTime.now();
      this.error("\nException: $exception");
      this.warning("\nStack: $stackTrace");
    }).then((_){
      this._finished = true;
      this._man._testDone(this);
      this._update();
    });
  }

  /// Adds a log to the output area of the test.
  void _addLog(String text, String type) {
    String log = this._man._escape.convert(text)
      .replaceAll(" ", "&nbsp;")
      .replaceAll("\n", "</dir><br class=\"$type\"><dir class=\"$type\">");
    this._body.innerHtml += "<dir class=\"$type\">$log</dir>";
  }

  /// Prints text to the test's output console as an information.
  void info(String text) {
    this._addLog(text, "info_log");
  }

  /// Prints text to the test's output console as a notice.
  void notice(String text) {
    this._addLog(text, "notice_log");
  }

  /// Prints text to the test's output console as a warning.
  void warning(String text) {
    this._addLog(text, "warning_log");
  }

  /// Prints text to the test's output console as an error.
  /// This will also mark this test as a failure.
  void error(String text) {
    this._addLog(text, "error_log");
    this.fail();
  }

  /// The title of the unit-test.
  String get title => this._testName;
  set title(String title) {
    this._testName = title;
    this._update();
  }

  /// Indicates if the test has been stated.
  bool get stated => this._started;

  /// Indicates if the test has been finished.
  bool get finished => this._finished;

  /// Indicates if the test has failed.
  bool get failed => this._failed;

  /// Indicates if the test has been or is to be skipped.
  bool get skipped => this._skip;

  /// Marks this test as failed.
  void fail() {
    if (!this._failed) {
      this._failed = true;
      this._body.className = "test_body body_shown";
      this._update();
    }
  }
}

/// The manager to run the tests.
class TestManager {
    html.Element _elem;
    html.DivElement _header;
    convert.HtmlEscape _escape;
    DateTime _start;
    List<TestBlock> _tests;
    int _finished;
    int _failed;
    String _prefix;

    /// Creates new test manager attached to the given element.
    TestManager(this._elem) {
      this._escape = new convert.HtmlEscape(convert.HtmlEscapeMode.element);
      this._header = new html.DivElement();
      this._elem.children.add(this._header);
      html.DivElement checkBoxes = new html.DivElement()
        ..className = "log_checkboxes";
      this._createLogSwitch(checkBoxes, "Information", "info_log");
      this._createLogSwitch(checkBoxes, "Notice", "notice_log");
      this._createLogSwitch(checkBoxes, "Warning", "warning_log");
      this._createLogSwitch(checkBoxes, "Error", "error_log");
      this._elem.children.add(checkBoxes);
      this._start = new DateTime.now();
      this._tests = new List<TestBlock>();
      this._finished = 0;
      this._failed = 0;
      this._prefix = "";
    }

    /// The filter to only let tests with the given prefix to be run.
    /// Set to empty to run all tests.
    String get testPrefixFilter => this._prefix;
    set testPrefixFilter(String prefix) => this._prefix = prefix;

    /// Creates a check box for changing the visibility of logs with the given [type].
    void _createLogSwitch(html.DivElement checkBoxes, String text, String type) {
      html.CheckboxInputElement checkBox = new html.CheckboxInputElement()
        ..className = "log_checkbox"
        ..checked = true;
      checkBox.onChange.listen((_) {
          html.ElementList<html.Element> myElements = html.document.querySelectorAll(".$type");
          String display = checkBox.checked? "block": "none";
          for (int i = 0; i < myElements.length; i++) {
              myElements[i].style.display = display;
          }
        });
      checkBoxes.children.add(checkBox);
      html.SpanElement span = new html.SpanElement()
        ..text = text;
      checkBoxes.children.add(span);
    }

    /// Callback from a test to indicate it is done
    /// and to have the manager start a new test.
    void _testDone(TestBlock block) {
      this._finished++;
      if (block.failed) this._failed++;
      this._update();
      if (this._finished < this._tests.length) {
        asy.Timer.run(this._tests[this._finished].run);
      }
    }

    /// Updates the top header of the tests.
    void _update() {
      String time = ((new DateTime.now().difference(this._start).inMilliseconds)*0.001).toStringAsFixed(2);
      int testCount = this._tests.length;
      if (testCount <= this._finished) {
        if (this._failed > 0) {
          this._header.className = "top_header failed";
          if (this._failed == 1)
            this._header.text = "Failed 1 Test (${time}s)";
          else this._header.text = "Failed ${this._failed} Tests (${time}s)";
        } else {
          this._header
            ..text = "Tests Passed (${time}s)"
            ..className = "top_header passed";
        }
      } else {
        String prec = ((this._finished.toDouble()/testCount)*100.0).toStringAsFixed(2);
        this._header.text = "Running Tests: ${this._finished}/${testCount} ($prec%)";
        if (this._failed > 0) {
          this._header
            ..text = "${this._header.text} - ${this._failed} failed)"
            ..className = "topHeader failed";
        } else {
          this._header.className = "topHeader running";
        }
      }
    }

    /// Adds a new test to be run.
    void add(String testName, TestHandler test, {bool skip = false}) {
      if (testName.length <= 0) testName = "$test";
      if (!testName.startsWith(this._prefix)) return;
      this._tests.add(new TestBlock(this, skip, test, testName));
      this._update();

      // If currently none are running, start this one.
      if (this._finished + 1 == this._tests.length) {
        asy.Timer.run(this._tests[this._finished].run);
      }
    }
}
