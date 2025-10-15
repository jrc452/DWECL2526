// Mapa de ciudades y habitantes
const ciudades = new Map([
    ["Madrid", 3200000],
    ["Barcelona", 1600000],
    ["Valencia", 800000],
    ["Sevilla", 690000],
    ["Bilbao", 350000]
]);

// Mostrar ciudades al cargar la página
window.onload = mostrarCiudades;

function mostrarCiudades() {
    const lista = document.getElementById("listaCiudades");
    lista.innerHTML = ""; // Limpiar lista

    ciudades.forEach((habitantes, ciudad) => {
        const li = document.createElement("li");
        li.textContent = `${ciudad} - ${habitantes.toLocaleString()} habitantes`;
        lista.appendChild(li);
    });
}

function contarCiudades() {
    alert(`Existen ${ciudades.size} ciudades registradas.`);
}

function borrarCiudad() {
    const ciudad = prompt("Ingrese el nombre de la ciudad a borrar:");
    if (ciudades.delete(ciudad)) {
        alert(`${ciudad} fue eliminada.`);
        mostrarCiudades();
    } else
        alert(`La ciudad "${ciudad}" no existe.`);
}

function agregarCiudad() {
    const ciudad = prompt("Ingrese el nombre de la nueva ciudad:");
    if (!ciudad) return alert("Debe ingresar un nombre válido.");
    if (ciudades.has(ciudad)) return alert("Esa ciudad ya existe.");

    const habitantes = parseInt(prompt("Ingrese la cantidad de habitantes:"), 10);
    if (isNaN(habitantes) || habitantes <= 0) return alert("Número inválido.");

    ciudades.set(ciudad, habitantes);
    alert(`${ciudad} fue añadida correctamente.`);
    mostrarCiudades();
}

function mostrarMax() {
    if (ciudades.size === 0) return alert("No hay ciudades registradas.");

    let maxCiudad = "";
    let maxHabitantes = -Infinity;

    ciudades.forEach((habitantes, ciudad) => {
        if (habitantes > maxHabitantes) {
            maxHabitantes = habitantes;
            maxCiudad = ciudad;
        }
    });

    mostrarCiudades();
    document.querySelectorAll("li").forEach(li => {
        if (li.textContent.startsWith(maxCiudad)) li.classList.add("max");
    });
}

function mostrarMin() {
    if (ciudades.size === 0) return alert("No hay ciudades registradas.");

    let minCiudad = "";
    let minHabitantes = Infinity;

    ciudades.forEach((habitantes, ciudad) => {
        if (habitantes < minHabitantes) {
            minHabitantes = habitantes;
            minCiudad = ciudad;
        }
    });

    mostrarCiudades();
    document.querySelectorAll("li").forEach(li => {
        if (li.textContent.startsWith(minCiudad)) li.classList.add("min");
    });
}