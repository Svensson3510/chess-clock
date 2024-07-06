// Tutorial videos:
// https://www.youtube.com/watch?v=_a4XCarxwr8&ab_channel=WEBCIFAR
// https://www.youtube.com/watch?v=PIiMSMz7KzM&ab_channel=dcode

let leftClock = document.getElementById('left-clock');
let rightClock = document.getElementById('right-clock');
var leftSeconds;
var rightSeconds;
var leftMin;
var rightMin;
var leftSec;
var rightSec;
let x = 0;
let y = 0;
let z = 0;
let a = 0;
let leftInterval = null;
let rightInterval = null;
let plusOne = false;
let plusFive = false;

function buttonOne() {
    leftSeconds = 60;
    rightSeconds = 60;
    leftClock.innerHTML = "01:00";
    rightClock.innerHTML = "01:00";
}

function buttonTwo() {
    leftSeconds = 180;
    rightSeconds = 180;
    leftClock.innerHTML = "03:00";
    rightClock.innerHTML = "03:00";
}

function buttonThree() {
    leftSeconds = 300;
    rightSeconds = 300;
    leftClock.innerHTML = "05:00";
    rightClock.innerHTML = "05:00";
}

function buttonFour() {
    leftSeconds = 600;
    rightSeconds = 600;
    leftClock.innerHTML = "10:00";
    rightClock.innerHTML = "10:00";
}

function buttonFive() {
    leftSeconds = 900;
    rightSeconds = 900;
    leftClock.innerHTML = "15:00";
    rightClock.innerHTML = "15:00";
}

function leftCountDown() {
    if (leftSeconds > 0) {
        leftSeconds--;
        leftMin = Math.floor(leftSeconds / 60);
        leftSec = Math.floor(leftSeconds % 60);
        leftClock.innerHTML = `${leftMin < 10 ? '0':''}${leftMin}:${leftSec < 10 ? '0':''}${leftSec}`;
    }
}

function rightCountDown() {
    if (rightSeconds > 0) {
        rightSeconds--;
        rightMin = Math.floor(rightSeconds / 60);
        rightSec = Math.floor(rightSeconds % 60);
        rightClock.innerHTML = `${rightMin < 10 ? '0':''}${rightMin}:${rightSec < 10 ? '0':''}${rightSec}`;
    }
}

function leftStart() {
    leftInterval = setInterval( () => {
        leftCountDown();
    }, 1000);
}

function rightStart() {
    rightInterval = setInterval( () => {
        rightCountDown();
    }, 1000);
}

function leftStop() {
    clearInterval(leftInterval);
}

function rightStop() {
    clearInterval(rightInterval);
}

document.getElementById('plus-one').addEventListener('click', () => {
    if (plusFive === false) {
        z++;
        if (z > 0 && z % 2 != 0) {
            plusOne = true;
            document.getElementById('plus-one').style.color = "white";
            document.getElementById('plus-one').style.backgroundColor = "orange";
        }
        else if (z > 0 && z % 2 === 0) {
            plusOne = false;
            document.getElementById('plus-one').style.color = "dimgrey";
            document.getElementById('plus-one').style.backgroundColor = "lightgrey";
        }
    }
    // console.log(z);
})

document.getElementById('plus-five').addEventListener('click', () => {
    if (plusOne === false) {
        a++;
        if (a > 0 && a % 2 != 0) {
            plusFive = true;
            document.getElementById('plus-five').style.color = "white";
            document.getElementById('plus-five').style.backgroundColor = "orange";
        }
        else if (a > 0 && a % 2 === 0) {
            plusFive = false;
            document.getElementById('plus-five').style.color = "dimgrey";
            document.getElementById('plus-five').style.backgroundColor = "lightgrey";
        }
    }
    // console.log(a);
})

document.addEventListener('keypress', () => {
    x++;
    if (x > 0 && x % 2 != 0) {
        leftStart();
        leftClock.style.backgroundColor = "orange";
        leftClock.style.color = "white";
    }
    else if (x > 0 && x % 2 === 0) {
        leftStop();
        leftClock.style.backgroundColor = "grey";
        leftClock.style.color = "dimgrey";
        if (plusOne === true) {
            for (let i = 0; i < 1; i++) {
                leftSeconds++;
                leftMin = Math.floor(leftSeconds / 60);
                leftSec = Math.floor(leftSeconds % 60);
                leftClock.innerHTML = `${leftMin < 10 ? '0':''}${leftMin}:${leftSec < 10 ? '0':''}${leftSec}`;
            }
        }
        if (plusFive === true) {
            for (let i = 0; i < 1; i++) {
                leftSeconds = leftSeconds + 5;
                leftMin = Math.floor(leftSeconds / 60);
                leftSec = Math.floor(leftSeconds % 60);
                leftClock.innerHTML = `${leftMin < 10 ? '0':''}${leftMin}:${leftSec < 10 ? '0':''}${leftSec}`;
            }
        }
    }
})

document.addEventListener('keypress', () => {
    y++;
    if (y > 0 && y % 2 != 0) {
        rightStop();
        rightClock.style.backgroundColor = "grey";
        rightClock.style.color = "dimgrey";
        if (plusOne === true && x > 1) {
            for (let i = 0; i < 1; i++) {
                rightSeconds++;
                rightMin = Math.floor(rightSeconds / 60);
                rightSec = Math.floor(rightSeconds % 60);
                rightClock.innerHTML = `${rightMin < 10 ? '0':''}${rightMin}:${rightSec < 10 ? '0':''}${rightSec}`;
            }
        }
        if (plusFive === true && x > 1) {
            for (let i = 0; i < 1; i++) {
                rightSeconds = rightSeconds + 5;
                rightMin = Math.floor(rightSeconds / 60);
                rightSec = Math.floor(rightSeconds % 60);
                rightClock.innerHTML = `${rightMin < 10 ? '0':''}${rightMin}:${rightSec < 10 ? '0':''}${rightSec}`;
            }
        }
    }
    else if (y > 0 && y % 2 === 0) {
        rightStart();
        rightClock.style.backgroundColor = "orange";
        rightClock.style.color = "white";
    }
})