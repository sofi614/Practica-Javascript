const nombreEstudiante = "Lucia";
const nota = [ 7 , 8 , 6 , 9 ,10];

let Totalsuma = 0;
 
for (let i = 0 ; i < nota.length ; i++) {
    Totalsuma += nota[i]
}

let promedio2 = Totalsuma / nota.length;
let mensaje = "";

if (promedio2 >= 7 ){
    mensaje = "Muy bueno";
} else if (promedio2 >= 6) {
        mensaje = "Aprobado";
}else {
    mensaje = "Desaprobado";
}

console.log(`Estudiante : ${nombreEstudiante}`);
console.log(`promedio ${promedio2.toFixed(1)}`);
console.log(`Resultado ${mensaje}`);
 