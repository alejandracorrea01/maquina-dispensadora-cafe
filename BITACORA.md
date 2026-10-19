1. Inicio del proyecto y comprensión del problema

Lo primero que hice fue entender qué debía hacer mi máquina dispensadora de café y cómo debía funcionar. Antes de empezar a programar, necesitaba organizar las ideas y tener claro qué información iba a necesitar el programa, qué operaciones debía realizar y qué resultados debía mostrar.

La idea del proyecto es simular una máquina en la que una persona pueda escoger una bebida, conocer su precio, ingresar dinero y completar una compra. Al final, el programa debe informar si la compra fue exitosa, cuánto cambio debe recibir la persona y qué bebida seleccionó.

Decidí organizar el trabajo por partes para no intentar programar todo al mismo tiempo.

2. Análisis de entradas, procesos y salidas

Después de entender el funcionamiento general, identifiqué las entradas, los procesos y las salidas del programa.

Entradas: son los datos que necesita recibir la máquina. En mi proyecto son principalmente el número de la bebida que selecciona el usuario y la cantidad de dinero que ingresa.

Procesos: son las operaciones que realiza el programa con esos datos. Por ejemplo, identificar la bebida, buscar su precio, mostrar sus ingredientes, comprobar el pago y calcular el cambio.

Salidas: son los resultados que ve el usuario en la consola. Entre ellos están el menú, el nombre y el precio de la bebida, los ingredientes, los mensajes de pago y el resumen final de la compra.

Hacer este análisis me ayudó a entender que un programa no consiste solamente en escribir código, sino en organizar primero lo que debe hacer y en qué orden.

3. Definición de las reglas de funcionamiento

Después del análisis, establecí las reglas que debía seguir la máquina para que la compra tuviera sentido.

La primera regla es que el usuario debe seleccionar una bebida disponible en el menú. La segunda es que el programa debe identificar el precio y los ingredientes de esa bebida. La tercera es que el dinero ingresado debe ser suficiente para pagarla.

También definí que el programa debe calcular el cambio cuando el usuario paga más del precio, y que no debe continuar con una selección incorrecta. Si el dinero ingresado no alcanza, debe solicitar nuevamente el pago.

Estas reglas me sirvieron como guía para construir la lógica del programa y decidir qué debía ocurrir en cada situación.

4. Creación del menú y selección de las bebidas

Luego definí las ocho bebidas que tendría disponibles la máquina:

Espresso.

Café americano.

Capuchino.

Café latte.

Mocaccino.

Flat white.

Macchiato.

Chocolate caliente.

A cada bebida le asigné un precio. Después, trabajé en la lógica para que el usuario pudiera elegir una opción escribiendo su número en la consola.

Para reconocer la selección utilicé estructuras condicionales como if y else if. Estas permiten que el programa compare el número ingresado con las opciones disponibles y ejecute las instrucciones correspondientes.

Por ejemplo, si el usuario selecciona la opción 1, el programa identifica que quiere un espresso y asigna el nombre, el precio y los ingredientes de esa bebida.

5. Definición de las recetas y los ingredientes

Una vez organizado el menú, definí las cantidades de ingredientes necesarias para cada bebida. Utilicé gramos para ingredientes como el café y el chocolate, y mililitros para líquidos como el agua y la leche.

Las recetas que definí fueron las siguientes:

Espresso: 9 g de café y 30 ml de agua.

Café americano: 9 g de café y 150 ml de agua.

Capuchino: 9 g de café, 100 ml de leche y 50 ml de espuma.

Café latte: 9 g de café y 180 ml de leche.

Mocaccino: 9 g de café, 150 ml de leche y 15 g de chocolate.

Flat white: 18 g de café y 120 ml de leche.

Macchiato: 9 g de café y 15 ml de espuma.

Chocolate caliente: 200 ml de leche y 25 g de chocolate.

Organicé esta información para que el programa pudiera mostrar los ingredientes correspondientes a la bebida seleccionada. Así, cada opción tiene sus propias cantidades y no todas las bebidas muestran la misma receta.

6. Declaración y organización de las variables

Después de definir los datos que necesitaba el programa, comencé a declarar las variables en el archivo maquinaCafe.js.

Las variables son espacios donde guardo información para poder utilizarla durante la ejecución del programa. Por ejemplo, necesito guardar qué bebida escogió el usuario, cuánto cuesta, cuánto dinero ingresó y cuánto cambio debe recibir.

