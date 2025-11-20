const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");
const r4 = document.getElementById("r4");

let mazeArray = [
    ["S", " ", " ", "X", " "],
    ["X", " ", " ", "X", " "],
    [" ", " ", " ", " ", " "],
    ["X", "X", " ", " ", "F"],
]

let pos;

let isTrue = false;

function start() {
    do {
        let pos = prompt("[X,Y]:");
        if (pos.includes(",")) {
            alert(resolverLaberinto(mazeArray, pos.split(",")[0], pos.split(",")[1]));
            if (resolverLaberinto(mazeArray, pos.split(",")[0], pos.split(",")[1])) isTrue = true;
        }
    } while (!isTrue);
}



function load() {
    for (i = 0; i < mazeArray.length; i++) {
        if (i == 0) r1.textContent = mazeArray[i].toString().replaceAll(",", " ");
        if (i == 1) r2.textContent = mazeArray[i].toString().replaceAll(",", " ");
        if (i == 2) r3.textContent = mazeArray[i].toString().replaceAll(",", " ");
        if (i == 3) r4.textContent = mazeArray[i].toString().replaceAll(",", " ");
    }
    setTimeout(() => start(), 1000);
}

function resolverLaberinto(lab, x, y) {
    if ((x && y) >= 0 && (x && y) < 4)
        return lab[y][x] == " ";
    else
        return false;
}

/*
Dado un laberinto donde: 
● " " = camino 
● "X" = pared 
● "S" = inicio 
● "F" = final 
Ejemplo: 
const laberinto = [ 
["S", " ", "X", " "], 
["X", " ", "X", " "], 
[" ", " ", " ", " "], 
["X", "X", " ", "F"] 
]; 

Crear una función recursiva
resolverLaberinto(lab, x, y, visitado)
que determine si existe un camino entre S y F.

Debe devolver true si hay salida.
*/