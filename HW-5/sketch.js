// Angry flower 

function setup(){
   createCanvas( windowWidth, 950);
   frameRate(  );
}
let angle = -0;
// red over time
let red_val = 255;
function draw(){
 background( 'black' );

noCursor();


// red over time +1 - %255
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


  angle = angle + 1;

pop();
// spin thing end
// Stem
push();
scale ( 1, 1 );
translate( 150, 100 );
translate( mouseX,  mouseY );
fill( 'green' );
triangle( -140, 0, 0, 0, -100, height+100 );


pop();
// Stem end
// leaves
push();
translate( 150, 100 );
translate( mouseX, mouseY );

 fill( 'green');
 ellipse( 100, 100, 400, 100 );

 pop();
 push();
 translate(  -200, 100 );
 translate( mouseX, mouseY );

  fill( 'green');
  ellipse( 100, 100, 400, 100 );

  pop();
 // leaves end
  // mouse ( X, Y )
  translate( mouseX, mouseY );
// translate( 500, 500 );
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
 //eyes end
//mouth
fill( 'black');
translate( 200, 200);
triangle( 300, 200, 20, 200, 200, 300);
// mouth end

// end flower

}
