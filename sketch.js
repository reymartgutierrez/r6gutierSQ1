// ============================================================
// Sidequest 1 Week 1: Exit 8 Themed Page
// ============================================================

let exit8Img;

function preload() {
  exit8Img = loadImage("assets/images/exit8.png" ); [1]
}

function setup() {
  createCanvas(1000, 500);
  background(255, 227, 41);
  image(exit8Img, 50, 85, 500, 300);


fill(0, 0, 0); // black
  textAlign(CENTER);
  textSize(20);
  text("The Exit 8 is a game where you walk through a train station passage, trying to spot anomalies and escape.", 20, 20, width - 40);

fill(0,0,0);
stroke(0,0,0);
strokeWeight(3);
rect(600, 85, 250, 220, 12);

fill(255, 227, 41);
noStroke();
textAlign(CENTER);
textSize(140);
textStyle(BOLD);
text("8", 720, 240);
}
