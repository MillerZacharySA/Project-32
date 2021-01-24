const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1,ground2;
var polygon;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,
    block11,block12,block13,block14,block15,block16,block17,block18,block19,
    block20,block21,block22,block23,block24,block25;

var launcher;

var score = 0;

function setup(){
    canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,600,350,20);
    ground2 = new Ground(1200,300,250,20);

    //Big Stack -- Layer 1 -- 7 Blocks
    block1 = new Box(450,565,50,75);
    block2 = new Box(500,565,50,75);
    block3 = new Box(550,565,50,75);
    block4 = new Box(600,565,50,75);
    block5 = new Box(650,565,50,75);
    block6 = new Box(700,565,50,75);
    block7 = new Box(750,565,50,75);

    //Big Stack -- Layer 2 -- 5 Blocks
    block8 = new Box(500,490,50,75);
    block9 = new Box(550,490,50,75);
    block10 = new Box(600,490,50,75);
    block11 = new Box(650,490,50,75);
    block12 = new Box(700,490,50,75);

    //Big Stack -- Layer 3 -- 3 Blocks
    block13 = new Box(550,415,50,75);
    block14 = new Box(600,415,50,75);
    block15 = new Box(650,415,50,75);

    //Big Stack -- Layer 4 -- 1 Block
    block16 = new Box(600,340,50,75);

    //Small Stack -- Layer 1 -- 5 Blocks
    block17 = new Box(1100,267.5,50,75);
    block18 = new Box(1150,267.5,50,75);
    block19 = new Box(1200,267.5,50,75);
    block20 = new Box(1250,267.5,50,75);
    block21 = new Box(1300,267.5,50,75);

    //Small Stack -- Layer 2 -- 3 Blocks
    block22 = new Box(1150,192.5,50,75);
    block23 = new Box(1200,192.5,50,75);
    block24 = new Box(1250,192.5,50,75);

    //Small Stack -- Layer 3 -- 1 Block
    block25 = new Box(1200,117.5,50,75);

    //scoring (ugh)
  

    polygon = new Polygon(100,400,75,75);

    launcher = new SlingShot(polygon.body,{x:100,y:400});

    Engine.run(engine);
}

function draw(){
    background(230);

    textSize(36);
    text("SCORE: " + score, 50, 50);
    text("Press space to retrieve the hexagon\nDrag your mouse and release to fire!", 400, 50);

    ground1.display();
    ground2.display();

    block1.display("blue");
    block2.display("blue");
    block3.display("blue");
    block4.display("blue");
    block5.display("blue");
    block6.display("blue");
    block7.display("blue");

    block8.display("cyan");
    block9.display("cyan");
    block10.display("cyan");
    block11.display("cyan");
    block12.display("cyan");

    block13.display("purple");
    block14.display("purple");
    block15.display("purple");

    block16.display("pink");

    block17.display("red");
    block18.display("red");
    block19.display("red");
    block20.display("red");
    block21.display("red");

    block22.display("orange");
    block23.display("orange");
    block24.display("orange");

    block25.display("yellow");

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();

    polygon.display();
    launcher.display();

    Engine.update(engine);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body, {x:100, y:400})
        launcher.attach(polygon.body);
    }
}