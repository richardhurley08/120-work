let statik = [];
let num_lines = 1000
let canvas_background;
var value = 255;
// setup
function setup() {
  //frameRate();
  createCanvas(990, 900);
  canvas_background = color(25);

  for (let i = 0; i < num_lines; i++) {
    statik.push(new Static());
  }
}
//draw function
function draw() {
  textSize(64);
  //I see you!
  text("I SEE YOU! ", 320, 200);
  // The great eye
  fill(value);
  ellipse(490, 390, 550, 200);
  fill('black');
  ellipse(490, 390, 320, 250);
  fill('White');
  ellipse(490, 390, 290, 160);
  fill('red');
  ellipse(490, 390, 120, 150);


  for (var i = 0; i < statik.length; i++) {
    statik[i].frame();

  }
}
// static class
class Static {
  constructor() {
    this.w = 600
    this.h = 1
    this.w = this.w;
    this.h = this.h;
    this.loc_x = random(width);
    this.loc_y = random(height);
    this.move_x = random(-2, 150);
    this.move_y = random(-2, 100);
    this.ball_color = color('black,');


  }
  frame() {
    this.display();
    this.move();
  }

  display() {

    push();

    translate(this.loc_x, this.loc_y);
    fill(this.ball_color);

    ellipse(0, 0, this.w, this.h);


    pop();
  }

  move() {
    this.loc_x += this.move_x;
    this.loc_y += this.move_y;

    if (this.loc_x >= width) {
      this.move_x *= -1;
      this.loc_x = width - abs(this.move_x);
    } else if (this.loc_x <= 0) {
      this.move_x *= -1;
      this.loc_x = abs(this.move_x);
    } else if (this.loc_y >= height) {
      this.move_y *= -1;
      this.loc_y = height - abs(this.move_y);
    } else if (this.loc_y <= 0) {
      this.move_y *= -1;
      this.loc_y = abs(this.move_y);
    }
  }
}
