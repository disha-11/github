var ballimg,paddleimg;
function preload() {
ballimg=loadImage("ball.png");
paddleimg=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   ball=createSprite(200,200,10,10);
  ball.addImage("ball",ballimg);
  paddle=createSprite(350,200,10,10);
  paddle.addImage("paddle",paddleimg);
  ball.velocityX=-9;

 
  
  
}

function draw() {
  background(205,153,0);
  edge=createEdgeSprites();
ball.bounceOff(edge[0]);
ball.bounceOff(edge[2]);
ball.bounceOff(edge[3]);
ball.bounceOff(paddle);
randomVelocity();
  
  
  if(keyDown(UP_ARROW))
  {
   paddle.Y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
     paddle.Y=paddle.y+20;
  }
  drawSprites();
  
}

function randomVelocity()
{
ball.velocityY=9;
  
ball.velocityX=9;
}

