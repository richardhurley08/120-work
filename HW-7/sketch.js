var ball_color;
var fill_counter = 0;
var x_pos = 0;
var ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;
var x = 600;
var y = 300;
var z = 450;
var w = 800
// setup
function setup() {
  createCanvas(windowWidth, 950);
  ball_color = color(255, 255, 255, 5)
  background(0);
}


function draw() {
  // text on screen
  textSize(64);
  text("Wherever you click gets a different result! ", 350, 300);
  text("Doing nothing looks cool too!", 500, 400);
  // random ball colors
  x_pos++;
  fill_counter = x_pos % -30;
  if (fill_counter == 0) {
    ball_color = color(
      random(255),
      random(255),
      random(255),
      5
    );
  }
  // creating movement for the ball
  ball.x += ball.delta_x * ball.scale_x;
  ball.y += ball.delta_y * ball.scale_y;
  if (ball.x >= width || ball.x <= 0) {
    ball.delta_x = -1 * ball.delta_x;
  }
  if (ball.y >= height || ball.y <= 0) {
    ball.delta_y = -1 * ball.delta_y;
  }
  noStroke()
  fill(ball_color);
  ellipse(ball.x, ball.y, ball.width, ball.width);
}
// mouse click change in ball
function mousePressed() {
  ball.scale_x = map(mouseX, 0, width, 0.5, 10);
  ball.scale_y = map(mouseY, 0, height, 0.5, 10);

  col = map(mouseX, 255, width, 255, 255);
  fill(col);
  noStroke();
  ellipse(ball.x, ball.y, ball.width, ball.width);

  //****************************
  //  Randomness
  //****************************

  if (x > mouseX) {
    fill('DarkSlateBlue ');
  }
  ellipse(x, mouseX, mouseY, x, );

  if (x > mouseY) {
    fill('red');
  }
  ellipse(x, mouseX, mouseY, x, );
  push();
  translate(1000, 200, );
  if (x > mouseX) {
    fill('Magenta');
  }
  ellipse(w, mouseX, mouseY, w, );
  pop();
  if (x > mouseY) {
    fill('Indigo');
  }
  ellipse(y, mouseY, mouseX, y, );

  translate(700, 300, );
  if (x > mouseY) {
    fill('DarkCyan ');
  }
  ellipse(z, mouseY, mouseX, z, );


}
