const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11,block12, block13, block14, block15, block16, blocks1, blocks2, blocks3, blocks4,  blocks5,  blocks6, blocks7, blocks8;
var backgroundImg,platform;
var  slingShot;

var ground1, ground2;

function preload(){
    polygon_img=loadImage("polygon.png"); 
  }

function setup(){

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    

//level one 
  block1 = new Block(300,275,30,40);
 console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40); 
  block4 = new Block(390,275,30,40); 
  block5 = new Block(420,275,30,40); 
  block6 = new Block(450,275,30,40); 
  block7 = new Block(480,275,30,40); 
  
  //level two 
  block8 = new Block(330,235,30,40); 
  block9 = new Block(360,235,30,40); 
  block10 = new Block(390,235,30,40); 
  block11 = new Block(420,235,30,40); 
  block12 = new Block(450,235,30,40); 
  
  //level three 
  block13 = new Block(360,195,30,40); 
  block14 = new Block(390,195,30,40); 
  block15 = new Block(420,195,30,40); 
  
  //top 
  block16 = new Block(390,155,30,40); 
  
  //set 2 for second stand 
  
  //level one 
  blocks1 = new Block(640,175,30,40); 
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40); 
  blocks5 = new Block(760,175,30,40); 
  
  //level two 
  
  blocks6 = new Block(670,135,30,40); 
  blocks7 = new Block(700,135,30,40); 
  blocks8 = new Block(730,135,30,40);

 //top 
 blocks9 = new Block(700,95,30,40);

 ground1 =  new Ground(390,275,180,10);
// stand1 = new Stand(390,300,250,10);
  ground2 = new Ground(700,200,200,10);

 ball = Bodies.circle(50,200,20); World.add(world,ball);
 slingShot = new Slingshot(this.ball,{x:100,y:200});
}


    function draw(){
        background("maroon");
    Engine.update(engine);

        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        block6.display();
        block7.display();
        block8.display();
        block9.display();
        block10.display();
        block11.display();
        block12.display();
        block13.display();
        block14.display();
        block15.display();
        block16.display();
        blocks1.display();
        blocks2.display();
        blocks3.display();
        blocks4.display();
        blocks5.display();
        blocks6.display();
        blocks7.display();
        blocks8.display();
        ground1.display();
        ground2.display();
        slingShot.display();
        imageMode(CENTER) 
        image(polygon_img ,ball.position.x,ball.position.y,40,40);

        
    }


    function mouseDragged(){
        
        Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY}); 
    }
     function mouseReleased(){
          slingShot.fly(); 
        }

