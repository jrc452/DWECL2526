const logger = document.getElementById("logger");

const userData = {};

const variableName = prompt("Por favor, introduce el nombre que quieres para tu variable:");
if (variableName) {
    const variableValue = prompt("Introduce el valor para tu variable:");
    if (variableValue) {
        userData[variableName] = variableValue;

        document.body.innerHTML += "¡Variable creada!";
        document.body.innerHTML += `<br>Puedes acceder al valor con 'userData[${variableName}]'`;
        document.body.innerHTML += `<br>El valor de tu variable es: ${userData[variableName]}`;
        console.log("¡Variable creada!");
        console.log(`El objeto 'userData' ahora contiene:`, userData);
        console.log(`Puedes acceder al valor con 'userData[${variableName}]'`);
        console.log(`El valor de tu variable es: ${userData[variableName]}`);
    } else {
        document.body.innerHTML += "No se ha creado ningun valor para tu variable";
        console.log("No se ha creado ningun valor para tu variable");
    }
} else {
    document.body.innerHTML += "No se ha creado ninguna variable";
    console.log("No se ha creado ninguna variable");
} 