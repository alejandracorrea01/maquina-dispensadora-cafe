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
| `cafeDisponible` | Variable (`let`) | Number | Gramos (g) |
| `aguaDisponible` | Variable (`let`) | Number | Mililitros (ml) |
| `lecheDisponible` | Variable (`let`) | Number | Mililitros (ml) |
| `espumaDisponible` | Variable (`let`) | Number | Mililitros (ml) |
| `chocolateDisponible` | Variable (`let`) | Number | Gramos (g) |
| `azucarDisponible` | Variable (`let`) | Number | Gramos (g) |
| `cantidadAzucar` | Constante (`const`) | Number | Gramos por bebida (g) |
| `deseaAzucar` | Variable (`let`) | String | No aplica |
| `denominacionesCambio` | Constante (`const`) | Array de objetos | Pesos colombianos (COP) |
| `desgloseCambio` | Variable local (`let`) | Array de objetos | Cantidad de billetes y monedas |

### 3.2. Descripción de las variables

**Inventario y preferencias**

- `cafeDisponible`, `aguaDisponible`, `lecheDisponible`, `espumaDisponible` y `chocolateDisponible`: almacenan las cantidades disponibles de cada ingrediente.
- `azucarDisponible`: controla la cantidad de azúcar disponible en gramos.
- `cantidadAzucar`: establece que cada bebida con azúcar utiliza 5 gramos.
- `deseaAzucar`: almacena la preferencia del usuario sobre agregar azúcar.

**Devolución del cambio**

- `denominacionesCambio`: contiene los valores y tipos de billetes y monedas utilizados para calcular la devolución.
- `desgloseCambio`: almacena la combinación de denominaciones y sus respectivas cantidades para entregar el cambio exacto.

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



## 5. Funcionamiento general

El programa sigue este proceso:

1. Muestra el menú con las ocho bebidas y sus precios.
2. Solicita al usuario que seleccione una bebida.
3. Valida que la selección sea un número entero entre 1 y 8.
4. Identifica el nombre, precio e ingredientes de la bebida seleccionada.
5. Comprueba que haya suficientes ingredientes y vasos disponibles.
6. Pregunta si el usuario desea agregar azúcar.
7. Comprueba que haya azúcar disponible cuando el usuario la solicita.
8. Solicita el dinero para realizar la compra.
9. Valida que el pago sea numérico y suficiente.
10. Permite cancelar la compra escribiendo 0.
11. Calcula el cambio y determina la combinación de billetes y monedas mediante el algoritmo de devolución.
12. Descuenta los ingredientes, el azúcar (si se solicitó) y un vaso después del pago exitoso.
13. Muestra la preparación y el resumen de la compra.
14. Actualiza y muestra los inventarios disponibles.
15. Pregunta si el usuario desea realizar otra compra o apagar la máquina.

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
11. - **Cancelación de compra:** El usuario puede escribir `0` durante el ingreso del pago para cancelar la compra. La máquina informa el valor que devuelve, cierra la interfaz y no prepara la bebida ni descuenta un vaso.

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

## Control de inventario de azúcar

Se implementó una opción para que el usuario decida si desea azúcar en su bebida.

**Características:**
- La máquina pregunta si el usuario desea azúcar antes del pago.
- El usuario puede seleccionar Sí o No.
- El inventario inicial es de 500 gramos.
- Cada bebida con azúcar consume 5 gramos.
- Si el usuario no desea azúcar, no se realiza ningún descuento.
- Se valida que exista suficiente azúcar antes de continuar con el pago.
- Se muestra la cantidad de azúcar disponible después de cada compra.

**Pruebas realizadas:** se verificó el descuento de 5 gramos al elegir azúcar y la conservación del inventario al seleccionar una bebida sin azúcar.

### 10.1. Algoritmo de devolución exacta del cambio

Se implementó un algoritmo para calcular la combinación de billetes y monedas necesaria para devolver el cambio al usuario.

Para desarrollar esta función, se creó un arreglo llamado `denominacionesCambio`, que contiene los valores de las denominaciones disponibles y su tipo (billete o moneda).

También se creó la función `calcularCambio(cambio)`, que realiza los siguientes pasos:

1. Recibe el valor total del cambio que debe entregarse.
2. Recorre el arreglo de denominaciones, comenzando por los valores más altos.
3. Utiliza `Math.floor()` para calcular cuántos billetes o monedas de cada denominación se necesitan.
4. Resta del cambio restante el valor de las unidades utilizadas.
5. Guarda cada denominación y su cantidad en el arreglo `resultadoCambio`.
6. Comprueba si todavía queda una cantidad pendiente. Si no es posible devolver el cambio exacto, informa al usuario.

El resultado se almacena en la variable `desgloseCambio`, que permite mostrar la cantidad de billetes y monedas que se entregarán.

**Ejemplo de funcionamiento:**

Si el usuario compra un café americano de $3.500 COP e ingresa $8.000 COP, el programa calcula un cambio de $4.500 COP y presenta la siguiente combinación:

- 2 billetes de $2.000 COP.
- 1 moneda de $500 COP.

De esta manera, la máquina no solamente calcula el valor del cambio, sino que también determina y muestra cómo se puede entregar utilizando diferentes denominaciones.

