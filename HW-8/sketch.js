    // function setup canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(14);
}
    // function draw ellipse
function draw() {
  background('black');
  let numPerRow = 55;
  let circleSize = 20;
  let pad = width / numPerRow;
  let y = circleSize;
  for (let x = circleSize; x < width; x += pad) {

    y += pad;
      // mouseX color change and twinkle
    for (let x = circleSize; x < width; x += pad) {
      fill(mouseX, random(255), random(255), mouseY, random(255));
      // using ellipse to make star shape
      ellipse(x, y, circleSize, circleSize);
      ellipse(x, y, 30, 10);
      ellipse(x, y, 10, 30);
    }
  }

}
