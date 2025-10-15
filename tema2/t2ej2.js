// Selección de elementos
const inputA = document.getElementById('a');
const inputB = document.getElementById('b');
const resultEl = document.getElementById('result');


// --- FUNCIONES FLECHA (ARROW FUNCTIONS) ---
const toNumber = v => {
    const n = parseFloat(String(v).trim());
    return Number.isFinite(n) ? n : NaN;
};


const add = (x, y) => x + y; // suma
const sub = (x, y) => x - y; // resta
const mul = (x, y) => x * y; // multiplicación
const div = (x, y) => y === 0 ? null : x / y; // división (devuelve null si división por cero)


// --- UTILIDADES ---
const showResult = (value, error) => {
    if (error) {
        resultEl.textContent = `Error: ${error}`;
        resultEl.style.color = '#ffb4b4';
    } else {
        resultEl.textContent = `Resultado: ${value}`;
        resultEl.style.color = '';
    }
};


const readInputs = () => {
    const a = toNumber(inputA.value);
    const b = toNumber(inputB.value);
    if (Number.isNaN(a) || Number.isNaN(b)) return { ok: false, error: 'Introduce dos números válidos' };
    return { ok: true, a, b };
};


// --- Manejadores para cada botón ---
const handleAdd = () => {
    const r = readInputs();
    if (!r.ok) return showResult(null, r.error);
    const res = add(r.a, r.b);
    showResult(res);
};


const handleSub = () => {
    const r = readInputs();
    if (!r.ok) return showResult(null, r.error);
    showResult(sub(r.a, r.b));
};


const handleMul = () => {
    const r = readInputs();
    if (!r.ok) return showResult(null, r.error);
    showResult(mul(r.a, r.b));
};


const handleDiv = () => {
    const r = readInputs();
    if (!r.ok) return showResult(null, r.error);
    if (r.b === 0) return showResult(null, 'División por cero no permitida');
    showResult(div(r.a, r.b));
};


// Asociar eventos
document.getElementById('addBtn').addEventListener('click', handleAdd);
document.getElementById('subBtn').addEventListener('click', handleSub);
document.getElementById('mulBtn').addEventListener('click', handleMul);
document.getElementById('divBtn').addEventListener('click', handleDiv);


// Soporte de teclado: al pulsar Enter en cualquiera de los inputs, realiza la suma
[inputA, inputB].forEach(inp => {
    inp.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleAdd();
    });
});
