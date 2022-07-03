// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 26;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 40 === 400 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  let str1='Henry';
  return str1
}
let str1= devolverString()
console.log(str1);

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  let sumatoria= x + y;
  return sumatoria;
  }
let sumas= suma(5, 7);
console.log(sumas);

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  let diferencia= x - y;
  return diferencia;
}
let restas= resta(5, 7)
console.log(restas);

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  let multiplicacion= x*y;
  return multiplicacion
}
let multiplicaciones= multiplica(5, 7);
console.log(multiplicaciones);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  let dividir= x/y;
  return dividir
}
let division= divide(8, 2);
console.log(division);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x==y) { return true;}
else { return false;}
}
verificar=sonIguales(2, 2);
console.log(verificar);

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length==str2.length) { return true} 
  else {return false}
}
let mismaspalabras= tienenMismaLongitud('como', 'esta' )
console.log(mismaspalabras);

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num<90) {return true} 
  else {return false }
}
let menosde90= menosQueNoventa(90);
console.log(menosde90);

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num>50){return true}
  else{return false}
}
mayorde50=mayorQueCincuenta(51);
console.log(mayorde50);


function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
 let restodivision= x%y;
 return restodivision
}
let restosdivi= obtenerResto(21,4);
console.log(restosdivi);

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
if(num%2==0){return true}
else {return false}
}
let par=esPar(4);
console.log(par);

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num%2>0){return true}
  else {return false}
}
let impar=esImpar(1);
console.log(impar);

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  cuadrado=Math.pow(num,2);
  return cuadrado
}
let cuadra2=elevarAlCuadrado(3);
console.log(cuadra2);


function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  cubo=Math.pow(num,3);
  return cubo
}
let qbo=elevarAlCubo(3);
console.log(qbo);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
 let eleva= Math.pow(num,exponent);
 return eleva
}
let ele=elevar(3,4);
console.log(ele);


function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  let redon=Math.round(num);
return redon
}
let redondearCerca=redondearNumero(1.75);
console.log(redondearCerca);

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
let RedonArriba=Math.ceil(num);
return RedonArriba
}
let redondearArriba=redondearHaciaArriba(3.20);
console.log(redondearArriba);


function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  Random=Math.random();
  return Random
}
let aleatori= numeroRandom();
console.log(aleatori);

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if(numero===0){return false}
  if(numero>0){return 'Es positivo'}
 else{return 'Es negativo'}
}
let signos=esPositivo(2);



function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
 let simbolo= str + '!';
return simbolo
}
let simbol=agregarSimboloExclamacion('hola')
console.log(simbol);


function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  let nombres1=nombre + ' ' + apellido;
  return nombres1
}
let combinar=combinarNombres('andres ' , 'tamara')
console.log(combinar);

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  let saludo='Hola '+nombre +'!';
  return saludo
}
obtenersal=obtenerSaludo('Andres');
console.log(obtenersal);


function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  area=alto*ancho;
  return area
}
let arearec=obtenerAreaRectangulo(6, 7)
console.log(arearec + 'm2');

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  let peri=lado*4;
  return peri
}
let peritmetro=retornarPerimetro(6);
console.log(peritmetro);

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
let trian=(base*altura)/2;
return trian
}
let areatriangulo=areaDelTriangulo(5,7);
console.log(areatriangulo)

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  let Cambio=euro*1.2;
  return Cambio
}
let CambioDolar=deEuroAdolar(34.52);
console.log(CambioDolar);



function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (letra =="A"||letra =="E"|| letra =="I"||letra =="O"||letra =="U"||letra =="a"||letra =="e"|| letra =="i"||letra =="o"||letra =="u") {return 'Es vocal'}
  else{return "Dato incorrecto"}
}
let dato= esVocal("e");
console.log(dato);


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
