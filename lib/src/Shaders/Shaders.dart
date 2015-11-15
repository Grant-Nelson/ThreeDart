// Copyright (c) 2015, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.Shaders;

import 'dart:web_gl' as WebGL;
import 'dart:typed_data' as Typed;

import '../Data/Data.dart' as Data;
import '../Math/Math.dart' as Math;
import '../Core/Core.dart' as Core;

// Shader Components
part 'Attributes.dart';
part 'Shader.dart';
part 'Uniforms.dart';

// Implemented Shaders
part 'Depth.dart';
