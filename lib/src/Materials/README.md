## Material Configurations

| Done  | emission | ambient | diffuse | specular | bump  | refl  | Material
|-------|----------|---------|---------|----------|-------|-------|------------
|   X   |  color   |  color  |  color  |  color   |   -   |   -   | Solid
|   X   |  color   |  color  |  color  |  color   | txt2D |   -   | BumpySolid
|       |  color   |  color  |  color  |  color   |   -   | txt3D | ReflSolid
|       |  color   |  color  |  color  |  color   | txt3D | txt3D | ReflBumpySolid
|   X   |  txt2D   |  txt2D  |  txt2D  |  txt2D   |   -   |   -   | Texture2D
|   X   |  txt2D   |  txt2D  |  txt2D  |  txt2D   | txt2D |   -   | BumpyTexture2D
|       |  txt2D   |  txt2D  |  txt2D  |  txt2D   |   -   | txt3D | ReflTexture2D
|       |  txt2D   |  txt2D  |  txt2D  |  txt2D   | txt2D | txt3D | ReflBumpyTexture2D
|       |  txt3D   |  txt3D  |  txt3D  |  txt3D   |   -   |   -   | Texture3D
|       |  txt3D   |  txt3D  |  txt3D  |  txt3D   | txt3D |   -   | BumpyTexture3D
|       |  txt3D   |  txt3D  |  txt3D  |  txt3D   |   -   | txt3D | ReflTexture3D
|       |  txt3D   |  txt3D  |  txt3D  |  txt3D   | txt3D | txt3D | ReflBumpyTexture3D
