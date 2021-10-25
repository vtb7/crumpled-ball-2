
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var balloptions
var wall
var wall2
var wall3
function preload()
{
	
}

function setup() {
	createCanvas(1300, 1200);
	

	engine = Engine.create();
	world = engine.world;
    var balloptions={
		restitution:0.3,
	}
	//Create the Bodies Here.
	ball = Bodies.circle(150,200,20,balloptions)
    World.add(world,ball)
	wall = Bodies.rectangle(300,200,50,5)
	World.add(world,wall)
	wall2 = Bodies.rectangle(350,40,1,10)
	World.add(world,wall2)
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  rect(wall.position.x,wall.position.y,20)
  ellipse(ball.position.x,ball.position.y,20)
  
 
}





