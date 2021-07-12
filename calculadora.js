
const dividir = require('./dividir');
const multiplicar = require('./multiplicar');
const restar = require('./restar');
const sumar = require('./sumar');


let numero1=2;
let numero2=3;
let calculadora=(numero1, numero2, operacion)=>{
    return operacion(numero1, numero2);
}
console.log(calculadora(numero1,numero2, sumar));
console.log(calculadora(numero1,numero2, restar));
console.log(calculadora(numero1,numero2, multiplicar));
console.log(calculadora(numero1,numero2, dividir));

