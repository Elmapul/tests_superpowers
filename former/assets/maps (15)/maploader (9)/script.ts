


class loadMap extends Sup.Behavior {
  awake() {
    //loadDoc();
    //Sup.getActor("").tileMapRenderer.
 //Game.map.setTileAt(Game.waterLayer, targetTileX, targetTileY, 16);
    
    
    
    var auxiliar=mydata;
    var auxi2=auxiliar.layers;
    
    
    
    
    //Game.map.setTileAt(0, 16, 5, 3);
    
    var count=0;
    for (var y=0;y<=20;y++){
      for (var x=0; x<40; x++){
        //var teste;
        //var teste=Game.map.getTileAt(0,x,19-y);
        var teste=auxi2[0].data[count]-1;
        console.log(teste);
        if (teste===1 || teste===0){
          Game.map.setTileAt(0, x , 19-y,-1);////
    
          //Game.map.setTileAt(0, x , 19-y,0); ////
          }else{
    Game.map.setTileAt(0, x , 19-y, (auxi2[0].data[count]-1));        
          }
        
    
        count++;
        
        }
      }
    
  }

  update() {
    
    
  }
}
Sup.registerBehavior(loadMap);
    
    
