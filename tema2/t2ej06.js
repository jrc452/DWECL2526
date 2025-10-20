// Selección de elementos
const inputA = document.getElementById('a');
const inputB = document.getElementById('b');
const resultEl = document.getElementById('result');

// --- Manejadores para cada botón ---
function handleMul() {
    const a = toNumber(inputA.value);
    const b = toNumber(inputB.value);
    resultEl.textContent = `Resultado: ${a * b}`;
    resultEl.style.color = '';
};

function handleDiv() {
    const a = toNumber(inputA.value);
    const b = toNumber(inputB.value);
    if (b !== 0) {
        resultEl.textContent = `Resultado: ${a * b}`;
        resultEl.style.color = '';
    } else {
        resultEl.textContent = `Error: ${error}`;
        resultEl.style.color = '#ffb4b4';
    }
};