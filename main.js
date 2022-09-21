addEventListener("DOMContentLoaded", ()=>{
<<<<<<< HEAD
<<<<<<< HEAD
    // 1. Escribir un programa que sume, reste, multiplique y divida dos números 
    
    let valor1 = Number(prompt("Ingrese valor para a:"))
    let valor2 = Number(prompt("Ingrese valor para b:"))
=======
    // 1. Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la solución,
   // por favor utilizar funciones matemáticas de Python para ello
   // d = rc((x2-x1)^2 + (y2-y1)^2
=======
    // 2. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un 2% de
    // descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada producto y el total
    // de la compra.
>>>>>>> b48fc13 (Ejercicio 2 F2)
    
    let p1 =Number(prompt("Ingrese valor del producto 1:"))
    des =  p1 - (p1 * 0.05)

<<<<<<< HEAD
    console.log (`${(x2-x1)^2 + (y2-y1)^2}`);
>>>>>>> 0a51016 (Ejercicio 1 F2)

    console.log(`La suma de los valores es: ${valor1+valor2}`);
    console.log(`La resta de los valores es: ${valor1-valor2}`);
    console.log(`La multiplicación de los valores es: ${valor1*valor2}`);
    console.log(`La división de los valores es: ${valor1/valor2}`);
    
=======
    let p2 =Number(prompt("Ingrese valor del producto 2:"))
    des2 =  p2 - (p2 * 0.05)

    let p3 =Number(prompt("Ingrese valor del producto 3:"))

    let p4 =Number(prompt("Ingrese valor del producto 4:"))
    des4 =  p1 - (p1 * 0.02)

    let p5 =Number(prompt("Ingrese valor del producto 5:"))
    des5 =  p1 - (p1 * 0.02)

    console.log (`El valor de los productos con descuento es: \n -producto 1 = ${des} \n -producto 2 = ${des2} \n -producto 3 = ${p3} \n -producto 4 = ${des4} \n -producto 5 = ${des5}`);
>>>>>>> b48fc13 (Ejercicio 2 F2)
})