part of ThreeDart.Core;

/// This is the type of the browser this code is running on.
enum Browser {

  /// This indicates the browser type is Google's Chrome.
  chrome,

  /// This indicates the browser is Mozilla's Firefox.
  firefox,

  /// This indicates the browser is Microsoft's Edge or IE.
  edge,
  
  /// This indicates the browser is some other browser. 
  other
}

/// This is the type of the operating system this code is running on.
enum OperatingSystem {

  /// This indicates the operating system is Windows.
  windows,

  /// This indicates the operating system is MacOS.
  mac,

  /// This indicates the operating system is Linux.
  linux,

  /// This indicates the operating system is some other OS.
  other
}

/// A static class for getting information about the environment this code is running in.
/// Try to limit usage of the Environment so that all features work the same in all
/// scenarios. This is designed to be used to adjust for problems in the environment
/// which makes the code function differently.
class Environment {
  static _EnvironmentData? _singleton = null;
  Environment._();
  
  /// Gets the lazy created singleton with the environment data.
  static _EnvironmentData get _env =>
    _singleton ??= new _EnvironmentData();

  /// Gets the browser that this code is running on.
  static Browser get browser => _env.browser;

  /// Gets the operating system that this code is running on.
  static OperatingSystem get os => _env.os;
}

/// This is storage for environment information.
/// This is part of a singleton so it is only created once.
class _EnvironmentData {
  final Browser browser;
  final OperatingSystem os;

  /// Creates a new environment with the given data.
  _EnvironmentData._(this.browser, this.os);

  /// Determines the environment which this code is running in.
  factory _EnvironmentData() {
    Browser browser = _determineBrowser();
    OperatingSystem os = _determineOS();
    return new _EnvironmentData._(browser, os);
  }
  
  /// Determines which kind of browser is being used.
  static Browser _determineBrowser() {
    final String vendor = html.window.navigator.vendor;
    if (vendor.contains('Google'))
      return Browser.chrome;
    
    final String userAgent = html.window.navigator.userAgent;
    if (userAgent.contains('Firefox'))
      return Browser.firefox;

    final String appVersion = html.window.navigator.appVersion;
    if (appVersion.contains('Trident') || appVersion.contains('Edge'))
      return Browser.edge;

    final String appName = html.window.navigator.appName;
    if (appName.contains('Microsoft'))
      return Browser.edge;

    return Browser.other;
  }

  /// Determines which kind of operating system is being used.
  /// This doesn't use `dart:io` so it can run on a browser.
  static OperatingSystem _determineOS() {
    final String appVersion = html.window.navigator.appVersion;

    if (appVersion.contains('Win'))
      return OperatingSystem.windows;

    if (appVersion.contains('Mac'))
      return OperatingSystem.mac;

    if (appVersion.contains('Linux'))
      return OperatingSystem.linux;

    return OperatingSystem.other;
  }
}
