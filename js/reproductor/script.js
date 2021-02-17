let player = document.getElementById("player");
let bMute = document.getElementById("volmute");
let bPlay = document.getElementById("play");
let bVolUp = document.getElementById("volup");
let bPVolDown = document.getElementById("voldown");

let volume = 1; 

bMute.addEventListener("click", mute);
bPlay.addEventListener("click", play);
bVolUp.addEventListener("click", volUp);
bPVolDown.addEventListener("click", volDown);
function mute(){
    if(player.volume == 0) {
        player.volume = volume;
        bMute.style.color = 'white';
    }
    else {
        volume = player.volume;
        player.volume = 0.0;
        bMute.style.color = 'red';
    }
}

function play(){
    let paused = player.paused;
    if(paused) {
        bPlay.setAttribute("name", "pause-outline");
        bPlay.style.color = 'red';
        player.play();
    } else {
        bPlay.setAttribute("name","play-outline")
        bPlay.style.color = 'green';
        player.pause();
    }
}

function volUp(){
    if(volume.toFixed(1) < 1) volume+=0.10;
    player.volume = volume.toFixed(1);
    bMute.style.color = 'white';
}

function volDown(){
    if(volume.toFixed(1) > 0) volume-=0.10;
    else volume = 0;
    player.volume = volume.toFixed(1);
    if(volume.toFixed(1) <= 0) bMute.style.color = 'red';
    else bMute.style.color = 'white';
}