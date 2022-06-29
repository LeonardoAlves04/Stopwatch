window.onload = function () {

    var hours = 00;
    var minutes = 00;
    var seconds = 00;
    var tens = 00;
    var appendHours = document.getElementById("hours");
    var appendMinutes = document.getElementById("minutes");
    var appendSeconds = document.getElementById("seconds");
    var appendTens = document.getElementById("tens");
    var buttonStart = document.getElementById("start-button");
    var buttonStop = document.getElementById("stop-button");
    var buttonReset = document.getElementById("reset-button");
    var buttonMark = document.getElementById("mark-button");
    var Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }

    buttonReset.onclick = function () {
        clearInterval(Interval);
        hours = "00";
        minutes = "00";
        seconds = "00";
        tens = "00";
        appendHours.innerHTML = hours;
        appendMinutes.innerHTML = minutes;
        appendSeconds.innerHTML = seconds;
        appendTens.innerHTML = tens;
    }

    buttonMark.onclick = function () {
        console.log("O tempo atual é: " + appendHours.innerHTML + ":" + appendMinutes.innerHTML + ":" + appendSeconds.innerHTML + ":" + appendTens.innerHTML)
    }

    function startTimer() {
        tens++

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = "0";
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

        if (seconds >= 59) {
            console.log("minutes");
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = "0";
            appendSeconds.innerHTML = "0" + 0;
        }

        if (minutes >= 60) {
            console.log("hours");
            hours++;
            appendHours.innerHTML = "0" + hours;
            minutes = "0";
            appendMinutes.innerHTML = "0" + 0;
        }
    }
}