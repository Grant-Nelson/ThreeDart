library ThreeDart.Collections;

import '../Math/Math.dart' as Math;
import '../Events/Events.dart' as Events;

part 'Collection.dart';
part 'Matrix4Stack.dart';
part 'StringTree.dart';

/// The handler for the call back prior to an item being added.
typedef bool CollectionPreaddHandle<T>(Iterable<T> added);

/// The handler for the call back when the collection is changed.
typedef void CollectionChangeHandle<T>(int index, Iterable<T> items);
