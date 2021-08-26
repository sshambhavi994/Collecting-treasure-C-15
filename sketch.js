var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImage = loadImage("Road.png");
  boyImage = loadAnimation("Runner-1.png","Runner-2.png");
  cashImage = loadImage("cash.png");
  diamondsImage = loadImage("diamonds.png");
  jwelleryImage = loadImage("jwell.png");
  swordImage = loadImage("sword.png");
  endImage =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);

path=createSprite(200,200);
path.addImage(pathImage);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("Sahil_running",boyImage);
boy.addAnimation("game_ended",endImage)
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    

    if (cashG.isTouching(boy)) 
{
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
   if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection = treasureCollection + 100;

      
    }
    if(jwelleryG.isTouching(boy)) 
    {
      jwelleryG.destroyEach();
      treasureCollection = treasureCollection + 150;
    }
    if(swordGroup.isTouching(boy))
    {
      gameState = END;

    }
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

  }
    else if (gameState === END){
      boy.changeAnimation("game_ended",endImage);
      boy.scale = 0.8
      boy.x = 200;
      boy.y = 300;

      cashG.destroyEach();
      cashG.setVelocityEach(0);

      diamondsG.destroyEach();
      diamondsG.setVelocityEach(0);

      jwelleryG.destroyEach();
      jwelleryG.setVelocityEach(0);

      swordGroup.destroyEach();
      swordGroup.setVelocityEach(0);

      path.velocityY = 0;
    }
    
  drawSprites();
  
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
  }



function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImage);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImage);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImage);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImage);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}