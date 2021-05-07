var wall,car
var speed, weight


function setup() {
  createCanvas(1600,400);
  wall=createSprite(1500, 200, 60, height/2)
  wall.shapeColor=80,80,80
  
  car=createSprite(50, 200, 50, 50);


  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  if (wall.x-car.x<   car.width/2+wall.width/2){
 var deformation = 0.5*weight*speed*speed/22500
 car.velocityX=0
 if (deformation<100){
   car.shapeColor="green"
 }
 if (deformation>100&&deformation<180){
  car.shapeColor="yellow"
}
if (deformation>180){
  car.shapeColor="red"
}
  }
  drawSprites();
}