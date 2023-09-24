class Validador {
    static ValidarRespuesta(respuesta) {
        return respuesta.toUpperCase() === 'S';
    }
}

let suma = 0;
let continuar = true;
var numeroStr = null;

while (continuar) {
    numeroStr = prompt("Ingrese un número entero:");
    
    if (numeroStr === null) {
        // El usuario presionó "Cancelar" en el cuadro de diálogo
        continuar = false;
    } else {
        const numero = parseInt(numeroStr);
        if (!isNaN(numero)) {
            suma += numero;
            const respuesta = prompt("¿Desea continuar? (S/N)");
            continuar = Validador.ValidarRespuesta(respuesta);
        } else {
            alert("Debe ingresar un número entero válido.");
        }
    }
}

if(numeroStr == null) {
    console.log("No se ingresó ningún número.");
} else {
    console.log("La suma de los números ingresados es:", suma);
}


/*
const userInput = prompt("Por favor, ingrese un valor:");

if (userInput !== null) {
    // El usuario ingresó un valor y hizo clic en "Aceptar"
    console.log("El usuario ingresó:", userInput);
} else {
    // El usuario hizo clic en "Cancelar" o cerró el cuadro de diálogo
    console.log("El usuario canceló el cuadro de diálogo.");
}
*/