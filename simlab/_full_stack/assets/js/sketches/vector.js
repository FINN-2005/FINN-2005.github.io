let origin;
let v1;
let v2;

let dragging1 = false;
let dragging2 = false;

function setup() {
    let canvas = createCanvas(500, 400);
    canvas.parent("vector-canvas");

    origin = createVector(width/2, height/2);

    v1 = createVector(origin.x + 100, origin.y - 50);
    v2 = createVector(origin.x + 50, origin.y + 100);
}

function draw() {
    background(20);

    stroke(100);
    line(0, origin.y, width, origin.y);
    line(origin.x, 0, origin.x, height);

    let a = p5.Vector.sub(v1, origin);
    let b = p5.Vector.sub(v2, origin);

    let dot = a.dot(b);

    drawVector(origin, v1, color(80, 200, 255));
    drawVector(origin, v2, color(255, 120, 120));

    fill(255);
    noStroke();
    textSize(16);
    text("Dot Product: " + dot.toFixed(2), 20, 30);

    drawHandles();
}

function drawVector(start, end, col) {
    stroke(col);
    strokeWeight(3);
    line(start.x, start.y, end.x, end.y);
}

function drawHandles() {
    fill(255);
    stroke(0);

    circle(v1.x, v1.y, 12);
    circle(v2.x, v2.y, 12);
}

function mousePressed() {
    if (dist(mouseX, mouseY, v1.x, v1.y) < 10) {
        dragging1 = true;
    }

    if (dist(mouseX, mouseY, v2.x, v2.y) < 10) {
        dragging2 = true;
    }
}

function mouseDragged() {
    if (dragging1) {
        v1.x = mouseX;
        v1.y = mouseY;
    }

    if (dragging2) {
        v2.x = mouseX;
        v2.y = mouseY;
    }
}

function mouseReleased() {
    dragging1 = false;
    dragging2 = false;
}