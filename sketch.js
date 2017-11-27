
var song;
var button;
var amp;
var ang=0;
var ang2=0;
var fact=1;
var go=0,roll=0;
function batman()
{
  fill(255,0,45);
  rect(-50,-50,100,100);

}

function chakra()
{
  for(var x=1;x<=10;x++)
  {
    push()
    rotate(36*x*PI/180)
    fill(255,0,255)
    triangle(-40,0,40,0,0,-250);
    pop()
}
  push()
  rotate(10*PI/180)
  for(var x=1;x<=10;x++)
  {
    push()
    rotate(36*x*PI/180)
    fill(255,140,0)
    triangle(-40,0,40,0,0,-250);
    pop()
  }
  pop()
  push()
  rotate(20*PI/180)
  for(var x=1;x<=10;x++)
  {
    push()
    rotate(36*x*PI/180)
    fill(0,191,255)
    triangle(-40,0,40,0,0,-250);
    pop()
  }
  pop()
  push()
  rotate(30*PI/180)
  for(var x=1;x<=10;x++)
  {
    push()
    rotate(36*x*PI/180)
    fill(255,69,0)
    triangle(-40,0,40,0,0,-250);
    pop()
  }
  pop()
}

function superman(f)
{
  /*fill(255)
  rect(-100,-height,200,height)*/
   
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

  /*beginShape()
  vertex(-100*f,0)
  vertex(100*f,0)
  vertex(60*f,100*f)
  vertex(-60*f,100*f)
  vertex(-100*f,0)
  endShape()*/

  fill(0)
  rect(-100*f,-100*f,200*f,20*f)
  
  fill(255,218,185);
  ellipse(-45*f,-80*f,105*f,40*f)
  ellipse(45*f,-80*f,105*f,40*f)
  strokeWeight(5)
  stroke(255)
  for(var y=0;y<=20;y+=10)
  {
    line(-35*f,f*(-80+y),f*35,f*(-80+y))
  }
  noStroke()
  fill(0);

  triangle(100*f,-95*f,100*f,-35*f,85*f,-85*f)
  triangle(-100*f,-95*f,-100*f,-35*f,-85*f,-85*f)

  

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  song = loadSound("Bhayanak Atma.mp3", loaded);
  amp = new p5.Amplitude();
  background(255,0,0);
  /*song.addCue(11.364630208333333,function(){
    roll=1
  })*/
  frameRate(60);
}

function loaded() {
  song.play();
  button = createButton("pause");
  button.position(20,50)
  button.mousePressed(togglePlaying);
  setTimeout(function(){
    roll=1;
  },49500)
  go=1;
}

function draw() {
  //if(go==1){
    smooth();
  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.3, 10, 200);
  var diam2 = map(vol, 0, 0.3, 200, 300);
  var back=map(vol, 0, 1, 10, 255);
  //if(song.currentTime()>11.364630208333333)
  if(roll==1)
  {
    background(random()*back,random()*back,random()*back,120);
  }
  else
  {
  background(255,215,0);
  }
  
  noStroke();
  
  
  push()
  translate(width/2,height/2)
  //if(song.currentTime()>11.364630208333333)
  if(roll)
      {translate(random()*map(vol,0,0.3,10,20),random()*map(vol,0,0.3,10,20))
        rotate(-(ang/30)*PI/180);
      }
  chakra()
  pop()

  push()
  translate(width/2,height/2)
  //if(song.currentTime()>11.364630208333333)
  if(roll)
      {
        translate(random()*map(vol,0,0.3,10,15),random()*map(vol,0,0.3,10,15))
        ang2+=1;
        //rotate((ang/4)*PI/180);
        if(ang2%20==0)
        {if(fact==1)
          fact=1.2
         else
          fact=1 
        }
      }
      //ang2+=1;

      
      superman(fact/*diam/200*/);
  pop()


  
  push()
  var pts=20
  translate(width/2,height/2)
 // if(song.currentTime()>11.364630208333333)
 if(roll)
      {
        ang+=20;
        rotate(ang*PI/180);

      }
      
  for(x=1;x<=20;x++)
  {
    push()
    rotate((360/pts)*x*PI/180);
    //if(song.currentTime()>11.364630208333333)
    if(roll)
      translate(0,-diam2);
    else
      translate(0,-200);
    fill(180,190)
    ellipse(0,0,30,30);
    if(roll)
      fill(random()*diam2,random()*diam2,250)
    else
      fill(map(diam2,200,300,70,255),0,0)
    ellipse(0,0,20,20);
    fill(255)
    ellipse(0,0,5,5);
    pop()
  }
  pop()
//}

textSize(32);
text(song.currentTime(), 30, 50);
fill(255);

}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(1);
    button.html("pause");
    setTimeout(function(){
    roll=1;
  },49500)
    go=1;
  } else {
    song.stop();
    button.html("play");
    go=0;
    roll=0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}