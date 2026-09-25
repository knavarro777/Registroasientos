/*Nombramos una función en la cual se va a realizar todo el proceso al momento de querer hacer una reservación.
Esta se llamará "vectornumasientos"*/
function vectornumasientos() {
    /*En esta parte inicializamos algunas variables y las relacionamos con los elementos de HTML, 
    como el número de asientos, que se coloca "parseFloat" para evitar posibles futuros errores, el nombre del que reserva,
    el vector "datos", las variables "j" y "x" y por último "i", esta la inicializamos en 0.*/
    let num = parseFloat(document.getElementById("numasientos").value);
    var nom = document.getElementById("nombre").value;
    let datos = [];
    var j, x;
    let i = 0;
    /*Aquí utilizamos un do while porque necesitamos que al menos se ejecute una vez, sin importar la condición,
    y luego se repita según la condición indicada. En esta parte lo abrimos con "do{"*/
    do {
        /*Aquí le pedimos al usuario que ingrese los asientos que desea ocupar y estos se irán almacenando en la posición "i" del
        vector "datos". Además, usamos parseFloat para evitar posibles errores en el futuro, ya que en ocasiones JS no diferencia 
        carácteres de números al hacer este tipo de acciones.*/
        datos[i] = parseFloat(prompt("Ingrese los asientos:"));
        /*Mediante este "if" damos a entender que los valores deben de estar entre 1 y 40.*/
        if (datos[i] < 1 || datos[i] > 40) {
            /*Mediante un alert vamos a lanzar el mensaje al usuario sobre el rango que se debe de respetar.*/
            alert("El número de asiento tiene que estar entre 1 y el 40.\nIngrese un número de asiento dentro del rango.");
            //Utilizamos "i--" para decrementar el valor de "i" y se vuelva a solicitar un número en caso que no se cumpla la condición anterior.
            i--;
            //Este "continue" nos servirá para volver al inicio del bucle.
            continue;
        }

        /*A continuación declaramos una variable para comprobar si los asientos están ocupados, esta es de valor booleano para que más adelante cambie
        a "true" en el caso de que el asiento se haya repetido.*/
        let asientoRepetido = false;
        /*Inicializamos un ciclo "for" para que este se cicle y comprueba si alguno de los asientos que se ingresan ya está almacenado en el vector "datos".
        Esta parte se ejecutará siempre y cuando "j" sea mayor o igual a 0 y en cada iteración "j" se decrementará 1.*/
        for (j = i - 1; j >= 0; j--) {
            /*Abrimos un condicional "if" para que haga la comparación entre la cantidad de asientos que ya han sido ocupados y el que se está ingresando.
            En esta comparación usamos === para que la condición sea forzada.*/
            if (datos[i] === datos[j]) {
                //Este es el mensaje que aparecerá si el número de asiento o asientos que ingrese el usuario ya no se encuentran disponibles.
                alert("El número tiene que ser diferente a los ya ingresados.\nIngrese un número de asiento que no haya sido reservado aún.");
                //Al colocar true para la variable "asientoRepetido" básicamente se comprueba que al menos hubo una repetición.
                asientoRepetido = true;
                //Con esto rompemos el ciclo "for" y ya no es necesario seguir comparando debido a que se encontró al menos una repetición.
                break;
            }
        }
        //En esta parte ya hemos salido del bucle for debido a que hubo al menos una repetición de asientos, entonces se verificada que "asientoRepetido" es "true". 
        if (asientoRepetido) {
            //Si el asiento se repitió, se decrementa el valor de i para que le permita al usuario ingresar otro número de asiento en esa posición.
            i--;
            /*Con esto se salta a la siguiente interación del ciclo "for", ya que después de ajustar "i", el ciclo se reinicia y verifica otra vez la nueva posición
            de "i", es decir, del nuevo número de asiento que ingresó el usuario para asegurarse que el nuevo número de asiento no se repita*/
            continue;
        }

        //Esta parte es para asignarle a los usuarios los asientos que desean.
        //Primero abrimos un ciclo "for" que se inicia en 1 y tiene como límite 40 (1-40), y se irá incrementando "x" en cada iteración.
        for (x = 1; x <= 40; x++) {
            //Aquí se abre un condicional "if" donde se comparan de manera forzada los valores del vector datos con "x".
            if (datos[i] === x) {
                //Declaramosuna una variable (nombreUsado) para saber si el nombre que se ingresa ya ha sido usado.
                let nombreUsado = document.getElementById("" + x).innerHTML;
                //Declaramos otra variable (asientoOcupado) para saber si el asiento que se ingresó ya ha sido ocupado.
                let asientoOcupado = document.getElementById("" + x + ".1").innerHTML !== "";

                /*Mediante el condicional "if" se comprueba si el asiento está ocupado y si el nombre usado en ese asiento es igual al que se 
                está intentando asignar, pero todo esto en maýuscula, para darle libertad al usuario de ingresar minúsculas o cómo guste su
                nombre.*/
                if (asientoOcupado && nombreUsado !== nom.toUpperCase()) {
                    //Esta mensaje aparecerá en el caso de que el asiento ya haya sido ocupado y pedirá que ingrese otro.
                    alert("El número de asiento que usted ha ingresado ya está ocupado.\nIngrese otro número de asiento.");
                    //Mediante "i--" ajustamos el índice "i" para que este se vuelva a verificar.
                    i--;
                    //Con esto terminamos el ciclo.
                    break;
                }

                /*Si no existen problemas con el número de asiento ingresado y el nombre del usuario, los valores de las siguientes
                tres líneas (cantidad de asientos reservados por el usuario, el nombre de la persona en mayúscula y el número de asiento
                que desea ocupar) se actualizarán.*/
                document.getElementById("" + x + ".0").innerHTML = ("" + num);
                document.getElementById("" + x).innerHTML = nom.toUpperCase();
                document.getElementById("" + x + ".1").innerHTML = ("" + datos[i]);

                /*Se reutlizan parte de las líneas de código de arriba, pero esta vez en lugar de actualizar la información, se cambiará
                el color de fondo de las celda. Se crean 3 variables a las que se le asignará un color azul, significando que los asientos
                están reservador*/
                changecolor = document.getElementById("" + x + ".0").style.background = "#8790DB";
                changecolor2 = document.getElementById("" + x).style.background = "#8790DB";
                changecolor3 = document.getElementById("" + x + ".1").style.background = "#8790DB";
                
                /*Es en esta parte donde se le da el valor de color asignado en las variables, es decir, es aquí cuando ya se efectua el cambio */
                document.getElementById("" + x + ".0").changecolor
                document.getElementById("" + x).changecolor2
                document.getElementById("" + x + ".1").changecolor3
            }
        }
        //Se incrementa "i" después del ciclo "for".
        i++;
    }
    //Con este "while" terminamos nuestro ciclo "do-while". Este ciclo se repetirá siempre y cuando "i" sea menor que "num".
    while (i < num);
}

