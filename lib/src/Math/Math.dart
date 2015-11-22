// Copyright (c) 2015, SnowGremlin. All rights reserved. Use of this source code
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
double lerpVal(double a, double b, double i) => a + i * (b - a);

/// Gets the clamped value.
///
/// If [v] is less than 0.0 then 0.0 is returned.
/// If [v] is greater than 1.0 then 1.0 is returned.
/// Otherwise [v] is returned unchanged.
double clampVal(double v) => (v < 0.0) ? 0.0 : (v > 1.0) ? 1.0 : v;

/// Formats the given double value into a string.
///
/// [v] is the number to get a string for.
/// [whole] is the padding to put to the left of the decimal point.
/// [fraction] is the length of the fractional part.
String formatDouble(double v, [int whole = 1, int fraction = 4]) {
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
