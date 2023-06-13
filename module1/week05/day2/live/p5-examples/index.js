function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  //   background(50);
}

// 60 times per second this will be called
let x = 0;

let playerX = 0;
let playerY = 0;

function draw() {
  background(255);
  fill(200, 100, 100);
  strokeWeight(5); // Beastly
  stroke(255, 255, 100);
  rect(x, 20, 55, 55);

  // animating this variable
  x++;

  fill(100, 200, 100);

  // mouseX and mouseY keep track of the mouse position
  // circle(mouseX, mouseY, 30, 20);

  fill(0, 0, 255);
  rect(playerX, playerY, 50, 50);
}

function keyPressed() {
  console.log("Hello some key was pressed!");
  console.log(keyCode);
  console.log(UP_ARROW);

  if (keyCode === UP_ARROW) {
    console.log("Go up!!!");
    playerY -= 10;
  }

  if (keyCode === DOWN_ARROW) {
    console.log("Go down!!!");
    playerY += 10;
  }

  if (keyCode === RIGHT_ARROW) {
    console.log("Go right!!!");
    playerX += 10;
  }

  if (keyCode === LEFT_ARROW) {
    console.log("Go left!!!");
    playerX -= 10;
  }
}
