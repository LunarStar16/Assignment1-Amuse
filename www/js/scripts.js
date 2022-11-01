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
var backcolour = '#fff';
var strokecolour = '#000';

$("#stroke").on("change", function(){
strokecolour = $('#stroke').val();
})
$("#backgroundcolour").on("change", function(){
  backcolour = $('#backgroundcolour').val();
})


function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("p5canvas");
  noFill();
  strokeWeight(Size);
  
}

function draw() {
  background(colorAlpha(backcolour, 0.15));
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

//https://gist.github.com/bcardiff/3b39ba8e2d00fed68435
function colorAlpha(aColor, alpha) {
  var c = color(aColor);
  return color('rgba(' +  [red(c), green(c), blue(c), alpha].join(',') + ')');
}

// things I want to do
// customizable stroke size
// customizing the ammount of ripples 1-3
// customize Speed