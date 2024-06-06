// Inicializa uma fila de atendimento vazia
let filaDeAtendimento = [];

// Função para adicionar um cliente à fila
function adicionarCliente(nome) {
  filaDeAtendimento.unshift(nome);
  console.log(`Cliente "${nome}" adicionado à fila.`);
}

// Função para atender o próximo cliente
function atenderProximoCliente() {
  if (filaDeAtendimento.length === 0) {
    console.log("Nenhum cliente na fila para atender.");
    return;
  }
  const clienteAtendido = filaDeAtendimento.pop();
  console.log(`Cliente "${clienteAtendido}" atendido.`);
}

// Adicionando clientes à fila
adicionarCliente("Ana");
adicionarCliente("Carlos");
adicionarCliente("Bianca");

// Mostra a fila de atendimento atual
console.log("Fila de Atendimento:", filaDeAtendimento);

// Atendendo o próximo cliente
atenderProximoCliente();

// Mostra a fila de atendimento atualizada
console.log("Fila de Atendimento:", filaDeAtendimento);


let filaDeAtendimento = [];

function adicionarCliente(nome) {
  filaDeAtendimento.unshift(nome);
  console.log(`Cliente "${nome}" adicionado à fila.`);
}

function atenderProximoCliente() {
  if (filaDeAtendimento.length === 0) {
    console.log("Nenhum cliente na fila para atender.");
    return;
  }
  const clienteAtendido = filaDeAtendimento.shift();
  console.log(`Cliente "${clienteAtendido}" atendido.`);
}

function visualizarProximoCliente() {
  if (filaDeAtendimento.length === 0) {
    console.log("Nenhum cliente na fila.");
    return;
  }
  const proximoCliente = filaDeAtendimento[0];
  console.log(`Próximo cliente a ser atendido: "${proximoCliente}"`);
}

// Adicionando clientes à fila
adicionarCliente("Ana");
adicionarCliente("Carlos");
adicionarCliente("Bianca");

// Mostra a fila de atendimento atual
console.log("Fila de Atendimento:", filaDeAtendimento);

// Visualiza o próximo cliente sem removê-lo
visualizarProximoCliente();

// Atendendo o próximo cliente
atenderProximoCliente();

// Mostra a fila de atendimento atualizada
console.log("Fila de Atendimento:", filaDeAtendimento);
