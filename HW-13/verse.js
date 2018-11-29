let rows, x_space;
let cols, y_space;

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate( 6 );

	x_space = 10;
	rows = floor( width / x_space );
	y_space = 10;
	cols = floor( height / y_space );
}



function draw() {
	background( 'white' );

	noStroke();

	
	let x = 1;
	let y = 1;
	while ( x != 0 ){
		x = floor(random() * rows);
		y = floor(random() * cols);

		fill('purple' );
		ellipse( x*x_space, y*y_space, random(1, 1,) );
	}
}