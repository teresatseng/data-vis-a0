
function setup() {
  createCanvas(600, 600);
  printMinute();
  setInterval(printMinute, 60000);
  
  //TODO: fix this

}

function draw() {
  background(12,19,51);  

  var H = hour();
  var M = minute();
  var S = second();

  
  // TODO: translate or scale? 
  
  for (var h = 0; h < H; h++){
    noFill();
    var g_val = map(h,0,23,0,255);
    stroke(66,g_val,244);
    strokeWeight(3);
    hour_diam = (h+3)*20
    
    //hour_diam = map(h,0,23, 20, 560);
    ellipse(300,300, hour_diam);
  }
  
  push();
  stroke(12,19,51);
  strokeWeight(3);
  line(300-(hour_diam/2),300,300+(hour_diam/2),300);
  pop();
  
  
  push();
  
  fill(250,197,221,127);
  stroke(250,197,221,244);
  strokeWeight(3);
  var min_bound = map(minute(), 0, 59, PI+.01, TWO_PI);
  arc(300,300,400,400, PI, min_bound, PIE);
  pop();
  
  push();
  fill(227,252,0,127);
  stroke(227,252,0, 244);
  strokeWeight(3);
  var sec_bound = map(second(), 0, 59, PI+.01, TWO_PI);
  arc(300,300, 300, 300, PI, sec_bound, PIE);
  pop()
  
}


function printMinute(){
  console.log(minute());
}