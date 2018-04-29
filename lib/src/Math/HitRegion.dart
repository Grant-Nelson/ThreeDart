part of ThreeDart.Math;

/// The hit region is a location relative to a Region2 or Region3 for fast intesection.
class HitRegion {
  
  /// [None] indicates no hit region values at all.
  static HitRegion None = new HitRegion._(0x0000);

  /// [All] indicates all hit region values.
  static HitRegion All = new HitRegion._(0x01FF);

  /// [XPos] indicates the positive X hit region.
  static HitRegion XPos = new HitRegion._(0x0001);

  /// [XCenter] indicates the center X hit region.
  static HitRegion XCenter = new HitRegion._(0x0002);

  /// [XNeg] indicates the negative X hit region.
  static HitRegion XNeg = new HitRegion._(0x0004);

  /// [YPos] indicates the positive Y hit region.
  static HitRegion YPos = new HitRegion._(0x0008);
  
  /// [YCenter] indicates the center Y hit region.
  static HitRegion YCenter = new HitRegion._(0x0010);

  /// [YNeg] indicates the negative Y hit region.
  static HitRegion YNeg = new HitRegion._(0x0020);

  /// [ZPos] indicates the positive Z hit region.
  static HitRegion ZPos = new HitRegion._(0x0040);

  /// [ZCenter] indicates the center Z hit region.
  static HitRegion ZCenter = new HitRegion._(0x0080);

  /// [ZNeg] indicates the negative Z hit region.
  static HitRegion ZNeg = new HitRegion._(0x0100);

  /// [Inside] indicates the inside hit region, XCenter|YCenter|ZCenter
  static HitRegion Inside = new HitRegion._(0x0092);
  
  /// The combined hit region value.
  final int _value;

  /// Creates a new hit region value.
  HitRegion._(this._value);

  /// Combines two hit region values into one.
  HitRegion operator|(HitRegion right) =>
    new HitRegion._(this._value|right._value);

  /// Unions two hit region values.
  HitRegion operator&(HitRegion right) =>
    new HitRegion._(this._value&right._value);

  /// Gets the opposite of this hit region value.
  HitRegion operator ~() =>
    new HitRegion._(All._value & ~this._value);

  /// The interal value of the hit region value.
  int get value => this._value;

  /// Determines if any part of the given hit region value is contained in this hit region value.
  bool overlaps(HitRegion region) =>
    (this._value  & region._value) != 0x00;

  /// Determines if this hit region value contains the all of the given hit region value.
  bool has(HitRegion region) =>
    (this._value  & region._value) != region._value;

  /// Determines if the given [other] variable is a [HitRegion] equal to this value.
  bool operator ==(var other) {
    if (other is! HitRegion) return false;
    return this._value == other._value;
  }

  /// The string for this hit region value.
  String toString() {
    if (this._value == All) return "All";
    if (this._value == Inside) return "Inside";
    List<String> parts = new List<String>();
    if (this.has(XPos))    parts.add("XPos");
    if (this.has(XCenter)) parts.add("XCenter");
    if (this.has(XNeg))    parts.add("XNeg");
    if (this.has(YPos))    parts.add("YPos");
    if (this.has(YCenter)) parts.add("YCenter");
    if (this.has(YNeg))    parts.add("YNeg");
    if (this.has(ZPos))    parts.add("ZPos");
    if (this.has(ZCenter)) parts.add("ZCenter");
    if (this.has(ZNeg))    parts.add("ZNeg");
    if (parts.length <= 0) return "None";
    return parts.join("|");
  }
}