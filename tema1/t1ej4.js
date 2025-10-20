function mostrarImagen() {
    let imagenSeleccionada = document.getElementById("imagenSelect").value;
    if (imagenSeleccionada !== "") {
        document.getElementById("imagenDiv").innerHTML = '<img src="' + imagenSeleccionada + '" alt="Imagen seleccionada" width="200">';
        console.log("Imagen seleccionada:", imagenSeleccionada);
    } else
        document.getElementById("imagenDiv").innerHTML = '';
}
