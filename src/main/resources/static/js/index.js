var timerRate = 1;

  function changeRate() {
    timerRate = document.getElementById('speed').value;
  }

  function startSimulation() {
    var flights = document.getElementsByClassName("flight");

    for(var i = 0; i < flights.length; i++) {
        flights[i].style.position = "absolute";

        var degrees = flights[i].getAttribute('data-heading');
        var rect = flights[i].getBoundingClientRect();

        var posX = rect.left + window.scrollX;
        var posY = rect.top + window.scrollY;

        var id = clearInterval(id);
        id = setInterval(frame, 750);

        // Calculate slope from angle and one point: https://stackoverflow.com/questions/1571294/line-equation-with-angle
        // Don't need slope, calc new x and new y instead: https://math.stackexchange.com/questions/143932/calculate-point-given-x-y-angle-and-distance
          function frame() {
            if (posX != 350) {
              clearInterval(id);
            } else {
              posX += flights[i].clientWidth * (Math.cos(degrees * Math.PI / 180));
              posY += flights[i].clientHeight * Math.sin(degrees * Math.PI / 180) * -1;
              flights[i].style.top = posY + "px";
              flights[i].style.left = posX + "px";
            }
          }
    }
  }

