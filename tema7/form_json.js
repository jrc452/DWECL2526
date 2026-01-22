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

    if (document.getElementById('movil').value.length !== 9 || document.getElementById('movil').value.charAt(0) != 6) return;

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
    if (alumnos.length > 1)
        guardarComoJson();
});

btnLoad.addEventListener('click', () => {
    cargarJson();
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
        tr.innerHTML = `<td>${i + 1}</td><td>${alum.nombre}</td>`;
        tr.innerHTML = `<td>${i + 1}</td><td>${alum.apellidos}</td>`;
        tr.innerHTML = `<td>${i + 1}</td><td>${alum.edad}</td>`;
        if (alum.nota >= 5)
            tr.innerHTML = `<td>${i + 1}</td><td>${alum.nota}</td>`;
        else
            tr.innerHTML = `<td>${i + 1}</td><td><span style="color: red;">${alum.nota}</span></td>`;
        tr.innerHTML = `<td>${i + 1}</td><td>${alum.movil}</td>`;
        cuerpo.appendChild(tr);
    });
}

// --- 4. GUARDAR COMO JSON ---
function guardarComoJson() {
    const tabla = document.getElementById("tabla");
    const headers = [], data = [];

    tabla.querySelectorAll('th').forEach(th => {
        headers.push(th.textContent.trim());
    });

    tabla.querySelectorAll('tbody tr').forEach(tr => {
        const rdata = {};
        tabla.querySelectorAll('td').forEach((c, i) => {
            tr[headers[i]] = c.textContent.trim();
        });
        data.push(rdata);
    });

    const json2string = JSON.stringify(data, null, 2);

    const blob = new Blob([json2string], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'listado_con_persistencia.json';
    a.click();
    URL.revokeObjectURL(url);
}

// --- 4. CARGAR JSON ---
function cargarJson() {
    const data = JSON.parse(e.target.result);
    const file = e.target.files = [0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            data = JSON.parse(e.target.result);
        } catch (e) { }
    }

    cuerpo.innerHTML = "";

    data.forEach(r => {
        const tr = document.createElement('tr');
        const v = Object.values(r);
        v.forEach(c => {
            const td = document.createElement('td');
            td.textContent = c;
            if (c == v[4] && alum.nota < 5)
                td.style = "color: red";
            tr.appendChild(td);
        });
        cuerpo.appendChild(tr);
    });

    alumnos.push(nuevo);
    guardarYSincronizar(); // Guardamos y pintamos
    form.reset();
}