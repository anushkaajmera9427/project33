const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var snow=[];
var maxsnow=100;
function preload(){
  bg=loadImage("snow3.jpg")
}

function setup() {
  canvas=createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  if(frameCount%250===0){
    for(var i=0;i<maxsnow;i++){
      snow.push(new Snow(random(0,800),random(0,400)));
    }
  }
}

function draw() {
  background(bg);  
  Engine.update(engine);
  
  for(var i=0;i<maxsnow;i++){
    snow[i].display();
  }
}