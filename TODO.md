TODO
--------------------------------------------------

# Future Features
The following is a list of features that may or will be added to 3Dart.
These are not small or in-progress features. These are features which
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

### Future Technique Features
###### Cartoon Shader
A basic outline shader and cell shader for drawing cartoons.

###### LED Sign Shader
A shader which makes the image look like round or square pixelated
points to simulate old LED red signs, CRTs, and oscilloscopes.

###### Bloom Shader
A shader which has a high and low cut-off for handing light blooms
for bright lights similar to glinting and glare.

###### MaterialLight Improvements
Displacement map, shininess map,
and several presets with built in textures.
Also need better error messages such as when a light is
required but no lights are included.

### Future IO Features
###### Obj and Mtl Improvements
Implement more of the features for these file types.
Will require some of the MaterialLight improvements.

###### Implement Other File Types
Try Loading some of these:
.3dm, .3ds, .blend, .c4d, .dae, .dds,
.fbx, .lwo, .ma, .max, .mb, .tga, .ztl
