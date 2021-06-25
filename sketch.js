const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World

var engine,world,ground

function setup() {

  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
 var opt={
   isStatic:true
 }

 ground=Bodies.rectangle(200,380,400,15,opt);
  World.add(world,ground) //soul


  
  
}

function draw() {
  background("black");  
  Engine.update(engine)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,15)
}