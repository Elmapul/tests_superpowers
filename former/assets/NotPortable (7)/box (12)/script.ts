Sup.ArcadePhysics2D.setGravity(0, -0.02);

class box extends Sup.Behavior {
  speed = 0.3;
  jumpSpeed = 0.45;

  update() {
    Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, Sup.ArcadePhysics2D.getAllBodies());
 //Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, Sup.getActor("Player").arcadeBody2D  );
    // As explained above, we get the current velocity
    let velocity = this.actor.arcadeBody2D.getVelocity();

    
     let touch = Sup.getActor("Player").arcadeBody2D.getTouches().bottom;
    if (touch) { Sup.getActor("Box").destroy();   Sup.log("bottom"); }
    
    // We override the `.x` component based on the player's input
    if (Sup.Input.isKeyDown("LEFT")) {
      
    
    } else if (Sup.Input.isKeyDown("RIGHT")) {
      
      
      
    } else velocity.x = 0;

    // If the player is on the ground and wants to jump,
    // we update the `.y` component accordingly
    let touchBottom = this.actor.arcadeBody2D.getTouches().bottom;
    if (touchBottom) {
      if (Sup.Input.wasKeyJustPressed("UP")) {
        // velocity.y = this.jumpSpeed;
        
      } else {
        // Here, we should play either "Idle" or "Run" depending on the horizontal speed
        if (velocity.x === 0) {}
        
      }
    } else {
      // Here, we should play either "Jump" or "Fall" depending on the vertical speed
      if (velocity.y >= 0) {}
      else {}
    }

    // Finally, we apply the velocity back to the ArcadePhysics body
    this.actor.arcadeBody2D.setVelocity(velocity);
  }
}
Sup.registerBehavior(box);
