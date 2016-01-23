// Copyright (c) 2015-2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.Math;

import 'dart:math' as math;

part 'Color3.dart';
part 'Color4.dart';
part 'Comparer.dart';
part 'Matrix2.dart';
part 'Matrix3.dart';
part 'Matrix4.dart';
part 'MatrixStack.dart';
part 'Point2.dart';
part 'Point3.dart';
part 'Point4.dart';
part 'Quaternion.dart';
part 'Vector2.dart';
part 'Vector3.dart';
part 'Vector4.dart';

/// Gets the linear interpolation between the two given doubles.
///
/// The [i] is interpolation factor. 0.0 or less will return [a].
/// 1.0 or more will return the [b]. Between 0.0 and 1.0 will be
/// a scaled mixure of the two given doubles.
double lerpVal(double a, double b, double i) =>
  a + i * (b - a);

/// Gets the clamped value.
///
/// If [v] is less than the [min] then the [min] is returned.
/// If [v] is greater than the [max] then the [max] is returned.
/// Otherwise [v] is returned unchanged.
double clampVal(double v, [double min = 0.0, double max = 1.0]) =>
  (v < min) ? min : (v > max) ? max : v;

/// Gets the wrapped value.
///
/// If [v] is out of the [min] and [max] range,
/// [v] will we wrapped until inside the range.
double wrapVal(double v, [double min = 0.0, double max = 1.0]) {
  final double w = max - min;
  v = (v - min) % w;
  if (v < 0.0) v += w;
  return v + min;
}

/// Determines the difference between the two times in seconds.
///
/// [a] is the older time and [b] is the newer time.
double diffInSecs(DateTime a, DateTime b) {
  return  b.difference(a).inMicroseconds*1.0e-6;
}

/// Formats the given double value into a string.
///
/// [v] is the number to get a string for.
/// [whole] is the padding to put to the left of the decimal point.
/// [fraction] is the length of the fractional part.
String formatDouble(double v, [int whole = 1, int fraction = 3]) {
  if (Comparer.currentEquality(v, 0.0)) {
    return (' '+(0.0).toStringAsFixed(fraction)).padLeft(whole+fraction+2);
  } else if (v < 0.0) {
    return (v.toStringAsFixed(fraction)).padLeft(whole+fraction+2);
  } else {
    return (' '+v.toStringAsFixed(fraction)).padLeft(whole+fraction+2);
  }
}

/// Formats the given integer into a string.
///
/// [v] is the number to get a string for.
/// [whole] is the padding to put to the left of the number.
String formatInt(int v, [int whole = 3]) {
  if (v < 0.0) {
    return v.toString().padLeft(whole);
  } else {
    return (' '+v.toString()).padLeft(whole);
  }
}
