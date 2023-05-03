//The setup function only happens once
function setup() {
	createCanvas(500, 500,WEBGL); //create a 500px X 500px canvas
}
//The draw function happens over and over again
function draw() {
  background(58,21,84); //an RGB color for the canvas' background
  noStroke();
  fill(50);
  push();
  translate(-275, 175);
  rotateY(1.25);
  rotateX(-0.9);
  box(100);
  pop();

  noFill();
  stroke(255);
  push();
  translate(500, height * 0.35, -200);
  sphere(300);
  pop();

 background(51);
  line(0, a, width, a);
  a = a - 0.5;
  if (a < 0) {
    a = height;

  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,20,20); // center of canvas, 20px dia
rect(100,100,20,100);
fill(255,255,255,mouseX);
stroke(110,110,110);
triangle(20,300,300,100,400,400);
line(0,50,500,50);
}