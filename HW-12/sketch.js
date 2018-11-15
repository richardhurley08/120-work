var ball = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < 25; i++) {
      ball[i] = new Ball();
    }
}

function draw() {
  background('rgb(0, 0, 0)')

let toDelete = [];
  for (let i = 0; i < ball.length; i ++) {
    toDelete.push(false);
}

for (var i = ball.length - 1; i >=0; i--) {
  ball[i].move();
  ball[i].show();
}
for(var i = ball.length - 1; i >= 0; i--) {
  for(var j = ball.length - 1; j >= 0; j--) {
    if(i != j && ball[i].intersects(ball[j])) {

      toDelete[i] = true;

      toDelete[j] = true;
      }
    }
  }

  for (let i = toDelete.length - 1; i >= 0; i--) {
    if(toDelete[i]) {
      ball.splice(i, 1);
    }
  }
  if(ball.length <= 1) {
    for(vari = 0; i <25; i ++) {
      ball.push(new Ball());
    }
  }
}
