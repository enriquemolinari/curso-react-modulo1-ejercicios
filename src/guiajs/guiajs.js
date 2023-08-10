// 4. Funciones
const cantidadCaracteres = (cadena) => cadena.length;
console.log(cantidadCaracteres("cadena larga"));

// 5. Arreglos
const invertirCaracteres = (arregloStrings) => {
  return arregloStrings.map((cadena) => cadena.split("").reverse().join(""));
};
console.log(invertirCaracteres(["123", "456", "789"]));

// 6. Objetos
let unaTarjeta = {
  numero: "1234 5678 9112 1156",
  nombreTitular: "Jorge Javier Garcia",
  bancoEmisor: "Frances Bank",
  marca: "Visa",
  fechaCaducidad: {
    mes: 10,
    anio: 11,
  },
  codigoSeguridad: "221",
};
