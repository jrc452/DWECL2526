const number = document.getElementById("num");
const txtConvert = document.getElementById("convertBtn");
const degrees = document.getElementById("degreesSelect");
const resultElement = document.getElementById("result");

document.getElementById('convertBtn').addEventListener('click', convert);

function updateDegrees() {
    if (degrees.value === "celsius")
        txtConvert.innerHTML = "Convertir a ºF";
    else
        txtConvert.innerHTML = "Convertir a ºC";
    resultElement.textContent = null;
}

function convert() {
    const num = parseFloat(number.value);
    let conv = num;
    if (degrees.value === "celsius") {
        conv /= 5;
        conv *= 9;
        conv += 32;
        resultElement.textContent = `${parseFloat(conv)} ºF`;
    } else {
        conv -= 32;
        conv /= 9;
        conv *= 5;
        resultElement.textContent = `${parseFloat(conv)} ºC`;
    }
}