Entre las variables que utilicé están:

opcionUsuario: guarda el número de la bebida seleccionada.

dineroIngresado: guarda la cantidad de dinero ingresada.

precioSeleccionado: guarda el precio de la bebida elegida.

nombreSeleccionado: guarda el nombre de la bebida.

cambio: guarda el resultado del cálculo del cambio.

ingredientesSeleccionados: guarda la información de los ingredientes de la bebida.

tiempoPreparacion: guarda el tiempo estimado de preparación.

mensajeEstado: permite manejar mensajes relacionados con el estado de la compra.

mensajePreparacion: guarda el mensaje que se muestra durante la preparación.

confirmacionCompra: permite representar la confirmación de la compra.

menuProductos: contiene la información que se utiliza para mostrar el menú.

Esta parte fue importante porque me permitió organizar la información antes de utilizarla en las diferentes operaciones del programa.

7. Desarrollo de la entrada y salida por consola

Después trabajé en la interacción entre el programa y el usuario. Como estoy utilizando JavaScript con Node.js, desarrollé la interacción mediante la consola.

El programa muestra el menú, pregunta qué bebida quiere el usuario y recibe su respuesta. Luego utiliza esa respuesta para continuar con el proceso.

Para recibir las respuestas utilicé el módulo readline de Node.js. Este permite hacer preguntas desde la consola y trabajar con la información que escribe el usuario.

De esta manera, el programa no muestra solamente información fija, sino que puede reaccionar a las respuestas que recibe durante la ejecución.

8. Programación de la selección de la bebida

Cuando el usuario escribe el número de una bebida, el programa debe comprobar qué opción escogió y asignar la información correspondiente.

Para hacerlo, utilicé condicionales que comparan la opción ingresada con cada número del menú. Según el resultado, el programa asigna el nombre, el precio y los ingredientes de la bebida.

Después de identificar la selección, el programa muestra la información para que el usuario pueda saber qué eligió y cuánto debe pagar.

Esta parte conecta el menú con el resto del proceso de compra, porque el precio y los ingredientes que se utilizan después dependen de la bebida seleccionada.

9. Programación del pago

Una vez seleccionada la bebida, trabajé en el proceso de pago. El programa solicita al usuario que ingrese una cantidad de dinero y después comprueba si ese valor permite pagar la bebida.

Si el dinero es suficiente, el programa puede continuar con el cálculo del cambio. Si el dinero no alcanza, vuelve a solicitar el pago.

También incorporé controles para evitar que una entrada vacía, un valor que no sea numérico o una cantidad igual o menor que cero se trate como un pago válido.

Esto permite manejar algunos errores de entrada y evita que el programa continúe como si se hubiera realizado un pago correcto cuando los datos ingresados no sirven para completar la compra.

10. Cálculo del cambio

Después de comprobar que el dinero ingresado es suficiente, el programa calcula cuánto cambio debe devolver.

Para hacerlo, resta el precio de la bebida al dinero ingresado.

Por ejemplo, si una bebida cuesta $3.000 y el usuario ingresa $5.000, el programa calcula un cambio de $2.000.

Esta operación utiliza una resta matemática y permite mostrarle al usuario cuánto dinero le corresponde recibir después del pago.

11. Mensajes de preparación y resumen de compra

Después del pago, añadí mensajes para informar que la compra fue exitosa y que la bebida se encuentra en preparación.

También incorporé un tiempo estimado de preparación de cinco segundos. Este tiempo se muestra como información, pero actualmente el programa no espera realmente cinco segundos ni controla una máquina física.

Finalmente, programé un resumen de compra que muestra los datos principales de la transacción, como la bebida seleccionada, el precio, el dinero ingresado y el cambio.

Esta parte permite que el usuario vea el resultado del proceso y tenga una confirmación de la compra que realizó.

12. Corrección de la validación de la selección

Durante la revisión del código, identifiqué que debía controlar correctamente las opciones que no pertenecen al menú.

Por ejemplo, si el usuario escribe el número 9, el programa no debe continuar con el proceso de pago porque esa opción no corresponde a ninguna bebida disponible.

Para corregirlo, incorporé una validación que comprueba que la entrada no esté vacía, que sea un número entero y que se encuentre entre 1 y 8.

