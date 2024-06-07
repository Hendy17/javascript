let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;
let num4 = 9;
function imprimirNumeros(...args) {
    for(let i =0; i < args.length; i++) {
        console.log(args[i]);
    }
}

imprimirNumeros(num,num1,num3);
console.log('pause');
imprimirNumeros(num4, num,);
console.log('pause');
imprimirNumeros(2,6,8,9,10,26);
