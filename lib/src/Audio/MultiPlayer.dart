part of ThreeDart.Audio;

/// A multi-player is an audio player which can play the same sound
/// multiple times overlapping each other.
class MultiPlayer {
  Player _original;
  List<Player> _players;
  int _limit;

  /// Creates a player which can play the same sound overlapping each other.
  MultiPlayer(Player player, [int limit = 10]):
    this._original = player,
    this._players = [],
    this._limit = (limit < 1)? 1: limit {
    this._players.add(player);
  }

  /// Gets the next player which is currently not playing,
  /// or null if no more players are allowed.
  Player? _getNextPlayer() {
    for (Player player in this._players) {
      if (!player.playing) return player;
    }

    if (this._players.length < this._limit) {
      Player player = this._original.copy();
      this._players.add(player);
      return player;
    }

    return null;
  }

  /// Plays one of these audios. Returns true if played,
  /// false if all instances are already playing.
  bool play({double? volume = null, double? rate = null, bool? loop = null}) {
    Player? player = this._getNextPlayer();
    if (player != null && !player.playing) {
      player.play(volume: volume, rate: rate, loop: loop);
      return true;
    }
    return false;
  }
  
  /// Pauses all the audio.
  void pauseAll() {
    for (Player player in this._players) {
      if (player.playing) player.pause();
    }
  }
}
