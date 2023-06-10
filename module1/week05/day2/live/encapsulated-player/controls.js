function keyPressed() {
  controlPlayer1();
  controlPlayer2();
}

// p5 under the hood does something like this...
// document.addEventListener("keypress", (event) => {
//   keyCode = event.key;
//   keyPressed();
// });

function controlPlayer1() {
  if (keyCode === UP_ARROW) {
    player1.moveUp();
  }

  if (keyCode === DOWN_ARROW) {
    player1.moveDown();
  }

  if (keyCode === RIGHT_ARROW) {
    player1.moveRight();
  }

  if (keyCode === LEFT_ARROW) {
    player1.moveLeft();
  }
}

function controlPlayer2() {
  if (keyCode === W) {
    player2.moveUp();
  }

  if (keyCode === S) {
    player2.moveDown();
  }

  if (keyCode === D) {
    player2.moveRight();
  }

  if (keyCode === A) {
    player2.moveLeft();
  }
}
