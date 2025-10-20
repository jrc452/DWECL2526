const inputGuess = document.getElementById("inputGuess");
const randomNum = Math.floor(Math.random() * 10) + 1;

console.log(`Número generado aleatoriamente: ${randomNum}`);

function verify() {
    if (randomNum === parseInt(inputGuess.value))
        alert("Buen trabajo");
    else
        alert("No coincide. El número correcto era " + randomNum);
    window.location.reload();
}