function draw() {
  createCanvas(900, 900);
  background( 'black' );
  angleMode(DEGREES);
  var a = atan2(mouseY - height / 2, mouseX - width / 2);
  translate(width / 2, height / 2);
  push();
  rotate(a);
  fill( 'yellow' );
  ellipse(-0, 0, 40, 40);
  pop();
  angleMode(RADIANS);
  rotate(a);
  fill( 'red' );
  ellipse(-80, -50, 20, 20);
  translate(width / 4, height / 5);
  fill( 'blue' );
  ellipse(-600, -25, 20, 20);
  translate(width / 10, height / 10);
  fill( 'grey' );
  ellipse(-90, -05, 20, 20);
  translate(width / 10, height / 10);
  fill( 'cyan' );
  ellipse(-90, -05, 20, 20);
  fill( 'orange' );
  translate(width / 10, height / 10);
  ellipse(-300, -500, 20, 20);
}
