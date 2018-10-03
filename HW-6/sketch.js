// Eclipse
var star = {
  x: 100,
  y: 100
}

var col = {
  r: 255,
  g: 255,
  b: 255
}
var x1 = 1 + 2 * 3 % 4;

function setup() {
  createCanvas(windowWidth, 950);
  background('black');

  noCursor();


}

function draw() {
  // stars
  star.x = random(0, width);
  star.y = random(0, height);
  fill(col.r, col.g, col.b);
  ellipse(star.x, star.y, 1, 1);

  star.x = random(0, width);
  star.y = random(0, height);
  fill(col.r, col.g, col.b);
  ellipse(star.x, star.y, 1, 1);

  star.x = random(0, width);
  star.y = random(0, height);
  fill(col.r, col.g, col.b);
  //ellipse(star.x, star.y, 1, 1);

  push();
  // sun
  translate(400, 400);
  fill('yellow');
  ellipse(-17, -65, 600, 600);

  //saturn
  translate(835, 200);
  fill('brown');
  ellipse(-37, -105, 55, 55);
  pop();

  push();

  fill('orange');
  translate(300, 300);
  strokeWeight(20);
  noStroke();
  //line( -37, -105, -300, 100 );

  pop();

  //planet
  push();
  fill('cyan');
  translate(1600, 550);
  ellipse(x1, 200, 300, );
  pop();

  push();
  translate(900, 300);
  fill('blue');
  ellipse(-17, -65, 35, 35);
// moon
  translate(-15, -10);
  fill('grey');
  ellipse(-17, -65, 10, 10);


  pop();

  //saturn ring
  translate(1200, 600);
  fill('orange');
  ellipse(-1, -105, 100, 5);

  // Eclipse
  translate(80, 650, );
  var ax = map(mouseX, mouseY, -200, 20, 390);
  var ay = 65;


  fill('black');
  noStroke();
  ellipse(floor(ax, 1), ax, ay - 700);







}
