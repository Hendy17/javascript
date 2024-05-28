// Loop for em JavaScript com continue
for (let i = 0; i < 10; i++) {
  // Condição para pular a iteração atual
  if (i === 5) {
      console.log("Pulando a iteração número: " + i);
      continue; // Pula para a próxima iteração do loop
  }
  
  console.log("Iteração número: " + i);
}

console.log("Loop encerrado.");
