//Create global variables for the sprites
var car , wall;
var speed , weight;

function setup() {
  createCanvas(1600,400);
 

  //Assign random values to speed & weight
  speed = random(50,90)
  weight = random(400,1500)

  //Create the sprites
  car  = createSprite(50,200,50,50);

  wall = createSprite(650,200,60,height/2)
  wall.shapeColor = color(80,80,80)

  
}

function draw() {
  background(300);  
  
  car.velocityX = speed;

  if (wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight *speed *speed/22509;
    if (deformation>180)
    {
      car.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor = color(230,230,0);
    }

    if(deformation<100)
    {
      car.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}
