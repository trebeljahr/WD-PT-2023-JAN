let player1;
let player2;
const W = 87;
const S = 83;
const A = 65;
const D = 68;

let img;

function preload() {
  img = loadImage(
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  );
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  //   background(50);
  player1 = new Player(0, 0, 255);
  player2 = new Player(255, 0, 0);
}

// AABB => Axis Aligned Bounding Box
function collideRectangles(rect1, rect2) {
  if (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.h + rect1.y > rect2.y
  ) {
    return true;
  }
  return false;
}
// 60 times per second this will be called
let x = 0;

function draw() {
  // const scoreElement = document.getElementById("score");
  // scoreElement.innerText = x;

  background(255);
  image(img, 0, 0, window.innerWidth, window.innerHeight);

  textSize(32);
  strokeWeight(0);
  text("hello world", 10, 30);

  fill(200, 100, 100);
  // strokeWeight(5); // Beastly
  stroke(255, 255, 100);
  rect(x, 20, 55, 55);

  // animating this variable
  x++;

  fill(100, 200, 100);

  // mouseX and mouseY keep track of the mouse position
  // circle(mouseX, mouseY, 30, 20);

  player1.draw();
  player2.draw();

  console.log(
    collideRectangles(player1, player2)
      ? "Yes they collide"
      : "No they don't collide"
  );
}
