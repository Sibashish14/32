const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var canvas,engine,world,b1,b2,b3,bird,b5,sling;
function preload(){
  bgImg = loadImage("bg.png");
}
function setup(){
  canvas=createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  b1 = new Borders(400,200,600,10);
  b2 = new Borders(400,600,600,10);
  b3 = new Borders(400,200,10,400);
  b4 = new Borders(990,200,10,400);
  bird = new Bird(450,450,20,20);
  b5 = new Borders(500,300,50,10);
  sling = new Sling(bird.body,{x:500,y:550});
  
}

function draw() {
  background(bgImg); 
  Engine.update(engine);
  bird.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  sling.display(); 
  detectCollision();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}
function mousePressed(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}
function detectCollision(){
  var d = dist()
}