// Lista de tarefas
let tarefas = ["Comprar leite", "Estudar JavaScript", "Fazer exercícios", "Estudar JavaScript", "Ler um livro"];

// Usando indexOf para encontrar a primeira ocorrência de uma tarefa
let tarefa = "Estudar JavaScript";
let primeiroIndice = tarefas.indexOf(tarefa);

if (primeiroIndice !== -1) {
  console.log(`A primeira ocorrência da tarefa "${tarefa}" está no índice ${primeiroIndice}.`);
} else {
  console.log(`A tarefa "${tarefa}" não foi encontrada.`);
}

// Usando lastIndexOf para encontrar a última ocorrência de uma tarefa
let ultimoIndice = tarefas.lastIndexOf(tarefa);

if (ultimoIndice !== -1) {
  console.log(`A última ocorrência da tarefa "${tarefa}" está no índice ${ultimoIndice}.`);
} else {
  console.log(`A tarefa "${tarefa}" não foi encontrada.`);
}

// Usando indexOf para verificar se uma tarefa específica existe antes de removê-la
let tarefaParaRemover = "Fazer exercícios";
let indiceParaRemover = tarefas.indexOf(tarefaParaRemover);

if (indiceParaRemover !== -1) {
  tarefas.splice(indiceParaRemover, 1);
  console.log(`A tarefa "${tarefaParaRemover}" foi removida.`);
} else {
  console.log(`A tarefa "${tarefaParaRemover}" não foi encontrada para remoção.`);
}

// Mostra a lista de tarefas atualizada
console.log("Lista de Tarefas Atualizada:", tarefas);
