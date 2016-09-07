


class loadMap extends Sup.Behavior {
  awake() {
    //loadDoc();
    //Sup.getActor("").tileMapRenderer.
 //Game.map.setTileAt(Game.waterLayer, targetTileX, targetTileY, 16);
    
    
    
    var auxiliar=mydata;
    var auxi2=auxiliar.layers;
    
    
    
    
    //Game.map.setTileAt(0, 16, 5, 3);
    
    var count=0;
    for (var y=0;y<20;y++){
      for (var x=0; x<40; x++){
        count++;
    Game.map.setTileAt(1, x, 20-y, (auxi2[0].data[count]-1));
        
        }
      }
    
  }

  update() {
    
    
  }
}
Sup.registerBehavior(loadMap);
    
    
