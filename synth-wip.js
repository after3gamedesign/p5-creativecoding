function setup() {
  createCanvas(400, 400);
  osc = new p5.Oscillator('sine');
}

function draw() {
  background(100);
  text("SYNTH",100,100)
  osc.freq(0.1)
  osc.amp(0.01)
  osc.start()

}
