class Dustbin {
   // creating the constructor
  constructor(x, y, width, height) {
      this.body = Bodies.rectangle(x, y, width, height,{isStatic:true});
      this.width = width;
      this.height = height;
      
      // loading the image 
      this.dustbin=loadImage("Sprites/dustbin.png")
      World.add(world, this.body);
    }

    // creating the display
    display(){
    // adding the image
    image(this.dustbin,569,360)
     var pos =this.body.position;
     var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      this.dustbin.scale=0.5
      pop();
    }
  }