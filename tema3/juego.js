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

function start() {
    txtP1Points.textContent = `Puntos (P1): ${p1Points}`;
    txtP2Points.textContent = `Puntos (P2): ${p2Points}`;
    txtP3Points.textContent = `Puntos (P3): ${p3Points}`;
};

function guessPswd(w, p) {
    let i = 0;
    player = p;
    console.log(w.length);
    do {
        let b = 0;
        do {
            let c = w.slice(i, i + 1);
            let isVocal = (c.toLowerCase() == ("a" || "e" || "i" || "o" || "u"));
            if (isNaN(parseInt(c))) {
                if (c.toUpperCase() == password.slice(b, b + 1) || c.toLowerCase() == password.slice(b, b + 1)) {
                    if (isVocal) pointsUp(1);
                    else pointsUp(2);
                }
            } else pointsUp(3);
            b++;
        } while (b < password.length);
        i++;
    } while (i < w.length);
    if (w !== "") pointsUp(0);
    else alert("Debes poner una palabra para adivinar la contraseña");
}

function pointsUp(p) {
    if (player == 1) {
        p1Points += p;
        document.getElementById("btn1").hidden = true;
        p1Done = true;
    } else if (player == 2) {
        p2Points += p;
        document.getElementById("btn2").hidden = true;
        p2Done = true;
    } else if (player == 3) {
        p3Points += p;
        document.getElementById("btn3").hidden = true;
        p3Done = true;
    }
    txtP1Points.textContent = `Puntos (P1): ${p1Points}`;
    txtP2Points.textContent = `Puntos (P2): ${p2Points}`;
    txtP3Points.textContent = `Puntos (P3): ${p3Points}`;
    if (p1Done && p2Done && p3Done) whoWon();
}

function whoWon() {
    let sortScore = [p1Points, p2Points, p3Points];
    sortScore.sort();
    let isATie = false;
    if (p1Points !== p2Points || p1Points !== p3Points || p2Points !== p1Points || p2Points !== p3Points || p3Points !== p1Points || p3Points !== p2Points)
        isATie = true;
    if (!isATie) {
        if (parseInt(sortScore[0] == p1Points)) alert("El ganador es JUGADOR 1");
        if (parseInt(sortScore[0] == p2Points)) alert("El ganador es JUGADOR 2");
        if (parseInt(sortScore[0] == p2Points)) alert("El ganador es JUGADOR 3");
    } else alert("EMPATE");
}