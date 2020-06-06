class Player {
    constructor(x,y,width,height){
      this.index = null ;
      this.name = null ;
      this.distance = 0 ;
      this.body = Bodies.rectangle(x,y,width,height);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
  
    }
        display(){
            var pos = this.body.position;
            rectMode(CENTER);
            fill(255);
            rect(pos.x, pos.y,20,50);
        }
}