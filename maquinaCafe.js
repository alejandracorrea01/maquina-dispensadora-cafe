
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


// Precios en pesos colombianos (COP)
const precio1 = 3000;
const precio2 = 3500;
const precio3 = 5000;
const precio4 = 5000;
const precio5 = 5500;

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

// Denominaciones para devolver el cambio
const denominacionesCambio = [
  { valor: 100000, tipo: "Billete" },
  { valor: 50000, tipo: "Billete" },
  { valor: 20000, tipo: "Billete" },
  { valor: 10000, tipo: "Billete" },
  { valor: 5000, tipo: "Billete" },
  { valor: 2000, tipo: "Billete" },
  { valor: 1000, tipo: "Billete" },
  { valor: 1000, tipo: "Moneda" },
  { valor: 500, tipo: "Moneda" },
  { valor: 200, tipo: "Moneda" },
  { valor: 100, tipo: "Moneda" },
  { valor: 50, tipo: "Moneda" }
];

// Calcular la devolucion exacta del cambio
function calcularCambio(cambio) {
  let cambioRestante = cambio;
  let resultadoCambio = [];

  for (let denominacion of denominacionesCambio) {
    let cantidad = Math.floor(
      cambioRestante / denominacion.valor
    );

    if (cantidad > 0) {
      resultadoCambio.push({
        valor: denominacion.valor,
        tipo: denominacion.tipo,
        cantidad: cantidad
      });

      cambioRestante -= cantidad * denominacion.valor;
    }
  }

  if (cambioRestante > 0) {
    console.log("No es posible devolver el cambio exacto.");
    return null;
  }

  return resultadoCambio;
}

// Inventario inicial de ingredientes
let cafeDisponible = 500;       // gramos
let aguaDisponible = 5000;      // mililitros
let lecheDisponible = 3000;     // mililitros
let espumaDisponible = 500;     // mililitros
let chocolateDisponible = 500;  // gramos
let azucarDisponible = 500;    // gramos
const cantidadAzucar = 5;      // gramos por bebida

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
// Preferencia de azucar
let deseaAzucar = "";

// Crear el menu de bebidas
menuProductos =
  "===== MAQUINA DE CAFE =====\n" +
  "1. " + producto1 + " - $" + precio1 + " COP\n" +
  "2. " + producto2 + " - $" + precio2 + " COP\n" +
  "3. " + producto3 + " - $" + precio3 + " COP\n" +
  "4. " + producto4 + " - $" + precio4 + " COP\n" +
  "5. " + producto5 + " - $" + precio5 + " COP\n";



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
  }
}


// Conectar las bebidas de la vitrina con JavaScript
const bebidasVitrina = document.querySelectorAll("[data-product]");
const pantallaSeleccion = document.getElementById("selection-display");

bebidasVitrina.forEach((bebida) => {
  bebida.addEventListener("click", () => {
    opcionUsuario = Number(bebida.dataset.product);

    switch (opcionUsuario) {
      case 1:
        nombreSeleccionado = producto1;
        precioSeleccionado = precio1;
        break;
      case 2:
        nombreSeleccionado = producto2;
        precioSeleccionado = precio2;
        break;
      case 3:
        nombreSeleccionado = producto3;
        precioSeleccionado = precio3;
        break;
      case 4:
        nombreSeleccionado = producto4;
        precioSeleccionado = precio4;
        break;
      case 5:
        nombreSeleccionado = producto5;
        precioSeleccionado = precio5;
        break;
    }

    pantallaSeleccion.textContent =
      nombreSeleccionado + " - $" +
      precioSeleccionado.toLocaleString("es-CO") + " COP";

    console.log("Bebida seleccionada:", nombreSeleccionado);
  });
});

// Conectar el teclado numérico de la máquina
const botonesTeclado = document.querySelectorAll("[data-select]");

