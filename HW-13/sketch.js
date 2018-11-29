let img;
var txt;
var music;
let rows, x_space;
let cols, y_space;

 function preload(){
    img = loadImage('image/cross.png');
   // music = loadSound('media/music.mp3');
   
}

 function setup(){
    
    createCanvas(windowWidth, windowHeight);  
   image(img, 0, 0);
   frameRate(  );

   fill('purple');
   textSize(74);
   text("Jeremiah 29:11", 0, 70);

   textSize(60);
   text("For I know the plans I have for you,” declares the LORD,", 0, 150);
  
   textSize(60);
   text("plans to prosper you and not to harm you, plans to give", 0, 190);

   textSize(60);
   text("you hope and a future,", 0, 240);
   
	x_space = 10;
	rows = floor( width / x_space );
	y_space = 10;
	cols = floor( height / y_space );
}
function draw(){
   
   noStroke();

	
	let x = 1;
	let y = 1;
	while ( x != 0 ){
		x = floor(random() * rows);
		y = floor(random() * cols);

		fill('purple' );
		ellipse( x*x_space, y*y_space, random(5, -3,) );
	}
}

  