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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  // 5.En el programa de cocina de “Doña Anita” han dado la receta para la preparación de   bizcocho especial
  // de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos de cacao y un puñado de
  // nueces. Si quiero prepararlos con 20 gramos de chocolate. La cantidad de gramos de harina   para
  // hacer el bizcocho es
=======
  // 6. Un camión transporta 25 cajas de repuestos de carros. Si cada caja pesa 748 Kg ¿ Cuántos Kg
  //  transporta ?
>>>>>>> 4ef0fa9 (Ejercicio 6 F2)

  cajas=25
  cajasc=748
  total=cajas*cajasc
  console.log(`Transporta ${total} kg`)
=======
  // 7. tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año. Martin toma
  // 2/3 del total. Jairo un   cuarto del total, y Lorena se   queda con el resto. ¿qué   parte le corresponde a
  // Lorena?
  total=10
  Martín=2/3
  Jairo=1/5
  lorena= 10 - 2/3 - 1/5
  console.log(`A Lorena le corresponde ${lorena}`)
>>>>>>> 3504c92 (Ejercicio 7 F2)
=======
  // 8. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura. Considere que
  // se cobra por m2 y realice el código que representen el algoritmo que le permita ir generando
  // presupuestos para cada cliente.
  
  
  let precio = Number(prompt("Ingrese el valor por m2:"))
  let metroc = Number(prompt("Ingrese la cantidad de m2:"))

  console.log(`El valor total por ${metroc} metro cuadrado es ${precio*metroc}`)
>>>>>>> 79c2fb7 (Ejercicio 8 F2)

>>>>>>> 9892217 (Ejercicio 5 F2)
})