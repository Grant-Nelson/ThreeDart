part of ThreeDart.Movers;

abstract class UserMover extends Mover {

  bool initialize(Core.ThreeDart td);
  void dispose();
  bool get selected;
  void set selected(bool select);

}
