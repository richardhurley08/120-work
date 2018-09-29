var star = {
  x: 100,
  y: 100
}

var col = {
  r: 255,
  g: 255,
  b: 255
}

function setup(){
   createCanvas( windowWidth, 950);
   background( 'black' );
}

function draw() {
  star.x = random( 0, width );
  star.y = random( 0, height );
  fill( col.r, col.g, col.b );
  ellipse( star.x, star.y, 2, 3 );

  star.x = random( 0, width );
  star.y = random( 0, height );
  fill( col.r, col.g, col.b );
  ellipse( star.x, star.y, 4, 3 );

  star.x = random( 0, width );
  star.y = random( 0, height );
  fill( col.r, col.g, col.b );
  ellipse( star.x, star.y, 4, 4 );














}
