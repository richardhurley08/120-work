// fizzy
let circle = [];
let clicks = 2
let x = random(width);
let y = random(hight);

function setup() {
  noCursor();
  // frameRate change
  frameRate(30);
  createCanvas(windowWidth, windowHeight);
  fill(clicks, random(255), random(255), random(255));
  circle.push(0, 0, 40, 20);
}
var r = circle[10] * .9;
// function draw fizzy
function draw() {
  ellipse(random(width), random(height), circle[3]);
  ellipse(random(width), random(height), circle[2]);
  ellipse(random(width), random(height), circle[3]);
  ellipse(random(width), random(height), circle[3]);
}
// click to change background
function backgroundChange() {
  if (clicks == 1) {
    background(random(255));
  } else if (clicks == 2) {
    background(random(255), random(255), random(255), random(255));
  }
  inst();
}
// mousePressed fuction
function mousePressed() {
  backgroundChange();
  clicks++;
}
