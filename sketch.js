var dog,happyDog,dogimage
var database
var foodS,foodStock

function preload()
{
dogimage=loadImage("sprites/dogimg.png")
happyDog=("sprites/dogimg1.png")
}

function setup() {
  createCanvas(500, 500);
  background(46,139,87)
  
}


function draw() {  
  dog= new sprite(100,100,30,30)
  dog.addImage(dogimage)

  foodStock=database.ref('Food');
  foodStock.on("value",readStock)

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();

}



