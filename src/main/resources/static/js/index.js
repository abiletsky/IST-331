var timerRate = 1;
var phlX = 310;
var phlY = 530;
var baseFreq = 1000; // ms

function changeRate() {
    timerRate = document.getElementById('speed').value;
}

function startSimulation() {
    var id = clearInterval(id);
    id = setInterval(frame, baseFreq / timerRate);
}

// Calculate slope from angle and one point: https://stackoverflow.com/questions/1571294/line-equation-with-angle
// Don't need slope, calc new x and new y instead: https://math.stackexchange.com/questions/143932/calculate-point-given-x-y-angle-and-distance
function frame() {
    var flights = document.getElementsByClassName("flight");

    for(var i = 0; i < flights.length; i++) {
        flights[i].style.position = "absolute";

        var degrees = flights[i].getAttribute('data-heading');
        var rect = flights[i].getBoundingClientRect();

        var posX = rect.left + window.scrollX;
        var posY = rect.top + window.scrollY;

        if (flights[i].getAttribute("data-endPhl") == true && posX <= phlX + 14 && posX >= phlX && posY <= phlY + 14 && posY >= phlY) {
            clearInterval(id);
            flights[i].remove();
        } else {
            posX += (Math.cos(degrees * Math.PI / 180));
            posY += Math.sin(degrees * Math.PI / 180) * -1;
            flights[i].style.top = posY + "px";
            flights[i].style.left = posX + "px";
        }
    }
}

function updateHeading(flight, heading) {
}

function updateAltitude(flight, altitude) {
}

function updateGroundSpeed(flight, groundSpeed) {
}

function showFlightData(flight) {
}


