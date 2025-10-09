function mostrarImagen() {
    let imagenSeleccionada = document.getElementById("imagenSelect").value;
    document.getElementById("imagenDiv").innerHTML = '<img src="' + imagenSeleccionada + '" alt="Imagen seleccionada" width="200">';
}
