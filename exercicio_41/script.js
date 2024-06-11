let calculadora = {
  somar: function(a, b) {
    return a + b;
  },
  dividir: function(a , b) {
    if (a === 0) {
      return "Erro: Divisão por zero não é permitida";
    }
    return a / b;
  },
  multiplicar: function(a, b) {
    return a * b;
  },
  subtrair: function(a, b) {
    return a - b;
  },
};