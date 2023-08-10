const invertirCaracteres = (arregloStrings) => {
  return arregloStrings.map((cadena) => cadena.split("").reverse().join(""));
};

export default invertirCaracteres;
