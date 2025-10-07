function actualizarEstilo() {
    let negrita = document.getElementById("negritaSelect").value;
    let cursiva = document.getElementById("cursivaSelect").value;
    let texto = document.getElementById("textoEstilo");

    texto.style.fontWeight = (negrita === "si") ? "bold" : "normal";
    texto.style.fontStyle = (cursiva === "si") ? "italic" : "normal";
}
