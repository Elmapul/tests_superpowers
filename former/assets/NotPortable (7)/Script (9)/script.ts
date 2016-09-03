


class loadMap extends Sup.Behavior {
  awake() {
    //loadDoc();
    //Sup.getActor("").tileMapRenderer.
 //Game.map.setTileAt(Game.waterLayer, targetTileX, targetTileY, 16);
    
    
    
    Game.map.setTileAt(0, 16, 10, 3);
    
  }

  update() {
    
    
  }
}
Sup.registerBehavior(loadMap);
    
    
