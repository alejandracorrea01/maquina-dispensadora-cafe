
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

// Ingredientes de cada bebida
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

// Inventario inicial de ingredientes
let cafeDisponible = 500;       // gramos
let aguaDisponible = 5000;      // mililitros
let lecheDisponible = 3000;     // mililitros
let espumaDisponible = 500;     // mililitros
let chocolateDisponible = 500;  // gramos

// Inventario de vasos
let vasosDisponibles = 20;

// Variables de funcionamiento
let opcionUsuario = 0;
let dineroIngresado = 0;
let cambio = 0;
let precioSeleccionado = 0;
let nombreSeleccionado = "";
let tiempoPreparacion = 0;
let confirmacionCompra = false;

// Variables de mensajes
let menuProductos = "";
let mensajeEstado = "";
let mensajePreparacion = "";
let ingredientesSeleccionados = "";

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

console.log(menuProductos);

// Configurar entrada de datos
const readline = require("readline");

const interfaz = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Verificar si hay suficientes ingredientes
function hayIngredientesDisponibles() {
  let cafeNecesario = 0;
  let aguaNecesaria = 0;
  let lecheNecesaria = 0;
  let espumaNecesaria = 0;
  let chocolateNecesario = 0;

  switch (opcionUsuario) {
    case 1:
      cafeNecesario = cantidadCafeEspresso;
      aguaNecesaria = cantidadAguaEspresso;
      break;
    case 2:
      cafeNecesario = cantidadCafeAmericano;
      aguaNecesaria = cantidadAguaAmericano;
      break;
    case 3:
      cafeNecesario = cantidadCafeCapuchino;
      lecheNecesaria = cantidadLecheCapuchino;
      espumaNecesaria = cantidadEspumaCapuchino;
      break;
    case 4:
      cafeNecesario = cantidadCafeLatte;
      lecheNecesaria = cantidadLecheLatte;
      break;
    case 5:
      cafeNecesario = cantidadCafeMocaccino;
      lecheNecesaria = cantidadLecheMocaccino;
      chocolateNecesario = cantidadChocolateMocaccino;
      break;
    case 6:
      cafeNecesario = cantidadCafeFlatWhite;
      lecheNecesaria = cantidadLecheFlatWhite;
      break;
    case 7:
      cafeNecesario = cantidadCafeMacchiato;
      espumaNecesaria = cantidadEspumaMacchiato;
      break;
    case 8:
      lecheNecesaria = cantidadLecheChocolate;
      chocolateNecesario = cantidadChocolateBebida;
      break;
  }

  if (
    cafeDisponible < cafeNecesario ||
    aguaDisponible < aguaNecesaria ||
    lecheDisponible < lecheNecesaria ||
    espumaDisponible < espumaNecesaria ||
    chocolateDisponible < chocolateNecesario
  ) {
    console.log(
      "No hay suficientes ingredientes para preparar esta bebida."
    );
    return false;
  }

  return true;
}

// Descontar los ingredientes utilizados
function descontarIngredientes() {
  switch (opcionUsuario) {
    case 1:
      cafeDisponible -= cantidadCafeEspresso;
      aguaDisponible -= cantidadAguaEspresso;
      break;
    case 2:
      cafeDisponible -= cantidadCafeAmericano;
      aguaDisponible -= cantidadAguaAmericano;
      break;
    case 3:
      cafeDisponible -= cantidadCafeCapuchino;
      lecheDisponible -= cantidadLecheCapuchino;
      espumaDisponible -= cantidadEspumaCapuchino;
      break;
    case 4:
      cafeDisponible -= cantidadCafeLatte;
      lecheDisponible -= cantidadLecheLatte;
      break;
    case 5:
      cafeDisponible -= cantidadCafeMocaccino;
      lecheDisponible -= cantidadLecheMocaccino;
      chocolateDisponible -= cantidadChocolateMocaccino;
      break;
    case 6:
      cafeDisponible -= cantidadCafeFlatWhite;
      lecheDisponible -= cantidadLecheFlatWhite;
      break;
    case 7:
      cafeDisponible -= cantidadCafeMacchiato;
      espumaDisponible -= cantidadEspumaMacchiato;
      break;
    case 8:
      lecheDisponible -= cantidadLecheChocolate;
      chocolateDisponible -= cantidadChocolateBebida;
      break;
  }
}

// Preguntar si se desea hacer otra compra
function preguntarOtraCompra() {
  if (vasosDisponibles <= 0) {
    console.log("No quedan vasos disponibles. La maquina se apagara.");
    interfaz.close();
    return;
  }

  interfaz.question(
    "\n¿Que deseas hacer?\n" +
    "1. Comprar otra bebida\n" +
    "2. Apagar la maquina\n" +
    "Selecciona 1 o 2: ",
    function (respuesta) {
      const opcion = respuesta.trim();

      if (opcion === "1") {
        seleccionarBebida();
      } else if (opcion === "2") {
        console.log("Maquina apagada. ¡Gracias por utilizarla!");
        interfaz.close();
      } else {
        console.log("Opcion no valida. Escribe 1 o 2.");
        preguntarOtraCompra();
      }
    }
  );
}

