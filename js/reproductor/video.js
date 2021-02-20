let player = document.getElementById("video");

let bPlay = document.getElementById("vstart");
let bPlayIcon = document.getElementById("vstarticon");
let bStop = document.getElementById("vstop");
let bVolUp = document.getElementById("vplus");
let bPVolDown = document.getElementById("vminus");
let bMute = document.getElementById("vmute");
let bMuteIcon = document.getElementById("vvolmute");

let volume = 1; 


bPlay.addEventListener("click", play);
bStop.addEventListener("click", vstop);

bMute.addEventListener("click", mute);
bVolUp.addEventListener("click", volUp);
bPVolDown.addEventListener("click", volDown);

function play(){
    let paused = player.paused;
    if(paused) {
        bPlayIcon.setAttribute("name", "pause-outline");
        bPlayIcon.style.color = 'red';
        player.play();
    } else {
        bPlayIcon.setAttribute("name","play-outline")
        bPlayIcon.style.color = 'green';
        player.pause();
    }
}

function vstop(){
    player.pause();
    player.currentTime=0;
    bPlayIcon.setAttribute("name","play-outline")
    bPlayIcon.style.color = 'green';
}

function volUp(){
    if(volume.toFixed(1) < 1) volume+=0.10;
    player.volume = volume.toFixed(1);
    bMuteIcon.style.color = 'white';
}

function volDown(){
    if(volume.toFixed(1) > 0) volume-=0.10;
    else volume = 0;
    player.volume = volume.toFixed(1);
    if(volume.toFixed(1) <= 0) bMuteIcon.style.color = 'red';
    else bMuteIcon.style.color = 'white';
}

function mute(){
    if(player.volume == 0) {
        player.volume = volume;
        bMuteIcon.style.color = 'white';
    }
    else {
        volume = player.volume;
        player.volume = 0.0;
        bMuteIcon.style.color = 'red';
    }
}