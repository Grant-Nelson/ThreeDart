// Copyright (c) 2015-2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.IO;

import 'dart:html';
import 'dart:async';

import '../Core/Core.dart' as Core;
import '../Shapes/Shapes.dart' as Shapes;
import '../Techniques/Techniques.dart' as Techniques;
import '../Textures/Textures.dart' as Textures;
import '../Math/Math.dart' as Math;

part 'MtlLoader.dart';
part 'ObjLoader.dart';

// Try loading some of these
// .3dm, .3ds, .blend, .c4d, .dae, .dds,
// .fbx, .lwo, .ma, .max, .mb, .tga, .ztl

String getPathTo(String file) {
  int index = file.lastIndexOf("/");
  if (index <= 0) return file;
  return file.substring(0, index);
}

String joinPath(String path, String file) {
  return "$path/$file";
}
