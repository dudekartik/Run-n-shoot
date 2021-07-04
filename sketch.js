var runner, runnerImage
var obstacle
var platform,platformImage,platformGroup
var bullet
var coin,coinImage
var ground

function preload(){
  runnerImage= loadAnimation("Images/boy1.png","Images/boy2.png","Images/boy3.png","Images/boy4.png","Images/boy5.png",
  "Images/boy6.png","Images/boy7.png","Images/boy8.png","Images/boy9.png","Images/boy10.png");
  coinImage = loadImage("Images/coin.png");
  platformImage = loadImage("Images/platforms.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight-50);
  runner = createSprite(200, displayHeight-130 , 50, 50);
  runner.addAnimation("runner",runnerImage);
  ground = createSprite(displayWidth/2,displayHeight-100,displayWidth,10)
 ground.shapeColor="green"
 platformGroup=new Group()
}

function draw() {
  background(0,0,0); 
  runner.collide(ground)

  if(keyDown("space")){
    runner.velocityY=-10
  }
  if(keyWentDown("s")){
    createBullet()
  }
  runner.velocityY=runner.velocityY+0.8
  runner.bounceOff(platformGroup)
  if(runner.x-0){
   runner.x=200  
  }
  
  console.log(runner.velocityY)
  spawnPlatform();
  spawnGroundEnemy();
  spawnAirEnemy();
  drawSprites();
}

function createBullet(){
  bullet=createSprite(runner.x,runner.y,20,5)
  bullet.velocityX=20
  bullet.shapeColor="white"
}

function spawnPlatform(){
  if(frameCount%150===0){
  platform=createSprite(displayWidth,300,10,10)
  platform.addImage(platformImage)
  platform.scale=0.3
  platform.velocityX=-4
  platform.y = Math.round(random(150,600));
  platformGroup.add(platform)
  platform.setCollider("rectangle",0,0,300,100)

  var rand=Math.round(random(1,3))
  if(rand===1){
    coin=createSprite(platform.x,platform.y-35,10,10);
    coin.addImage(coinImage);
    coin.velocityX=-4
    coin.scale=0.06
  } 

  else if(rand===2){
    coin=createSprite(platform.x+15,platform.y-35,10,10);
    coin.addImage(coinImage);
    coin.velocityX=-4
    coin.scale=0.06
    coin2=createSprite(platform.x-15,platform.y-35,10,10);
    coin2.addImage(coinImage);
    coin2.velocityX=-4
    coin2.scale=0.06
  } 
  else {
    coin=createSprite(platform.x,platform.y-35,10,10);
    coin.addImage(coinImage);
    coin.velocityX=-4
    coin.scale=0.06
    coin2=createSprite(platform.x-30,platform.y-35,10,10);
    coin2.addImage(coinImage);
    coin2.velocityX=-4
    coin2.scale=0.06
    coin3=createSprite(platform.x+30,platform.y-35,10,10);
    coin3.addImage(coinImage);
    coin3.velocityX=-4
    coin3.scale=0.06
  } 
 
  }
}

function spawnGroundEnemy(){
if(frameCount%100===0){
enemy=createSprite(windowWidth+10,displayHeight-130,10,10);
enemy.velocityX=-4
}
}

function spawnAirEnemy(){
  if(frameCount%170===0){
  enemy2=createSprite(windowWidth+10,displayHeight-130,10,10);
  enemy2.y=random(100,displayHeight-200)
  enemy2.velocityX=-4
  }
  }