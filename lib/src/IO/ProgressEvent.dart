part of ThreeDart.IO;

/// The event argument for event's with information about entities changing.
class ProgressEventArgs extends Events.EventArgs {

  /// The list of entities which have been changed.
  /// Typically this will be entities added or removed.
  final double progress;

  /// This indicates the some progress has been finished.
  final bool done;

  /// Creates an entity event argument.
  ProgressEventArgs(Object sender, this.progress, this.done):
    super(sender);
}