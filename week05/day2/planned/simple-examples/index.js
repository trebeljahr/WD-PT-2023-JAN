let bgImg;
let x1 = 0;
let x2 = 0;
let scrollSpeed = 1;

function preload() {
  bgImg = loadImage("infinite-background.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // drawing an image
  background(51);
  // setting the framerate
  frameRate(60);
}

function drawBackground() {
  image(bgImg, x1, 0, width, height);
  image(bgImg, x2, 0, width, height);

  x1 -= scrollSpeed;
  x2 -= scrollSpeed;

  if (x1 < -width) {
    x1 = width;
  }
  if (x2 < -width) {
    x2 = width;
  }
}

function draw() {
  drawBackground();
  //   noLoop();
  // how to draw a rectangle, circle
  // beginShape/endShape, vertex
  // push, pop

  let green = color(30, 200, 30);
  // fill, stroke
  fill(green);
  stroke(200);
  triangle(30, 75, 58, 20, 86, 75);

  // textSize(32);
  // fill(green)
  // stroke("white")
  // text("word", 10, 30);

  // arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);

  //   beginShape(TESS);
  //   vertex(20 + mouseX, 20 + mouseY);
  //   vertex(80 + mouseX, 20 + mouseY);
  //   vertex(80 + mouseX, 40 + mouseY);
  //   vertex(40 + mouseX, 40 + mouseY);
  //   vertex(40 + mouseX, 60 + mouseY);
  //   vertex(80 + mouseX, 60 + mouseY);
  //   vertex(80 + mouseX, 80 + mouseY);
  //   vertex(20 + mouseX, 80 + mouseY);
  //   endShape(CLOSE);

  // choose a random color
  // const randomColor = color(random(255), random(255), random(255));

  // how to react to the mouse
  // mouseX and mouseY

  // draw an ellipse wherever the mouse is
  //   fill(randomColor);
  //   ellipse(mouseX, mouseY, 50, 50);

  // we could draw a rect under our mouse
  // rect(mouseX, mouseY, 30, 30);
}
