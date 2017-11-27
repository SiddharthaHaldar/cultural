
var song;
var button;
var amp;
var ang=0;
var ang2=0;
var fact=1;
var go=0,roll=0;

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

function batman()
{
  fill(255,0,45);
  rect(-50,-50,100,100);

}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function wwoman(f)
{
  noStroke()
  
  push()
  translate(0,-60*f)
  fill(0)
  beginShape()
  vertex(-135*f,180*f)
  bezierVertex(-70*f,130*f,-180*f,-95*f,0,-100*f)
  vertex(0,-100*f)
  bezierVertex(180*f,-95*f,70*f,130*f,135*f,180*f)
  vertex(135*f,180*f)
  bezierVertex(110*f,190*f,20*f,250*f,0,0)
  vertex(0,0)
  bezierVertex(-20*f,250*f,-110*f,190*f,-135*f,180*f)
  vertex(-135*f,180*f)
  endShape()
  pop()

  fill(255,218,185);
  //rect(-90*f,-100*f,180*f,170*f);
  for(x=1;x<=2;x++)
  {
    fill(255,218,185);
    if(x==1)
      fill(255-20,218-20,185-20)
  beginShape()
  vertex(Math.pow(-1,x)*90*f,-100*f)
  vertex(0,-100*f)
  vertex(0,150*f)
  vertex(Math.pow(-1,x)*30*f,150*f)
  vertex(Math.pow(-1,x)*90*f,70*f)
  vertex(Math.pow(-1,x)*90*f,-100*f)
  endShape()
  }
fill(0)
ellipse(0,107*f,25*f,15*f)
fill(255,105,180)

  for(x=1;x<=2;x++)
  {
  var s=Math.pow(-1,x)
  stroke(255,105,180)
  beginShape()
  vertex(20*f*s,105*f);
  vertex(45*f*s,105*f);
  bezierVertex(35*f*s,105*f,20*f*s,125*f,0,130*f)
  vertex(0,107*f);
  vertex(20*f*s,105*f);
  endShape()
  strokeWeight(1)
  stroke(255  ,20  ,147)
  beginShape()
  vertex(0,100*f)
  bezierVertex(10*f*s,60*f,30*f*s,105*f,45*f*s,105*f)
  vertex(10*f*s,107*f)
  vertex(0,100*f)
  endShape()
  }
  
  noFill()
  strokeWeight(5)
  stroke( 255 ,185 ,15)
  ellipse(35*f,70*f,60*f,60*f)

  noStroke()
   fill(238,18,137)
  ellipse(62*f,60*f,20*f,20*f)
  
  strokeWeight(2)
  stroke(240 ,170 ,0)
  fill( 255 ,185 ,15)
  ellipse(75*f,54*f,15*f,15*f)
  ellipse(84*f,46*f,11*f,11*f)
  ellipse(87*f,38*f,8*f,8*f)
   
   strokeWeight(1)
  stroke(0)
  fill(0)
  /*triangle(5*f,-10*f,20*f,-10*f,55*f,-30*f)
  triangle(55*f,-30*f,35*f,-20*f,75*f,-31*f)*/

  /*beginShape()
  vertex(15*f,-10*f)
  vertex(30*f,-10*f)
  vertex(55*f,-30*f)
  vertex(85*f,-35*f)
  vertex(53*f,-33*f)
  vertex(15*f,-10*f)
  endShape()

  beginShape()
  vertex(-15*f,-10*f)
  vertex(-30*f,-10*f)
  vertex(-55*f,-30*f)
  vertex(-85*f,-35*f)
  vertex(-53*f,-33*f)
  vertex(-15*f,-10*f)
  endShape()  */
  noStroke()
  fill(255 ,185 ,15)
  beginShape()
  vertex(-90*f,-100*f)
  bezierVertex(-55*f,-100*f,-35*f,-110*f,0,-130*f)
  vertex(0,-130*f)
  bezierVertex(35*f,-110*f,55*f,-100*f,90*f,-100*f)
  vertex(90*f,-60*f)

  vertex(-90*f,-60*f)
  vertex(-90*f,-100*f)
  endShape()

  push()
  fill(255,0,0)
  translate(0,-90*f)
  rotate(PI/3.4)
  star(0, 0, 10, 30, 5); 
  pop()
  noStroke()
  
  
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

  //angry
  strokeWeight(7)
  stroke(0)
  line(-85*f,-50*f,-10*f,-35*1.2)
  line(-10*f,-35*1.2,-10*f,-44*1.2)
  line(85*f,-50*f,10*f,-35*1.2)
  line(10*f,-35*1.2,10*f,-44*1.2)
  noStroke()
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  song = loadSound("Bhayanak Atma.mp3", loaded);
  amp = new p5.Amplitude();
  amp.setInput(song)
  background(255,0,0);
  
  frameRate(60);
  setInterval(bgdraw,5)
  /*var ele = createAudio('Bhayanak Atma.mp3')
  ele.play()
  amp.setInput(ele)*/
}

function loaded() {
  song.play();
  button = createButton("pause");
  button.position(20,50)
  button.mousePressed(togglePlaying);
  var flag=0;
  var i=0;
  setInterval(function(){
    if(flag==0){
    if(amp.getLevel()>0)
      { 
        console.log(amp.getLevel())
        setTimeout(function(){
            roll=1;
          },49500)
        flag=1;
      }
    }
    },1)
    
  
  
  
  
  //setInterval(bgdraw,5)
  
  /*setInterval(function(){
    
  push()
  translate(width/2,height/2)
  if(roll)
      {
        var vol = amp.getLevel();
        translate(random()*map(vol,0,0.3,10,15),random()*map(vol,0,0.3,10,15))
        ang2+=1;
        if(ang2%20==0)
        {if(fact==1)
          fact=1.2
         else
          fact=1 
        }
      }
    wwoman(fact);
    console.log("hello")
  pop()

  },200)*/
  go=1;
}

function bgdraw() {
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
  
  if(roll)
      {
        translate(random()*map(vol,0,0.3,10,15),random()*map(vol,0,0.3,10,15))
        ang2+=1;
        if(ang2%20==0)
        {if(fact==1)
          fact=1.2
         else
          fact=1 
        }
      }
      wwoman(fact);
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
    push()
    for(var y=1;y<=10;y++)
    {
    rotate(36*PI/180)
    fill(255)
    if(roll && vol >0.25)
      fill(map(diam2,200,300,70,255),0,0)
    triangle(-10,0,10,0,0,-20);
    }
    pop()
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