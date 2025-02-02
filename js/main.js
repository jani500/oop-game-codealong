class Player {
  constructor() {
    console.log("inside constructor...");

    // set the initial position of the player

    this.positionX = 45;
    this.positionY = 0;
    this.width = 10;
    this.height = 10;

    // you can declare and initialize in constructor and assign null to it, so I can use it everwehre.
    this.domElement = null;

    // so whenever we invoke the player element, we create a new element in the DOM
    this.createDomElement();
  }

  createDomElement() {
    // create the element
    this.domElement = document.createElement("div");

    // add content or modify (ex. innerHTML);

    this.domElement.id = "player";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.bottom = this.positionY + "vh";
    this.domElement.style.left = this.positionX + "vw";

    // append to the dom where the board is the parent
    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.domElement);
  }

  moveLeft() {
    // Alternatively, you can write this.positionX = this.positionX - 1 OR this.positionX-=
    this.positionX--;
    this.domElement.style.left = this.positionX + "vw";
    console.log(`new position.... ${this.positionX}`);

    // add a check to not modify the position outside of the board
  }

  moveRight() {
    this.positionX++;

    // here we still want .left because we locate it in reference to bottom left
    this.domElement.style.left = this.positionX + "vw";
    console.log(`new position.... ${this.positionX}`);
  }
}

const player = new Player();
const obstaclesArr = [];

// create new obstacles

setInterval(() => {
  const newObstacle = new Obstacle();
  obstaclesArr.push(newObstacle);
}, 2000);

// move all obstacles
setInterval(() => {
  obstaclesArr.forEach((obstacle) => {
    obstacle.moveDown();

    if (
      obstacle.positionX < player.positionX + player.width &&
      obstacle.positionX + obstacle.width > player.positionX &&
      obstacle.positionY < player.positionY + player.height &&
      obstacle.height + obstacle.positionY > player.positionY
    ) {
      console.log("game over my friend");

      // location.href = './gameover.html';
    }
  });
}, 600);

/* let time = 0; */

/* setInterval(() => {
  if (time === 60) {
    obstaclesArr.forEach((obstacle) => {
      obstacle.moveDown();
    });
  } else if (time === 100) {
    const newObstacle = new Obstacle();
    obstaclesArr.push(newObstacle);
  }
}, time); */

// attach event listeners

// Listen to a keydown event
document.addEventListener("keydown", (event) => {
  console.log("user pressed a key....");
  console.log(event.code);

  if (event.code === "ArrowLeft") {
    player.moveLeft();
  } else if (event.code === "ArrowRight") {
    player.moveRight();
  }
});

class Obstacle {
  constructor(obstacle) {
    this.positionX = 45;
    this.positionY = 50;
    this.width = 10;
    this.height = 10;

    this.domElement = null;

    this.createDomElement();
  }

  createDomElement() {
    // create the element
    this.domElement = document.createElement("div");

    // add content or modify (ex. innerHTML);

    this.domElement.className = "obstacle";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.bottom = this.positionY + "vh";
    this.domElement.style.left = this.positionX + "vw";

    // append to the dom where the board is the parent
    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.domElement);
  }

  moveDown() {
    this.positionY -= 5;
    // console.log(`new position.... ${this.positionY}`);
    this.domElement.style.bottom = this.positionY + "vh";
  }
}

const obstacleOne = new Obstacle();

setInterval(() => {
  obstacleOne.moveDown();
}, 200);
