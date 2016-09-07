
module Game {
  
  export let map: Sup.TileMap;
        
          export function initialize() {
   let mapActor = Sup.getActor("Tile Set");
            
   
   Game.map = Sup.get("Map" , Sup.TileMap);            
  //new Sup.TileMapRenderer(mapActor, Game.map);
            
            
            
    
  }
       }
Game.initialize();


 