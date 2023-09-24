class Validador {
    static Validar(valor, min, max) {
        return valor >= min && valor <= max;
    }
}

// Crear un array para almacenar los números ingresados por el usuario
const numeros = [];

// Pedir al usuario que ingrese 10 números enteros
for (let i = 0; i < 3; i++) {
    const numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    if (Validador.Validar(numero, -100, 100)) {
        numeros.push(numero);
    } else {
        alert("Número no válido. Debe estar dentro del rango -100 y 100.");
        i--; // Restar 1 al contador para volver a pedir el número inválido.
    }
}

// Calcular el valor mínimo, valor máximo y promedio
const valorMinimo = Math.min(...numeros); // Esto es equivalente a Math.min(numeros[0], numeros[1], numeros[2], numeros[3])
const valorMaximo = Math.max(...numeros);
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
const promedio = suma / numeros.length;

// Mostrar los resultados
console.log(`Valor mínimo ingresado: ${valorMinimo}`);
console.log(`Valor máximo ingresado: ${valorMaximo}`);
console.log(`Promedio de los números ingresados: ${promedio}`);
