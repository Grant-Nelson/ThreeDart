part of ThreeDart.Collections;

/// A collection of objects.
class Collection<T> implements Iterable<T> {

  /// The list of all the items.
  List<T> _list;

  /// The handler method for before adding items to this collection.
  CollectionPreaddHandle<T>? _onPreaddHndl;

  /// The handler method for added items to this collection.
  CollectionChangeHandle<T>? _onAddedHndl;

  /// The handler method for remvoed items to this collection.
  CollectionChangeHandle<T>? _onRemovedHndl;

  /// Constructs a new collection.
  Collection():
    this._list = [],
    this._onPreaddHndl  = null,
    this._onAddedHndl   = null,
    this._onRemovedHndl = null;

  /// Sets the handlers for this collection.
  ///
  /// This method should be protected (if dart had protected methods).
  /// Do not call this method unless calling from an inheriting or including
  /// class otherwise unexpected errors may occur.
  void setHandlers({CollectionPreaddHandle<T>? onPreaddHndl:  null,
                    CollectionChangeHandle<T>? onAddedHndl:   null,
                    CollectionChangeHandle<T>? onRemovedHndl: null}) {
    this._onPreaddHndl  = onPreaddHndl;
    this._onAddedHndl   = onAddedHndl;
    this._onRemovedHndl = onRemovedHndl;
  }

  /// Is called when one or more items are about to be added to this collection.
  bool _onPreadd(Iterable<T> items) => this._onPreaddHndl?.call(items) ?? true;

  /// Is called when one or more items are added to this collection.
  void _onAdded(int index, Iterable<T> added) => this._onAddedHndl?.call(index, added);

  /// Is called when one or more items are removed from this collection.
  void _onRemoved(int index, Iterable<T> removed) => this._onRemovedHndl?.call(index, removed);

  /// Gets the first item in the list.
  T get first => this._list.first;

  /// Gets the last item in the list.
  T get last => this._list.last;

  /// Checks that this iterable has only one element, and returns that element.
  T get single => this._list.single;

  /// Determines if the collection is empty.
  bool get isEmpty => this._list.isEmpty;

  /// Determines if the collection is not empty.
  bool get isNotEmpty => this._list.isNotEmpty;

  /// The number of items in the collection.
  int get length => this._list.length;

  /// Returns a new [Iterator] that allows iterating this collection.
  Iterator<T> get iterator => this._list.iterator;

  /// Checks whether any item in this collection satisfies the given [hndl].
  bool any(bool hndl(T item)) => this._list.any(hndl);

  /// Provides a view of this iterable as an iterable of [T2] instances.
  Iterable<T2> cast<T2>() => this._list.cast<T2>();

  /// Indicates if the given [item] is contained.
  bool contains(Object? item) => this._list.contains(item);

  /// Gets the item at the given index.
  T elementAt(int index) => this._list.elementAt(index);

  /// Check if every item in this collection satisfies the given [hndl].
  bool every(bool hndl(T item)) => this._list.every(hndl);

  /// Expands each element of this Iterable into zero or more elements.
  Iterable<T2> expand<T2>(Iterable<T2> hndl(T element)) => this._list.expand<T2>(hndl);

  /// Returns the first element that satisfies the given predicate test.
  T firstWhere(bool test(T element), {T orElse()?}) =>
    this._list.firstWhere(test, orElse: orElse);

  /// Reduces a collection to a single value by iteratively
  /// combining each element of the collection with an existing value
  T2 fold<T2>(T2 initialValue, T2 combine(T2 previousValue, T element)) =>
    this._list.fold<T2>(initialValue, combine);

  /// Returns the lazy concatenation of this iterable and [other].
  Iterable<T> followedBy(Iterable<T> other) =>
    this._list.followedBy(other);

  /// Calls the given function handler, [hndl], for each item.
  void forEach(void hndl(T item)) => this._list.forEach(hndl);

  /// Converts each element to a String and concatenates the strings.
  String join([String separator = "" ]) =>
    this._list.join(separator);

  /// Returns the last element that satisfies the given predicate test.
  T lastWhere(bool test(T element), {T orElse()?}) =>
    this._list.lastWhere(test, orElse: orElse);

