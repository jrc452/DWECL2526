let player = 0;
let p1Points = 0;
let p2Points = 0;
let p3Points = 0;
const txtP1Points = document.getElementById("p1Points");
const txtP2Points = document.getElementById("p2Points");
const txtP3Points = document.getElementById("p3Points");
const txtPlayer = document.getElementById("player");
const txtPassword = document.getElementById("password").textContent;

document.getElementById("password").hidden = true;

function start() {
    txtP1Points.textContent = `Puntos (P1): ${p1Points}`;
    txtP2Points.textContent = `Puntos (P2): ${p2Points}`;
    txtP3Points.textContent = `Puntos (P3): ${p3Points}`;
    p1turn();
};

function p1turn() {
    txtPlayer.textContent = "Te toca a Jugador 1";
    player = 1;
}

function p2turn() {
    txtPlayer.textContent = "Te toca a Jugador 2";
    player = 2;
}

function p3turn() {
    txtPlayer.textContent = "Te toca a Jugador 3";
    player = 3;
}

function guessPswd(w) {
    let i = 0;
    do {
        checkChar(w.slice(i, i + 1));
        i++;
    } while (i < w.length);
}

function checkChar(c) {
    let i = 0;
    let isVocal = (c.toLowerCase == ('a' || 'e' || 'i' || 'o' || 'u'));
    do {
        if (!isNaN(c)) {
            if (c.toUpperCase == txtPassword.slice(i, i + 1) || c.toLowerCase == txtPassword.slice(i, i + 1)) {
                if (isVocal) pointsUp(1);
                else pointsUp(2);
            }
        } else pointsUp(3);
        i++;
    } while (i < txtPassword.length);
}

function pointsUp(p) {
    alert(p);
    if (player == 1) p1Points += p;
    else if (player == 2) p2Points += p;
    else if (player == 3) p3Points += p;
    txtP1Points.textContent = `Puntos (P1): ${p1Points}`;
    txtP2Points.textContent = `Puntos (P2): ${p2Points}`;
    txtP3Points.textContent = `Puntos (P3): ${p3Points}`;
}