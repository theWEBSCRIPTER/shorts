const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
var x=Math.random()*canvas.width+1,
    y=Math.random()*canvas.height+1,
    dx = 1,
    dy = 1,
    size = 5;
function loop () {

  // White Background 
  c.fillStyle="white"
  c.fillRect(0,0,
            canvas.width,
            canvas.height);
  
  // Red Ball
  c.fillStyle="red";
  c.beginPath();
  c.arc(x, y, size, 0, 2 * Math.PI);
  c.fill()
  
  // Reverse if wall
  if (x <= size ||
      x >= canvas.width-size)
  {
    dx *= -1
  }
  if (y <= size ||
      y >= canvas.height-size)
  {
    dy *= -1
  }
  
  // Animate the ball
  x+=dx;y+=dy;
  requestAnimationFrame(loop);
}
loop()
