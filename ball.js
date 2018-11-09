var Ball = {
    radius: 20,
    xVelocity: 1,
    yVelocity: 1,
    speed: 3,
    x: 100,
    y: 100
}

function drawBall() {
    ellipse(Ball.x, Ball.y, Ball.radius);
}

function handleBallMovement() {
    Ball.x += Ball.xVelocity * Ball.speed;
    Ball.y += Ball.yVelocity * Ball.speed;

    if (Ball.y > height - 10 || Ball.y < 10) {
        Ball.yVelocity *= -1;
    }

    if (Ball.x <= PADDLE_WIDTH * 3) {

        if (Ball.x <= PADDLE_WIDTH) {
            Cpu.score++;
            initBall();
            return;
        }
    
        if (Ball.y > Player.position && Ball.y < Player.position + PADDLE_HEIGHT) {
            Ball.xVelocity *= -1;
            Ball.yVelocity = random(0.5, 1);
        }
    } else if (Ball.x >= width - (PADDLE_WIDTH * 3)) { // right paddle

        if (Ball.x >= width - PADDLE_WIDTH) { // out of bounds
    
          Player.score++;
          initBall();
          return;
        }
    
        // check collision on right paddle
        if (Ball.y > Cpu.position && Ball.y < Cpu.position + PADDLE_HEIGHT) {
            Ball.xVelocity *= -1;
            Ball.yVelocity = random(0.5, 1);
        }
    }
    
    Ball.speed += 0.001;
}

function initBall() {
    Cpu.position = height / 2 - 50;
    Ball.xVelocity = random(0.5, 1)
    Ball.yVelocity = random(0.5, 1)
    Ball.x = width / 2 - 10;
    Ball.y = height / 2 - 10;
}