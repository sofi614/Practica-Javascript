const estudiante = {
    nombre : "Ana",
    apellido : "Gomez",
    nota : 8 
};

let estado = estudiante . nota >= 6 ? "Aprobado" : "Desaprobado";

console.log('Estudiante: ${estudiante.nombre} ${estudiante.apellido}');
console.log('Nota : ${estudiante.nota}');
console.log('Estado : ${estado}');
