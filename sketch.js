 var bullet,wall;
 var speed,weight,thickness;



   function setup() {
   createCanvas(800,400);

   speed=random(223,331);
   weight=random(30,52);
   thickness=random(22,83);
  
  
   bullet =createSprite(50, 200, 30, 10);
   bullet.velocityX=speed;
   
   wall =createSprite(700,200,thickness,height/2);
   
  }

 function draw() {
   background(0); 

   function hascCollied(wall,bullet){
     bulletRightEdge=bullet.x+bullet.width;
     wallLeftEdge=wall.x;

     if(bulletRightEdge>=wallLeftEdge)
     {
       return true
   }
     return false

   }

   if(hascCollied(wall,bullet)){

    bullet.velocityX=0;
     var damage=0.5 * speed * speed/(thickness*thickness*thickness);

     if(damage>10){
       wall.shapeColor=color(255,0,0);
     }

     if(damage<5){
       wall.shapeColor=color(0,255,0);
     }
   }

   
   

   drawSprites();
 }