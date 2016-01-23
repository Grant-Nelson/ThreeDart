part of ThreeDart.Core;

class EventArgs {
  EventArgs();
}

class PointEventArgs extends EventArgs {
  final Math.Point2 size;
  final Math.Point2 rawPoint;
  final DateTime currentTime;

  PointEventArgs(this.size, this.rawPoint, this.currentTime);

  Math.Point2 get adjustedPoint => this.adjustPoint(this.rawPoint);

  Math.Point2 adjustPoint(Math.Point2 raw) {
    final double width  = this.size.x*0.5;
    final double height = this.size.y*0.5;
    final double x = raw.x - width;
    final double y = raw.y - height;
    if (width > height) return new Math.Point2(x, y)/height;
    else                return new Math.Point2(x, y)/width;
  }

  Math.Vector2 adjustVector(Math.Vector2 raw) {
    final double width  = this.size.x*0.5;
    final double height = this.size.y*0.5;
    if (width > height) return raw/height;
    else                return raw/width;
  }
}

class MouseEventArgs extends PointEventArgs {
  final bool pressed;
  final Math.Point2 startRawPoint;
  final Math.Point2 previousRawPoint;
  final DateTime startTime;
  final DateTime previousTime;

  MouseEventArgs(this.pressed, Math.Point2 size,
    this.startRawPoint, this.previousRawPoint, Math.Point2 rawPoint,
    this.startTime, this.previousTime, DateTime currentTime):
    super(size, rawPoint, currentTime);

  Math.Point2 get adjustedStartPoint => this.adjustPoint(this.startRawPoint);
  Math.Point2 get adjustedPreviousPoint => this.adjustPoint(this.previousRawPoint);
  Math.Vector2 get rawDelta => new Math.Vector2.fromPoint2(this.rawPoint - this.previousRawPoint);
  Math.Vector2 get rawOffset => new Math.Vector2.fromPoint2(this.rawPoint - this.startRawPoint);
  Math.Vector2 get adjustedDelta => this.adjustVector(this.rawDelta);
  Math.Vector2 get adjustedOffset => this.adjustVector(this.rawOffset);
  double get dt => this.currentTime.difference(this.previousTime).inMilliseconds*0.001;
  double get dtTotal => this.currentTime.difference(this.startTime).inMilliseconds*0.001;
}

class MouseWheelEventArgs extends PointEventArgs {
  final Math.Vector2 wheel;

  MouseWheelEventArgs(Math.Point2 size, Math.Point2 rawPoint, DateTime currentTime, this.wheel):
    super(size, rawPoint, currentTime);
}

class KeyEventArgs extends EventArgs {
  final int keyCode;

  KeyEventArgs(this.keyCode);
}
