var app = new Framework7({
  // App root element
  el: '#app',
  // ... other parameters
});
var mainView = app.views.create('.view-main')

//https://happycoding.io/examples/p5js/input/mouse-ripple


var Speed = 5;
var ripples = [];
var Size = 5;
var backcolour = 255;
var strokecolour = '#000';

$("#stroke").on("change", function(){
strokecolour = $('#stroke').val();


})


function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("p5canvas");
  noFill();
  strokeWeight(Size);
  
}

function draw() {
  background(backcolour, 15);
  stroke(strokecolour);

  for(var i = ripples.length - 1; i >= 0; i--){
    ripples[i].display();
    ripples[i].move();
    if (ripples[i].isFinished()){
      ripples.splice(i, 1);
    }
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
    // stroke(0);
    ellipse(this.x, this.y, this.d);
    ellipse(this.x, this.y, this.d * .75);
    ellipse(this.x, this.y, this.d * .5);
  }
  this.move = function(){
    this.d= this.d += Speed;
  }

  this.isFinished = function(){
    if (this.d > windowHeight + windowWidth * 2){
      return true;
    }
    else{
      return false;
    }
  }

  
}

// things I want to do
// customizable background colour
// customizable stroke colour
// customizable stroke size
// customizing the ammount of ripples 1-3
// customize Speed