let img;
let x = 0;

function preload() {
  img = loadImage('assets/laDefense.jpg');
}

function setup() {
  createCanvas(500, 500);
  background(200);
  // If you want to scale the image to 100 x 100 pixels
  // image(img, 0, 0, 100, 100);

  // If you want to scale image by 50%
  // image(img, 10, 10, img.width/2, img.height/2);
}

function draw() {
  image(clouds, x, 10, clouds.width/2, clouds.height/2)
x++
if (x < 0) {
  x = height;
