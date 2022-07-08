
function setup() {
  createCanvas(400,400);
  box=createSprite (200,200,40,40);
  box.shapeColor="Blue"
}

function draw() 
{
  background(30);
  if(keyDown(RIGHT_ARROW)){
    box.position.x=box.position.x+3
  
  }
if(keyDown(LEFT_ARROW)){
  box.position.x=box.position.x-3
}
if(keyDown(UP_ARROW)){
  box.position.y=box.position.y-5
}
if(keyDown(DOWN_ARROW)){
  box.position.y=box.position.y+5
}
drawSprites();
}




