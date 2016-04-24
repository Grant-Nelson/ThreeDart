// Copyright (c) 2015-2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.Shaders;

import 'dart:web_gl' as WebGL;
import 'dart:typed_data' as Typed;

import '../Textures/Textures.dart' as Textures;
import '../Math/Math.dart' as Math;
import '../Core/Core.dart' as Core;
import '../Lights/Lights.dart' as Lights;

// Shader Components
part 'Attributes.dart';
part 'Shader.dart';
part 'Uniforms.dart';

// Implemented Shaders
part 'Depth.dart';
part 'Inspection.dart';
part 'MaterialLight.dart';
part 'MaterialLightConfig.dart';
part 'Skybox.dart';

/// Inserts a number for each line in the given [text].
String numberLines(String text) {
  List<String> lines = text.split("\n");
  for (int i = 0; i < lines.length; i++) {
    lines[i] = "${i+1}  ${lines[i]}";
  }
  return lines.join("\n");
}
