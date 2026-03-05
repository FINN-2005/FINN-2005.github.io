let anchor;
let mass;

let velocity = 0;
let restLength = 150;
let k = 0.02;
let damping = 0.98;

let dragging = false;

function setup() {
    let canvas = createCanvas(500, 400);
    canvas.parent("spring-canvas");

    anchor = createVector(width/2, 50);
    mass = createVector(width/2, 200);
}

function draw() {
    background(20);

    let displacement = mass.y - (anchor.y + restLength);

    let force = -k * displacement;

    velocity += force;
    velocity *= damping;

    if (!dragging) {
        mass.y += velocity;
    }

    stroke(200);
    strokeWeight(2);
    line(anchor.x, anchor.y, mass.x, mass.y);

    fill(255);
    circle(anchor.x, anchor.y, 10);

    fill(100, 200, 255);
    circle(mass.x, mass.y, 30);

    fill(255);
    noStroke();
    textSize(16);
    text("Velocity: " + velocity.toFixed(2), 20, 30);
}

function mousePressed() {
    if (dist(mouseX, mouseY, mass.x, mass.y) < 20) {
        dragging = true;
    }
}

function mouseDragged() {
    if (dragging) {
        mass.y = mouseY;
        velocity = 0;
    }
}

function mouseReleased() {
    dragging = false;
}