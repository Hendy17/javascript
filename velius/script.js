//Operador AND (&&)//
true && true  // true
true && false // false


//Operador OR (||)//
true || false // true
false || false // false


//Operador NOT (!)//
!true  // false
!false // true


//Exemplos Práticos Simplificados
//AND (&&)://
const maiorDeIdade = true;
const temIngresso = true;

if (maiorDeIdade && temIngresso) {
    console.log("Pode entrar.");
} else {
    console.log("Não pode entrar.");
}

//OR (||)://
const temVisto = false;
const temPassaporte = true;

if (temVisto || temPassaporte) {
    console.log("Pode viajar.");
} else {
    console.log("Não pode viajar.");
}

//NOT (!)://
const estaChovendo = true;

if (!estaChovendo) {
    console.log("Pode sair para caminhar.");
} else {
    console.log("Precisa de um guarda-chuva.");
}

//Resumo
//&& (AND): Ambos precisam ser true.
//|| (OR): Pelo menos um precisa ser true.
//! (NOT): Inverte o valor 