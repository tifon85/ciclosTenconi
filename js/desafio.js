/* CALCULAR EL FACTORIAL DE UN NUMERO ENTERO */
let numero = parseInt(prompt("Ingrese número entero positivo para calcular su factorial"));
let resultado = 1;

for (numero; numero > 1; numero--) {
    resultado = resultado * numero;
}

// el factorial de 0 es 1
if (numero == 1 || numero == 0){
    alert("El factorial del número ingresado es: "+ resultado);
}else{
    alert("El número ingresado es invalido por ser negativo.")
}