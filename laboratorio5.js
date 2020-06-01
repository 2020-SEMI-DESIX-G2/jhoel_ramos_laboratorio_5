"use strict";

/**
 * 
 * @author Jhoel Ramos
 */

var var1 = 24;
var var2 = 10;

let let1 = "24";
let let2 = 10;

const const1 = "Cadena";
const const2 = 3.14;

var obj = {
    "entero": 1,
    "cadena": "Jhoel",
    "booleano": true,
    vacio: {}
};

function suma(val1, val2) {
    return val1 + val2;
}

function resta(val1, val2) {
    return val1 - val2;
}

function multip(val1, val2) {
    return val1 * val2;
}

function division(val1, val2) {
    return val1 / val2;
}

function typeOf(value) {
    return typeof value;
}

console.log("#### OPERACIONES CON VAR ####");
console.log("Suma: ", suma(var1, var2));
console.log("Resta: ", resta(var1, var2));
console.log("Multiplicación: ", multip(var1, var2));
console.log("División: ", division(var1, var2));

console.log("#### OPERACIONES CON LET ####");
console.log("Concatenación: ", suma(let1, let2));

console.log("#### OPERACIONES CON CONST ####");
console.log("Tipos de dato");
console.log(const1  + ": "+ typeOf(const1));
console.log(const2  + ": "+ typeOf(const2));

console.log("#### OBJETO ####");
console.log(obj);