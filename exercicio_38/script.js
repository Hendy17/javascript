let nums = [1, 2, 3, 4, 5, 6];
let nums2 = [1, 2, 3];
let nums3 = [1, 2, 3, 4, 5, 6, 7];
let nums4 = [10, 11, 12, 13];
let nums5 = [20, 21, 22, 23];

function interecaoEntreElementos(arr) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(`Elemento no índice ${index}: ${element}`);
  }
}

// Exemplo de chamadas da função
interecaoEntreElementos(nums);
interecaoEntreElementos(nums2);
interecaoEntreElementos(nums3);
interecaoEntreElementos(nums4);
interecaoEntreElementos(nums5);
