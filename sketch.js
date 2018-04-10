
var cap;
function setup() {
 createCanvas(400, 400);
 cap = createCapture(VIDEO);
 cap.hide();
 imageMode(CENTER);
}
function draw() {
 background(50);
 image(cap, mouseX/2, mouseY, 1000, 1000);

 fill(0);
cap.loadPixels();
for (var cy = 0; cy < cap.height; cy += 2) {
 for (var cx = 0; cx < cap.width; cx += 12) {
   var offset = ((cy*cap.width)+cx)*4;
   var xpos = (cx / cap.width) * width;
   var ypos = (cy / cap.height) * height;
   rect(xpos, ypos, 8,
     1 * (cap.pixels[offset+2]/190));
 }
}
}











//
// // declare variables here
//
//
// // setup runs once
// function setup() {
// 	// make canvas full screen
// 	createCanvas(windowWidth, windowHeight);
// }
//
// // draw loops and loops
// function draw() {
// 	clear();
// 	ellipse(mouseX, mouseY, 100);
// }
//
//
// // write functions here
