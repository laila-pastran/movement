let enaIcon;
let enaIconProp;

function preload()
{
  enaIcon =loadImage("/icons/Sahara.jpg");
}

function setup() {
  createCanvas(1350, 600);

   let babyhoodlink = createA("../flashcards-SB/answersChild.html", 'Babyhood',"blank");
  babyhoodlink.position(1020, 100);

  let teenhoodlink = createA("../flashcards-SB/answersTeen.html", 'Teenhood',"blank");
  teenhoodlink.position(760, 320);

  let adulthoodlink = createA("../flashcards-SB/answersAdult.html", 'Adulthood',"blank");
  adulthoodlink.position(110, 420); 
  
  let oldhoodlink = createA("../flashcards-SB/answersOld.html", 'Oldhood',"blank");
  oldhoodlink.position(1000, 490); 
  
  let homelink = createA("../index.html", 'Back to Home!',"_self");
  homelink.position(700,650);

  
enaIconProp = {
  x:65,
  y:65,
  speed: 30
}

}


//pink 219,19,117
//white 255, 255, 255
//blue 32,162,220
//green 115,173,68
//yellow 254,232,2

function draw() {

  background(169, 255, 143);


//circles
  stroke(254,232,2);
  strokeWeight(2);
  fill(254,232,2);
  circle(300,89,40);

  stroke(115,173,68);
  fill(115,173,68);
  circle(490,89,40);
  
  stroke(32,162,220);
  strokeWeight(2);
  fill(32,162,220);
  circle(680,89,40);

  stroke(219,19,117);
  fill(219,19,117);
  circle(870,94,40);

  stroke(254,232,2);
  fill(254,232,2);
  circle(1185,170,40);

  stroke(115,173,68);
  fill(115,173,68);
  circle(1200,290,40);

  stroke(32,162,220);
  fill(32,162,220);
  circle(1160,390,40);

  stroke(219,19,117);
  fill(219,19,117);
  circle(970,380,40);

  stroke(254,232,2);
  fill(254,232,2);
  circle(630,290,40);

  stroke(115,173,68);
  fill(115,173,68);
  circle(450,270,40);

  stroke(32,162,220);
  fill(32,162,220);
  circle(250,260,40); 

  stroke(219,19,117);
  fill(219,19,117);
  circle(145,330,40);

  stroke(254,232,2);
  fill(254,232,2);
  circle(280,500,40);

  stroke(115,173,68);
  fill(115,173,68);
  circle(470,500,40);

  stroke(32,162,220);
  fill(32,162,220);
  circle(660,500,40); 

  stroke(219,19,117);
  fill(219,19,117);
  circle(850,500,40);


//end circles
  noFill();
stroke(219,19,117);

line(218,52,218,130);
line(394,52,396,128);
beginShape();
  curveVertex(218,52);
  curveVertex(218,52);
  curveVertex(1153,83);
  curveVertex(1242,400);
  curveVertex(998,418);
  curveVertex(856,390);
  curveVertex(531,314);
  curveVertex(218,301);
  curveVertex(218,301);
endShape();
beginShape();
  curveVertex(218,130);
  curveVertex(218,130);
  curveVertex(771,131);
  curveVertex(1127,164);
  curveVertex(1127,164);
endShape();
line(585,50,585,128);
line(774,50,771,130);
line(968,57,956,143);
line(1175,92,1117,162); 
beginShape();
  curveVertex(1127,164);
  curveVertex(1127,164);
  curveVertex(1141,226);
  curveVertex(1131,347);
  curveVertex(1131,347);
endShape();
line(1267,226,1141,226);
line(1260,340,1134,337);
beginShape();
  curveVertex(1131,347);
  curveVertex(1131,347);
  curveVertex(1002,343);
  curveVertex(548,238);
  curveVertex(121,253);
  curveVertex(164,522);
  curveVertex(800,540);
  curveVertex(1137,550);
  curveVertex(1137,550);
endShape();
line(1073,352,1065,423); 
line(917,324,856,390);
line(745,277,695,347);
line(548,238,531,314);
line(356,224,346,303);
line(121,253,218,301);

beginShape()
  curveVertex(218,301);
  curveVertex(218,301);
  curveVertex(207,385);
  curveVertex(218,451);
  curveVertex(218,451);
endShape();
line(76,385,207,385);
line(218,451,164,522);
beginShape();
  curveVertex(218,451);
  curveVertex(218,451);
  curveVertex(872,459);
  curveVertex(1137,472);
  curveVertex(1137,472);
endShape();
line(380,455,380,546);
line(568,455,570,543);
line(761,456,750,538);
line(952,464,938,542);
line(1137,472,1137,550);

stroke(115,173,68);
tint(255,80);

  noTint()
  image(enaIcon,enaIconProp.x,enaIconProp.y, 70,70)


}



function keyPressed() {
  if (keyCode === UP_ARROW)
   { enaIconProp.y -= enaIconProp.speed ;
   
  } else if (keyCode === DOWN_ARROW) {
    enaIconProp.y += enaIconProp.speed;
  }
  else if (keyCode === LEFT_ARROW) {
    enaIconProp.x -= enaIconProp.speed ;
  } else if (keyCode === RIGHT_ARROW) {
   enaIconProp.x += enaIconProp.speed;
  }
}