/*Declaramos una función llamado "modificar", que precisamente podrá ser ejecutada cuando se presione el botón de modificar.
Esto es para que se pueda modificar alguna reservación, es decir, cambiarle el nombre o número de asiento(s).*/
function modificar() {
    /*En esta sección declaramos algunas variables. Primero tenemos la variable num, que básicamente indica el número de asiento
    que ingresará el usuario, en esta caso usamos "parseFloat" para evitar posibles problemas de reconocimiento de carácteres
    en el futuro. Luego la variable nom que básicamente es el nombre de la persona que desea hacer la reservación. Declaramos un 
    vector llamados "datos", este estará vacío. Y, por último, las variables "j" e "i", y esta última la inicializamos.*/
    let num = parseFloat(document.getElementById("numasientos").value);
    var nom = document.getElementById("nombre").value;
    let datos = [];
    var j;
    let i = 0;
    //Aquí abrimos el ciclo "do-while" para poder ejecutar el proceso de "modificar" siempre y cuando se cumpla la condición del while.
    do {
        //En el vector "datos" se irán guardando los asientos que se vayan ingresando al momento de querer modificar.
        datos[i] = parseFloat(prompt("Ingrese los asientos:"));
        //Este condicional "if" es para saber si el dato que se ingresó se encuentra dentro del rango permitido (1-40).
        if (datos[i] < 1 || datos[i] > 40) {
            //Este es el mensaje que aparecerá en caso de que el usuario haya ingresado un número de asiento fuera del rango.
            alert("El número tiene que estar entre 1 y el 40.\nIngrese un número de asiento dentro del rango.");
            /*El valor de "i" se irá decrementando para que permita al usuario volver a ingresar otro número de asiento en el 
            caso de que se repita.*/
            i--;
        }
        /*Inicializamos un ciclo "for" para que este se cicle y comprueba si alguno de los asientos que se ingresan ya está almacenado en el vector "datos".
        Esta parte se ejecutará siempre y cuando "j" sea mayor o igual a 0 y en cada iteración "j" se decrementará 1.*/
        for (j = i; j >= 0; j--) {
            /*Abrimos un condicional "if" para que haga la comparación entre la cantidad de asientos que ya han sido ocupados y el que se está ingresando.
            En esta comparación usamos === para que la condición sea forzada. A diferencia del condicional "if" de la función "vectornumasientos,
            aquí se le resta 1 a "j" (j-1), básicamente indica que se está comparando con el elemento anterior al que se está evaluando en el ciclo.*/
            if (datos[i] == datos[j - 1]) {
                //Este es el mensaje que aparecerá en el caso de que el asiento ingresado ya haya sido ocupado.
                alert("El número tiene que ser diferente a los ya ingresados.\nIngrese un número de asiento que no haya sido reservado aún.");
                /*El valor de "i" se irá decrementando para que permita al usuario volver a ingresar otro número de asiento en el 
                caso de que se repita.*/
                i--;
            }
        }
        //Esta parte es para asignarle a los usuarios los asientos que desean ocupar en la modificación.
        //Primero abrimos un ciclo "for" que se inicia en 1 y tiene como límite 40 (1-40), y se irá incrementando "x" en cada iteración.
        for (x = 0; x <= 40; x++) {
            //Aquí se abre un condicional "if" donde se comparan los valores del vector datos con "x".
            if (datos[i] == x) {
                //Con este condicional "if" comparamos si "nom" (nombre) es una cadena vacía.
                if (nom == "") {
                    //Si esta condición se cumple, se realizarán cambios en los elementos de HTML correspondientes.
                    document.getElementById("" + x + ".0").innerHTML = ("");
                    document.getElementById("" + x + ".1").innerHTML = ("");
                }
                //Si la condición de "if" no se cumple, se ejecutará este fragmento de código.
                else {
                    /*Si no existen problemas en la modificación con el número de asiento ingresado y el nombre del usuario, los valores de las 
                    siguientes tres líneas (cantidad de asientos reservados por el usuario, el nombre de la persona en mayúscula y el número de 
                    asiento que desea ocupar) se actualizarán.*/
                    document.getElementById("" + x + ".0").innerHTML = ("" + num);
                    document.getElementById("" + x).innerHTML = nom.toUpperCase();
                    document.getElementById("" + x + ".1").innerHTML = ("" + datos[i]);
                }
            }
        }
        //Se incrementa "i" después del ciclo "for".
        i++;
    }
    //Con este "while" terminamos nuestro ciclo "do-while". Este ciclo se repetirá siempre y cuando "i" sea menor que "num".
    while (i < num);
}

