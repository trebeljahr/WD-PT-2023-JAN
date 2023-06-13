function decayVelocity(vel) {
  // implement decaying velocities
  const decay = vel > 0 ? -0.05 : vel < 0 ? 0.05 : 0;
  vel += decay;
  const overshootFromTop = vel < 0 && decay < 0;
  const overshootFromBot = vel > 0 && decay > 0;
  if (overshootFromTop || overshootFromBot) {
    return 0;
  }
  return vel;
}

class ImprovedPlayer {
  constructor(initWidth = 30, initHeight = 30) {
    this.x = 0;
    this.y = 0;
    this.velX = 0;
    this.velY = 0;
    this.width = initWidth;
    this.height = initHeight;
  }

  draw() {
    // how to make things move around in a "nicer" way
    if (keyIsDown(LEFT_ARROW)) {
      this.velX -= 0.1;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.velX += 0.1;
    }
    if (keyIsDown(UP_ARROW)) {
      this.velY -= 0.1;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.velY += 0.1;
    }

    this.velX = decayVelocity(this.velX);
    this.velY = decayVelocity(this.velY);

    this.x += this.velX;
    this.y += this.velY;

    // clamp the values when they hit the screen edges so
    // that the player can't go further
    this.y = max(1, this.y);
    this.y = min(this.y, height - this.height - 1);
    this.x = max(1, this.x);
    this.x = min(this.x, width - this.width - 1);

    let yellow = color(255, 204, 0);
    fill(yellow);
    rect(this.x, this.y, this.width, this.height);
  }
}

let improvedPlayer;

function setup() {
  improvedPlayer = new ImprovedPlayer();
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  background(220);
  improvedPlayer.draw();
}
