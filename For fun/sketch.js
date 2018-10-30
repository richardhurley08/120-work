var x = 600;
var y = 300;
var z = 450;
var w = 800
function setup() {
 createCanvas( 2000 , 1000 );


noCursor();

}
function draw() {

background( 'black' );
  stroke( 2 );
  strokeWeight( 4 );
  noFill();


if (x > mouseX) {
  fill('DarkSlateBlue ');
}
ellipse( x, mouseX, mouseY, x, );

stroke( 355 );
strokeWeight( 5 );
noFill();


if (x > mouseY) {
fill('red');
}
ellipse( x, mouseX, mouseY, x, );
push();
translate( 1000, 200, );
if (x > mouseX) {
fill('Magenta');
}
ellipse( w, mouseX, mouseY, w, );
pop();
if (x > mouseY) {
fill('Indigo');
}
ellipse( y, mouseY, mouseX, y, );

translate( 700, 300, );
if (x > mouseY) {
fill('DarkCyan ');
}
ellipse( z, mouseY, mouseX, z, );







}
