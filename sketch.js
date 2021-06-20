
//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;
var bg, background2, background3, background4, background5;
var answer1, answer2, answer3, answer4, answer5;
var button1;
var score=0;
var gameState = 0;
var check;

function preload()
{
	bg =loadImage("background.png");
	background2 =loadImage("background2.jpg");
	background3 =loadImage("background3.jpg");
	background4 =loadImage("background4.jpg");
	background5 =loadImage("background5.jpg");

	answer1 =loadImage("yourname.jpg");
	answer2 =loadImage("yourage.jpg");
	answer3 =loadImage("atowel.jpg");
	answer4 =loadImage("abank.jpg");
	answer5 =loadImage("piano.jpg");

	
}

function setup() {
	createCanvas(2000 , 700);
 	
	check1=createSprite(650,250,100,100);
 	//check.invisible=true;
	check2=createSprite(650,300,60,50);
	check3=createSprite(650,400,60,50);
}


function draw() {
	rectMode(CENTER);
  	//background(bg);
  
  	textSize(20);
 	text("Quiz",1570,515);

	if(gameState === 0)
 	{
		background(bg);
		check1.visible = false;
		check2.visible = false;
		check3.visible = false;
		stroke("black");
		textSize(50);
		text("Welcome to the QUIZ GAME",350,200);
		text("Press SPACE to start the game ",350,300);
		
 	}

	if(keyDown("space")){
		gameState = 1;
		background(background2);
	}

	if(gameState === 1){
		strokeWeight(3);
		stroke("black");
		textSize(30);
		text("What belongs to you but is used more by others ?",200,200);
		text("Answer", 650,250);
		check1.visible = false;
	}

	if(mousePressedOver(check1)){
		background(answer1);
		score++;
		gameState=2;
	}

	if(gameState === 2){
		strokeWeight(3);
		stroke("black");
		textSize(30);
		text("Add the second question here  ?",200,250);
		text("Answer", 600,300);
		check2.visible = false;
	}

	if(mousePressedOver(check2)){
		background(answer2);
		//check.addImage(answer1);
		score++;
		gameState=3;
	}

	if(gameState === 3){
		strokeWeight(3);
		stroke("black");
		textSize(30);
		text("Add the third question here  ?",200,250);
		text("Answer", 650,400);
		check3.visible = false;
	}

	if(mousePressedOver(check3)){
		background(answer3);
		score++;
		gameState=4;
	}


  drawSprites();
 
}



