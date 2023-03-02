function circleCircleCollision(c1, c2) {
  const dx = c1.x - c2.x;
  const dy = c1.y - c2.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  console.log(distance);
  console.log(c1.r + c2.r);

  console.log(distance < c1.r + c2.r);
  return distance < c1.r + c2.r;
}

let player;
let food;
function setup() {
  stopGame();
}

function startGame() {
  createCanvas(window.innerWidth, window.innerHeight);
  player = new Player(width / 2, height / 2, 50);
  food = new Food();
  food.spawn(30);
  loop();
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}

function restartGame() {
  loop();
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

function randomColor() {
  const r = Math.floor(random(255));
  const g = Math.floor(random(255));
  const b = Math.floor(random(255));
  const color = `rgb(${r},${g},${b})`;
  return color;
}

class Dot {
  constructor(x, y, r = 15) {
    this.pos = createVector(x, y);
    this.r = r;
    this.color = randomColor();
    this.v = createVector(0, 0);
  }

  get x() {
    return this.pos.x;
  }

  get y() {
    return this.pos.y;
  }

  set x(newX) {
    this.pos.x = newX;
  }

  set y(newY) {
    this.pos.y = newY;
  }

  update() {
    this.x += this.v.x;
    this.y += this.v.y;
  }

  draw() {
    fill(this.color);
    noStroke();
    circle(this.x, this.y, this.r * 2);
  }
}

class Player extends Dot {
  constructor(x, y, r) {
    super(x, y, r);
    this.speed = 5;
  }

  chaseMouse() {
    const differenceFromMouse = createVector(mouseX, mouseY).sub(this.pos);
    if (differenceFromMouse.mag() < this.r) {
      this.v = createVector(0, 0);
    } else {
      this.v = differenceFromMouse.normalize().mult(this.speed);
    }
    this.update();
    this.draw();
  }
}

class Food {
  constructor() {
    this.particles = [];
  }

  spawn(amount) {
    for (let i = 0; i < amount; i++) {
      this.particles.push(
        new Dot(random(width), random(height), random(5, 15))
      );
    }
  }

  draw() {
    this.particles.forEach((particle) => particle.draw());
  }

  update() {
    this.particles = this.particles.filter((particle) => {
      const colliding = circleCircleCollision(player, particle);
      if (colliding) {
        player.r += 4;
      }
      return !colliding;
    });
    this.particles.forEach((particle) => particle.update());
  }
}

function draw() {
  background("white");
  food && food.draw();
  food && food.update();
  player && player.chaseMouse();
}

function keyPressed() {
  switch (keyCode) {
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
