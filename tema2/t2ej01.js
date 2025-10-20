const numeroAleatorio = (max) => Math.floor(Math.random() * max) + 1;

function mostrarAleatorio() {
    const valor = parseInt(document.getElementById('valor').value);
    if (isNaN(valor) || valor <= 0)
        document.getElementById('resultado').textContent = "Por favor, introduce un número entero positivo.";
    else {
        const aleatorio = numeroAleatorio(valor);
        document.getElementById('resultado').textContent =
            `Número aleatorio entre 1 y ${valor}: ${aleatorio}`;
    }
}
