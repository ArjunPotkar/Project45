var track;
var canvas;
var form;
var backgroundImage;
var game;
var player;

function preload(){
  track=loadImage("./assets/track.jpg");
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  game=new Game();
  game.start();

}

function draw() {
  background(backgroundImage);  
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
