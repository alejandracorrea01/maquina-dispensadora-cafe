
/*
Proyecto: Maquina dispensadora de cafe
Descripcion: Declaracion de variables para los productos,
sus ingredientes y el funcionamiento de la maquina.
*/

// Productos
const producto1 = "Espresso";
const producto2 = "Cafe americano";
const producto3 = "Capuchino";
const producto4 = "Cafe latte";
const producto5 = "Mocaccino";
const producto6 = "Flat white";
const producto7 = "Macchiato";
const producto8 = "Chocolate caliente";

// Precios de los productos en pesos colombianos (COP)
const precio1 = 3000;
const precio2 = 3500;
const precio3 = 5000;
const precio4 = 5000;
const precio5 = 5500;
const precio6 = 5500;
const precio7 = 3500;
const precio8 = 4000;

// Ingredientes para preparar las bebidas
const cantidadCafeEspresso = 9;
const cantidadAguaEspresso = 30;

const cantidadCafeAmericano = 9;
const cantidadAguaAmericano = 150;

const cantidadCafeCapuchino = 9;
const cantidadLecheCapuchino = 100;
const cantidadEspumaCapuchino = 50;

const cantidadCafeLatte = 9;
const cantidadLecheLatte = 180;

const cantidadCafeMocaccino = 9;
const cantidadLecheMocaccino = 150;
const cantidadChocolateMocaccino = 15;

const cantidadCafeFlatWhite = 18;
const cantidadLecheFlatWhite = 120;

const cantidadCafeMacchiato = 9;
const cantidadEspumaMacchiato = 15;

const cantidadLecheChocolate = 200;
const cantidadChocolateBebida = 25;

// Variables para el funcionamiento de la maquina
let opcionUsuario = 0;
let dineroIngresado = 0;
let cambio = 0;
let precioSeleccionado = 0;
let nombreSeleccionado = "";
let tiempoPreparacion = 0;


 // Entradas y control de la compra
let confirmacionCompra = false;

// Salidas y mensajes de la maquina
let menuProductos = "";
let mensajeEstado = "";
let mensajePreparacion = "";

