part of ThreeDart.Debug;

/// Logger is an interface used for logging some information about the system.
/// This is used for unit-testing and validation.
abstract class Logger {

  /// Indicates if an error occurred.
  bool get failed;

  /// Prints text to the log's output console as an information.
  void info(String text);

  /// Prints text to the log's output console as a notice.
  void notice(String text);

  /// Prints text to the log's output console as a warning.
  void warning(String text);

  /// Prints text to the log's output console as an error.
  /// This will also mark this test as a failure.
  void error(String text);
}

/// DefaultLogger writes the output to the console.
class DefaultLogger implements Logger {
  bool _failed = false;

  /// Creates a new console logger.
  DefaultLogger();

  /// Indicates if an error occurred.
  bool get failed => this._failed;

  /// Prints text to the log's output console as an information.
  void info(String text) => print(text);

  /// Prints text to the log's output console as a notice.
  void notice(String text) => print(text);

  /// Prints text to the log's output console as a warning.
  void warning(String text) => print(text);

  /// Prints text to the log's output console as an error.
  /// This will also mark this test as a failure.
  void error(String text) {
    print(text);
    this._failed = true;
  }
}
