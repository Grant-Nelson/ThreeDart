part of example1;

/// BlockType is the enums for all the voxel block types
class BlockType {
  BlockType._();

  /// Default nothing block, works as air
  static const int Air = 0;

  //====================================
  // Solid blocks
  //====================================

  /// Brown on all sides dirt block
  static const int Dirt = 1;

  /// Turf block has grass turf on the top of dirt
  static const int Turf = 2;

  /// Basic grey rock block
  static const int Rock = 3;

  /// Off-white sand block beside water
  static const int Sand = 4;
  
  /// Dry leaves is turf with some leaves on it
  static const int DryLeaves = 5;

  /// Trunk block of a tree
  static const int Trunk = 6;
  
  /// Block of grey bricks
  static const int Brick = 7;
  
  /// Red reflective solid block, like ruby
  static const int RedShine = 8;
  
  /// White reflective solid block, like silver
  static const int WhiteShine = 9;

  /// Yellow reflective solid block, like gold
  static const int YellowShine = 10;

  /// Black reflective solid block, like obsidian
  static const int BlackShine = 11;

  //====================================
  // Special blocks
  //====================================
  
  /// Transparent water block
  static const int Water = 12;
  
  /// Invisible wall used to block players from leaving the island
  static const int Boundary = 20;
  
  //====================================
  // Open blocks
  //====================================

  /// A block of leaves on the top of the tree
  static const int Leaves = 13;

  /// Grass is an alpha textured plant for grass
  static const int Grass = 14;
  
  /// Fern is an alpha textured plant for a fern
  static const int Fern = 15;
  
  /// Flowers is an alpha textured plant the small white flower
  static const int WhiteFlower = 16;
  
  /// Flowers is an alpha textured plant the blue tuffs flower 
  static const int BlueFlower = 17;

  /// Flowers is an alpha textured plant the red flower
  static const int RedFlower = 18;

  /// Mushroom is a special model for the mushrooms
  static const int Mushroom = 19;

  //====================================

  /// Maximum block type value, also the width*64 of texture.
  static const int Max = 20;

  /// string gets the string for the given block type value.
  static String string(int value) {
    switch(value) {
      case Air:         return "air";
      case Dirt:        return "dirt";
      case Turf:        return "turf";
      case Rock:        return "rock";
      case Sand:        return "sand"; 
      case DryLeaves:   return "dryLeaves";
      case Trunk:       return "trunk";
      case Brick:       return "brick";
      case RedShine:    return "redShine";
      case WhiteShine:  return "whiteShine";
      case YellowShine: return "yellowShine";
      case BlackShine:  return "blackShine";
      case Water:       return "water";
      case Leaves:      return "leaves";
      case Grass:       return "grass";
      case Fern:        return "fern";
      case WhiteFlower: return "whiteFlower";
      case BlueFlower:  return "blueFlower";
      case RedFlower:   return "redFlower";
      case Mushroom:    return "mushroom";
    }
    return "undefined";
  }

  /// hard determines if the given block type can not be walked through.
  static bool hard(int value) {
    return solid(value) || (value == Leaves) || (value == Boundary);
  }

  /// solid determines if the given block type can not be seen through.
  static bool solid(int value) {
    return (value >= Dirt) && (value <= BlackShine);
  }

  /// open determines if the given block type can be seen through.
  static bool open(int value) {
    return (value >= Leaves) && (value <= Mushroom);
  }

  /// Determines if the side of the block should be drawn.
  static bool drawSide(int value, int neighbor) {
    if (value == neighbor) return false;
    if (neighbor == Air) return true;
    if (value == Water) return open(neighbor);
    return !open(value) && ((neighbor == Water) || open(neighbor));
  }
}
