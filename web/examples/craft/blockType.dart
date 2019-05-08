part of craft;

/// BlockType is the enums for all the voxel block types
class BlockType {
  BlockType._();

  //====================================
  // Special blocks
  //====================================

  /// Default nothing block, works as air
  static const int Air = 0;

  /// Transparent water block
  static const int Water = 1;

  //====================================
  // Solid blocks
  //====================================

  /// Unbreakable floor used for below the chunks.
  static const int Boundary = 100;

  /// Brown on all sides dirt block
  static const int Dirt = 101;

  /// Turf block has grass turf on the top of dirt
  static const int Turf = 102;

  /// Basic grey rock block
  static const int Rock = 103;

  /// Off-white sand block beside water
  static const int Sand = 104;

  /// Dry leaves is turf with some leaves on it
  static const int DryLeaves = 105;

  /// Trunk block of a tree placed up right (up/down)
  static const int TrunkUD = 106;

  /// Trunk block of a tree placed on its side, facing north/south
  static const int TrunkNS = 107;

  /// Trunk block of a tree placed on its side, facing east/west
  static const int TrunkEW = 108;

  /// Block of grey bricks
  static const int Brick = 109;

  /// Red reflective solid block, like ruby
  static const int RedShine = 110;

  /// White reflective solid block, like silver
  static const int WhiteShine = 111;

  /// Yellow reflective solid block, like gold
  static const int YellowShine = 112;

  /// Black reflective solid block, like obsidian
  static const int BlackShine = 113;

  /// A block of leaves on the top of the tree
  static const int Leaves = 114;

  /// Wood block of a wooden planks placed up right (up/down)
  static const int WoodUD = 115;

  /// Wood block of a wooden planks placed on its side, facing north/south
  static const int WoodNS = 116;

  /// Wood block of a wooden planks placed on its side, facing east/west
  static const int WoodEW = 117;

  //====================================
  // Open blocks
  //====================================

  /// Grass is an alpha textured plant for grass
  static const int Grass = 200;

  /// Fern is an alpha textured plant for a fern
  static const int Fern = 201;

  /// Flowers is an alpha textured plant the small white flower
  static const int WhiteFlower = 202;

  /// Flowers is an alpha textured plant the blue tuffs flower
  static const int BlueFlower = 203;

  /// Flowers is an alpha textured plant the red flower
  static const int RedFlower = 204;

  /// Mushroom is a special model for the mushrooms
  static const int Mushroom = 205;

  //====================================

  /// Placeable blocks in the order to show in the hand.
  static final List<int> PlaceableBlocks = [
    Dirt,
    Turf,
    Rock,
    Sand ,
    DryLeaves,
    TrunkUD,
    WoodUD,
    Brick,
    RedShine,
    WhiteShine,
    YellowShine,
    BlackShine,
    Water,
    Leaves,
    Grass,
    Fern,
    WhiteFlower,
    BlueFlower,
    RedFlower,
    Mushroom];

  /// string gets the string for the given block type value.
  static String string(int value) {
    switch(value) {
      case Air:         return "air";
      case Water:       return "water";

      case Boundary:    return "boundary";
      case Dirt:        return "dirt";
      case Turf:        return "turf";
      case Rock:        return "rock";
      case Sand:        return "sand";
      case DryLeaves:   return "dryLeaves";
      case TrunkUD:     return "trunk-ud";
      case TrunkNS:     return "trunk-ns";
      case TrunkEW:     return "trunk-ew";
      case Brick:       return "brick";
      case RedShine:    return "redShine";
      case WhiteShine:  return "whiteShine";
      case YellowShine: return "yellowShine";
      case BlackShine:  return "blackShine";
      case Leaves:      return "leaves";
      case WoodUD:      return "wood-ud";
      case WoodNS:      return "wood-ns";
      case WoodEW:      return "wood-ew";

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
    return (value >= Boundary) && (value <= WoodEW);
  }

  /// solid determines if the given block type can not be seen through.
  static bool solid(int value) {
    return (value >= Boundary) && (value <= WoodEW);
  }

  /// plant determines if the given block type is a plant.
  static bool plant(int value) {
    return (value >= Grass) && (value <= Mushroom);
  }

  /// open determines if the given block type can be seen through.
  static bool open(int value) {
    return (value >= Grass) && (value <= Mushroom);
  }

  /// Determines if the side of the block should be drawn.
  static bool drawSide(int value, int neighbor) {
    if (value == neighbor) return false;
    if (neighbor == Air)   return true;
    if (value    == Water) return open(neighbor);
    if (neighbor == Water) return !open(value);
    return !open(value) && open(neighbor);
  }
}
