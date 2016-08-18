// Copyright (c) 2015-2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.Shaders;

import 'dart:web_gl' as WebGL;
import 'dart:typed_data' as Typed;

import '../Textures/Textures.dart' as Textures;
import '../Math/Math.dart' as Math;
import '../Core/Core.dart' as Core;
import '../Data/Data.dart' as Data;

// Shader Components
part 'Attributes.dart';
part 'Shader.dart';
part 'Uniforms.dart';

// Implemented Shaders
part 'Depth.dart';
part 'Distort.dart';
part 'GaussianBlur.dart';
part 'Inspection.dart';
part 'MaterialLight.dart';
part 'MaterialLightConfig.dart';
part 'MaterialLightUniforms.dart';
part 'Normal.dart';
part 'NormalConfig.dart';
part 'Skybox.dart';
part 'TextureLayout.dart';

/// Source of colors type for different shader components.
enum ColorSourceType {

  /// No color source, meaning component isn't being used.
  None,

  /// Solid color source or a scalar on the component.
  Solid,

  /// The 2D texture color source.
  Texture2D,

  /// The cube texture color source.
  TextureCube
}

/// Gets the string to indicate a source type used for the name of the material light.
String stringForComponentType(ColorSourceType type) {
  switch (type) {
    case ColorSourceType.None:        return "0";
    case ColorSourceType.Solid:       return "1";
    case ColorSourceType.Texture2D:   return "2";
    case ColorSourceType.TextureCube: return "3";
  }
}

/// Inserts a number for each line in the given [text].
String numberLines(String text) {
  List<String> lines = text.split("\n");
  for (int i = 0; i < lines.length; i++) {
    lines[i] = "${i+1}  ${lines[i]}";
  }
  return lines.join("\n");
}
