// Cada palo contiene: nombre, compas (número o descripción), tempo, tipoLetra (tema/timbre)
const palos = [
    {
        id: 'solea',
        nombre: 'Soleá',
        compas: '12 tiempos',
        compasNumero: 12,
        tempo: 'lento',
        tipoLetra: 'melancólicas — soledad, dolor, reflexión'
    },
    {
        id: 'alegrias',
        nombre: 'Alegrías',
        compas: '12 tiempos',
        compasNumero: 12,
        tempo: 'vivo / rápido',
        tipoLetra: 'alegre, naturaleza, amor y fiesta'
    },
    {
        id: 'bulerias',
        nombre: 'Bulerías',
        compas: '12 tiempos (con acentos particulares y libertad rítmica)',
        compasNumero: 12,
        tempo: 'muy rápida / dinámica',
        tipoLetra: 'festiva, improvisación, juerga'
    },
    {
        id: 'tientos',
        nombre: 'Tientos',
        compas: '4 tiempos',
        compasNumero: 4,
        tempo: 'lento',
        tipoLetra: 'sentido, expresivo, doloroso'
    },
    {
        id: 'tangos',
        nombre: 'Tangos',
        compas: '4 tiempos',
        compasNumero: 4,
        tempo: 'medio / bailable',
        tipoLetra: 'desenfadada y festiva'
    },
    {
        id: 'seguiriyas',
        nombre: 'Seguiriyas',
        compas: '12 tiempos con acentuaciones muy marcadas',
        compasNumero: 12,
        tempo: 'lento',
        tipoLetra: 'lamento, pérdida, sufrimiento'
    },
    {
        id: 'fandangos',
        nombre: 'Fandangos',
        compas: 'inicio libre (sin compás) y luego compás (varía según variante)',
        compasNumero: null,
        tempo: 'variable',
        tipoLetra: 'temas variados; gran riqueza melódica'
    }
];

// inicializar select
const paloSelect = document.getElementById('paloSelect');
palos.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.nombre;
    paloSelect.appendChild(opt);
});

const output = document.getElementById('output');
const compasArea = document.getElementById('compasArea');

function getPaloById(id) {
    return palos.find(p => p.id === id);
}

function mostrarTodosDatos(id) {
    const p = getPaloById(id);
    if (!p) return;
    const lines = [
        `<strong>Palo:</strong> ${p.nombre}`,
        `<strong>Compás:</strong> ${p.compas}`,
        `<strong>Tempo:</strong> ${p.tempo}`,
        `<strong>Tipo de letra / temática:</strong> ${p.tipoLetra}`
    ];
    output.innerHTML = lines.join('<br>');
    // dibujar compás si es 12 o 4 (si compasNumero está disponible)
    if (p.compasNumero === 12) dibujarCompas12();
    else if (p.compasNumero === 4) dibujarCompas4();
    else compasArea.innerHTML = `<div class="muted">Compás variable / libre — no hay un patrón de 12 o 4 fijo para dibujar.</div>`;
}

function pedirDato(id, campo) {
    const p = getPaloById(id);
    if (!p) return;
    let resp = '';
    switch (campo) {
        case 'palo':
            resp = `<strong>Palo:</strong> ${p.nombre}`;
            break;
        case 'compas':
            resp = `<strong>Compás:</strong> ${p.compas}`;
            break;
        case 'tempo':
            resp = `<strong>Tempo:</strong> ${p.tempo}`;
            break;
        case 'letra':
            resp = `<strong>Tipo de letra / temática:</strong> ${p.tipoLetra}`;
            break;
        default:
            resp = 'Dato desconocido';
    }
    output.innerHTML = resp;
    // si piden compás explícitamente, también dibujamos cuando sea 12 o 4
    if (campo === 'compas') {
        if (p.compasNumero === 12) dibujarCompas12();
        else if (p.compasNumero === 4) dibujarCompas4();
        else compasArea.innerHTML = `<div class="muted">Compás variable / libre — no dibujable en 1–12 simple.</div>`;
    }
}

// Dibuja el compás 1..12 con acentos en 3,6,9,12 (tal como en tu ejemplo)
function dibujarCompas12() {
    compasArea.innerHTML = '';
    const wrapper = document.createElement('div');
    wrapper.className = 'compas';
    for (let i = 1; i <= 12; i++) {
        const b = document.createElement('div');
        b.className = 'beat';
        // boliamos 3,6,9,12
        if ([3, 6, 9, 12].includes(i)) b.classList.add('strong');
        b.textContent = i;
        wrapper.appendChild(b);
    }
    compasArea.appendChild(wrapper);
    // leyenda
    const ley = document.createElement('div');
    ley.className = 'small muted';
    ley.style.marginTop = '8px';
    ley.innerHTML = 'Acentos visualizados en <strong>negrita</strong> en los tiempos 3, 6, 9 y 12.';
    compasArea.appendChild(ley);
}

// Dibuja compás simple 1..4 con acento en 1 (por ejemplo)
function dibujarCompas4() {
    compasArea.innerHTML = '';
    const wrapper = document.createElement('div');
    wrapper.className = 'compas';
    for (let i = 1; i <= 4; i++) {
        const b = document.createElement('div');
        b.className = 'beat';
        if (i === 1) b.classList.add('strong');
        b.textContent = i;
        wrapper.appendChild(b);
    }
    compasArea.appendChild(wrapper);
    const ley = document.createElement('div');
    ley.className = 'small muted';
    ley.style.marginTop = '8px';
    ley.innerHTML = 'Compás de 4 tiempos (acento en 1).';
    compasArea.appendChild(ley);
}

// eventos
document.getElementById('mostrarTodos').addEventListener('click', () => {
    mostrarTodosDatos(paloSelect.value);
});

document.getElementById('mostrarCompas').addEventListener('click', () => {
    const p = getPaloById(paloSelect.value);
    if (!p) return;
    if (p.compasNumero === 12) dibujarCompas12();
    else if (p.compasNumero === 4) dibujarCompas4();
    else compasArea.innerHTML = `<div class="muted">Compás variable / libre — no dibujable en 1–12 simple.</div>`;
    output.innerHTML = `<em class="muted">Mostrando solo el compás</em>`;
});

document.getElementById('pedirDato').addEventListener('click', () => {
    const campo = document.querySelector('input[name="dato"]:checked').value;
    pedirDato(paloSelect.value, campo);
});

// Mostrar al inicio el primer palo
mostrarTodosDatos(palos[0].id);

// (Opcional) atajo con tecla Enter para "pedir dato" si estás enfocado en el select
paloSelect.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter')
        mostrarTodosDatos(paloSelect.value);
});