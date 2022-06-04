const counterPoints = document.querySelector("div.counter-points");
const player = document.querySelector("div.player");
const point = document.querySelector("div.point");

const playerData = {
    positionX: 0,
    positionY: 0,
    char_position: "down",
    points: {
        counter: 0,
        positionX: Math.floor(Math.random() * 14) + 1,
        positionY: Math.floor(Math.random() * 14) + 1
    }
};

const sides = {
    down: 0,
    left: -25,
    right: -50,
    up: -75
};

const setupGame = () => {
    player.style.backgroundPosition = "0px " + sides[playerData.char_position] + "px";
    player.style.top = playerData.positionY * 25 + "px";
    player.style.left = playerData.positionX * 25 + "px";
    counterPoints.innerHTML = "Pontos Totais: " + playerData.points.counter;
    insertPointOnDisplay();
};

const insertPointOnDisplay = () => {
    point.style.top = playerData.points.positionY * 25 + "px";
    point.style.left = playerData.points.positionX * 25 + "px";
};

const checkIsPlayerTakePoint = () => {
    if (playerData.positionX === playerData.points.positionX &&
        playerData.positionY === playerData.points.positionY) {
        player.classList.add("get-point");

        setTimeout(() => player.classList.remove("get-point"), 300);
        
        playerData.points.counter++;
        playerData.points.positionX = Math.floor(Math.random() * 14) + 1;
        playerData.points.positionY = Math.floor(Math.random() * 14) + 1;
    }
}

document.addEventListener("keydown", event => {
    if (event.code === "ArrowUp" && playerData.positionY > 0) {
        playerData.char_position = "up";
        playerData.positionY--;
        checkIsPlayerTakePoint();
        setupGame();
    }

    if (event.code === "ArrowDown" && playerData.positionY < 15) {
        playerData.char_position = "down";
        playerData.positionY++;
        checkIsPlayerTakePoint();
        setupGame();
    }

    if (event.code === "ArrowLeft" && playerData.positionX > 0) {
        playerData.char_position = "left";
        playerData.positionX--;
        checkIsPlayerTakePoint();
        setupGame();
    }

    if (event.code === "ArrowRight" && playerData.positionX < 15) {
        playerData.char_position = "right";
        playerData.positionX++;
        checkIsPlayerTakePoint();
        setupGame();
    }
})

setupGame();