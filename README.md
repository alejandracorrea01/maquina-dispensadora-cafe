# Máquina dispensadora de café

## 1. Descripción del proyecto

Este proyecto consiste en desarrollar una máquina dispensadora de café utilizando JavaScript. La máquina permitirá seleccionar una bebida, consultar su precio e ingresar dinero para realizar la compra.

## 2. Objetivo

Identificar las variables necesarias para representar los productos, sus ingredientes, sus precios y los datos requeridos para el funcionamiento de la máquina dispensadora.

## 3. Análisis de variables

Las variables permiten almacenar la información necesaria para el funcionamiento de la máquina dispensadora de café.

| Variable | Tipo | Tipo de dato | Unidad |
|----------|------|--------------|--------|
| `nombreProducto` | Constante | String | No aplica |
| `precioProducto` | Constante | Number | Pesos colombianos (COP) |
| `opcionUsuario` | Variable | Number | No aplica |
| `cantidadCafe` | Constante | Number | Gramos (g) |
| `cantidadAgua` | Constante | Number | Mililitros (ml) |
| `cantidadLeche` | Constante | Number | Mililitros (ml) |
| `cantidadChocolate` | Constante | Number | Gramos (g) |
| `dineroIngresado` | Variable | Number | Pesos colombianos (COP) |
| `cambio` | Variable | Number | Pesos colombianos (COP) |
| `precioSeleccionado` | Variable | Number | Pesos colombianos (COP) |
| `nombreSeleccionado` | Variable | String | No aplica |
| `tiempoPreparacion` | Variable | Number | Segundos (s) |

### Descripción de las variables

- `nombreProducto`: almacena el nombre de una bebida.
- `precioProducto`: representa el precio de una bebida.
- `opcionUsuario`: registra la opción seleccionada en el menú.
- `cantidadCafe`: indica la cantidad de café utilizada en una receta.
- `cantidadAgua`: indica la cantidad de agua utilizada.
- `cantidadLeche`: indica la cantidad de leche utilizada.
- `cantidadChocolate`: indica la cantidad de chocolate utilizado.
- `dineroIngresado`: almacena el dinero introducido por el usuario.
- `cambio`: representa el dinero que debe devolverse al usuario.
- `precioSeleccionado`: almacena el precio de la bebida elegida.
- `nombreSeleccionado`: almacena el nombre de la bebida elegida.
- `tiempoPreparacion`: representa el tiempo estimado para preparar la bebida.

## 4. Recetas de los productos

Las siguientes recetas son propuestas para el funcionamiento de la máquina dispensadora. Las cantidades representan los ingredientes necesarios para preparar una porción de cada bebida.

### 1. Espresso
- Café molido: 9 g
- Agua: 30 ml

### 2. Café americano
- Café molido: 9 g
- Agua caliente: 150 ml

### 3. Capuchino
- Café molido: 9 g
- Leche: 100 ml
- Espuma de leche: 50 ml

### 4. Café latte
- Café molido: 9 g
- Leche: 180 ml

### 5. Mocaccino
- Café molido: 9 g
- Leche: 150 ml
- Chocolate: 15 g

### 6. Flat white
- Café molido: 18 g
- Leche: 120 ml

### 7. Macchiato
- Café molido: 9 g
- Espuma de leche: 15 ml

### 8. Chocolate caliente
- Leche: 200 ml
- Chocolate: 25 g

## 5. Funcionamiento general

1. La máquina muestra las bebidas disponibles.
2. El usuario selecciona una bebida.
3. La máquina consulta el precio correspondiente.
4. El usuario ingresa el dinero.
5. La máquina verifica si el dinero es suficiente.
6. Si el pago es suficiente, prepara la bebida y calcula el cambio.
7. Si el dinero no es suficiente, informa al usuario.

## 6. Análisis de entradas y salidas

### Entradas

Las entradas son los datos que recibe la máquina para realizar una operación.

| Entrada | Tipo de dato | Descripción | Unidad |
|---|---|---|---|
| `opcionUsuario` | Number | Opción de bebida seleccionada en el menú | No aplica |
| `dineroIngresado` | Number | Cantidad de dinero entregada por el usuario | COP |
| `confirmacionCompra` | Boolean | Indica si el usuario desea continuar con la compra | No aplica |

### Salidas

Las salidas son los resultados o mensajes que la máquina entrega al usuario.

| Salida | Tipo de dato | Descripción |
|---|---|---|
| `menuProductos` | String | Muestra las bebidas disponibles |
| `mensajeEstado` | String | Informa si la compra puede continuar o si existe un error |
| `nombreSeleccionado` | String | Muestra el nombre de la bebida elegida |
| `precioSeleccionado` | Number | Muestra el precio de la bebida en COP |
| `cambio` | Number | Indica cuánto dinero debe devolver la máquina, en COP |
| `mensajePreparacion` | String | Confirma que la bebida se está preparando o está lista |

## 7. Reglas de negocio

Las reglas de negocio establecen las condiciones que debe cumplir la máquina para procesar una compra.

1. La máquina debe ofrecer ocho productos diferentes.
2. Cada producto debe tener un nombre, un precio y una receta definida.
3. El usuario debe seleccionar una opción válida del menú.
4. La máquina debe identificar el producto y consultar su precio.
5. El dinero ingresado debe ser mayor o igual al precio de la bebida.
6. Si el dinero ingresado es inferior al precio, la máquina debe informar que el pago es insuficiente.
7. Si el pago es suficiente, la máquina debe calcular el cambio mediante una resta.
8. La bebida solo debe prepararse después de validar la selección y el pago.
9. Si el usuario cancela antes de confirmar la compra, la máquina no debe preparar la bebida.
10. Los precios y las cantidades de ingredientes deben mantenerse consistentes con las recetas documentadas.

## 8. Pseudocódigo

INICIO

1. Mostrar el menú de bebidas.
2. Solicitar al usuario una opción.
3. Verificar que la opción sea válida.
4. Si la opción no es válida:
   - Mostrar un mensaje de error.
   - Volver a solicitar la opción.
5. Si la opción es válida:
   - Identificar el producto seleccionado.
   - Consultar su precio.
6. Solicitar el dinero para realizar la compra.
7. Comparar el dinero ingresado con el precio.
8. Si el dinero es insuficiente:
   - Informar que el pago no es suficiente.
   - No preparar la bebida.
9. Si el dinero es suficiente:
   - Calcular el cambio.
   - Mostrar el valor del cambio.
   - Preparar la bebida.
   - Mostrar un mensaje de confirmación.
10. Finalizar la operación.

FIN