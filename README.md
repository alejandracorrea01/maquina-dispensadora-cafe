# Máquina dispensadora de café

## 1. Descripción del proyecto

Este proyecto consiste en desarrollar un programa en JavaScript que simula el funcionamiento de una máquina dispensadora de bebidas calientes. El usuario puede consultar los productos disponibles, seleccionar una bebida, conocer su precio, ingresar dinero y recibir información sobre el resultado de la compra.

El programa valida la selección del producto y el dinero ingresado. Cuando el pago es suficiente, calcula el cambio y muestra un resumen de la compra.

## 2. Objetivo

Identificar y declarar las variables necesarias para representar los productos, sus precios, las cantidades de ingredientes y los datos que permiten controlar el funcionamiento de la máquina dispensadora.

Además, aplicar los conceptos de variables, constantes, tipos de datos, condicionales, validaciones y manejo de entradas y salidas mediante JavaScript.

## 3. Análisis de variables

Las variables permiten almacenar y administrar la información necesaria para el funcionamiento de la máquina dispensadora de café.

En JavaScript se utilizan `const` para declarar valores que no necesitan reasignarse y `let` para declarar variables cuyos valores pueden cambiar durante la ejecución del programa.

### 3.1. Tabla de variables

| Variable | Tipo | Tipo de dato | Unidad |
|---|---|---|---|
| `producto1` a `producto8` | Constantes | String | No aplica |
| `precio1` a `precio8` | Constantes | Number | Pesos colombianos (COP) |
| `cantidadCafeEspresso`, `cantidadCafeAmericano`, `cantidadCafeCapuchino`, `cantidadCafeLatte`, `cantidadCafeMocaccino`, `cantidadCafeFlatWhite`, `cantidadCafeMacchiato` | Constantes | Number | Gramos (g) |
| `cantidadAguaEspresso`, `cantidadAguaAmericano` | Constantes | Number | Mililitros (ml) |
| `cantidadLecheCapuchino`, `cantidadLecheLatte`, `cantidadLecheMocaccino`, `cantidadLecheFlatWhite`, `cantidadLecheChocolate` | Constantes | Number | Mililitros (ml) |
| `cantidadEspumaCapuchino`, `cantidadEspumaMacchiato` | Constantes | Number | Mililitros (ml) |
| `cantidadChocolateMocaccino`, `cantidadChocolateBebida` | Constantes | Number | Gramos (g) |
| `opcionUsuario` | Variable | Number | No aplica |
| `dineroIngresado` | Variable | Number | Pesos colombianos (COP) |
| `cambio` | Variable | Number | Pesos colombianos (COP) |
| `precioSeleccionado` | Variable | Number | Pesos colombianos (COP) |
| `nombreSeleccionado` | Variable | String | No aplica |
| `tiempoPreparacion` | Variable | Number | Segundos (s) |
| `confirmacionCompra` | Variable | Boolean | No aplica |
| `menuProductos` | Variable | String | No aplica |
| `mensajeEstado` | Variable | String | No aplica |
| `mensajePreparacion` | Variable | String | No aplica |
| `ingredientesSeleccionados` | Variable | String | No aplica |
| `vasosDisponibles` | Número entero (`Number`) | Vasos | Cantidad de vasos disponibles en la máquina. Inicia en 20 y disminuye en uno por cada compra exitosa. |

### 3.2. Descripción de las variables

**Productos y precios**

- `producto1` a `producto8`: almacenan los nombres de las ocho bebidas disponibles.
- `precio1` a `precio8`: almacenan el precio correspondiente a cada bebida en pesos colombianos.

**Ingredientes**

- `cantidadCafeEspresso` a `cantidadCafeMacchiato`: representan las cantidades de café utilizadas en las siete bebidas que contienen café.
- `cantidadAguaEspresso` y `cantidadAguaAmericano`: almacenan las cantidades de agua utilizadas en el espresso y el café americano.
- `cantidadLecheCapuchino`, `cantidadLecheLatte`, `cantidadLecheMocaccino`, `cantidadLecheFlatWhite` y `cantidadLecheChocolate`: representan las cantidades de leche utilizadas en las recetas correspondientes.
- `cantidadEspumaCapuchino` y `cantidadEspumaMacchiato`: almacenan las cantidades de espuma de leche.
- `cantidadChocolateMocaccino` y `cantidadChocolateBebida`: representan las cantidades de chocolate utilizadas en el mocaccino y el chocolate caliente.

**Variables de funcionamiento**

- `opcionUsuario`: almacena la opción numérica ingresada para seleccionar una bebida.
- `dineroIngresado`: registra el dinero introducido por el usuario.
- `cambio`: almacena la diferencia entre el dinero ingresado y el precio de la bebida.
- `precioSeleccionado`: contiene el precio del producto elegido.
- `nombreSeleccionado`: almacena el nombre del producto seleccionado.
- `tiempoPreparacion`: representa el tiempo estimado de preparación configurado en el programa.
- `confirmacionCompra`: registra un valor booleano relacionado con el estado de confirmación de la compra.
- `menuProductos`: contiene el texto que presenta las bebidas disponibles y sus precios.
- `mensajeEstado`: almacena mensajes relacionados con el estado de la operación y las validaciones.
- `mensajePreparacion`: contiene el mensaje que se muestra al usuario sobre la preparación de la bebida.
- `ingredientesSeleccionados`: almacena la información de los ingredientes asociados con la bebida elegida.

