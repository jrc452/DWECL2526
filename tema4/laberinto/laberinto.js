const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");
const r4 = document.getElementById("r4");

const r1p = document.getElementById("r1p");
const r2p = document.getElementById("r2p");
const r3p = document.getElementById("r3p");
const r4p = document.getElementById("r4p");

let mazeArray = [
    ["S", " ", " ", "X", " "],
    ["X", " ", " ", "X", " "],
    [" ", " ", " ", " ", " "],
    ["X", "X", " ", " ", "F"],
]

let playerArray = [
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " "],
]

let posX = 0;
let posY = 0;
let started = false;

document.addEventListener("keyup", move);

function move(e) {
    if (!started) started = true;
    if (e.keyCode === 38 || e.keyCode === 104) {
        if (resolverLaberinto(mazeArray, posX, posY - 1)) posY--;
    }
    if (e.keyCode === 40 || e.keyCode === 98) {
        if (resolverLaberinto(mazeArray, posX, posY + 1)) posY++;
    }
    if (e.keyCode === 39 || e.keyCode === 102) {
        if (resolverLaberinto(mazeArray, posX + 1, posY)) posX++;
    }
    if (e.keyCode === 37 || e.keyCode === 100) {
        if (resolverLaberinto(mazeArray, posX - 1, posY)) posX--;
    }
    update();
}

function load() {
    for (i = 0; i < mazeArray.length; i++) {
        if (i == 0) r1.textContent = mazeArray[i].toString().replaceAll(",", " ");
        if (i == 1) r2.textContent = mazeArray[i].toString().replaceAll(",", " ");
        if (i == 2) r3.textContent = mazeArray[i].toString().replaceAll(",", " ");
        if (i == 3) r4.textContent = mazeArray[i].toString().replaceAll(",", " ");
    }
    update();
}

function update() {
    if (!started) {
        for (y = 0; y < mazeArray.length; y++)
            for (x = 0; x < mazeArray[y].length; x++)
                if (mazeArray[y][x].includes('S')) {
                    posX = x;
                    posY = y;
                }
    } else
        for (y = 0; y < mazeArray.length; y++)
            for (x = 0; x < mazeArray[y].length; x++)
                playerArray[y][x] = " ";
    playerArray[posY][posX] = "•";
    for (i = 0; i < mazeArray.length; i++) {
        if (i == 0) r1p.textContent = playerArray[i].toString().replaceAll(",", " ");
        if (i == 1) r2p.textContent = playerArray[i].toString().replaceAll(",", " ");
        if (i == 2) r3p.textContent = playerArray[i].toString().replaceAll(",", " ");
        if (i == 3) r4p.textContent = playerArray[i].toString().replaceAll(",", " ");
    }
}

function resolverLaberinto(lab, x, y) {
    if ((x && y) >= 0 && (x && y) < 4) {
        if (lab[y][x] == "F") { document.removeEventListener("keyup", move); }
        return lab[y][x] == " " || lab[y][x] == "F";
    }
    else return false;
}