botonesTeclado.forEach((boton) => {
  boton.addEventListener("click", () => {
    const numero = boton.dataset.select;
    const campoDinero = document.getElementById("balance-input");

    campoDinero.value += numero;
  });
});

// Conectar el botón de cancelar
const botonCancelar = document.querySelector('[data-action="cancel"]');

botonCancelar.addEventListener("click", () => {
  if (dineroIngresado > 0) {
    document.getElementById("coin-output").textContent =
      "$" + dineroIngresado.toLocaleString("es-CO") + " COP";
  }

  dineroIngresado = 0;
  opcionUsuario = 0;
  precioSeleccionado = 0;
  nombreSeleccionado = "";

  pantallaSaldo.textContent = "$0";
  pantallaSeleccion.textContent = "Selecciona una bebida";

  entradaDinero.value = "";

  console.log("Operación cancelada");
});

// Conectar el botón para devolver el saldo
const botonDevolver = document.querySelector('[data-action="return-change"]');

botonDevolver.addEventListener("click", () => {
  if (dineroIngresado <= 0) {
    pantallaSeleccion.textContent = "No hay dinero para devolver";
    return;
  }

  document.getElementById("coin-output").textContent =
    "$" + dineroIngresado.toLocaleString("es-CO") + " COP";

  dineroIngresado = 0;
  opcionUsuario = 0;
  precioSeleccionado = 0;
  nombreSeleccionado = "";

  pantallaSaldo.textContent = "$0";
  pantallaSeleccion.textContent = "Dinero devuelto";

  entradaDinero.value = "";

  console.log("Dinero devuelto");
});

// Conectar el botón de compra
const botonComprar = document.getElementById("buy-button");

botonComprar.addEventListener("click", () => {
  if (opcionUsuario === 0) {
    pantallaSeleccion.textContent = "Primero selecciona una bebida";
    return;
  }

  if (dineroIngresado < precioSeleccionado) {
    pantallaSeleccion.textContent =
      "Dinero insuficiente. Necesitas $" +
      precioSeleccionado.toLocaleString("es-CO") + " COP";
    return;
  }

  // Verificar disponibilidad de ingredientes
if (!hayIngredientesDisponibles()) {
  pantallaSeleccion.textContent =
    "No hay ingredientes suficientes para esta bebida";
  return;
}

// Verificar disponibilidad de vasos
if (vasosDisponibles <= 0) {
  pantallaSeleccion.textContent =
    "La máquina no tiene vasos disponibles";
  return;
}

// Descontar recursos de la compra
descontarIngredientes();
vasosDisponibles--;

document.getElementById("cups-stock").textContent =
  vasosDisponibles;

console.log("Café restante:", cafeDisponible);
console.log("Agua restante:", aguaDisponible);
console.log("Leche restante:", lecheDisponible);
console.log("Espuma restante:", espumaDisponible);
console.log("Chocolate restante:", chocolateDisponible);
console.log("Vasos restantes:", vasosDisponibles);



  // Calcular el cambio
cambio = dineroIngresado - precioSeleccionado;

// Mostrar el cambio si corresponde
if (cambio > 0) {
  document.getElementById("coin-output").textContent =
    "$" + cambio.toLocaleString("es-CO") + " COP";
} else {
  document.getElementById("coin-output").textContent = "";
}

// Finalizar el pago
dineroIngresado = 0;

pantallaSaldo.textContent = "$0";

pantallaSeleccion.textContent =
  "Pago realizado: " + nombreSeleccionado;
});


// Conectar el formulario para ingresar dinero
const formularioSaldo = document.getElementById("balance-form");
const entradaDinero = document.getElementById("balance-input");
const pantallaSaldo = document.getElementById("credit");

formularioSaldo.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const cantidad = Number(entradaDinero.value);

  if (cantidad <= 0) {
    return;
  }

  dineroIngresado += cantidad;

  pantallaSaldo.textContent =
    "$" + dineroIngresado.toLocaleString("es-CO") + " COP";

  entradaDinero.value = "";
});


