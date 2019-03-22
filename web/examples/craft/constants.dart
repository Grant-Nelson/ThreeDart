part of craft;

/// Set of constants for Craft.
class Constants {
  
  /// The maximum number, 1<<32 (limited by [nextInt]), allowed for the seed.
  static const int maxSeed = 4294967296;

  /// The time in milliseconds between world chunk updates.
  static const int worldTickMs = 750;

  /// The time in milliseconds between picking up new chunks to generate.
  static const int generateTickMs = 70;

  /// The time in milliseconds between switching images.
  static const int animationTickMs = 250;

  /// The time in milliseconds between debug output prints.
  static const int debugPrintTickMs = 5000;

  /// The path to the textures.
  static const String imgFolder = "./textures/";

  /// The file extension for all textures.
  static const String fileExt = ".png";

  //----------------------------------------------
  // World Generation Constants
  //----------------------------------------------

  /// The number of chunks to preallocate.
  static const int initialGraveyardSize = 140;

  /// The number of blocks wide and deep of every chunk.
  /// WARNING: unit-tests expect 16, if you change this update the tests.
  static const int chunkSideSize = 16;

  /// The number of blocks tall of every chunk.
  static const int chunkYSize = 48;

  /// The total number of blocks per chunk.
  static const int chunkDataLength = chunkSideSize * chunkYSize * chunkSideSize;
  
  /// The height of the water.
  static const int waterDepth = 8;

  /// The maximum edge for additional sand around water.
  static const int maxEdgeSand = waterDepth + 2;

  /// The minimum edge for additional sand around water.
  static const int minEdgeSand = waterDepth - 2;

  /// The number of dirt blocks under the turf.
  static const int dirtDepth = 2;

  /// The number of sand blocks directly underwater.
  static const int sandDepth = 2;

  /// The size (height) of the start pyramid.
  static const int pyramidSize = 30;

  /// The minimum height before no trees may be added.
  static const int treeMin = 10;

  /// The height of a tree.
  static const int treeHeight = 8;

  /// The radius (scan area) of the leaves on a tree.
  static const int leavesRadius = 3;

  /// The radius squared (curve) of the leaves on the tree.
  static const int leavesRadius2 = 12;

  /// The dead leaves radius (scan area) below a tree.
  static const int deadLeavesRadius = 3;

  /// The dead leaves radius squared (curve) below a tree.
  static const int deadLeavesRadius2 = 10;

  /// The size of the X and Z border around the turrain required for trees.
  static const int borderSize = 3;

  /// The minimum X and Z including the border, value is inclusive to the range.
  static const int paddedMin = -borderSize;

  /// The maximum X and Z including the border, value is exclusive to the range.
  static const int paddedMax = chunkSideSize + borderSize;

  /// The total X and Z size including borders.
  static const int paddedSize = paddedMax - paddedMin;

  /// The number of values in the height cache of the generator.
  static const int heightCacheLength = paddedSize * paddedSize;

  //----------------------------------------------
  // World Rendering & Chunk Loading Constants
  //----------------------------------------------

  /// The minimum number of blocks away from the player to always render a chunck.
  static const double minDrawDist2 = 10.0 * 10.0;

  /// The maximum number of blocks away from the player to render before not drawing a chunck.
  static const double maxDrawDist2 = 80.0 * 80.0;

  /// The maximum chunk X and Z distance from the player to keep chunks.
  static const int maxChunkDist = chunkSideSize * 8;

  /// The minimum chunk X and Z distance from the player that chunks should be loaded.
  static const int minChunkDist = chunkSideSize * 4;

  /// The initial chunk distance to preload before starting the player.
  static const int initChunkDist = chunkSideSize * 2;

  //----------------------------------------------
  // Player Constants
  //----------------------------------------------

  /// The X starting location of the player.
  static const double playerStartX = 0.5;

  /// The Y starting location offset from the highest solid block of the player.
  static const double playerStartYOffset = 10.0;

  /// The Z starting location of the player.
  static const double playerStartZ = 0.5;

  /// The gravity force to apply onto the player.
  static const double gravity = -100.0;

  /// The speed at which the player walks.
  static const double walkSpeed = 6.0;

  /// The maximum speed the player can fall at, terminal velocity.
  static const double maxFallSpeed = 60.0;

  /// The velocity to apply when the player jumps.
  static const double jumpSpeed = 30.0;

  /// The maximum distance to set a highlight selection from the player.
  static const double highlightDistance = 6.0;
  
  /// The sensitivity of the locked pointer mouse.
  static const double mouseSensitivity = 0.4;

  /// The region of the player's bounding box around the camera.
  /// This is used for collision detection.
  static final Math.Region3 playerRegion = new Math.Region3(-0.25, -1.5, -0.25, 0.25, 2.0, 0.25);

  /// The maxium volocity in which collision detection is ignored.
  static const double maxCollisionSpeedSquared = 100.0;
  
  //----------------------------------------------
  // Mathmatical Constants
  //----------------------------------------------

  static final Math.Vector3 topNorm    = Math.Vector3.posY;
  static final Math.Vector3 bottomNorm = Math.Vector3.negY;
  static final Math.Vector3 leftNorm   = Math.Vector3.posX;
  static final Math.Vector3 rightNorm  = Math.Vector3.negX;
  static final Math.Vector3 frontNorm  = Math.Vector3.posZ;
  static final Math.Vector3 backNorm   = Math.Vector3.negZ;

  static final Math.Point3 frontTopLeft     = new Math.Point3(-0.5,  0.5,  0.5);
  static final Math.Point3 frontTopRight    = new Math.Point3( 0.5,  0.5,  0.5);
  static final Math.Point3 frontBottomLeft  = new Math.Point3(-0.5, -0.5,  0.5);
  static final Math.Point3 frontBottomRight = new Math.Point3( 0.5, -0.5,  0.5);
  static final Math.Point3 backTopLeft      = new Math.Point3(-0.5,  0.5, -0.5);
  static final Math.Point3 backTopRight     = new Math.Point3( 0.5,  0.5, -0.5);
  static final Math.Point3 backBottomLeft   = new Math.Point3(-0.5, -0.5, -0.5);
  static final Math.Point3 backBottomRight  = new Math.Point3( 0.5, -0.5, -0.5);

  Constants._();
}