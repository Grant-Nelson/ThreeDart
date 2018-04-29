part of example1;

class BlockType {
  BlockType._();

  /// Default nothing block
  static const int Air = 0;

  /// Brown on all sides dirt block
  static const int Dirt = 1;

  /// Grass block has grass on the top of dirt
  static const int Grass = 2;

  /// Basic rock block
  static const int Rock = 3;

  /// Basic sand block
  static const int Sand = 4;

  /// Maximum BlockType value
  static const int Max = Sand;

  static String string(int value) {
    switch(value) {
      case Air: return "air";
      case Dirt: return "dirt";
      case Grass: return "grass";
      case Rock: return "rock";
      case Sand: return "sand"; 
    }
    return "undefined";
  }

  static bool solid(int value) {
    return value != Air;
  }
}
