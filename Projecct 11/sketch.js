var path;
var surfer;
var pathImg;
var surferImg;
var leftboundary,rightboundary;

function preload(){
  //pre-load images
  surferImg = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
  surfer = createSprite(200,200);
  surfer.addAnimation("surfer",surferImg);
  surfer.scale = 0.08;
  leftboundary = createSprite(20,200,30,400);
  rightboundary = createSprite(380,200,30,400);
  leftboundary.visible = false;
  rightboundary.visible = false;
}

function draw() {
  background(0);
  surfer.x = World.mouseX;
  if(path.y > 400){
    path.y = height/2;
  }
  surfer.collide(leftboundary);
  surfer.collide(rightboundary);
  drawSprites();
}
