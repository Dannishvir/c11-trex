var trex, trex_running;
var edges;
var ground, groundImg;
var invisbleGround


function preload()
{

    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    groundImg = loadImage("ground2.png");
}


function setup()
{
    createCanvas(600,200);

    //create a trex sprite
    trex = createSprite(144, 120, 10, 30);
    trex.addAnimation("t", trex_running);
    trex.scale = 0.5
    // trex.velocityX = 2;

    //create the ground
    ground = createSprite(300, 170, 600, 20);
    ground.addImage(groundImg);

invisbleGround = createSprite(300,180,600,1);
invisbleGround.visible = false

    edges = createEdgeSprites();
}

function draw()
{
    background(190);

    textSize(20);
    fill("White");
    text(mouseX + "," + mouseY, mouseX, mouseY);

    //make ground move
    ground.velocityX = -2;

    //reset the ground
    if(ground.x < 0)
    {
        ground.x = 300
    }
    console.log(ground.x);


    //make trex jump
    if(keyDown("space") && trex.y > 150 )
    {
        trex.velocityY = -10;
    }

    console.log(trex.y)

    //gravity logic
    trex.velocityY = trex.velocityY + 0.5;
    trex.collide(invisbleGround)
    //trex.collide(edges[3]);

    drawSprites();
}
