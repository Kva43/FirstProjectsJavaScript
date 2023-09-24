
var numeroValido = false;

while (numeroValido == false) {
    var numero = parseFloat(prompt(`Ingrese un número mayor a cero: `));
    if (!isNaN(numero) && numero > 0) {
        console.log(`El cuadrado de ${numero} es: ${Math.pow(numero, 2)} `);
        console.log(`Y el cubo es: ${Math.pow(numero, 3)} `);
        numeroValido = true;
    }
    else {
        console.log(`Error. Ingrese un número válido y mayor a cero.`);
    }
}
