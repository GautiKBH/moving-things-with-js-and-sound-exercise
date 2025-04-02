
"use strict";

const gameOverSound = document.getElementById("gameoverSound")

function playGameOverSound(){
    gameOverSound.currentTime = 0 
    gameOverSound.play()
}
const dodger = document.getElementById("dodger");

    dodger.style.left = "175px";
    dodger.style.bottom = "175px";

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10)

    if(left > 0){
        dodger.style.left = `${left - 7}px`
        playSoundOnMovement()
    }
    if(left <= 0){
        playGameOverSound()
    }
}
function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if(left < 360){
        dodger.style.left = `${left + 7}px`
        playSoundOnMovement()
    }
    if(left >= 360){
        playGameOverSound()
    }
}

function moveDodgerUp(){
    const bottomNumbers = dodger.style.bottom.replace("px","");
    const bottom = parseInt(bottomNumbers, 10);

    if(bottom < 360){
        dodger.style.bottom = `${bottom + 7}px`
        playSoundOnMovement()
    }
    if(bottom >= 360){
        playGameOverSound()
    }
}
function moveDodgerDown(){
    const bottomNumbers = dodger.style.bottom.replace("px","")
    const bottom = parseInt(bottomNumbers, 10)

    if(bottom > 0){
        dodger.style.bottom = `${bottom - 7}px`
        playSoundOnMovement();

    }
    if(bottom <= 0){
        playGameOverSound()
    }
}

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
    if(e.key === "ArrowUp"){
        moveDodgerUp();
    }

    if(e.key === "ArrowDown"){
        moveDodgerDown();
    }
});

const movementSound = document.getElementById("movementSound");

function playSoundOnMovement(){
    movementSound.currentTime = 0;
    movementSound.play();
}