


class loadMap extends Sup.Behavior {
  awake() {
    //loadDoc();
    //Sup.getActor("").tileMapRenderer.
 //Game.map.setTileAt(Game.waterLayer, targetTileX, targetTileY, 16);
    
    
    
    var auxiliar=mydata;
    var auxi2=auxiliar.layers;
    
    //window.alert(auxi2[0].data[24]);
    //window.alert(auxi2[0].data[25]);
    //window.alert(auxi2[0].data[26]);
    
    
    Game.map.setTileAt(0, 16, 5, 3);
    var count=0;
    for (var i=0;i<10;i++){
      for (var j=0; j<10; j++){
        count++;
    Game.map.setTileAt(0, i, j, auxi2[0].data[count]);
        
        }
      }
    
  }

  update() {
    
    
  }
}
Sup.registerBehavior(loadMap);
    
    
