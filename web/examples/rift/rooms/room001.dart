part of rooms;

void loadRoom001(engine.Room room) {
  // room.foreground.addFlat(-200.0,    0.0, 400.0,  50.0, -10.0, 1.0, 1.0, 8.0, 0.9, 'floor1.png');
  // room.foreground.addFlat(-200.0, -200.0, 400.0, 200.0, -10.0, 1.0, 1.0, 1.0, 1.0, 'wall1.png');

  for (int x = 0; x < 50; ++x)
    room.colliders.setValue(x, 1, engine.Block.Solid);
    
  for (int x = 0; x < 50; x += 10)
    room.colliders.setValue(x, 0, engine.Block.Solid);

}
