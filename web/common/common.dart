library ThreeDart.web.common;

import 'dart:html' as html;
import 'dart:convert' as convert;
import 'dart:async';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Tokenizer.dart' as Tokenizer;

part 'buttonGroup.dart';
part 'checkGroup.dart';
part 'codeParser.dart';
part 'dartParser.dart';
part 'glslParser.dart';
part 'htmlParser.dart';
part 'plainParser.dart';
part 'radioGroup.dart';
part 'shellPage.dart';
part 'texture2DGroup.dart';


/// Prints an FPS output for the given TreeDart object ot the console.
void showFPS(ThreeDart.ThreeDart td) {
  new Timer.periodic(const Duration(milliseconds: 5000), (Timer time) {
    String fps = td.fps.toStringAsFixed(2);
    if (fps != "0.00") print("$fps fps");
  });
}
