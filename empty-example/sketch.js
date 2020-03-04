function setup() {
  createCanvas(600, 600);
}

function draw(){
  noStroke()
	background(mouseX,mouseY,100);
  fill(mouseX,100,mouseY)
  ellipse(100,100, 100, 100);
  ellipse(200,200,100,100)
  ellipse(300,300,100,100)
  ellipse(400,400,100,100)
  ellipse(500,500,100,100)
}
