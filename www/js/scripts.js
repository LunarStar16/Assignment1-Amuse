var app = new Framework7({
  // App root element
  el: '#app',
  // ... other parameters
});
var mainView = app.views.create('.view-main')

//https://happycoding.io/examples/p5js/input/mouse-ripple


var Size = 5;
var ripples = [];


function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("p5canvas");
  noFill();
  strokeWeight(5);

}

function draw() {
  background(255, 25);
  

  for(var i = 0; i < ripples.length; i++){
    ripples[i].display();
    ripples[i].move();
  }

  if (ripples.length > 50) {
    ripples.splice(0,1);
  }
  

}

function mousePressed(){
  ripples.push(new Ripples(mouseX, mouseY));
}

function Ripples(x, y) {
  this.x = x;
  this.y = y;
  this.d = 0;

  this.display = function() {
    stroke(0);
    ellipse(this.x, this.y, this.d);
    // circle(circleX, circleY, circleSize * .75);
    // circle(circleX, circleY, circleSize * .5);
  }
  this.move = function(){
    this.d= this.d += Size;
  }

  
}


