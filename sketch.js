function setup() {

  createCanvas(400, 400);
  background = "blue"
  sea=createSprite(100,200,30,30)
  sea.addImage("sea.Img");
  sea.velocityX = -5
  sea.scale = 0.4
  ship.addAnimation = ("movingShip",shipImg1)
  ship.scale = 0.25
}
var ship, ocean ;
var seaImg ,shipImg;
function preload(){
seaImg = loadimage("sea.png")
shipImg2 = loadAnimation("ship-1.png")



}


function draw() {
  background(220);
  sea.velocityX = -3;
  

  if (sea.x > 0){
    sea.x = sea.width/8
  }
}