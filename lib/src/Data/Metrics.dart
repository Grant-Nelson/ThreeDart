part of ThreeDart.Data;

/// This is a collector of labelled data which can be used to plot specific results
/// if needed to debug or track some kind of information. Not recommended for large
/// amounts of data but for a reasonable amount of data.
class Metrics {
  bool _enabled;
  List<String> _titles;
  List<List<double>> _data;

  /// Creates a new simple metrics collector.
  Metrics([bool enabled = false]) {
    this._enabled = enabled;
    this._titles = new List<String>();
    this._data = new List<List<double>>();
  }

  /// Clears all the data in this metrics collector.
  void clear() {
    this._titles = new List<String>();
    this._data = new List<List<double>>();
  }

  /// Enables or disables collection.
  bool get enabled => this._enabled;
  set enabled(bool value) => this._enabled = value;

  /// Indicates if the metrics are empty or not.
  bool get empty => this._data.length <= 0;
  
  /// Gets the number of named entries in the metrics.
  int get entryCount => this._data.length;

  /// Gets the number of frames in the metrics.
  int get frameCount =>
    (this._data.length < 1)? 0: this._data[0].length;

  /// Adds a new frame to the collection.
  void stepFrame() {
    for (List<double> data in this._data)
      data.add(0.0);
  }

  /// Gets the entry in the data for the given name.
  List<double> _getData(String name) {
    int index = this._titles.indexOf(name);
    if (index >= 0) return this._data[index];

    this._titles.add(name);
    List<double> data = new List<double>();
    int count = this.frameCount;
    if (count <= 0) count = 1;
    for (int i = count;  i >= 0; i--)
      data.add(0.0);
    this._data.add(data);
    return data;
  }

  /// Sets the value to the given name in the current frame.
  void setVal(String name, num value) {
    if (!this._enabled) return;
    this._getData(name).last = (value?.toDouble() ?? 0.0);
  }

  /// Adds the given value to the current value for the given name in the current frame.
  void addVal(String name, num diff) {
    if (!this._enabled) return;
    this._getData(name).last += (diff?.toDouble() ?? 0.0);
  }

  /// Gets the string output of the data in a CSV format.
  @override
  String toString() {
    int width = this._data.length;
    if (width <= 0) return "";
    String result = this._titles.join(", ");
    int count = this._data[0].length;
    for (int i = 0; i < count; i++) {
      List<String> parts = new List<String>.filled(width, "");
      for (int j = 0; j < width; j++) {
        parts[j] = this._data[j][i].toString();
      }
      result += "\n"+parts.join(", ");
    }
    return result;
  }
}
