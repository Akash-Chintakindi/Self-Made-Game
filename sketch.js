var next1;
var next1image;
var grade, form;
var bg,bgimage;
var gameState = "start";

function preload() {
  next1image = loadImage("Pics/NextButton.jpg");
  bgimage = loadImage("Pics/background.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  next1 = createSprite(width/2+450,height/2+245);
  next1.addImage("nextbutton",next1image);
  next1.scale = 0.20;
}

function draw() {

  if (gameState === "start") {

  background(bgimage);
  textSize(50);
  text("Educational Game",width/2-170,height/3-65);
  textSize(40);
  text("Rules:",width/2-40,height/2-90) 
  textSize(25);
  text("1. You must try to answer all the questions correctly.",width/2-270,height/2-50);
  text("2. You may play a minigame after completing the questions given.",width/2-270,height/2-10);
  text("3. If you answer 70% of the questions correctly, you pass",width/2-270,height/2+30);
  text("and may play the game.",width/2-240,height/2+70);
  text("4. If you incorrectly answer the questions and score less than 70%, you.",width/2-270,height/2+110);
  text("will get one more chance to answer the questions.",width/2-240,height/2+150);
  text("5. If you receive a score of less than 70% twice, then the game is over.",width/2-270,height/2+190);

    if (mousePressedOver(next1)) {
      gameState = "next";
      console.log("next");
    }
  }
   else if (gameState === "next") {
      clear(0);
      background(bgimage);
      fill("white");
      grade = new Grade();
      grade.display();
      console.log("start");
  }

  drawSprites();
}