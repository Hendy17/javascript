// Texto exemplo
const texto = "JavaScript é uma linguagem de programação versátil.";

// Função para verificar se uma palavra está presente no texto
function contemPalavra(texto, palavra) {
  if (texto.includes(palavra)) {
    console.log(`O texto contém a palavra "${palavra}".`);
  } else {
    console.log(`O texto não contém a palavra "${palavra}".`);
  }
}

// Verificando presença de palavras
contemPalavra(texto, "versátil");   // O texto contém a palavra "versátil".
contemPalavra(texto, "Python");     // O texto não contém a palavra "Python".
