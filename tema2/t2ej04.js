/*
8. Escriba un programa JavaScript en el que el programa tome un número entero 
aleatorio entre 1 y 10, luego se le pedirá al usuario que ingrese un número 
aproximado. Si la entrada del usuario coincide con el número de conjetura, el 
programa mostrará un mensaje "Buen trabajo"; de lo contrario, mostrará un mensaje 
"No coincide". 
*/

const idNum = document.getElementById("num");

let random = Math.round(Math.random() * 9) + 1;

document.getElementById('verifyBtn').addEventListener('click', verify);

function verify() {
    const num = parseInt(idNum.value);
    if ((num >= 1 && num <= 10) && (random === num))
        alert("Buen trabajo");
    else
        alert("No coincide")
}