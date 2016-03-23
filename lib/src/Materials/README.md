## Material Configurations

| emission | ambient | diffuse | specular | bump | refl | Done | Material
|----------|---------|---------|----------|------|------|------|------------
|  color   |  color  |  color  |  color   |   -  |   -  |  X   | Solid
|  color   |  color  |  color  |  color   |  2D  |   -  |  X   | BumpySolid
|  color   |  color  |  color  |  color   | Cube |   -  |  X   | BumpyCubeSolid
|  color   |  color  |  color  |  color   |   -  | Cube |      | ReflSolid
|  color   |  color  |  color  |  color   |  2D  | Cube |      | ReflBumpySolid
|  color   |  color  |  color  |  color   | Cube | Cube |      | ReflBumpyCubeSolid
|   2D     |   2D    |   2D    |   2D     |   -  |   -  |  X   | Texture2D
|   2D     |   2D    |   2D    |   2D     |  2D  |   -  |  X   | BumpyTexture2D
|   2D     |   2D    |   2D    |   2D     |   -  | Cube |      | ReflTexture2D
|   2D     |   2D    |   2D    |   2D     |  2D  | Cube |      | ReflBumpyTexture2D
|  Cube    |  Cube   |  Cube   |  Cube    |   -  |   -  |  X   | TextureCube
|  Cube    |  Cube   |  Cube   |  Cube    | Cube |   -  |  X   | BumpyTextureCube
|  Cube    |  Cube   |  Cube   |  Cube    |   -  | Cube |      | ReflTextureCube
|  Cube    |  Cube   |  Cube   |  Cube    | Cube | Cube |      | ReflBumpyTextureCube
