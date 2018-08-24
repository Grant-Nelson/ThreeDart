library ThreeDart.Events;

import 'dart:async' as async;

part 'Changable.dart';
part 'Event.dart';
part 'EventArgs.dart';
part 'ItemsAddedEventArgs.dart';
part 'ItemsRemovedEventArgs.dart';
part 'ValueChangedEventArgs.dart';

/// The method signature for event handlers.
/// The [args] are any additional information about the event.
typedef void EventHandler(EventArgs args);
