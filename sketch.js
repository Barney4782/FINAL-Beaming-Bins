// Insert global (can be used in all functions) variables here

var bgImg;
var bg;

var banana
var bananaImg;

var barrier

var apple
var appleImg;

var pizza
var pizzaImg;

var cardboard
var cardboardImg;

var chip
var chipImg

var wasteBin
var wasteBinImg;

var recycleBin
var recycleBinImg;

var compostBin
var compostBinImg;

var softPlasticsBin
var softPlasticsBinImg;

var restartBtn
var restartBtnImg

var score = 0;

var misses = 0;

var gameState = 0;


function preload() {

    bgImg = loadImage("assets/jungle.png");

    wasteBinImg = loadImage("assets/wasteBin.png");
    recycleBinImg = loadImage("assets/recycleBin.png");
    compostBinImg = loadImage("assets/compostBin.png")
    softPlasticsBinImg = loadImage("assets/softPlasticsBin.png")

    bananaImg = loadImage("assets/banana.png")
    appleImg = loadImage("assets/apple.png")
    pizzaImg = loadImage("assets/pizza.png")
    cardboardImg = loadImage("assets/cardboard.png")
    chipImg = loadImage("assets/chips.png")

    restartBtnImg = loadImage("assets/restart.png")

}

function setup() {
    createCanvas(1690, 840);

    wasteBin = createSprite(600, 600, 50, 50)
    wasteBin.addImage(wasteBinImg)
    wasteBin.scale = 0.2

    recycleBin = createSprite(800, 600, 50, 50)
    recycleBin.addImage(recycleBinImg)
    recycleBin.scale = 0.2

    compostBin = createSprite(1000, 600, 50, 50)
    compostBin.addImage(compostBinImg)
    compostBin.scale = 0.2

    softPlasticsBin = createSprite(1200, 600, 50, 50)
    softPlasticsBin.addImage(softPlasticsBinImg)
    softPlasticsBin.scale = 0.2

    barrier = createSprite(1690, 530, 3380, 20)
    barrier.visible = false;

    restartBtn = createSprite(820, 350, 50, 50)
    restartBtn.addImage(restartBtnImg)
    restartBtn.visible = false;

}

function draw() {
    image(bgImg, 0, 0, width, height);

    if(gameState == 0){

    spawnWaste();

    eliminationAndReward();

    if (keyDown("left")){
        wasteBin.x -= 20
        recycleBin.x -= 20
        compostBin.x -= 20
        softPlasticsBin.x -= 20


    }

    if (keyDown("right")){
        wasteBin.x += 20
        recycleBin.x += 20
        compostBin.x += 20
        softPlasticsBin.x += 20


    }

    if(misses == 10){

        gameState = 1;

    }

}

if(gameState == 1){

    wasteBin.remove()
    recycleBin.remove()
    compostBin.remove()
    softPlasticsBin.remove()

    restartBtn.visible = true;

    if(mousePressedOver(restartBtn)){

        window.location.reload()

    }

    strokeWeight(4)
    stroke("red")
    textSize(50)
    text("Game Over!", 680, 300)

}

if(score > 100){



    if(banana !== undefined){

    banana.velocityY = 10

    }

    if(apple !== undefined){

    apple.velocityY = 10

    }

    if(pizza !== undefined){

    pizza.velocityY = 10

    }

    if(cardboard !== undefined){

    cardboard.velocityY = 10

    }

    if(chip !== undefined){

    chip.velocityY = 10

    }

}

    strokeWeight(10)
    stroke("white")
    textSize(50)
    text("Score: " + score, 100, 100)

    strokeWeight(10)
    stroke("white")
    textSize(50)
    text("Misses: " + misses, 1400, 100)

        drawSprites(); // To display sprites
}

function spawnWaste() {

    if (World.frameCount % 100 == 0) {

        var randomNumber = Math.round(random(1, 5))
        var randomNumberPosition = Math.round(random(100, 1590))

        switch (randomNumber) {

            case 1:
                banana = createSprite(800, 100, 50, 50)
                banana.velocityY = 4
                banana.scale = 0.5
                banana.addImage(bananaImg);
                banana.x = randomNumberPosition;
                break;

            case 2:
                apple = createSprite(800, 100, 50, 50)
                apple.velocityY = 4
                apple.scale = 0.5
                apple.addImage(appleImg);
                apple.x = randomNumberPosition;
                break;

            case 3:
                pizza = createSprite(800, 100, 50, 50)
                pizza.velocityY = 4
                pizza.scale = 0.5
                pizza.addImage(pizzaImg);
                pizza.scale = 0.1
                pizza.x = randomNumberPosition;
                break;

            case 4:
                cardboard = createSprite(800, 100, 50, 50)
                cardboard.velocityY = 4
                cardboard.scale = 0.5
                cardboard.addImage(cardboardImg);
                cardboard.x = randomNumberPosition;
                break;

            case 5:
                chip = createSprite(800, 100, 50, 50)
                chip.velocityY = 4
                chip.scale = 0.5
                chip.addImage(chipImg);
                chip.x = randomNumberPosition

        }
    }




}

function eliminationAndReward(){

if(apple !== undefined){
    if(apple.collide(compostBin)){
        apple.remove()

        score += 20
                
    } else if(apple.collide(barrier)){
        apple.remove()
        misses += 1

    }

}



if(banana !== undefined){
    if(banana.collide(compostBin)){
        banana.remove()

        score += 20
                
    } else if(banana.collide(barrier)){
        banana.remove()
        misses += 1


    }

}

if(pizza !== undefined){
    if(pizza.collide(wasteBin)){
        pizza.remove()

        score += 20
                
    } else if(pizza.collide(barrier)){
        pizza.remove()
        misses += 1


    }

}

if(cardboard !== undefined){
    if(cardboard.collide(recycleBin)){
        cardboard.remove()

        score += 20
                
    } else if(cardboard.collide(barrier)){
        cardboard.remove()
        misses += 1


    }

}

if(chip !== undefined){
    if(chip.collide(softPlasticsBin)){
        chip.remove()

        score += 20
                
    } else if(chip.collide(barrier)){
        chip.remove()
        misses += 1


    }

}

}