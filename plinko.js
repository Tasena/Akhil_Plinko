class Plinko{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:1.2,
            friction:0       
        }
        this.body = Bodies.circle (x, y,10,options)
        this.radius= 10
        World.add (world, this.body);
        
    }
    display(){
        ellipseMode(RADIUS)
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(90);
        strokeWeight(2)
        stroke("gray")
        fill("white");
        ellipse(0,0,this.radius,this.radius)
        pop()
      }
  }
  