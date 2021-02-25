


const timer = document.getElementById('stopwatch');

var min = 0;
var sec = 0;
var ms = 0;
var stoptime = true;

function startWatch() {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopWatch() {
    if (stoptime == false) {
        stoptime = true;
    }
}

$(function(){

    function lapTimer(){

        let $lap = $(`#lap`);
        $lap.on(`click`, function(){
            if(ms < 10){
                $(`#lapMs`).html(`0${ms}`);
            }
            if(ms >= 10){
                $(`#lapMs`).html(`${ms}`);
            }
            if(sec < 10){
                $(`#lapSec`).html(`0${sec}`)
            }
            if(sec >= 10){
                $(`#lapSec`).html(`${sec}`);
            }
            if(min < 10){
                $(`#lapMin`).html(`0${min}`);
            }
            if(min >= 10){
                $(`#lapMin`).html(`${min}`);
            }
        })
    }
    lap.addEventListener("click", lapTimer);
})

function timerCycle() {
    if (stoptime == false) {
        ms = parseInt(ms);
        sec = parseInt(sec);
        min = parseInt(min);

        ms += 1;

        if (ms == 100) {
            sec = sec + 1;
            ms = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
            ms = 0;
        }

        if (ms < 10 || ms == 0) {
            ms = '0' +  ms;
        }
        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }

        timer.innerHTML = min + ':' + sec + ':' + ms;
    }
}

window.setInterval(timerCycle, 10);




function resetTimer() {
    timer.innerHTML = "00:00:00";
    stoptime = true;
    min = 0;
    sec = 0;
    ms = 0;
}



reset.addEventListener("click", resetTimer);

start.addEventListener("click", startWatch);

document.getElementById("stop").addEventListener("click", stopWatch);
