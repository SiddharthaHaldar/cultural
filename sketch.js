
var song;
var button;
var amp;
var ang=0;
var ang2=0;
var fact=1;
var batmanFace; // color of Batman's face
var batmanMask; // color of Batman's mask
var batmanLip; // color of Batman's lips
var batEyes; // color of Batman's outer eyes
function batman()
{
    fill(0,0,0);
    stroke(0,0,0);
    strokeWeight(3);
    
    triangle(-60,-40, -50,-135, -50,-40); // left ear
    triangle(60,-40, 50,-135, 50,-40); // right ear
    
    fill(batmanMask); 
    ellipse(0, 0, 130, 200); // mask
    
    fill(batmanFace);
    noStroke();
    rect(-50.5, 30, 100.5, 28); // mouth
    triangle(-50.5,58, 50.5,58, 0,90); // chin
    
    fill(batmanLip);
    ellipse(0, 45, 65, 12); // lips
    stroke(226, 101, 70);
    strokeWeight(1);
    line(-30,43, 30,43); // close the lips
    
    fill(batmanMask);
    noStroke();
    triangle(-10,27, 10,27, 0,36); // nose
    
    fill(batEyes);
    ellipse(-25, -30, 20, 10); // left outer eye
    ellipse(25, -30, 20, 10); // right outer eye
    stroke(183, 111, 64);
    strokeWeight(5); // inner eye color
    point(-25, -32); // left inner eye
    point(25, -32); // right inner eye
}

function superman(f)
{
  fill(0)
  ellipse(0,-100*f,200*f,70*f)

  fill(255,218,185);
  rect(-100*f,-100*f,200*f,100*f);
  beginShape()
  vertex(-100*f,0)
  vertex(100*f,0)
  vertex(60*f,100*f)
  vertex(-60*f,100*f)
  vertex(-100*f,0)
  endShape()
  fill(0)
  rect(-100*f,-100*f,200*f,20*f)
  
  fill(255,218,185);
  ellipse(-45*f,-80*f,105*f,40*f)
  ellipse(45*f,-80*f,105*f,40*f)
  strokeWeight(5)
  stroke(255)
  for(var y=0;y<=20;y+=10)
  {
    line(-35,-80+y,35,-80+y)
  }
  noStroke()
  fill(0);

  triangle(100*f,-95*f,100*f,-35*f,85*f,-85*f)
  triangle(-100*f,-95*f,-100*f,-35*f,-85*f,-85*f)

  line()

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  song = loadSound("Bhayanak Atma.mp3", loaded);
  amp = new p5.Amplitude();
  background(51);
  batmanFace = color(226, 148, 70);
  batmanMask = color(124, 116, 116);
  batmanLip = color(226, 121, 70);
  batEyes = color(229, 220, 218);
}

function loaded() {
  button = createButton("play");
  button.position(20,50)
  button.mousePressed(togglePlaying);
  go=1;
}

function draw() {
  background(255, 255, 255);
  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.3, 10, 200);
  var diam2 = map(vol, 0, 0.3, 100, 300);
  var back=map(vol, 0, 1, 10, 255);
  if(song.currentTime()>11.364630208333333)
  {
    //background(random()*back,random()*back,random()*back);
  }
  else
  {
  //background(255,0,0);
  }
  
  noStroke();
  fill(255, 0, 255);
  //ellipse(width / 2, height / 2, diam, diam);
  
  push()
  translate(width/2,height/2)
  if(song.currentTime()>11.364630208333333)
      {
        ang2+=1;
        rotate((ang/4)*PI/180);
        if(ang2%30==0)
        {if(fact==1)
          fact=1.2
         else
          fact=1 
        }
      }
      //ang2+=1;

      
      batman(fact/*diam/200*/);
  pop()
  
  push()
  var pts=20
  translate(width/2,height/2)
  if(song.currentTime()>11.364630208333333)
      {
        ang+=20;
        rotate(ang*PI/180);

      }
      
  for(x=1;x<=20;x++)
  {
    push()
    rotate((360/pts)*x*PI/180);
    if(song.currentTime()>11.364630208333333)
      translate(0,-diam2);
    else
      translate(0,-200);
    fill(0,255,0)
    ellipse(0,0,30,30);
    fill(diam2,diam2,diam2)
    ellipse(0,0,10,10);
    pop()
  }
  pop()
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(1);
    button.html("pause");
  } else {
    song.stop();
    button.html("play");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}