/*Declaramos una función llamado "eliminar", que precisamente podrá ser ejecutada cuando se presione el botón de "eliminar".
Esto es para que se pueda eliminar alguna reservación, es decir, quitar el nombre y número de asiento(s) de la tabla.*/
function eliminar() {
    /*En esta sección declaramos algunas variables. Primero tenemos la variable num, que básicamente indica el número de asiento
    que ingresará el usuario, en esta caso usamos "parseFloat" para evitar posibles problemas de reconocimiento de carácteres
    en el futuro. Declaramos un vector llamados "datos", este estará vacío. Y, por último, las variables "j" e "i", y esta última
    la inicializamos.*/
    let num = parseFloat(document.getElementById("eliminacionregistro").value);
    let datos = [];
    var j;
    let i = 0;
    //Aquí abrimos el ciclo "do-while" para poder ejecutar el proceso de "eliminar" siempre y cuando se cumpla la condición del while.
    do {
        //En el vector "datos" se irán guardando los asientos que se vayan ingresando al momento de querer eliminar.
        datos[i] = parseFloat(prompt("Ingresa los asientos"));
        //Este condicional "if" es para saber si el dato que se ingresó se encuentra dentro del rango permitido (1-40).
        if (datos[i] < 1 || datos[i] > 40) {
            //Este condicional "if" es para saber si el dato que se ingresó se encuentra dentro del rango permitido (1-40).
            alert("El número tiene que estar entre 1 y el 40.\nIngrese un número de asiento dentro del rango.");
            /*El valor de "i" se irá decrementando para que permita al usuario volver a ingresar otro número de asiento en el 
            caso de que se repita.*/
            i--;
        }
        /*Inicializamos un ciclo "for" para que este se cicle y comprueba si alguno de los asientos que se ingresan ya está almacenado en el vector "datos".
        Esta parte se ejecutará siempre y cuando "j" sea mayor o igual a 0 y en cada iteración "j" se decrementará 1.*/
        for (j = i; j >= 0; j--) {
            /*Abrimos un condicional "if" para que haga la comparación entre la cantidad de asientos que ya han sido ocupados y el que se está ingresando.
            En esta comparación usamos === para que la condición sea forzada. A diferencia del condicional "if" de las funciones anteriores,
            aquí se le resta 1 a "j" (j-1), básicamente indica que se está comparando con el elemento anterior al que se está evaluando en el ciclo.*/
            if (datos[i] == datos[j - 1]) {
                //Este es el mensaje que aparecerá en el caso de que el asiento ingresado ya haya sido eliminado.
                alert("El número tiene que ser diferente a los ya ingresados.\nIngrese un número de asiento que no haya ingresado aún.");
                /*El valor de "i" se irá decrementando para que permita al usuario volver a ingresar otro número de asiento en el 
                caso repita alguno que ya haya ingresado en la eliminación.*/
                i--;
            }
        }
        //Esta parte es para eliminar las reservaciones de asientos ya hechas.
        //Primero abrimos un ciclo "for" que se inicia en 1 y tiene como límite 40 (1-40), y se irá incrementando "x" en cada iteración.
        for (x = 0; x <= 40; x++) {
            //Aquí se abre un condicional "if" donde se comparan los valores del vector datos con "x".
            if (datos[i] == x) {
                /*Si no existen problemas con el número de asiento ingresado y el nombre del usuario, los valores de las siguientes
                tres líneas (cantidad de asientos reservados por el usuario, el nombre de la persona en mayúscula y el número de asiento
                que desea ocupar) se actualizarán, es decir, se eliminarán.*/
                document.getElementById("" + x + ".0").innerHTML = ("");
                document.getElementById("" + x + ".1").innerHTML = ("");
                document.getElementById("" + x).innerHTML = ("");

                 /*Se reutlizan parte de las líneas de código de arriba, para indicar que los asientos están disponibles de nuevo
                 se cambiará el color de fondo de las celdas. Se crean 3 variables a las que se le asignará el color gris, 
                significando que los asientos ya no están reservados*/
                changecolors = document.getElementById("" + x + ".0").style.background = "#bebebe";
                changecolors2 = document.getElementById("" + x).style.background = "#bebebe";
                changecolors3 = document.getElementById("" + x + ".1").style.background = "#bebebe";
                
                /*Es en esta parte donde se le da el valor de color asignado en las variables, es decir, es aquí cuando ya se efectua el cambio */
                document.getElementById("" + x + ".0").changecolors
                document.getElementById("" + x).changecolors2
                document.getElementById("" + x + ".1").changecolors3
            }
        }
        //Se incrementa "i" después del ciclo "for".
        i++;
    }
    //Con este "while" terminamos nuestro ciclo "do-while". Este ciclo se repetirá siempre y cuando "i" sea menor que "num".
    while (i < num);
}