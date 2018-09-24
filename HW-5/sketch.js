function setup(){
   createCanvas( 2000, 950);
   frameRate(  );
}
let angle = -0;
// red over time
let red_val = 255;
function draw(){
 background( 'black' );



textSize(20);
fill('white');
text("'mouseX': " + floor(mouseX), 100, 40 );
text("'mouseY': " + floor(mouseY), 100, 80 );




// red over time 1-255
 red_val = red_val + 1;
 red_val = red_val % 255;
//head
  push();

  // spin thing
  rotate( radians(angle))
  translate( mouseX, -500, mouseY, );
  fill( 'orange' );
  ellipse( 100, 150, 400, 100,);

  rotate( radians(angle))
  translate( mouseX, -400, mouseY, );
  fill( 'green' );
  ellipse( 100, 150, 400, 100,);

  rotate( radians(angle))
  translate( mouseX, -300, mouseY, );
  fill( 'purple' );
  ellipse( 100, 90, 400, 100,);

  rotate( radians(angle))
  translate( mouseX, -200, mouseY, );
  fill( 'red' );
  ellipse( 90, 150, 400, 100,);

  rotate( radians(angle))
  translate( mouseX, 200, mouseY, );
  fill( 'green' );
  ellipse( 100, 150, 400, 100,);

  rotate( radians(angle))
  translate( mouseX, 0, mouseY, );
  fill( 'yellow' );
  ellipse( 100, 150, 400, 100,);


  angle = angle + 25;

pop();


  // mouse ( X, Y )
  //translate( mouseX, mouseY );
  translate( 500, 500 );
  push();
  pop();
  translate( 0, 60 );
  fill( 'orange' );
  ellipse( 75, -75, 500, 500 );
// eyes
push()
    strokeWeight( 10 );
     fill( red_val, 0, 0 );
     translate( -75, -400 );
  triangle( 300, 300, 300, 200, 200, 300);

  fill( red_val, 0, 0 );
  translate( -200, 0);
 triangle( 300, 300, 200, 200, 200, 300);
//mouth
fill( 'black');
translate( 200, 200);
triangle( 300, 200, 20, 200, 200, 300);


scale ( 1, 1 );
translate( 230, 320 );
fill( 'green' );
triangle( -140, 0, 0, 0, -100, 600 );

}
