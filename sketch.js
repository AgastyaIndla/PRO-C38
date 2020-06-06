const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var canvas;
var track1;

function setup() {
  canvas = createCanvas(1536,610);

  engine = Engine.create();
  world = engine.world;

 track1 = new Track(768,150);
 track2 = new Track(768,300);
 track3 = new Track(768,450);
 track4 = new Track(768,600);

 player1 = new Player(120,120);
 player2 = new Player(120,270);
 player3 = new Player(120,420);
 player4 = new Player(120,570);
}

function draw() {

  text("x:"+mouseX,50,50); 
  text("y:"+mouseY,50,70);

  background(0,100); 
  
  track1.display();
  track2.display();
  track3.display();
  track4.display();

  player1.display();
  player2.display();
  player3.display();
  player4.display();


  //drawSprites();
}