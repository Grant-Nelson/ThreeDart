part of ThreeDart.Views;

/// The target to write the result of a render to when rendering.
abstract class Target implements Core.Bindable, Events.Changeable {

  /// The region of the front target to render to.
  /// <0, 0> is top left corner and <1, 1> is botton right.
  Math.Region2 get region;
  set region(Math.Region2 region);
}
