let angle;

function setup() {
  stopGame();
  angle = 90;
}

function startGame() {
  console.log("Hello we ran");
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  loop();
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}

function restartGame() {
  loop();
  x = initialX;
  y = initialY;
  const gameOverScreen = document.getElementById("game-over");
  gameOverScreen.classList.toggle("hidden");
}
function stopGame() {
  noLoop();
}

function looseGame() {
  stopGame();
  const gameOverScreen = document.getElementById("game-over");
  gameOverScreen.classList.toggle("hidden");
}

const initialX = 100;
const initialY = 100;
let x = initialX;
let y = initialY;
const pacmanSpeed = 3;

let openAngle = 45;
let openingSpeed = 3;

function draw() {
  background(100);
  fill("yellow");
  openAngle += openingSpeed;
  if (openAngle >= 90 || openAngle <= 45) {
    openingSpeed = -openingSpeed;
  }

  arc(x, y, 80, 80, -45 + angle, 180 + 45 + angle, PIE);

  if (angle === 90) {
    x += pacmanSpeed;
  }
  if (angle === 180) {
    y += pacmanSpeed;
  }
  if (angle === 270) {
    x -= pacmanSpeed;
  }
  if (angle === 360) {
    y -= pacmanSpeed;
  }
  // angle += 0.1;
}

function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      angle = 360;
      break;
    case RIGHT_ARROW:
      angle = 90;
      break;
    case DOWN_ARROW:
      angle = 180;
      break;
    case LEFT_ARROW:
      angle = 270;
      break;
    case ESCAPE:
      if (isLooping()) {
        console.log("Hit escape!");
        looseGame();
      }
      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

const restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", restartGame);
