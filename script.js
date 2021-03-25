



// Code for the audio, play once clicked, pause when clicked again and pause when another audio is playing 


Number.prototype.clamp = function (min, max) {
    return Math.min(Math.max(this, min), max);
};
window.onscroll = function () { myFunction() };
var audio1 = new Audio('sounds/1.mp3');
var audio2 = new Audio('sounds/2.mp3');
var audio3 = new Audio('sounds/3.mp3');
var audio4 = new Audio('sounds/4.mp3');
var audio5 = new Audio('sounds/5.mp3');
function playAudio1() {
    if (audio1.paused) {
        audio1.play();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();
    } else {
        audio1.pause();
    }
}
function playAudio2() {
    if (audio2.paused) {
        audio2.play();
        audio1.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();
    } else {
        audio2.pause();
    }
}
function playAudio3() {
    if (audio3.paused) {
        audio3.play();
        audio2.pause();
        audio1.pause();
        audio4.pause();
        audio5.pause();
    } else {
        audio3.pause();
    }
}
function playAudio4() {
    if (audio4.paused) {
        audio4.play();
        audio2.pause();
        audio3.pause();
        audio1.pause();
        audio5.pause();
    } else {
        audio4.pause();
    }
}
function playAudio5() {
    if (audio5.paused) {
        audio5.play();
        audio2.pause();
        audio3.pause();
        audio1.pause();
    } else {
        audio5.pause();
    }
}
function myFunction() {
    var top = document.body.scrollTop;
    var screenHeight = window.screen.height;
    var total = document.body.scrollHeight;
    // console.log(top+"-"+screenHeight+"- ("+(top + screenHeight) +")-"+total);
    var percent = ((top + screenHeight) / total) * 100;
    console.log(percent);
    if (percent > 100) {
        console.log('Screen 4');
    } else if (percent > 60) {
        console.log('Secen 3');
    } else if (percent > 40) {
        console.log('Secen 2');
    } else {
        console.log('Secen 1 ');

    }
}