var d = document.getElementById('movingDiv');

var degrees = 300;

d.style.position = "absolute";
d.innerText = d.getAttribute('data-fruit-name');
var rect = d.getBoundingClientRect();

var posX = rect.left + window.scrollX;
var posY = rect.top + window.scrollY;

var id = clearInterval(id);
id = setInterval(frame, 500);

// Calculate slope from angle and one point: https://stackoverflow.com/questions/1571294/line-equation-with-angle
// Don't need slope, calc new x and new y instead: https://math.stackexchange.com/questions/143932/calculate-point-given-x-y-angle-and-distance
  function frame() {
    if (posX >= 350) {
      clearInterval(id);
    } else {
      posX += d.clientWidth * (Math.cos(degrees * Math.PI / 180));
      posY += d.clientHeight * Math.sin(degrees * Math.PI / 180) * -1;
      d.style.top = posY + "px";
      d.style.left = posX + "px";
    }
  }

  function updateAngle() {

  }

