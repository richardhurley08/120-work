function setup() {
  // create a canvas to draw on
  createCanvas(600, 800);
}

function draw() {

  // background
  background('black');

  /* ***************************** */
  /* MAIN SANDBOX */
  /* ***************************** */
  push();

  // set the grid center( x:0, y:0 )
  // to canvas center
  translate(300, 400);
  /* **************************************************** */
  /*      Body    */
  /* **************************************************** */
  push();
  rect(-150, -100, 150, 300);

  push();
  fill('red');
  translate(-150, -100);
  rect(0, 0, 150, 300);
  pop();

  push();
  rect(-5, -0, -140, 30);
  pop();
  push();
  rect(-100, -30, 50, 150)

  pop(); //body end

  /* **************************************************** */
  /*     Legs   */
  /* **************************************************** */
  push();
  translate(-75, 200);

  // left leg
  fill('blue');
  triangle(-75, 0, 0, 0, -100, 700);

  // right leg
  scale(-1, 1);
  triangle(-75, 0, 0, 0, -100, 700);

  pop(); // Legs end

  /* **************************************************** */
  /*     Arms   */
  /* **************************************************** */
  push();
  translate(0, -60);
  // left arm
  stroke('red');
  strokeWeight(30);
  line(-150, 0, -200, 100);
  line(-240, -10, -200, 100);
  stroke('pink');
  strokeWeight(50);
  point(-250, -35);
  // right arm

  rotate(PI);
  stroke('red');
  strokeWeight(30);
  line(-0, 0, -100, 100);
  line(-140, 170, -100, 100);

  stroke('pink');
  strokeWeight(50);
  point(-140, 175);

  pop(); // arms end

  /* **************************************************** */
  /*     head   */
  /* **************************************************** */
  push();
  translate(0, 60);
  fill('pink');
  ellipse(-75, -250, 150, 200);

  // mouth
  fill(0);
  arc(
    -130,
    -200,
    200,
    70,
    radians(0),
    radians(30),
    PIE
  );

  //eyes
  push();
  translate(0, -60);

  stroke('white');
  strokeWeight(60);
  point(-110, -230);

  stroke('white');
  strokeWeight(60);
  point(-50, -230);

  stroke('blue');
  strokeWeight(40);
  point(-110, -230);

  stroke('blue');
  strokeWeight(20);
  point(-50, -230);

  pop();

  // nose

  fill('#C17789');
  arc(
    -150,
    -250,
    160,
    120,
    radians(0),
    radians(15),
    PIE
  );

  //ellipse( 0, -100, 30 );

  pop(); // head end
}
