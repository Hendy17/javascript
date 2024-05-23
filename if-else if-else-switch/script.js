//Exemplo de Código://
const nome = "Hëndy";
const idade = 37;

if (nome === "Hëndy" && idade === 37) {
    console.log("Olá, Hëndy! Você tem 37 anos.");
} else if (nome === "Hëndy") {
    console.log("Olá, Hëndy! Sua idade não é 37.");
} else if (idade === 37) {
    console.log("Olá! Você tem 37 anos, mas seu nome não é Hëndy.");
} else {
    console.log("Olá! Você não é Hëndy e não tem 37 anos.");
}

const hora = 15;

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

// Estrutura switch//
const diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Dia inválido");
}

