
/* Primero Operadores de Condición */
console.log("\n ** Verificación de Condicioes Simples y Dobles **\n");
console.log("Cond. #1  " + (4 < 4) );
console.log("Cond. #2  " + (23 == 33) );
console.log("Cond. #3  " + (37 >= -3) );
console.log("Cond. #4  " + ("Joel" == "Joel") );
console.log("Cond. #5  " + ("joel" == "Joel") );
console.log("Cond. #6  " + ('!"$:;14;' != "123qwerty") );
console.log("Cond. #7  " + (("Joel" == "Joel") && ('!"$:;14;' == '!"$:;14;')) );
console.log("Cond. #8  " + (("Joel" == "joel") || ('!"$:;14;' == '!"$:;14;')) );
console.log("Cond. #9  " + (("joel" != "Joel") && ('!"$:;14;' != "123qwerty")) );
console.log("Cond. #10 " + (("joel" != "Joel") && !('!"$:;14;' != "123qwerty"))+(" Igual que #9 con 2da Condición Negada") ); /* niego la 2da expresión */

/* Preparo para ingresar datos por Terminal/ Consola */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 100;  /* Debe ser menor que este número */  
let edadUsuario = 0;
console.log("*** VERIFICACIÓN EDAD DE USUARIO *** ");
console.log("Empiezo ahora pido la Edad ");
function pregunta(callback) {
  rl.question('Ingrese la edad del Usuario: ', function(answer) {
    callback(answer);
  });
}

pregunta(function(edad) {
    console.log(`Edad de Usuario Ingresada (string) = ${edad} `);
    rl.close();
    edadUsuario = parseInt(edad);
    
    console.log("Edad de Usuario Ingresada (numero) = " +edadUsuario+ ".-\n");
    console.log('\nVerfico Edad del Usuario usando "if" y "else" fuera del "console.log"'); 
    if((edadUsuario >= EDAD_MINIMA) && (edadUsuario < EDAD_MAXIMA)) {
        console.log ("Chk Edad #1 = Edad de Usuario Válida!!"); }
    else {
        console.log ("Chk Edad #1 = Edad de Usuario No válida!!"); }  
    
    /* Dentro del console.log */
    console.log('\nVerifico Edad del Usuario dentro del comando "console.log"');
    console.log(((edadUsuario >= EDAD_MINIMA) && (edadUsuario < EDAD_MAXIMA)) ? 
        "Chk Edad #1 = Edad de Usuario Válida!!!" :  "Chk Edad #1 = Edad de Usuario No válida!!!");
    console.log(((edadUsuario >= EDAD_MINIMA) || (edadUsuario < EDAD_MAXIMA)) ? 
        "Chk Edad #2 = Edad de Usuario Válida!!!" :  "Chk Edad #2 = Edad de Usuario No válida!!!");
    console.log(((edadUsuario <= EDAD_MINIMA) || (edadUsuario < EDAD_MAXIMA)) ? 
        "Chk Edad #3 = Edad de Usuario Válida!!!" :  "Chk Edad #3 = Edad de Usuario No válida!!!");
    console.log(((edadUsuario < EDAD_MINIMA)  && (edadUsuario > EDAD_MAXIMA)) ? 
        "Chk Edad #4 = Edad de Usuario Válida!!!" :  "Chk Edad #4 = Edad de Usuario No válida!!!");
    console.log(((edadUsuario < EDAD_MINIMA)  || (edadUsuario > EDAD_MAXIMA)) ? 
        "Chk Edad #5 = Edad de Usuario Válida!!!" :  "Chk Edad #5 = Edad de Usuario No válida!!!");
    console.log("\n ** Fin **\n");
        
    /*Fin */

  });

