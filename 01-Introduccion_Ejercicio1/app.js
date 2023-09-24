

const numCount = 4;
var numeros = new Array(numCount); // Es necesario para luego imprimir los datos en otro bucle 'for'.
var suma = 0;
var prom;

for (let i = 0; i < numCount; i++) {
    numeros[i] = parseFloat(prompt(`Ingresa el ${i + 1}° número:`));
    if (!isNaN(numeros[i])) {
        suma = suma + numeros[i];
    } else {
        console.log("No ingresaste un número válido.");
        i--;
    }
}

for (let i = 0; i < numCount; i++) {
    console.log(`${i + 1}° número ingresado: ${numeros[i]}`);
}

prom = suma / numCount;
console.log(`El promedio de los ${numCount} números que ingresados es: ${prom}`);



// En este código no hace falta crear un array porque según el usuario ingresa un número, se imprime de inmediato.
/*
const numCount = 4;
var suma = 0;
var prom;

for (let i = 0; i < numCount; i++) {
    let numero = parseFloat(prompt(`Ingresa el ${i + 1}° número:`));
    if (!isNaN(numero)) {
        suma += numero;
        console.log(`${i + 1}° número ingresado: ${numero}`);
    } else {
        console.log(`No ingresaste un número válido en el ${i + 1}° intento.`);
        i--; // Repetir la entrada del número no válido
    }
}

prom = suma / numCount;
console.log(`El promedio de los ${numCount} números ingresados es: ${prom}`);
*/