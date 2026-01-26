// --- 1. INICIALIZACIÓN (Cargar datos del LocalStorage) ---
// Intentamos leer la lista guardada; si no existe, empezamos con un array vacío
let alumnos = JSON.parse(localStorage.getItem('alumnos_dwec')) || [];

const form = document.getElementById('formAlumno');
const cuerpo = document.getElementById('cuerpo');
const btnClear = document.getElementById('btnBorrarTodo');
const btnSave = document.getElementById('btnGuardar');
const btnLoad = document.getElementById('btnCargar');

// Al arrancar, pintamos lo que haya en memoria
renderizar();

// --- 2. GESTIÓN DE DATOS ---

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nuevo = {
        nombre: document.getElementById('nombre').value,
        apellidos: document.getElementById('apellidos').value,
        edad: document.getElementById('edad').value,
        nota: document.getElementById('nota').value,
        movil: document.getElementById('movil').value,
    };

    alumnos.push(nuevo);
    guardarYSincronizar(); // Guardamos y pintamos
    form.reset();
});

btnClear.addEventListener('click', () => {
    if (confirm("¿Seguro que quieres borrar toda la lista?")) {
        alumnos = [];
        guardarYSincronizar();
    }
});

btnSave.addEventListener('click', () => {
    if (alumnos.length > 0) guardarComoJson();
});

btnLoad.addEventListener('click', () => {
    document.getElementById("fileinput").click();
});

// --- 5. CARGAR JSON ---
document.getElementById("fileinput").addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    alumnos = [];
    guardarYSincronizar();

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = JSON.parse(e.target.result);
            data.forEach(d => { alumnos.push(d); });
            guardarYSincronizar(); // Guardamos y pintamos
            form.reset();
        } catch (error) { }
    };
    reader.readAsText(file);
});


// --- 3. PERSISTENCIA Y VISTA ---

function guardarYSincronizar() {
    // Convertimos el array a STRING para guardarlo en LocalStorage
    localStorage.setItem('alumnos_dwec', JSON.stringify(alumnos));
    renderizar();
}

function renderizar() {
    cuerpo.innerHTML = "";
    alumnos.forEach((alum, i) => {
        const tr = document.createElement('tr');
        if (alum.nota >= 5)
            tr.innerHTML = `<td>${i + 1}</td>
                            <td>${alum.nombre}</td>
                            <td>${alum.apellidos}</td>
                            <td>${alum.edad}</td>
                            <td>${alum.nota}</td>
                            <td>${alum.movil}</td>`;
        else
            tr.innerHTML = `<td>${i + 1}</td>
                            <td>${alum.nombre}</td>
                            <td>${alum.apellidos}</td>
                            <td>${alum.edad}</td>
                            <td style="color: red;">${alum.nota}</td>
                            <td>${alum.movil}</td>`;
        cuerpo.appendChild(tr);
    });
}

// --- 4. GUARDAR COMO JSON ---
function guardarComoJson() {
    const blob = new Blob([JSON.stringify(alumnos, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "listado_con_persistencia.json";
    a.click();
    URL.revokeObjectURL(url);
}