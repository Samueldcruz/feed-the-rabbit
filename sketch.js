
var move;
var moveImg;
//////////////
var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var score=0;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  moveImg = loadImage("move.png");

}

function setup(){
  
  createCanvas(400,800);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

//Math.round(random(200, 360)),Math.round(random(20, 370)), 10, 10)
apple =  createSprite(200,200, 10, 10);
apple.scale =0.05;
apple.velocityY = 9;


move = createSprite(200,650,30,30);
move.scale =0.4;
move.addImage(moveImg);


apple.addImage(appleImg);
}


function draw() {
  
  background(0);


  //apple =  createSprite(Math.round(random(1, 300)),Math.round(random(500, 370)), 10, 10);
  //apple.scale =1.5;
  if (frameCount % 40 == 0){
  apple.x = Math.round(random(1, 300));
  }
  //apple.visible=1;
 // var select_apple = Math.round(random(1,4));
  
 // if (frameCount % 80 == 0){
  //  if (select_sprites == 1){
  //    function createApples() {
 //   apple = createSprite(random(50,350),40 ,10, 10);
  //}
  
  // }
 //}
 
  

fill("black")




  edges= createEdgeSprites();
  rabbit.collide(edges);


    //jump when the space key is pressed
    if(keyDown("a")&& rabbit.y >= 100) {
      rabbit.velocityX = -10;
  }
  
  if(keyDown("d")&& rabbit.y >= 100) {
    rabbit.velocityX = 10;
}
//if(rabbit.collide(apple)){
  //apple.setVelocity(0,0);
  //apple.visible=0;
//  score=+1;
//}

if (rabbit.isTouching(apple)){
  //apple.destroyEach();
  //apple.visible=0;
 score=score+1;
 if (score>=15 )
 {
  reset();
 }
}

  drawSprites();



// To repeat the Path
if(apple.y > 260 ){
  //path1.y = height/2;
  apple.y =0;
}

if(rabbit.y > 350 ){
  //path1.y = height/2;
  rabbit.x =100;
}
fill("red");
textSize(16);
text("score : " + score,95,103);

}

//function createApples() {
  //apple = createSprite(Math.round(random(50, 350)),40, 10, 10);
  //add image to apple sprites
  //scale the sprite if requried
  //gice the velocaty so that that the apples move downloads
  //give lifetime to the apple sprites 


//}
function reset(){
  score=0;
  //apple 

  //rabbit

  if(rabbit.y > 350 ){
    //path1.y = height/2;
    rabbit.x =100;
  }
}
