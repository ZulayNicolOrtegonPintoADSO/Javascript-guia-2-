addEventListener("DOMContentLoaded", ()=>{
<<<<<<< HEAD
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
=======

<<<<<<< HEAD
    // 3. Calcular la edad de una madre en el momento de dio a luz a alguno de sus hijos.
    // • Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
    // depósito.
    // • Q=V/t, siendo Q (caudal), V (volumen) y t (tiempo).
    // • Volumen = PI *(radio^2)* H (altura del depósito)
    // • El tiempo se encuentra en minutos.
    // • Normalmente se mide el volumen en litros y el tiempo en segundos
>>>>>>> 4d123a3 (Ejercicio 3 F2)
    
    let h =Number(prompt("Altura del depósito:"))

<<<<<<< HEAD
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
=======
    let r =Number(prompt("Radio del pepósito:"))
>>>>>>> 4d123a3 (Ejercicio 3 F2)

    v=((Math.PI) * (r**2) * h)

    let tm = Number(prompt("Tiempo:"))

<<<<<<< HEAD
    let p5 =Number(prompt("Ingrese valor del producto 5:"))
    des5 =  p1 - (p1 * 0.02)

    console.log (`El valor de los productos con descuento es: \n -producto 1 = ${des} \n -producto 2 = ${des2} \n -producto 3 = ${p3} \n -producto 4 = ${des4} \n -producto 5 = ${des5}`);
>>>>>>> b48fc13 (Ejercicio 2 F2)
=======
    ts= tm * 60
    q= v/ts
    
    console.log (`El resultado de tiempo estimado para el llenado de un depósito cuyo volumen es de ${v} litros es ${q} segundos`);
>>>>>>> 4d123a3 (Ejercicio 3 F2)
=======
//4. Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada  uno por
// $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000. Después de pagar  le
// sobran $91000. ¿cuánto dinero tenía?

llaves= 5*11500
bomba= 1168000
cajas= 3*87000
pagó= llaves + bomba + cajas
vuelto= 91000
tenía= pagó + vuelto
console.log(`El jefe de obra pagó un total de ${pagó}, sus vueltos fueron ${vuelto}, es decir que tenía un total de ${tenía}`)
>>>>>>> ef60c38 (Ejercicio 4 F2)
})