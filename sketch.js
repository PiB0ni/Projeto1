function setup() {
  createCanvas(1000, 800);
  background("rgb(255,255,126)");
}

function draw() {
  
  fill("rgb(168,107,168)");
  stroke("darkred");
  if (mouseIsPressed)
rect(mouseX, mouseY,30,50);
  
}