Si la selección no cumple estas condiciones, el programa muestra un mensaje indicando que la opción no es válida, cierra la interfaz de entrada y detiene ese proceso.

Esta corrección es importante porque evita que el programa intente realizar una compra sin una bebida correctamente seleccionada.

13. Uso de Git y GitHub durante el desarrollo

Además de programar, utilicé Git y GitHub para guardar y organizar los avances del proyecto.

Git me permite registrar los cambios que realizo en los archivos mediante commits. Cada commit representa un punto del historial del proyecto y tiene un mensaje que explica qué cambio se guardó.

Durante el proceso registré avances relacionados con:

La documentación inicial y las recetas.

La declaración de variables.

El análisis de entradas, salidas y reglas de funcionamiento.

El control de la compra y las variables de salida.

La creación del menú de productos.

La corrección de la selección y el pago.

Los mensajes de preparación.

La selección de los ingredientes.

El resumen de compra.

Después utilicé git push para subir los cambios al repositorio de GitHub. De esta forma, el proyecto queda respaldado y puedo consultar el historial de los avances.

También organicé el proyecto en un repositorio privado para mantener el código y la documentación en un solo lugar.

14. Estado del proyecto al 12 de octubre de 2026

Hasta esta fecha, he desarrollado la estructura principal de la máquina dispensadora de café. El programa cuenta con un menú de ocho bebidas, precios, recetas, selección por consola, validaciones, control del pago, cálculo del cambio y mensajes de preparación y resumen de compra.

También he trabajado en la documentación del proyecto y en el uso de Git y GitHub para registrar los avances.

El proyecto sigue siendo una simulación realizada mediante código. Todavía no está conectado a una máquina física, no prepara bebidas reales y el tiempo de preparación que muestra es solamente informativo.

15. Próximos pasos

Los siguientes pasos serán probar el funcionamiento del programa con diferentes opciones y cantidades de dinero.

También será importante comprobar que el sistema responda correctamente cuando se ingrese una selección inválida, cuando el pago sea insuficiente y cuando el usuario ingrese cantidades diferentes al precio exacto.

A medida que avance el proyecto, continuaré actualizando esta bitácora para registrar las nuevas funciones, las correcciones y los aprendizajes que vaya obteniendo.

16. ### Control de inventario de vasos

- **Cambio realizado:** Se agregó la variable `vasosDisponibles`, inicializada en 20, para controlar la cantidad de vasos disponibles en la máquina de café.
- **Validación:** Se incorporó una condición para impedir que la máquina continúe si no quedan vasos disponibles.
- **Actualización del inventario:** Después de una compra exitosa, se descuenta un vaso y se muestra la cantidad restante en la terminal.
- **Prueba realizada:** Se verificó que, después de una compra, el inventario disminuye de 20 a 19 vasos.
- **Archivos modificados:** `maquinaCafe.js` y `README.md`.
- **Control de versiones:** Commit `af35bf7` — `feat: add cup inventory control`.

### Cancelación de compra y devolución de dinero

- **Cambio realizado:** Se agregó una opción para cancelar la compra escribiendo `0` durante el ingreso del pago.
- **Devolución:** La máquina informa el valor que devuelve al usuario según el dinero registrado en `dineroIngresado`.
- **Validación:** Se comprobó que la compra se cancele y que la interfaz se cierre sin preparar la bebida ni descontar un vaso.
- **Prueba realizada:** Se seleccionó una bebida y se ingresó `0`. La máquina mostró el mensaje de compra cancelada y una devolución de `$0 COP`.
- **Archivos modificados:** `maquinaCafe.js`, `README.md` y `BITACORA.md`.

### Implementación de compras consecutivas e inventario

**Cambios realizados:**
- Se reorganizó el flujo del programa para permitir varias compras durante una misma ejecución.
- Se agregó la opción de comprar otra bebida o apagar la máquina.
- Se implementó la validación de disponibilidad de ingredientes y vasos.
- Se actualiza el inventario después de cada compra exitosa.
- Se conserva la cancelación de compra y la validación del pago.

**Pruebas realizadas:**
- Compra de bebidas consecutivas.
- Descuento de vasos e ingredientes.
- Validación del dinero ingresado.
- Cancelación de una compra.
- Verificación de la opción de apagar la máquina.

**Resultado:** las pruebas se realizaron correctamente y el inventario se mantiene actualizado durante la ejecución del programa.
