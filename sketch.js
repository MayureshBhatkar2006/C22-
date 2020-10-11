const Engine= Matter.Engine
const World= Matter.World
const Bodies=Matter.Bodies
var engine,world,object,ground;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
  var ground_option=
  { 
    isStatic:true
  }
  var object_option=
  {
    restitution:2.0
  }
  object=Bodies.circle(200,100,30,object_option)
  World.add(world,object)
  ground=Bodies.rectangle(200,390,200,20,ground_option)
  World.add(world,ground)
}

function draw() {
  background(255,255,255);
  Engine.update(engine) 
  ellipseMode(CENTER) 
  ellipse(object.position.x,object.position.y,30,30)
  rectMode(CENTER) 
  rect(ground.position.x,ground.position.y,400,20)
  drawSprites();
}