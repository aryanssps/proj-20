
var car;
var speed;
var stopper,
var speed;
function setup() {
  createCanvas(10000,1000);
  speed=random(55,90);
  weight=random(400,1500);
  stopper=createSprite(1200,255,50,120);
  stopper.shapeColor="red"
  car=createSprite(100, 250, 50, 50);
  car.shapeColor="lightblue"

  
  car.velocityX=speed;

  

}

function draw() {
background("white")
 car.velocityX=speed;

  line(0,50,4000,50);
  line(0,330,4000,330);
  
  if(wall.x - car.x < wall.width/2 + car.width/2) {
    car.velocityX = 0 ;
    var deformation = 0.5*weight*speed*speed /22500 ; 
    if(deformation > 180 )
    {
      car.shapeColor = "orange";
    }
    if(deformation < 180 && deformation  > 100 ) 
    {
      car.shapeColor = "blue";
    }
    if(deformation < 100 ) 
    {
      car.shapeColor = "red";
    }
  } 
  
}



  drawSprites();
}