## 4. Recetas de los productos

Las siguientes recetas corresponden a las cantidades de ingredientes definidas para preparar una porción de cada bebida.

### 1. Espresso

- Café molido: 9 g.
- Agua: 30 ml.
- Precio: $3.000 COP.

### 2. Café americano

- Café molido: 9 g.
- Agua caliente: 150 ml.
- Precio: $3.500 COP.

### 3. Capuchino

- Café molido: 9 g.
- Leche: 100 ml.
- Espuma de leche: 50 ml.
- Precio: $5.000 COP.

### 4. Café latte

- Café molido: 9 g.
- Leche: 180 ml.
- Precio: $5.000 COP.

### 5. Mocaccino

- Café molido: 9 g.
- Leche: 150 ml.
- Chocolate: 15 g.
- Precio: $5.500 COP.

### 6. Flat white

- Café molido: 18 g.
- Leche: 120 ml.
- Precio: $5.500 COP.

### 7. Macchiato

- Café molido: 9 g.
- Espuma de leche: 15 ml.
- Precio: $3.500 COP.

### 8. Chocolate caliente

- Leche: 200 ml.
- Chocolate: 25 g.
- Precio: $4.000 COP.

## 5. Funcionamiento general

El programa sigue el siguiente proceso:

1. Muestra el menú con las ocho bebidas disponibles y sus precios.
2. Solicita al usuario que seleccione una bebida.
3. Valida que la opción ingresada sea válida, numérica y corresponda a un producto del menú.
4. Identifica el nombre y el precio de la bebida seleccionada.
5. Solicita el dinero necesario para realizar la compra.
6. Verifica que el valor ingresado sea numérico y positivo.
7. Comprueba que el dinero sea suficiente para pagar el producto.
8. Si el dinero es suficiente, calcula el cambio mediante una resta.
9. Muestra un mensaje sobre la preparación y el resultado de la compra.
10. Presenta un resumen con la información de la operación.

Si la selección no es válida, el programa informa el error y finaliza la interacción correspondiente. Si el pago presenta un valor inválido o es insuficiente, solicita nuevamente el dinero.

## 6. Análisis de entradas y salidas

### 6.1. Entradas

Las entradas son los datos que el programa recibe del usuario durante la ejecución.

| Entrada | Tipo de dato | Descripción | Unidad |
|---|---|---|---|
| `opcionUsuario` | Number | Opción de bebida seleccionada en el menú | No aplica |
| `dineroIngresado` | Number | Cantidad de dinero introducida por el usuario | COP |

### 6.2. Salidas

Las salidas son los mensajes y resultados que el programa presenta al usuario.

| Salida | Tipo de dato | Descripción |
|---|---|---|
| `menuProductos` | String | Presenta las bebidas disponibles y sus precios |
| `mensajeEstado` | String | Informa el resultado de las validaciones y el estado de la operación |
| `nombreSeleccionado` | String | Identifica la bebida elegida |
| `precioSeleccionado` | Number | Indica el precio del producto seleccionado, en COP |
| `cambio` | Number | Representa el dinero que debe devolverse al usuario, en COP |
| `mensajePreparacion` | String | Presenta información sobre la preparación de la bebida |
| `ingredientesSeleccionados` | String | Presenta los ingredientes asociados con el producto seleccionado |

## 7. Reglas de negocio

Las reglas de negocio establecen las condiciones que debe cumplir el programa para procesar una compra.

1. La máquina debe ofrecer ocho productos diferentes.
2. Cada producto debe tener un nombre, un precio y una receta definida.
3. El usuario debe seleccionar una opción válida del menú, entre 1 y 8.
4. La opción seleccionada debe permitir identificar correctamente el producto y su precio.
5. El dinero ingresado debe ser un valor numérico positivo.
6. El dinero ingresado debe ser mayor o igual al precio de la bebida.
7. Si el dinero es insuficiente, el programa debe informar al usuario y solicitar nuevamente el pago.
8. Si el pago es suficiente, el programa debe calcular el cambio mediante una resta.
9. El programa debe mostrar el resultado de la operación y un resumen de la compra.
10. Los precios y las cantidades de ingredientes deben mantenerse consistentes con las recetas documentadas.

## 8. Pseudocódigo

**INICIO**

1. Declarar las constantes de los productos, precios e ingredientes.
2. Declarar las variables necesarias para controlar la operación.
3. Construir y mostrar el menú de bebidas.
4. Solicitar al usuario una opción del menú.
5. Validar la opción ingresada.
6. Si la opción no es válida:
   - Mostrar un mensaje de error.
   - Finalizar la interacción.
7. Si la opción es válida:
   - Identificar el producto seleccionado.
   - Consultar su precio.
   - Asociar los ingredientes correspondientes.
8. Solicitar el dinero para realizar la compra.
9. Validar que el valor ingresado sea numérico y positivo.
10. Si el valor ingresado no es válido:
    - Mostrar un mensaje de error.
    - Solicitar nuevamente el dinero.
11. Comparar el dinero ingresado con el precio del producto.
12. Si el dinero es insuficiente:
    - Informar que el pago no es suficiente.
    - Solicitar nuevamente el dinero.
13. Si el dinero es suficiente:
    - Calcular el cambio.
    - Mostrar el valor del cambio.
    - Mostrar el mensaje de preparación.
    - Presentar el resumen de la compra.
14. Finalizar la operación.

**FIN**
