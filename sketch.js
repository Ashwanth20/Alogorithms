var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 30, 80);
  movingRect = createSprite(100, 100, 80, 30);


  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "blue";

  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else{
    fixedRect.shapeColor = "red";
   movingRect.shapeColor = "blue";
  }

  drawSprites();
}