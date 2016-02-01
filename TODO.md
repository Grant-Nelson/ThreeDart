# Future Features
The following is a list of features that may or will be added to 3Dart.
These are not small or in-progess features. These are features which
are currently not scheduled for being built but should be built at some
point in the future.

### Future Mover Features
###### User Transition Mover
A mover which uses ASDW and arrow keys to translate similar
to a first person walking movement. Could also add a shift modifier
to increase the speed of movement.

### Future Scene Features
###### Octtree Backing
Currently all entities are stored in a hierarchy tree.
It will continue being stored in the hierarchy tree so that it may be
moved and updated correctly. However when rendering it should use
AABBs in a oct-tree which culls entities which aren't visible.

### Future Shape Features
###### Octtree Backing
Currently the vertices and elements are stored in lists.
At some point the lists will be replaced by oct-trees.
This will provide faster shape creation, faster collision detection,
and new functionality, like shape union, intersection, and clipping.

###### Basic Tessilator
Add a basic tessilator for determining how to tessilate a complex
polygon into triangles. This allows quick creating of extruded polygons
and complex surfaces.
