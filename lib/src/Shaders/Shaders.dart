// Copyright (c) 2015-2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.Shaders;

import 'dart:web_gl' as WebGL;
import 'dart:typed_data' as Typed;

import '../Textures/Textures.dart' as Textures;
import '../Math/Math.dart' as Math;
import '../Core/Core.dart' as Core;
import '../Lights/Lights.dart' as Lights;
import '../Materials/Materials.dart' as Materials;

// Shader Components
part 'Attributes.dart';
part 'Shader.dart';
part 'Uniforms.dart';

// Implemented Shaders
part 'BumpySolid.dart';
part 'BumpyCubeSolid.dart';
part 'BumpyTexture2D.dart';
part 'BumpyTextureCube.dart';
part 'Depth.dart';
part 'Inspection.dart';
part 'ReflSolid.dart';
part 'Skybox.dart';
part 'Solid.dart';
part 'Texture2D.dart';
part 'TextureCube.dart';
