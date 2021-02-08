
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(400,600,800,20)

	paper = new Paper(100,100,20)
   
	dustbin1 = new Dustbin(530,530,20,100)
  dustbin2 = new Dustbin(690,530,20,100)
  dustbin3 = new Dustbin(610,580,150,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  paper.display()
  ground.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60})
  }
}



