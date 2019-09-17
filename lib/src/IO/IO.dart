library ThreeDart.IO;

import 'dart:html';
import 'dart:async';

import '../Core/Core.dart' as Core;
import '../Events/Events.dart' as Events;
import '../Shapes/Shapes.dart' as Shapes;
import '../Techniques/Techniques.dart' as Techniques;
import '../Textures/Textures.dart' as Textures;
import '../Math/Math.dart' as Math;

part 'MtlReader.dart';
part 'MtlType.dart';

part 'ObjReader.dart';
part 'ObjType.dart';
part 'ObjWriter.dart';

part 'ProgressEvent.dart';

/// Gets the path without the file name from the given path with a file name.
String getPathTo(String file) {
  int index = file.lastIndexOf("/");
  if (index <= 0) return file;
  return file.substring(0, index);
}

/// Joins add a file name to a path.
String joinPath(String path, String file) {
  return "$path/$file";
}

/// The singleton for the regular expression for taking a single word.
RegExp _slicerRegexSingleton;

/// The regular expression for taking a single word.
RegExp get _slicerRegex {
  _slicerRegexSingleton = new RegExp(r'([^\s]+)');
  return _slicerRegexSingleton;
}

/// Splits the given [line] into the first word and the rest of the line.
List<String> _stripFront(String line) {
  Match match = _slicerRegex.firstMatch(line);
  if (match == null) return [];
  String front = match.group(1);
  String rest = line.substring(front.length).trim();
  return [front, rest];
}

/// Splits the given [line] into words.
List<String> _sliceLine(String line) {
  List<String> list = new List<String>();
  for (Match match in _slicerRegex.allMatches(line)) {
    list.add(match.group(1));
  }
  return list;
}

/// Splits the given [line] into parsed numbers.
List<double> _getNumbers(String line) {
  List<String> parts = _sliceLine(line);
  List<double> values = new List<double>();
  final int count = parts.length;
  for (int i = 0; i < count; ++i)
    values.add(double.parse(parts[i]));
  return values;
}
