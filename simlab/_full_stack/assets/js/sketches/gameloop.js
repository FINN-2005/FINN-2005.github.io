let ball;
let velocity;
let frameCounter = 0;

function setup() {
    let canvas = createCanvas(500, 400);
    canvas.parent("gameloop-canvas");

    ball = createVector(100, height/2);
    velocity = createVector(3, 2);
}

function draw() {
    background(20);

    update();
    render();

    frameCounter++;
}

function update() {
    ball.add(velocity);

    if (ball.x - 30 < 0 || ball.x + 30 > width) {
        velocity.x *= -1;
    }

    if (ball.y - 30 < 0 || ball.y + 30 > height) {
        velocity.y *= -1;
    }
}

function render() {
    fill(100, 200, 255);
    noStroke();
    circle(ball.x, ball.y, 30);

    fill(255);
    textSize(16);

    text("Frame: " + frameCounter, 20, 30);
    text("FPS: " + floor(frameRate()), 20, 55);

    text("Loop: update() → draw()", 20, 80);
}