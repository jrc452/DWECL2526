const filename = "t2ej02.css";

document.getElementById("p1").textContent += filename;
console.log(document.getElementById("p1").textContent);

function getExtension(filename) {
    const parts = filename.split('.');
    if (parts.length < 2 || filename.startsWith('.'))
        return '';
    return parts.pop();
}

document.getElementById("p2").textContent += getExtension(filename);
console.log(document.getElementById("p2").textContent);