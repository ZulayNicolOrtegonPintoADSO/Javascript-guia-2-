addEventListener("DOMContentLoaded", ()=>{
<<<<<<< HEAD
    // 1. Escribir un programa que sume, reste, multiplique y divida dos números 
    
    let valor1 = Number(prompt("Ingrese valor para a:"))
    let valor2 = Number(prompt("Ingrese valor para b:"))
=======
    // 1. Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la solución,
   // por favor utilizar funciones matemáticas de Python para ello
   // d = rc((x2-x1)^2 + (y2-y1)^2
    
    let x1=Number(prompt("Ingrese valor para x1:"))
    let x2=Number(prompt("Ingrese valor para x2:"))
    let y1=Number(prompt("Ingrese valor para y1:"))
    let y2=Number(prompt("Ingrese valor para y2"))

    console.log (`${(x2-x1)^2 + (y2-y1)^2}`);
>>>>>>> 0a51016 (Ejercicio 1 F2)

    console.log(`La suma de los valores es: ${valor1+valor2}`);
    console.log(`La resta de los valores es: ${valor1-valor2}`);
    console.log(`La multiplicación de los valores es: ${valor1*valor2}`);
    console.log(`La división de los valores es: ${valor1/valor2}`);
    
})