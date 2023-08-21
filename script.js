const display = document.querySelector("#myLabel")
const start = document.querySelector("#start")
const pause = document.querySelector("#pause")
const reset = document.querySelector("#reset")

//Function that updates the time on the clock periodically
function updateClock(){
    timePassed = Date.now() - startTime;
    secs = Math.floor((timePassed/1000 % 60));
    mins = Math.floor((timePassed/(1000*60) % 60));
    hrs = Math.floor((timePassed/(1000 * 60 * 60) % 60));

    hrs = formatZeros(hrs);
    mins = formatZeros(mins);
    secs = formatZeros(secs);

    display.textContent = `${hrs}:${mins}:${secs}`;

    //function that keeps each number 2 digits long
    function formatZeros(time){
        time = time.toString();
        return time.length < 2? "0" + time : time;
    }
}

let paused = true;
let startTime = 0;
let timePassed = 0;
let stopwatchTime = 0;
let hrs = 0;
let mins = 0;
let secs = 0;
let intervalId;

//code that is perfromed when a button element is clicked
start.addEventListener("click",() => {
    if(paused){
        paused = false;
        startTime = Date.now() - stopwatchTime;
        intervalId = setInterval(updateClock,100);
    }
})

pause.addEventListener("click",() => {
    if(!paused){
        paused = true;
        stopwatchTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
})

reset.addEventListener("click",() => {
    stopwatchTime = 0;
    timePassed = 0;
    startTime = Date.now() - stopwatchTime;
    if(paused){
        display.textContent = `00:00:00`;
    }
})