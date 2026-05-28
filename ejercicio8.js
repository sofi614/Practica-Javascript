const nota = [6 , 7 , 8 ,9 , 10];
let suma = 0;

for (let i = 0 ; i < nota.length; i++) {
    suma += nota[i];
} 
 
let promedio = suma / nota.length;

console.log ('Promedio: ${promedio}');

if (promedio >= 6) {
    console.log("Aprobado");
} else {
    console.log("Desaprobado");
}