part of ThreeDart.Core;

abstract class UserInteractable {
  bool attach(UserInput input);
  void detach();
  bool get selected;
  void set selected(bool select);
}
