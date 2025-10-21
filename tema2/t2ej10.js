const fileInput = document.getElementById("fileInput");
fileInput.hidden = true;
window.onload = function () {
    fileInput.click();
}

let filename;

function update() {
    filename = fileInput.files[0].name;

    document.getElementById("p1").textContent = `El archivo elegido para ver es: ${filename}`;
    console.log(document.getElementById("p1").textContent);

    if (getExtension(filename) !== "")
        document.getElementById("p2").textContent = `Su extensión es: ${getExtension(filename)}`;
    else
        document.getElementById("p2").textContent = "Este archivo no tiene extensión";
    console.log(document.getElementById("p2").textContent);
}

function getExtension(filename) {
    const parts = filename.split('.');
    if (parts.length < 2 || filename.startsWith('.'))
        return '';
    return parts.pop();
}