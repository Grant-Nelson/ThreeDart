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
part 'GaussianBlurConfig.dart';
part 'Inspection.dart';
part 'MaterialLight.dart';
part 'MaterialLightConfig.dart';
part 'MaterialLightUniforms.dart';
part 'Normal.dart';
part 'NormalConfig.dart';
part 'Skybox.dart';
part 'SolidColor.dart';
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
String stringForComponentType(ColorSourceType type) => type.index.toString();

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
