class cameraBehavior extends Sup.Behavior {
  awake() {
    
  }

  update() {
    //Sup.getActor("Camera").camera.actor.moveLocalX(-1);
    var px=Sup.getActor("Player").getX();
    var py=Sup.getActor("Player").getY();
    Sup.getActor("Camera").camera.actor.setPosition(px,py,10);
  }
}
Sup.registerBehavior(cameraBehavior);