// Solicitar y validar el pago
function solicitarPago() {
  if (vasosDisponibles <= 0) {
    console.log("Lo sentimos, no quedan vasos disponibles.");
    interfaz.close();
    return;
  }

  if (!hayIngredientesDisponibles()) {
    preguntarOtraCompra();
    return;
  }

  interfaz.question(
    "Ingresa el dinero en pesos colombianos (o escribe 0 para cancelar): $",
    function (respuestaPago) {
      const pago = respuestaPago.trim();

      if (pago === "0") {
        console.log("Compra cancelada.");
        console.log(
          "No se recibio dinero, por lo tanto no hay devolucion."
        );
        preguntarOtraCompra();
        return;
      }

      if (
        pago === "" ||
        !Number.isFinite(Number(pago)) ||
        Number(pago) < 0
      ) {
        console.log("Ingresa una cantidad de dinero valida.");
        solicitarPago();
        return;
      }

      dineroIngresado = Number(pago);

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

      // Confirmar pago y calcular cambio
      cambio = dineroIngresado - precioSeleccionado;
      confirmacionCompra = true;
      mensajeEstado = "Pago exitoso";

      // Descontar ingredientes despues del pago
      descontarIngredientes();

      console.log("¡Pago exitoso!");
      console.log("Tu cambio es: $" + cambio + " COP");

      // Simular la preparacion
      mensajePreparacion =
        "Preparando tu " + nombreSeleccionado + "...";
      console.log(mensajePreparacion);

      tiempoPreparacion = 5;
      console.log(
        "Tiempo estimado: " + tiempoPreparacion + " segundos."
      );

      // Resumen de compra
      console.log("--------------------------------");
      console.log("RESUMEN DE TU COMPRA");
      console.log("Bebida: " + nombreSeleccionado);
      console.log("Ingredientes: " + ingredientesSeleccionados);
      console.log("Precio pagado: $" + precioSeleccionado + " COP");
      console.log("Dinero recibido: $" + dineroIngresado + " COP");
      console.log("Cambio entregado: $" + cambio + " COP");
      console.log("--------------------------------");
      console.log("¡Tu bebida esta lista!");

      vasosDisponibles--;

      console.log("Vasos disponibles: " + vasosDisponibles);
      console.log("Cafe disponible: " + cafeDisponible + " g");
      console.log("Agua disponible: " + aguaDisponible + " ml");
      console.log("Leche disponible: " + lecheDisponible + " ml");
      console.log("Espuma disponible: " + espumaDisponible + " ml");
      console.log("Chocolate disponible: " + chocolateDisponible + " g");
      console.log("Gracias por comprar en la maquina de cafe.");

      preguntarOtraCompra();
    }
  );
}

// Mostrar el menu y solicitar una bebida
function seleccionarBebida() {
  console.log("\n" + menuProductos);

  interfaz.question(
    "Selecciona una bebida del 1 al 8: ",
    function (respuesta) {
      opcionUsuario = Number(respuesta.trim());

      // Validar la seleccion
      if (
        respuesta.trim() === "" ||
        !Number.isInteger(opcionUsuario) ||
        opcionUsuario < 1 ||
        opcionUsuario > 8
      ) {
        console.log(
          "Opcion no valida. Selecciona un numero del 1 al 8."
        );
        seleccionarBebida();
        return;
      }

      // Identificar bebida, precio e ingredientes
      switch (opcionUsuario) {
        case 1:
          nombreSeleccionado = producto1;
          precioSeleccionado = precio1;
          ingredientesSeleccionados =
            cantidadCafeEspresso + " g de cafe y " +
            cantidadAguaEspresso + " ml de agua";
          break;

        case 2:
          nombreSeleccionado = producto2;
          precioSeleccionado = precio2;
          ingredientesSeleccionados =
            cantidadCafeAmericano + " g de cafe y " +
            cantidadAguaAmericano + " ml de agua";
          break;

        case 3:
          nombreSeleccionado = producto3;
          precioSeleccionado = precio3;
          ingredientesSeleccionados =
            cantidadCafeCapuchino + " g de cafe, " +
            cantidadLecheCapuchino + " ml de leche y " +
            cantidadEspumaCapuchino + " ml de espuma de leche";
          break;

        case 4:
          nombreSeleccionado = producto4;
          precioSeleccionado = precio4;
          ingredientesSeleccionados =
            cantidadCafeLatte + " g de cafe y " +
            cantidadLecheLatte + " ml de leche";
          break;

        case 5:
          nombreSeleccionado = producto5;
          precioSeleccionado = precio5;
          ingredientesSeleccionados =
            cantidadCafeMocaccino + " g de cafe, " +
            cantidadLecheMocaccino + " ml de leche y " +
            cantidadChocolateMocaccino + " g de chocolate";
          break;

        case 6:
          nombreSeleccionado = producto6;
          precioSeleccionado = precio6;
          ingredientesSeleccionados =
            cantidadCafeFlatWhite + " g de cafe y " +
            cantidadLecheFlatWhite + " ml de leche";
          break;

        case 7:
          nombreSeleccionado = producto7;
          precioSeleccionado = precio7;
          ingredientesSeleccionados =
            cantidadCafeMacchiato + " g de cafe y " +
            cantidadEspumaMacchiato + " ml de espuma de leche";
          break;

        case 8:
          nombreSeleccionado = producto8;
          precioSeleccionado = precio8;
          ingredientesSeleccionados =
            cantidadLecheChocolate + " ml de leche y " +
            cantidadChocolateBebida + " g de chocolate";
          break;
      }

      console.log("Seleccionaste: " + nombreSeleccionado);
      console.log("Precio: $" + precioSeleccionado + " COP");
      console.log("Ingredientes: " + ingredientesSeleccionados);
      console.log("--------------------------------");

      solicitarPago();
    }
  );
}

// Iniciar la maquina
seleccionarBebida();
