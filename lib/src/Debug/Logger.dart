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
