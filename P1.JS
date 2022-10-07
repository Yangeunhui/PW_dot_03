function setup() {
  createCanvas(800, 600);
  background(255);
  noStroke();
  let circleD = 25;

  let fillColor = "Coral";
  fill(fillColor);
  circle(0, 0, 25);
  for (let circleY = 0; circleY <= height; circleY += circleD * 4) {
    for (let circleX = 0; circleX <= width; circleX += circleD * 2) {
      circle(circleX, circleY, circleD);
    }
  }

  fillColor = "CornflowerBlue";
  fill(fillColor);
  circle(circleD * 2, 0, circleD);
  for (let circleY = 0; circleY <= height; circleY += circleD * 4) {
    for (let circleX = circleD * 2; circleX <= width; circleX += circleD * 4) {
      circle(circleX, circleY, circleD);
    }
  }

  fillColor = "DarkSlateBlue";
  fill(fillColor);
  circle(circleD, circleD * 2, circleD);
  for (let circleY = circleD * 2; circleY <= height; circleY += circleD * 4) {
    for (let circleX = circleD; circleX <= width; circleX += circleD * 4) {
      circle(circleX, circleY, circleD);
    }
  }

  fillColor = "DarkSeaGreen";
  fill(fillColor);
  circle(circleD * 3, circleD * 2, circleD);
  for (let circleY = circleD * 2; circleY <= height; circleY += circleD * 4) {
    for (let circleX = circleD * 3; circleX <= width; circleX += circleD * 4) {
      circle(circleX, circleY, circleD);
    }
  }
}

function draw() {}
