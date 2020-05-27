part of craft;

/// The sounds object helps make sounds easy to play.
class Sounds {
  Map<int, Audio.Player> _blockSound;
  
  /// Creates and starts loading the sounds for the game.
  Sounds(Audio.AudioLoader loader) {
    this._blockSound = new  Map<int, Audio.Player>();
    // this._addBlockSound(loader, "./sounds/sandHit.mp3", [
    //   BlockType.Sand]);
    // this._addBlockSound(loader, "./sounds/dirtHit.mp3", [
    //   BlockType.Dirt, BlockType.Turf, BlockType.Grass, BlockType.Fern]);
    // this._addBlockSound(loader, "./sounds/woodHit.mp3", [
    //   BlockType.TrunkUD, BlockType.TrunkNS, BlockType.TrunkEW,
    //   BlockType.WoodUD, BlockType.WoodNS, BlockType.WoodEW]);
    // this._addBlockSound(loader, "./sounds/stoneHit.mp3", [
    //   BlockType.Boundary, BlockType.Rock, BlockType.Brick, 
    //   BlockType.RedShine, BlockType.WhiteShine, BlockType.YellowShine, BlockType.BlackShine]);
    // this._addBlockSound(loader, "./sounds/waterHit.mp3", [
    //   BlockType.Water]);
    // this._addBlockSound(loader, "./sounds/leavesHit.mp3", [
    //   BlockType.DryLeaves, BlockType.Leaves]);
    // this._addBlockSound(loader, "./sounds/otherHit.mp3", [
    //   BlockType.WhiteFlower, BlockType.BlueFlower, BlockType.RedFlower, BlockType.Mushroom]);
    // No sound: BlockType.Air
  }

  /// Adds a sounds and the set of blocks which would make that sound.
  void _addBlockSound(Audio.AudioLoader loader, String path, List<int> blocks) {
    Audio.Player player = loader.loadFromFile(path);
    for (int block in blocks) this._blockSound[block] = player;
  }

  /// Plays a sounds based on one of the block types.
  void playBlockSound(int block, [double volume = 1.0]) {
    Audio.Player player = this._blockSound[block];
    if (player != null && !player.playing) {
      player.volume = volume;
      player.play();
    }
  } 
}
