addEventListener("DOMContentLoaded", ()=>{
    // 1. Escribir un programa que sume, reste, multiplique y divida dos números 
    
    let valor1 = Number(prompt("Ingrese valor para a:"))
    let valor2 = Number(prompt("Ingrese valor para b:"))

    console.log(`La suma de los valores es: ${valor1+valor2}`);
    console.log(`La resta de los valores es: ${valor1-valor2}`);
    console.log(`La multiplicación de los valores es: ${valor1*valor2}`);
    console.log(`La división de los valores es: ${valor1/valor2}`);
    
})