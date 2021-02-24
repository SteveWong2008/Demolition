
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone1;
var ground1;
var hammer1;
var rubber1;
var iron1;
var sand1, sand2, sand3, sand4, sand5;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	stone1 = new stone(800,300,70,70)
	ground1 = new Ground(500,height,1000,20)
	hammer1 = new hammer(500,500)
	rubber1 = new rubber(500,40)
	iron1 = new iron(800,500,90,90)
	sand1 = new sand(300,600)
	sand2 = new sand(340,100)
	sand3 = new sand(390,500)
	sand4 = new sand(400,300)
	sand5 = new sand(950,200)
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  stone1.display();
  ground1.display();
  hammer1.display();
  rubber1.display();
  iron1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
}



