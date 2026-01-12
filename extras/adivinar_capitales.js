"use strict";

const capitals = [
    "MADRID",
    "PARÍS",
    "LISBOA",
    "ROMA",
    "BERLÍN"
];

const currentCapital = capitals[Math.floor(Math.random() * capitals.length)];
let tries = 0;

function checkCapital(word) {
    if (word.toLowerCase() === currentCapital.toLowerCase()) youWin();
    else if (tries === (currentCapital.length - 1)) gameOver();
    else tryAgain();
}

function clearInput() {
    document.getElementById("yourword").value = null;
}

function tryAgain() {
    tries++;
    clearInput();
    let hint = "";
    for (let i = 0; i < currentCapital.length; i++)
        if (i > (tries - 1)) hint += "_";
        else hint += currentCapital.charAt(i);
    alert(hint);
}

function youWin() {
    document.getElementById("checkBtn").disabled = true;
    alert("¡Correcto! La capital era " + currentCapital);
}

function gameOver() {
    document.getElementById("checkBtn").disabled = true;
    alert("La capital era " + currentCapital);
}