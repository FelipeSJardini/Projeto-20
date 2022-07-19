
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Square,rectangle,circle
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var Square_options = {
		restitution: 0.7,
		friction: 0.01,
		frictionAir: 0.1
	}

	var circle_options = {
		restitution: 0.5,
		friction: 0.02,
		frictionAir: 0
	}

	var rectangle_options = {
		restitution: 0.01,
		friction: 1,
		frictionAir: 0.3
	}

	//Crie os Corpos Aqui.
	Square = Bodies.rectangle(110,50,10,10,Square_options);
	World.add(world,Square)

	circle = Bodies.circle(220,10,10,circle_options);
	World.add(world,circle)

	rectangle = Bodies.rectangle(350,50,50,10,rectangle_options);
	World.add(world,rectangle)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
	rectMode(CENTER)

	rect(Square.position.x,Square.position.y,10,10)
	ellipse(circle.position.x,circle.position.y,10)
	rect(rectangle.position.x,rectangle.position.y,50,10)

}


