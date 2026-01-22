// 1. EL ESTADO: Un array que guarda nuestros objetos
const alumnos = [];

// 2. REFERENCIAS AL DOM
const form = document.getElementById('formularioAlumno');
const tabla = document.getElementById('cuerpoTabla');

// 3. EVENTO SUBMIT (Más avanzado que el click)
form.addEventListener('submit', (event) => {
    // Evitamos que la página se recargue
    event.preventDefault();

    // 4. EL OBJETO: Capturamos los datos
    const nuevoAlumno = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('correo').value,
        nota: parseInt(document.getElementById('nota').value)
    };

    // 5. ACTUALIZAMOS LOS DATOS (El Array)
    alumnos.push(nuevoAlumno);

    // 6. ACTUALIZAMOS EL DOM (Pintar la tabla)
    renderizarTabla();

    // Limpiar campos
    form.reset();
});

function eliminarUltimoRegistro() {
    // Borramos el último registro
    alumnos.pop();

    // ACTUALIZAMOS EL DOM (Pintar la tabla)
    renderizarTabla();
}

// Función para "dibujar" el DOM basándose en el Array
function renderizarTabla() {
    //Habilitamos el botón de "Eliminar último registro", si no habrá registros
    //Si no habrá registros, deshabilitamos el botón de "Eliminar"
    if (alumnos.length === 0) document.getElementById("borrar").disabled = true;
    else if (document.getElementById("borrar").disabled) document.getElementById("borrar").disabled = false;

    // Limpiamos la tabla antes de volver a pintar
    tabla.innerHTML = "";

    // Recorremos el array de objetos
    alumnos.forEach(alumno => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${alumno.nombre}</td>
            <td>${alumno.email}</td>
            <td>${alumno.nota}</td>
        `;

        if (alumno.nota < 5) fila.style = "color: red";
        tabla.appendChild(fila);
    });
}