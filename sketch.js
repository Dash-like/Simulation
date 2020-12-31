const Engine = Matter.Engine, 
World = Matter.World,
Bodies = Matter.Bodies,
Constraint = Matter.Constraint;

var ground;
var ball;
var chain;
var blocks = [];
var roof;

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 780, 1200, 10)
roof = new Ground(300, 50, 300, 10)
  ball= new Ball(300, 250, 80);
  chain = new Chain(roof.body, ball.body);
for(var i =0; i < 7; i++){
  var block = new BaseClass(900, 100, 70, 70);
  blocks.push(block);
  var block = new BaseClass(800, 100, 70, 70);
  blocks.push(block);
  var block = new BaseClass(700, 100, 70, 70);
  blocks.push(block);
  
}
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground.display();
  ball.display();
  chain.display();
  for(var i = 0; i < blocks.length; i++){
    blocks[i].display();
  }
  roof.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX, y:mouseY});
}