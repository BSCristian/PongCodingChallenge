const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 100;


var Player = {
    position: 0,
    score: 0,
    velocity: 0
}

var Cpu = {
    position: 0,
    score: 0,
    velocity: 0
}

function drawPlayerPaddle() {
    rect(PADDLE_WIDTH * 2, Player.position, PADDLE_WIDTH, PADDLE_HEIGHT);
}

function drawCpuPaddle() {
    rect(width - (PADDLE_WIDTH * 3), Cpu.position, PADDLE_WIDTH, PADDLE_HEIGHT);
}

function handlePlayerMovement() {
    if (keyIsDown(87)) {
        Player.velocity -= 3;
    } else if (keyIsDown(83)) {
        Player.velocity += 3;
    }

    Player.position += Player.velocity;
    Player.velocity *= 0.4;

    Player.position = constrain(Player.position, 0, height - PADDLE_HEIGHT)
}

function handleCpuMovement() {
    if (Ball.y >= Cpu.position + 100) {
        Cpu.velocity += 3;
    } else if(Ball.y <= Cpu.position) {
        Cpu.velocity -= 3;
    } else {
        Cpu.velocity = 0;
    }


    Cpu.position += Cpu.velocity;
    Cpu.velocity *= 0.4;
    Cpu.position = constrain(Cpu.position, 0, height - PADDLE_HEIGHT)
}