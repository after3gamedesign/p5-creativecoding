// function setup() {
//   createCanvas(400, 400);
//   osc = new p5.Oscillator('sine');
// }

// function draw() {
//   background(100);
//   text("SYNTH",100,100)
//   osc.freq(0.1)
//   osc.amp(0.01)
//   osc.start()

// }

let monosynth;
let arr = ['Fb1', 'G2','Fb4', 'G1'];
const seq=(arr)=>(arr.forEach(e=>monosynth.play(e) ));
function setup() {
  createCanvas(400, 400);
  monosynth = new p5.MonoSynth();
}

function draw() {
  background(220);
   text("SYNTH",100,100)
  seq(arr)
}
