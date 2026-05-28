const notas = [6 , 7 , 8 ,9 , 10];
let suma = 0;

for (let i = 0 ; i < notas.length; i++) {
    suma += notas[i];
} 
 
let promedio = suma / notas.length;

console.log(`Promedio: ${promedio}`);

if (promedio >= 6) {
    console.log("Aprobado");
} else {
    console.log("Desaprobado");
}