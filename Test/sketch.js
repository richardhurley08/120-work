function draw() {
  background( 'black' );
  //map, mouseX between 0 and 5.
  var ax = map(mouseX, mouseY, 100, 0, 300 );
  var ay = 66;

  // Round the mapped number.
  var bx = round(map(mouseX, 0, 100, 0, 5));
  var by = 33;



  fill( 'yellow' );
  noStroke();
ellipse(nfc(ax, 2), ax, ay - 5);

}
