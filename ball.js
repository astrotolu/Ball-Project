var canvas = document.getElementById('myCanvas');
var c = canvas.getContext('2d');
var tx = window.innerWidth;
var ty = window.innerHeight;

canvas.width = tx;
canvas.height = ty;



// Random Colors for the ball
function randomColor(){
  return (
    "rgba(" +
    Math.round(Math.random() * 250) + 
    "," +
    Math.round(Math.random() * 250) +
    "," +
    Math.round(Math.random() + 250) +
    "," +
    Math.ceil(Math.random() * 10) / 10
    +
    ")"
  );
}
console.log('Me')

// Draw ball using a ball function
function Ball() {
  this.color = randomColor();
  this.radius = Math.random() * 20 + 14;
  this.startradius = this.radius;
  this.x = Math.random() * (tx - this.radius * 2) + this.radius;
  this.y = Math.random() * (ty - this.radius);
  // Ball velocity in y and x direction
  this.dy = Math.random() * 2;
  this.dx = Math.round((Math.random() - 0.5) * 10);
  // Ball Speed
  this.vel = Math.random() / 5 ;

  this.update = function(){
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,2*Math.PI);
    // c.stroke();
    c.fillStyle = this.color;
    c.fill();

    console.log('Tolu')

  };
}
// radius = Math.random() * 20 + 14;
// x = Math.random() * (tx - this.radius * 2) + this.radius;
// y = Math.random() * (ty - this.radius);
// c.beginPath();
// c.arc(x,y,radius,0,2*Math.PI);
// // c.stroke();
// c.fillStyle = randomColor();
// c.fill();

// Create more new balls in an array
var balls = [];
for (var i = 0; 1 < 50; i++){
  balls.push(new Ball())
}