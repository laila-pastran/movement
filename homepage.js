let homeImg;
var carImg;
var careerImg;
var planeImg;
var buildImg;
var gradImg;
var roadImg;
var grassImg;
var houseImg;

let mainFont;
function preload(){
  mainFont = loadFont()
}


function preload()
{
  homeImg = loadImage("/wallpapers/life.png");
  carImg = loadImage("GrayCar.png");
  careerImg = loadImage("CareerArrows.png");
  planeImg = loadImage("ClearPlane.png");
  buildImg = loadImage("Skyline.png");
  gradImg = loadImage("GradCaps.png");
  roadImg = loadImage("Road.png");
  grassImg = loadImage("Grass.png");
  houseImg = loadImage("House.png");
}


function setup() {
  createCanvas(displayWidth, displayHeight);
}


function draw() {
  
  background(166,210,255);
 

stroke(219,19,117);
fill(219,19,117);
triangle(216,22,185,96,216,182);
rect(216,22,139,160);
  
stroke(255, 255, 255);
fill(255, 255, 255);
rect(242,39,50,120);
rect(242,133,90,27);

stroke(32,162,220);
fill(32,162,220);
rect(358,22,102,160);

stroke(255, 255, 255);
fill(255, 255, 255);
rect(384,39,52,120);

stroke(115,173,68);
fill(115,173,68);
rect(462,22,145,160);

stroke(255, 255, 255);
fill(255, 255, 255);
rect(494,39,49,120);
rect(494,39,90,27);
rect(494,86,90,27);
  
stroke(254,232,2);
fill(254,232,2);
rect(610,22,142,160);
triangle(752,22,787,96,752,182);

stroke(255, 255, 255);
fill(255, 255, 255);
rect(632,39,54,120);
rect(632,39,96,27);
rect(632,86,90,27);
rect(632,133,96,27); 

textSize(70);
fill(255,255,255);
textFont("Merriweather")
text('the',60,70);
textSize(80);
text('Game',5,130);
textSize(70);
text('of',120,190);



image(grassImg,0,200,displayWidth,600);
image(planeImg,800,0,500,300);
image(buildImg,0,200,500,350);
image(gradImg,500,200,300,200);
image(roadImg,0,435);
image(careerImg,1100,200,275,300);
image(carImg,505,435,250,150);
image(houseImg,900,305,200,150);


  
  
}

