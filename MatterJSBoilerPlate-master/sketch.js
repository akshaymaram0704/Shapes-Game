
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2, height, width, 40);
	hammer = new Hammer(100, 100,140,40);
	stone = new Stone(100,100,70,70);
	rubber = new Rubber(50,50,100);
	iron = new Iron(70,70,100,60);
	sand1 = new Sand(90,90,10,10);
	sand2 = new Sand(120,120,5,5);
	sand3 = new Sand(150,150,5,5);
	sand4 = new Sand(180,180,5,5);
	sand5 = new Sand(210,210,5,5);
	sand6 = new Sand(240,240,5,5);
	sand7 = new Sand(270,270,5,5);


	
	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("lightblue");
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  
  
  drawSprites();
 
}