  /// Returns a new lazy Iterable with elements that are created by calling
  /// [hndl] on each element of this Iterable in iteration order.
  Iterable<T2> map<T2>(T2 hndl(T e)) => this._list.map<T2>(hndl);

  /// Reduces a collection to a single value by iteratively combining
  /// elements of the collection using the provided function.
  T reduce(T combine(T value, T element)) => this._list.reduce(combine);

  /// Returns the single element that satisfies test.
  T singleWhere(bool test(T element), {T orElse()?}) => this._list.singleWhere(test, orElse: orElse);

  /// Returns an Iterable that provides all but the first count elements.
  Iterable<T> skip(int count) => this._list.skip(count);

  /// Returns an Iterable that skips leading elements while test is satisfied.
  Iterable<T> skipWhile(bool test(T value)) => this._list.skipWhile(test);

  /// Returns a lazy iterable of the count first elements of this iterable.
  Iterable<T> take(int count) => this._list.take(count);

  /// Returns a lazy iterable of the leading elements satisfying test.
  Iterable<T> takeWhile(bool test(T value)) => this._list.takeWhile(test);

  /// Creates a List containing the elements of this Iterable.
  List<T> toList({bool growable: true}) => this._list.toList(growable: growable);

  /// Creates a Set containing the same elements as this iterable.
  Set<T> toSet() => this._list.toSet();

  /// Returns a new lazy Iterable with all elements that satisfy the predicate test.
  Iterable<T> where(bool test(T element)) => this._list.where(test);

  /// Gets the index of the given [item].
  /// The optional [start] is the index to start looking at.
  int indexOf(T item, [int start = 0]) => this._list.indexOf(item, start);

  /// Adds the given [item] to this collection.
  void add(T item) {
    if (this._onPreadd([item])) {
      int index = this._list.length;
      this._list.add(item);
      this._onAdded(index, [item]);
    }
  }

  /// Adds the given [items] to this collection.
  void addAll(Iterable<T> items) {
    if (this._onPreadd(items)) {
      int index = this._list.length;
      this._list.addAll(items);
      this._onAdded(index, items);
    }
  }

  /// Inserts the given [item] into the given [index].
  void insert(int index, T item) {
    if (this._onPreadd([item])) {
      this._list.insert(index, item);
      this._onAdded(index, [item]);
    }
  }

  /// Inserts all the [items] at the given [index].
  void insertAll(int index, Iterable<T> items) {
    if (this._onPreadd(items)) {
      this._list.insertAll(index, items);
      this._onAdded(index, items);
    }
  }

  /// Gets the item at the given [index].
  T operator[](int index) => this._list[index];

  /// Sets the item at the at given index.
  void operator[]=(int index, T item) {
    T older = this._list[index];
    if ((older != item) && this._onPreadd([item])) {
      this._list[index] = item;
      this._onRemoved(index, [older]);
      this._onAdded(index, [item]);
    }
  }

  /// Removed the first instance of the given [item] from this collection.
  /// True is returned if the item was found and removed, false if not found.
  bool remove(T item) {
    int index = this._list.indexOf(item);
    if (index > 0) {
      this.removeAt(index);
      return true;
    }
    return false;
  }

  /// Removes all instances of the given [item] from the list.
  int removeAll(T item) {
    int count = 0;
    while(this.remove(item)) count++;
    return count;
  }

  /// Removes the item at the given [index] in this collection.
  /// The removed item is returned or null if out-of-bounds.
  T removeAt(int index) {
    if ((index < 0) || (index >= this._list.length)) return null as T;
    T item = this._list.removeAt(index);
    this._onRemoved(index, [item]);
    return item;
  }

  /// Removes the given range from the list.
  List<T> removeRange(int index, int length) {
    List<T> items = this._list.sublist(index, index+length);
    if (items.length > 0) {
      this._list.removeRange(index, index+length);
      this._onRemoved(index, items);
    }
    return items;
  }

  /// Returns a new lazy [Iterable] with all elements that have type [T].
  Iterable<T> whereType<T>() => this._list.whereType();

  /// Removes all the items.
  void clear() {
    if (this._list.length > 0) {
      List<T> items = this._list;
      this._list = [];
      this._onRemoved(0, items);
    }
  }
}
