function Allgrounds(){
  //Creating Ground....
  createGround(40);
  createGround(118);
  createGround(196);
  createGround(274);
  createGround(352);
  createGround(430);
  createGround(508);
  createGround(586);
  createGround(664);
  createGround(742);
  createGround(820);
  createGround(898);
  createGround(976);
  createGround(1054);
  createGround(1132);
  createGround(1210);
  createGround(1288);
  createGround(1366);
  createGround(1444);
  createGround(1522);
  createGround(1600);
  createGround(1678);
  createGround(1756);
  createGround(1834);
  createGround(1912);
  createGround(1990);
  createGround(2068);
  createGround(2068+78);
  createGround(2068+78*2);
  createGround(2068+78*3);
  createGround(2068+78*4);
  createGround(2068+78*5);
  createGround(2068+78*6);
  createGround(2068+78*7);
  createGround(2068+78*8);
  createGround(2068+78*9);
  createGround(2068+78*10);
  createGround(2068+78*11);
  createGround(2068+78*12);
  createGround(2068+78*13);
  createGround(2068+78*14);
  createGround(2068+78*20+27);
  createGround(2068+78*21+27);
  createGround(2068+78*22+27);
  createGround(2068+78*23+27);
  createGround(2068+78*24+27);
  createGround(2068+78*25+27);
  createGround(2068+78*26+27);
  createGround(2068+78*27+27);
  createGround(2068+78*28+27);
  createGround(2068+78*29+27);
  createGround(5732);
  createGround(5732+78);
  createGround(5732+78*2);
  createGround(5732+78*3);
  createGround(5732+78*4);
  createGround(5732+78*5);
  createGround(5732+78*6);
  createGround(5732+78*7);
  createGround(5732+78*8);
  createGround(5732+78*9);
  createGround(5732+78*10);
  createGround(5732+78*11);
  createGround(5732+78*12);
  createGround(5732+78*13);
  createGround(5732+78*14);
  createGround(5732+78*15);
  createGround(5732+78*16);

}
function createEnemy1(x,y){
  enemy = createSprite(x,y,50,50);
  enemy.addImage(enemy_img);
  enemy.depth = lep.depth-1;
  enemy.lifetime = 400;
  EnemyGroup.add(enemy);
  enemy.setCollider("rectangle",0,0,50,50)
  
 if(EnemyGroup.isTouching(lep)){
     //  gameState=end;
       EnemyGroup.setVelocityXEach(0);
      

  }
}
function AllBlocks(){
  createStein(1800,468);
  createStein(1832,468);
  createStein(1864,468);
  createStein(1896,468);
  //2Row
  createStein(1832,436);
  createStein(1864,436);
  createStein(1864,406);
  createStein(1896,436);
  createStein(1896,406);

  //After Distance....
  createStein(2925,468);
  createStein(2925+32,468);
  createStein(2925+32*2,468);
  createStein(2925+32*3,468);
  //Creating 2nd Row....
  createStein(2925,436);
  createStein(2925,406);
  createStein(2957,436);
  createStein(2957,406);
  createStein(2925+32*2,436);

  //Creating Goblin Castle....
  createStein(3800,406);
  createStein(3800+32,406);

  //2nd row....
  createStein(3800+32*3,360);
  createStein(3800+32*4,360);

  //Second row....
  createStein(3800+32*6,320);
  createStein(3800+32*7,320);

  //Straight line....
  createStein(4056,320);
  createStein(4056,320+32);
  createStein(4056,320+32*2);
  createStein(4056,320+32*3);
  
  //Cross line....
  createStein(4200,420);
  createStein(4200,420-32);
  createStein(4200,420-32*2);
  createStein(4200,420-32*3);




}
function Defence1(x,y){
Defence = createSprite(x,y);
Defence.addImage(D1);
}
function AllDefence(){
  Defence1(1930,468);
  Defence1(1970,468);
  Defence1(1970+40,468);
  Defence1(1970+40*2,468);
  Defence1(1970+40*3,468);
  Defence1(1970+40*4,468);
  Defence1(1970+40*5,468);
  Defence1(1970+40*6,468);
  Defence1(1970+40*7,468);
  Defence1(1970+40*8,468);
  Defence1(1970+40*9,468);
  Defence1(1970+40*10,468);
  Defence1(1970+40*11,468);
  Defence1(1970+40*12,468);
  Defence1(1970+40*13,468);
  Defence1(1970+40*14,468);
  Defence1(1970+40*15,468);
  Defence1(1970+40*16,468);
  Defence1(1970+40*17,468);
  Defence1(1970+40*18,468);
  Defence1(1970+40*19,468);
  Defence1(1970+40*20,468);
  Defence1(1970+40*21,468);
  Defence1(1970+40*22,468);
  Defence1(1970+40*23,468);
  Defence1(3800,468);
  Defence1(3800+40,468);
  Defence1(3800+40*2,468);
  Defence1(3800+40*3,468);
  Defence1(3800+40*4,468);
  Defence1(3800+40*5,468);
  Defence1(3800+40*6,468);
  Defence1(3800+40*7,468);
  Defence1(3800+40*8,468);
  Defence1(3800+40*9,468);




}
function LongBlock(x,y){
  Lblock = createSprite(x,y);
  Lblock.addImage(Lblock_img)
  Lblock.scale = 0.8
}
function AllLblocks(){
  LongBlock(2050,350);
  LongBlock(2050+350,350);
  LongBlock(2050+350*2,350);
}
function createBullet(){
  bullet = createSprite(lep.x,lep.y+30,50,50);
  bullet.addImage(Bullet_img);
  bullet.scale = 0.8;
  bullet.velocityX = 8;
}
function createBridge(x,y){
  bridge = createSprite(x,y,50,50);
  bridge.addImage(Bridge_img);

}
function AllBridges(){
   createBridge(3220,494);
   createBridge(3262,494);
   createBridge(3262+42,494);
   createBridge(3262+42*2,494);
   createBridge(3262+42*3,494);
   createBridge(3262+42*4,494);
   createBridge(3262+42*5,494);
   createBridge(3262+42*6,494);
   createBridge(3262+42*7,494);
   createBridge(3262+42*8,494);



   
}
function createFlying(x,y){
  flying = createSprite(x,y);
  flying.addImage(Flying_img);
 
}
function AllPlatforms(){
  createFlying(4600,460);
  createFlying(5000,460);
  createFlying(5400,460);
  }
