let x = 10;

if (x > 5) {
    let x = 20; // Escopo local dentro do bloco if
    x++;       // Acessando e modificando a variável x local
    console.log(x); // Imprime o valor de x dentro do bloco if (20)
}

console.log(x); // Imprime o valor de x fora do bloco if (10)
