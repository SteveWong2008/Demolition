class sand {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':1,
          'density':.5
      }
      this.body = Bodies.circle(x, y, 4, options, 100);
      this.width = 8;
      this.height = 8;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("tan");
      ellipse(0, 0, this.width, this.height,100);
      pop();
    }
  };
  