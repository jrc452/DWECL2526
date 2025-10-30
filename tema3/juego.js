let player = 0;
let p1Points = 0;
let p2Points = 0;
let p3Points = 0;
const txtP1Points = document.getElementById("p1Points");
const txtP2Points = document.getElementById("p2Points");
const txtP3Points = document.getElementById("p3Points");
const txtWinner = document.getElementById("winner");
const password = "j0taR3yC4lCu4tr0C1nc0S315";

let p1Done = false;
let p2Done = false;
let p3Done = false;
let gameOver = false;

function start() {
    txtP1Points.textContent = `Puntos (P1): ${p1Points}`;
    txtP2Points.textContent = `Puntos (P2): ${p2Points}`;
    txtP3Points.textContent = `Puntos (P3): ${p3Points}`;
    txtWinner.hidden = true;
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
        if (document.getElementById("word1").value != password) p1Points += p;
        else p1Points = 9999;
        document.getElementById("p1").hidden = true;
        p1Done = true;
    } else if (player == 2) {
        if (document.getElementById("word2").value != password) p2Points += p;
        else p2Points = 9999;
        document.getElementById("p2").hidden = true;
        p2Done = true;
    } else if (player == 3) {
        if (document.getElementById("word3").value != password) p3Points += p;
        else p3Points = 9999;
        document.getElementById("p3").hidden = true;
        p3Done = true;
    }
    txtP1Points.textContent = `Puntos (P1): ${p1Points}`;
    txtP2Points.textContent = `Puntos (P2): ${p2Points}`;
    txtP3Points.textContent = `Puntos (P3): ${p3Points}`;
    console.log(`P1: ${p1Points}\nP2: ${p2Points}\nP3: ${p3Points}`);
    if ((p1Done && p2Done && p3Done) && !gameOver) whoWon();
}

function whoWon() {
    let isATie = false;
    gameOver = true;
    let sortScore = [p1Points, p2Points, p3Points];
    sortScore.sort(function (a, b) { return a - b });
    setTimeout(() => {
        txtWinner.hidden = false;
        isATie = (p1Points && p2Points) == parseInt(sortScore[2])
            || (p1Points && p3Points) == parseInt(sortScore[2])
            || (p2Points && p3Points) == parseInt(sortScore[2])
            || (p1Points && p2Points && p3Points) == parseInt(sortScore[2])
        console.log(isATie);
        if (!isATie) {
            if (p1Points == parseInt(sortScore[2])) { txtWinner.textContent = ("El ganador es JUGADOR 1"); txtP1Points.setAttribute("style", "color: green;"); }
            if (p2Points == parseInt(sortScore[2])) { txtWinner.textContent = ("El ganador es JUGADOR 2"); txtP2Points.setAttribute("style", "color: green;"); }
            if (p3Points == parseInt(sortScore[2])) { txtWinner.textContent = ("El ganador es JUGADOR 3"); txtP3Points.setAttribute("style", "color: green;"); }
        } else {
            if ((p1Points && p2Points) == parseInt(sortScore[2])) {
                txtWinner.textContent = "Los jugadores 1 y 2 están EMPATADOS";
                txtP1Points.setAttribute("style", "color: orange;");
                txtP2Points.setAttribute("style", "color: orange;");
            }
            if ((p1Points && p3Points) == parseInt(sortScore[2])) {
                txtWinner.textContent = "Los jugadores 1 y 3 están EMPATADOS";
                txtP1Points.setAttribute("style", "color: orange;");
                txtP3Points.setAttribute("style", "color: orange;");
            }
            if ((p2Points && p3Points) == parseInt(sortScore[2])) {
                txtWinner.textContent = "Los jugadores 2 y 3 están EMPATADOS";
                txtP2Points.setAttribute("style", "color: orange;");
                txtP3Points.setAttribute("style", "color: orange;");
            }
            if ((p1Points && p2Points && p3Points) == parseInt(sortScore[2])) {
                txtWinner.textContent = "Todos los jugadores están EMPATADOS";
                txtP1Points.setAttribute("style", "color: orange;");
                txtP2Points.setAttribute("style", "color: orange;");
                txtP3Points.setAttribute("style", "color: orange;");
            }
        }
    }, 1000);
}