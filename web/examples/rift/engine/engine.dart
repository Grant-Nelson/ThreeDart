library engine;

import 'package:ThreeDart/Events.dart' as Events;
import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Textures.dart' as Textures;
import 'package:ThreeDart/Lights.dart' as Lights;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Views.dart' as Views;

part 'colliders.dart';
part 'constants.dart';
part 'layer.dart';
part 'room.dart';

typedef void RoomFactory(Room room, int index);

class Engine {
  RoomFactory _allRooms;
  Room _room;
  Movers.UserTranslator _translator;
 
  Engine(ThreeDart.ThreeDart td, RoomFactory allRooms) {
    this._allRooms = allRooms;
    this._room = new Room(td);
    this._translator = new Movers.UserTranslator(input: td.userInput);
    this._translator.changed.add(this._onUserMove);
    this._translator.location = new Math.Point3(100.0, -200.0, 0.0);
  }

  void _onUserMove(Events.EventArgs args) {
    Math.Point3 loc = this._translator.location;
    Math.Point2 view = new Math.Point2(loc.x, loc.y);
    this._room.setView(view);
    print(">> $view");
  }

  void jumpToRoom(int index) {
    this._allRooms(this._room, index);
  }


}
