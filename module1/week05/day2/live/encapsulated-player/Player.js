class Player {
  constructor(r, g, b) {
    this.x = 0;
    this.y = 0;
    this.speed = 10;
    this.color = color(r, g, b);
    this.w = 50;
    this.h = 50;
  }

  draw() {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
  }

  moveDown() {
    this.y += 10;
  }

  moveUp() {
    this.y -= 10;
  }

  moveLeft() {
    this.x -= 10;
  }

  moveRight() {
    this.x += 10;
  }
}
