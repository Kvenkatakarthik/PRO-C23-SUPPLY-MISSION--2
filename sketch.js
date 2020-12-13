var helicopterIMG, helicopterSprite, packageSprite,packageIMG,wall1,wall2,walll3,wall1_options0;
var packageBody
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
createCanvas(800, 700);
rectMode(CENTER);

//wall1=createSprite(370,650,200,20)
wall2=createSprite(280,550,20,200)
wall3=createSprite(460,550,20,200)

packageSprite=createSprite(width/2, 80, 10,10);
packageSprite.addImage(packageIMG);
packageSprite.scale=0.2

helicopterSprite=createSprite(width/2, 200, 10,10);
helicopterSprite.addImage(helicopterIMG);
helicopterSprite.scale=0.6;

groundSprite=createSprite(width/2, height-35, width,10);
groundSprite.shapeColor=color(255);

engine = Engine.create();
world = engine.world;
packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
World.add(world, packageBody);

wall1 = Bodies.rectangle( 370,650,200,20, {isStatic:true} );
World.add(world, wall1);

//Create a Ground
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground);

Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
background(0);
packageSprite.x= packageBody.position.x ;
packageSprite.y= packageBody.position.y ;




var wall1_options ={
    isStatic: true
}

ground = Bodies.rectangle(1350/2,550,1350,20,wall1_options);
World.add(world,wall1);


rect(wall1.position.x,wall1.position.y,250,15);
keyPressed();
drawSprites();

}

function keyPressed() {
if (keyCode === DOWN_ARROW) {
// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

Matter.Body.setStatic(packageBody,false);

}

}



