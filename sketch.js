
function setup() {
    createCanvas(700, 400);
    Player.position = Cpu.position = height / 2 - 50;
    initBall();

    textAlign(CENTER);
    textSize(30);
    fill(255);
}

function draw() {
    background(40);

    drawPlayerPaddle();
    drawCpuPaddle();
    drawBall();
    text("You " + Player.score + "  |  " + Cpu.score + " CPU", width / 2, 50);

    handlePlayerMovement();
    handleCpuMovement();
    handleBallMovement();
}