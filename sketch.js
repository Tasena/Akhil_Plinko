//Matter.js constants
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//variables
var ground;
var divHeight = 150;

//arrays
var plinkos = [];
var balls = [];
var divs = [];

function setup() {
    createCanvas(480,550);
    engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
		divs.push(new Ground(k, height-divHeight/2, 10, divHeight));
   }

	for(var j = 40; j <= width; j = j + 50){
		plinkos.push(new Plinko(j,155));
	}
	for(var j = 15; j <= width-10; j = j + 50){
		plinkos.push(new Plinko(j,205));
	}
	for(var j = 40; j <= width; j = j + 50){
		plinkos.push(new Plinko(j,255));
	}
	for(var j = 15; j <= width-10; j = j + 50){
		plinkos.push(new Plinko(j,305));
	}
	
}  
function draw() {
	background(0);  
	Engine.update(engine);
	drawSprites();

	if(frameCount % 60 === 0){
		console.log("e")
		//balls.push(new Ball(random((width/2)-10,(width/2)+10),10))
		balls.push(new Ball(random(80,400),20,random(3,10)));

	}

	ground.display();

	for (var k = 0; k < divs.length; k++) {
     
		divs[k].display();
	}

	for (var i = 0; i < plinkos.length; i++) {
     
		plinkos[i].display();
		
	  }

	for(var y = 0;y < balls.length; y++){
		balls[y].display();
	}
}     