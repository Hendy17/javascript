// Loop for em JavaScript com break
for (let i = 0; i < 10; i++) {
  console.log("Iteração número: " + i);

   
  // Condição para interromper o loop
  if (i === 5) {
      console.log("Condição atingida. Saindo do loop...");
      break; // Interrompe o loop quando i é igual a 5
  }
}

console.log("Loop encerrado.");
