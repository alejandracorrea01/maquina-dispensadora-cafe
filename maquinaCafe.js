
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

// Precios en pesos colombianos (COP)
const precio1 = 3000;
const precio2 = 3500;
const precio3 = 5000;
const precio4 = 5000;
const precio5 = 5500;
const precio6 = 5500;
const precio7 = 3500;
const precio8 = 4000;

// Ingredientes de cada bebida (gramos y mililitros)
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

// Crear el menu de bebidas
menuProductos =
  "===== MAQUINA DE CAFE =====\n" +
  "1. " + producto1 + " - $" + precio1 + " COP\n" +
  "2. " + producto2 + " - $" + precio2 + " COP\n" +
  "3. " + producto3 + " - $" + precio3 + " COP\n" +
  "4. " + producto4 + " - $" + precio4 + " COP\n" +
  "5. " + producto5 + " - $" + precio5 + " COP\n" +
  "6. " + producto6 + " - $" + precio6 + " COP\n" +
  "7. " + producto7 + " - $" + precio7 + " COP\n" +
  "8. " + producto8 + " - $" + precio8 + " COP\n";

// Mostrar el menu
console.log(menuProductos);

// Preparar la entrada de datos por terminal
const readline = require("readline");

const interfaz = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar la bebida
interfaz.question(
  "Selecciona una bebida del 1 al 8: ",
  function (respuesta) {
    opcionUsuario = Number(respuesta);

    // Identificar la bebida seleccionada
    if (opcionUsuario === 1) {
      nombreSeleccionado = producto1;
      precioSeleccionado = precio1;
    } else if (opcionUsuario === 2) {
      nombreSeleccionado = producto2;
      precioSeleccionado = precio2;
    } else if (opcionUsuario === 3) {
      nombreSeleccionado = producto3;
      precioSeleccionado = precio3;
    } else if (opcionUsuario === 4) {
      nombreSeleccionado = producto4;
      precioSeleccionado = precio4;
    } else if (opcionUsuario === 5) {
      nombreSeleccionado = producto5;
      precioSeleccionado = precio5;
    } else if (opcionUsuario === 6) {
      nombreSeleccionado = producto6;
      precioSeleccionado = precio6;
    } else if (opcionUsuario === 7) {
      nombreSeleccionado = producto7;
      precioSeleccionado = precio7;
    } else if (opcionUsuario === 8) {
      nombreSeleccionado = producto8;
      precioSeleccionado = precio8;
    } else {
      console.log("Opcion no valida. Selecciona un numero del 1 al 8.");
      interfaz.close();
      return;
    }

    console.log("Seleccionaste: " + nombreSeleccionado);
    console.log("Precio: $" + precioSeleccionado + " COP");

    // Solicitar y validar el pago
    function solicitarPago() {
      interfaz.question(
        "Ingresa el dinero en pesos colombianos: $",
        function (respuestaPago) {
          dineroIngresado = Number(respuestaPago);

          if (
            respuestaPago.trim() === "" ||
            !Number.isFinite(dineroIngresado) ||
            dineroIngresado <= 0
          ) {
            console.log("Ingresa una cantidad de dinero valida.");
            solicitarPago();
            return;
          }

          if (dineroIngresado < precioSeleccionado) {
            console.log("Dinero insuficiente.");
            console.log(
              "Te faltan: $" +
              (precioSeleccionado - dineroIngresado) +
              " COP"
            );
            solicitarPago();
            return;
          }

          // Confirmar el pago y calcular el cambio
          cambio = dineroIngresado - precioSeleccionado;
          confirmacionCompra = true;
          mensajeEstado = "Pago exitoso";

          console.log("¡Pago exitoso!");
          console.log("Tu cambio es: $" + cambio + " COP");
          console.log("Compra confirmada. Gracias por tu compra.");

          interfaz.close();
        }
      );
    }

    solicitarPago();
  }
);
