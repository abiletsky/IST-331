var timerRate = 1;
var phlX = 310;
var phlY = 530;
var baseFreq = 1000; // ms
var timerInterval;
var animationInterval;
var dataBlockInterval;

var totalSeconds = 0;

function setTime() {
    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

function changeRate() {
    timerRate = document.getElementById('speed').value;
}



function startSimulation() {
    timerInterval = setInterval(setTime, baseFreq / timerRate);
    animationInterval = setInterval(frame, baseFreq / timerRate);
    dataBlockInterval = setInterval(toggleDataBlock, 2000);
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

        if ((flights[i].getAttribute("data-endPhl") == true && posX <= phlX + 14 && posX >= phlX && posY <= phlY + 14 && posY >= phlY) || (posX < 0 || posY < 0 || posX > 800 || posY > 800)) {
            flights[i].remove();
        } else {
            posX += 2 * (Math.cos(degrees * Math.PI / 180));
            posY += 2 * Math.sin(degrees * Math.PI / 180) * -1;
            flights[i].style.top = posY + "px";
            flights[i].style.left = posX + "px";
        }
    }
    if (flights.length == 0) {
        clearInterval(timerInterval);
        clearInterval(animationInterval);
        clearInterval(dataBlockInterval);
    }
}

function updateHeading(flight, heading) {
}

function updateAltitude(flight, altitude) {
}

function updateGroundSpeed(flight, groundSpeed) {
}

function showFlightData(flightId) {
    var flight = document.getElementById(flightId);


    console.log(flight);
}

function toggleDataBlock() {
    var flights = document.getElementsByClassName("flight");

    for(var i = 0; i < flights.length; i++) {
        var db1 = flight[i].querySelector('span[name="data-block-1"]');
        var db2 = flight[i].querySelector('span[name="data-block-2"]');

        db1.classList.toggle("data-block-hidden");
        db2.classList.toggle("data-block-hidden");
    }
}

 function parseInput() {
    var input = document.getElementById("KeyboardInput").value;

    // [__][A___][V___][H___]
    if(input.length != 14) return; // Invalid input format

    var tailNum = input.substring(0,2);
    var commands = input.substring(2).match(/.{1,4}/g);

    var flight = document.querySelector(`.flight[name="${tailNum}"]`);

    for(var command in commands) {
        if(!["A", "V", "H"].includes(command[0])) return; // Invalid command found

        switch(command[0]) {
            case "A":
                updateAltitude(flight.id, command.substring(1));
                break;
            case "V":
                updateGroundSpeed(flight.id, command.substring(1));
                break;
            case "H":
                updateHeading(flight.id, command.substring(1));
                break;
        }
    }
 }
