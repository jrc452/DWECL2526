let diaSem;
diaSem = prompt("Introduce el día de la semana:", "");
if (diaSem === "domingo")
    console.log("Hoy es festivo");
else
    console.log("Hoy no es domingo, a descansar!!");
// Al no tener {}, es un "bloque de una instrucción" 

let edadAna, edadLuis;
// Usamos parseInt para convertir a entero 
edadAna = parseInt(prompt("Introduce la edad de Ana", ""));
edadLuis = parseInt(prompt("Introduce la edad de Luis", ""));

if (edadAna > edadLuis) {
    console.log("Ana es mayor que Luis.");
    console.log("Ana tiene " + edadAna + " años y Luis " + edadLuis);
} else {
    console.log("Ana es menor o de igual edad que Luis.");
    console.log("Ana tiene " + edadAna + " años y Luis " + edadLuis);
}

// Convertirmos a entero las cadenas 
edadAna = parseInt(prompt("Introduce la edad de Ana", ""));
edadLuis = parseInt(prompt("Introduce la edad de Luis", ""));
if (edadAna > edadLuis)
    console.log("Ana es mayor que Luis.");
else {
    if (edadAna < edadLuis)
        console.log("Ana es menor que Luis.");
    else
        console.log("Ana tiene la misma edad que Luis.");
}
console.log(" Ana tiene " + edadAna + " años y Luis " + edadLuis); 