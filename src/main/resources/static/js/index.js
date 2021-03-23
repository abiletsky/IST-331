var d = document.getElementById('movingDiv');
d.style.position = "absolute";
d.innerText = d.getAttribute('data-fruit-name');
var rect = d.getBoundingClientRect();

var posX = rect.left + window.scrollX;
var posY = rect.top + window.scrollY;

var id = clearInterval(id);
id = setInterval(frame, 500);

// Calculate slope from angle and one point: https://stackoverflow.com/questions/1571294/line-equation-with-angle

  function frame() {
    if (posX >= 350) {
      clearInterval(id);
    } else {
      posX += d.clientWidth;
      posY += d.clientHeight;
      d.style.top = posY + "px";
      d.style.left = posX + "px";
    }
  }
