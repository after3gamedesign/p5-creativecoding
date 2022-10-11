let osc, freq, playing, amp;

function setup() {
  background(freq/2,1,100)
  let cnv = createCanvas(600,600);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('saw');
  myColor=color(255,255,255);
  mySecondColor=color(255,255,0);
  }

function draw() {
  fill(myColor);
  ellipse(mouseX,mouseY,mouseX, mouseY);
  fill(mySecondColor)
  ellipse( mouseX, mouseY,100, 100);
  freq=constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  amp=constrain(map(mouseY, height, 0, 0, 1), 0, 1);
  
  if(playing) {
    osc.freq(freq,0.1);
    osc.amp(amp,0.1);
  }
}

    function playOscillator(){
      osc.start();
      
      playing=true;
    }

    function mouseReleased() {
      osc.amp(0, 0.5);
      playing=false;
    }
