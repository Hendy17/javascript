// Inicializa uma lista de tarefas vazia
let tarefas = [];

// Função para adicionar uma nova tarefa
function adicionarTarefa(tarefa) {
  tarefas.push(tarefa);
  console.log(`Tarefa "${tarefa}" adicionada.`);
}

// Função para remover a última tarefa
function removerUltimaTarefa() {
  if (tarefas.length === 0) {
    console.log("Nenhuma tarefa para remover.");
    return;
  }
  const tarefaRemovida = tarefas.pop();
  console.log(`Tarefa "${tarefaRemovida}" removida.`);
}

// Adicionando tarefas
adicionarTarefa("Comprar leite");
adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Fazer exercícios");

// Mostra a lista de tarefas atual
console.log("Lista de Tarefas:", tarefas);

// Removendo a última tarefa
removerUltimaTarefa();

// Mostra a lista de tarefas atualizada
console.log("Lista de Tarefas:", tarefas);
