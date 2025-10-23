let player = 0;
let p1Points = 0;
let p2Points = 0;
let p3Points = 0;
const txtP1Points = document.getElementById("p1Points");
const txtP2Points = document.getElementById("p2Points");
const txtP3Points = document.getElementById("p3Points");
const password = "L4ultimavezKtelod1go";

let p1Done = false;
let p2Done = false;
let p3Done = false;

let gameOver = false;

function start() {
    txtP1Points.textContent = `Puntos (P1): ${p1Points}`;
    txtP2Points.textContent = `Puntos (P2): ${p2Points}`;
    txtP3Points.textContent = `Puntos (P3): ${p3Points}`;
};

function guessPswd(w, p) {
    w = wordSpliter(w);
    player = p;

    for (let i = 0; i < w.length; i++) {
        for (let b = 0; b < password.length; b++) {
            let c = w.slice(i, i + 1);
            let isVocal = (c.toLowerCase() == ("a" || "e" || "i" || "o" || "u"));
            if (parseInt(c) != c) {
                if (c.toUpperCase() == password.slice(b, b + 1) || c.toLowerCase() == password.slice(b, b + 1)) {
                    console.log(`${c.toUpperCase()} == ${password.slice(b, b + 1)} || ${c.toLowerCase()} == ${password.slice(b, b + 1)}`);
                    console.log(c.toUpperCase() == password.slice(b, b + 1));
                    console.log(c.toLowerCase() == password.slice(b, b + 1));
                    if (isVocal) pointsUp(1);
                    else pointsUp(2);
                }
            } else {
                if (c == password.slice(b, b + 1)) pointsUp(3);
            }
        }
    }
    if (w !== "") pointsUp(0);
    else alert("Debes poner una palabra para adivinar la contraseña");
}

function wordSpliter(w) {
    w = w.split("");
    w = [...new Set(w)];
    sBuilder = "";
    for (let i = 0; i < w.length; i++)
        sBuilder += w[i];
    return sBuilder;
}

function pointsUp(p) {
    if (player == 1) {
        p1Points += p;
        document.getElementById("word1").hidden = true;
        document.getElementById("btn1").hidden = true;
        p1Done = true;
    } else if (player == 2) {
        p2Points += p;
        document.getElementById("word2").hidden = true;
        document.getElementById("btn2").hidden = true;
        p2Done = true;
    } else if (player == 3) {
        p3Points += p;
        document.getElementById("word3").hidden = true;
        document.getElementById("btn3").hidden = true;
        p3Done = true;
    }
    txtP1Points.textContent = `Puntos (P1): ${p1Points}`;
    txtP2Points.textContent = `Puntos (P2): ${p2Points}`;
    txtP3Points.textContent = `Puntos (P3): ${p3Points}`;
    if ((p1Done && p2Done && p3Done) && !gameOver) {
        gameOver = true;
        whoWon();
    }
}

function whoWon() {
    let sortScore = [p1Points, p2Points, p3Points];
    sortScore.sort();
    if (parseInt(sortScore[0] == p1Points)) alert("El ganador es JUGADOR 1");
    else if (parseInt(sortScore[0] == p2Points)) alert("El ganador es JUGADOR 2");
    else if (parseInt(sortScore[0] == p2Points)) alert("El ganador es JUGADOR 3");
}