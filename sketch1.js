var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 30, 80);
  movingRect = createSprite(400, 500, 80, 30);

  fixedRect.velocityY = 3;
  movingRect.velocityY = -3;

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "blue";

  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);  

  

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){

        fixedRect.velocityX = fixedRect.velocityX * -1;
        movingRect.velocityX = movingRect.velocityX * -1;
    }



    if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
        fixedRect.velocityY = fixedRect.velocityY * -1;
        movingRect.velocityY = movingRect.velocityY * -1;
  }
  
  drawSprites();
}