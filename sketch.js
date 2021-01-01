//Variables....
var platform;
var Bullet;

//Image Variable....
var background_img,lep1_img,backgroundSprite;
var BgSprite2;
var grass_img;
var EWood_img;
var Bullet_img;

//Aniation Variables....
var Running;

//Variables & Images for Buttons....
var restart_img,start_img,start_button;

//Variables & Image's for Enemies....
var enemy_img; 
var Defence1_img,Defence1;

//Creating Enemys GRoup
var EnemyGroup;
var BlocksGroup;


//Creating gameStates....
var start = 1;
var play = 2;
var end = 3;
var gameState = start;
                
function preload(){
 enemy_img = loadImage("images/enemy.png");
 background_img = loadImage("images/bg.png");
 lep1_img = loadAnimation("images/standing.png");
 Running =  loadAnimation("images/l1.png","images/l2.png","images/l3.png");
 lep_running_reverse =  loadAnimation("images/l1flip.png","images/l2flip.png","images/l3flip.png");
 restart_img = loadImage("images/restart.png");
 start_img = loadImage("images/play_button.png");
 grass_img = loadImage("images/grass.png");
 D1 = loadImage("images/D1.png")
 EWood_img = loadImage("images/EWood.png");
 NWood = loadImage("images/LongW.png");
 Stein_img = loadImage("AFiles/Stein.png");
 Lblock_img = loadImage("AFiles/Stone_1_1.png");
 Bullet_img = loadImage("images/Bullet.png");
 Bridge_img = loadImage("images/Bridge.png");
 Flying_img = loadImage("AFiles/FlyingPlatform.png")
 }

function setup(){
  EnemyGroup = new Group();
  //Creating Canvas....
  var canvas = createCanvas(displayWidth*5,displayHeight-150);
  
  //Creating Background Sprite....
  backgroundSprite = createSprite(1000,300,1300,600);
  backgroundSprite.addImage(background_img);
  backgroundSprite.scale =1.8;

  //Creating Second Background Sprite...
  BgSprite2 = createSprite(7000,300,1300,600);
  BgSprite2.addImage(background_img)
  BgSprite2.scale = 1.8;

  //Creating Invisibleground....
  invisibleGround = createSprite(2000,517,4800,20);
  invisibleGround.visible = true;

  invisibleGround2 = createSprite(6450,517,1500,20);

  //Creating StartButton....
  start_button = createSprite(650,300,50,50);
  start_button.visible = false;
  start_button.addImage(start_img);
  start_button.scale = 0.4;

  //Creating RestartButton....
  restart = createSprite(500,400,50,50);
  restart.visible = false;
  restart.addImage(restart_img);
  restart.scale = 1.2
  
  //Creating Lep....
  lep = createSprite(100,480,50,50);
  lep.addAnimation("lep1",lep1_img); 
  lep.addAnimation("Running",Running);
  lep.velocityY = 1;
  lep.scale = 1.3;

  BlocksGroup = new Group();
  if(lep.isTouching(BlocksGroup)){
    lep.collide(BlocksGroup);
  }

  //Creating A Trunk....
  EnemyWood = createSprite(1400,450,50,50);
  EnemyWood.addImage(EWood_img);
  EnemyWood.depth = lep.depth;

  //Creating Normal Trunk....
  Wood = createSprite(1477,437,50,50);
  Wood.addImage(NWood);
  Wood.depth = lep.depth;
  
  //Creating all Grounds....
  Allgrounds();

  //Createing All Blocks....
  AllBlocks();

  //Creating All defences....
  AllDefence();

  //Creating All Long Blocks....
  AllLblocks();

  //Creating All Bridges....
  AllBridges();
  
  //Creating all flying platforms....
  AllPlatforms();

  

}
function draw(){
   //Creating Background....
    background(0);
    
    if(lep.isTouching(BlocksGroup)){
      lep.collide(BlocksGroup)
    
    }
   //Creating Bullets....
    if(keyWentDown(UP_ARROW)){ 
         createBullet();
    }
   
   //Using all Gamestates....
    if(gameState===start){


        start_button.visible = true;
        restart.visible = false;
  
    if(mousePressedOver(start_button)){
      
         gameState=play;

       }
    }
    else if(gameState===play){

      if(lep.x < 1450){
        if(World.frameCount%80==0){
            createEnemy1(1400,470);
            enemy.velocityX = -5;

          if(EnemyGroup.isTouching(lep)){ 
              gameState=end; 
              EnemyGroup.setVelocityXEach(0); 
            }
          }
        
        }
        start_button.visible = false;
        restart.visible = false;

        //.log(lep.y);
        if(keyCode === 32 && lep.y >= 442){
          lep.velocityY = -50;
        }
        lep.velocityY = lep.velocityY+2.5;
        
    if(keyDown("right")){
      lep.x  = lep.x +15;
      lep.changeAnimation("Run",Running);
  }
      }
      
   if(keyDown("left")){
    lep.x = lep.x-5;
    lep.changeAnimation("reverse",lep_running_reverse)
}
       

       else if(gameState===end){
         restart.visible = true;
       }
     
  
     lep.collide(invisibleGround); 
    
     //console.log(lep.y)
    
    drawSprites();

      }

function Restart(){
  gameState=play;
  restart.visible = false;
  lep.changeAnimation(lep1_img);
  lep.x = 100;
}
function createGround(x){
  grass = createSprite(x,500,100,20);
  grass.addImage(grass_img);
}
function createStein(x,y){
  Block = createSprite(x,y,50,50);
  Block.addImage(Stein_img);
  Block.scale = 0.8;
  BlocksGroup.add(Block);
  Block.debug = true;
  Block.setCollider("rectangle",5,10,5,5)

 
}