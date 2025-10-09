function mostrarColor() {
    var selectElement = document.getElementById("colourSelect");
    var selectedColour = selectElement.value;
    console.log("Color seleccionado: " + selectedColour);
    // Change background colour depending on the variable selectedColour
    document.body.style.backgroundColor = selectedColour;
}