part of ThreeDart.test.test000;

/// The method handler for unit-tests.
/// [args] are provided to call-back the status of the test.
typedef void TestHandler(TestArgs args);

/// The interface for the unit-test to callback with.
abstract class TestArgs {

  /// The title of the unit-test.
  String get title;
  set title(String title);

  /// Indicates if the test has failed.
  bool get failed;

  /// Marks this test as failed.
  void fail();

  /// Prints text to the test's output console.
  void print(String text);
}

/// The block for the unit-test output and the test arguments.
class TestBlock extends TestArgs {
  TestManager _man;
  html.DivElement _body;
  html.DivElement _title;
  DateTime _start;
  DateTime _end;
  TestHandler _test;
  String _testName;
  bool _started;
  bool _failed;
  bool _finished;

  /// Creates a new test block for the given test.
  TestBlock(this._man, this._test, this._testName) {
      this._body = new html.DivElement()
        ..className = "test_body body_hidden";
      this._title = new html.DivElement()
        ..className = "running topHeader"
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
      if (end == null) end = new DateTime.now();
      time = ((end.difference(this._start).inMilliseconds)*0.001).toStringAsFixed(2);
      time ="(${time}s)";
    }
    if (!this._started) {
      this._title
        ..className = "testHeader queued"
        ..text = "Queued: ${this._testName} ${time}";
    } else if (this._failed) {
      this._title
        ..className = "testHeader failed"
        ..text = "Failed: ${this._testName} ${time}";
    } else if (this._finished) {
      this._title
        ..className = "testHeader passed"
        ..text = "Passed: ${this._testName} ${time}";
    } else {
      this._title
        ..className = "testHeader running"
        ..text = "Running: ${this._testName} ${time}";
    }
    this._man._update();
  }

  /// Runs this test asynchronously in the event loop.
  void run() {
    new async.Future(() {
      this._started = true;
      this._update();
      html.window.requestAnimationFrame((_) { });
    }).then((_){
      this._start = new DateTime.now();
      this._test(this);
      this._end = new DateTime.now();
    }).catchError((err) {
      this._end = new DateTime.now();
      this.print("\nException: $err");
      this.fail();
    }).then((_){
      this._finished = true;
      this._man._testDone(this);
      this._update();
      html.window.requestAnimationFrame((_) { });
    });
  }

  /// Prints text to the test's output console.
  void print(String text) {
    this._body.innerHtml = this._body.innerHtml +
      text.replaceAll(" ", "&nbsp;").replaceAll("\n", "<br>");
  }

  /// The title of the unit-test.
  String get title => this._testName;
  set title(String title) {
    this._testName = title;
    this._update();
  }

  bool get stated => this._started;
  bool get finished => this._finished;

  /// Indicates if the test has failed.
  bool get failed => this._failed;

  /// Marks this test as failed.
  void fail() {
    if (!this._failed) {
      this._failed = true;
      this._update();
    }
  }
}

/// The manager to run the tests.
class TestManager {
    html.Element _elem;
    html.DivElement _header;
    DateTime _start;
    List<TestBlock> _tests;
    int _finished;
    int _failed;

    /// Creates a new test manager attached to the element with the given [id].
    factory TestManager.byId(id) {
      html.Element elem = html.document.getElementById(id);
      return new TestManager(elem);
    }

    /// Creates new test manager attached to the given element.
    TestManager(this._elem) {
      this._header = new html.DivElement();
      this._elem.children.add(this._header);
      this._start = new DateTime.now();
      this._tests = new List<TestBlock>();
      this._finished = 0;
      this._failed = 0;
    }

    /// Callback from a test to indicate it is done
    /// and to have the manager start a new test.
    void _testDone(TestBlock block) {
      this._finished++;
      if (block.failed) this._failed++;
      this._update();
      if (this._finished < this._tests.length) {
        new async.Future(() {
          html.window.requestAnimationFrame((_) { });
          this._tests[this._finished].run();
        });
      }
    }

    /// Updates the top header of the tests.
    void _update() {
      String time = ((new DateTime.now().difference(this._start).inMilliseconds)*0.001).toStringAsFixed(2);
      int testCount = this._tests.length;
      if (testCount <= this._finished) {
        if (this._failed > 0) {
          this._header
            ..text = "Failed ${this._failed}s Tests (${time}s)"
            ..className = "topHeader failed";
        } else {
          this._header
            ..text = "Tests Passed (${time}s)"
            ..className = "topHeader passed";
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
    void add(TestHandler test, [String testName = ""]) {
      if (testName.length <= 0) testName = "$test";
      this._tests.add(new TestBlock(this, test, testName));
      this._update();

      // If currently none are running, start this one.
      if (this._finished + 1 == this._tests.length) {
        new async.Future(() {
          html.window.requestAnimationFrame((_) { });
          this._tests[this._finished].run();
        });
      }
    }
}
