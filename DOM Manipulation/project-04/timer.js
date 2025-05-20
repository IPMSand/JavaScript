// variables

const start = document.getElementById('startbtn');
const resrt = document.getElementById('resetbtn');


// time variables

let sec = 0;
let min = 0;
let hour = 0;

// leading zeros variables

let lsec = 0;
let lmin = 0;
let lhour = 0;

// button variables

let timerInterval = null;
let timerStatus = "stopped";


function stopWatch(){

    sec++

    if(sec / 60 === 1){
        sec = 0;
        min++;

        if(min / 60 === 1){
            min = 0;
            hour++;
        }
    }

    if(sec < 10){
        lsec = "0" + sec.toString();
    } else{
        lsec = sec;
    }

    if(min < 10){
        lmin ="0" + min.toString();
    }
    else{
        lmin = min;
    }

    if(hour < 10){
        lhour = "0" + hour.toString();
    
    }
    else{
        lhour = hour;
    }
    
    let displayTime = document.getElementById('timer').innerText = lhour + ":" + lmin + ":" + lsec ;
}


// window.setInterval()
start.addEventListener('click',function(){

 if (timerStatus === "stopped"){
    timerInterval = window.setInterval(stopWatch,100);
    document.getElementById('startbtn').innerHTML = `<i class="fa fa-pause" id="pause"></i>`;
    timerStatus = "started";
 }else{
    window.clearInterval(timerInterval);
    document.getElementById('startbtn').innerHTML = `<i class="fa fa-play" id ="play"></i>`;
    timerStatus = "stopped";
    
}
    
} )

resrt.addEventListener('click', function(){

     window.clearInterval(timerInterval);

       let sec = 0;
       let min = 0;
       let hour = 0;

       document.getElementById('timer').innerHTML = "00:00:00"
       timerStatus = "stopped";
    
})





