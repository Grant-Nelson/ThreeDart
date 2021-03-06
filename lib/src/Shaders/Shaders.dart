library ThreeDart.Shaders;

import 'dart:web_gl' as WebGL;
import 'dart:typed_data' as Typed;

import '../Textures/Textures.dart' as Textures;
import '../Math/Math.dart' as Math;
import '../Core/Core.dart' as Core;
import '../Data/Data.dart' as Data;

// Shader Components
part 'Attributes.dart';
part 'ColorSourceType.dart';
part 'Shader.dart';
part 'Uniforms.dart';

// Implemented Shaders
part 'Depth.dart';
part 'Distort.dart';
part 'GaussianBlur.dart';
part 'GaussianBlurConfig.dart';
part 'Inspection.dart';
part 'MaterialLight.dart';
part 'MaterialLightConfig.dart';
part 'MaterialLightFS.dart';
part 'MaterialLightUniforms.dart';
part 'MaterialLightVS.dart';
part 'Normal.dart';
part 'NormalConfig.dart';
part 'Skybox.dart';
part 'SolidColor.dart';
part 'TextureLayout.dart';

/// The type of blending of multiple colors together.
enum ColorBlendType {
  /// Overwrite means that the last color is shown.
  Overwrite,

  /// The colors are added up.
  Additive,

  /// The colors are added up then divided by the number of added colors.
  Average,

  /// The current alpha is used to blend with previous color.
  AlphaBlend
}

/// Gets the string to indicate a color blend type used for the name of the material light.
String stringForColorBlendType(ColorBlendType type) => type.index.toString();

/// Inserts a number for each line in the given [text].
String numberLines(String text) {
  List<String> lines = text.split("\n");
  for (int i = 0; i < lines.length; i++) {
    lines[i] = "${i+1}  ${lines[i]}";
  }
  return lines.join("\n");
}

/// Gets the uppercase of just the first character of the given string.
String toTitleCase(String name) => name[0].toUpperCase()+name.substring(1);
